"use client";

import { useState } from "react";

interface ContactFormInlineProps {
    source: string;
    title?: string;
    description?: string;
}

export default function ContactFormInline({
    source,
    title = "Đăng ký tư vấn",
    description = "Điền thông tin để nhận tư vấn miễn phí từ ProCaffe",
}: ContactFormInlineProps) {
    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim()) {
            setError("Vui lòng điền họ tên và số điện thoại");
            return;
        }
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, source }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || "Gửi thất bại, vui lòng thử lại");
                return;
            }
            setSent(true);
        } catch {
            setError("Không thể kết nối. Vui lòng thử lại sau.");
        } finally {
            setLoading(false);
        }
    };

    if (sent) {
        return (
            <div className="inline-form-wrapper">
                <div className="inline-form-success">
                    <span className="success-icon">✅</span>
                    <h3>Đăng ký thành công!</h3>
                    <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="inline-form-wrapper">
            <h3 className="inline-form-title">{title}</h3>
            <p className="inline-form-desc">{description}</p>
            {error && <p className="inline-form-error">{error}</p>}
            <form onSubmit={handleSubmit} className="inline-form">
                <div className="inline-form-row">
                    <input
                        type="text"
                        placeholder="Họ và tên *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Số điện thoại *"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                    />
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <textarea
                    placeholder="Nội dung yêu cầu"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button type="submit" className="inline-form-submit" disabled={loading}>
                    {loading ? "Đang gửi..." : "GỬI YÊU CẦU"}
                </button>
            </form>
        </div>
    );
}
