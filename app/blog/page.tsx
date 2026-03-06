"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import ArticleSidebar from "../components/article-sidebar";
import posts from "../../data/posts.json";
import blogCategories from "../../data/blog-categories.json";

export default function BlogPage() {
    const [selectedCat, setSelectedCat] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 12;

    const topCats = blogCategories
        .filter((c) => c.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    const filtered = useMemo(() => {
        if (!selectedCat) return posts;
        return posts.filter((p) => p.categories?.includes(selectedCat));
    }, [selectedCat]);

    const totalPages = Math.ceil(filtered.length / perPage);
    const paged = filtered.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Tin tức</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h1 style={{ fontFamily: "var(--font-heading)" }}>
                            Tin tức &amp; Kiến thức Cà phê
                        </h1>
                        <div className="accent-line" />
                        <p>Cập nhật xu hướng và chia sẻ kiến thức barista</p>
                    </div>

                    {/* Category tabs */}
                    <div className="blog-category-tabs">
                        <button
                            className={!selectedCat ? "active" : ""}
                            onClick={() => {
                                setSelectedCat(null);
                                setCurrentPage(1);
                            }}
                        >
                            Tất cả
                        </button>
                        {topCats.map((cat) => (
                            <button
                                key={cat.id}
                                className={selectedCat === cat.id ? "active" : ""}
                                onClick={() => {
                                    setSelectedCat(cat.id);
                                    setCurrentPage(1);
                                }}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="article-layout">
                        <div className="article-main">
                            <div className="blog-grid">
                                {paged.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="blog-card"
                                    >
                                        {post.featured_image && (
                                            <div className="blog-card-image">
                                                <img
                                                    src={post.featured_image}
                                                    alt={post.title}
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                        <div className="blog-card-content">
                                            <span className="blog-card-date">
                                                {new Date(post.date).toLocaleDateString("vi-VN", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                            <h3 className="blog-card-title">{post.title}</h3>
                                            {post.excerpt && (
                                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>

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
                                        if (totalPages <= 7) page = i + 1;
                                        else if (currentPage <= 4) page = i + 1;
                                        else if (currentPage >= totalPages - 3) page = totalPages - 6 + i;
                                        else page = currentPage - 3 + i;
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

                        <ArticleSidebar />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
