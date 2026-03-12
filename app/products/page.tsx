"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import TrustBadgesSidebar from "../components/trust-badges-sidebar";
import ProductReviewSection from "../components/product-review-section";
import products from "../../data/products.json";
import categories from "../../data/product-categories.json";

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
    salePercent: number | null;
} {
    const p = product as typeof product & { regular_price?: string; sale_price?: string };
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
    const text = (product.excerpt || "") + " " + (product.content || "");
    const priceRegex = /(\d{1,3}(?:\.\d{3}){1,3})\s*(?:đ|VND|₫)/i;
    const match = text.match(priceRegex);
    if (match) return { regular: match[1] + "đ", sale: null, salePercent: null };
    return { regular: null, sale: null, salePercent: null };
}

/* Custom-ordered sidebar categories matching procaffe.vn */
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

const sidebarCategories = SIDEBAR_CATEGORY_ORDER
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter(Boolean) as typeof categories;

/* Brand categories (children of Thương hiệu id=350) */
const BRAND_PARENT_ID = 350;

/* Brand slug → logo image mapping */
const BRAND_LOGOS: Record<string, string> = {
    saeco: "/images/brands/16.png",
    wega: "/images/brands/11.png",
    gaggia: "/images/brands/14.png",
    eureka: "/images/brands/18.png",
    bialetti: "/images/brands/12.png",
    vitamix: "/images/brands/21.png",
    lelit: "/images/brands/15.png",
    fiorenzato: "/images/brands/8.png",
    mahlkonig: "/images/brands/6.png",
    "kees-van-der-westen": "/images/brands/1.png",
    synesso: "/images/brands/20.png",
    "barista-attitude": "/images/brands/7.png",
    "coffee-queen": "/images/brands/19.png",
    gimoka: "/images/brands/5.png",
    astoria: "/images/brands/17.png",
    "la-pavoni": "/images/brands/3.png",
    cunill: "/images/brands/4.png",
    wpm: "/images/brands/10.png",
    procaffe: "/images/brands/9.png",
    heritage: "/images/brands/13.png",
    casadio: "/images/brands/2.png",
};

function getCategoryDescription(slug: string): string {
    const cat = categories.find((c) => c.slug === slug);
    if (cat && cat.description) {
        return cat.description;
    }
    return "";
}

function isBrandCategory(slug: string): boolean {
    const cat = categories.find((c) => c.slug === slug);
    return !!cat && cat.parent === BRAND_PARENT_ID;
}

type SortOption = "default" | "name-asc" | "name-desc" | "newest";

export default function ProductsPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <ProductsContent />
        </Suspense>
    );
}

function ProductsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const catFromUrl = searchParams.get("cat") || "all";
    const searchFromUrl = searchParams.get("search") || "";
    const [selectedCategory, setSelectedCategory] = useState<string>(catFromUrl);
    const [searchTerm, setSearchTerm] = useState(searchFromUrl);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState<SortOption>("default");
    const [expandedCats, setExpandedCats] = useState<Set<number>>(new Set());
    const perPage = 20;

    /* Sync state when URL query param changes */
    useEffect(() => {
        const cat = searchParams.get("cat") || "all";
        const search = searchParams.get("search") || "";
        setSelectedCategory(cat);
        setSearchTerm(search);
        setCurrentPage(1);
    }, [searchParams]);

    const handleCategoryChange = (slug: string) => {
        setSelectedCategory(slug);
        setCurrentPage(1);
        if (slug === "all") {
            router.push("/products", { scroll: false });
        } else {
            router.push(`/products?cat=${slug}`, { scroll: false });
        }
    };

    const toggleExpand = (catId: number) => {
        setExpandedCats((prev) => {
            const next = new Set(prev);
            if (next.has(catId)) next.delete(catId);
            else next.add(catId);
            return next;
        });
    };

    const filtered = useMemo(() => {
        let list = [...products];

        if (selectedCategory !== "all") {
            const catObj = categories.find(
                (c) => c.slug === selectedCategory || c.name === selectedCategory
            );
            if (catObj) {
                const catName = catObj.name;
                const childNames = categories
                    .filter((c) => c.parent === catObj.id)
                    .map((c) => c.name);
                const allNames = [catName, ...childNames];
                list = list.filter((p) =>
                    p.categories?.some((c: string) => allNames.includes(c))
                );
            }
        }

        if (searchTerm.trim()) {
            const q = searchTerm.toLowerCase();
            list = list.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    (p.excerpt && p.excerpt.toLowerCase().includes(q))
            );
        }

        /* Sort */
        switch (sortBy) {
            case "name-asc":
                list.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "name-desc":
                list.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "newest":
                list.sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                );
                break;
        }

        return list;
    }, [selectedCategory, searchTerm, sortBy]);

    const totalPages = Math.ceil(filtered.length / perPage);
    const paged = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);
    const startItem = (currentPage - 1) * perPage + 1;
    const endItem = Math.min(currentPage * perPage, filtered.length);

    const PaginationBlock = () =>
        totalPages > 1 ? (
            <div className="pagination">
                {currentPage > 1 && (
                    <button onClick={() => setCurrentPage(currentPage - 1)}>
                        ←
                    </button>
                )}
                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    let page: number;
                    if (totalPages <= 7) {
                        page = i + 1;
                    } else if (currentPage <= 4) {
                        page = i + 1;
                    } else if (currentPage >= totalPages - 3) {
                        page = totalPages - 6 + i;
                    } else {
                        page = currentPage - 3 + i;
                    }
                    return (
                        <button
                            key={page}
                            className={currentPage === page ? "active" : ""}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    );
                })}
                {totalPages > 7 && currentPage < totalPages - 3 && (
                    <>
                        <span className="pagination-dots">…</span>
                        <button onClick={() => setCurrentPage(totalPages)}>
                            {totalPages}
                        </button>
                    </>
                )}
                {currentPage < totalPages && (
                    <button onClick={() => setCurrentPage(currentPage + 1)}>
                        →
                    </button>
                )}
            </div>
        ) : null;

    return (
        <>
            <Header />

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Cửa hàng</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="page-layout">
                        {/* Sidebar */}
                        <aside className="sidebar">
                            <div className="sidebar-block">
                                <h3 className="sidebar-title">Tìm kiếm</h3>
                                <input
                                    type="text"
                                    placeholder="Tìm sản phẩm..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="sidebar-search"
                                />
                            </div>

                            <div className="sidebar-block">
                                <h3 className="sidebar-title">Danh mục sản phẩm</h3>
                                <ul className="sidebar-categories">
                                    {sidebarCategories.map((cat) => {
                                        const children = categories.filter(
                                            (c) => c.parent === cat.id && c.count > 0
                                        );
                                        const isExpanded = expandedCats.has(cat.id);
                                        return (
                                            <li key={cat.id}>
                                                <button
                                                    className={
                                                        selectedCategory === cat.slug
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        handleCategoryChange(cat.slug)
                                                    }
                                                >
                                                    {cat.name}
                                                    {children.length > 0 && (
                                                        <span
                                                            className={`cat-arrow ${isExpanded ? "expanded" : ""}`}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleExpand(cat.id);
                                                            }}
                                                        >
                                                            ›
                                                        </span>
                                                    )}
                                                </button>
                                                {children.length > 0 && isExpanded && (
                                                    <ul className="sidebar-subcategories">
                                                        {children.map((child) => (
                                                            <li key={child.id}>
                                                                <button
                                                                    className={
                                                                        selectedCategory ===
                                                                            child.slug
                                                                            ? "active"
                                                                            : ""
                                                                    }
                                                                    onClick={() =>
                                                                        handleCategoryChange(
                                                                            child.slug
                                                                        )
                                                                    }
                                                                >
                                                                    {child.name}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Brand categories sidebar */}
                            <div className="sidebar-block">
                                <h3 className="sidebar-title">Thương hiệu</h3>
                                <ul className="sidebar-categories">
                                    {categories
                                        .filter((c) => c.parent === BRAND_PARENT_ID && c.count > 0)
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .map((brand) => (
                                            <li key={brand.id}>
                                                <button
                                                    className={
                                                        selectedCategory === brand.slug
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        handleCategoryChange(brand.slug)
                                                    }
                                                >
                                                    {brand.name}
                                                    <span className="cat-count">({brand.count})</span>
                                                </button>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* Phone CTA */}
                            <div className="sidebar-cta">
                                <div className="sidebar-cta-icon">📞</div>
                                <h4>Cần tư vấn?</h4>
                                <p>
                                    Gọi ngay để được hỗ trợ chọn sản phẩm phù
                                    hợp
                                </p>
                                <a
                                    href="tel:09045698782"
                                    className="sidebar-cta-btn"
                                >
                                    090.456.98.78
                                </a>
                            </div>

                            {/* Trust badges */}
                            <TrustBadgesSidebar />
                        </aside>

                        {/* Content */}
                        <div className="page-content">
                            {/* Promo Banner */}
                            <div className="promo-banner">
                                <img
                                    src="/images/content/banner-website.jpg"
                                    alt="Khuyến mãi tháng 3"
                                    loading="lazy"
                                />
                            </div>

                            {/* Brand hero banner for brand categories */}
                            {selectedCategory !== "all" && isBrandCategory(selectedCategory) && (
                                <div className="brand-hero-banner">
                                    {BRAND_LOGOS[selectedCategory] && (
                                        <div className="brand-hero-logo">
                                            <img src={BRAND_LOGOS[selectedCategory]} alt={selectedCategory} />
                                        </div>
                                    )}
                                    <div className="brand-hero-info">
                                        <h2 className="brand-hero-title">
                                            {categories.find(c => c.slug === selectedCategory)?.name?.toUpperCase()}
                                        </h2>
                                        {getCategoryDescription(selectedCategory) && (
                                            <p className="brand-hero-desc">{getCategoryDescription(selectedCategory)}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* Category description for non-brand categories */}
                            {selectedCategory !== "all" && !isBrandCategory(selectedCategory) &&
                                getCategoryDescription(selectedCategory) && (
                                    <div className="brand-description">
                                        <h2 className="brand-title">
                                            {categories.find(c => c.slug === selectedCategory)?.name?.toUpperCase()}
                                        </h2>
                                        <p>{getCategoryDescription(selectedCategory)}</p>
                                    </div>
                                )}

                            {/* Page Title */}
                            <div className="shop-title-bar">
                                <div className="shop-title-line" />
                                <h1>CỬA HÀNG</h1>
                                <div className="shop-title-line" />
                            </div>

                            {/* Results info + Sort + Pagination top */}
                            <div className="listing-toolbar">
                                <span className="results-info">
                                    {filtered.length === 0
                                        ? "0 kết quả"
                                        : `Hiển thị ${startItem}–${endItem} trên ${filtered.length} kết quả`}
                                </span>
                                <div className="toolbar-right">
                                    <select
                                        className="sort-dropdown"
                                        value={sortBy}
                                        onChange={(e) => {
                                            setSortBy(
                                                e.target.value as SortOption
                                            );
                                            setCurrentPage(1);
                                        }}
                                    >
                                        <option value="default">
                                            Thứ tự mặc định
                                        </option>
                                        <option value="newest">
                                            Mới nhất
                                        </option>
                                        <option value="name-asc">
                                            Tên: A → Z
                                        </option>
                                        <option value="name-desc">
                                            Tên: Z → A
                                        </option>
                                    </select>
                                    <PaginationBlock />
                                </div>
                            </div>

                            <div className="product-grid product-grid-3col">
                                {paged.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/${product.slug}`}
                                        className="product-card"
                                    >
                                        <div className="product-card-image">
                                            {(() => {
                                                const pr = extractPrice(product);
                                                return pr.salePercent ? (
                                                    <span className="sale-badge">SALE {pr.salePercent}%</span>
                                                ) : null;
                                            })()}
                                            <img
                                                src={getProductImage(product)}
                                                alt={product.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-title">
                                                {product.title}
                                            </h3>
                                            <div className="product-card-price">
                                                {(() => {
                                                    const pr = extractPrice(product);
                                                    if (pr.sale) return <><span className="price-original">{pr.regular}</span> <span className="price-sale">{pr.sale}</span></>;
                                                    return pr.regular || "Liên hệ";
                                                })()}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination bottom */}
                            <PaginationBlock />

                            {/* Review Section */}
                            <ProductReviewSection
                                slug="products"
                                productTitle="Cửa hàng ProCaffe"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
