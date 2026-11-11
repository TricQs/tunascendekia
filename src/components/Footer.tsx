import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="#beranda"
              className="brand-logo"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('beranda');
              }}
            >
              <img
                src="/logo.webp"
                alt="Logo Resmi TunasCendekia"
                className="brand-logo-img"
                width={36}
                height={36}
              />
              <span className="brand-text">
                Tunas<span>Cendekia</span>
              </span>
            </a>
            <p className="footer-tagline">
              Mengasah Nalar Juara, Mengantar Siswa ke Panggung Prestasi Nasional.
            </p>
          </div>

          <ul className="footer-nav">
            <li>
              <a href="#beranda" onClick={(e) => { e.preventDefault(); scrollTo('beranda'); }}>
                Beranda
              </a>
            </li>
            <li>
              <a href="#tentang-kami" onClick={(e) => { e.preventDefault(); scrollTo('tentang-kami'); }}>
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#fitur-program" onClick={(e) => { e.preventDefault(); scrollTo('fitur-program'); }}>
                Fitur &amp; Program
              </a>
            </li>
            <li>
              <a href="#paket-belajar" onClick={(e) => { e.preventDefault(); scrollTo('paket-belajar'); }}>
                Paket Belajar
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#kontak" onClick={(e) => { e.preventDefault(); scrollTo('kontak'); }}>
                Kontak
              </a>
            </li>
          </ul>
        </div>

        <p className="footer-copyright">
          © 2026 TunasCendekia. Disusun oleh Kelompok 7: Julianto Vincent (32230051), Hendrawan Wijaya (32230055), Daniel Irfan Ngawing (32230058), Khetta Ajnatavindriya Likito (32230059), Ferdinand Arya Wijaya (32230071).
        </p>
      </div>
    </footer>
  );
};

