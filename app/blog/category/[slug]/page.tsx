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
                            <BlogCategoryList posts={allPosts} />
                        </div>

                        <ArticleSidebar />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

function BlogCategoryList({ posts }: { posts: typeof import("../../../../data/posts.json") }) {
    return (
        <>
            <div className="blog-archive-list">
                {posts.map((post) => (
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

            {posts.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px 0", color: "#999" }}>
                    <p>Chưa có bài viết nào trong chuyên mục này.</p>
                </div>
            )}
        </>
    );
}
