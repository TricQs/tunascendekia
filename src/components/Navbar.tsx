import React, { useEffect, useRef, useState } from 'react';

interface NavbarProps {
  onTryFreeClick: () => void;
}

const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang-kami', label: 'Tentang Kami' },
  { id: 'fitur-program', label: 'Fitur & Program' },
  { id: 'paket-belajar', label: 'Paket Belajar' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontak', label: 'Kontak' },
];

export const Navbar: React.FC<NavbarProps> = ({ onTryFreeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const scrollPos = window.scrollY + 130;
      for (const item of NAV_ITEMS) {
        const sectionEl = document.getElementById(item.id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock & Escape handler while mobile drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <a
            href="#beranda"
            className="brand-logo"
            aria-label="TunasCendekia Beranda"
            onClick={(e) => handleNavClick(e, 'beranda')}
          >
            <img
              src="/logo.png"
              alt="Logo Resmi TunasCendekia"
              className="brand-logo-img"
              width={40}
              height={40}
            />
            <span className="brand-text">
              Tunas<span>Cendekia</span>
            </span>
          </a>

          {/* Navigation Links (Desktop Inline + Mobile Drawer) */}
          <nav aria-label="Navigasi Utama">
            <ul id="primary-navigation" className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {mobileMenuOpen && (
                <li className="nav-mobile-cta">
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onTryFreeClick();
                    }}
                  >
                    Coba Kelas Gratis
                  </button>
                </li>
              )}
            </ul>
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="nav-actions">
            <button type="button" className="btn btn-primary" onClick={onTryFreeClick}>
              Coba Kelas Gratis
            </button>

            <button
              ref={toggleBtnRef}
              type="button"
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={mobileMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
