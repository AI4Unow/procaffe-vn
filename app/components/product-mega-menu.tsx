"use client";

import Link from "next/link";
import { useState } from "react";

interface FeaturedProduct {
    title: string;
    slug: string;
    image: string;
}

interface MegaMenuCategory {
    label: string;
    href: string;
    featured?: FeaturedProduct[];
}

interface MegaMenuProps {
    categories: MegaMenuCategory[];
    defaultFeatured: FeaturedProduct[];
}

export default function ProductMegaMenu({ categories, defaultFeatured }: MegaMenuProps) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const featured = hoveredIdx !== null && categories[hoveredIdx]?.featured?.length
        ? categories[hoveredIdx].featured!
        : defaultFeatured;

    return (
        <div className="mega-menu">
            <div className="mega-menu-left">
                {categories.map((cat, i) => (
                    <Link
                        key={cat.label}
                        href={cat.href}
                        className={`mega-menu-cat-link${hoveredIdx === i ? " active" : ""}`}
                        onMouseEnter={() => setHoveredIdx(i)}
                    >
                        <span className="dropdown-bullet">✦</span>
                        {cat.label}
                        {cat.featured && cat.featured.length > 0 && (
                            <svg className="mega-chevron" width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                            </svg>
                        )}
                    </Link>
                ))}
            </div>
            <div className="mega-menu-right">
                {featured.map((p) => (
                    <Link key={p.slug} href={`/${p.slug}`} className="mega-menu-product">
                        <div className="mega-menu-product-img">
                            <img src={p.image} alt={p.title} loading="lazy" />
                        </div>
                        <p className="mega-menu-product-title">{p.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
