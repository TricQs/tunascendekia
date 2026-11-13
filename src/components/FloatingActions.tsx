import React, { useEffect, useState } from 'react';
import { WhatsAppIcon } from './Icons';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [footerClearancePx, setFooterClearancePx] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updatePositions = () => {
      setShowBackToTop(window.scrollY > 400);

      const footer = document.querySelector('.site-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const viewportH = window.innerHeight;
        // Shift floating controls smoothly upward so they never obscure footer links or copyright
        const overlap = Math.max(0, viewportH - rect.top);
        setFooterClearancePx(overlap > 0 ? Math.ceil(overlap + 12) : 0);
      }
    };

    const handleScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updatePositions();
      });
    };

    updatePositions();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="floating-actions"
      aria-label="Aksi Cepat"
      style={{
        bottom: `calc(${20 + footerClearancePx}px + env(safe-area-inset-bottom, 0px))`,
      }}
    >
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Kembali ke atas halaman"
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
        <WhatsAppIcon size={18} color="#FFFFFF" />
        <span>Tanya via WhatsApp</span>
      </a>
    </div>
  );
};
