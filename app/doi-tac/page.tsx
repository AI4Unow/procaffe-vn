import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

const partners = [
    { name: "Saeco", logo: "https://procaffe.vn/wp-content/uploads/2023/02/saeco-logo.png" },
    { name: "Wega", logo: "https://procaffe.vn/wp-content/uploads/2023/02/wega-logo.png" },
    { name: "Gaggia", logo: "https://procaffe.vn/wp-content/uploads/2023/02/gaggia-logo.png" },
    { name: "Eureka", logo: "https://procaffe.vn/wp-content/uploads/2023/02/eureka-logo.png" },
    { name: "Bialetti", logo: "https://procaffe.vn/wp-content/uploads/2023/02/bialetti-logo.png" },
    { name: "Vitamix", logo: "https://procaffe.vn/wp-content/uploads/2023/02/vitamix-logo.png" },
    { name: "Lelit", logo: "https://procaffe.vn/wp-content/uploads/2023/02/lelit-logo.png" },
    { name: "Fiorenzato", logo: "https://procaffe.vn/wp-content/uploads/2023/02/fiorenzato-logo.png" },
    { name: "Mahlkönig", logo: "https://procaffe.vn/wp-content/uploads/2023/02/mahlkonig-logo.png" },
    { name: "Kees van der Westen", logo: "https://procaffe.vn/wp-content/uploads/2024/01/Kees-Van-der-Westen-Logo.png" },
    { name: "Synesso", logo: "https://procaffe.vn/wp-content/uploads/2024/01/Synesso-Logo.png" },
    { name: "Barista Attitude", logo: "https://procaffe.vn/wp-content/uploads/2024/01/Barista-Attitude-Logo.png" },
    { name: "Coffee Queen", logo: "https://procaffe.vn/wp-content/uploads/2023/02/coffee-queen-logo.png" },
    { name: "Gimoka", logo: "https://procaffe.vn/wp-content/uploads/2023/02/gimoka-logo.png" },
];

export default function PartnersPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Đối tác</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Đối tác</h1>
                    <p>Các thương hiệu hàng đầu thế giới mà ProCaffe phân phối chính thức tại Việt Nam</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="logo-grid">
                        {partners.map((p, i) => (
                            <div key={i} className="logo-grid-item">
                                <img src={p.logo} alt={p.name} title={p.name} />
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
