"use client";

import { useState } from "react";

export default function InquiryForm() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, email, message, source: "rental-inquiry" }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || "Gửi thất bại. Vui lòng thử lại.");
                return;
            }
        } catch {
            setError("Không thể kết nối. Vui lòng thử lại.");
            return;
        }
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
        }, 5000);
    };

    if (submitted) {
        return (
            <div className="inquiry-form">
                <div className="inquiry-form-success">
                    ✅ Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                </div>
            </div>
        );
    }

    return (
        <form className="inquiry-form" onSubmit={handleSubmit}>
            <h3>📝 Đăng ký tư vấn thuê máy</h3>
            {error && <p style={{ color: "red", fontSize: "14px", marginBottom: "8px" }}>{error}</p>}
            <div className="inquiry-form-grid">
                <input
                    type="text"
                    placeholder="Họ và tên *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Số điện thoại *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="full-width"
                />
                <textarea
                    placeholder="Nội dung yêu cầu (loại máy, số lượng, thời gian thuê...)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="full-width"
                />
                <button type="submit" className="inquiry-form-submit">
                    Gửi yêu cầu tư vấn
                </button>
            </div>
        </form>
    );
}
