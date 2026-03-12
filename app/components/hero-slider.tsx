"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

interface SliderBanner {
    src: string;
    alt: string;
    href: string;
}

export default function HeroSlider({ banners }: { banners: SliderBanner[] }) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const isDragging = useRef(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % banners.length);
    }, [banners.length]);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    }, [banners.length]);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [paused, next]);

    const handleDragStart = (clientX: number) => {
        touchStartX.current = clientX;
        touchEndX.current = clientX;
        isDragging.current = true;
        setPaused(true);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging.current) return;
        touchEndX.current = clientX;
    };

    const handleDragEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        const diff = touchStartX.current - touchEndX.current;
        const threshold = 50;
        if (diff > threshold) {
            next();
        } else if (diff < -threshold) {
            prev();
        }
        setPaused(false);
    };

    return (
        <section
            className="hero-slider"
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => {
                if (isDragging.current) handleDragEnd();
            }}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
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
                        <Link href={b.href} draggable={false}>
                            <img src={b.src} alt={b.alt} draggable={false} />
                        </Link>
                    </div>
                ))}
            </div>
            {/* Left/Right arrows */}
            <button className="slider-arrow slider-arrow-left" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous slide">
                ‹
            </button>
            <button className="slider-arrow slider-arrow-right" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next slide">
                ›
            </button>
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
