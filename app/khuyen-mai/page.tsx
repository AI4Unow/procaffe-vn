import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import ArticleSidebar from "../components/article-sidebar";
import Link from "next/link";
import posts from "../../data/posts.json";

const KHUYEN_MAI_CAT_ID = 89;

const promos = posts
    .filter((p) => p.categories?.includes(KHUYEN_MAI_CAT_ID))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function PromotionsPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Khuyến mãi</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <h1
                        className="archive-title"
                        style={{
                            fontSize: 24,
                            fontWeight: 700,
                            marginBottom: 24,
                            fontFamily: "var(--font-heading)",
                        }}
                    >
                        Category: Khuyến Mãi
                    </h1>

                    <div className="article-layout">
                        <div className="article-main">
                            {promos.map((post) => (
                                <article key={post.id} className="blog-archive-post">
                                    {post.featured_image && (
                                        <Link href={`/blog/${post.slug}`} className="blog-archive-image">
                                            <img
                                                src={post.featured_image}
                                                alt={post.title}
                                                loading="lazy"
                                            />
                                        </Link>
                                    )}
                                    <div className="blog-archive-content">
                                        <h2 className="blog-archive-title">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <span className="blog-archive-date">
                                            {new Date(post.date).toLocaleDateString("vi-VN", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                            })}
                                        </span>
                                        {post.excerpt && (
                                            <p className="blog-archive-excerpt">{post.excerpt}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {promos.length === 0 && (
                                <p style={{ color: "#888", fontStyle: "italic" }}>
                                    Chưa có bài viết khuyến mãi nào.
                                </p>
                            )}
                        </div>

                        <ArticleSidebar />
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
