import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

const branchesMain = [
    {
        name: "Chi nhánh Hồ Chí Minh",
        address: "Số 1 Đường C18, P. Bảy Hiền, TP. HCM (tầng 2, phía trên KAI Coffee) - Đỗ ô tô nhanh. Mở cửa thứ hai - thứ sáu: 8am - 5pm, thứ bảy: 8am - 12am",
        hotline: "Bán lẻ 0833066066",
        phone: "028 3526 4108",
        fax: "CSKH 0904569878",
        email: "info@procaffe.vn",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9672701827395!2d106.67946853726167!3d10.774783569372211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7536857441%3A0x3337976297909d13!2zTcOheSBwaGEgY8OgIHBow6ogUFJPQ0FGRkU!5e0!3m2!1svi!2sus!4v1601910769163!5m2!1svi!2sus",
    },
    {
        name: "Chi Nhánh Hà Nội",
        address: "Số 126 Đường Nguyễn Văn Tuyết, P. Đống Đa, Hà Nội - Đỗ ô tô nhanh",
        hotline: "0904860878",
        phone: "CSKH (Bán lẻ) 0898001878",
        fax: "024 6269 8496",
        email: "info@procaffe.vn",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14898.165178961597!2d105.8189827!3d21.0110168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8a4bc74fb225a72!2zTcOheSBQaGEgQ8OgIFBow6ogUFJPQ0FGRkUgSMOAIE7hu5hJ!5e0!3m2!1svi!2s!4v1646907302637!5m2!1svi!2s",
    },
];

const branchesSmall = [
    {
        name: "Chi nhánh Đà Nẵng",
        hotline: "0833066026",
        email: "info@procaffe.vn",
    },
    {
        name: "Chi nhánh Nha Trang",
        hotline: "0898001878",
        email: "info@procaffe.vn",
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

            <section className="content-section">
                <div className="container">
                    {/* Company title */}
                    <h2 style={{ textAlign: "center", color: "var(--primary)", fontSize: 28, fontWeight: 700, marginBottom: 24 }}>
                        CÔNG TY CỔ PHẦN QUỐC TẾ BÁCH HỢP
                    </h2>

                    {/* Company info */}
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <ul style={{ listStyle: "disc", display: "inline-block", textAlign: "left", fontSize: 15, color: "#333", lineHeight: 1.8 }}>
                            <li><strong>Mã số thuế:</strong> 0310557217</li>
                            <li><strong>Người đại diện:</strong> Ông Nguyễn Thành Công</li>
                            <li><strong>Ngày cấp ĐKKD/QĐTL:</strong> 26/09/2011</li>
                        </ul>
                    </div>

                    {/* Main branches with maps */}
                    {branchesMain.map((branch, i) => (
                        <div key={i} className="branch-section">
                            <h3 className="contact-branch-header">{branch.name}</h3>
                            <div className="branch-row" style={{ marginTop: 20 }}>
                                <div className="branch-info">
                                    <div className="branch-detail">
                                        <span className="detail-icon">📍</span>
                                        <div>
                                            <p className="detail-label">Địa chỉ:</p>
                                            <p>{branch.address}</p>
                                        </div>
                                    </div>
                                    <div className="branch-detail">
                                        <span className="detail-icon">📱</span>
                                        <div>
                                            <p className="detail-label">Hotline:</p>
                                            <p><a href={`tel:${branch.hotline.replace(/[^0-9]/g, "")}`}>{branch.hotline}</a></p>
                                        </div>
                                    </div>
                                    <div className="branch-detail">
                                        <span className="detail-icon">☎️</span>
                                        <div>
                                            <p className="detail-label">Điện thoại:</p>
                                            <p>{branch.phone}</p>
                                        </div>
                                    </div>
                                    <div className="branch-detail">
                                        <span className="detail-icon">📠</span>
                                        <div>
                                            <p className="detail-label">Fax:</p>
                                            <p>{branch.fax}</p>
                                        </div>
                                    </div>
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

                    {/* Smaller branches */}
                    {branchesSmall.map((branch, i) => (
                        <div key={i} className="branch-section">
                            <h3 className="contact-branch-header">{branch.name}</h3>
                            <div style={{ padding: "20px 0" }}>
                                <div className="branch-detail">
                                    <span className="detail-icon">📱</span>
                                    <div>
                                        <p className="detail-label">Hotline:</p>
                                        <p><a href={`tel:${branch.hotline}`}>{branch.hotline}</a></p>
                                    </div>
                                </div>
                                <div className="branch-detail" style={{ marginTop: 12 }}>
                                    <span className="detail-icon">✉️</span>
                                    <div>
                                        <p className="detail-label">Email:</p>
                                        <p><a href={`mailto:${branch.email}`}>{branch.email}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
