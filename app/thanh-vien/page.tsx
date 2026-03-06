import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

export default function MembersPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Thành viên Procaffe</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Thành viên ProCaffe</h1>
                    <p>Gia nhập cộng đồng cà phê ProCaffe để nhận nhiều ưu đãi đặc biệt</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="member-benefits">
                        <h2>Quyền lợi thành viên</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">🎁</div>
                                <h3>Ưu đãi độc quyền</h3>
                                <p>Nhận các chương trình khuyến mãi, giảm giá dành riêng cho thành viên</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">⭐</div>
                                <h3>Tích điểm thưởng</h3>
                                <p>Tích lũy điểm với mỗi giao dịch, đổi quà hấp dẫn</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🔔</div>
                                <h3>Ưu tiên sự kiện</h3>
                                <p>Được mời tham gia các sự kiện, workshop pha chế độc quyền</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🛡️</div>
                                <h3>Bảo hành mở rộng</h3>
                                <p>Thời gian bảo hành mở rộng cho các sản phẩm mua tại ProCaffe</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Trở thành thành viên ngay hôm nay</h2>
                        <p>Liên hệ để được tư vấn chương trình thành viên phù hợp</p>
                        <div className="cta-phones">
                            <a href="tel:0904569878" className="cta-phone-btn">📞 Hotline: 090.456.98.78</a>
                            <Link href="/contact" className="btn-primary">Đăng ký ngay</Link>
                        </div>
                    </div>

                    <div className="content-block">
                        <h2>Tuyển dụng</h2>
                        <p>
                            ProCaffe luôn chào đón những đồng nghiệp mới đam mê cà phê và mong muốn phát triển
                            sự nghiệp trong ngành. Chúng tôi cung cấp môi trường làm việc chuyên nghiệp, năng động
                            và nhiều cơ hội phát triển.
                        </p>
                        <p>
                            Vui lòng gửi CV về email: <a href="mailto:hr@procaffe.vn" style={{ color: "var(--primary)" }}>hr@procaffe.vn</a> hoặc
                            liên hệ hotline: <a href="tel:0904569878" style={{ color: "var(--primary)" }}>090.456.98.78</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
