import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/header";
import Footer from "../../components/footer";
import posts from "../../../data/posts.json";

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

    const related = posts
        .filter(
            (p) =>
                p.id !== post.id &&
                p.categories?.some((c) => post.categories?.includes(c))
        )
        .slice(0, 3);

    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/blog">Tin tức</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>{post.title}</span>
                </div>
            </div>

            <article className="section blog-post-section">
                <div className="container">
                    <div className="blog-post-layout">
                        <div className="blog-post-main">
                            <div className="blog-post-header">
                                <span className="blog-post-date">
                                    {new Date(post.date).toLocaleDateString("vi-VN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <h1 className="blog-post-title">{post.title}</h1>
                            </div>

                            {post.featured_image && (
                                <div className="blog-post-hero">
                                    <img src={post.featured_image} alt={post.title} />
                                </div>
                            )}

                            <div
                                className="blog-post-content"
                                dangerouslySetInnerHTML={{ __html: post.content || "" }}
                            />
                        </div>

                        <aside className="blog-sidebar">
                            <div className="sidebar-block">
                                <h3 className="sidebar-title">Bài viết liên quan</h3>
                                <div className="sidebar-related-posts">
                                    {related.map((r) => (
                                        <Link
                                            key={r.id}
                                            href={`/blog/${r.slug}`}
                                            className="sidebar-related-post"
                                        >
                                            {r.featured_image && (
                                                <img
                                                    src={r.featured_image}
                                                    alt={r.title}
                                                    loading="lazy"
                                                />
                                            )}
                                            <div>
                                                <h4>{r.title}</h4>
                                                <span>
                                                    {new Date(r.date).toLocaleDateString("vi-VN")}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="sidebar-cta">
                                <div className="sidebar-cta-icon">☕</div>
                                <h4>Tư vấn miễn phí</h4>
                                <p>Liên hệ để được tư vấn giải pháp cà phê phù hợp nhất</p>
                                <a href="tel:09045698782" className="sidebar-cta-btn">
                                    090.456.98.78
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <Footer />
        </>
    );
}
