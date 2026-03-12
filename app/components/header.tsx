"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProductMegaMenu from "./product-mega-menu";

const phoneNumbers = [
    { label: "CSKH", number: "090.456.98.78" },
    { label: "Bán lẻ Nam Bộ", number: "0833.06.60.66" },
    { label: "Bán lẻ Bắc Trung Bộ", number: "0898.00.18.78" },
    { label: "Đại lý", number: "0904.86.08.78" },
    { label: "Khách sạn", number: "0936.10.28.78" },
];

const navItems = [
    {
        label: "Giới thiệu",
        href: "/gioi-thieu",
        children: [
            { label: "Sứ mạng - Tầm nhìn", href: "/gioi-thieu#su-mang" },
            { label: "Các hoạt động", href: "/cac-hoat-dong" },
            { label: "Đối tác", href: "/doi-tac" },
            { label: "Khách hàng", href: "/khach-hang" },
            { label: "Nhà phân phối", href: "/gioi-thieu#doanh-nghiep" },
        ],
    },
    {
        label: "Sản phẩm",
        href: "/products",
        children: [
            { label: "Máy pha cappuccino tự động", href: "/products?cat=may-pha-ca-phe" },
            { label: "Máy pha espresso tự động", href: "/products?cat=may-pha-ca-phe" },
            { label: "Máy pha espresso bán tự động", href: "/products?cat=may-pha-ca-phe" },
            { label: "Máy pha cà phê Capsule-Pod", href: "/products?cat=may-pha-ca-phe" },
            { label: "Ấm pha cà phê Bialetti", href: "/products?cat=am-pha-ca-phe" },
            { label: "Máy pha Specialty coffee", href: "/products?cat=may-pha-ca-phe" },
            { label: "Máy xay cà phê", href: "/products?cat=may-xay-ca-phe" },
            { label: "Máy xay Vitamix", href: "/products?cat=vitamix" },
            { label: "Máy bán cà phê tự động", href: "/products?cat=may-pha-ca-phe" },
            { label: "Cà phê rang xay", href: "/products?cat=ca-phe-rang-xay" },
            { label: "Phụ kiện - Phụ tùng", href: "/products?cat=phu-kien" },
        ],
    },
    {
        label: "Thương hiệu",
        href: "/thuong-hieu",
        children: [
            { label: "Astoria", href: "/products?cat=astoria" },
            { label: "Baratza", href: "/products?cat=baratza" },
            { label: "Barista Attitude", href: "/products?cat=barista-attitude" },
            { label: "Bialetti", href: "/products?cat=bialetti" },
            { label: "Bravilor Bonamat", href: "/products?cat=bravilor-bonamat" },
            { label: "BWT", href: "/products?cat=bwt" },
            { label: "Casadio", href: "/products?cat=casadio" },
            { label: "Cino", href: "/products?cat=cino" },
            { label: "CREM", href: "/products?cat=coffee-queen" },
            { label: "Cunill", href: "/products?cat=cunill" },
            { label: "Donlim", href: "/products?cat=donlim" },
            { label: "Dr.Coffee", href: "/products?cat=dr-coffee" },
            { label: "Eureka", href: "/products?cat=eureka" },
            { label: "Expobar", href: "/products?cat=expobar" },
            { label: "Faema", href: "/products?cat=faema" },
            { label: "Fiorenzato", href: "/products?cat=fiorenzato" },
            { label: "Gaggia", href: "/products?cat=gaggia" },
            { label: "Gimoka", href: "/products?cat=gimoka" },
            { label: "Heritage", href: "/products?cat=heritage" },
            { label: "Kees van der Westen", href: "/products?cat=kees-van-der-westen" },
            { label: "Konitz", href: "/products?cat=konitz" },
            { label: "Krups", href: "/products?cat=krups" },
            { label: "Kuvings", href: "/products?cat=kuvings" },
            { label: "La Pavoni", href: "/products?cat=la-pavoni" },
            { label: "La Spaziale", href: "/products?cat=la-spaziale" },
            { label: "Lelit", href: "/products?cat=lelit" },
            { label: "Macap", href: "/products?cat=macap" },
            { label: "Mahlkönig", href: "/products?cat=mahlkonig" },
            { label: "Procaffe", href: "/products?cat=procaffe" },
            { label: "PUQpress", href: "/products?cat=puqpress" },
            { label: "Saeco", href: "/products?cat=saeco" },
            { label: "Saeco Capsule", href: "/products?cat=saeco-capsule" },
            { label: "Saeco Horeca", href: "/products?cat=saeco-horeca" },
            { label: "Saeco Vending", href: "/products?cat=saeco-vending" },
            { label: "Synesso", href: "/products?cat=synesso" },
            { label: "Turando", href: "/products?cat=turando" },
            { label: "Vitamix", href: "/products?cat=vitamix" },
            { label: "Waeco", href: "/products?cat=waeco" },
            { label: "Wega", href: "/products?cat=wega" },
            { label: "WPM", href: "/products?cat=wpm" },
        ],
    },
    {
        label: "Dịch vụ",
        href: "/dich-vu",
        children: [
            { label: "Sửa chữa - Bảo hành", href: "/dich-vu" },
            { label: "Cho thuê máy pha cà phê", href: "/dich-vu/cho-thue-may-pha-ca-phe" },
            { label: "Dịch vụ sau bán hàng", href: "/dich-vu/sau-ban-hang" },
            { label: "Mua cà phê tặng máy", href: "/dich-vu/mua-ca-phe-tang-may" },
            { label: "Khóa học pha chế", href: "/dich-vu/khoa-hoc-pha-che-ca-phe" },
            { label: "Setup quán cà phê", href: "/dich-vu/setup-quan-cafe" },
            { label: "Tư vấn và giải pháp", href: "/dich-vu/tu-van-giai-phap" },
        ],
    },
    {
        label: "Cẩm nang",
        href: "/blog",
        children: [
            { label: "Kinh doanh quán cà phê", href: "/blog/category/kinh-doanh-quan-ca-phe" },
            { label: "Cách pha cà phê", href: "/blog/category/cach-pha-ca-phe" },
            { label: "Tin tức", href: "/blog/category/tin-tuc" },
            { label: "Câu hỏi thường gặp", href: "/blog/category/cau-hoi-thuong-gap" },
            { label: "Đánh giá sản phẩm", href: "/blog/category/danh-gia-san-pham" },
            { label: "Videos", href: "/blog/category/videos" },
        ],
    },
    {
        label: "THÀNH VIÊN PROCAFFE",
        href: "/thanh-vien",
        children: [
            { label: "Tuyển dụng", href: "/thanh-vien/tuyen-dung" },
            { label: "Khách hàng thành viên", href: "/thanh-vien/dang-ky" },
            { label: "Cộng tác viên", href: "/thanh-vien/cong-tac-vien" },
            { label: "Đăng nhập", href: "/thanh-vien/dang-ky" },
        ],
    },
    {
        label: "Khuyến mãi",
        href: "/khuyen-mai",
        children: [
            { label: "Chương trình ưu đãi", href: "/khuyen-mai" },
            { label: "Xả kho", href: "/products?cat=xa-kho-hang-trung-bay" },
        ],
    },
    { label: "Sự kiện thương hiệu", href: "/su-kien" },
    { label: "Liên hệ", href: "/contact" },
];

