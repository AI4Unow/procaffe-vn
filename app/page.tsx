import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import FloatingWidgets from "./components/floating-widgets";
import posts from "../data/posts.json";

/* Slider banner images from FTP download */
const sliderBanners = [
  { src: "/images/sliders/slider-4c.webp", alt: "ProCaffe chứng nhận 4C", href: "/" },
  { src: "/images/sliders/slider-banner-mar2026.jpg", alt: "Chương trình tháng 3/2026", href: "/" },
  { src: "/images/sliders/slider-address-change.png", alt: "Thay đổi địa chỉ", href: "/" },
  { src: "/images/sliders/slider-bialetti-stranger.jpg", alt: "Bialetti Stranger Things", href: "/" },
  { src: "/images/sliders/slider-phin.webp", alt: "Máy pha cà phê phin", href: "/" },
  { src: "/images/sliders/slider-kees.webp", alt: "Kees van der Westen", href: "/" },
  { src: "/images/sliders/slider-barista-attitude.webp", alt: "Barista Attitude", href: "/" },
  { src: "/images/sliders/slider-4c-alt.webp", alt: "ProCaffe 4C", href: "/" },
];

/* Brand logos to match original site: Synesso, Saeco, Lelit, Gaggia, Crem, Fiorenzato, Mahlkonig, Eureka, Bialetti */
const targetBrands = [20, 16, 15, 14, 19, 8, 6, 18, 12];
const brandLogos = targetBrands.map(id => ({
  src: `/images/brands/${id}.png`,
  alt: `Brand partner ${id}`,
}));

/* Category focus blocks matching sidebar-introduction.php */
const categoryBlocks = [
  {
    image: "/images/categories/banner-caffe-1.jpg",
    title: "MÁY PHA CÀ PHÊ GIA ĐÌNH - VĂN PHÒNG",
    description:
      "Những chiếc máy pha cà phê gia đình tự động, được trang bị công nghệ hiện đại, thiết kế sang trọng của Gaggia, Saeco đáp ứng mọi nhu cầu thưởng thức cà phê từ espresso, americano, tới latte, cappuccino chỉ với một nút nhấn.",
    links: [
      { label: "Máy pha cappuccino tự động", href: "/products?cat=may-pha-ca-phe" },
      { label: "Máy espresso tự động", href: "/products?cat=may-pha-ca-phe" },
      { label: "Máy Pha Cà Phê Espresso Bán Tự Động", href: "/products?cat=may-pha-ca-phe" },
      { label: "Máy pha cà phê Capsule-Pod", href: "/products?cat=may-pha-ca-phe" },
      { label: "Ấm pha cà phê Bialetti", href: "/products?cat=am-pha-ca-phe" },
    ],
    position: "left",
  },
  {
    image: "/images/categories/banner-caffe-2.jpg",
    title: "MÁY PHA CÀ PHÊ CHUYÊN NGHIỆP",
    description:
      "Máy pha cà phê chuyên nghiệp Wega, Saeco, Kees van der Westen dùng trong quán cà phê, nhà hàng, khách sạn, đáp ứng công suất phục vụ lớn với tốc độ nhanh, chất lượng espresso đặc sản đỉnh cao, đảm bảo tính đồng đều về chất lượng, và khả năng kiểm soát nguyên liệu, doanh thu.",
    links: [
      { label: "Máy pha Specialty coffee", href: "/products?cat=may-pha-ca-phe" },
      { label: "Máy pha cà phê Espresso", href: "/products?cat=may-pha-ca-phe" },
      { label: "Máy pha cà phê tự động dùng cho khách sạn", href: "/products?cat=may-pha-ca-phe" },
      { label: "Máy bán cà phê tự động", href: "/products?cat=may-pha-ca-phe" },
      { label: "Máy lọc cà phê", href: "/products?cat=may-pha-ca-phe" },
    ],
    position: "right",
  },
  {
    image: "/images/categories/banner-caffe-3.jpg",
    title: "CÀ PHÊ",
    description:
      "Từ những cao nguyên trù phú Nam Mỹ hay những mảnh đất đầy nắng gió khắc nghiệt ở châu Phi, tới những tầng nham thạch phun trào từ hàng triệu năm trước ở Á châu, những hạt cà phê chất chứa tinh túy của thiên nhiên thế giới đã hiện diện tại Việt Nam với ProCaffe.",
    links: [
      { label: "Cà phê Procaffe", href: "/products?cat=ca-phe-rang-xay" },
      { label: "Cà phê Heritage", href: "/products?cat=ca-phe-rang-xay" },
      { label: "Cà phê viên nén Gimoka", href: "/products?cat=ca-phe-rang-xay" },
    ],
    position: "left",
  },
  {
    image: "/images/categories/banner-caffe-4.jpg",
    title: "MÁY XAY CÀ PHÊ",
    description:
      "Các nhà chuyên sản xuất máy xay cafe như Eureka, Fiorenzato luôn dẫn đầu R&D với những công nghệ hiện đại nhất, đáp ứng những yêu cầu khắt khe nhất về tính đồng nhất, kiểm soát nhiệt độ, độ chính xác về khối lượng hay mức bột cà phê giữ lại trong máy cực thấp...",
    links: [
      { label: "Mahlkonig", href: "/products?cat=may-xay-ca-phe" },
      { label: "Eureka", href: "/products?cat=may-xay-ca-phe" },
      { label: "Fiorenzato", href: "/products?cat=may-xay-ca-phe" },
      { label: "Baratza", href: "/products?cat=may-xay-ca-phe" },
      { label: "Cunill", href: "/products?cat=may-xay-ca-phe" },
      { label: "WPM", href: "/products?cat=may-xay-ca-phe" },
    ],
    position: "right",
  },
  {
    image: "/images/categories/banner-caffe-5.jpg",
    title: "MÁY XAY VITAMIX",
    description:
      "Vitamix - thương hiệu máy xay sinh tố hàng đầu thế giới với công nghệ lưỡi dao bền bỉ, motor mạnh mẽ, phù hợp cho quán cà phê, nhà hàng và gia đình. Khả năng xay nhuyễn mọi nguyên liệu từ đá, trái cây đến các loại hạt cứng.",
    links: [
      { label: "Vitamix Drink Machine Two-Speed", href: "/products?cat=may-xay-vitamix" },
      { label: "Vitamix The Quiet One", href: "/products?cat=may-xay-vitamix" },
      { label: "Vitamix Blending Station", href: "/products?cat=may-xay-vitamix" },
    ],
    position: "left",
  },
  {
    image: "/images/categories/banner-caffe-6.jpg",
    title: "PHỤ KIỆN - PHỤ TÙNG",
    description:
      "Đầy đủ phụ kiện, linh kiện thay thế cho máy pha cà phê, máy xay cà phê. Từ tách cà phê, tamper, pitcher cho tới phin lọc, hóa chất vệ sinh máy, giúp bạn duy trì và tối ưu hiệu suất hoạt động của thiết bị.",
    links: [
      { label: "Bộ tách và đĩa cà phê", href: "/products?cat=phu-kien" },
      { label: "Phụ kiện pha cà phê", href: "/products?cat=phu-kien" },
      { label: "Hóa chất vệ sinh máy", href: "/products?cat=phu-kien" },
      { label: "Linh kiện thay thế", href: "/products?cat=phu-kien" },
    ],
    position: "right",
  },
];

