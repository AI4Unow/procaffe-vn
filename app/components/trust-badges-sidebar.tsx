import Link from "next/link";
import products from "../../data/products.json";
import posts from "../../data/posts.json";

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

/* Pick 4 featured products (first 4 with valid images) */
const featuredProducts = products
    .filter((p) => getProductImage(p) !== "/images/placeholder-product.svg")
    .slice(0, 4);

/* Recent 3 blog posts */
const recentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

export default function TrustBadgesSidebar() {
    return (
        <aside className="trust-sidebar">
            {/* Trust Badges */}
            <div className="trust-badges-widget">
                <div className="trust-badge-item">
                    <span className="trust-badge-icon">🚚</span>
                    <div>
                        <strong>MIỄN PHÍ VẬN CHUYỂN</strong>
                    </div>
                </div>
                <div className="trust-badge-item">
                    <span className="trust-badge-icon">✅</span>
                    <div>
                        <strong>CAM KẾT CHÍNH HÃNG, GIẤY TỜ RÕ RÀNG</strong>
                    </div>
                </div>
                <div className="trust-badge-item">
                    <span className="trust-badge-icon">🔧</span>
                    <div>
                        <strong>LẮP ĐẶT MIỄN PHÍ Ở NỘI THÀNH</strong>
                        <p>Hồ Chí Minh, Hà Nội</p>
                    </div>
                </div>
                <div className="trust-badge-item">
                    <span className="trust-badge-icon">🛡️</span>
                    <div>
                        <strong>BẢO HÀNH, SỬA CHỮA TẠI NHÀ</strong>
                        <p>Hồ Chí Minh, Hà Nội</p>
                    </div>
                </div>
                <div className="trust-badge-item">
                    <span className="trust-badge-icon">📞</span>
                    <div>
                        <strong>CSKH TẬN TÌNH</strong>
                        <p>
                            <a href="tel:0904569878" className="trust-phone-link">
                                0904569878
                            </a>
                        </p>
                    </div>
                </div>
                <div className="trust-badge-item">
                    <span className="trust-badge-icon">💳</span>
                    <div>
                        <strong>TRẢ GÓP THẺ TÍN DỤNG</strong>
                        <p>Lãi suất 0% cho đơn hàng chỉ từ 3,5 triệu đồng</p>
                    </div>
                </div>
                <div className="trust-badge-item">
                    <span className="trust-badge-icon">⭐</span>
                    <div>
                        <strong>XẾP HẠNG SẢN PHẨM</strong>
                        <p>Sản phẩm bán chạy</p>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="trust-sidebar-section">
                <h3 className="trust-sidebar-heading">SẢN PHẨM NỔI BẬT</h3>
                <div className="trust-featured-list">
                    {featuredProducts.map((p) => (
                        <Link
                            key={p.id}
                            href={`/${p.slug}`}
                            className="trust-featured-item"
                        >
                            <img
                                src={getProductImage(p)}
                                alt={p.title}
                                loading="lazy"
                            />
                            <div>
                                <span className="trust-featured-name">
                                    {p.title.toUpperCase()}
                                </span>
                                <span className="trust-featured-price">
                                    Liên hệ
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* News */}
            <div className="trust-sidebar-section">
                <h3 className="trust-sidebar-heading">TIN TỨC</h3>
                <div className="trust-news-list">
                    {recentPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="trust-news-item"
                        >
                            {post.title}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
}
