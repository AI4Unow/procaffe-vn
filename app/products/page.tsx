"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
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

function getProductCategory(product: (typeof products)[0]): string {
    const cats = product.categories || [];
    return cats[0] || "";
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
    const perPage = 24;

    /* Sync state when URL query param changes (e.g. browser back/forward) */
    useEffect(() => {
        const cat = searchParams.get("cat") || "all";
        setSelectedCategory(cat);
        setCurrentPage(1);
    }, [searchParams]);

    /* Update URL when category changes via sidebar click */
    const handleCategoryChange = (slug: string) => {
        setSelectedCategory(slug);
        setCurrentPage(1);
        if (slug === "all") {
            router.push("/products", { scroll: false });
        } else {
            router.push(`/products?cat=${slug}`, { scroll: false });
        }
    };

    const filtered = useMemo(() => {
        let list = [...products];

        if (selectedCategory !== "all") {
            const catObj = categories.find(
                (c) => c.slug === selectedCategory || c.name === selectedCategory
            );
            if (catObj) {
                const catName = catObj.name;
                /* Include children */
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

        return list;
    }, [selectedCategory, searchTerm]);

    const totalPages = Math.ceil(filtered.length / perPage);
    const paged = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

    return (
        <>
            <Header />

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Sản phẩm</span>
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
                                        return (
                                            <li key={cat.id} className={children.length > 0 ? "has-children" : ""}>
                                                <button
                                                    className={
                                                        selectedCategory === cat.slug ? "active" : ""
                                                    }
                                                    onClick={() => handleCategoryChange(cat.slug)}
                                                >
                                                    {cat.name}
                                                    {children.length > 0 && (
                                                        <span className="cat-arrow">›</span>
                                                    )}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Phone CTA */}
                            <div className="sidebar-cta">
                                <div className="sidebar-cta-icon">📞</div>
                                <h4>Cần tư vấn?</h4>
                                <p>Gọi ngay để được hỗ trợ chọn sản phẩm phù hợp</p>
                                <a href="tel:09045698782" className="sidebar-cta-btn">
                                    090.456.98.78
                                </a>
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="page-content">
                            {/* Brand description for brand categories */}
                            {selectedCategory !== "all" && getBrandDescription(selectedCategory) && (
                                <div className="brand-description">
                                    <h2 className="brand-title">
                                        {categories.find((c) => c.slug === selectedCategory)?.name?.toUpperCase()}
                                    </h2>
                                    <p>{getBrandDescription(selectedCategory)}</p>
                                </div>
                            )}

                            <div className="product-listing-header">
                                <h1>
                                    {selectedCategory === "all"
                                        ? "Tất cả sản phẩm"
                                        : categories.find((c) => c.slug === selectedCategory)
                                            ?.name || "Sản phẩm"}
                                </h1>
                                <span className="result-count">
                                    {filtered.length} sản phẩm
                                </span>
                            </div>

                            <div className="product-grid">
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
                                            <span className="product-card-category">
                                                {getProductCategory(product)}
                                            </span>
                                            <h3 className="product-card-title">{product.title}</h3>
                                            <div className="product-card-price">Liên hệ</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="pagination">
                                    <button
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                    >
                                        ← Trước
                                    </button>
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
                                    <button
                                        disabled={currentPage === totalPages}
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                    >
                                        Sau →
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
