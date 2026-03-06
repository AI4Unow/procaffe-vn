import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

const branches = [
    {
        name: "Showroom Hồ Chí Minh",
        address: "Số 1 Đường C18, P. Bảy Hiền, TP. HCM (tầng 2, phía trên KAI Coffee)",
        note: "Đỗ ô tô nhanh hoặc gửi Cộng Hòa Plaza",
        hotline: ["0833.06.60.66", "0936.10.28.78"],
        cskh: "090.456.98.78",
        phone: "028 3526 4108",
        email: "info@procaffe.vn",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9672701827395!2d106.67946853726167!3d10.774783569372211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7536857441%3A0x3337976297909d13!2zTcOheSBwaGEgY8OgIHBow6AgUFJPQ0FGRkU!5e0!3m2!1svi!2sus!4v1601910769163!5m2!1svi!2sus",
    },
    {
        name: "Showroom Hà Nội",
        address: "Số 126 đường Nguyễn Văn Tuyết, p. Đống Đa, Hà Nội",
        note: "Đỗ ô tô nhanh",
        hotline: ["0904.86.08.78", "0898.00.18.78"],
        email: "hn@procaffe.vn",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14898.165178961597!2d105.8189827!3d21.0110168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8a4bc74fb225a72!2zTcOheSBQaGEgQ8OgIFBow6ogUFJPQ0FGRkUgSMOAIE7hu5hJ!5e0!3m2!1svi!2s!4v1646907302637!5m2!1svi!2s",
    },
];

export default function ContactPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Liên hệ</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Liên hệ ProCaffe</h1>
                    <p>Công ty Cổ phần Quốc tế Bách Hợp</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    {/* Company Info */}
                    <div className="contact-company-info">
                        <div className="company-info-grid">
                            <div className="info-item"><strong>Mã số thuế:</strong> 0310557217</div>
                            <div className="info-item"><strong>Người đại diện:</strong> Ông Nguyễn Thành Công</div>
                            <div className="info-item"><strong>Ngày cấp:</strong> 26/09/2011</div>
                            <div className="info-item"><strong>Cơ quan cấp:</strong> Sở Kế hoạch và Đầu tư TP.HCM</div>
                        </div>
                    </div>

                    {/* Branches */}
                    {branches.map((branch, i) => (
                        <div key={i} className="branch-section">
                            <h2 className="branch-title">
                                <span className="branch-icon">🏢</span>
                                {branch.name}
                            </h2>
                            <div className="branch-row">
                                <div className="branch-info">
                                    <div className="branch-detail">
                                        <span className="detail-icon">📍</span>
                                        <div>
                                            <p className="detail-label">Địa chỉ:</p>
                                            <p>{branch.address}</p>
                                            {branch.note && <p className="detail-note">({branch.note})</p>}
                                        </div>
                                    </div>
                                    <div className="branch-detail">
                                        <span className="detail-icon">📱</span>
                                        <div>
                                            <p className="detail-label">Hotline:</p>
                                            {branch.hotline.map((h) => (
                                                <p key={h}><a href={`tel:${h.replace(/\./g, "")}`}>{h}</a></p>
                                            ))}
                                        </div>
                                    </div>
                                    {branch.cskh && (
                                        <div className="branch-detail">
                                            <span className="detail-icon">📞</span>
                                            <div>
                                                <p className="detail-label">CSKH:</p>
                                                <p><a href={`tel:${branch.cskh.replace(/\./g, "")}`}>{branch.cskh}</a></p>
                                            </div>
                                        </div>
                                    )}
                                    {branch.phone && (
                                        <div className="branch-detail">
                                            <span className="detail-icon">☎️</span>
                                            <div>
                                                <p className="detail-label">Điện thoại:</p>
                                                <p>{branch.phone}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="branch-detail">
                                        <span className="detail-icon">✉️</span>
                                        <div>
                                            <p className="detail-label">Email:</p>
                                            <p><a href={`mailto:${branch.email}`}>{branch.email}</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="branch-map">
                                    <iframe
                                        src={branch.mapUrl}
                                        width="100%"
                                        height="300"
                                        style={{ border: 0, borderRadius: 8 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title={branch.name}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Hotline Grid */}
                    <div className="contact-hotlines">
                        <h2>Hotline theo khu vực</h2>
                        <div className="hotlines-grid">
                            <div className="hotline-item">
                                <span className="hotline-label">CSKH</span>
                                <a href="tel:0904569878" className="hotline-number">090.456.98.78</a>
                            </div>
                            <div className="hotline-item">
                                <span className="hotline-label">Bán lẻ Nam Bộ</span>
                                <a href="tel:0833066066" className="hotline-number">0833.06.60.66</a>
                            </div>
                            <div className="hotline-item">
                                <span className="hotline-label">Bán lẻ Bắc Trung Bộ</span>
                                <a href="tel:0898001878" className="hotline-number">0898.00.18.78</a>
                            </div>
                            <div className="hotline-item">
                                <span className="hotline-label">Đại lý</span>
                                <a href="tel:0904860878" className="hotline-number">0904.86.08.78</a>
                            </div>
                            <div className="hotline-item">
                                <span className="hotline-label">Khách sạn</span>
                                <a href="tel:0936102878" className="hotline-number">0936.10.28.78</a>
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
