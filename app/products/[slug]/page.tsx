import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/header";
import Footer from "../../components/footer";
import products from "../../../data/products.json";

export function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

function getProductImage(product: (typeof products)[0]): string {
    if (
        product.featured_image &&
        !product.featured_image.includes("youtube") &&
        !product.featured_image.includes("fbcdn") &&
        product.featured_image.startsWith("http")
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
            m[1].includes("procaffe.vn") &&
            !m[1].includes("icon") &&
            !m[1].includes("banner") &&
            !imgs.includes(m[1])
        ) {
            imgs.push(m[1]);
        }
    }
    return imgs.slice(0, 8);
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
    if (!product) return notFound();

    const mainImage = getProductImage(product);
    const galleryImages = extractGalleryImages(product.content || "");
    const allImages = [
        mainImage,
        ...galleryImages.filter((img) => img !== mainImage),
    ].slice(0, 6);

    /* Related products: same first category */
    const related = products
        .filter(
            (p) =>
                p.id !== product.id &&
                p.categories?.some((c: string) => product.categories?.includes(c))
        )
        .slice(0, 4);

    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/products">Sản phẩm</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>{product.title}</span>
                </div>
            </div>

            <section className="section product-detail-section">
                <div className="container">
                    <div className="product-detail">
                        {/* Gallery */}
                        <div className="product-gallery">
                            <div className="product-main-image">
                                <img src={allImages[0]} alt={product.title} />
                            </div>
                            {allImages.length > 1 && (
                                <div className="product-thumbnails">
                                    {allImages.slice(1).map((img, i) => (
                                        <div key={i} className="product-thumb">
                                            <img src={img} alt={`${product.title} ${i + 2}`} loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="product-info">
                            <div className="product-categories-list">
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

                            <h1 className="product-detail-title">{product.title}</h1>

                            <div className="product-detail-price">
                                <span className="price-label">Giá:</span>
                                <span className="price-value">Liên hệ</span>
                            </div>

                            {product.excerpt && (
                                <div className="product-excerpt">
                                    <p>{product.excerpt}</p>
                                </div>
                            )}

                            <div className="product-actions">
                                <a href="tel:09045698782" className="btn-primary">
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

                            <div className="product-features">
                                <div className="product-feature">
                                    <span>✓</span> Hàng chính hãng — Bảo hành 12-36 tháng
                                </div>
                                <div className="product-feature">
                                    <span>🚚</span> Miễn phí vận chuyển nội thành HCM & HN
                                </div>
                                <div className="product-feature">
                                    <span>🔧</span> Hỗ trợ lắp đặt & đào tạo sử dụng
                                </div>
                                <div className="product-feature">
                                    <span>↩️</span> Đổi trả trong 7 ngày
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product content / description */}
                    {product.content && (
                        <div className="product-description">
                            <h2>Mô tả sản phẩm</h2>
                            <div
                                className="product-content-body"
                                dangerouslySetInnerHTML={{ __html: product.content }}
                            />
                        </div>
                    )}

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
                                            <span className="product-card-category">
                                                {(p.categories || [])[0] || ""}
                                            </span>
                                            <h3 className="product-card-title">{p.title}</h3>
                                            <div className="product-card-price">Liên hệ</div>
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
