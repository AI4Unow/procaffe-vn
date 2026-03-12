"use client";

import { useState, useEffect, useCallback } from "react";
import allReviewsData from "../../data/reviews.json";

interface Review {
    id: string;
    name: string;
    gender: "anh" | "chi";
    rating: number;
    text: string;
    date: string;
}

interface ReviewRecord {
    id: number;
    product_slug: string;
    author_name: string;
    rating: number;
    text: string;
    date: string;
    status?: string;
    is_reply?: boolean;
}

function getStorageKey(slug: string) {
    return `procaffe_reviews_${slug}`;
}

function loadReviews(slug: string): Review[] {
    // Load reviews from reviews.json (managed via admin panel)
    const dbReviews: Review[] = (allReviewsData as ReviewRecord[])
        .filter((r) => r.product_slug === slug && r.status !== "pending" && !r.is_reply)
        .map((r) => ({
            id: String(r.id),
            name: r.author_name,
            gender: "anh" as const,
            rating: r.rating,
            text: r.text,
            date: r.date,
        }));

    // Also load any user-submitted reviews from localStorage
    if (typeof window !== "undefined") {
        try {
            const raw = localStorage.getItem(getStorageKey(slug));
            if (raw) {
                const userReviews: Review[] = JSON.parse(raw);
                return [...dbReviews, ...userReviews];
            }
        } catch {
            /* ignore */
        }
    }
    return dbReviews;
}

function saveUserReview(slug: string, review: Review) {
    const key = getStorageKey(slug);
    let existing: Review[] = [];
    try {
        const raw = localStorage.getItem(key);
        if (raw) existing = JSON.parse(raw);
    } catch {
        /* ignore */
    }
    existing.push(review);
    localStorage.setItem(key, JSON.stringify(existing));
}

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
    return (
        <span className="star-rating-display" aria-label={`${rating} sao`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    style={{
                        color: star <= rating ? "#f5a623" : "#ddd",
                        fontSize: size,
                    }}
                >
                    ★
                </span>
            ))}
        </span>
    );
}

function StarInput({
    value,
    onChange,
}: {
    value: number;
    onChange: (v: number) => void;
}) {
    const [hover, setHover] = useState(0);
    return (
        <span className="star-rating-input">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star-input-item ${star <= (hover || value) ? "active" : ""}`}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => onChange(star)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${star} sao`}
                >
                    ★
                </span>
            ))}
        </span>
    );
}

