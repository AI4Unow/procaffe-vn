import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ArticleSidebar from "../../../components/article-sidebar";
import { BLOG_CATEGORIES, getPostsByCategory } from "../../../../data/blog-data";

const PER_PAGE = 12;

export function generateStaticParams() {
    return BLOG_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function BlogCategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
    if (!category) return notFound();

    const allPosts = getPostsByCategory(slug);

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
                            <BlogCategoryGrid posts={allPosts} />
                        </div>

                        <ArticleSidebar />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

function BlogCategoryGrid({ posts }: { posts: typeof import("../../../../data/posts.json") }) {
    return (
        <>
            <div className="blog-grid">
                {posts.map((post) => (
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

            {posts.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px 0", color: "#999" }}>
                    <p>Chưa có bài viết nào trong chuyên mục này.</p>
                </div>
            )}
        </>
    );
}
