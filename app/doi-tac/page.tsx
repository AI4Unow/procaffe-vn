import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

const partners = [
    { name: "Saeco", logo: "/images/brands/16.png" },
    { name: "Wega", logo: "/images/brands/11.png" },
    { name: "Gaggia", logo: "/images/brands/14.png" },
    { name: "Eureka", logo: "/images/brands/18.png" },
    { name: "Bialetti", logo: "/images/brands/12.png" },
    { name: "Vitamix", logo: "/images/brands/21.png" },
    { name: "Lelit", logo: "/images/brands/15.png" },
    { name: "Fiorenzato", logo: "/images/brands/8.png" },
    { name: "Mahlkönig", logo: "/images/brands/6.png" },
    { name: "Kees van der Westen", logo: "/images/brands/1.png" },
    { name: "Synesso", logo: "/images/brands/20.png" },
    { name: "Barista Attitude", logo: "/images/brands/7.png" },
    { name: "Coffee Queen", logo: "/images/brands/19.png" },
    { name: "Gimoka", logo: "/images/brands/5.png" },
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
