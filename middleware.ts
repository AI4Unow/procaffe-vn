import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import products from "./data/products.json";

/**
 * Precompute the set of product slugs for O(1) lookup.
 * Also build a decoded→encoded map for slugs with URL-encoded characters.
 */
const productSlugs = new Set(
    (products as { slug: string }[]).map((p) => p.slug)
);

/* Map decoded slugs back to their stored (possibly encoded) form */
const decodedToStored = new Map<string, string>();
for (const slug of productSlugs) {
    try {
        const decoded = decodeURIComponent(slug);
        if (decoded !== slug) decodedToStored.set(decoded, slug);
    } catch { /* ignore malformed URIs */ }
}

/**
 * Known top-level app routes that should NOT be intercepted.
 * Prevents collisions with real pages.
 */
const APP_ROUTES = new Set([
    "products",
    "blog",
    "contact",
    "lien-he",
    "gioi-thieu",
    "thuong-hieu",
    "dich-vu",
    "tin-tuc",
    "bai-viet",
    "su-kien",
    "khuyen-mai",
    "chinh-sach",
    "tuyen-dung",
    "cac-hoat-dong",
    "doi-tac",
    "khach-hang",
    "thanh-vien",
    "videos",
    "api",
    "_next",
    "images",
    "favicon.ico",
]);

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only handle single-segment paths (e.g., /some-slug)
    // Skip paths with multiple segments, query strings handled by Next.js
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length !== 1) return NextResponse.next();

    const slug = segments[0];

    // Skip known app routes and static assets
    if (APP_ROUTES.has(slug)) return NextResponse.next();
    if (slug.includes(".")) return NextResponse.next(); // static files

    // If it's a known product slug, rewrite to /products/:slug
    if (productSlugs.has(slug)) {
        const url = request.nextUrl.clone();
        url.pathname = `/products/${slug}`;
        return NextResponse.rewrite(url);
    }

    // Try URL-decoded version (handles slugs with encoded chars like %c2%b1 → ±)
    try {
        const decoded = decodeURIComponent(slug);
        const storedSlug = decodedToStored.get(decoded) || (productSlugs.has(decoded) ? decoded : null);
        if (storedSlug) {
            const url = request.nextUrl.clone();
            url.pathname = `/products/${storedSlug}`;
            return NextResponse.rewrite(url);
        }
    } catch { /* ignore */ }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico
         * - public files with extensions
         */
        "/((?!_next/static|_next/image|favicon\\.ico|.*\\..*).*)",
    ],
};
