import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ArticleSidebar from "../../components/article-sidebar";
import { posts, getRelatedPosts, BLOG_CATEGORIES } from "../../../data/blog-data";

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return notFound();

    const related = getRelatedPosts(post.id, post.categories || [], 5);

    // Get category names for this post
    const postCategories = BLOG_CATEGORIES.filter((cat) =>
        cat.categoryIds.some((id) => post.categories?.includes(id))
    );

    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/blog">Cẩm nang</Link>
                    {postCategories.length > 0 && (
                        <>
                            <span className="breadcrumb-sep">/</span>
                            <Link href={`/blog/category/${postCategories[0].slug}`}>
                                {postCategories[0].name}
                            </Link>
                        </>
                    )}
                    <span className="breadcrumb-sep">/</span>
                    <span>{post.title}</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <article className="blog-post-article">
                                {/* Post header */}
                                <h1 className="blog-post-title">{post.title}</h1>
                                <div className="blog-post-meta">
                                    <span className="blog-post-date">
                                        {new Date(post.date).toLocaleDateString("vi-VN", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                    {postCategories.length > 0 && (
                                        <span className="blog-post-categories">
                                            {postCategories.map((cat) => (
                                                <Link
                                                    key={cat.slug}
                                                    href={`/blog/category/${cat.slug}`}
                                                    className="blog-post-cat-link"
                                                >
                                                    {cat.name}
                                                </Link>
                                            ))}
                                        </span>
                                    )}
                                </div>

                                {/* Related news - placed above body content like original */}
                                {related.length > 0 && (
                                    <div className="blog-related-news">
                                        <h3>Tin liên quan</h3>
                                        <ul>
                                            {related.map((r) => (
                                                <li key={r.id}>
                                                    <Link href={`/blog/${r.slug}`}>
                                                        {r.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Featured image */}
                                {post.featured_image && (
                                    <div className="blog-post-hero">
                                        <img src={post.featured_image} alt={post.title} />
                                    </div>
                                )}

                                {/* Post body content */}
                                <div
                                    className="blog-post-content"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content || "",
                                    }}
                                />

                                {/* Category tags at bottom */}
                                {postCategories.length > 0 && (
                                    <div className="blog-post-tags">
                                        <span className="blog-post-tags-label">
                                            Chuyên mục:
                                        </span>
                                        {postCategories.map((cat) => (
                                            <Link
                                                key={cat.slug}
                                                href={`/blog/category/${cat.slug}`}
                                                className="blog-post-tag"
                                            >
                                                {cat.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </article>
                        </div>

                        <ArticleSidebar />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
