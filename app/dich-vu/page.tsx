import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import ArticleSidebar from "../components/article-sidebar";
import Link from "next/link";

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

            <section className="section">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <h1 className="article-title">
                                Dịch vụ bảo trì máy pha cà phê
                            </h1>
                            <span className="article-date">23/09/2020</span>

                            <div className="article-body">
                                <p>
                                    Dịch vụ bảo trì máy pha cà phê là yếu tố quan trọng người mua
                                    nên cân nhắc khi chọn nhà cung cấp.
                                </p>

                                <h2 id="sua-chua">Vì sao nên bảo trì máy pha cà phê</h2>
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
                                        src="https://procaffe.vn/wp-content/uploads/2017/09/dich-vu-bao-tri-may-pha-ca-phe.jpg"
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

                                <h3 id="cho-thue">1. Lắp đặt máy pha cà phê</h3>
                                <p>
                                    Tất cả máy pha cà phê bao gồm máy mới và máy cũ (đã qua sử dụng) bán ra đều
                                    được nhà cung cấp uy tín lắp đặt (miễn phí tại nội thành), hướng dẫn sử dụng
                                    và bảo dưỡng cơ bản cho khách hàng.
                                </p>

                                <div className="about-image-block">
                                    <img
                                        src="https://procaffe.vn/wp-content/uploads/2017/09/lap-dat-may-pha-ca-phe.jpg"
                                        alt="lắp đặt máy pha cà phê"
                                        style={{ maxWidth: 500, width: "100%" }}
                                    />
                                </div>

                                <h3>2. Hướng dẫn vận hành</h3>
                                <p>
                                    Kỹ thuật viên hướng dẫn chi tiết cách sử dụng máy pha cà phê, phương pháp vệ
                                    sinh hàng ngày, và các lưu ý quan trọng trong quá trình vận hành để đảm bảo
                                    chất lượng cà phê luôn ổn định.
                                </p>

                                <h3 id="khoa-hoc">3. Vệ sinh</h3>
                                <p>
                                    Vệ sinh máy pha cà phê đúng cách là yếu tố tiên quyết để đảm bảo hương vị
                                    cà phê luôn thơm ngon và kéo dài tuổi thọ máy. Nhà cung cấp hướng dẫn quy
                                    trình vệ sinh chuẩn và cung cấp hóa chất vệ sinh chuyên dụng.
                                </p>

                                <h3>4. Đào tạo pha chế</h3>
                                <p>
                                    Đào tạo pha chế cà phê từ cơ bản đến nâng cao, bao gồm kỹ thuật pha espresso,
                                    latte art, và các công thức thức uống phổ biến. Chương trình đào tạo phù hợp
                                    cho cả quán cà phê mới và quán đang hoạt động.
                                </p>

                                <div className="about-image-block">
                                    <img
                                        src="https://procaffe.vn/wp-content/uploads/2017/09/dao-tao-pha-che.jpg"
                                        alt="đào tạo pha chế cà phê"
                                        style={{ maxWidth: 500, width: "100%" }}
                                    />
                                </div>

                                <h3 id="setup-quan">5. Bảo trì máy pha cà phê định kỳ</h3>
                                <p>
                                    Bảo trì định kỳ giúp phát hiện sớm các vấn đề kỹ thuật, thay thế linh kiện
                                    hao mòn, và đảm bảo máy luôn hoạt động ở trạng thái tốt nhất. Chương trình
                                    bảo trì được thiết kế riêng cho từng loại máy và từng mô hình kinh doanh.
                                </p>

                                <div className="about-image-block">
                                    <img
                                        src="https://procaffe.vn/wp-content/uploads/2017/09/bao-tri-may-pha-ca-phe-dinh-ky.jpg"
                                        alt="bảo trì máy pha cà phê định kỳ"
                                        style={{ maxWidth: 500, width: "100%" }}
                                    />
                                </div>

                                <p>
                                    Kỹ thuật viên của ProCaffe được đào tạo bởi chính các hãng sản xuất, đảm bảo
                                    nắm vững kiến thức chuyên môn và sử dụng linh kiện chính hãng trong quá trình
                                    bảo trì và sửa chữa.
                                </p>

                                <h3>6. Chế độ bảo hành tin cậy</h3>
                                <p>
                                    ProCaffe cam kết bảo hành chính hãng cho tất cả sản phẩm, với thời gian bảo
                                    hành từ 12-24 tháng tùy sản phẩm. Đội ngũ kỹ thuật viên luôn sẵn sàng hỗ trợ
                                    xử lý sự cố nhanh chóng.
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
