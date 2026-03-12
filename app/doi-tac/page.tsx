import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

export const metadata = {
    title: "Đối tác | ProCaffe - Nhà phân phối máy pha cà phê",
    description: "Các thương hiệu hàng đầu thế giới mà ProCaffe phân phối chính thức tại Việt Nam: Saeco, Wega, Gaggia, Eureka, Bialetti, Vitamix, Lelit, Fiorenzato, Mahlkönig.",
};

const partners = [
    { name: "Saeco", logo: "/images/brands/16.png", slug: "saeco" },
    { name: "Wega", logo: "/images/brands/11.png", slug: "wega" },
    { name: "Gaggia", logo: "/images/brands/14.png", slug: "gaggia" },
    { name: "Eureka", logo: "/images/brands/18.png", slug: "eureka" },
    { name: "Bialetti", logo: "/images/brands/12.png", slug: "bialetti" },
    { name: "Vitamix", logo: "/images/brands/21.png", slug: "vitamix" },
    { name: "Lelit", logo: "/images/brands/15.png", slug: "lelit" },
    { name: "Fiorenzato", logo: "/images/brands/8.png", slug: "fiorenzato" },
    { name: "Mahlkönig", logo: "/images/brands/6.png", slug: "mahlkonig" },
    { name: "Kees van der Westen", logo: "/images/brands/1.png", slug: "kees-van-der-westen" },
    { name: "Synesso", logo: "/images/brands/20.png", slug: "synesso" },
    { name: "Barista Attitude", logo: "/images/brands/7.png", slug: "barista-attitude" },
    { name: "Coffee Queen", logo: "/images/brands/19.png", slug: "coffee-queen" },
    { name: "Gimoka", logo: "/images/brands/5.png", slug: "gimoka" },
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
                            <Link key={i} href={`/products?cat=${p.slug}`} className="logo-grid-item" title={p.name}>
                                <img src={p.logo} alt={p.name} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
