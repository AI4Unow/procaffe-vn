"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface BrandLogo {
    src: string;
    alt: string;
}

export default function BrandLogosCarousel({ logos }: { logos: BrandLogo[] }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const animRef = useRef<number>(0);
    const posRef = useRef(0);

    /* Tripled logos for seamless infinite scroll */
    const allLogos = [...logos, ...logos, ...logos];

    const animate = useCallback(() => {
        if (!isPaused && !isDragging && trackRef.current) {
            posRef.current -= 0.5;
            const totalWidth = trackRef.current.scrollWidth / 3;
            if (Math.abs(posRef.current) >= totalWidth) {
                posRef.current += totalWidth;
            }
            trackRef.current.style.transform = `translateX(${posRef.current}px)`;
        }
        animRef.current = requestAnimationFrame(animate);
    }, [isPaused, isDragging]);

    useEffect(() => {
        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, [animate]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(posRef.current);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const diff = e.pageX - startX;
        posRef.current = scrollLeft + diff;
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${posRef.current}px)`;
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
        setScrollLeft(posRef.current);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const diff = e.touches[0].pageX - startX;
        posRef.current = scrollLeft + diff;
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${posRef.current}px)`;
        }
    };

    const handleTouchEnd = () => setIsDragging(false);

    return (
        <section
            className="brand-partners"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
                setIsPaused(false);
                setIsDragging(false);
            }}
        >
            <div
                className="brand-logos-track-draggable"
                ref={trackRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
                {allLogos.map((brand, i) => (
                    <div key={i} className="brand-logo-item">
                        <img src={brand.src} alt={brand.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}
