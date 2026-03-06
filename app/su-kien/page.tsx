import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

export default function EventsPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Sự kiện thương hiệu</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Sự kiện thương hiệu</h1>
                    <p>Các sự kiện và hoạt động nổi bật của ProCaffe</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="events-grid">
                        <div className="event-card">
                            <div className="event-image">
                                <img src="/images/sliders/slider-4c.webp" alt="ProCaffe đạt chứng nhận 4C" />
                            </div>
                            <div className="event-content">
                                <span className="event-date">2025</span>
                                <h2>ProCaffe đạt chứng nhận 4C</h2>
                                <p>ProCaffe vinh hạnh là nhà rang cà phê đầu tiên tại Việt Nam đạt chứng nhận 4C về phát triển bền vững trong chuỗi giá trị cà phê.</p>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-image">
                                <img src="/images/sliders/slider-kees.webp" alt="Kees van der Westen" />
                            </div>
                            <div className="event-content">
                                <span className="event-date">2025</span>
                                <h2>Ra mắt Kees van der Westen tại Việt Nam</h2>
                                <p>ProCaffe chính thức trở thành nhà phân phối máy pha cà phê Kees van der Westen — thương hiệu huyền thoại từ Hà Lan.</p>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-image">
                                <img src="/images/sliders/slider-barista-attitude.webp" alt="Barista Attitude" />
                            </div>
                            <div className="event-content">
                                <span className="event-date">2025</span>
                                <h2>Barista Attitude — Thế hệ mới</h2>
                                <p>Giới thiệu dòng máy Barista Attitude mới với thiết kế hiện đại, phù hợp với phong cách cà phê đặc sản thế hệ mới.</p>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-image">
                                <img src="/images/sliders/slider-address-change.png" alt="Thay đổi địa chỉ showroom" />
                            </div>
                            <div className="event-content">
                                <span className="event-date">2025</span>
                                <h2>Thay đổi địa chỉ showroom</h2>
                                <p>ProCaffe thông báo chuyển showroom Hồ Chí Minh đến địa chỉ mới: Số 1 Đường C18, P. Bảy Hiền, TP.HCM (tầng 2, phía trên KAI Coffee)</p>
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
