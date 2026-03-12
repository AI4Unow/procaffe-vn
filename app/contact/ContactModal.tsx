"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Show modal after 1 second
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          message: fd.get("message"),
          source: "contact-modal",
        }),
      });
    } catch { /* best-effort */ }
    setSending(false);
    setIsOpen(false);
    alert("Đã gửi liên hệ!");
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
      backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999, 
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: '#fff', padding: '30px', borderRadius: '8px', 
        width: '100%', maxWidth: '500px', position: 'relative'
      }}>
        <button 
          onClick={() => setIsOpen(false)}
          style={{ position: 'absolute', top: '10px', right: '15px', border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' }}
        >
          &times;
        </button>
        <h3 style={{ marginBottom: '20px', color: 'var(--primary)', textAlign: 'center', fontSize: '24px' }}>Form liên hệ</h3>
        <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Họ và tên *" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input name="phone" type="tel" placeholder="Điện thoại *" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input name="email" type="email" placeholder="Email" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <select name="city" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', color: '#666' }} defaultValue="">
            <option value="" disabled>Tỉnh/thành phố</option>
            <option value="hcm">Hồ Chí Minh</option>
            <option value="hn">Hà Nội</option>
            <option value="dn">Đà Nẵng</option>
            <option value="hp">Hải Phòng</option>
            <option value="ct">Cần Thơ</option>
            <option value="other">Khác</option>
          </select>
          <textarea name="message" placeholder="Nội dung" rows={4} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
          <div>
            <label style={{ fontSize: '14px', color: '#666', marginBottom: '4px', display: 'block' }}>Tài liệu đính kèm</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                style={{ padding: '6px 14px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', whiteSpace: 'nowrap' }}
              >
                Chọn tệp
              </button>
              <span style={{ fontSize: '13px', color: '#888', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {fileName || "Chưa chọn tệp"}
              </span>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png"
                style={{ display: 'none' }}
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              />
            </div>
          </div>
          <button type="submit" disabled={sending} style={{ padding: '12px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            {sending ? "Đang gửi..." : "GỬI LIÊN HỆ"}
          </button>
        </form>
      </div>
    </div>
  );
}