export default function HomePage() {
  const latestPosts = posts.slice(0, 6);

  return (
    <>
      <Header />

      {/* Hero Slider */}
      <HeroSlider banners={sliderBanners} />

      {/* Brand Slogan Bar */}
      <section className="brand-slogan-bar">
        <div className="slogan-separator">
          <span className="slogan-line" />
          <span className="slogan-text">
            <span className="slogan-icon">☕</span>
            Procaffe - Nhà cung cấp hàng đầu các giải pháp toàn diện liên quan đến cà phê tại Việt Nam
          </span>
          <span className="slogan-line" />
        </div>
      </section>

      {/* Brand Logo Carousel */}
      <section className="brand-partners">
        <div className="brand-logos-track">
          {[...brandLogos, ...brandLogos].map((brand, i) => (
            <div key={i} className="brand-logo-item">
              <img src={brand.src} alt={brand.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Category Focus Blocks */}
      <section className="category-intro">
        {categoryBlocks.map((block, i) => (
          <div key={i} className={`category-row category-row-${block.position}`}>
            <div className="category-image-half">
              <img src={block.image} alt={block.title} loading="lazy" />
            </div>
            <div className="category-info-half">
              <h2 className="category-info-title">{block.title}</h2>
              <p className="category-info-desc">{block.description}</p>
              <ul className="category-info-links">
                {block.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="link-bullet">✦</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* YouTube Video + Blog Posts */}
      <section className="video-blog-section">
        <div className="video-blog-row">
          <div className="video-half">
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/ZbujxQ8iIWs"
                title="ProCaffe YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <Link href="/blog" className="view-more-link">
              ≫ Xem thêm
            </Link>
          </div>
          <div className="blog-half">
            <div className="blog-grid-small">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="blog-thumb-card">
                  {post.featured_image && (
                    <div className="blog-thumb-image">
                      <img src={post.featured_image} alt={post.title} loading="lazy" />
                    </div>
                  )}
                  <p className="blog-thumb-title">{post.title}</p>
                </Link>
              ))}
            </div>
            <Link href="/blog" className="view-more-link">
              ≫ Xem thêm
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </>
  );
}

/* Client-side Hero Slider component */
function HeroSlider({ banners }: { banners: typeof sliderBanners }) {
  return (
    <section className="hero-slider">
      <div className="slider-track">
        {banners.map((b, i) => (
          <div key={i} className="slider-slide">
            <Link href={b.href}>
              <img src={b.src} alt={b.alt} />
            </Link>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {banners.map((_, i) => (
          <span key={i} className={`slider-dot${i === 0 ? " active" : ""}`} />
        ))}
      </div>
    </section>
  );
}
