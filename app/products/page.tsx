"use client";

import { useState, useMemo } from "react";
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

/* Top-level categories with parent=0 */
const topCategories = categories
    .filter((c) => c.parent === 0 && c.count > 0)
    .sort((a, b) => b.count - a.count);

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 24;

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
                                    <li>
                                        <button
                                            className={selectedCategory === "all" ? "active" : ""}
                                            onClick={() => {
                                                setSelectedCategory("all");
                                                setCurrentPage(1);
                                            }}
                                        >
                                            Tất cả sản phẩm
                                            <span className="cat-count">{products.length}</span>
                                        </button>
                                    </li>
                                    {topCategories.map((cat) => (
                                        <li key={cat.id}>
                                            <button
                                                className={
                                                    selectedCategory === cat.slug ? "active" : ""
                                                }
                                                onClick={() => {
                                                    setSelectedCategory(cat.slug);
                                                    setCurrentPage(1);
                                                }}
                                            >
                                                {cat.name}
                                                <span className="cat-count">{cat.count}</span>
                                            </button>
                                        </li>
                                    ))}
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
