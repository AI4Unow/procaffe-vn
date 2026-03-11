import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";
import categories from "../../data/product-categories.json";
import products from "../../data/products.json";
import reviews from "../../data/reviews.json";

const BRAND_PARENT_ID = 350;

/* Brand categories with products */
const brandCategories = (categories as typeof categories)
    .filter((c) => c.parent === BRAND_PARENT_ID && c.count > 0)
    .sort((a, b) => b.count - a.count);

/* Brand logos from /images/brands/ with ID mapping */
const brandLogoMap: Record<string, number> = {
    "kees-van-der-westen": 1,
    puqpress: 2,
    cino: 3,
    // 4 = whip-it (no brand category in data)
    gimoka: 5,
    mahlkonig: 6,
    "barista-attitude": 7,
    fiorenzato: 8,
    bwt: 9,
    "bravilor-bonamat": 10,
    wega: 11,
    bialetti: 12,
    heritage: 13,
    gaggia: 14,
    lelit: 15,
    saeco: 16,
    // 17 = Eureka Oro variant
    eureka: 18,
    "coffee-queen": 19, // CREM brand logo
    synesso: 20,
    vitamix: 21,
};

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

function formatVND(priceStr: string): string {
    const num = parseInt(priceStr, 10);
    if (isNaN(num) || num === 0) return "";
    return num.toLocaleString("vi-VN") + "đ";
}

function extractPrice(product: (typeof products)[0]): {
    regular: string | null;
    sale: string | null;
} {
    const p = product as typeof product & { regular_price?: string; sale_price?: string };
    if (p.regular_price) {
        return {
            regular: formatVND(p.regular_price),
            sale: p.sale_price ? formatVND(p.sale_price) : null,
        };
    }
    return { regular: null, sale: null };
}

/* Get all products that belong to any brand category */
const brandCategoryNames = brandCategories.map((c) => c.name);
const brandProducts = products
    .filter((p) => p.categories?.some((c: string) => brandCategoryNames.includes(c)))
    .slice(0, 20);

/* Get recent reviews */
const recentReviews = (reviews as { product_title: string; author_name: string; rating: number; text: string; date: string; is_reply: boolean }[])
    .filter((r) => !r.is_reply && r.rating > 0)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

export const metadata = {
    title: "Thương hiệu | ProCaffe - Nhà phân phối máy pha cà phê chính hãng",
    description:
        "Khám phá các thương hiệu máy pha cà phê hàng đầu thế giới: Wega, Saeco, Gaggia, Lelit, Eureka, Bialetti, Mahlkönig và hơn 40 thương hiệu khác tại ProCaffe Việt Nam.",
};

export default function ThuongHieuPage() {
    return (
        <>
            <Header />

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Thương hiệu</span>
                </div>
            </div>

            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1>Thương hiệu</h1>
                    <p>
                        ProCaffe tự hào là nhà phân phối chính thức của hơn 40 thương hiệu
                        máy pha cà phê, máy xay cà phê và thiết bị pha chế hàng đầu thế giới
                        tại Việt Nam.
                    </p>
                </div>
            </section>

            {/* Brand Grid */}
            <section className="content-section">
                <div className="container">
                    <div className="thuong-hieu-grid">
                        {brandCategories.map((brand) => {
                            const logoId = brandLogoMap[brand.slug];
                            return (
                                <Link
                                    key={brand.id}
                                    href={`/products?cat=${brand.slug}`}
                                    className="thuong-hieu-card"
                                >
                                    <div className="thuong-hieu-logo">
                                        {logoId ? (
                                            <img
                                                src={`/images/brands/${logoId}.png`}
                                                alt={brand.name}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <span className="thuong-hieu-name-fallback">
                                                {brand.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="thuong-hieu-info">
                                        <h3>{brand.name}</h3>
                                        <span className="thuong-hieu-count">
                                            {brand.count} sản phẩm
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Brand Products */}
            <section className="section" style={{ background: "#f9f9f9" }}>
                <div className="container">
                    <div className="shop-title-bar">
                        <div className="shop-title-line" />
                        <h2>Sản phẩm nổi bật</h2>
                        <div className="shop-title-line" />
                    </div>

                    <div className="product-grid product-grid-4col">
                        {brandProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/${product.slug}`}
                                className="product-card"
                            >
                                <div className="product-card-image">
                                    <img
                                        src={getProductImage(product)}
                                        alt={product.title}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="product-card-info">
                                    <h3 className="product-card-title">{product.title}</h3>
                                    <div className="product-card-price">
                                        {(() => {
                                            const pr = extractPrice(product);
                                            if (pr.sale)
                                                return (
                                                    <>
                                                        <span className="price-original">
                                                            {pr.regular}
                                                        </span>{" "}
                                                        <span className="price-sale">
                                                            {pr.sale}
                                                        </span>
                                                    </>
                                                );
                                            return pr.regular || "Liên hệ";
                                        })()}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "24px" }}>
                        <Link href="/products" className="btn-primary">
                            Xem tất cả sản phẩm →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="section">
                <div className="container">
                    <div className="shop-title-bar">
                        <div className="shop-title-line" />
                        <h2>Đánh giá khách hàng</h2>
                        <div className="shop-title-line" />
                    </div>

                    <p style={{ textAlign: "center", color: "#666", marginBottom: "32px" }}>
                        Có {reviews.length.toLocaleString("vi-VN")} đánh giá của khách hàng
                    </p>

                    <div className="reviews-list">
                        {recentReviews.map((review, i) => (
                            <div key={i} className="review-item">
                                <div className="review-header">
                                    <div className="review-avatar">
                                        {review.author_name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <strong className="review-author">
                                            {review.author_name}
                                        </strong>
                                        <div className="review-stars">
                                            {"★".repeat(review.rating)}
                                            {"☆".repeat(5 - review.rating)}
                                        </div>
                                    </div>
                                    <span className="review-date">
                                        {new Date(review.date).toLocaleDateString("vi-VN")}
                                    </span>
                                </div>
                                <p className="review-product-name">
                                    {review.product_title}
                                </p>
                                <p className="review-content">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
