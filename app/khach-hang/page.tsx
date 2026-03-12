import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

export const metadata = {
    title: "Khách hàng | ProCaffe - Máy pha cà phê chuyên nghiệp",
    description: "Các doanh nghiệp, chuỗi F&B và khách sạn tin tưởng sử dụng sản phẩm và dịch vụ của ProCaffe: Trung Nguyên, Phúc Long, The Coffee House, Accor Hotels.",
};

const customerGroups = [
    {
        title: "Chuỗi cà phê & F&B",
        customers: [
            { name: "Trung Nguyên Legend", initials: "TN" },
            { name: "Phúc Long", initials: "PL" },
            { name: "The Coffee House", initials: "CH" },
            { name: "Highlands Coffee", initials: "HC" },
            { name: "La Rotisserie", initials: "LR" },
            { name: "L'Usine", initials: "LU" },
        ],
    },
    {
        title: "Khách sạn quốc tế",
        customers: [
            { name: "Accor Hotels", initials: "AC" },
            { name: "Mercure", initials: "ME" },
            { name: "Novotel", initials: "NV" },
            { name: "Sofitel", initials: "SF" },
            { name: "Pullman", initials: "PM" },
            { name: "InterContinental", initials: "IC" },
        ],
    },
    {
        title: "Khách sạn & Resort cao cấp",
        customers: [
            { name: "Sheraton", initials: "SH" },
            { name: "Hilton", initials: "HI" },
            { name: "Marriott", initials: "MA" },
            { name: "Hyatt", initials: "HY" },
            { name: "Renaissance", initials: "RE" },
            { name: "Melia", initials: "ML" },
        ],
    },
    {
        title: "Doanh nghiệp & Tập đoàn",
        customers: [
            { name: "Samsung Vietnam", initials: "SM" },
            { name: "Vingroup", initials: "VG" },
            { name: "FPT", initials: "FP" },
            { name: "Viettel", initials: "VT" },
        ],
    },
];

const stats = [
    { number: "500+", label: "Khách hàng doanh nghiệp" },
    { number: "15+", label: "Năm kinh nghiệm" },
    { number: "50+", label: "Thương hiệu phân phối" },
    { number: "1000+", label: "Máy đã lắp đặt" },
];

export default function CustomersPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Khách hàng</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Khách hàng tiêu biểu</h1>
                    <p>Các doanh nghiệp, chuỗi F&amp;B và khách sạn hàng đầu đã tin tưởng sử dụng sản phẩm và dịch vụ của ProCaffe</p>
                </div>
            </section>

            {/* Stats bar */}
            <section className="customer-stats">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((s, i) => (
                            <div key={i} className="stat-item">
                                <span className="stat-number">{s.number}</span>
                                <span className="stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer groups */}
            <section className="content-section">
                <div className="container">
                    {customerGroups.map((group, gi) => (
                        <div key={gi} className="customer-group">
                            <h2 className="customer-group-title">{group.title}</h2>
                            <div className="customer-logo-grid">
                                {group.customers.map((c, ci) => (
                                    <div key={ci} className="customer-logo-card">
                                        <div className="customer-initials">{c.initials}</div>
                                        <span className="customer-name">{c.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* CTA */}
                    <div className="cta-banner" style={{ marginTop: 40 }}>
                        <p>
                            <strong>Trở thành đối tác của ProCaffe</strong>
                        </p>
                        <p>
                            Liên hệ ngay để nhận tư vấn giải pháp cà phê phù hợp cho doanh nghiệp
                        </p>
                        <div style={{ marginTop: 12, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                            <a href="tel:0904569878" className="btn-primary" style={{ padding: "10px 24px" }}>📞 090.456.98.78</a>
                            <Link href="/contact" className="btn-outline" style={{ padding: "10px 24px" }}>✉ Liên hệ</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
