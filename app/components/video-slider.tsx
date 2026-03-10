"use client";

import { useState } from "react";

interface VideoItem {
    id: string;
    title: string;
}

const defaultVideos: VideoItem[] = [
    { id: "ZbujxQ8iIWs", title: "ProCaffe - Giới thiệu" },
    { id: "VxwgSHOM0eo", title: "ProCaffe Showroom" },
    { id: "vT0hqWShXKo", title: "Máy pha cà phê tự động" },
    { id: "kF3VINbEI3E", title: "Hướng dẫn pha espresso" },
];

export default function VideoSlider({ videos = defaultVideos }: { videos?: VideoItem[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex((i) => (i === 0 ? videos.length - 1 : i - 1));
    const next = () => setCurrentIndex((i) => (i === videos.length - 1 ? 0 : i + 1));

    const current = videos[currentIndex];

    return (
        <div className="video-slider">
            <div className="video-embed">
                <iframe
                    key={current.id}
                    src={`https://www.youtube.com/embed/${current.id}`}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            {videos.length > 1 && (
                <div className="video-slider-controls">
                    <button className="video-slider-btn" onClick={prev} aria-label="Video trước">
                        ‹
                    </button>
                    <div className="video-slider-dots">
                        {videos.map((v, i) => (
                            <button
                                key={v.id}
                                className={`video-slider-dot ${i === currentIndex ? "active" : ""}`}
                                onClick={() => setCurrentIndex(i)}
                                aria-label={v.title}
                            />
                        ))}
                    </div>
                    <button className="video-slider-btn" onClick={next} aria-label="Video sau">
                        ›
                    </button>
                </div>
            )}
            <p className="video-slider-title">{current.title}</p>
        </div>
    );
}
