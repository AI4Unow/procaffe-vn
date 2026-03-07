import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import TrustBadgesSidebar from "../../components/trust-badges-sidebar";
import Link from "next/link";

export const metadata = {
    title: "Cộng tác viên ProCaffe – Chương trình CTV",
    description:
        "Tham gia chương trình Cộng tác viên ProCaffe – cơ hội hợp tác kinh doanh thiết bị pha cà phê chính hãng với hoa hồng hấp dẫn.",
};

export default function CollaboratorPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/thanh-vien">Thành viên Procaffe</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Cộng tác viên</span>
                </div>
            </div>

            <section className="content-section">
                <div className="container">
                    <div className="article-layout">
                        {/* Main content */}
                        <div className="article-main">
                            <h1 className="article-title">Cộng tác viên ProCaffe</h1>

                            <div className="article-body">
                                <div className="ctv-intro">
                                    <h2>Chương trình Cộng tác viên</h2>
                                    <p>
                                        ProCaffe mời bạn tham gia chương trình Cộng tác viên (CTV) –
                                        cơ hội hợp tác kinh doanh thiết bị pha cà phê chính hãng với
                                        chính sách hoa hồng hấp dẫn.
                                    </p>

                                    <h3>Quyền lợi CTV</h3>
                                    <ul>
                                        <li>Hoa hồng hấp dẫn cho mỗi đơn hàng giới thiệu thành công</li>
                                        <li>Được đào tạo kiến thức sản phẩm chuyên sâu</li>
                                        <li>Hỗ trợ tài liệu bán hàng, hình ảnh sản phẩm</li>
                                        <li>Chính sách giá đặc biệt dành riêng cho CTV</li>
                                        <li>Hỗ trợ kỹ thuật và dịch vụ sau bán hàng từ ProCaffe</li>
                                    </ul>

                                    <h3>Đối tượng tham gia</h3>
                                    <ul>
                                        <li>Cá nhân hoặc doanh nghiệp có mối quan hệ trong ngành F&B, Horeca</li>
                                        <li>Người có kinh nghiệm bán hàng online hoặc offline</li>
                                        <li>Chủ quán cà phê, nhà hàng có nhu cầu giới thiệu thiết bị cho đối tác</li>
                                        <li>Ai yêu thích cà phê và muốn có thêm thu nhập</li>
                                    </ul>

                                    <h3>Cách đăng ký</h3>
                                    <p>
                                        Để biết thêm chi tiết về chương trình Cộng tác viên và đăng
                                        ký tham gia, vui lòng liên hệ trực tiếp với ProCaffe:
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="cta-banner">
                                    <p>
                                        <strong>ĐĂNG KÝ CTV NGAY</strong>
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href="mailto:info@procaffe.vn">info@procaffe.vn</a>
                                    </p>
                                    <p className="cta-phones">
                                        Hotline:{" "}
                                        <a href="tel:0904569878">090.456.98.78</a>
                                        {" | "}
                                        <a href="tel:02835264108">028 3526 4108</a>
                                    </p>
                                </div>

                                <div style={{ marginTop: 24 }}>
                                    <p>
                                        Showroom Hồ Chí Minh: Số 1 Đường C18, P. Bảy Hiền, TP. HCM
                                        (tầng 2, phía trên KAI Coffee)
                                    </p>
                                    <p>
                                        Showroom Hà Nội: Số 126 đường Nguyễn Văn Tuyết, p. Đống Đa,
                                        Hà Nội
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
