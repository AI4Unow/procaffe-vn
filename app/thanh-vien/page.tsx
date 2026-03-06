import Header from "../components/header";
import Footer from "../components/footer";
import FloatingWidgets from "../components/floating-widgets";
import Link from "next/link";

export default function MembersPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/chinh-sach/bao-hanh">Chính Sách &amp; Quy Định</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Chính sách ưu đãi chương trình thành viên</span>
                </div>
            </div>

            <section className="content-section">
                <div className="container">
                    <div className="article-layout">
                        {/* Main content — left column */}
                        <div className="article-main">
                            <h1 className="article-title">Chính sách ưu đãi chương trình thành viên</h1>
                            <span className="article-date">03/02/2024</span>

                            {/* Related posts box */}
                            <div className="related-posts-box">
                                <p className="related-posts-label">TIN LIÊN QUAN</p>
                                <ul>
                                    <li><Link href="/blog">Báo Cáo Thị Trường Máy Pha Cà Phê 2025: Việt Nam Và Cơ Hội Tăng Trưởng 2026</Link></li>
                                    <li><Link href="/products">Máy xay cà phê specialty Eureka ATOM Specialty | Chất lượng Ý vững vàng, giá tốt</Link></li>
                                    <li><Link href="/blog">Hướng dẫn bảo trì máy xay Vitamix: Giữ máy xay luôn bền bỉ</Link></li>
                                    <li><Link href="/blog">Máy xay sinh tố Vitamix – Kỹ thuật bền bỉ &amp; chính xác cho vận hành lâu dài</Link></li>
                                </ul>
                            </div>

                            {/* Promotional banner */}
                            <div className="article-banner">
                                <img
                                    src="https://procaffe.vn/wp-content/uploads/2024/02/MUA-ONLINE-PROCAFFE-2024-1.png"
                                    alt="Đăng ký thành viên MUA ONLINE - Miễn phí vận chuyển toàn quốc - Giảm đến 10% tất cả sản phẩm"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>

                            {/* Policy title */}
                            <h1 className="article-title" style={{ textAlign: "center", marginTop: 32 }}>
                                Chính sách ưu đãi chương trình thành viên ProCaffe
                            </h1>

                            {/* Comparison table — image from original site */}
                            <div className="article-table-image">
                                <img
                                    src="https://procaffe.vn/wp-content/uploads/2024/02/ProCaffe-vinh-hanh-la-Nha-rang-ca-phe-dau-tien-tai-Viet-Nam-dat-chung-nhan-4C-2.jpg"
                                    alt="Bảng so sánh chính sách ưu đãi: Khách vãng lai vs Thành viên ProCaffe"
                                    style={{ width: "100%", height: "auto", border: "2px solid #e74c3c" }}
                                />
                            </div>

                            {/* Policy notes */}
                            <div className="policy-notes">
                                <p>
                                    <span style={{ color: "#e74c3c" }}>*</span>  Miễn phí vận chuyển khi gửi qua Viettel Post, thời gian giao hàng từ 3 – 5 ngày làm việc. Miễn phí tối đa 30.000đ/đơn hàng dưới 1 triệu, 50.000đ/đơn hàng 1 – 10 triệu và 100.000đ với đơn trên 10 triệu.
                                </p>
                                <p>
                                    <span style={{ color: "#e74c3c" }}>**</span>  Không áp dụng đồng thời với các chương trình ưu đãi khác hoặc chương trình trả góp
                                </p>
                                <p>
                                    <span style={{ color: "#e74c3c" }}>***</span>  Giá website chưa bao gồm xuất VAT
                                </p>
                                <p>
                                    <span style={{ color: "#e74c3c" }}>****</span>Chương trình ưu đãi thành viên chỉ áp dụng đối với đặt hàng mua online trên website www.procaffe.vn
                                </p>
                            </div>

                            {/* CTA */}
                            <p style={{ textAlign: "center", margin: "32px 0" }}>
                                <Link href="/contact" style={{ color: "#e74c3c", fontWeight: "bold", textDecoration: "underline", fontSize: "1.1rem" }}>
                                    ĐĂNG KÝ THÀNH VIÊN PROCAFFE NGAY HÔM NAY ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT
                                </Link>
                            </p>

                            {/* Post tags */}
                            <div className="article-tags">
                                <Link href="/chinh-sach/bao-hanh">Chính Sách &amp; Quy Định</Link>,{" "}
                                <Link href="/blog">Tin Tức</Link>
                            </div>
                        </div>

                        {/* Sidebar — right column */}
                        <aside className="article-sidebar">
                            {/* Service badges */}
                            <div className="sidebar-widget sidebar-badges">
                                <div className="sidebar-badge-item">
                                    <span className="badge-icon-circle">🚚</span>
                                    <div>
                                        <strong>MIỄN PHÍ VẬN CHUYỂN</strong>
                                    </div>
                                </div>
                                <div className="sidebar-badge-item">
                                    <span className="badge-icon-circle">✅</span>
                                    <div>
                                        <strong>CAM KẾT CHÍNH HÃNG, GIẤY TỜ RÕ RÀNG</strong>
                                    </div>
                                </div>
                                <div className="sidebar-badge-item">
                                    <span className="badge-icon-circle">🔧</span>
                                    <div>
                                        <strong>LẮP ĐẶT MIỄN PHÍ Ở NỘI THÀNH</strong>
                                        <p>Hồ Chí Minh, Hà Nội</p>
                                    </div>
                                </div>
                                <div className="sidebar-badge-item">
                                    <span className="badge-icon-circle">🛡️</span>
                                    <div>
                                        <strong>BẢO HÀNH, SỬA CHỮA TẠI NHÀ</strong>
                                        <p>Hồ Chí Minh, Hà Nội</p>
                                    </div>
                                </div>
                                <div className="sidebar-badge-item">
                                    <span className="badge-icon-circle">📞</span>
                                    <div>
                                        <strong>CSKH TẬN TÌNH</strong>
                                        <p><a href="tel:0904569878" style={{ color: "var(--primary)" }}>0904569878</a></p>
                                    </div>
                                </div>
                                <div className="sidebar-badge-item">
                                    <span className="badge-icon-circle">💳</span>
                                    <div>
                                        <strong>TRẢ GÓP THẺ TÍN DỤNG</strong>
                                        <p>Lãi suất 0% cho đơn hàng chỉ từ 3,5 triệu đồng</p>
                                    </div>
                                </div>
                                <div className="sidebar-badge-item">
                                    <span className="badge-icon-circle">⭐</span>
                                    <div>
                                        <strong>XẾP HẠNG SẢN PHẨM</strong>
                                        <p>Sản phẩm bán chạy</p>
                                    </div>
                                </div>
                            </div>

                            {/* Featured products */}
                            <div className="sidebar-widget">
                                <h3 className="sidebar-widget-title">SẢN PHẨM NỔI BẬT</h3>
                                <div className="sidebar-product-item">
                                    <Link href="/products/lelit-marax3-pl62x3">
                                        <img src="https://procaffe.vn/wp-content/uploads/2024/12/LELIT-MARA-X3-PL62X3-100x100.png" alt="LELIT MARAX3" width={80} height={80} />
                                    </Link>
                                    <div>
                                        <Link href="/products/lelit-marax3-pl62x3" className="sidebar-product-name">LELIT MARAX3 PL62X3</Link>
                                        <p className="sidebar-product-price">54.333.000₫</p>
                                        <p className="sidebar-product-price-sale">57.190.000₫</p>
                                    </div>
                                </div>
                                <div className="sidebar-product-item">
                                    <Link href="/products/gaggia-classic-e24">
                                        <img src="https://procaffe.vn/wp-content/uploads/2024/06/GAGGIA-CLASSIC-E24-VA-EUREKA-MIGNON-FILTRO-EU-100x100.jpg" alt="GAGGIA CLASSIC E24" width={80} height={80} />
                                    </Link>
                                    <div>
                                        <Link href="/products/gaggia-classic-e24" className="sidebar-product-name">GAGGIA CLASSIC E24 VÀ EUREKA MI...</Link>
                                        <p className="sidebar-product-price">21.448.000₫</p>
                                        <span className="sidebar-stars">★★★★★</span>
                                        <p className="sidebar-product-price-sale">21.748.000₫</p>
                                    </div>
                                </div>
                                <div className="sidebar-product-item">
                                    <Link href="/products/gaggia-classic-gt">
                                        <img src="https://procaffe.vn/wp-content/uploads/2024/09/Gaggia-Classic-GT-100x100.png" alt="GAGGIA CLASSIC GT" width={80} height={80} />
                                    </Link>
                                    <div>
                                        <Link href="/products/gaggia-classic-gt" className="sidebar-product-name">GAGGIA CLASSIC GT</Link>
                                        <p className="sidebar-product-price">58.600.000₫</p>
                                        <span className="sidebar-stars">★★★★★</span>
                                    </div>
                                </div>
                                <div className="sidebar-product-item">
                                    <Link href="/products/mahlkonig-x64-sd">
                                        <img src="https://procaffe.vn/wp-content/uploads/2024/03/MK_X54_Allround_espresso_moonshine_silver_front_2-100x100.png" alt="MAHLKONIG X64 SD" width={80} height={80} />
                                    </Link>
                                    <div>
                                        <Link href="/products/mahlkonig-x64-sd" className="sidebar-product-name">MAHLKONIG X64 SD SINGLE DOSE</Link>
                                        <p className="sidebar-product-price-old">21.000.000₫</p>
                                        <p className="sidebar-product-price">16.500.000₫</p>
                                        <span className="sidebar-stars">★★★★★</span>
                                    </div>
                                </div>
                                <div className="sidebar-product-item">
                                    <Link href="/products/saeco-aurora-m1">
                                        <img src="https://procaffe.vn/wp-content/uploads/2024/12/SAECO-AURORA-M1-PROCAFFE-100x100.png" alt="SAECO AURORA M1" width={80} height={80} />
                                    </Link>
                                    <div>
                                        <Link href="/products/saeco-aurora-m1" className="sidebar-product-name">SAECO AURORA M1</Link>
                                        <p className="sidebar-product-price">41.688.000₫</p>
                                        <span className="sidebar-stars">★★★★★</span>
                                    </div>
                                </div>
                            </div>

                            {/* News */}
                            <div className="sidebar-widget">
                                <h3 className="sidebar-widget-title">TIN TỨC</h3>
                                <div className="sidebar-news-item">
                                    <Link href="/blog" className="sidebar-news-title">Báo Cáo Thị Trường Máy Pha Cà Phê 2025: Việt N...</Link>
                                    <p className="sidebar-news-desc">Năm 2025 đang ghi dấu một bước ngoặt quan trọng của thị trường máy pha cà phê tại Việt Nam...</p>
                                </div>
                                <div className="sidebar-news-item">
                                    <Link href="/blog" className="sidebar-news-title">Máy xay cà phê specialty Eureka ATOM Specialty |...</Link>
                                    <p className="sidebar-news-desc">Khi sự ổn định và độ bền trở thành lợi thế cạnh tranh...</p>
                                </div>
                                <div className="sidebar-news-item">
                                    <Link href="/blog" className="sidebar-news-title">Hướng dẫn bảo trì máy xay Vitamix: Giữ máy xay l...</Link>
                                    <p className="sidebar-news-desc">Vì sao cần bảo trì máy xay Vitamix đúng cách? Đối với các quán cà phê...</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
