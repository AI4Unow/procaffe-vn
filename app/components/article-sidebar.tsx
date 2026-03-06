import Link from "next/link";
import posts from "../../data/posts.json";

const recentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

export default function ArticleSidebar() {
    return (
        <aside className="article-sidebar">
            {/* Recent Posts Widget */}
            <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Bài viết mới</h3>
                {recentPosts.map((post) => (
                    <div key={post.id} className="sidebar-news-item">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="sidebar-news-title"
                        >
                            {post.title}
                        </Link>
                    </div>
                ))}
            </div>

            {/* CTA Widget */}
            <div className="sidebar-widget sidebar-cta-widget">
                <h3 className="sidebar-widget-title">Tư vấn miễn phí</h3>
                <div style={{ padding: "20px 16px", textAlign: "center" }}>
                    <div style={{ fontSize: 48, marginBottom: 12 }}>☕</div>
                    <p
                        style={{
                            fontSize: 14,
                            color: "#555",
                            lineHeight: 1.6,
                            marginBottom: 16,
                        }}
                    >
                        Liên hệ để được tư vấn giải pháp cà phê phù hợp nhất
                    </p>
                    <a
                        href="tel:0904569878"
                        style={{
                            display: "inline-block",
                            background: "var(--primary)",
                            color: "#fff",
                            padding: "10px 24px",
                            borderRadius: 8,
                            fontWeight: 700,
                            fontSize: 16,
                            textDecoration: "none",
                        }}
                    >
                        090.456.98.78
                    </a>
                </div>
            </div>
        </aside>
    );
}
