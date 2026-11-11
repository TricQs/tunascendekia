import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './Icons';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions" aria-label="Aksi Cepat">
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      <a
        href="https://wa.me/6281234567890?text=Halo%20TunasCendekia%2C%20saya%20ingin%20tanya%20jadwal%20dan%20informasi%20kelas%20persiapan%20TKA%2FOSN."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Konsultasi Cepat via WhatsApp"
      >
        <WhatsAppIcon size={20} color="#FFFFFF" />
        <span>Tanya via WhatsApp</span>
      </a>
    </div>
  );
};

