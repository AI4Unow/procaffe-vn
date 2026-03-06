import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import ArticleSidebar from "../../components/article-sidebar";
import Link from "next/link";

export default function SauBanHangPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/dich-vu">Dịch vụ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Dịch vụ sau bán hàng</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <h1 className="article-title">
                                LIÊN HỆ ĐỂ ĐƯỢC CHĂM SÓC SAU BÁN HÀNG
                            </h1>

                            <div className="article-body">
                                <h3>
                                    Dịch vụ tư vấn, hướng dẫn sử dụng, hướng dẫn vệ sinh, báo hỏng máy và đặt
                                    hàng được thực hiện qua điện thoại, video call hoặc các phương tiện khác 24/7
                                </h3>
                                <p>Quý khách chỉ cần liên hệ hotline:</p>

                                <div className="service-contact-grid">
                                    <div className="service-contact-card">
                                        <h4>TP Hồ Chí Minh</h4>
                                        <p>
                                            (Bán lẻ) <a href="tel:0904531878"><strong>0904.531.878</strong></a>
                                            <br />
                                            (Dự án) <a href="tel:0936115878"><strong>0936.115.878</strong></a>
                                        </p>
                                    </div>
                                    <div className="service-contact-card">
                                        <h4>Hà Nội</h4>
                                        <p>
                                            <a href="tel:0931859878"><strong>0931.859.878</strong></a>
                                        </p>
                                    </div>
                                    <div className="service-contact-card">
                                        <h4>Đà Nẵng</h4>
                                        <p>
                                            <a href="tel:0833066026"><strong>0833.066.026</strong></a>
                                        </p>
                                    </div>
                                    <div className="service-contact-card">
                                        <h4>Nha Trang</h4>
                                        <p>
                                            <a href="tel:0903208008"><strong>0903.208.008</strong></a>
                                        </p>
                                    </div>
                                </div>

                                <p>
                                    Khách hàng gửi máy đến trung tâm bảo hành của ProCaffe. Phụ kiện thay thế
                                    là phụ kiện chính hãng. Nhân viên kĩ thuật được đào tạo tại Italia bởi các
                                    chuyên gia kĩ thuật hàng đầu của Saeco, Wega, Coffee Queen, Espresso Italia…
                                </p>

                                <h3>
                                    Dịch vụ sửa chữa, bảo hành và thay thế phụ kiện chính hãng tại 2 trung tâm
                                    bảo hành ở Hà Nội và TPHCM
                                </h3>
                                <ul>
                                    <li>
                                        <strong>Tại Hồ Chí Minh:</strong> Số 1 Đường C18, phường Bảy Hiền.
                                        Điện thoại: (028) 35264108 hoặc số Hotline: (Bán lẻ){" "}
                                        <a href="tel:0904531878">0904.531.878</a> (Dự án){" "}
                                        <a href="tel:0936115878">0936.115.878</a>
                                    </li>
                                    <li>
                                        <strong>Tại Hà Nội:</strong> 126 Nguyễn Văn Tuyết, Phường Đống Đa.
                                        Điện thoại: <a href="tel:0931069878">0931.069.878</a>
                                    </li>
                                </ul>

                                <h3>
                                    Hỗ trợ kỹ thuật ngay tại địa điểm của Quý khách bởi nhân viên của ProCaffe
                                </h3>
                                <ul>
                                    <li>
                                        Tại Đà Nẵng vui lòng liên hệ Hotline:{" "}
                                        <a href="tel:0833066026">0833.066.026</a>
                                    </li>
                                    <li>
                                        Tại Nha Trang vui lòng liên hệ Hotline:{" "}
                                        <a href="tel:0903208008">0903.208.008</a>
                                    </li>
                                </ul>

                                <div
                                    className="cta-banner"
                                    style={{ marginTop: 32 }}
                                >
                                    <h2>Cần hỗ trợ kỹ thuật?</h2>
                                    <p>Liên hệ ngay để được chăm sóc tận tình</p>
                                    <div className="cta-phones">
                                        <a
                                            href="tel:0904569878"
                                            className="cta-phone-btn"
                                        >
                                            📞 CSKH: 090.456.98.78
                                        </a>
                                        <a
                                            href="tel:0833066066"
                                            className="cta-phone-btn"
                                        >
                                            📞 Bán lẻ: 0833.06.60.66
                                        </a>
                                    </div>
                                </div>
                            </div>
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
