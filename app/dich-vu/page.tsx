import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import ArticleSidebar from "../components/article-sidebar";
import Link from "next/link";

export const metadata = {
    title: "Dịch vụ | ProCaffe - Dịch vụ bảo trì, sửa chữa máy pha cà phê",
    description: "Dịch vụ bảo trì, sửa chữa, cho thuê máy pha cà phê chuyên nghiệp từ ProCaffe. Đội ngũ kỹ thuật giàu kinh nghiệm, phụ tùng chính hãng.",
};

const serviceCards = [
    {
        icon: "🔧",
        title: "Sửa chữa & Bảo dưỡng",
        desc: "Bảo trì định kỳ, sửa chữa máy pha cà phê chuyên nghiệp",
        href: "#bao-tri",
    },
    {
        icon: "📋",
        title: "Cho thuê máy pha cà phê",
        desc: "Thuê máy pha cà phê chuyên nghiệp cho quán, sự kiện",
        href: "/dich-vu/cho-thue-may-pha-ca-phe",
    },
    {
        icon: "☕",
        title: "Mua cà phê tặng máy",
        desc: "Chương trình mua cà phê tặng máy pha hấp dẫn",
        href: "/dich-vu/mua-ca-phe-tang-may",
    },
    {
        icon: "🎓",
        title: "Khóa học pha chế",
        desc: "Đào tạo pha chế cà phê chuyên nghiệp",
        href: "/dich-vu/khoa-hoc-pha-che-ca-phe",
    },
    {
        icon: "🏪",
        title: "Setup quán café",
        desc: "Tư vấn và setup quán cà phê trọn gói",
        href: "/dich-vu/setup-quan-cafe",
    },
    {
        icon: "💡",
        title: "Tư vấn giải pháp",
        desc: "Tư vấn giải pháp cà phê cho doanh nghiệp",
        href: "/dich-vu/tu-van-giai-phap",
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

            {/* Service Directory Grid */}
            <section className="content-section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="shop-title-bar">
                        <div className="shop-title-line" />
                        <h1>DỊCH VỤ PROCAFFE</h1>
                        <div className="shop-title-line" />
                    </div>
                    <div className="services-directory-grid">
                        {serviceCards.map((svc, idx) => (
                            <Link
                                key={idx}
                                href={svc.href}
                                className="service-dir-card"
                            >
                                <span className="service-dir-icon">
                                    {svc.icon}
                                </span>
                                <h3>{svc.title}</h3>
                                <p>{svc.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance Article */}
            <section className="section" id="bao-tri">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <h2 className="article-title">
                                Dịch vụ bảo trì máy pha cà phê
                            </h2>
                            <span className="article-date">23/09/2020</span>

                            <div className="article-body">
                                <p>
                                    Dịch vụ bảo trì máy pha cà phê là yếu tố quan trọng người mua
                                    nên cân nhắc khi chọn nhà cung cấp.
                                </p>

                                <h2>Vì sao nên bảo trì máy pha cà phê</h2>
                                <p>
                                    Khác với những đồ gia dụng như tivi, tủ lạnh,.., máy pha cà phê gia dụng
                                    hoặc chuyên nghiệp cần được chăm sóc thường xuyên bởi cả người dùng và kỹ
                                    thuật có tay nghề.
                                </p>
                                <p>
                                    Máy pha cà phê là một sản phẩm công nghệ phức hợp gồm hệ thống chuyển động
                                    cơ học, hệ thống điện, và hệ điều khiển vi mạch. Máy chỉ hoạt động tốt nếu
                                    các hệ thống này vận hành và phối hợp trơn tru. Ly cà phê chỉ đạt chuẩn khi
                                    các yếu tố nhiệt độ, áp suất, và thời gian chiết xuất đạt chuẩn. Ly cà phê
                                    chỉ ngon khi chiếc máy pha đã được làm sạch trước đó.
                                </p>
                                <p>
                                    Vì vậy, dịch vụ sau bán hàng của nhà cung cấp máy pha cà phê là yếu tố rất
                                    quan trọng trong quyết định mua, mượn, hay thuê máy của khách hàng.
                                </p>

                                <div className="about-image-block">
                                    <img
                                        src="/images/services/dich-vu-bao-tri.svg"
                                        alt="bảo trì máy pha cà phê"
                                        style={{ maxWidth: 500, width: "100%" }}
                                    />
                                </div>

                                <h2>Dịch vụ bảo trì máy pha cà phê từ nhà cung cấp uy tín</h2>
                                <p>
                                    Nhà cung cấp máy pha cà phê hiểu rõ điều này sẽ đồng hành cùng với khách
                                    hàng từ lắp đặt, hướng dẫn vận hành, vệ sinh, đào tạo pha chế, bảo trì định
                                    kỳ, cùng chế độ bảo hành tin cậy. Nói cách khác, họ không bán sản phẩm, họ
                                    cung cấp giải pháp trọn gói toàn diện cho khách hàng.
                                </p>

                                <h3>1. Lắp đặt máy pha cà phê</h3>
                                <p>
                                    Khách hàng hầu như không thể tự lắp đặt máy chuyên nghiệp, do phải:
                                </p>
                                <ul>
                                    <li>Đấu nối nước trực tiếp vào nguồn.</li>
                                    <li>Tính toán áp lực nước cấp phù hợp, lắp lọc nước.</li>
                                    <li>Nối điện cho máy 3 pha.</li>
                                </ul>

                                <div className="about-image-block">
                                    <img
                                        src="/images/services/lap-dat-may.svg"
                                        alt="lắp đặt máy pha cà phê"
                                        style={{ maxWidth: 500, width: "100%" }}
                                    />
                                </div>

                                <h3>2. Hướng dẫn vận hành</h3>
                                <p>
                                    Việc vận hành ban đầu, kể cả máy gia dụng, không dễ như dùng nồi cơm điện,
                                    vì máy phải trải qua giai đoạn mồi nước trong hệ thống (water prime) nên
                                    tốt nhất hãy để cho kỹ thuật được đào tạo vận hành.
                                </p>

                                <h3>3. Vệ sinh</h3>
                                <p>
                                    Việc sử dụng máy và vệ sinh cũng cần được hướng dẫn đúng cách – câu của bền
                                    tại người phát huy giá trị ở đây. Vệ sinh máy cần thực hiện theo hướng dẫn
                                    mỗi ngày. Định kỳ mỗi 6kg cà phê sử dụng thì cũng cần dùng thuốc vệ sinh
                                    chuyên dụng.
                                </p>
                                <ul>
                                    <li>Với máy cơ chuyên nghiệp: vệ sinh group head, tay cầm, vòi steam.</li>
                                    <li>Với máy tự động: vệ sinh hệ thống tạo bọt sữa và cối ép (brewing unit).</li>
                                </ul>

                                <h3>4. Đào tạo pha chế</h3>
                                <p>
                                    Đào tạo pha chế là việc rất quan trọng. Nhà cung cấp có tâm không chỉ hướng
                                    dẫn cách pha chế từng loại thức uống cơ bản, còn hướng dẫn khách hàng về việc:
                                </p>
                                <ul>
                                    <li>Giữ vệ sinh an toàn cho đồ uống (hygiene)</li>
                                    <li>Cách bảo quản cà phê</li>
                                    <li>Cách tạo ra công thức riêng hoặc cách pha chế riêng phù hợp cho quán.</li>
                                    <li>Và quan trọng nhất, các phương cách để nhân viên pha chế đều tay (consistency).</li>
                                </ul>
                                <p>
                                    Việc đào tạo không thể chỉ làm một lần là xong mà cần định kỳ đào tạo lại,
                                    sửa chữa thao tác kỹ thuật chưa đúng, và cập nhật thức uống mới.
                                </p>

                                <div className="about-image-block">
                                    <img
                                        src="/images/services/dao-tao-pha-che.svg"
                                        alt="đào tạo pha chế cà phê"
                                        style={{ maxWidth: 500, width: "100%" }}
                                    />
                                </div>

                                <h3>5. Bảo trì máy pha cà phê định kỳ</h3>
                                <p>
                                    Tuỳ mức độ sử dụng và thoả thuận, định kỳ hàng tuần hoặc hàng tháng, nhà
                                    cung cấp cử kỹ thuật có tay nghề tới kiểm tra các thông số kỹ thuật của máy.
                                    Sau đó, họ sẽ đề xuất hoặc cảnh báo những chi tiết hao mòn nên thay thế, đề
                                    xuất tẩy canxi cho bình đun tránh đóng cặn (nếu máy cảnh báo)…. Nếu máy phát
                                    sinh sự cố bất thường, việc phản ứng nhanh hay chậm, hiệu quả xử lý sự cố
                                    của kỹ thuật viên ra sao, phụ tùng chính hãng sẵn có hay không… đều phản ánh
                                    sự tín nhiệm của nhà cung cấp ấy.
                                </p>

                                <p>
                                    Vì vậy, ngoài việc so sánh các yếu tố giá cả, chất lượng, tính năng, hay
                                    thương hiệu, người tiêu dùng thông minh cần tìm hiểu rõ, và văn bản hoá
                                    các thoả thuận quan trọng trên. Với những ai trót yêu thích một chiếc máy
                                    xách tay từ nước ngoài vẫn có thể yên tâm với dịch vụ của nhà cung cấp như
                                    Procaffe.
                                </p>

                                <div
                                    className="cta-banner"
                                    style={{ marginTop: 32 }}
                                >
                                    <h2>Cần tư vấn thêm?</h2>
                                    <p>Liên hệ ngay để được hỗ trợ tận tình</p>
                                    <div className="cta-phones">
                                        <a
                                            href="tel:0904569878"
                                            className="cta-phone-btn"
                                        >
                                            📞 CSKH: 090.456.98.78
                                        </a>
                                        <a
                                            href="tel:0833066066"
                                            className="cta-phone-btn"
                                        >
                                            📞 Bán lẻ: 0833.06.60.66
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ArticleSidebar />
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
