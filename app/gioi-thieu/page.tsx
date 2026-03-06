import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Giới thiệu</span>
                </div>
            </div>

            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1>Giới thiệu ProCaffe</h1>
                    <p>Nhà cung cấp hàng đầu các giải pháp toàn diện liên quan đến cà phê tại Việt Nam</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div id="doi-tac" className="content-block">
                        <h2>Về ProCaffe</h2>
                        <p>
                            ProCaffe – thuộc Công ty Cổ phần Quốc tế Bách Hợp – là nhà cung cấp hàng đầu tại Việt Nam
                            về các giải pháp toàn diện liên quan đến cà phê. Với hơn 13 năm kinh nghiệm, ProCaffe tự hào
                            là đối tác phân phối chính thức của các thương hiệu máy pha cà phê danh tiếng thế giới như
                            Saeco (Ý), Wega (Ý), Lelit (Ý), Gaggia (Ý), Eureka (Ý), Fiorenzato (Ý), Bialetti (Ý),
                            Mahlkönig (Đức), Vitamix (Mỹ), và nhiều thương hiệu khác.
                        </p>
                    </div>

                    <div id="su-mang" className="content-block">
                        <h2>Sứ mệnh</h2>
                        <p>
                            Mang đến cho người Việt Nam những trải nghiệm cà phê đẳng cấp quốc tế,
                            từ hạt cà phê chất lượng đến các giải pháp máy pha cà phê chuyên nghiệp.
                            Không chỉ cung cấp sản phẩm, ProCaffe còn mang đến dịch vụ tư vấn, lắp đặt,
                            bảo hành và đào tạo pha chế chuyên nghiệp.
                        </p>
                    </div>

                    <div id="khach-hang" className="content-block">
                        <h2>Tầm nhìn</h2>
                        <p>
                            Trở thành hệ sinh thái cà phê toàn diện hàng đầu Đông Nam Á, nơi mỗi ly cà phê
                            đều là tác phẩm nghệ thuật và mỗi khách hàng đều tìm thấy giải pháp phù hợp nhất.
                        </p>
                    </div>

                    <div id="hoat-dong" className="about-features">
                        <div className="about-feature-card">
                            <div className="feature-icon">🏆</div>
                            <h3>13+ năm kinh nghiệm</h3>
                            <p>Hoạt động từ 2011, phục vụ hàng nghìn khách hàng trên toàn quốc</p>
                        </div>
                        <div className="about-feature-card">
                            <div className="feature-icon">🌍</div>
                            <h3>20+ thương hiệu quốc tế</h3>
                            <p>Đối tác phân phối chính thức của các thương hiệu hàng đầu thế giới</p>
                        </div>
                        <div className="about-feature-card">
                            <div className="feature-icon">🔧</div>
                            <h3>Dịch vụ toàn diện</h3>
                            <p>Tư vấn, lắp đặt, bảo hành, sửa chữa, đào tạo pha chế</p>
                        </div>
                        <div className="about-feature-card">
                            <div className="feature-icon">📍</div>
                            <h3>Showroom HCM & Hà Nội</h3>
                            <p>Hệ thống showroom trải nghiệm trực tiếp tại 2 thành phố lớn</p>
                        </div>
                    </div>

                    <div id="doanh-nghiep" className="content-block">
                        <h2>Thông tin doanh nghiệp</h2>
                        <div className="company-info-grid">
                            <div className="info-item"><strong>Tên công ty:</strong> Công ty Cổ phần Quốc tế Bách Hợp</div>
                            <div className="info-item"><strong>Mã số thuế:</strong> 0310557217</div>
                            <div className="info-item"><strong>Ngày cấp:</strong> 26/09/2011</div>
                            <div className="info-item"><strong>Người đại diện:</strong> Ông Nguyễn Thành Công</div>
                            <div className="info-item"><strong>Cơ quan cấp:</strong> Sở Kế hoạch và Đầu tư TP.HCM</div>
                            <div className="info-item"><strong>Điện thoại:</strong> 028 3526 4108</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
