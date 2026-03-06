import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

const timelineData = [
    {
        year: "2025",
        entries: [
            {
                title: "ProCaffe Group – Nhà phân phối độc quyền thương hiệu WEGA tại Việt Nam",
                content: `Chúng tôi tự hào thông báo ProCaffe là nhà phân phối độc quyền thương hiệu máy pha cà phê WEGA tại Việt Nam, mang đến cơ hội tiếp cận trực tiếp sản phẩm chính hãng từ Ý cho các quán cà phê, chuỗi F&B và barista chuyên nghiệp trên toàn quốc.`,
                image: "https://procaffe.vn/wp-content/uploads/2025/01/z6253768693693_55b3baee3a8cf58cbb1ba6acf506e61c.jpg",
                imageAlt: "Giấy chứng nhận nhà phân phối độc quyền WEGA tại Việt Nam",
            },
            {
                title: "WEGA – Hành trình từ nước Ý đến hơn 150 quốc gia",
                content: `WEGA từ lâu đã được xem là biểu tượng của sự xuất sắc trong ngành máy pha cà phê espresso chuyên nghiệp. Với nhà máy lớn nhất thế giới và chất lượng được công nhận toàn cầu, WEGA không ngừng kết nối với thế giới.`,
            },
        ],
    },
    {
        year: "2023",
        entries: [
            {
                title: "CafeShow Việt Nam 2023 - Sự kiện không thể bỏ qua của người yêu cà phê",
                content: `CafeShow Việt Nam, sự kiện cà phê hàng năm đã trở thành điểm hẹn của các tín đồ yêu cà phê trên khắp cả nước. Được tổ chức vào tháng 4 hàng năm tại SECC quận 7, Tp. HCM, sự kiện này tập trung các gian hàng chất lượng và những máy móc thiết bị tân tiến nhất ngành F&B.`,
                image: "https://procaffe.vn/wp-content/uploads/2023/04/tam-nhin-procaffe-1.jpg",
                imageAlt: "Đội ngũ ProCaffe tại CafeShow 2023",
            },
        ],
    },
    {
        year: "2019",
        entries: [
            {
                title: "10 năm ProCaffe – Hành trình khẳng định vị thế",
                content: `Năm 2019 đánh dấu cột mốc 10 năm hoạt động của ProCaffe. Từ một đơn vị nhỏ, ProCaffe đã phát triển thành nhà phân phối hàng đầu các thương hiệu máy pha cà phê quốc tế tại Việt Nam.`,
            },
        ],
    },
    {
        year: "2015",
        entries: [
            {
                title: "Mở rộng hệ thống đại lý và showroom",
                content: `ProCaffe mở rộng hệ thống phân phối và showroom tại Hà Nội, mang đến cơ hội trải nghiệm trực tiếp sản phẩm cho khách hàng miền Bắc.`,
            },
        ],
    },
    {
        year: "2011",
        entries: [
            {
                title: "Thành lập Công ty Cổ phần Quốc tế Bách Hợp",
                content: `Công ty Cổ phần Quốc tế Bách Hợp chính thức được thành lập, đánh dấu bước ngoặt quan trọng trong hành trình phát triển của ProCaffe.`,
            },
        ],
    },
    {
        year: "2009",
        entries: [
            {
                title: "Khởi nghiệp – Năm bản lề của ProCaffe",
                content: `Năm 2009 là năm bản lề của ProCaffe với nhiệm vụ hàng đầu là phát triển hệ thống phân phối, giới thiệu đến người tiêu dùng Việt Nam những sản phẩm cà phê và máy pha cà phê số 1 thế giới về chất lượng và danh tiếng.`,
            },
            {
                title: "Sự kiện Italian Event",
                content: `Tháng 05/2009, ProCaffe tham gia sự kiện "Italian Event" đồng tổ chức bởi Thương Vụ Ý và Metro Việt Nam.`,
            },
            {
                title: "Diamond Plaza",
                content: `Tháng 07/2009, mở gian hàng tại Diamond Plaza, một địa chỉ mua sắm hàng cao cấp số 1 Việt Nam.`,
            },
            {
                title: "Best Carings và Nguyễn Kim",
                content: `Tháng 08-09/2009, có mặt tại Best Carings và Nguyễn Kim, thực hiện các chương trình giới thiệu sản phẩm, được đông đảo người tiêu dùng quan tâm mua sắm.`,
            },
        ],
    },
];

export default function ActivitiesPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Các hoạt động</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Các hoạt động</h1>
                    <p>Hành trình phát triển của ProCaffe qua các năm</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-block">
                        <p>
                            Năm 2009 là năm bản lề của ProCaffe với nhiệm vụ hàng đầu là phát triển hệ thống
                            phân phối, giới thiệu đến người tiêu dùng Việt Nam những sản phẩm cà phê và máy pha
                            cà phê số 1 thế giới về chất lượng và danh tiếng cũng đồng nghĩa với gu thưởng thức
                            cà phê kiểu Ý với những thức uống nổi danh toàn thế giới như Espresso, Cappuccino,
                            Latte…. Giới truyền thông, các tạp chí và báo hàng đầu Việt Nam quan tâm và đưa tin
                            về các sản phẩm lần đầu xuất hiện tại Việt Nam, mang lại cho người tiêu dùng Việt
                            Nam cơ hội lựa chọn sản phẩm hàng đầu thế giới.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="timeline">
                        {timelineData.map((yearGroup) => (
                            <div key={yearGroup.year} className="timeline-year-group">
                                <div className="timeline-year-marker">
                                    <span className="timeline-year">{yearGroup.year}</span>
                                </div>
                                {yearGroup.entries.map((entry, idx) => (
                                    <div key={idx} className="timeline-entry">
                                        <div className="timeline-dot" />
                                        <div className="timeline-content">
                                            {entry.image && (
                                                <div className="timeline-image">
                                                    <img
                                                        src={entry.image}
                                                        alt={entry.imageAlt || entry.title}
                                                        style={{ width: "100%", height: "auto", borderRadius: 8 }}
                                                    />
                                                </div>
                                            )}
                                            <h3>{entry.title}</h3>
                                            <p>{entry.content}</p>
                                        </div>
                                    </div>
                                ))}
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
