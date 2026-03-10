import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingWidgets from "../../components/floating-widgets";
import TrustBadgesSidebar from "../../components/trust-badges-sidebar";
import ArticleSidebar from "../../components/article-sidebar";
import Link from "next/link";

const jobPositions = [
    {
        title: "Key Account Manager – Quản Lý Dự Án HORECA",
        image: "https://procaffe.vn/wp-content/uploads/2025/06/quan-ly-du-an-procaffe-1.jpg",
        description:
            "Tuyển dụng Key Account Manager – thu nhập cạnh tranh, môi trường chuyên nghiệp, cơ hội phát triển không giới hạn. Chúng tôi đang tìm kiếm một ứng viên bản lĩnh, giao tiếp tốt, có ít nhất 2 năm kinh nghiệm bán hàng B2B, đặc biệt trong ngành hàng điện gia dụng hoặc kênh HORECA / F&B.",
        link: "/thanh-vien/tuyen-dung",
    },
    {
        title: "Kế toán bán hàng Hà Nội",
        image: "https://procaffe.vn/wp-content/uploads/2025/06/KE-TOAN-VIEN.jpg",
        description:
            "Đi làm ngay – Thu nhập 9–15 triệu, không giới hạn độ tuổi. Nếu bạn đã có từ 1 năm kinh nghiệm, tốt nghiệp Cao đẳng/Đại học chuyên ngành Tài chính – Kế toán, thành thạo Excel và phần mềm kế toán (ưu tiên biết Amis).",
        link: "/thanh-vien/tuyen-dung",
    },
    {
        title: "KỸ THUẬT VIÊN CƠ ĐIỆN TỬ",
        image: "https://procaffe.vn/wp-content/uploads/2025/02/ky-thuat-vien-co-dien-tu.jpg",
        description:
            "Tuyển dụng Chuyên viên Kỹ thuật Cơ điện tử làm việc tại Tân Bình. Thu nhập từ 8–12 triệu. Nếu bạn là nam từ 25 tuổi, tốt nghiệp ngành Cơ Điện Tử, có tư duy kỹ thuật tốt và thích làm việc thực tế.",
        link: "/thanh-vien/tuyen-dung",
    },
    {
        title: "KẾ TOÁN VIÊN",
        image: "https://procaffe.vn/wp-content/uploads/2025/02/ke-toan-vien-ho-chi-minh.jpg",
        description:
            "Tuyển dụng Kế Toán Viên – làm việc tại Tân Bình, TP.HCM | Lương cao. Bạn là người cẩn thận, trung thực và muốn gắn bó với công việc kế toán chuyên sâu trong lĩnh vực nhập khẩu.",
        link: "/thanh-vien/tuyen-dung",
    },
];

export const metadata = {
    title: "Tuyển Dụng Tại Procaffe – Việc Làm Hấp Dẫn Ngành Cà Phê, F&B",
    description:
        "Procaffe tuyển dụng tại HCM & Hà Nội – cơ hội việc làm ngành cà phê, F&B, kế toán, kỹ thuật máy pha cà phê, quản lý dự án Horeca. Lương cao, môi trường chuyên nghiệp.",
};

