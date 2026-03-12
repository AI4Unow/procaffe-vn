import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Top row: Logo + Bộ Công Thương badge */}
                <div className="footer-top-row">
                    <div className="footer-logo-area">
                        <Image
                            src="/images/logo-procaffe-white.png"
                            alt="ProCaffe"
                            width={180}
                            height={50}
                        />
                    </div>
                    <div className="footer-badge-area">
                        <a href="http://online.gov.vn/Home/WebDetails/23426" target="_blank" rel="noopener noreferrer">
                            <img src="/images/dathongbao.png" alt="Đã thông báo Bộ Công Thương" className="footer-gov-logo" />
                        </a>
                    </div>
                </div>

                {/* Main footer content */}
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col footer-company">
                        <h4>CÔNG TY CỔ PHẦN QUỐC TẾ BÁCH HỢP</h4>
                        <div className="footer-info-text">
                            <p>
                                <strong>Showroom Hồ Chí Minh</strong> (Đỗ ô tô nhanh hoặc gửi Cộng Hòa Plaza):
                                Số 1 Đường C18, P. Bảy Hiền, TP. HCM (tầng 2, phía trên KAI Coffee) –
                                Hotline 0833066066 – 0936102878 ; CSKH 0904569878
                            </p>
                            <p>
                                <strong>Showroom Hà Nội</strong> (Đỗ ô tô nhanh):
                                Số 126 đường Nguyễn Văn Tuyết, p. Đống Đa, Hà Nội –
                                Hotline 0904860878 – 0898001878
                            </p>
                            <p>– Mã số thuế: 0310557217</p>
                            <p>– Ngày cấp: 26/09/2011</p>
                            <p>– Điện thoại: 028 3526 4108</p>
                            <p>– Email: info@procaffe.vn (BGĐ)</p>
                        </div>
                    </div>

                    {/* Policies */}
                    <div className="footer-col footer-policies">
                        <h4>CHÍNH SÁCH &amp; QUY ĐỊNH</h4>
                        <div className="footer-links">
                            <Link href="/chinh-sach/thanh-toan">📋 Quy định và hình thức thanh toán</Link>
                            <Link href="/chinh-sach/van-chuyen">📋 Chính sách vận chuyển và cài đặt</Link>
                            <Link href="/chinh-sach/bao-hanh">📋 Chính sách bảo hành và bảo trì</Link>
                            <Link href="/chinh-sach/bao-mat">📋 Chính sách bảo mật thông tin</Link>
                            <Link href="/chinh-sach/doi-tra">📋 Chính sách đổi trả và hoàn tiền</Link>
                            <Link href="/chinh-sach/thanh-vien">📋 Chính sách ưu đãi chương trình thành viên</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="footer-col footer-social-col">
                        <div className="social-links">
                            <a href="https://www.facebook.com/ProCaffeGroup" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/user/mayphacapheSaeco" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                            <a href="https://twitter.com/procaffevn" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                            <a href="https://plus.google.com/u/1/112271281846415127037" target="_blank" rel="noopener noreferrer" aria-label="Google+">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.331 3.295A4.798 4.798 0 012.88 12c0-2.633 2.152-4.824 4.755-4.824 1.52 0 2.546.646 3.127 1.206l2.137-2.055C11.45 5.023 9.707 4.2 7.635 4.2A7.8 7.8 0 000 12a7.8 7.8 0 007.635 7.8c4.416 0 7.345-3.102 7.345-7.474 0-.502-.053-.885-.12-1.267H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.182h2.182v2.182h-2.183v-2.182H24z" /></svg>
                            </a>
                            <a href="https://vn.pinterest.com/procaffe0283/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.188 0 7.429 2.986 7.429 6.969 0 4.167-2.626 7.518-6.275 7.518-1.226 0-2.38-.636-2.774-1.39l-.754 2.871c-.274 1.039-1.011 2.341-1.507 3.134 1.258.388 2.593.593 3.979.593 6.627 0 11.985-5.365 11.985-11.987C23.97 5.367 18.644 0 12.017 0z" /></svg>
                            </a>
                            <a href="mailto:info@procaffe.vn" aria-label="Email">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
