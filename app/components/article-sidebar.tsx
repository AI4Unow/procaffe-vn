import Link from "next/link";
import posts from "../../data/posts.json";
import products from "../../data/products.json";
import TrustBadgesSidebar from "./trust-badges-sidebar";

const recentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

function formatVND(priceStr: string): string {
    const num = parseInt(priceStr, 10);
    if (isNaN(num) || num === 0) return "";
    return num.toLocaleString("vi-VN") + "đ";
}

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

/* Pick 4 popular products (those with sale_price or most recent) */
const featuredProducts = products
    .filter(
        (p) =>
            (p as typeof p & { sale_price?: string }).sale_price &&
            parseInt((p as typeof p & { sale_price?: string }).sale_price || "0", 10) > 0
    )
    .slice(0, 4);

/* Fallback to newest if no sale products */
const displayProducts =
    featuredProducts.length >= 4
        ? featuredProducts
        : products
            .filter((p) => getProductImage(p) !== "/images/placeholder-product.svg")
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 4);

export default function ArticleSidebar() {
    return (
        <aside className="article-sidebar">
            {/* Featured Products Widget */}
            <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Sản phẩm nổi bật</h3>
                <div className="sidebar-featured-products">
                    {displayProducts.map((product) => {
                        const p = product as typeof product & { regular_price?: string; sale_price?: string };
                        const price = p.sale_price
                            ? formatVND(p.sale_price)
                            : p.regular_price
                                ? formatVND(p.regular_price)
                                : "Liên hệ";
                        return (
                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="sidebar-product-item"
                            >
                                <div className="sidebar-product-thumb">
                                    <img
                                        src={getProductImage(product)}
                                        alt={product.title}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="sidebar-product-info">
                                    <span className="sidebar-product-name">{product.title}</span>
                                    <span className="sidebar-product-price">{price}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Bài viết mới</h3>
                {recentPosts.map((post) => (
                    <div key={post.id} className="sidebar-news-item">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="sidebar-news-title"
                        >
                            {post.title}
                        </Link>
                    </div>
                ))}
            </div>

            {/* CTA Widget */}
            <div className="sidebar-widget sidebar-cta-widget">
                <h3 className="sidebar-widget-title">Tư vấn miễn phí</h3>
                <div style={{ padding: "20px 16px", textAlign: "center" }}>
                    <div style={{ fontSize: 48, marginBottom: 12 }}>☕</div>
                    <p
                        style={{
                            fontSize: 14,
                            color: "#555",
                            lineHeight: 1.6,
                            marginBottom: 16,
                        }}
                    >
                        Liên hệ để được tư vấn giải pháp cà phê phù hợp nhất
                    </p>
                    <a
                        href="tel:0904569878"
                        style={{
                            display: "inline-block",
                            background: "var(--primary)",
                            color: "#fff",
                            padding: "10px 24px",
                            borderRadius: 8,
                            fontWeight: 700,
                            fontSize: 16,
                            textDecoration: "none",
                        }}
                    >
                        090.456.98.78
                    </a>
                </div>
            </div>

            {/* Trust Badges */}
            <TrustBadgesSidebar />
        </aside>
    );
}
