import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import TrustBadgesSidebar from "../../components/trust-badges-sidebar";
import Link from "next/link";

export const metadata = {
    title: "Đăng ký thành viên ProCaffe – Nhận ưu đãi đặc biệt",
    description:
        "Đăng ký thành viên ProCaffe để nhận ưu đãi giảm giá đến 10%, miễn phí vận chuyển toàn quốc và nhiều quyền lợi hấp dẫn khác.",
};

export default function MemberRegistrationPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/thanh-vien">Thành viên Procaffe</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Đăng ký thành viên</span>
                </div>
            </div>

            <section className="content-section">
                <div className="container">
                    <div className="article-layout">
                        {/* Main content */}
                        <div className="article-main">
                            <h1 className="article-title">Đăng ký thành viên ProCaffe</h1>

                            <div className="article-body">
                                {/* Banner */}
                                <div className="article-banner">
                                    <img
                                        src="/images/content/MUA-ONLINE-PROCAFFE-2024-1.svg"
                                        alt="Đăng ký thành viên MUA ONLINE - Miễn phí vận chuyển toàn quốc - Giảm đến 10% tất cả sản phẩm"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>

                                <div className="member-reg-content">
                                    <h2>Quyền lợi thành viên ProCaffe</h2>
                                    <p>
                                        Khi trở thành thành viên ProCaffe, bạn sẽ được hưởng nhiều
                                        ưu đãi đặc biệt:
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>Giảm giá đến 10%</strong> tất cả sản phẩm khi mua
                                            online trên website
                                        </li>
                                        <li>
                                            <strong>Miễn phí vận chuyển</strong> toàn quốc qua Viettel
                                            Post
                                        </li>
                                        <li>
                                            <strong>Ưu tiên</strong> các chương trình khuyến mãi và sự
                                            kiện đặc biệt
                                        </li>
                                        <li>
                                            <strong>Tích lũy điểm</strong> để nhận quà tặng và ưu đãi
                                            thêm
                                        </li>
                                        <li>
                                            <strong>Hỗ trợ kỹ thuật</strong> ưu tiên và tư vấn chuyên
                                            sâu
                                        </li>
                                    </ul>

                                    <p style={{ marginTop: 16 }}>
                                        👉{" "}
                                        <Link
                                            href="/thanh-vien"
                                            style={{
                                                color: "var(--primary)",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Xem chi tiết chính sách ưu đãi chương trình thành viên
                                        </Link>
                                    </p>

                                    <h2 style={{ marginTop: 32 }}>Đăng ký thành viên</h2>
                                    <p>
                                        Để đăng ký thành viên ProCaffe, vui lòng liên hệ trực tiếp
                                        tại Showroom hoặc gọi đến hotline:
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="cta-banner">
                                    <p>
                                        <strong>ĐĂNG KÝ THÀNH VIÊN PROCAFFE</strong>
                                    </p>
                                    <p className="cta-phones">
                                        Hotline:{" "}
                                        <a href="tel:0904569878">090.456.98.78</a>
                                        {" | "}
                                        <a href="tel:02835264108">028 3526 4108</a>
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href="mailto:info@procaffe.vn">info@procaffe.vn</a>
                                    </p>
                                </div>

                                <div style={{ marginTop: 24 }}>
                                    <h3>Showroom</h3>
                                    <p>
                                        <strong>Hồ Chí Minh:</strong> Số 1 Đường C18, P. Bảy Hiền,
                                        TP. HCM (tầng 2, phía trên KAI Coffee) – Hotline{" "}
                                        <a href="tel:0833066066">0833.06.60.66</a> –{" "}
                                        <a href="tel:0936102878">0936.10.28.78</a>
                                    </p>
                                    <p>
                                        <strong>Hà Nội:</strong> Số 126 đường Nguyễn Văn Tuyết, p.
                                        Đống Đa, Hà Nội – Hotline{" "}
                                        <a href="tel:0904860878">0904.86.08.78</a> –{" "}
                                        <a href="tel:0898001878">0898.00.18.78</a>
                                    </p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="article-tags">
                                <Link href="/thanh-vien">Thành viên Procaffe</Link>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <TrustBadgesSidebar />
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
