import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import ArticleSidebar from "../../components/article-sidebar";
import Link from "next/link";

export default function MuaCaPheTangMayPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/dich-vu">Dịch vụ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Mua cà phê tặng máy</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="article-layout">
                        <div className="article-main">
                            <h1 className="article-title">
                                Mua 2.5 – 3kg cà phê/tháng, tặng máy pha cafe hàng hiệu châu Âu
                                trị giá lên đến 37 triệu
                            </h1>
                            <span className="article-date">06/01/2026</span>

                            <div className="article-body">
                                <h2>
                                    Chương trình ưu đãi khách hàng &ldquo;Mua cà phê tặng máy pha cafe&rdquo;
                                </h2>

                                <h3>Ai nhanh có số hưởng. Số lượng cực hạn chế!!!</h3>
                                <p>
                                    Bạn là người yêu thích uống cà phê đen nguyên chất, văn phòng bạn mỗi
                                    tháng tiêu thụ từ 2.5 – 3kg cà phê, tính ra 24 tháng sẽ là 60 – 72kg
                                    cà phê.
                                </p>
                                <p>
                                    Chương trình &ldquo;Mua cà phê tặng máy pha cafe&rdquo; từ chúng tôi mang
                                    đến ưu đãi cực khủng cho quý khách hàng. Quý khách mua cà phê hạt{" "}
                                    <strong>ProCaffe Intenso</strong> hảo hạng của chúng tôi liên tục trong 24
                                    tháng sẽ được:
                                </p>

                                <div className="service-pricing-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Máy pha cafe tặng</th>
                                                <th>Trị giá</th>
                                                <th>Cam kết mua cà phê</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <Link href="/saeco-royal-plus">
                                                            Saeco Royal Plus
                                                        </Link>
                                                    </strong>
                                                    <br />
                                                    <small>Máy pha cafe tự động</small>
                                                </td>
                                                <td>32.500.000đ</td>
                                                <td>60kg / 24 tháng (~2.5kg/tháng)</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <Link href="/saeco-royal-otc">
                                                            Saeco Royal OTC
                                                        </Link>
                                                    </strong>
                                                    <br />
                                                    <small>Máy pha cafe cappuccino tự động</small>
                                                </td>
                                                <td>37.500.000đ</td>
                                                <td>72kg / 24 tháng (~3kg/tháng)</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <Link href="/gaggia-magenta-prestige">
                                                            Gaggia Magenta Prestige
                                                        </Link>
                                                    </strong>
                                                    <br />
                                                    <small>Máy pha cafe cappuccino tự động</small>
                                                </td>
                                                <td>32.600.000đ</td>
                                                <td>72kg / 24 tháng (~3kg/tháng)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3>Ưu đãi đặc biệt – Máy xay Eureka Mignon Brew Pro</h3>
                                <ul>
                                    <li>
                                        Tặng riêng máy Eureka Mignon Brew Pro – Made in Italy khi mua đủ 30kg hạt
                                        hảo hạng Procaffe Intenso hoặc 38kg Classico.
                                    </li>
                                    <li>
                                        Tặng cả máy và bộ dao xay all ground khi mua 36kg Intenso hoặc 46kg Classico
                                    </li>
                                    <li>Chỉ áp dụng với khách chưa từng mua cà phê.</li>
                                    <li>
                                        Nhận máy ngay khi thanh toán đủ tiền cà phê, cà phê giao hàng tháng theo
                                        nhu cầu để đảm bảo độ tươi mới.
                                    </li>
                                </ul>

                                <p>
                                    Chúng tôi cam kết chỉ tặng máy mới 100%, thương hiệu của Ý, sản xuất và lắp
                                    ráp hoàn toàn tại châu Âu, bảo hành 12 tháng tại showroom theo tiêu chuẩn
                                    toàn cầu.
                                </p>
                                <p>
                                    Đặc biệt, máy pha cafe được chúng tôi giao cho bạn ngay từ đầu, sau khi bạn
                                    thanh toán 100% trị giá tổng số kg cà phê phải mua theo yêu cầu trong 24
                                    tháng. Cà phê được chia làm nhiều đợt giao hàng tận nơi nhằm đảm bảo sự
                                    tươi mới.
                                </p>

                                <h3>Điều kiện áp dụng</h3>
                                <ul>
                                    <li>Giá cà phê niêm yết trên web, đã bao gồm VAT.</li>
                                    <li>
                                        Đối tượng được tham gia chương trình sẽ được giới hạn bởi chúng tôi. Chương
                                        trình chỉ áp dụng cho khách hàng mới, là văn phòng – công ty có pháp nhân
                                        đầy đủ (Chúng tôi sẽ xuất hóa đơn VAT cà phê cho pháp nhân). Không áp dụng
                                        cho khách đã và đang mua cà phê.
                                    </li>
                                    <li>Hình thức thanh toán: Thanh toán ngay 100% trước khi nhận máy.</li>
                                    <li>
                                        Miễn phí vận chuyển, lắp đặt máy pha cafe và giao cà phê nội thành TP.HCM
                                        và Hà Nội.
                                    </li>
                                    <li>
                                        Số lượng máy tặng rất có hạn. Chương trình có thể kết thúc sớm nếu lượng
                                        máy dành cho chương trình hết.
                                    </li>
                                </ul>

                                <h3>Lưu ý</h3>
                                <ol>
                                    <li>
                                        Người mua có thể đổi cà phê Intenso sang loại cà phê khác của ProCaffe
                                        (chi tiết liên hệ nhân viên tư vấn).
                                    </li>
                                    <li>Cà phê nhận dần theo tháng để đảm bảo độ tươi mới.</li>
                                    <li>
                                        Tặng gói dịch vụ bảo trì định kỳ hàng tháng (trong vòng 12 tháng) trị giá
                                        6 triệu đồng cho khách hàng cam kết tiếp tục mua thêm duy nhất cà phê của
                                        chúng tôi sử dụng tại văn phòng cho máy được chúng tôi tặng trong suốt 01
                                        năm tiếp theo.
                                    </li>
                                </ol>

                                <h3>Bảng giá cà phê áp dụng trong chương trình</h3>
                                <div className="service-pricing-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Loại cà phê</th>
                                                <th>Giá/kg</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Intenso</strong></td>
                                                <td>652.000đ/kg</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Classico</strong></td>
                                                <td>558.000đ/kg</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Riccaroma</strong></td>
                                                <td>506.000đ/kg</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Miscela</strong></td>
                                                <td>438.000đ/kg</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div
                                    className="cta-banner"
                                    style={{ marginTop: 32 }}
                                >
                                    <h2>Gọi ngay để tham gia chương trình</h2>
                                    <p>Tư vấn miễn phí, số lượng máy có hạn!</p>
                                    <div className="cta-phones">
                                        <a href="tel:0833066066" className="cta-phone-btn">
                                            📞 TP.HCM: 0833.066.066
                                        </a>
                                        <a href="tel:0936102878" className="cta-phone-btn">
                                            📞 TP.HCM: 0936.102.878
                                        </a>
                                        <a href="tel:0898001878" className="cta-phone-btn">
                                            📞 Hà Nội: 0898.001.878
                                        </a>
                                        <a href="tel:0833066026" className="cta-phone-btn">
                                            📞 Đà Nẵng: 0833.066.026
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