/* Featured products per subcategory for mega-menu */
const productMegaCategories = [
    {
        label: "Máy pha cappuccino tự động", href: "/products?cat=may-pha-ca-phe",
        featured: [
            { title: "Saeco Royal Plus", slug: "saeco-royal-plus", image: "/images/products/saeco-royal-plus.jpg" },
            { title: "Gaggia Magenta Prestige", slug: "gaggia-magenta-prestige", image: "/images/products/gaggia-magenta-prestige.jpg" },
        ],
    },
    {
        label: "Máy pha espresso bán tự động", href: "/products?cat=may-pha-ca-phe",
        featured: [
            { title: "Lelit MaraX3", slug: "lelit-marax3-pl62x3", image: "/images/products/lelit-marax3-pl62x3.jpg" },
            { title: "Wega Polar", slug: "wega-polar", image: "/images/products/wega-polar.jpg" },
        ],
    },
    {
        label: "Máy pha cà phê Capsule-Pod", href: "/products?cat=may-pha-ca-phe",
        featured: [
            { title: "Saeco Aurora M1", slug: "saeco-aurora-m1", image: "/images/products/saeco-aurora-m1.jpg" },
        ],
    },
    {
        label: "Ấm pha cà phê Bialetti", href: "/products?cat=am-pha-ca-phe",
        featured: [
            { title: "Bialetti Moka Express", slug: "bialetti-moka-express-stranger-things", image: "/images/products/bialetti-moka-express-stranger-things.jpg" },
            { title: "Bialetti Brikka", slug: "pheu-loc-ca-phe-bialetti-brikka", image: "/images/products/pheu-loc-ca-phe-bialetti-brikka.jpg" },
        ],
    },
    {
        label: "Máy pha Specialty coffee", href: "/products?cat=may-pha-ca-phe",
        featured: [
            { title: "Astoria Tanya", slug: "astoria-tanya-2-group", image: "/images/products/astoria-tanya-2-group.jpg" },
        ],
    },
    {
        label: "Máy xay cà phê", href: "/products?cat=may-xay-ca-phe",
        featured: [
            { title: "Mahlkönig E80W GbS", slug: "mahlkonig-e80w-gbs", image: "/images/products/mahlkonig-e80w-gbs.jpg" },
            { title: "Eureka Mignon Pisa", slug: "eureka-mignon-pisa-single-dose", image: "/images/products/eureka-mignon-pisa-single-dose.jpg" },
        ],
    },
    {
        label: "Máy xay Vitamix", href: "/products?cat=vitamix",
        featured: [],
    },
    {
        label: "Máy bán cà phê tự động", href: "/products?cat=may-pha-ca-phe",
        featured: [],
    },
    {
        label: "Cà phê rang xay", href: "/products?cat=ca-phe-rang-xay",
        featured: [
            { title: "Procaffe Speciale", slug: "procaffe-speciale-hoa-tan-say-phun", image: "/images/products/procaffe-speciale-hoa-tan-say-phun.jpg" },
            { title: "Procaffe Riccaroma", slug: "procaffe-riccaroma-2", image: "/images/products/procaffe-riccaroma-2.jpg" },
        ],
    },
    {
        label: "Phụ kiện - Phụ tùng", href: "/products?cat=phu-kien",
        featured: [],
    },
];

