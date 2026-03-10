/**
 * Download all procaffe.vn product images to local /public/images/products/ directory
 * and update products.json to reference local paths.
 * Also handles posts.json featured images.
 */
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const BASE_DIR = path.resolve(__dirname, '../public/images');
const PRODUCTS_DIR = path.join(BASE_DIR, 'products-dl');
const POSTS_DIR = path.join(BASE_DIR, 'posts-dl');
const PRODUCTS_JSON = path.resolve(__dirname, '../data/products.json');
const POSTS_JSON = path.resolve(__dirname, '../data/posts.json');

// Ensure directories exist
[PRODUCTS_DIR, POSTS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const CONCURRENCY = 10;
let completed = 0;
let failed = 0;
let skipped = 0;

function sanitizeFilename(urlStr) {
  const parsed = url.parse(urlStr);
  const pathname = parsed.pathname || '';
  // Use last part of path as filename
  const basename = path.basename(pathname);
  // Remove query params and sanitize
  return basename.replace(/[^a-zA-Z0-9._-]/g, '_');
}

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve) => {
    if (fs.existsSync(destPath)) {
      const stat = fs.statSync(destPath);
      if (stat.size > 500) {
        skipped++;
        resolve(true);
        return;
      }
    }

    const protocol = fileUrl.startsWith('https') ? https : http;
    const req = protocol.get(fileUrl, { timeout: 15000 }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadFile(res.headers.location, destPath).then(resolve);
        return;
      }
      if (res.statusCode !== 200) {
        failed++;
        resolve(false);
        return;
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        completed++;
        if (completed % 50 === 0) {
          console.log(`Progress: ${completed} downloaded, ${failed} failed, ${skipped} skipped`);
        }
        resolve(true);
      });
      file.on('error', () => {
        failed++;
        resolve(false);
      });
    });
    req.on('error', () => {
      failed++;
      resolve(false);
    });
    req.on('timeout', () => {
      req.destroy();
      failed++;
      resolve(false);
    });
  });
}

async function processInBatches(tasks, concurrency) {
  const results = [];
  for (let i = 0; i < tasks.length; i += concurrency) {
    const batch = tasks.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(t => t()));
    results.push(...batchResults);
  }
  return results;
}

async function main() {
  console.log('=== Downloading Product Images ===');
  
  const products = JSON.parse(fs.readFileSync(PRODUCTS_JSON, 'utf-8'));
  const urlToLocal = {};
  const tasks = [];

  // Collect unique URLs and create download tasks
  for (const product of products) {
    if (product.featured_image && product.featured_image.includes('procaffe.vn')) {
      const imgUrl = product.featured_image;
      if (!urlToLocal[imgUrl]) {
        const filename = sanitizeFilename(imgUrl);
        const localPath = `/images/products-dl/${filename}`;
        urlToLocal[imgUrl] = localPath;
        tasks.push(() => downloadFile(imgUrl, path.join(PRODUCTS_DIR, filename)));
      }
    }
  }

  console.log(`Found ${Object.keys(urlToLocal).length} unique product images to download`);
  await processInBatches(tasks, CONCURRENCY);
  console.log(`Products: ${completed} downloaded, ${failed} failed, ${skipped} skipped`);

  // Update products.json
  let updatedCount = 0;
  for (const product of products) {
    if (product.featured_image && urlToLocal[product.featured_image]) {
      product.featured_image = urlToLocal[product.featured_image];
      updatedCount++;
    }
    // Also update gallery images in content/excerpt if they're simple URLs
    if (product.content) {
      for (const [origUrl, localUrl] of Object.entries(urlToLocal)) {
        if (product.content.includes(origUrl)) {
          product.content = product.content.split(origUrl).join(localUrl);
        }
      }
    }
  }
  fs.writeFileSync(PRODUCTS_JSON, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`Updated ${updatedCount} product references in products.json`);

  // Now handle posts
  console.log('\n=== Downloading Post Images ===');
  completed = 0;
  failed = 0;
  skipped = 0;

  const posts = JSON.parse(fs.readFileSync(POSTS_JSON, 'utf-8'));
  const postUrlToLocal = {};
  const postTasks = [];

  for (const post of posts) {
    if (post.featured_image && post.featured_image.includes('procaffe.vn')) {
      const imgUrl = post.featured_image;
      if (!postUrlToLocal[imgUrl]) {
        const filename = sanitizeFilename(imgUrl);
        const localPath = `/images/posts-dl/${filename}`;
        postUrlToLocal[imgUrl] = localPath;
        postTasks.push(() => downloadFile(imgUrl, path.join(POSTS_DIR, filename)));
      }
    }
  }

  console.log(`Found ${Object.keys(postUrlToLocal).length} unique post images to download`);
  await processInBatches(postTasks, CONCURRENCY);
  console.log(`Posts: ${completed} downloaded, ${failed} failed, ${skipped} skipped`);

  // Update posts.json
  let postUpdatedCount = 0;
  for (const post of posts) {
    if (post.featured_image && postUrlToLocal[post.featured_image]) {
      post.featured_image = postUrlToLocal[post.featured_image];
      postUpdatedCount++;
    }
  }
  fs.writeFileSync(POSTS_JSON, JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`Updated ${postUpdatedCount} post references in posts.json`);

  console.log('\n=== Done ===');
}

main().catch(console.error);
