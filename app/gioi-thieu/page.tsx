import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

export const metadata = {
    title: "Giới thiệu | ProCaffe - Sứ mạng, Tầm nhìn, Chiến lược",
    description: "ProCaffe - Đối tác đồng hành tin cậy, mang đến các giải pháp nhanh chóng, dễ dàng, và ở đẳng cấp chuyên gia về cà phê tại Việt Nam từ năm 2009.",
};

export default function AboutPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Giới thiệu</span>
                </div>
            </div>

            <section className="page-header-simple" style={{ padding: "40px 0", background: "#fff", textAlign: "left" }}>
                <div className="container">
                    <h1 style={{ color: "#333", fontSize: "32px", fontWeight: "bold", margin: 0 }}>Sứ mạng – Tầm nhìn – Chiến lược</h1>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    {/* Main intro */}
                    <div id="su-mang" className="content-block">
                        <p>
                            ProCaffe là đối tác đồng hành <strong>tin cậy</strong>, mang đến các giải pháp{" "}
                            <strong>nhanh chóng, dễ dàng, và ở đẳng cấp chuyên gia</strong> về cà phê, dụng cụ
                            pha chế cà phê, đồ uống và thực phẩm.
                        </p>
                        <p>
                            Mỗi ProCaffer (*) đều có thói quen giữ lời hứa, luôn phản hồi kịp thời và thể hiện
                            tính chuyên nghiệp trong mọi việc; luôn hoàn thành công việc với tốc độ nhanh, và
                            làm mọi việc trở nên dễ dàng thuận tiện cho người khác; thể hiện tâm huyết, kỹ năng
                            và đẳng cấp của một chuyên gia trong việc mình làm.
                        </p>
                    </div>

                    {/* Team photo */}
                    <div className="about-image-block">
                        <img
                            src="https://procaffe.vn/wp-content/uploads/2023/04/tam-nhin-procaffe-1.jpg"
                            alt="Đội ngũ ProCaffe tại sự kiện triển lãm"
                            width={900}
                            height={511}
                            style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto", borderRadius: 8 }}
                        />
                    </div>

                    {/* Comprehensive solutions */}
                    <div className="content-block">
                        <p>
                            Các giải pháp toàn diện về cà phê bao gồm máy pha cà phê, máy xay cà phê, máy xay
                            sinh tố công nghiệp, phụ kiện chính hãng, cà phê rang xay, và các dịch vụ sau bán
                            hàng từ tư vấn, đào tạo, bảo trì, bảo hành, sửa chữa, giải quyết khiếu nại… đáp
                            ứng tất cả các nhu cầu như kinh doanh quán cà phê, khách sạn, hay tiêu dùng tại gia
                            đình, văn phòng.
                        </p>
                        <p>
                            ProCaffe tự hào là nhà phân phối độc quyền hoặc chính thức tại Việt Nam của những
                            thương hiệu hàng đầu thế giới như Kees van der Westen, Synesso, Barista Attitude,
                            Wega, Lelit, Saeco, Gaggia, Mahlkönig, Eureka, Fiorenzato, Coffee Queen, Vitamix,
                            Gimoka, Bialetti… và tiếp tục mở rộng quyền phân phối những nhãn hàng danh giá khác.
                        </p>
                        <p>
                            Hợp tác sâu rộng giữa ProCaffe và Mahlkönig. ProCaffe – đối tác chiến lược, nhà nhập
                            khẩu và phân phối chính thức sản phẩm máy xay cà phê Mahlkönig tại Việt Nam.
                        </p>
                        <p>
                            ProCaffe là đối tác uỷ quyền, được đào tạo chuyên sâu, chuyển giao công nghệ phần
                            cứng cũng như các quy trình vận hành, bảo hành, sửa chữa theo tiêu chuẩn của các nhà
                            sản xuất; là đại diện tin cậy cho các nhãn hàng tại Việt Nam thực hiện các quyền và
                            trách nhiệm trước khách hàng.
                        </p>
                    </div>

                    {/* Showroom network */}
                    <div className="content-block">
                        <p>
                            Hệ thống phòng trưng bày, kho bãi và trung tâm bảo hành của ProCaffe trải dài từ
                            Tp.HCM, Hà Nội, Đà Nẵng và Nha Trang. Hệ thống đại lý uỷ quyền của ProCaffe phủ
                            rộng toàn quốc. Các website, fanpages và các kênh truyền thông mạng xã hội chính
                            thức của ProCaffe cung cấp công khai, đầy đủ và chính xác thông tin sản phẩm, nguồn
                            gốc xuất xứ, chính sách mua hàng, khuyến mãi, thanh toán, đổi trả, bảo hành, khiếu
                            nại, hướng dẫn sử dụng, pha chế, vệ sinh…. Các gian hàng thương mại điện tử ProCaffe
                            giúp khách hàng ra quyết định mua hàng nhanh chóng dễ dàng, với nhiều phương thức
                            thanh toán, vận chuyển linh hoạt.
                        </p>
                    </div>

                    {/* Showroom photo */}
                    <div className="about-image-block">
                        <img
                            src="https://procaffe.vn/wp-content/uploads/2023/04/MAY-PHA-CAFE-HA-NOI.jpg"
                            alt="Một góc showroom ProCaffe Hà Nội"
                            width={700}
                            height={700}
                            style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto", borderRadius: 8 }}
                        />
                    </div>

                    {/* ProCaffer Culture */}
                    <div className="content-block">
                        <p>
                            Mỗi ProCaffer là đại diện duy nhất của ProCaffe khi tiếp xúc với khách hàng. Từng
                            ProCaffer không chỉ là chuyên gia trong lĩnh vực chuyên môn, mà còn tự tin là đại
                            diện xuất sắc mỗi khi có cơ hội tiếp xúc với khách hàng dọc hành trình trải nghiệm,
                            từ trước khi khách hàng có nhu cầu tìm hiểu về sản phẩm, nhãn hàng, công ty… cho đến
                            sau khi mua hàng và sử dụng.
                        </p>
                        <p>
                            ProCaffers còn là khách hàng của nhau. Từng ProCaffer đều nỗ lực để giữ lời hứa với
                            cộng sự, làm mọi việc trở nên dễ dàng thuận tiện cho đồng nghiệp, và nỗ lực để trở
                            nên giỏi nhất trong việc mình làm, nên chúng tôi luôn tin tưởng mỗi khi tìm kiếm sự
                            trợ giúp hay lời khuyên của đồng nghiệp ở lĩnh vực chuyên môn của họ.
                        </p>
                        <p>
                            Nếu như khách hàng được đặt ở vị trí trung tâm trong mọi quyết định của chúng tôi,
                            thì ProCaffers là phân khúc khách hàng đặc biệt ở ProCaffe. ProCaffers là nguồn năng
                            lượng kiến tạo những trải nghiệm khách hàng tuyệt vời.
                        </p>
                    </div>

                    {/* Stats cards */}
                    <div id="hoat-dong" className="about-features">
                        <div className="about-feature-card">
                            <div className="feature-icon">🏆</div>
                            <h3>13+ năm kinh nghiệm</h3>
                            <p>Hoạt động từ 2011, phục vụ hàng nghìn khách hàng trên toàn quốc</p>
                        </div>
                        <div className="about-feature-card">
                            <div className="feature-icon">🌍</div>
                            <h3>20+ thương hiệu quốc tế</h3>
                            <p>Đối tác phân phối chính thức của các thương hiệu hàng đầu thế giới</p>
                        </div>
                        <div className="about-feature-card">
                            <div className="feature-icon">🔧</div>
                            <h3>Dịch vụ toàn diện</h3>
                            <p>Tư vấn, lắp đặt, bảo hành, sửa chữa, đào tạo pha chế</p>
                        </div>
                        <div className="about-feature-card">
                            <div className="feature-icon">📍</div>
                            <h3>Showroom HCM &amp; Hà Nội</h3>
                            <p>Hệ thống showroom trải nghiệm trực tiếp tại 2 thành phố lớn</p>
                        </div>
                    </div>

                    {/* Company info */}
                    <div id="doanh-nghiep" className="content-block">
                        <h2>Thông tin doanh nghiệp</h2>
                        <div className="company-info-grid">
                            <div className="info-item"><strong>Tên công ty:</strong> Công ty Cổ phần Quốc tế Bách Hợp</div>
                            <div className="info-item"><strong>Mã số thuế:</strong> 0310557217</div>
                            <div className="info-item"><strong>Ngày cấp:</strong> 26/09/2011</div>
                            <div className="info-item"><strong>Người đại diện:</strong> Ông Nguyễn Thành Công</div>
                            <div className="info-item"><strong>Cơ quan cấp:</strong> Sở Kế hoạch và Đầu tư TP.HCM</div>
                            <div className="info-item"><strong>Điện thoại:</strong> 028 3526 4108</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
