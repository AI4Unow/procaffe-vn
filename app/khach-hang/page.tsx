import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

const customers = [
    { name: "Trung Nguyên", category: "Chuỗi cà phê" },
    { name: "Phúc Long", category: "Chuỗi cà phê" },
    { name: "The Coffee House", category: "Chuỗi cà phê" },
    { name: "Accor Hotels", category: "Khách sạn quốc tế" },
    { name: "Mercure", category: "Khách sạn quốc tế" },
    { name: "Novotel", category: "Khách sạn quốc tế" },
    { name: "Sofitel", category: "Khách sạn cao cấp" },
    { name: "Pullman", category: "Khách sạn cao cấp" },
    { name: "Sheraton", category: "Khách sạn cao cấp" },
    { name: "Hilton", category: "Khách sạn cao cấp" },
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
                    <h1>Khách hàng</h1>
                    <p>Các doanh nghiệp, chuỗi F&amp;B và khách sạn đã tin tưởng sử dụng sản phẩm và dịch vụ của ProCaffe</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="logo-grid">
                        {customers.map((c, i) => (
                            <div key={i} className="logo-grid-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 16px' }}>
                                <div style={{
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: '#E65100', color: '#fff',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 24, fontWeight: 700, marginBottom: 12
                                }}>
                                    {c.name.charAt(0)}
                                </div>
                                <strong style={{ fontSize: 14, textAlign: 'center' }}>{c.name}</strong>
                                <span style={{ fontSize: 12, color: '#888', marginTop: 4 }}>{c.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}

