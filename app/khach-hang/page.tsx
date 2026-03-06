import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

const customers = [
    { name: "Trung Nguyên", logo: "https://procaffe.vn/wp-content/uploads/2023/02/trung-nguyen-logo.png" },
    { name: "Phúc Long", logo: "https://procaffe.vn/wp-content/uploads/2023/02/phuc-long-logo.png" },
    { name: "The Coffee House", logo: "https://procaffe.vn/wp-content/uploads/2023/02/the-coffee-house-logo.png" },
    { name: "Accor Hotels", logo: "https://procaffe.vn/wp-content/uploads/2023/02/accor-logo.png" },
    { name: "Mercure", logo: "https://procaffe.vn/wp-content/uploads/2023/02/mercure-logo.png" },
    { name: "Novotel", logo: "https://procaffe.vn/wp-content/uploads/2023/02/novotel-logo.png" },
    { name: "Sofitel", logo: "https://procaffe.vn/wp-content/uploads/2023/02/sofitel-logo.png" },
    { name: "Pullman", logo: "https://procaffe.vn/wp-content/uploads/2023/02/pullman-logo.png" },
    { name: "Sheraton", logo: "https://procaffe.vn/wp-content/uploads/2023/02/sheraton-logo.png" },
    { name: "Hilton", logo: "https://procaffe.vn/wp-content/uploads/2023/02/hilton-logo.png" },
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
                            <div key={i} className="logo-grid-item">
                                <img src={c.logo} alt={c.name} title={c.name} />
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
