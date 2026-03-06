import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import ArticleSidebar from "../../components/article-sidebar";
import Link from "next/link";

export default function KhoaHocPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/dich-vu">Dịch vụ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Khóa học pha chế cà phê</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <h1 className="article-title">
                                Khóa Học Pha Chế Cà Phê Cấp Tốc 2 Ngày
                            </h1>

                            <div className="article-body">
                                <p>
                                    Nếu bạn là chủ quán cà phê hoặc đang chuẩn bị bước chân vào thế giới cà
                                    phê, không gì quan trọng hơn việc có một đội ngũ nhân viên thành thạo và kỹ
                                    thuật. Đào tạo họ không chỉ về cách pha chế cà phê mà còn về cách tinh chỉnh
                                    máy móc một cách thuận tiện, hiệu quả. Chính vì vậy, chúng tôi giới thiệu
                                    đến bạn &ldquo;Khóa Học Pha Chế Cà Phê Cấp Tốc&rdquo;, một giáo trình đào tạo đặc
                                    biệt dành cho chủ quán cà phê.
                                </p>
                                <p>
                                    <strong>
                                        Đặc biệt, khách hàng mua máy pha cà phê tại ProCaffe sẽ được ưu đãi 20%
                                        hoặc miễn phí hoàn toàn.
                                    </strong>
                                </p>

                                <h3>Khóa học pha chế cà phê cấp tốc này phù hợp với:</h3>
                                <ol>
                                    <li>
                                        <strong>Chủ quán mới:</strong> Dành cho những người muốn mở quán cà phê
                                        pha máy hoặc xe cafe di động mà chưa có kinh nghiệm.
                                    </li>
                                    <li>
                                        <strong>Chủ quán đã kinh doanh:</strong> Cho những người đã kinh doanh cà
                                        phê nhưng muốn nắm vững cốt lõi của các thức uống nền espresso.
                                    </li>
                                </ol>

                                <h2>Đào tạo nhân viên barista chất lượng</h2>
                                <p>
                                    <strong>Kỹ năng chiết xuất cà phê espresso:</strong> Nếu bạn muốn cà phê của
                                    mình luôn giữ được hương vị tuyệt vời, kỹ năng chiết xuất espresso là chìa
                                    khóa. Khóa học này chia sẻ những bí quyết để điều chỉnh áp suất, lựa chọn hạt
                                    cà phê, và tạo ra một tách espresso đẳng cấp.
                                </p>
                                <p>
                                    <strong>Nghệ thuật đánh sữa:</strong> Những thức uống như cappuccino và latte
                                    không chỉ đơn giản là cà phê, mà còn là nghệ thuật đánh sữa. Khóa học barista
                                    sẽ giúp nhân viên của bạn trở thành nghệ sĩ trong việc tạo ra những tách
                                    cappuccino với foam sữa béo mịn, điểm nhấn hoàn hảo cho mỗi tách cà phê.
                                </p>

                                <div className="about-image-block">
                                    <img
                                        src="https://procaffe.vn/wp-content/uploads/2024/02/khoa-hoc-pha-che-ca-phe-1.jpg"
                                        alt="khóa học pha chế cà phê"
                                        style={{ maxWidth: 800, width: "100%" }}
                                    />
                                </div>

                                <h2>Đặc biệt cho chủ quán cà phê</h2>

                                <div className="service-pricing-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Gói</th>
                                                <th>Học phí</th>
                                                <th>Điều kiện</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Tiêu chuẩn</strong></td>
                                                <td><strong>5.000.000đ/2 ngày</strong></td>
                                                <td>Thời gian linh động tùy vào học viên</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Ưu đãi 20%</strong></td>
                                                <td><strong>4.000.000đ/2 ngày</strong></td>
                                                <td>
                                                    Dành riêng cho khách hàng mua máy pha cà phê espresso mở quán
                                                    từ ProCaffe. Thời gian linh động tùy vào học viên
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Miễn phí 100%</strong></td>
                                                <td><strong>0đ</strong></td>
                                                <td>
                                                    Dành riêng cho khách hàng mua máy pha cà phê espresso mở quán
                                                    từ ProCaffe. Thời gian tùy thuộc vào lịch training của Giảng
                                                    viên, không quá 2 tháng kể từ ngày cọc mua máy.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>Hỗ trợ tận tâm:</strong> Sau khóa học, chúng tôi không chỉ là người
                                    giảng dạy mà còn là đối tác của bạn. Hỗ trợ việc thực hành, giải đáp mọi
                                    thắc mắc và đảm bảo nhân viên của bạn luôn có thêm kiến thức mới nhất.
                                </p>

                                <p><strong>Chất lượng cam kết:</strong></p>
                                <ul>
                                    <li>
                                        Thực hành trên các dòng{" "}
                                        <Link href="/products">máy pha cà phê espresso chuyên nghiệp</Link>{" "}
                                        WEGA ITALY – thương hiệu được barista tin dùng tại World Barista
                                        Championship
                                    </li>
                                    <li>Sử dụng cà phê rang xay cao cấp của ProCaffe</li>
                                </ul>

                                <div
                                    className="cta-banner"
                                    style={{ marginTop: 24, marginBottom: 32 }}
                                >
                                    <h2>Đăng Ký Ngay!</h2>
                                    <p>
                                        Nếu bạn muốn đưa chất lượng cà phê lên một tầm cao mới và xây dựng đội
                                        ngũ nhân viên xuất sắc, đừng chần chừ.
                                    </p>
                                    <div className="cta-phones">
                                        <a href="tel:0931069878" className="cta-phone-btn">
                                            📞 Ms Ngân: 0931.069.878
                                        </a>
                                    </div>
                                </div>

                                <h2>Giảng viên hướng dẫn Khóa học pha chế cà phê cấp tốc</h2>
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
                                        lớn, trà sữa khắp Việt Nam như: Hafa Coffee (Bình Tân – HCM), Hutan Coffee
                                        & Tea (Bình Tân – HCM), Công Ty TNHH Chế Biến Trà Tân Nam Bắc (HCM), Cà
                                        phê Xưa & Nay (Bà Rịa Vũng Tàu), chuỗi quán Hẻm Healthy Food (Nha Trang),
                                        Pharang Coffee (Phan Rang), …
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

                                <div className="about-image-block">
                                    <img
                                        src="https://procaffe.vn/wp-content/uploads/2024/02/khoa-hoc-pha-che-ca-phe-2.jpg"
                                        alt="khóa học pha chế cà phê giảng viên"
                                        style={{ maxWidth: 800, width: "100%" }}
                                    />
                                </div>

                                <h3>Thông tin khóa học</h3>
                                <ul>
                                    <li>Học phí: 5.000.000đ/học viên.</li>
                                    <li>Thời gian: học liên tục 2 ngày từ 8h – 17h mỗi ngày</li>
                                    <li>
                                        Địa điểm:{" "}
                                        <Link href="/lien-he">showroom ProCaffe</Link>
                                    </li>
                                    <li>Lịch khai giảng: linh động theo nhu cầu học viên</li>
                                </ul>
                                <p>
                                    Nếu bạn đang tìm kiếm sự đào tạo chất lượng và đồng hành trong hành trình
                                    kinh doanh cà phê của mình, hãy gọi cho chúng tôi ngay hôm nay theo số
                                    hotline <a href="tel:0931069878">0931069878</a>.
                                </p>

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
