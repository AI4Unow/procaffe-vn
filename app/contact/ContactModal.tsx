"use client";
import { useState, useEffect } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 1 second
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

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
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={(e) => { e.preventDefault(); setIsOpen(false); alert('Đã gửi liên hệ!'); }}>
          <input type="text" placeholder="Họ và tên *" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="tel" placeholder="Điện thoại *" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="email" placeholder="Email" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <textarea placeholder="Nội dung" rows={4} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
          <button type="submit" style={{ padding: '12px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            GỬI LIÊN HỆ
          </button>
        </form>
      </div>
    </div>
  );
}
