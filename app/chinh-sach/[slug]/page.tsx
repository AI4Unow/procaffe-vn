import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import Link from "next/link";

const policies: Record<string, { title: string; content: string[] }> = {
    "thanh-toan": {
        title: "Quy định và hình thức thanh toán",
        content: [
            "ProCaffe hỗ trợ nhiều hình thức thanh toán linh hoạt để đáp ứng nhu cầu của khách hàng:",
            "**1. Thanh toán tiền mặt:** Quý khách có thể thanh toán trực tiếp tại showroom ProCaffe hoặc thanh toán khi nhận hàng (COD) cho đơn hàng nội thành.",
            "**2. Chuyển khoản ngân hàng:** Chuyển khoản trước hoặc sau khi nhận hàng. Thông tin tài khoản sẽ được cung cấp khi đặt hàng.",
            "**3. Thanh toán qua thẻ:** Chấp nhận thanh toán bằng thẻ Visa, Mastercard, JCB tại showroom.",
            "**4. Trả góp:** Hỗ trợ trả góp 0% lãi suất qua các đối tác tài chính cho một số sản phẩm nhất định.",
            "Hóa đơn VAT được xuất cho tất cả đơn hàng theo yêu cầu.",
        ],
    },
    "van-chuyen": {
        title: "Chính sách vận chuyển và cài đặt",
        content: [
            "ProCaffe cam kết giao hàng nhanh chóng và an toàn trên toàn quốc:",
            "**Miễn phí vận chuyển:** Áp dụng cho đơn hàng nội thành TP.HCM và Hà Nội.",
            "**Giao hàng toàn quốc:** Thời gian giao từ 2-5 ngày làm việc tùy khu vực.",
            "**Dịch vụ cài đặt:** Miễn phí lắp đặt và hướng dẫn sử dụng cho tất cả máy pha cà phê tại nội thành TP.HCM và Hà Nội.",
            "**Đóng gói cẩn thận:** Sản phẩm được đóng gói kỹ lưỡng với thùng carton và xốp chống sốc để đảm bảo an toàn trong quá trình vận chuyển.",
            "Liên hệ: 090.456.98.78 để được tư vấn chi tiết về phí vận chuyển cho các khu vực ngoài nội thành.",
        ],
    },
    "bao-hanh": {
        title: "Chính sách bảo hành và bảo trì",
        content: [
            "ProCaffe cam kết bảo hành chính hãng cho tất cả sản phẩm:",
            "**Thời gian bảo hành:** 12-24 tháng tùy theo sản phẩm và thương hiệu.",
            "**Phạm vi bảo hành:** Tất cả lỗi kỹ thuật do nhà sản xuất trong điều kiện sử dụng bình thường.",
            "**Linh kiện chính hãng:** 100% linh kiện thay thế được nhập khẩu chính hãng.",
            "**Dịch vụ bảo trì định kỳ:** Chương trình bảo trì ưu đãi giúp kéo dài tuổi thọ máy.",
            "**Hỗ trợ kỹ thuật:** Đội ngũ kỹ thuật viên chuyên nghiệp, được đào tạo bởi nhà sản xuất.",
            "Không bảo hành: Hư hỏng do sử dụng sai hướng dẫn, tác động bên ngoài, thiên tai, hoặc tự ý sửa chữa bởi bên thứ ba.",
        ],
    },
    "bao-mat": {
        title: "Chính sách bảo mật thông tin",
        content: [
            "ProCaffe cam kết bảo vệ thông tin cá nhân của khách hàng:",
            "**Thu thập thông tin:** Chỉ thu thập thông tin cần thiết cho việc xử lý đơn hàng và cung cấp dịch vụ.",
            "**Mục đích sử dụng:** Thông tin chỉ được sử dụng để xử lý đơn hàng, giao hàng, bảo hành, và gửi thông tin khuyến mãi (với sự đồng ý).",
            "**Bảo mật:** Áp dụng các biện pháp bảo mật tiêu chuẩn để bảo vệ dữ liệu khách hàng.",
            "**Không chia sẻ:** Không bán, trao đổi hoặc chia sẻ thông tin cá nhân cho bên thứ ba trừ khi có sự đồng ý hoặc theo yêu cầu pháp luật.",
            "**Quyền của khách hàng:** Khách hàng có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân.",
        ],
    },
    "doi-tra": {
        title: "Chính sách đổi trả và hoàn tiền",
        content: [
            "ProCaffe hỗ trợ đổi trả trong các trường hợp sau:",
            "**Thời gian đổi trả:** Trong vòng 7 ngày kể từ ngày nhận hàng.",
            "**Điều kiện đổi trả:** Sản phẩm còn nguyên seal, chưa qua sử dụng, đầy đủ phụ kiện và hộp đựng.",
            "**Sản phẩm lỗi:** Đổi mới 100% nếu sản phẩm bị lỗi kỹ thuật từ nhà sản xuất.",
            "**Hoàn tiền:** Hoàn tiền 100% trong vòng 5-7 ngày làm việc nếu không có sản phẩm thay thế.",
            "**Phí đổi trả:** Miễn phí nếu lỗi từ ProCaffe. Khách hàng chịu phí vận chuyển nếu đổi trả vì lý do cá nhân.",
            "Liên hệ CSKH: 090.456.98.78 để được hỗ trợ đổi trả.",
        ],
    },
    "thanh-vien": {
        title: "Chính sách ưu đãi chương trình thành viên",
        content: [
            "Chương trình thành viên ProCaffe mang đến nhiều quyền lợi hấp dẫn:",
            "**Hạng Bạc (Silver):** Tích lũy từ 5 triệu VNĐ — giảm 3% cho đơn hàng tiếp theo, ưu tiên bảo hành.",
            "**Hạng Vàng (Gold):** Tích lũy từ 20 triệu VNĐ — giảm 5%, miễn phí vận chuyển, bảo trì ưu đãi.",
            "**Hạng Kim Cương (Diamond):** Tích lũy từ 50 triệu VNĐ — giảm 8%, bảo hành mở rộng, tham gia sự kiện VIP.",
            "**Sinh nhật thành viên:** Ưu đãi đặc biệt trong tháng sinh nhật.",
            "**Giới thiệu bạn bè:** Nhận quà tặng khi giới thiệu khách hàng mới thành công.",
            "Đăng ký thành viên miễn phí tại showroom hoặc khi mua hàng trực tuyến.",
        ],
    },
};

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const policy = policies[slug];

    if (!policy) {
        return (
            <>
                <Header />
                <section className="content-section" style={{ textAlign: "center", padding: "80px 0" }}>
                    <div className="container">
                        <h1>Không tìm thấy trang</h1>
                        <p>Chính sách bạn tìm kiếm không tồn tại.</p>
                        <Link href="/" className="btn-primary" style={{ marginTop: 20, display: "inline-block" }}>Về trang chủ</Link>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>{policy.title}</span>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>{policy.title}</h1>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="policy-content">
                        {policy.content.map((para, i) => {
                            const parts = para.split(/\*\*(.*?)\*\*/g);
                            return (
                                <p key={i}>
                                    {parts.map((part, j) =>
                                        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                                    )}
                                </p>
                            );
                        })}
                    </div>
                    <div className="policy-contact">
                        <p>
                            Mọi thắc mắc về chính sách, vui lòng liên hệ:
                        </p>
                        <p><strong>Hotline CSKH:</strong> <a href="tel:0904569878">090.456.98.78</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@procaffe.vn">info@procaffe.vn</a></p>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}

export function generateStaticParams() {
    return Object.keys(policies).map((slug) => ({ slug }));
}
