import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

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

            <section className="page-hero promo-hero">
                <div className="container">
                    <h1>Chương trình khuyến mãi</h1>
                    <p>Cập nhật các ưu đãi mới nhất từ ProCaffe</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="promo-grid">
                        <div className="promo-card featured">
                            <div className="promo-badge">HOT</div>
                            <div className="promo-image">
                                <img src="/images/sliders/slider-banner-mar2026.jpg" alt="Tháng của nàng" />
                            </div>
                            <div className="promo-content">
                                <h2>Tháng Của Nàng - Ưu Đãi Ngập Tràn</h2>
                                <p>Quà tặng 5 triệu • Mua 1 tặng 1 • Giảm đến 70% cho các sản phẩm máy pha cà phê cao cấp</p>
                                <div className="promo-meta">
                                    <span>📅 Tháng 3/2026</span>
                                    <span>🏷️ Tất cả sản phẩm</span>
                                </div>
                                <Link href="/products" className="btn-primary">Xem sản phẩm</Link>
                            </div>
                        </div>

                        <div className="promo-card">
                            <div className="promo-image">
                                <img src="/images/sliders/slider-bialetti-stranger.jpg" alt="Bialetti Stranger Things" />
                            </div>
                            <div className="promo-content">
                                <h2>Bialetti x Stranger Things</h2>
                                <p>Bộ sưu tập ấm Bialetti giới hạn phiên bản Stranger Things - Sản phẩm độc quyền tại ProCaffe</p>
                                <Link href="/products?cat=bialetti" className="btn-outline">Chi tiết</Link>
                            </div>
                        </div>

                        <div className="promo-card">
                            <div className="promo-image">
                                <img src="/images/sliders/slider-4c.webp" alt="Chứng nhận 4C" />
                            </div>
                            <div className="promo-content">
                                <h2>ProCaffe đạt chứng nhận 4C</h2>
                                <p>Vinh hạnh là nhà rang cà phê đầu tiên tại Việt Nam đạt chứng nhận 4C về phát triển bền vững cà phê</p>
                                <Link href="/gioi-thieu" className="btn-outline">Tìm hiểu thêm</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