const defaultFeaturedProducts = [
    { title: "Lelit MaraX3", slug: "lelit-marax3-pl62x3", image: "/images/products/lelit-marax3-pl62x3.jpg" },
    { title: "Wega Polar", slug: "wega-polar", image: "/images/products/wega-polar.jpg" },
    { title: "Mahlkönig E80W", slug: "mahlkonig-e80w-gbs", image: "/images/products/mahlkonig-e80w-gbs.jpg" },
    { title: "Eureka Mignon Pisa", slug: "eureka-mignon-pisa-single-dose", image: "/images/products/eureka-mignon-pisa-single-dose.jpg" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
        }
    };

    return (
        <>
            {/* Top Bar - Gray with hotlines + search */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-inner">
                        <div className="top-bar-phones">
                            {phoneNumbers.map((p) => (
                                <a key={p.number} href={`tel:${p.number.replace(/\./g, "")}`}>
                                    <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    {p.label}: {p.number}
                                </a>
                            ))}
                        </div>
                        <div className="top-bar-search">
                            <input
                                type="text"
                                placeholder="Từ khóa"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
                            />
                            <button type="button" aria-label="Tìm kiếm" onClick={handleSearch}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo Row - White with centered logo */}
            <header className="header">
                <div className="container">
                    <div className="header-logo-row">
                        <Link href="/" className="header-logo">
                            <Image
                                src="/images/logo-procaffe.png"
                                alt="ProCaffe - The leading Total Coffee Solutions Provider"
                                width={200}
                                height={60}
                                priority
                            />
                        </Link>
                        <div className="header-cart-area">
                            <Link href="/products" className="header-cart">
                                <div className="cart-icon-wrapper" style={{ position: 'relative' }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="2">
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="20" cy="21" r="1" />
                                        <path d="m1 1 4 2 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    </svg>
                                    <span className="cart-count">0</span>
                                </div>
                                <div className="cart-icon-wrapper" style={{ marginLeft: '12px', display: 'flex', alignItems: 'center' }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                        <line x1="1" y1="10" x2="23" y2="10" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Bar - Orange */}
            <nav className={`main-nav${mobileMenuOpen ? " open" : ""}`}>
                <div className="container">
                    <div className="nav-links">
                        {/* Home icon */}
                        <Link href="/" className="nav-home" onClick={() => setMobileMenuOpen(false)}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </Link>

                        {navItems.map((item) => (
                            <div key={item.label} className={`nav-item${item.children ? " has-dropdown" : ""}${item.label === "Sản phẩm" ? " has-mega-menu" : ""}`}>
                                <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                    {item.label}
                                    {item.children && (
                                        <svg className="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7 10l5 5 5-5z" />
                                        </svg>
                                    )}
                                </Link>
                                {item.label === "Sản phẩm" ? (
                                    <ProductMegaMenu
                                        categories={productMegaCategories}
                                        defaultFeatured={defaultFeaturedProducts}
                                    />
                                ) : item.children ? (
                                    <div className="dropdown-menu">
                                        {item.children.map((child) => (
                                            <Link key={child.label} href={child.href} onClick={() => setMobileMenuOpen(false)}>
                                                <span className="dropdown-bullet">✦</span>
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            {mobileMenuOpen ? (
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            ) : (
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    );
}
