import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import TrustBadgesSidebar from "../components/trust-badges-sidebar";
import Link from "next/link";

export const metadata = {
    title: "Chính sách ưu đãi chương trình thành viên ProCaffe",
    description:
        "Tham gia chương trình thành viên ProCaffe để nhận ưu đãi giảm giá đến 10%, miễn phí vận chuyển toàn quốc và nhiều quyền lợi hấp dẫn.",
};

export default function MembersPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/chinh-sach/bao-hanh">Chính Sách &amp; Quy Định</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Chính sách ưu đãi chương trình thành viên</span>
                </div>
            </div>

            <section className="content-section">
                <div className="container">
                    <div className="article-layout">
                        {/* Main content — left column */}
                        <div className="article-main">
                            <h1 className="article-title">Chính sách ưu đãi chương trình thành viên</h1>
                            <span className="article-date">03/02/2024</span>

                            {/* Related posts box */}
                            <div className="related-posts-box">
                                <p className="related-posts-label">TIN LIÊN QUAN</p>
                                <ul>
                                    <li><Link href="/blog">Báo Cáo Thị Trường Máy Pha Cà Phê 2025: Việt Nam Và Cơ Hội Tăng Trưởng 2026</Link></li>
                                    <li><Link href="/products">Máy xay cà phê specialty Eureka ATOM Specialty | Chất lượng Ý vững vàng, giá tốt</Link></li>
                                    <li><Link href="/blog">Hướng dẫn bảo trì máy xay Vitamix: Giữ máy xay luôn bền bỉ</Link></li>
                                    <li><Link href="/blog">Máy xay sinh tố Vitamix – Kỹ thuật bền bỉ &amp; chính xác cho vận hành lâu dài</Link></li>
                                </ul>
                            </div>

                            {/* Promotional banner */}
                            <div className="article-banner">
                                <img
                                    src="https://procaffe.vn/wp-content/uploads/2024/02/MUA-ONLINE-PROCAFFE-2024-1.png"
                                    alt="Đăng ký thành viên MUA ONLINE - Miễn phí vận chuyển toàn quốc - Giảm đến 10% tất cả sản phẩm"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>

                            {/* Policy title */}
                            <h1 className="article-title" style={{ textAlign: "center", marginTop: 32 }}>
                                Chính sách ưu đãi chương trình thành viên ProCaffe
                            </h1>

                            {/* Comparison table — image from original site */}
                            <div className="article-table-image">
                                <img
                                    src="https://procaffe.vn/wp-content/uploads/2024/02/ProCaffe-vinh-hanh-la-Nha-rang-ca-phe-dau-tien-tai-Viet-Nam-dat-chung-nhan-4C-2.jpg"
                                    alt="Bảng so sánh chính sách ưu đãi: Khách vãng lai vs Thành viên ProCaffe"
                                    style={{ width: "100%", height: "auto", border: "2px solid #e74c3c" }}
                                />
                            </div>

                            {/* Policy notes */}
                            <div className="policy-notes">
                                <p>
                                    <span style={{ color: "#e74c3c" }}>*</span>  Miễn phí vận chuyển khi gửi qua Viettel Post, thời gian giao hàng từ 3 – 5 ngày làm việc. Miễn phí tối đa 30.000đ/đơn hàng dưới 1 triệu, 50.000đ/đơn hàng 1 – 10 triệu và 100.000đ với đơn trên 10 triệu.
                                </p>
                                <p>
                                    <span style={{ color: "#e74c3c" }}>**</span>  Không áp dụng đồng thời với các chương trình ưu đãi khác hoặc chương trình trả góp
                                </p>
                                <p>
                                    <span style={{ color: "#e74c3c" }}>***</span>  Giá website chưa bao gồm xuất VAT
                                </p>
                                <p>
                                    <span style={{ color: "#e74c3c" }}>****</span>Chương trình ưu đãi thành viên chỉ áp dụng đối với đặt hàng mua online trên website www.procaffe.vn
                                </p>
                            </div>

                            {/* CTA */}
                            <p style={{ textAlign: "center", margin: "32px 0" }}>
                                <Link href="/thanh-vien/dang-ky" style={{ color: "#e74c3c", fontWeight: "bold", textDecoration: "underline", fontSize: "1.1rem" }}>
                                    ĐĂNG KÝ THÀNH VIÊN PROCAFFE NGAY HÔM NAY ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT
                                </Link>
                            </p>

                            {/* Post tags */}
                            <div className="article-tags">
                                <Link href="/chinh-sach/bao-hanh">Chính Sách &amp; Quy Định</Link>,{" "}
                                <Link href="/blog">Tin Tức</Link>
                            </div>
                        </div>

                        {/* Sidebar — right column */}
                        <TrustBadgesSidebar />
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