export default function RecruitmentPage() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/">Trang chủ</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link href="/thanh-vien">Thành viên Procaffe</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span>Tuyển dụng</span>
                </div>
            </div>

            <section className="content-section">
                <div className="container">
                    <div className="article-layout">
                        {/* Main content */}
                        <div className="article-main">
                            <h1 className="article-title">PROCAFFE TUYỂN DỤNG</h1>

                            {/* Company culture section */}
                            <div className="recruitment-culture">
                                <h2>Sứ mạng – Tầm nhìn – Chiến lược</h2>
                                <p>
                                    ProCaffe là đối tác đồng hành tin cậy, mang đến các giải pháp
                                    nhanh chóng, dễ dàng, và ở đẳng cấp chuyên gia về cà phê, dụng
                                    cụ pha chế cà phê, đồ uống và thực phẩm.
                                </p>
                                <p>
                                    Mỗi ProCaffer (*) đều có thói quen giữ lời hứa, luôn phản hồi
                                    kịp thời và thể hiện tính chuyên nghiệp trong mọi việc; luôn
                                    hoàn thành công việc với tốc độ nhanh, và làm mọi việc trở nên
                                    dễ dàng thuận tiện cho người khác; thể hiện tâm huyết, kỹ năng
                                    và đẳng cấp của một chuyên gia trong việc mình làm.
                                </p>
                                <p>
                                    Mỗi ProCaffer là đại diện duy nhất của ProCaffe khi tiếp xúc
                                    với khách hàng. Từng ProCaffer không chỉ là chuyên gia trong
                                    lĩnh vực chuyên môn, mà còn tự tin là đại diện xuất sắc mỗi
                                    khi có cơ hội tiếp xúc với khách hàng dọc hành trình trải
                                    nghiệm.
                                </p>
                                <p>
                                    ProCaffers còn là khách hàng của nhau. Từng ProCaffer đều nỗ
                                    lực để giữ lời hứa với cộng sự, làm mọi việc trở nên dễ dàng
                                    thuận tiện cho đồng nghiệp, và nỗ lực để trở nên giỏi nhất
                                    trong việc mình làm.
                                </p>
                                <p>
                                    ProCaffe cam kết dành tất cả trái tim, ý chí, năng lượng, hi
                                    vọng, nguồn lực, niềm tự hào, sự can đảm và kiên định để đạt
                                    được các mục tiêu chiến lược đó.
                                </p>
                                <p className="procaffer-note">
                                    (*) ProCaffer(s) là nhân sự thuộc ProCaffe, gồm các cổ đông
                                    trực tiếp điều hành, ban lãnh đạo, các quản lý, nhân viên, cộng
                                    tác viên.
                                </p>
                            </div>

                            {/* CTA Banner */}
                            <div className="cta-banner recruitment-cta">
                                <p>
                                    <strong>GỬI CV NGAY</strong> – Email:{" "}
                                    <a href="mailto:info@procaffe.vn">info@procaffe.vn</a>
                                </p>
                                <p className="cta-phones">
                                    Liên hệ:{" "}
                                    <a href="tel:02835264108">028 3526 4108</a>
                                </p>
                            </div>

                            {/* Job positions heading */}
                            <h2 className="section-heading" style={{ marginTop: 40 }}>
                                TUYỂN DỤNG
                            </h2>

                            {/* Job positions grid */}
                            <div className="job-cards-grid">
                                {jobPositions.map((job, idx) => (
                                    <div key={idx} className="job-card">
                                        <div className="job-card-image">
                                            <img
                                                src={job.image}
                                                alt={job.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="job-card-body">
                                            <h3 className="job-card-title">{job.title}</h3>
                                            <p className="job-card-desc">{job.description}</p>
                                            <span className="job-card-price">Liên hệ</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Detailed job descriptions */}
                            <div className="job-descriptions">
                                <div className="job-detail-card" id="key-account-manager">
                                    <h2>NHÂN VIÊN KẾ TOÁN TẠI HÀ NỘI</h2>
                                    <p>
                                        Đi làm ngay – Thu nhập 9–15 triệu, không giới hạn độ tuổi.
                                        Nếu bạn đã có từ 1 năm kinh nghiệm, tốt nghiệp Cao
                                        đẳng/Đại học chuyên ngành Tài chính – Kế toán, thành thạo
                                        Excel và phần mềm kế toán (ưu tiên biết Amis), đây là cơ
                                        hội dành cho bạn. Môi trường làm việc chuyên nghiệp, ổn
                                        định, phù hợp với người yêu thích sự chỉn chu, trách nhiệm
                                        và mong muốn phát triển lâu dài.
                                    </p>
                                    <p>Ứng tuyển ngay để khám phá công việc phù hợp chỉ trong 1 phút!</p>
                                </div>

                                <div className="job-detail-card" id="chuyen-vien-ky-thuat">
                                    <h2>CHUYÊN VIÊN KỸ THUẬT – TP.HCM</h2>
                                    <p>
                                        Tuyển dụng Chuyên viên Kỹ thuật Cơ điện tử làm việc tại Tân
                                        Bình. Thu nhập từ 8–12 triệu. Nếu bạn là nam từ 25 tuổi,
                                        tốt nghiệp ngành Cơ Điện Tử, có tư duy kỹ thuật tốt và
                                        thích làm việc thực tế như lắp đặt, bảo trì máy móc (đặc
                                        biệt là máy pha cà phê), đây là cơ hội dành cho bạn. Môi
                                        trường thân thiện, có lộ trình đào tạo bài bản, được đi công
                                        tác, gặp gỡ khách hàng và mở rộng kỹ năng chuyên môn.
                                    </p>
                                    <p>Ứng tuyển ngay để bắt đầu hành trình mới!</p>
                                </div>

                                <div className="job-detail-card" id="key-account-hcm">
                                    <h2>KEY ACCOUNT MANAGER – HCM</h2>
                                    <p>
                                        Tuyển dụng Key Account Manager – thu nhập cạnh tranh, môi
                                        trường chuyên nghiệp, cơ hội phát triển không giới hạn.
                                        Chúng tôi đang tìm kiếm một ứng viên bản lĩnh, giao tiếp
                                        tốt, có ít nhất 2 năm kinh nghiệm bán hàng B2B, đặc biệt
                                        trong ngành hàng điện gia dụng hoặc kênh HORECA / F&B.
                                    </p>
                                    <p>
                                        Bạn sẵn sàng để bước vào vai trò đầy thách thức nhưng giàu
                                        cơ hội này chứ? Ứng tuyển ngay!
                                    </p>
                                </div>

                                <div className="job-detail-card" id="ke-toan-hcm">
                                    <h2>KẾ TOÁN NỘI BỘ TẠI HCM</h2>
                                    <p>
                                        Tuyển dụng Kế Toán Viên – làm việc tại Tân Bình, TP.HCM |
                                        Lương cao. Bạn là người cẩn thận, trung thực và muốn gắn bó
                                        với công việc kế toán chuyên sâu trong lĩnh vực nhập khẩu?
                                        Yêu cầu ứng viên nữ, từ 1 năm kinh nghiệm trở lên, tốt
                                        nghiệp ngành Kế toán – Tài chính – Kiểm toán, có tư duy
                                        logic, biết làm việc nhóm và chủ động xử lý tình huống.
                                    </p>
                                    <p>
                                        Chế độ hấp dẫn: môi trường làm việc chuyên nghiệp, đào tạo
                                        bài bản, đầy đủ BHXH, du lịch nghỉ dưỡng cao cấp hằng năm
                                        cùng gia đình.
                                    </p>
                                    <p>
                                        👉 Bạn đã sẵn sàng cho một vị trí ổn định, lâu dài và có lộ
                                        trình phát triển rõ ràng? Ứng tuyển ngay hôm nay!
                                    </p>
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <div className="cta-banner recruitment-cta" style={{ marginTop: 32 }}>
                                <p>
                                    <strong>ỨNG TUYỂN NGAY</strong> – Gửi CV đến{" "}
                                    <a href="mailto:info@procaffe.vn">info@procaffe.vn</a>
                                </p>
                                <p className="cta-phones">
                                    Hotline:{" "}
                                    <a href="tel:02835264108">028 3526 4108</a>
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="sidebar">
                            <TrustBadgesSidebar />
                            <ArticleSidebar />
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWidgets />
        </>
    );
}
