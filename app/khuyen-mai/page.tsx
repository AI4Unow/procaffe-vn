import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import TrustBadgesSidebar from "../components/trust-badges-sidebar";
import Link from "next/link";
import products from "../../data/products.json";
import categories from "../../data/product-categories.json";

export const metadata = {
    title: "Khuyến mãi | ProCaffe - Máy pha cà phê giảm giá",
    description: "Chương trình khuyến mãi máy pha cà phê, máy xay cà phê tại ProCaffe. Giảm giá hấp dẫn cho các dòng máy Saeco, Gaggia, Eureka, Lelit.",
};

const KHUYEN_MAI_SLUG = "may-pha-ca-phe-khuyen-mai";

const promoProducts = products
    .filter((p) => p.category_slugs?.includes(KHUYEN_MAI_SLUG))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
    const text = (product.excerpt || "") + " " + (product.content || "");
    const priceRegex = /(\d{1,3}(?:\.\d{3}){1,3})\s*(?:đ|VND|₫)/i;
    const match = text.match(priceRegex);
    if (match) return { regular: match[1] + "đ", sale: null };
    return { regular: null, sale: null };
}

/* Sidebar categories matching products page */
const SIDEBAR_CATEGORY_ORDER = [
    "may-pha-ca-phe-khuyen-mai",
    "ca-phe-rang-xay",
    "may-pha-ca-phe",
    "may-xay-ca-phe",
    "may-nen-ca-phe",
    "may-xay-sinh-to-vitamix",
    "am-pha-ca-phe",
    "tach-ca-phe",
    "dung-cu-barista",
    "dung-cu-pha-che-phu-kien",
    "loc-nuoc",
    "linh-kien-may-pha-ca-phe",
    "hoa-chat-ve-sinh-may",
];

const sidebarCategories = SIDEBAR_CATEGORY_ORDER.map((slug) =>
    categories.find((c) => c.slug === slug)
).filter(Boolean) as typeof categories;

export default function PromotionsPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Máy pha cà phê Khuyến Mãi</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="page-layout">
                        {/* Sidebar */}
                        <aside className="sidebar">
                            <div className="sidebar-block">
                                <h3 className="sidebar-title">Danh mục sản phẩm</h3>
                                <ul className="sidebar-categories">
                                    {sidebarCategories.map((cat) => (
                                        <li key={cat.id}>
                                            <Link
                                                href={
                                                    cat.slug === KHUYEN_MAI_SLUG
                                                        ? "/khuyen-mai"
                                                        : `/products?cat=${cat.slug}`
                                                }
                                                className={
                                                    cat.slug === KHUYEN_MAI_SLUG
                                                        ? "active"
                                                        : ""
                                                }
                                            >
                                                {cat.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Phone CTA */}
                            <div className="sidebar-cta">
                                <div className="sidebar-cta-icon">📞</div>
                                <h4>Cần tư vấn?</h4>
                                <p>
                                    Gọi ngay để được hỗ trợ chọn sản phẩm phù hợp
                                </p>
                                <a
                                    href="tel:09045698782"
                                    className="sidebar-cta-btn"
                                >
                                    090.456.98.78
                                </a>
                            </div>
                        </aside>

                        {/* Product Grid Content */}
                        <div className="page-content">
                            {/* Promo Banner */}
                            <div className="promo-banner">
                                <img
                                    src="https://procaffe.vn/wp-content/uploads/2026/03/banner-website.jpg"
                                    alt="Khuyến mãi tháng 3"
                                    loading="lazy"
                                />
                            </div>

                            <div className="shop-title-bar">
                                <div className="shop-title-line" />
                                <h1>MÁY PHA CÀ PHÊ KHUYẾN MÃI</h1>
                                <div className="shop-title-line" />
                            </div>

                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#666",
                                    marginBottom: 24,
                                    fontSize: 15,
                                }}
                            >
                                Hiển thị {promoProducts.length} sản phẩm khuyến
                                mãi
                            </p>

                            <div className="product-grid product-grid-3col">
                                {promoProducts.map((product) => {
                                    const price = extractPrice(product);
                                    return (
                                        <Link
                                            key={product.id}
                                            href={`/products/${product.slug}`}
                                            className="product-card"
                                        >
                                            <div className="product-card-image">
                                                <img
                                                    src={getProductImage(
                                                        product
                                                    )}
                                                    alt={product.title}
                                                    loading="lazy"
                                                />
                                                <span className="promo-badge">
                                                    KM
                                                </span>
                                            </div>
                                            <div className="product-card-info">
                                                <h3 className="product-card-title">
                                                    {product.title}
                                                </h3>
                                                <div className="product-card-price">
                                                    {price.sale ? (
                                                        <><span className="price-original">{price.regular}</span> <span className="price-sale">{price.sale}</span></>
                                                    ) : (
                                                        price.regular || "Liên hệ"
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {promoProducts.length === 0 && (
                                <p
                                    style={{
                                        color: "#888",
                                        fontStyle: "italic",
                                        textAlign: "center",
                                        padding: "40px 0",
                                    }}
                                >
                                    Chưa có sản phẩm khuyến mãi nào.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
