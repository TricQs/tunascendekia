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
              <span>Bimbel Online Persiapan TKA &amp; OSN (SD, SMP, SMA)</span>
            </div>

            <h1 className="hero-title">
              Mengasah <span className="highlight-emerald">Nalar Juara</span>, Mengantar Siswa ke{' '}
              <span className="highlight-gold">Panggung Prestasi Nasional.</span>
            </h1>

            <p className="hero-subtitle">
              Ekosistem bimbel daring interaktif via Zoom dengan kurikulum khusus olimpiade &amp;
              TKA, dibimbing langsung oleh mentor peraih medali nasional dengan pembahasan visual
              interaktif.
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
                <span>Jelajahi 9 Program</span>
              </button>
            </div>

            <div className="hero-mini-note">
              <span>
                <CheckIcon size={14} color="#047857" />
                3 Jenjang (SD, SMP, SMA)
              </span>
              <span>
                <CheckIcon size={14} color="#047857" />
                3 Jalur: TKA, Olimpiade, TKA + Olimpiade
              </span>
              <span>
                <CheckIcon size={14} color="#047857" />
                Belajar Terstruktur dari Rumah
              </span>
            </div>
          </div>

          {/* Right Column: Visual Learning Sandbox */}
          <div className="hero-visual">
            <ZoomAlgorithmVisualizer
              onRequestDiagnosticForLevel={onRequestDiagnosticForLevel}
            />
          </div>
        </div>

        {/* Universal Value Guarantees Bar */}
        <div className="stats-bar" aria-label="Fasilitas di Semua Program">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <ZoomLiveIcon size={22} color="#10B981" />
              </div>
              <div>
                <div className="stat-value">Kelas Live Zoom</div>
                <div className="stat-label">Tatap muka interaktif 2 arah</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <MedalAwardIcon size={22} color="#F59E0B" />
              </div>
              <div>
                <div className="stat-value">Mentor Medalis</div>
                <div className="stat-label">Alumni peraih medali olimpiade</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <CurriculumHotsIcon size={22} color="#10B981" />
              </div>
              <div>
                <div className="stat-value">Visual Learning</div>
                <div className="stat-label">Pembahasan visual interaktif</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <SmallClassIcon size={22} color="#F59E0B" />
              </div>
              <div>
                <div className="stat-value">Klinik Mingguan</div>
                <div className="stat-label">Tanya-jawab soal sulit tiap minggu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
