import React from 'react';
import { ArrowRightIcon, ZoomLiveIcon, MedalAwardIcon, CheckIcon } from './Icons';
import { ZoomAlgorithmVisualizer } from './ZoomAlgorithmVisualizer';

interface HeroSectionProps {
  onDaftarTestClick: () => void;
  onLihatPaketClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDaftarTestClick,
  onLihatPaketClick,
}) => {
  return (
    <section className="hero-section" id="beranda">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span>🏆 Platform Spesialis Persiapan TKA &amp; OSN #1 di Indonesia</span>
            </div>

            <h1 className="hero-title">
              Mengasah Nalar Juara, Mengantar Siswa ke{' '}
              <span className="highlight-emerald">Panggung Prestasi</span>{' '}
              <span className="highlight-gold">Nasional.</span>
            </h1>

            <p className="hero-subtitle">
              Bukan sekadar hafalan rumus cepat. TunasCendekia menghadirkan bimbingan belajar online interaktif dua arah via Zoom untuk siswa SD, SMP, dan SMA (dibimbing langsung oleh alumni peraih medali Olimpiade Sains Nasional).
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={onDaftarTestClick}
              >
                <span>Daftar Diagnostic Test Gratis</span>
                <ArrowRightIcon size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={onLihatPaketClick}
              >
                <span>Lihat Paket Program</span>
              </button>
            </div>

            <div className="hero-mini-note">
              <span>
                <CheckIcon size={16} color="#10B981" />
                Pemetaan Kemampuan Awal Gratis
              </span>
              <span>
                <CheckIcon size={16} color="#10B981" />
                Kurikulum Resmi Silabus OSN-K/P/N &amp; TKA
              </span>
            </div>
          </div>

          {/* Hero Right Visual: Interactive Live Zoom Class + Step-by-Step Algorithm Visualizer */}
          <div className="hero-visual">
            <ZoomAlgorithmVisualizer />
          </div>
        </div>

        {/* Trust Indicators / Stats Bar below Hero */}
        <div className="stats-bar" aria-label="Indikator Kepercayaan TunasCendekia">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="stat-value">10–15 Siswa</div>
                <div className="stat-label">Maksimal per Kelas Zoom</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <MedalAwardIcon size={22} color="#F59E0B" />
              </div>
              <div>
                <div className="stat-value">100% Medalis &amp; Pakar</div>
                <div className="stat-label">Mentor Olimpiade Berpengalaman</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div>
                <div className="stat-value">SD – SMP – SMA</div>
                <div className="stat-label">Kurikulum Berjenjang Terstruktur</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <ZoomLiveIcon size={22} color="#F59E0B" />
              </div>
              <div>
                <div className="stat-value">Live 2 Arah</div>
                <div className="stat-label">Interaktif &amp; Klinik Soal Mingguan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
