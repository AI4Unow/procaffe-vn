"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface SliderBanner {
    src: string;
    alt: string;
    href: string;
}

export default function HeroSlider({ banners }: { banners: SliderBanner[] }) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % banners.length);
    }, [banners.length]);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [paused, next]);

    return (
        <section
            className="hero-slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="slider-track"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                    transition: "transform 0.6s ease-in-out",
                    animation: "none",
                }}
            >
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
                    <span
                        key={i}
                        className={`slider-dot${i === current ? " active" : ""}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </section>
    );
}
