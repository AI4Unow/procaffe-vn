/**
 * Download remaining procaffe.vn images from content/excerpt fields
 * in products.json and posts.json, then replace URLs with local paths.
 */
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname, '../public/images');
const PRODUCTS_DL = path.join(BASE_DIR, 'products-dl');
const POSTS_DL = path.join(BASE_DIR, 'posts-dl');
const PRODUCTS_JSON = path.resolve(__dirname, '../data/products.json');
const POSTS_JSON = path.resolve(__dirname, '../data/posts.json');

const CONCURRENCY = 15;
let completed = 0;
let failed = 0;
let skipped = 0;

function sanitizeFilename(urlStr) {
  try {
    const u = new URL(urlStr.replace(/\\+$/g, ''));
    const basename = path.basename(u.pathname);
    return basename.replace(/[^a-zA-Z0-9._-]/g, '_');
  } catch {
    return 'fallback_' + Math.random().toString(36).slice(2, 8) + '.jpg';
  }
}

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve) => {
    // Clean URL
    fileUrl = fileUrl.replace(/\\+$/g, '');
    
    if (fs.existsSync(destPath)) {
      const stat = fs.statSync(destPath);
      if (stat.size > 500) {
        skipped++;
        resolve(true);
        return;
      }
    }

    const protocol = fileUrl.startsWith('https') ? https : http;
    const req = protocol.get(fileUrl, { timeout: 10000 }, (res) => {
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
        if (completed % 100 === 0) {
          console.log(`  Progress: ${completed} downloaded, ${failed} failed, ${skipped} skipped`);
        }
        resolve(true);
      });
      file.on('error', () => { failed++; resolve(false); });
    });
    req.on('error', () => { failed++; resolve(false); });
    req.on('timeout', () => { req.destroy(); failed++; resolve(false); });
  });
}

async function processInBatches(tasks, concurrency) {
  for (let i = 0; i < tasks.length; i += concurrency) {
    const batch = tasks.slice(i, i + concurrency);
    await Promise.all(batch.map(t => t()));
  }
}

function extractUrls(text) {
  if (!text) return [];
  const regex = /https?:\/\/procaffe\.vn\/wp-content\/uploads\/[^\s"',)}\]\\]+/g;
  const matches = text.match(regex) || [];
  return matches.map(u => u.replace(/\\+$/g, ''));
}

async function processJsonFile(jsonPath, dlDir, prefix) {
  console.log(`\n=== Processing ${path.basename(jsonPath)} ===`);
  completed = 0; failed = 0; skipped = 0;
  
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const urlToLocal = {};
  const tasks = [];

  // Extract all URLs from all string fields
  for (const item of data) {
    const text = JSON.stringify(item);
    const urls = extractUrls(text);
    for (const u of urls) {
      if (!urlToLocal[u]) {
        const filename = sanitizeFilename(u);
        // Avoid filename collisions by adding a hash prefix
        const shortHash = Buffer.from(u).toString('base64url').slice(0, 6);
        const uniqueFilename = `${shortHash}_${filename}`;
        urlToLocal[u] = `/images/${prefix}/${uniqueFilename}`;
        tasks.push(() => downloadFile(u, path.join(dlDir, uniqueFilename)));
      }
    }
  }

  console.log(`Found ${Object.keys(urlToLocal).length} unique image URLs`);
  if (tasks.length > 0) {
    await processInBatches(tasks, CONCURRENCY);
  }
  console.log(`Done: ${completed} downloaded, ${failed} failed, ${skipped} skipped`);

  // Replace all URLs in all string fields
  let replacedCount = 0;
  for (const item of data) {
    for (const key of Object.keys(item)) {
      if (typeof item[key] === 'string' && item[key].includes('procaffe.vn/wp-content')) {
        let val = item[key];
        for (const [origUrl, localUrl] of Object.entries(urlToLocal)) {
          if (val.includes(origUrl)) {
            val = val.split(origUrl).join(localUrl);
            replacedCount++;
          }
        }
        item[key] = val;
      }
    }
  }
  
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Replaced ${replacedCount} URL occurrences in ${path.basename(jsonPath)}`);
}

async function main() {
  await processJsonFile(PRODUCTS_JSON, PRODUCTS_DL, 'products-dl');
  await processJsonFile(POSTS_JSON, POSTS_DL, 'posts-dl');
  
  // Verify
  const pRemaining = (fs.readFileSync(PRODUCTS_JSON, 'utf-8').match(/procaffe\.vn\/wp-content/g) || []).length;
  const postRemaining = (fs.readFileSync(POSTS_JSON, 'utf-8').match(/procaffe\.vn\/wp-content/g) || []).length;
  console.log(`\n=== Verification ===`);
  console.log(`Products.json remaining procaffe.vn refs: ${pRemaining}`);
  console.log(`Posts.json remaining procaffe.vn refs: ${postRemaining}`);
}

main().catch(console.error);
