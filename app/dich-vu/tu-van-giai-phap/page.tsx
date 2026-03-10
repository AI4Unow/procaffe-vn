import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import ArticleSidebar from "../../components/article-sidebar";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Tư Vấn & Giải Pháp Kinh Doanh Cà Phê | ProCaffe",
    description: "ProCaffe cung cấp các giải pháp toàn diện cho quán cà phê, nhà hàng, khách sạn từ khảo sát mặt bằng, tư vấn thiết bị đến đào tạo pha chế.",
};

export default function ConsultingServicePage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/dich-vu">Dịch vụ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Tư vấn & Giải pháp</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <h1 className="article-title">Tư vấn & Giải pháp kinh doanh cà phê</h1>

                            <div className="article-content">
                                <img
                                    src="/images/content/slider-home-2018.svg"
                                    alt="Tư vấn giải pháp kinh doanh cà phê chuyên nghiệp"
                                    style={{ width: "100%", borderRadius: "8px", marginBottom: "30px" }}
                                />

                                <p>
                                    Với hơn 15 năm kinh nghiệm trong ngành F&B, ProCaffe tự hào là đối tác tin cậy cung cấp các giải pháp kinh doanh cà phê toàn diện cho quán cà phê, nhà hàng, khách sạn và văn phòng. Chúng tôi không chỉ cung cấp thiết bị mà còn đồng hành cùng bạn từ những bước đầu tiên để xây dựng một mô hình kinh doanh thành công.
                                </p>

                                <h2>1. Tư vấn thiết kế & Setup không gian quầy bar</h2>
                                <p>
                                    Một quầy bar được thiết kế khoa học, tối ưu công năng không chỉ giúp tăng tốc độ phục vụ mà còn tạo không gian làm việc lý tưởng cho các barista, từ đó mang đến những ly cà phê chất lượng nhất.
                                </p>
                                <ul>
                                    <li>Khảo sát thực tế mặt bằng hiện trạng.</li>
                                    <li>Đánh giá nhu cầu phục vụ và công suất dự kiến.</li>
                                    <li>Tư vấn cách bố trí luồng di chuyển 1 chiều tối ưu nhất.</li>
                                    <li>Tư vấn mô hình quầy pha chế phù hợp với concept chung.</li>
                                </ul>

                                <h2>2. Tư vấn giải pháp máy móc thiết bị</h2>
                                <p>
                                    Việc chọn đúng máy pha, máy xay không chỉ giúp đảm bảo chất lượng đồ uống mà còn tối ưu hóa chi phí đầu tư ban đầu và chi phí vận hành sau này.
                                </p>
                                <ul>
                                    <li>Đề xuất các dòng máy pha, máy xay phù hợp với công suất.</li>
                                    <li>Các thiết bị hỗ trợ: máy xay sinh tố Vitamix, máy làm đá, bình đun nước nóng.</li>
                                    <li>Linh kiện và bộ dụng cụ pha chế (barista tools) đầy đủ.</li>
                                </ul>

                                <h2>3. Đào tạo pha chế chuyên sâu (Barista Training)</h2>
                                <p>
                                    Máy móc hiện đại cần có bàn tay điêu luyện của người pha chế. ProCaffe cung cấp các khóa đào tạo chuyển giao công nghệ và công thức chuẩn để đảm bảo chất lượng đồng đều.
                                </p>
                                <ul>
                                    <li>Kiến thức nền tảng về cà phê hạt (Arabica, Robusta).</li>
                                    <li>Kỹ năng chiết xuất espresso hoàn hảo (calibrate máy xay, kỹ thuật nén).</li>
                                    <li>Kỹ thuật đánh sữa chuẩn latte art và pha chế các món nóng/lạnh.</li>
                                    <li>Quy trình vệ sinh và bảo dưỡng máy móc hàng ngày.</li>
                                </ul>

                                <h2>4. Tại sao chọn ProCaffe?</h2>
                                <ul>
                                    <li>Đại diện phân phối chính thức nhiều thương hiệu hàng đầu thế giới: Wega, Lelit, Gaggia, Saeco, Vitamix, Mahlkonig...</li>
                                    <li>Đội ngũ kỹ thuật viên giàu kinh nghiệm, hỗ trợ tận nơi.</li>
                                    <li>Cam kết cung cấp linh kiện thay thế chính hãng 100%.</li>
                                    <li>Hỗ trợ bảo trì định kỳ, giúp máy móc hoạt động bền bỉ.</li>
                                </ul>

                                <div className="contact-box" style={{ padding: "30px", background: "#f9f9f9", borderRadius: "8px", borderLeft: "4px solid #fec70d", marginTop: "40px" }}>
                                    <h3>Bắt đầu dự án của bạn ngay hôm nay</h3>
                                    <p>Hãy liên hệ với chuyên gia của chúng tôi để được tư vấn thiết kế giải pháp hoàn hảo nhất cho không gian kinh doanh của bạn:</p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: "10px" }}><strong>Hotline Miền Nam:</strong> <a href="tel:0833066066" style={{ color: "#d10000", fontWeight: "bold" }}>0833 066 066</a> - <a href="tel:0936102878" style={{ color: "#d10000", fontWeight: "bold" }}>0936 102 878</a></li>
                                        <li style={{ marginBottom: "10px" }}><strong>Hotline Miền Bắc:</strong> <a href="tel:0904860878" style={{ color: "#d10000", fontWeight: "bold" }}>0904 860 878</a> - <a href="tel:0898001878" style={{ color: "#d10000", fontWeight: "bold" }}>0898 001 878</a></li>
                                        <li><strong>Email:</strong> <a href="mailto:info@procaffe.vn">info@procaffe.vn</a></li>
                                    </ul>
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
