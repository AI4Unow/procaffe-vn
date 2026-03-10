import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProCaffe - Máy Pha Cà Phê, Máy Xay Cà Phê Chuyên Nghiệp",
  description:
    "ProCaffe - Nhà cung cấp hàng đầu các giải pháp toàn diện liên quan đến cà phê tại Việt Nam. Máy pha cà phê Saeco, Wega, Lelit, Gaggia, Eureka.",
  icons: {
    icon: "/images/logo-procaffe.png",
  },
  metadataBase: new URL("https://procaffe-vn.vercel.app"),
  openGraph: {
    title: "ProCaffe - Máy Pha Cà Phê, Máy Xay Cà Phê Chuyên Nghiệp",
    description:
      "Nhà cung cấp hàng đầu các giải pháp toàn diện liên quan đến cà phê tại Việt Nam.",
    url: "https://procaffe-vn.vercel.app",
    siteName: "ProCaffe",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/logo-procaffe@2x.png",
        width: 400,
        height: 200,
        alt: "ProCaffe Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
