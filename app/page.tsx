import Link from "next/link";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import products from "../data/products.json";
import categories from "../data/product-categories.json";
import posts from "../data/posts.json";

/* Featured product categories with curated images */
const featuredCategories = [
  {
    name: "Máy pha cà phê gia đình",
    slug: "may-pha-ca-phe",
    image: "https://procaffe.vn/wp-content/uploads/2024/01/gaggia-classic-2024-1.jpg",
    description: "Saeco, Gaggia, Lelit — espresso tại nhà",
    count: 173,
  },
  {
    name: "Máy pha cà phê chuyên nghiệp",
    slug: "may-pha-ca-phe",
    image: "https://procaffe.vn/wp-content/uploads/2023/08/wega-io-1-1.jpg",
    description: "Wega, Astoria — cho quán, nhà hàng, khách sạn",
    count: 50,
  },
  {
    name: "Máy xay cà phê",
    slug: "may-xay-ca-phe",
    image: "https://procaffe.vn/wp-content/uploads/2023/09/eureka-mignon-specialita-mau-den.jpg",
    description: "Eureka, Mahlkönig — xay chính xác",
    count: 69,
  },
  {
    name: "Ấm Moka Bialetti",
    slug: "am-pha-ca-phe",
    image: "https://procaffe.vn/wp-content/uploads/2023/08/bialetti-moka-express-3-cups-1.jpg",
    description: "Ấm pha cà phê Ý chính hãng",
    count: 69,
  },
];

const brandLogos = [
  { name: "Saeco", src: "https://procaffe.vn/wp-content/uploads/2023/08/brand-saeco@2x.jpg" },
  { name: "Lelit", src: "https://procaffe.vn/wp-content/uploads/2023/08/brand-lelit@2x.jpg" },
  { name: "Gaggia", src: "https://procaffe.vn/wp-content/uploads/2023/08/brand-gaggia@2x.jpg" },
  { name: "Eureka", src: "https://procaffe.vn/wp-content/uploads/2023/08/brand-eureka@2x.jpg" },
  { name: "Wega", src: "https://procaffe.vn/wp-content/uploads/2023/08/brand-wega@2x.jpg" },
  { name: "Bialetti", src: "https://procaffe.vn/wp-content/uploads/2023/08/brand-bialetti@2x.jpg" },
  { name: "Synesso", src: "https://procaffe.vn/wp-content/uploads/2023/08/brand-synesso@2x.jpg" },
];

function getProductImage(product: typeof products[0]): string {
  if (product.featured_image) return product.featured_image;
  return "https://procaffe.vn/wp-content/uploads/woocommerce-placeholder-600x400.png";
}

function getProductCategory(product: typeof products[0]): string {
  const cats = product.categories || [];
  const priorityNames = ["Máy pha cà phê", "Máy Xay Cà Phê", "Ấm pha cà phê", "Dụng cụ Barista"];
  for (const name of priorityNames) {
    if (cats.includes(name)) return name;
  }
  return cats[0] || "";
}

export default function HomePage() {
  const featuredProducts = products.slice(0, 8);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slide">
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">🏆 Đại lý chính hãng</span>
              <h1 className="hero-title">
                Giải pháp cà phê toàn diện cho doanh nghiệp & gia đình
              </h1>
              <p className="hero-subtitle">
                ProCaffe — nhà phân phối chính thức máy pha cà phê Saeco, Wega,
                Lelit, Gaggia, Eureka tại Việt Nam. Tư vấn miễn phí, bảo hành
                chính hãng, giao hàng toàn quốc.
              </p>
              <Link href="/products" className="hero-cta">
                Khám phá sản phẩm
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="brand-partners">
        <div className="container">
          <h2>Đối tác thương hiệu</h2>
          <div className="brand-logos">
            {brandLogos.map((brand) => (
              <img
                key={brand.name}
                src={brand.src}
                alt={brand.name}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Danh mục sản phẩm</h2>
            <div className="accent-line" />
            <p>Chọn giải pháp phù hợp cho không gian cà phê của bạn</p>
          </div>
          <div className="category-grid">
            {featuredCategories.map((cat) => (
              <Link key={cat.slug + cat.name} href={`/products?cat=${cat.slug}`} className="category-card">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <div className="category-card-content">
                  <h3 className="category-card-title">{cat.name}</h3>
                  <p className="category-card-count">
                    {cat.description} • {cat.count} sản phẩm
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / About */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>ProCaffe — The leading Total Coffee Solutions Provider</h2>
              <p>
                Với hơn 15 năm kinh nghiệm, ProCaffe tự hào là đơn vị tiên
                phong trong lĩnh vực cung cấp giải pháp cà phê toàn diện tại
                Việt Nam. Chúng tôi đồng hành cùng các quán cà phê, nhà hàng,
                khách sạn và hộ gia đình trên hành trình nâng tầm chất lượng cà
                phê.
              </p>
              <div className="intro-features">
                <div className="intro-feature">
                  <span className="intro-feature-icon">✓</span>
                  <div>
                    <h4>Đại lý chính hãng</h4>
                    <p>Đại lý ủy quyền chính thức tại Việt Nam</p>
                  </div>
                </div>
                <div className="intro-feature">
                  <span className="intro-feature-icon">🔧</span>
                  <div>
                    <h4>Bảo hành chuyên nghiệp</h4>
                    <p>Đội ngũ kỹ thuật viên được đào tạo trực tiếp từ nhà sản xuất</p>
                  </div>
                </div>
                <div className="intro-feature">
                  <span className="intro-feature-icon">🚚</span>
                  <div>
                    <h4>Giao hàng toàn quốc</h4>
                    <p>Free ship nội thành HCM & Hà Nội</p>
                  </div>
                </div>
                <div className="intro-feature">
                  <span className="intro-feature-icon">☕</span>
                  <div>
                    <h4>Tư vấn miễn phí</h4>
                    <p>Tư vấn giải pháp phù hợp cho mọi nhu cầu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img
                src="https://procaffe.vn/wp-content/uploads/2023/08/home-office-coffee.jpg"
                alt="Cà phê chuyên nghiệp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Sản phẩm nổi bật</h2>
            <div className="accent-line" />
            <p>Những sản phẩm được yêu thích nhất tại ProCaffe</p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="product-card"
              >
                <div className="product-card-image">
                  <img
                    src={getProductImage(product)}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
                <div className="product-card-info">
                  <span className="product-card-category">
                    {getProductCategory(product)}
                  </span>
                  <h3 className="product-card-title">{product.title}</h3>
                  <div className="product-card-price">Liên hệ</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/products" className="view-all-btn">
              Xem tất cả sản phẩm
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultancy CTA */}
      <section className="consultancy-cta">
        <div className="container">
          <h2>Bạn cần tư vấn giải pháp cà phê?</h2>
          <p>
            Đội ngũ chuyên gia ProCaffe sẵn sàng hỗ trợ bạn chọn thiết bị phù
            hợp nhất với nhu cầu và ngân sách
          </p>
          <a href="tel:09045698782" className="cta-button-white">
            📞 Gọi ngay: 090.456.98.78
          </a>
        </div>
      </section>

      {/* Blog / Tin tức */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Tin tức & Kiến thức</h2>
            <div className="accent-line" />
            <p>Cập nhật xu hướng cà phê và chia sẻ kiến thức barista</p>
          </div>
          <div className="blog-grid">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="blog-card"
              >
                {post.featured_image && (
                  <div className="blog-card-image">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="blog-card-content">
                  <span className="blog-card-date">
                    {new Date(post.date).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  {post.excerpt && (
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/blog" className="view-all-btn">
              Xem tất cả bài viết
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
