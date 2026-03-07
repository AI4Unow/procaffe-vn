"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import ArticleSidebar from "../components/article-sidebar";
import posts from "../../data/posts.json";
import { BLOG_CATEGORIES } from "../../data/blog-data";

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 12;

    const sorted = useMemo(
        () =>
            [...posts].sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            ),
        []
    );

    const totalPages = Math.ceil(sorted.length / perPage);
    const paged = sorted.slice(
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
                    <span>Cẩm nang</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h1 style={{ fontFamily: "var(--font-heading)" }}>
                            Cẩm nang
                        </h1>
                        <div className="accent-line" />
                        <p>Cập nhật xu hướng và chia sẻ kiến thức cà phê</p>
                    </div>

                    {/* Category navigation tabs */}
                    <div className="blog-category-tabs">
                        <Link
                            href="/blog"
                            className="blog-cat-tab active"
                        >
                            Tất cả
                        </Link>
                        {BLOG_CATEGORIES.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/blog/category/${cat.slug}`}
                                className="blog-cat-tab"
                            >
                                {cat.name}
                            </Link>
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
                                                {new Date(post.date).toLocaleDateString(
                                                    "vi-VN",
                                                    {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    }
                                                )}
                                            </span>
                                            <h3 className="blog-card-title">
                                                {post.title}
                                            </h3>
                                            {post.excerpt && (
                                                <p className="blog-card-excerpt">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="pagination">
                                    <button
                                        disabled={currentPage === 1}
                                        onClick={() =>
                                            setCurrentPage(currentPage - 1)
                                        }
                                    >
                                        ← Trước
                                    </button>
                                    {Array.from(
                                        {
                                            length: Math.min(totalPages, 7),
                                        },
                                        (_, i) => {
                                            let page: number;
                                            if (totalPages <= 7) page = i + 1;
                                            else if (currentPage <= 4)
                                                page = i + 1;
                                            else if (
                                                currentPage >=
                                                totalPages - 3
                                            )
                                                page = totalPages - 6 + i;
                                            else page = currentPage - 3 + i;
                                            return (
                                                <button
                                                    key={page}
                                                    className={
                                                        currentPage === page
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setCurrentPage(page)
                                                    }
                                                >
                                                    {page}
                                                </button>
                                            );
                                        }
                                    )}
                                    <button
                                        disabled={currentPage === totalPages}
                                        onClick={() =>
                                            setCurrentPage(currentPage + 1)
                                        }
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
