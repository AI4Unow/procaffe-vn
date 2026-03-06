import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import ArticleSidebar from "../../components/article-sidebar";
import Link from "next/link";

export default function SetupQuanPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/dich-vu">Dịch vụ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Dịch vụ Set-up quán cafe</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <h1 className="article-title">
                                DỊCH VỤ SET-UP QUÁN CAFE ĐẦY ĐỦ TỪ A ĐẾN Z
                            </h1>

                            <div className="article-body">
                                <p>
                                    Chào mừng quý chủ quán đến với dịch vụ Cố vấn & Setup Quán Cafe của chúng
                                    tôi – hành trình chiến thắng cho chủ quán mới mở quán cà phê! Trong bài
                                    viết này, chúng tôi sẽ giới thiệu tổng quan chi tiết về 2 gói Dịch vụ Cơ
                                    Bản và Dịch vụ Chuyên Nghiệp để đảm bảo bạn sẵn sàng cho ngày khai trương.
                                </p>

                                <h2>Gói Dịch vụ set-up quán cafe Cơ bản</h2>

                                <h3>Phần 1: Khảo sát – Cố vấn chọn mô hình kinh doanh</h3>
                                <p>
                                    Chúng tôi bắt đầu hành trình với việc nghiên cứu và xác định rõ mô hình
                                    kinh doanh phù hợp với địa điểm của quán. Trong vòng một ngày, chúng tôi
                                    thực hiện khảo sát địa điểm kinh doanh thực tế và cố vấn cho chủ đầu tư mô
                                    hình kinh doanh phù hợp nhất.
                                </p>
                                <p><em>Thời gian: 1 ngày</em></p>

                                <h3>Phần 2: Tư vấn và Đào tạo</h3>
                                <p>
                                    Chúng tôi không chỉ giới thiệu menu món, mà còn chia sẻ kinh nghiệm thực
                                    tế, đào tạo nhân viên pha chế hiệu quả và xây dựng quy trình vận hành.
                                    Trong khoảng 9 ngày, chúng tôi tập trung vào cố vấn setup quầy bar, nhân
                                    sự hoạt động, setup menu đồ uống và đào tạo nhân viên pha chế.
                                </p>
                                <p><em>Thời gian: 9 ngày</em></p>
                                <ul>
                                    <li>Cố vấn setup quầy bar, nhân sự hoạt động (1 ngày)</li>
                                    <li>Setup menu (Thiết lập thực đơn) đồ uống (3 ngày)</li>
                                    <li>Đào tạo nhân viên pha chế (5 ngày)</li>
                                </ul>

                                <h2>Gói Dịch vụ set-up quán cafe Chuyên Nghiệp</h2>

                                <h3>Phần 1: Khảo sát – Cố vấn chọn mô hình kinh doanh (mở rộng)</h3>
                                <p>
                                    Nâng cao quy trình khảo sát và cố vấn chọn mô hình kinh doanh trong vòng
                                    một ngày, tăng cường sự chính xác và phù hợp với thị trường địa phương.
                                </p>
                                <p><em>Thời gian: 1 ngày</em></p>

                                <h3>Phần 2: Cố vấn kinh doanh và Đào tạo (mở rộng)</h3>
                                <p>
                                    Mở rộng thời gian đào tạo lên 18 ngày, tập trung vào cố vấn setup quầy bar,
                                    nhân sự hoạt động, setup menu đồ uống và đào tạo nhân viên các bộ phận và
                                    quản lý.
                                </p>
                                <p><em>Thời gian: 18 ngày</em></p>
                                <ul>
                                    <li>Cố vấn setup quầy bar, nhân sự hoạt động (1 ngày)</li>
                                    <li>Setup menu (Thiết lập thực đơn) đồ uống (3 ngày)</li>
                                    <li>
                                        Đào tạo nhân viên các bộ phận & quản lý (9 ngày): Đào tạo phục vụ, thu
                                        ngân, pha chế và Đào tạo quản trị vận hành dành riêng cho chủ quán (4
                                        buổi học)
                                    </li>
                                </ul>

                                <h3>Phần 3: Hỗ trợ và Chuẩn bị cho ngày khai trương (mở rộng)</h3>
                                <p>
                                    Chúng tôi không chỉ giúp bạn chuẩn bị cho ngày khai trương, mà còn hỗ trợ
                                    trong suốt 3 ngày đầu tiên của việc vận hành quán, đảm bảo mọi thứ diễn ra
                                    suôn sẻ.
                                </p>
                                <p><em>Thời gian: 3 ngày</em></p>

                                <div className="about-image-block">
                                    <img
                                        src="https://procaffe.vn/wp-content/uploads/2024/02/dich-vu-set-up-quan-cafe-1.jpg"
                                        alt="dịch vụ set-up quán cafe"
                                        style={{ maxWidth: 800, width: "100%" }}
                                    />
                                </div>

                                <h2>Chính sách bảo hành dịch vụ – hỗ trợ sau khai trương</h2>
                                <ul>
                                    <li>Hỗ trợ cố vấn và giải pháp cho chủ đầu tư trong suốt quá trình kinh
                                        doanh của quán.</li>
                                    <li>Giải đáp thắc mắc và định hướng cho chủ quán một cách tốt nhất.</li>
                                    <li>Hỗ trợ cập nhật công thức món dựa trên phản hồi của khách hàng.</li>
                                    <li>Hỗ trợ cập nhật những món mới theo xu hướng (hot trend).</li>
                                </ul>
                                <p>
                                    Dịch vụ của chúng tôi không chỉ là quy trình tư vấn thông thường. Chúng tôi
                                    đồng hành với bạn từng bước, đảm bảo mọi quyết định đều dựa trên nền tảng
                                    của sự nghiệp quán cà phê lâu dài. Với sự hỗ trợ chuyên nghiệp từ đội ngũ
                                    giảng viên có hơn 10 năm kinh nghiệm, chúng tôi cam kết giảm thiểu rủi ro
                                    và đưa ra giải pháp tối ưu cho sự thành công của bạn.
                                </p>

                                <h2>Giảng viên hướng dẫn Dịch vụ set-up quán cafe</h2>
                                <p>
                                    <strong>Giảng viên: Nguyễn Kim Thanh Ngân</strong>
                                    <br />
                                    Bộ phận: Kinh doanh – Đào tạo & Setup quản trị vận hành tại ProCaffe
                                </p>
                                <ul>
                                    <li>Số năm kinh nghiệm ngành F&B: 12 năm (từ 2011 đến nay)</li>
                                    <li>
                                        Từng giữ vai trò quản lý cho các chuỗi hệ thống cà phê (Highlands, Phúc
                                        Long, Vivastar Coffee)
                                    </li>
                                    <li>Hiện đang làm việc một số brand lớn như: Phúc Long tea, Vivastar, …</li>
                                    <li>
                                        Tư vấn, setup và vận hành 100+ mô hình quán café từ quán nhỏ cho đến quán
                                        lớn, trà sữa khắp Việt Nam
                                    </li>
                                    <li>
                                        Am hiểu khẩu vị & cách vận hành cho nhiều mô hình quán (take away, stay
                                        drink, online app, …)
                                    </li>
                                    <li>
                                        Có kinh nghiệm trong việc lập kế hoạch chiến lược marketing, vận hành
                                        cho quán cà phê
                                    </li>
                                    <li>6 năm đào tạo pha chế với hơn 3000+ học viên</li>
                                </ul>

                                <h3>Thông tin gói dịch vụ set-up quán cafe</h3>
                                <ul>
                                    <li>Giá: vui lòng liên hệ, chúng tôi sẽ tư vấn và báo giá</li>
                                    <li>Địa điểm: Tại khu vực kinh doanh của quán & Online</li>
                                    <li>Lịch khai giảng: linh động theo nhu cầu học viên</li>
                                </ul>

                                <p>
                                    Nếu bạn đang tìm kiếm sự đào tạo chất lượng và đồng hành trong hành trình
                                    kinh doanh cà phê của mình, hãy gọi cho chúng tôi ngay hôm nay theo số
                                    hotline <a href="tel:0904860878">0904.86.08.78</a>.
                                </p>

                                <div
                                    className="cta-banner"
                                    style={{ marginTop: 32 }}
                                >
                                    <h2>Đăng Ký Ngay!</h2>
                                    <p>Tư vấn miễn phí, đồng hành cùng bạn mở quán thành công</p>
                                    <div className="cta-phones">
                                        <a href="tel:0931069878" className="cta-phone-btn">
                                            📞 Ms Ngân: 0931.069.878
                                        </a>
                                        <a href="tel:0904860878" className="cta-phone-btn">
                                            📞 Hotline: 0904.86.08.78
                                        </a>
                                    </div>
                                </div>

                                <div className="about-image-block">
                                    <img
                                        src="https://procaffe.vn/wp-content/uploads/2023/07/banner-procaffe-group.jpg"
                                        alt="ProCaffe Group"
                                        style={{ maxWidth: 800, width: "100%" }}
                                    />
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
