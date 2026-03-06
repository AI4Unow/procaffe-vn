import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <Image
                                src="/images/logo-procaffe-white.png"
                                alt="ProCaffe"
                                width={180}
                                height={48}
                            />
                            <p>
                                ProCaffe - Nhà cung cấp hàng đầu các giải pháp toàn diện liên
                                quan đến cà phê tại Việt Nam. Đại lý chính thức của Saeco,
                                Gaggia, Lelit, Wega, Eureka tại Việt Nam.
                            </p>
                            <div className="social-links">
                                <a
                                    href="https://www.facebook.com/ProCaffeGroup"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/user/mayphacapheSaeco"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                                <a href="mailto:info@procaffe.vn" aria-label="Email">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4>Sản phẩm</h4>
                            <div className="footer-links">
                                <Link href="/products?cat=may-pha-ca-phe">
                                    Máy pha cà phê
                                </Link>
                                <Link href="/products?cat=may-xay-ca-phe">
                                    Máy xay cà phê
                                </Link>
                                <Link href="/products?cat=am-pha-ca-phe">Ấm Moka</Link>
                                <Link href="/products?cat=dung-cu-pha-che-phu-kien">
                                    Phụ kiện
                                </Link>
                                <Link href="/products?cat=ca-phe-rang-xay">Cà phê</Link>
                            </div>
                        </div>

                        {/* Policies */}
                        <div>
                            <h4>Chính sách</h4>
                            <div className="footer-links">
                                <Link href="/chinh-sach-bao-hanh">Chính sách bảo hành</Link>
                                <Link href="/chinh-sach-van-chuyen">
                                    Chính sách vận chuyển
                                </Link>
                                <Link href="/chinh-sach-doi-tra">Chính sách đổi trả</Link>
                                <Link href="/chinh-sach-thanh-toan">
                                    Chính sách thanh toán
                                </Link>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4>Liên hệ</h4>
                            <div className="footer-contact-item">
                                <span className="footer-contact-icon">📍</span>
                                <span>
                                    HCM: 45 Phạm Viết Chánh, P.19, Q.Bình Thạnh
                                </span>
                            </div>
                            <div className="footer-contact-item">
                                <span className="footer-contact-icon">📍</span>
                                <span>
                                    HN: 126 Nguyễn Văn Tuyết, Đống Đa
                                </span>
                            </div>
                            <div className="footer-contact-item">
                                <span className="footer-contact-icon">📞</span>
                                <a href="tel:09045698782">090.456.98.78</a>
                            </div>
                            <div className="footer-contact-item">
                                <span className="footer-contact-icon">✉️</span>
                                <a href="mailto:info@procaffe.vn">info@procaffe.vn</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span>© {new Date().getFullYear()} ProCaffe. All rights reserved.</span>
                        <Link href="http://online.gov.vn/Home/WebDetails/23426">
                            <Image
                                src="/images/dathongbao.png"
                                alt="Đã thông báo Bộ Công Thương"
                                width={150}
                                height={50}
                                className="footer-gov-logo"
                            />
                        </Link>
                    </div>
                </div>
            </footer>

            {/* Chat Buttons */}
            <div className="chat-buttons">
                <a
                    href="https://t.me/Procaffe_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chat-btn telegram"
                    aria-label="Chat Telegram"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                </a>
                <a
                    href="https://zalo.me/1309907900230208730"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chat-btn zalo"
                    aria-label="Chat Zalo"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <text x="2" y="18" fontSize="14" fontWeight="bold" fontFamily="Arial">Z</text>
                    </svg>
                </a>
            </div>
        </>
    );
}
