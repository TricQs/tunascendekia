import React from 'react';
import { EducationLevel } from '../types';
import {
  ArrowRightIcon,
  CheckIcon,
  CurriculumHotsIcon,
  MedalAwardIcon,
  SmallClassIcon,
  ZoomLiveIcon,
} from './Icons';
import { ZoomAlgorithmVisualizer } from './ZoomAlgorithmVisualizer';

interface HeroSectionProps {
  onCtaClick: () => void;
  onSecondaryClick: () => void;
  onRequestDiagnosticForLevel: (level: EducationLevel) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCtaClick,
  onSecondaryClick,
  onRequestDiagnosticForLevel,
}) => {
  return (
    <section className="hero-section" id="beranda">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Editorial Copy Column */}
          <div className="hero-content">
            <div className="hero-badge">
              <MedalAwardIcon size={16} color="#B45309" />
              <span>Program Spesialis Persiapan TKA &amp; OSN SD, SMP, SMA</span>
            </div>

            <h1 className="hero-title">
              Mengasah <span className="highlight-emerald">Nalar Juara</span>, Mengantar Siswa ke{' '}
              <span className="highlight-gold">Panggung Prestasi Nasional.</span>
            </h1>

            <p className="hero-subtitle">
              Bukan sekadar hafalan rumus cepat. TunasCendekia menghadirkan bimbingan belajar daring
              interaktif dua arah via Zoom untuk siswa SD, SMP, dan SMA, dibimbing langsung oleh
              alumni peraih medali Olimpiade Sains Nasional.
            </p>

            <div className="hero-cta-group">
              <button type="button" className="btn btn-primary btn-lg" onClick={onCtaClick}>
                <span>Daftar Diagnostic Test Gratis</span>
                <ArrowRightIcon size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={onSecondaryClick}
              >
                <span>Lihat Paket Program</span>
              </button>
            </div>

            <div className="hero-mini-note">
              <span>
                <CheckIcon size={14} color="#047857" />
                Diagnostic Test Awal Gratis
              </span>
              <span>
                <CheckIcon size={14} color="#047857" />
                Kuota Kelas Kecil Zoom
              </span>
              <span>
                <CheckIcon size={14} color="#047857" />
                Evaluasi Berkala Orang Tua
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Pedagogical Sandbox */}
          <div className="hero-visual">
            <ZoomAlgorithmVisualizer
              onRequestDiagnosticForLevel={onRequestDiagnosticForLevel}
            />
          </div>
        </div>

        {/* Trust Indicators / Stats Bar below Hero */}
        <div className="stats-bar" aria-label="Keunggulan Utama Program">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <SmallClassIcon size={22} color="#10B981" />
              </div>
              <div>
                <div className="stat-value">10-15 Siswa</div>
                <div className="stat-label">Maksimal per Kelas Zoom</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <MedalAwardIcon size={22} color="#F59E0B" />
              </div>
              <div>
                <div className="stat-value">Alumni Medalis</div>
                <div className="stat-label">Mentor OSN Berpengalaman</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <CurriculumHotsIcon size={22} color="#10B981" />
              </div>
              <div>
                <div className="stat-value">SD, SMP, SMA</div>
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
