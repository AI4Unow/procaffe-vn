import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

const services = [
    {
        id: "sua-chua",
        icon: "🔧",
        title: "Sửa chữa - Bảo hành",
        description: "Dịch vụ bảo hành chính hãng và sửa chữa máy pha cà phê với đội ngũ kỹ thuật viên chuyên nghiệp, linh kiện chính hãng, thời gian xử lý nhanh chóng.",
        features: ["Bảo hành chính hãng", "Linh kiện chính hãng", "Kỹ thuật viên chuyên nghiệp", "Hỗ trợ tận nơi"],
    },
    {
        id: "cho-thue",
        icon: "☕",
        title: "Cho thuê máy pha cà phê",
        description: "Dịch vụ cho thuê máy pha cà phê chuyên nghiệp phù hợp cho sự kiện, hội nghị, văn phòng hoặc quán cà phê mới khai trương.",
        features: ["Máy chuyên nghiệp", "Bảo trì định kỳ", "Linh hoạt hợp đồng", "Hỗ trợ kỹ thuật 24/7"],
    },
    {
        id: "khoa-hoc",
        icon: "📚",
        title: "Khóa học pha chế",
        description: "Đào tạo pha chế cà phê từ cơ bản đến nâng cao với giảng viên giàu kinh nghiệm, giúp bạn nắm vững kỹ thuật pha espresso, latte art, và các thức uống cà phê đặc biệt.",
        features: ["Giảng viên chuyên nghiệp", "Thực hành trực tiếp", "Chứng nhận hoàn thành", "Cập nhật xu hướng mới"],
    },
    {
        id: "setup-quan",
        icon: "🏪",
        title: "Setup quán cà phê",
        description: "Tư vấn và triển khai toàn diện giải pháp quán cà phê từ thiết kế menu, chọn máy, đào tạo nhân viên đến vận hành.",
        features: ["Tư vấn mô hình", "Thiết kế menu", "Lựa chọn thiết bị", "Đào tạo nhân viên"],
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Dịch vụ</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Dịch vụ ProCaffe</h1>
                    <p>Giải pháp toàn diện cho mọi nhu cầu liên quan đến cà phê</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, i) => (
                            <div key={i} id={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((f, j) => (
                                        <li key={j}><span className="check">✓</span> {f}</li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="btn-primary">Liên hệ tư vấn</Link>
                            </div>
                        ))}
                    </div>

                    <div className="cta-banner">
                        <h2>Cần tư vấn thêm?</h2>
                        <p>Liên hệ ngay để được hỗ trợ tận tình</p>
                        <div className="cta-phones">
                            <a href="tel:0904569878" className="cta-phone-btn">📞 CSKH: 090.456.98.78</a>
                            <a href="tel:0833066066" className="cta-phone-btn">📞 Bán lẻ: 0833.06.60.66</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
