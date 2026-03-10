import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import ArticleSidebar from "../../components/article-sidebar";
import InquiryForm from "./inquiry-form";
import Link from "next/link";

export default function ChoThuePage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/dich-vu">Dịch vụ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Cho thuê máy pha cà phê</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <h1 className="article-title">
                                Cho thuê máy pha cà phê
                            </h1>

                            <div className="article-body">
                                <p>
                                    ProCaffe cho thuê tất cả các{" "}
                                    <Link href="/products">máy pha cà phê</Link>,{" "}
                                    <Link href="/products">máy xay cà phê</Link>{" "}
                                    cho gia đình, văn phòng, khách sạn, quán cà phê. Hàng mới 100% và luôn có sẵn
                                    tại showroom Hồ Chí Minh và Hà Nội. Quý khách hàng có nhu cầu thuê máy hãy
                                    liên hệ ProCaffe để được tư vấn thuê máy chi tiết kèm các gói dịch vụ set up,
                                    training chuyên sâu.
                                </p>

                                <h2>PHÍ CHO THUÊ MÁY PHA CÀ PHÊ MỚI</h2>

                                <h3>THUÊ MÁY PHA CÀ PHÊ DÀI HẠN</h3>
                                <p>
                                    Với hợp đồng 02 năm, phí thuê từ năm thứ hai giảm 10% từ phí thuê năm thứ
                                    nhất (ngay từ đầu hợp đồng phải ký thời hạn hai năm)
                                </p>

                                <div className="service-pricing-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Máy</th>
                                                <th>Giá trị thực</th>
                                                <th>Thuê 1 năm</th>
                                                <th>Thuê 2 năm (năm 2)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <Link href="/products/gaggia-magenta-prestige">
                                                            Gaggia Magenta Prestige
                                                        </Link>
                                                    </strong>
                                                    <br />
                                                    <small>Máy pha cà phê cappuccino tự động</small>
                                                </td>
                                                <td>32.600.000đ</td>
                                                <td>2.894.000đ/tháng</td>
                                                <td>2.605.000đ/tháng</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <Link href="/products/gaggia-magenta-plus">
                                                            Gaggia Magenta Plus
                                                        </Link>
                                                    </strong>
                                                    <br />
                                                    <small>Máy pha cà phê espresso tự động</small>
                                                </td>
                                                <td>24.668.000đ</td>
                                                <td>2.246.000đ/tháng</td>
                                                <td>2.022.000đ/tháng</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <Link href="/products/saeco-royal-plus">
                                                            Saeco Royal Plus
                                                        </Link>
                                                    </strong>
                                                    <br />
                                                    <small>Máy pha cà phê espresso tự động</small>
                                                </td>
                                                <td>32.500.000đ</td>
                                                <td>
                                                    <s>2.858.000đ</s>{" "}
                                                    <span className="promo-price">2.000.000đ/tháng</span>
                                                    <br />
                                                    <small className="promo-note">Giảm 30% – Áp dụng tới hết 30/1/2026</small>
                                                </td>
                                                <td>Giảm 10% từ năm 01</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <Link href="/products/saeco-royal-otc">
                                                            Saeco Royal OTC
                                                        </Link>
                                                    </strong>
                                                    <br />
                                                    <small>Máy pha cà phê cappuccino tự động</small>
                                                </td>
                                                <td>37.500.000đ</td>
                                                <td>
                                                    <s>3.257.000đ</s>{" "}
                                                    <span className="promo-price">2.280.000đ/tháng</span>
                                                    <br />
                                                    <small className="promo-note">Giảm 30% – Áp dụng tới hết 30/1/2026</small>
                                                </td>
                                                <td>Giảm 10% từ năm 01</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3>THUÊ MÁY PHA CÀ PHÊ NGẮN HẠN</h3>
                                <p>
                                    Với hợp đồng 06 tháng đến dưới 01 năm, phí thuê tăng 20% tính dựa trên phí
                                    thuê năm đầu tiên.
                                </p>
                                <ul>
                                    <li>Gaggia Magenta Prestige: <strong>3.473.000đ/tháng</strong></li>
                                    <li>Gaggia Magenta Plus: <strong>2.696.000đ/tháng</strong></li>
                                </ul>

                                <h2>PHÍ THUÊ MÁY PHA CÀ PHÊ CŨ</h2>
                                <p>
                                    Phí thuê máy pha cà phê cũ được tính giảm 10% từ phí thuê máy mới.
                                </p>

                                <h2>ĐIỀU KHOẢN CHO THUÊ MÁY PHA CÀ PHÊ</h2>
                                <ul>
                                    <li>Thời hạn hợp đồng cho thuê máy pha cà phê: 06, 12 tháng hoặc 24 tháng</li>
                                    <li>Đặt cọc: Máy mới cọc 40% trị giá máy niêm yết trên web. Máy cũ cọc 20%</li>
                                    <li>Phí thuê máy cũ giảm 10% từ phí thuê máy mới.</li>
                                    <li>
                                        Khách thuê máy phải mua{" "}
                                        <Link href="/products">cà phê rang xay</Link>{" "}
                                        từ duy nhất ProCaffe. Nếu không mua cà phê, phí thuê tăng 10%
                                    </li>
                                    <li>
                                        Trong trường hợp khách hàng hủy bỏ hợp đồng thuê máy trước thời hạn,
                                        khách hàng sẽ bị mất cọc và phải thanh toán đầy đủ chi phí thuê máy.
                                    </li>
                                    <li>
                                        Nếu thuê sau một thời gian, khách hàng muốn mua lại thì sẽ được khấu trừ
                                        phần tiền thuê đã trả từ giá niêm yết, khách trả thêm tiền còn lại + 2%
                                        lãi suất/tháng trên số tiền còn lại x số tháng khách đã sử dụng máy để sở
                                        hữu chính máy đang thuê.
                                    </li>
                                    <li>Giá thuê chưa gồm VAT</li>
                                    <li>
                                        Giá thuê trên áp dụng nội thành Hồ Chí Minh, Hà Nội, Đà Nẵng; đối với
                                        các khu vực khác phí thuê chưa bao gồm phí vận chuyển, lắp đặt.
                                    </li>
                                    <li>
                                        Nếu thuê từ 6 tháng tới dưới 1 năm: giá thuê tăng 20% so với giá năm đầu.
                                    </li>
                                    <li>
                                        Ưu đãi 10% giá cà phê nếu mua cà phê bất kỳ từ duy nhất Procaffe sử dụng
                                        cho máy thuê nhằm đảm bảo tuổi thọ máy.
                                    </li>
                                    <li>Không ràng buộc sản lượng cà phê tối thiểu hàng tháng</li>
                                </ul>

                                <h2>CHÍNH SÁCH ĐẶT CỌC LINH HOẠT</h2>
                                <p>
                                    Đối với máy mới, quý khách có thể cọc 25 đến 40% tuỳ thực trạng của khách
                                    hàng.
                                </p>

                                <h2>CHÍNH SÁCH BẢO HÀNH, BẢO TRÌ KHI CHO THUÊ MÁY PHA CÀ PHÊ</h2>
                                <ul>
                                    <li>
                                        Miễn phí dịch vụ bảo trì phòng ngừa được tiến hành hàng tháng cho tất cả
                                        các máy cà phê chỉ sử dụng duy nhất cà phê của ProCaffe.
                                    </li>
                                    <li>
                                        Thay thế các máy khác trong trường hợp máy bị trục trặc và không thể sửa
                                        chữa. Không muộn hơn 38 phút từ yêu cầu cuộc gọi, ProCaffe sẽ trả lời
                                        sau đó cử kỹ thuật viên đến kiểm tra và sửa chữa máy móc. Trong trường
                                        hợp máy pha cà phê có sự cố và không thể sửa chữa được trong vòng 8 ngày
                                        làm việc, ProCaffe đồng ý cung cấp một máy pha cà phê khác, ít nhất là
                                        bằng hoặc tương tự như máy cà phê hư hỏng.
                                    </li>
                                    <li>
                                        Hồi đáp ngay khi khách có yêu cầu (cuộc gọi dịch vụ) trong vòng 38 phút.
                                        Trung bình sau 6-8 giờ từ khi có mặt sẽ hoàn thành việc sửa chữa.
                                    </li>
                                </ul>
                                <p>
                                    Đọc thêm các kinh nghiệm quan trọng khi thuê máy pha cà phê{" "}
                                    <Link href="/blog">tại đây</Link>.
                                </p>

                                {/* Contact Inquiry Form */}
                                <InquiryForm />

                                <div
                                    className="cta-banner"
                                    style={{ marginTop: 32 }}
                                >
                                    <h2>Liên hệ thuê máy pha cà phê</h2>
                                    <p>Tư vấn miễn phí, giao máy nhanh chóng</p>
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
