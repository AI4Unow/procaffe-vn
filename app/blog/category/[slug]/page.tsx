"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ArticleSidebar from "../../../components/article-sidebar";
import { BLOG_CATEGORIES, getPostsByCategory } from "../../../../data/blog-data";

const PER_PAGE = 12;

export default function BlogCategoryPage() {
    const params = useParams();
    const slug = params.slug as string;
    const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
    const [currentPage, setCurrentPage] = useState(1);

    if (!category) {
        return (
            <>
                <Header />
                <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
                    <h1>Không tìm thấy chuyên mục</h1>
                </div>
                <Footer />
            </>
        );
    }

    const allPosts = getPostsByCategory(slug);
    const totalPages = Math.ceil(allPosts.length / PER_PAGE);
    const pagedPosts = allPosts.slice(
        (currentPage - 1) * PER_PAGE,
        currentPage * PER_PAGE
    );

    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/blog">Cẩm nang</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>{category.name}</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h1 style={{ fontFamily: "var(--font-heading)" }}>
                            {category.name}
                        </h1>
                        <div className="accent-line" />
                    </div>

                    {/* Category navigation tabs */}
                    <div className="blog-category-tabs">
                        <Link
                            href="/blog"
                            className="blog-cat-tab"
                        >
                            Tất cả
                        </Link>
                        {BLOG_CATEGORIES.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/blog/category/${cat.slug}`}
                                className={`blog-cat-tab${cat.slug === slug ? " active" : ""}`}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>

                    <div className="article-layout">
                        <div className="article-main">
                            {/* Results info */}
                            <div className="blog-results-info">
                                {allPosts.length === 0
                                    ? "0 bài viết"
                                    : `Hiển thị ${(currentPage - 1) * PER_PAGE + 1}–${Math.min(currentPage * PER_PAGE, allPosts.length)} trên ${allPosts.length} bài viết`}
                            </div>

                            <div className="blog-archive-list">
                                {pagedPosts.map((post) => (
                                    <article key={post.id} className="blog-archive-post">
                                        {post.featured_image && (
                                            <div className="blog-post-thumbnail">
                                                <Link href={`/blog/${post.slug}`}>
                                                    <img
                                                        src={post.featured_image}
                                                        alt={post.title}
                                                        loading="lazy"
                                                    />
                                                </Link>
                                            </div>
                                        )}
                                        <div className="blog-post-content">
                                            <h2 className="blog-post-title">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <div className="blog-post-meta">
                                                {new Date(post.date).toLocaleDateString("vi-VN", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </div>
                                            {post.excerpt && (
                                                <div className="blog-post-excerpt">
                                                    <p>{post.excerpt}</p>
                                                </div>
                                            )}
                                            <Link href={`/blog/${post.slug}`} className="read-more">
                                                Đọc tiếp »
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {pagedPosts.length === 0 && (
                                <div style={{ textAlign: "center", padding: "40px 0", color: "#999" }}>
                                    <p>Chưa có bài viết nào trong chuyên mục này.</p>
                                </div>
                            )}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="pagination">
                                    {currentPage > 1 && (
                                        <button onClick={() => { setCurrentPage(currentPage - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                                            ←
                                        </button>
                                    )}
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            className={currentPage === page ? "active" : ""}
                                            onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    {currentPage < totalPages && (
                                        <button onClick={() => { setCurrentPage(currentPage + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                                            →
                                        </button>
                                    )}
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
