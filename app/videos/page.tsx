"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";

const videos = [
    { id: "3WcW7kmp1nc", title: "Máy xay sinh tố Vitamix – Kỹ thuật bền bỉ & chính xác" },
    { id: "cSK8n-GCzLo", title: "Ấm pha cà phê Bialetti Stranger Things" },
    { id: "1bscrLt4GCA", title: "Máy xay espresso cho quán được yêu thích 2025" },
    { id: "1dv3V_PNek8", title: "Eureka ATOM W – Chuẩn mực mới của độ chính xác" },
    { id: "I2mQVg9qiB4", title: "Eureka Mignon Manuale – Lựa chọn cho người mới" },
    { id: "_23bKCg4tDg", title: "Cách Nấu Cà Phê Với Ấm Moka Pot Đúng Chuẩn" },
    { id: "58pxuMtEQTU", title: "Wega & ProCaffe: Hành Trình Mang Máy Pha Cà Phê Ý Đến Việt Nam" },
    { id: "xSJLcT1OVTQ", title: "ProCaffe – Nhà Phân Phối Chính Thức Eureka tại Việt Nam" },
    { id: "NQIoP_H1ac0", title: "ProCaffe – Nhà phân phối chính thức Bialetti từ 2011" },
    { id: "QomV6QToQ58", title: "Kees van der Westen SPIRIT – Triết Lý Vận Hành" },
    { id: "mueYu2B5OIo", title: "Gaggia Magenta và Cadorna Over Ice" },
    { id: "J38WsT8bZqM", title: "Hemro Group: Dẫn đầu thế giới máy xay cà phê" },
    { id: "nGyxtCV3EFg", title: "The Sync System – Công Nghệ Đột Phá Trên Mahlkonig" },
    { id: "DmO8-p9u5Xg", title: "Wega Pegaso vs Astoria Tanya: Đâu là lựa chọn tốt nhất?" },
    { id: "_WWbab_4HJs", title: "Nhiệt độ khi pha cà phê với ấm Moka Pot" },
    { id: "25PgtzTfUwU", title: "Phát triển thương hiệu cà phê đặc sản" },
    { id: "joWQnFfIQwY", title: "WEGA – Diện mạo mới, đầy mạnh mẽ và ấn tượng" },
    { id: "-2nqNGHoEHg", title: "Bialetti DOLCE&GABBANA Moka Express" },
    { id: "mYvgmp7vUFw", title: "Cách Pha Cafe Phin Hỗ Trợ Quán Cafe Tăng Năng Suất" },
    { id: "OR4DUtc8lW4", title: "ProCaffe: Thương Hiệu Máy Pha Cà Phê Uy Tín" },
    { id: "K07P_OdroLI", title: "Cà phê rang xay ProCaffe đạt chứng nhận 4C" },
    { id: "f3-XAf2Bkn0", title: "Máy pha cà phê Lelit MaraX – Thiết kế tinh tế" },
    { id: "KPgzGXIvbl0", title: "Eureka Mignon Zero – Công nghệ Zero Retention" },
    { id: "PK2ID2tz0d4", title: "Cà phê Gimoka – Hương vị cà phê Ý chính hiệu" },
    { id: "bVco-bwpTxk", title: "Bialetti Venus – Ấm pha cà phê inox cao cấp" },
    { id: "6xdupsmMquA", title: "Wega Pegaso – Máy pha chuyên nghiệp cho quán" },
    { id: "naHXZ6luRsc", title: "Coffee Queen – Máy lọc cà phê hàng đầu Bắc  Âu" },
    { id: "Jq6wVYhYxhM", title: "Eureka Helios 80 – Máy xay công suất lớn" },
    { id: "TXv8AUVVldg", title: "Gaggia Classic – Máy pha espresso gia đình" },
    { id: "aIgny3nIhas", title: "Synesso – Đỉnh cao máy pha cà phê Mỹ" },
    { id: "EneAaiB8yHw", title: "Fiorenzato – Thương hiệu máy xay Ý" },
    { id: "NYzXeBJGo0I", title: "Saeco – Tiên phong máy pha cappuccino tự động" },
];

function VideoCard({ video }: { video: { id: string; title: string } }) {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="video-card">
            {playing ? (
                <div className="video-embed">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            ) : (
                <div className="video-thumbnail" onClick={() => setPlaying(true)}>
                    <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        loading="lazy"
                    />
                    <div className="video-play-btn">
                        <svg width="48" height="48" viewBox="0 0 68 48">
                            <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red" />
                            <path d="M45 24L27 14v20" fill="white" />
                        </svg>
                    </div>
                </div>
            )}
            <h3 className="video-card-title">{video.title}</h3>
        </div>
    );
}

export default function VideosPage() {
    const [visibleCount, setVisibleCount] = useState(12);
    const visibleVideos = videos.slice(0, visibleCount);

    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Videos</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Videos</h1>
                    <p>Các video hướng dẫn, giới thiệu sản phẩm và chia sẻ kiến thức cà phê từ ProCaffe</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="video-grid">
                        {visibleVideos.map((video) => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                    {visibleCount < videos.length && (
                        <div style={{ textAlign: "center", marginTop: "32px" }}>
                            <button
                                className="btn-primary"
                                onClick={() => setVisibleCount((c) => c + 12)}
                                style={{ padding: "12px 32px" }}
                            >
                                Xem thêm video
                            </button>
                        </div>
                    )}

                    <div style={{ textAlign: "center", marginTop: "32px" }}>
                        <a
                            href="https://www.youtube.com/@Procaffe_Group"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ padding: "12px 28px" }}
                        >
                            🎬 Xem tất cả trên YouTube
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
