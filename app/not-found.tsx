import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import FloatingWidgets from "./components/floating-widgets";

export default function NotFound() {
    return (
        <>
            <Header />
            <section
                style={{
                    minHeight: "50vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "60px 16px",
                    background: "#fafafa",
                }}
            >
                <div>
                    <h1
                        style={{
                            fontSize: "96px",
                            fontWeight: 900,
                            color: "#f37021",
                            lineHeight: 1,
                            marginBottom: "16px",
                            fontFamily: "'Roboto', sans-serif",
                        }}
                    >
                        404
                    </h1>
                    <h2
                        style={{
                            fontSize: "24px",
                            fontWeight: 600,
                            color: "#333",
                            marginBottom: "12px",
                        }}
                    >
                        Trang không tìm thấy
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#666",
                            marginBottom: "28px",
                            maxWidth: "460px",
                        }}
                    >
                        Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
                        Vui lòng quay lại trang chủ hoặc sử dụng menu để tìm nội dung phù hợp.
                    </p>
                    <Link
                        href="/"
                        style={{
                            display: "inline-block",
                            background: "#f37021",
                            color: "#fff",
                            padding: "12px 32px",
                            borderRadius: "6px",
                            fontWeight: 600,
                            fontSize: "15px",
                            transition: "background 0.2s",
                        }}
                    >
                        ← Về trang chủ
                    </Link>
                </div>
            </section>
            <Footer />
            <FloatingWidgets />
        </>
    );
}
