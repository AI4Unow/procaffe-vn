import Header from "../components/header";
import Footer from "../components/footer";

export default function ContactPage() {
    return (
        <>
            <Header />

            <div className="breadcrumb">
                <div className="container">
                    <a href="/">Trang chủ</a>
                    <span className="breadcrumb-sep">/</span>
                    <span>Liên hệ</span>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h1 style={{ fontFamily: "var(--font-heading)" }}>Liên hệ</h1>
                        <div className="accent-line" />
                        <p>Chúng tôi sẵn sàng hỗ trợ bạn mọi lúc</p>
                    </div>

                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="contact-card">
                                <h3>📍 Showroom HCM</h3>
                                <p>45 Phạm Viết Chánh, P.19, Q.Bình Thạnh, TP.HCM</p>
                                <p>ĐT: <a href="tel:09045698782">090.456.98.78</a></p>
                                <p>Giờ mở cửa: 8:00 - 18:00 (Thứ 2 - Thứ 7)</p>
                            </div>
                            <div className="contact-card">
                                <h3>📍 Showroom Hà Nội</h3>
                                <p>126 Nguyễn Văn Tuyết, Đống Đa, Hà Nội</p>
                                <p>ĐT: <a href="tel:08980018782">0898.00.18.78</a></p>
                                <p>Giờ mở cửa: 8:00 - 18:00 (Thứ 2 - Thứ 7)</p>
                            </div>
                            <div className="contact-card">
                                <h3>📞 Hotline</h3>
                                <div className="contact-phones">
                                    <p>CSKH: <a href="tel:09045698782">090.456.98.78</a></p>
                                    <p>Bán lẻ Nam Bộ: <a href="tel:08330660662">0833.06.60.66</a></p>
                                    <p>Bán lẻ Bắc Trung Bộ: <a href="tel:08980018782">0898.00.18.78</a></p>
                                    <p>Đại lý: <a href="tel:09048608782">0904.86.08.78</a></p>
                                    <p>Khách sạn: <a href="tel:09361028782">0936.10.28.78</a></p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <h3>✉️ Email</h3>
                                <p><a href="mailto:info@procaffe.vn">info@procaffe.vn</a></p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Gửi yêu cầu tư vấn</h2>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Họ và tên *</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Số điện thoại *</label>
                                    <input type="tel" id="phone" name="phone" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Chủ đề</label>
                                    <select id="subject" name="subject">
                                        <option value="tu-van">Tư vấn sản phẩm</option>
                                        <option value="bao-hanh">Bảo hành / Sửa chữa</option>
                                        <option value="dat-hang">Đặt hàng</option>
                                        <option value="hop-tac">Hợp tác đại lý</option>
                                        <option value="khac">Khác</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Nội dung *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-primary">
                                    Gửi tin nhắn
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6917!3d10.7976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z45 Phạm Viết Chánh, Bình Thạnh!5e0!3m2!1svi!2svn"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: "var(--radius-md)" }}
                            allowFullScreen
                            loading="lazy"
                            title="ProCaffe Showroom HCM"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
