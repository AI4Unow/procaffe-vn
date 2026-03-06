"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const phoneNumbers = [
    { label: "CSKH", number: "090.456.98.78" },
    { label: "Bán lẻ Nam Bộ", number: "0833.06.60.66" },
    { label: "Bán lẻ Bắc Trung Bộ", number: "0898.00.18.78" },
    { label: "Đại lý", number: "0904.86.08.78" },
    { label: "Khách sạn", number: "0936.10.28.78" },
];

const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Máy pha cà phê", href: "/products?cat=may-pha-ca-phe" },
    { label: "Máy xay cà phê", href: "/products?cat=may-xay-ca-phe" },
    { label: "Ấm Moka", href: "/products?cat=am-pha-ca-phe" },
    { label: "Phụ kiện", href: "/products?cat=dung-cu-pha-che-phu-kien" },
    { label: "Cà phê", href: "/products?cat=ca-phe-rang-xay" },
    { label: "Tin tức", href: "/blog" },
    { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container">
                    {phoneNumbers.map((p) => (
                        <a key={p.number} href={`tel:${p.number.replace(/\./g, "")}`}>
                            <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            {p.label}: {p.number}
                        </a>
                    ))}
                </div>
            </div>

            {/* Main Header */}
            <header className="header">
                <div className="container">
                    <Link href="/" className="header-logo">
                        <Image
                            src="/images/logo-procaffe.png"
                            alt="ProCaffe"
                            width={180}
                            height={48}
                            priority
                        />
                    </Link>

                    <div className="header-search">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="button" aria-label="Tìm kiếm">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </button>
                    </div>

                    <div className="header-actions">
                        <Link href="/products" className="header-cart">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="m1 1 4 2 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            <span className="cart-count">0</span>
                        </Link>

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Menu"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                {mobileMenuOpen ? (
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                ) : (
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Nav */}
            <nav className={`main-nav${mobileMenuOpen ? " open" : ""}`}>
                <div className="container">
                    <div className="nav-links">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                {mobileMenuOpen && (
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ position: "absolute", top: 16, right: 16, color: "white" }}
                        aria-label="Đóng menu"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                )}
            </nav>
        </>
    );
}