export default function ProductReviewSection({
    slug,
    productTitle,
}: {
    slug: string;
    productTitle: string;
}) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formGender, setFormGender] = useState<"anh" | "chi">("anh");
    const [formRating, setFormRating] = useState(5);
    const [formText, setFormText] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setReviews(loadReviews(slug));
    }, [slug]);

    const avgRating =
        reviews.length > 0
            ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
            : 0;

    const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
        star,
        count: reviews.filter((r) => r.rating === star).length,
        pct:
            reviews.length > 0
                ? Math.round(
                    (reviews.filter((r) => r.rating === star).length /
                        reviews.length) *
                    100
                )
                : 0,
    }));

    const handleSubmit = useCallback(() => {
        if (!formName.trim() || !formText.trim()) return;
        const newReview: Review = {
            id: `user_${Date.now()}`,
            name: formName.trim(),
            gender: formGender,
            rating: formRating,
            text: formText.trim(),
            date: new Date().toISOString().slice(0, 10),
        };
        saveUserReview(slug, newReview);
        setReviews(loadReviews(slug));
        // Send to server (best-effort)
        try {
            fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formName.trim(),
                    message: formText.trim(),
                    rating: formRating,
                    product_slug: slug,
                    source: "review",
                }),
            });
        } catch { /* best-effort */ }
        setFormName("");
        setFormEmail("");
        setFormText("");
        setFormRating(5);
        setSubmitted(true);
        setShowForm(false);
        setTimeout(() => setSubmitted(false), 3000);
    }, [formName, formText, formGender, formRating, slug]);

    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString("vi-VN");
    };

    return (
        <div className="review-section">
            {/* Rating Summary */}
            <h3 className="review-section-title">Đánh giá</h3>

            {reviews.length > 0 ? (
                <div className="review-summary">
                    <div className="review-summary-score">
                        <span className="review-avg-number">
                            {avgRating.toFixed(2)}
                        </span>
                        <StarRating rating={Math.round(avgRating)} size={20} />
                        <span className="review-count-label">đánh giá</span>
                    </div>

                    <div className="review-bars">
                        {ratingCounts.map(({ star, count, pct }) => (
                            <div key={star} className="review-bar-row">
                                <span className="review-bar-star">
                                    {star} ★
                                </span>
                                <div className="review-bar-track">
                                    <div
                                        className="review-bar-fill"
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                                <span className="review-bar-info">
                                    {pct}% | {count} đánh giá
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="review-cta">
                        <button
                            className="review-cta-btn"
                            onClick={() => setShowForm(true)}
                        >
                            ĐÁNH GIÁ NGAY
                        </button>
                    </div>
                </div>
            ) : (
                <div className="review-empty">
                    <p>Chưa có đánh giá nào.</p>
                    <button
                        className="review-cta-btn"
                        onClick={() => setShowForm(true)}
                    >
                        ĐÁNH GIÁ NGAY
                    </button>
                </div>
            )}

            {submitted && (
                <div className="review-success-msg">
                    ✅ Đánh giá của bạn đã được gửi thành công!
                </div>
            )}

            {/* Individual Reviews */}
            {reviews.length > 0 && (
                <div className="review-list">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-item">
                            <div className="review-item-header">
                                <strong className="review-item-name">
                                    {review.name}
                                </strong>
                            </div>
                            <StarRating rating={review.rating} size={14} />
                            <span className="review-item-product">
                                {productTitle}
                            </span>
                            <p className="review-item-text">{review.text}</p>
                            <div className="review-item-meta">
                                <span className="review-item-reply">
                                    Trả lời
                                </span>
                                <span className="review-item-date">
                                    {formatDate(review.date)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Review Form */}
            {showForm && (
                <div className="review-form-wrapper">
                    <h4 className="review-form-title">Viết đánh giá</h4>
                    <div className="review-form-rating-row">
                        <span>Đánh giá của bạn:</span>
                        <StarInput
                            value={formRating}
                            onChange={setFormRating}
                        />
                    </div>
                    <textarea
                        className="review-form-textarea"
                        placeholder="Mời bạn tham gia thảo luận, vui lòng nhập tiếng Việt có dấu."
                        value={formText}
                        onChange={(e) => setFormText(e.target.value)}
                        rows={4}
                    />
                    <div className="review-form-fields">
                        <div className="review-form-gender">
                            <label>
                                <input
                                    type="radio"
                                    name="review-gender"
                                    value="anh"
                                    checked={formGender === "anh"}
                                    onChange={() => setFormGender("anh")}
                                />{" "}
                                Anh
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="review-gender"
                                    value="chi"
                                    checked={formGender === "chi"}
                                    onChange={() => setFormGender("chi")}
                                />{" "}
                                Chị
                            </label>
                        </div>
                        <input
                            type="text"
                            className="review-form-input"
                            placeholder="Họ tên (bắt buộc)"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            className="review-form-input"
                            placeholder="Email"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                        />
                        <button
                            className="review-submit-btn"
                            onClick={handleSubmit}
                            disabled={!formName.trim() || !formText.trim()}
                        >
                            Gửi
                        </button>
                    </div>
                </div>
            )}

            {/* Comment input always visible */}
            {!showForm && (
                <div className="review-comment-box">
                    <textarea
                        className="review-form-textarea"
                        placeholder="Mời bạn tham gia thảo luận, vui lòng nhập tiếng Việt có dấu."
                        onFocus={() => setShowForm(true)}
                        rows={3}
                        readOnly
                    />
                </div>
            )}
        </div>
    );
}
