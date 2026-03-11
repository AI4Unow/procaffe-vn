"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/header";
import Footer from "../../components/footer";
import TrustBadgesSidebar from "../../components/trust-badges-sidebar";
import ProductReviewSection from "../../components/product-review-section";
import ProductColorSwatches from "../../components/product-color-swatches";
import products from "../../../data/products.json";
import categories from "../../../data/product-categories.json";

function getProductImage(product: (typeof products)[0]): string {
    if (
        product.featured_image &&
        !product.featured_image.includes("youtube") &&
        !product.featured_image.includes("fbcdn") &&
        (product.featured_image.startsWith("http") || product.featured_image.startsWith("/images/"))
    ) {
        return product.featured_image;
    }
    return "/images/placeholder-product.svg";
}

function extractGalleryImages(content: string): string[] {
    const imgs: string[] = [];
    const re = /<img[^>]+src="([^"]+)"/g;
    let m;
    while ((m = re.exec(content)) !== null) {
        if (
            (m[1].includes("/images/") || m[1].includes("procaffe.vn")) &&
            !m[1].includes("icon") &&
            !m[1].includes("banner") &&
            !imgs.includes(m[1])
        ) {
            imgs.push(m[1]);
        }
    }
    return imgs.slice(0, 8);
}

function getCategoryBreadcrumb(
    product: (typeof products)[0]
): { name: string; slug: string } | null {
    const cats = product.categories || [];
    for (const catName of cats) {
        const cat = categories.find((c) => c.name === catName);
        if (cat && cat.parent !== 350 && cat.slug !== "may-pha-ca-phe-khuyen-mai") {
            return { name: cat.name, slug: cat.slug };
        }
    }
    return null;
}

function formatVND(priceStr: string): string {
    const num = parseInt(priceStr, 10);
    if (isNaN(num) || num === 0) return "";
    return num.toLocaleString("vi-VN") + "đ";
}

function extractPrice(product: (typeof products)[0]): {
    regular: string | null;
    sale: string | null;
    salePercent: number | null;
} {
    const p = product as typeof product & { regular_price?: string; sale_price?: string };

    // Use JSON fields first (available for all 611 products)
    if (p.regular_price) {
        const regNum = parseInt(p.regular_price, 10);
        const saleNum = p.sale_price ? parseInt(p.sale_price, 10) : 0;
        const percent = (regNum > 0 && saleNum > 0 && saleNum < regNum)
            ? Math.round(((regNum - saleNum) / regNum) * 100)
            : null;
        return {
            regular: formatVND(p.regular_price),
            sale: p.sale_price ? formatVND(p.sale_price) : null,
            salePercent: percent,
        };
    }

    // Fallback: extract from HTML content
    const text = (product.excerpt || "") + " " + (product.content || "");
    const priceRegex = /(\d{1,3}(?:\.\d{3}){1,3})\s*(?:đ|VND|₫)/i;
    const match = text.match(priceRegex);
    if (match) {
        return { regular: match[1] + "đ", sale: null, salePercent: null };
    }
    return { regular: null, sale: null, salePercent: null };
}

