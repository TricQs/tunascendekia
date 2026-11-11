import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onCobaKelasClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCobaKelasClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['beranda', 'tentang-kami', 'fitur-program', 'paket-belajar', 'faq', 'kontak'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        {/* Brand Logo with User-Supplied Graduation Cap + Sprout Logo */}
        <a
          href="#beranda"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('beranda');
          }}
          aria-label="TunasCendekia Beranda"
        >
          <img
            src="/logo.webp"
            alt="Logo Resmi TunasCendekia"
            className="brand-logo-img"
            width={40}
            height={40}
          />
          <span className="brand-text">
            Tunas<span>Cendekia</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Navigasi Utama">
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="navLinks">
            <li>
              <a
                href="#beranda"
                className={`nav-link ${activeSection === 'beranda' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('beranda');
                }}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#tentang-kami"
                className={`nav-link ${activeSection === 'tentang-kami' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('tentang-kami');
                }}
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#fitur-program"
                className={`nav-link ${activeSection === 'fitur-program' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('fitur-program');
                }}
              >
                Fitur &amp; Program
              </a>
            </li>
            <li>
              <a
                href="#paket-belajar"
                className={`nav-link ${activeSection === 'paket-belajar' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('paket-belajar');
                }}
              >
                Paket Belajar
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('faq');
                }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className={`nav-link ${activeSection === 'kontak' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('kontak');
                }}
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onCobaKelasClick}
          >
            Coba Kelas Gratis
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

