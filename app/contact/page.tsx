import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";
import ContactModal from "./ContactModal";

export const metadata = {
    title: "Liên hệ | ProCaffe - Showroom HCM & Hà Nội",
    description: "Liên hệ ProCaffe: Showroom HCM Số 1 Đường C18 P. Bảy Hiền, Showroom Hà Nội Số 126 Nguyễn Văn Tuyết. Hotline: 090.456.98.78.",
};

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
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14898.165178961597!2d105.8189827!3d21.0110168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7beec4b8d7%3A0x6a053deebdeebd5f!2s126%20Nguy%E1%BB%85n%20V%C4%83n%20Tuy%E1%BA%BFt%2C%20Ng%C3%A3%20T%C6%B0%20S%E1%BB%9F%2C%20%C4%90%E1%BB%91ng%20%C4%90a%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
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
                    <span className="breadcrumb-sep" style={{ margin: "0 8px" }}>/</span>
                    <span>Liên hệ</span>
                </div>
            </div>

            <section className="content-section">
                <div className="container">
                    {/* Company title */}
                    <h2 style={{ textAlign: "center", color: "var(--primary)", fontSize: 28, fontWeight: 700, marginBottom: 24, textTransform: 'uppercase' }}>
                        Công ty Cổ phần Quốc tế Bách Hợp
                    </h2>

                    {/* Company info */}
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <ul style={{ listStyle: "disc", display: "inline-block", textAlign: "left", fontSize: 15, color: "#333", lineHeight: 1.8 }}>
                            <li><strong>Mã số thuế:</strong> 0310557217</li>
                            <li><strong>Người đại diện:</strong> Ông Nguyễn Thành Công</li>
                            <li><strong>Ngày cấp ĐKKD/QĐTL:</strong> 26/09/2011</li>
                            <li><strong>Cơ quan cấp:</strong> Sở kế hoạch và đầu tư TP.HCM</li>
                        </ul>
                    </div>

                    {/* Main branches with maps */}
                    {branchesMain.map((branch, i) => (
                        <div key={i} className="branch-section">
                            <h3 className="contact-branch-header">{branch.name}</h3>
                            <div className="branch-row" style={{ marginTop: 20 }}>
                                <div className="branch-info">
                                    <div className="branch-detail">
                                        <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg></span>
                                        <div>
                                            <p className="detail-label">Địa chỉ:</p>
                                            <p>{branch.address}</p>
                                        </div>
                                    </div>
                                    <div className="branch-detail">
                                        <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" /></svg></span>
                                        <div>
                                            <p className="detail-label">Hotline:</p>
                                            <p><a href={`tel:${branch.hotline.replace(/[^0-9]/g, "")}`}>{branch.hotline}</a></p>
                                        </div>
                                    </div>
                                    <div className="branch-detail">
                                        <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg></span>
                                        <div>
                                            <p className="detail-label">Điện thoại:</p>
                                            <p>{branch.phone}</p>
                                        </div>
                                    </div>
                                    <div className="branch-detail">
                                        <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" /><circle cx="18" cy="11.5" r="1" /></svg></span>
                                        <div>
                                            <p className="detail-label">Fax:</p>
                                            <p>{branch.fax}</p>
                                        </div>
                                    </div>
                                    <div className="branch-detail">
                                        <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg></span>
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
                                    <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" /></svg></span>
                                    <div>
                                        <p className="detail-label">Hotline:</p>
                                        <p><a href={`tel:${branch.hotline}`}>{branch.hotline}</a></p>
                                    </div>
                                </div>
                                <div className="branch-detail" style={{ marginTop: 12 }}>
                                    <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg></span>
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
            <ContactModal />
        </>
    );
}
