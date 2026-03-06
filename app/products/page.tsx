"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import TrustBadgesSidebar from "../components/trust-badges-sidebar";
import products from "../../data/products.json";
import categories from "../../data/product-categories.json";

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

function getBrandDescription(slug: string): string {
    const cat = categories.find((c) => c.slug === slug);
    if (cat && cat.parent === BRAND_PARENT_ID && cat.description) {
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
    const [selectedCategory, setSelectedCategory] = useState<string>(catFromUrl);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState<SortOption>("default");
    const [expandedCats, setExpandedCats] = useState<Set<number>>(new Set());
    const perPage = 20;

    /* Sync state when URL query param changes */
    useEffect(() => {
        const cat = searchParams.get("cat") || "all";
        setSelectedCategory(cat);
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
                        </aside>

                        {/* Content */}
                        <div className="page-content">
                            {/* Promo Banner */}
                            <div className="promo-banner">
                                <img
                                    src="https://procaffe.vn/wp-content/uploads/2026/03/3-25-spring.png"
                                    alt="Khuyến mãi tháng 3"
                                    loading="lazy"
                                />
                            </div>

                            {/* Brand description for brand categories */}
                            {selectedCategory !== "all" &&
                                getBrandDescription(selectedCategory) && (
                                    <div className="brand-description">
                                        <h2 className="brand-title">
                                            {categories
                                                .find(
                                                    (c) =>
                                                        c.slug ===
                                                        selectedCategory
                                                )
                                                ?.name?.toUpperCase()}
                                        </h2>
                                        <p>
                                            {getBrandDescription(
                                                selectedCategory
                                            )}
                                        </p>
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
                                    Hiển thị {startItem}–{endItem} trên{" "}
                                    {filtered.length} kết quả
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
                                        href={`/products/${product.slug}`}
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
                                            <h3 className="product-card-title">
                                                {product.title}
                                            </h3>
                                            <div className="product-card-price">
                                                Liên hệ
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination bottom */}
                            <PaginationBlock />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