function ProductDetailClient({ slug }: { slug: string }) {
    const product = products.find((p) => p.slug === slug);
    const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">(
        "description"
    );
    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) return notFound();

    const mainImage = getProductImage(product);
    const galleryImages = extractGalleryImages(product.content || "");
    const allImages = [
        mainImage,
        ...galleryImages.filter((img) => img !== mainImage),
    ].slice(0, 6);

    const catBreadcrumb = getCategoryBreadcrumb(product);

    /* Related products: same first category */
    const related = products
        .filter(
            (p) =>
                p.id !== product.id &&
                p.categories?.some((c: string) =>
                    product.categories?.includes(c)
                )
        )
        .slice(0, 4);

    /* Extract specs table from content if available */
    const hasSpecsTable =
        product.content?.includes("<table") ||
        product.content?.includes("Thông số");

    const price = extractPrice(product);

    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    {catBreadcrumb && (
                        <>
                            <Link
                                href={`/products?cat=${catBreadcrumb.slug}`}
                            >
                                {catBreadcrumb.name}
                            </Link>
                            <span className="breadcrumb-sep">/</span>
                        </>
                    )}
                    <span>{product.title}</span>
                </div>
            </div>

            <section className="section product-detail-section">
                <div className="container">
                    <div className="product-detail-3col">
                        {/* Gallery */}
                        <div className="product-gallery">
                            <div className="product-main-image">
                                {price.salePercent && (
                                    <span className="sale-badge">SALE {price.salePercent}%</span>
                                )}
                                <img
                                    src={allImages[selectedImage] || allImages[0]}
                                    alt={product.title}
                                />
                            </div>
                            {allImages.length > 1 && (
                                <div className="product-thumbnails">
                                    {allImages.map((img, i) => (
                                        <div
                                            key={i}
                                            className={`product-thumb ${selectedImage === i ? "active" : ""}`}
                                            onClick={() => setSelectedImage(i)}
                                        >
                                            <img
                                                src={img}
                                                alt={`${product.title} ${i + 1}`}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="product-info">
                            <h1 className="product-detail-title">
                                {product.title}
                            </h1>

                            <div className="product-detail-price">
                                <span className="price-label">Giá:</span>
                                {price.sale ? (
                                    <>
                                        <span className="price-original">{price.regular}</span>
                                        <span className="price-value price-sale">{price.sale}</span>
                                    </>
                                ) : (
                                    <span className="price-value">{price.regular || "Liên hệ"}</span>
                                )}
                            </div>

                            {/* Color Swatches */}
                            <ProductColorSwatches
                                title={product.title}
                                content={product.content || ""}
                            />

                            <p className="product-vat-note">
                                Giá đã bao gồm VAT. Trả góp lãi suất 0%
                            </p>

                            {product.excerpt && (
                                <div className="product-excerpt">
                                    <p>{product.excerpt}</p>
                                </div>
                            )}

                            <div className="product-actions">
                                <a
                                    href="tel:09045698782"
                                    className="btn-primary"
                                >
                                    📞 Gọi ngay: 090.456.98.78
                                </a>
                                <a
                                    href="https://zalo.me/1309907900230208730"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline"
                                >
                                    💬 Chat Zalo
                                </a>
                            </div>

                            {/* Callback Form */}
                            <div className="callback-form">
                                <p className="callback-label">
                                    Để lại số điện thoại, chúng tôi sẽ gọi lại
                                    ngay
                                </p>
                                <div className="callback-input-row">
                                    <input
                                        type="tel"
                                        placeholder="Số điện thoại của bạn"
                                        className="callback-input"
                                    />
                                    <button className="callback-btn">
                                        Gửi
                                    </button>
                                </div>
                            </div>

                            {/* Category tags */}
                            <div className="product-meta-section">
                                <span className="meta-label-inline">
                                    Danh mục:
                                </span>
                                {product.categories?.map((cat: string) => (
                                    <Link
                                        key={cat}
                                        href={`/products?cat=${encodeURIComponent(cat)}`}
                                        className="product-cat-tag"
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Trust Badges Sidebar */}
                        <TrustBadgesSidebar />
                    </div>

                    {/* Product Tabs */}
                    <div className="product-tabs">
                        <div className="product-tabs-nav">
                            <button
                                className={
                                    activeTab === "description" ? "active" : ""
                                }
                                onClick={() => setActiveTab("description")}
                            >
                                Mô tả
                            </button>
                            {hasSpecsTable && (
                                <button
                                    className={
                                        activeTab === "specs" ? "active" : ""
                                    }
                                    onClick={() => setActiveTab("specs")}
                                >
                                    Thông số kỹ thuật
                                </button>
                            )}
                            <button
                                className={
                                    activeTab === "reviews" ? "active" : ""
                                }
                                onClick={() => setActiveTab("reviews")}
                            >
                                Đánh giá
                            </button>
                        </div>

                        <div className="product-tabs-content">
                            {activeTab === "description" && product.content && (
                                <div
                                    className="product-content-body"
                                    dangerouslySetInnerHTML={{
                                        __html: product.content,
                                    }}
                                />
                            )}
                            {activeTab === "specs" && product.content && (
                                <div
                                    className="product-content-body product-specs-only"
                                    dangerouslySetInnerHTML={{
                                        __html: product.content,
                                    }}
                                />
                            )}
                            {activeTab === "reviews" && (
                                <ProductReviewSection
                                    slug={slug}
                                    productTitle={product.title}
                                />
                            )}
                        </div>
                    </div>

                    {/* Related Products */}
                    {related.length > 0 && (
                        <div className="related-products">
                            <div className="section-header">
                                <h2>Sản phẩm liên quan</h2>
                                <div className="accent-line" />
                            </div>
                            <div className="product-grid">
                                {related.map((p) => (
                                    <Link
                                        key={p.id}
                                        href={`/products/${p.slug}`}
                                        className="product-card"
                                    >
                                        <div className="product-card-image">
                                            <img
                                                src={getProductImage(p)}
                                                alt={p.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-title">
                                                {p.title}
                                            </h3>
                                            <div className="product-card-price">
                                                {(() => {
                                                    const pr = extractPrice(p);
                                                    if (pr.sale) return <><span className="price-original">{pr.regular}</span> <span className="price-sale">{pr.sale}</span></>;
                                                    return pr.regular || "Liên hệ";
                                                })()}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    /* Use React.use() pattern for async params */
    const { slug } = use(params);
    return <ProductDetailClient slug={slug} />;
}
