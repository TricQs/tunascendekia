import React from 'react';
import {
  ArrowRightIcon,
  AttendanceCheckIcon,
  ChatBubbleIcon,
  CheckIcon,
  CloudUploadIcon,
  ServerScaleIcon,
} from './Icons';
import { LmsWorkspaceDemo } from './LmsWorkspaceDemo';

interface HeroSectionProps {
  onCtaClick: () => void;
  onSecondaryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCtaClick,
  onSecondaryClick,
}) => {
  return (
    <section className="hero-section" id="beranda">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Editorial B2B Pitch Copy */}
          <div className="hero-content">
            <div className="hero-badge">
              <ServerScaleIcon size={15} color="#B45309" />
              <span>B2B SaaS Learning Management System untuk Kampus &amp; Sekolah</span>
            </div>

            <h1 className="hero-title">
              Ekosistem <span className="highlight-emerald">LMS Terpadu</span> Pengganti{' '}
              <span className="highlight-gold">Portal Akademik Konvensional.</span>
            </h1>

            <p className="hero-subtitle">
              Tinggalkan portal kampus atau sekolah yang lambat dan kaku. TunasCendekia LMS
              menghadirkan UI/UX workspace modern dengan upload tugas hingga 2 GB, notifikasi chat
              persisten sebelum dibalas, auto-arsip rekaman kuliah, presensi Non-QR, serta jadwal
              bimbingan skripsi otomatis.
            </p>

            <div className="hero-cta-group">
              <button type="button" className="btn btn-primary btn-lg" onClick={onCtaClick}>
                <span>Ajukan Demo &amp; Pitching Kampus</span>
                <ArrowRightIcon size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={onSecondaryClick}
              >
                <span>Lihat Paket Institusi (B2B)</span>
              </button>
            </div>

            <div className="hero-mini-note">
              <span>
                <CheckIcon size={14} color="#047857" />
                Skala 1.000 hingga 100.000+ Pengguna
              </span>
              <span>
                <CheckIcon size={14} color="#047857" />
                Integrasi SIAKAD &amp; SSO
              </span>
              <span>
                <CheckIcon size={14} color="#047857" />
                Opsi Customize Kebutuhan Kampus
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Live LMS Sandbox */}
          <div className="hero-visual">
            <LmsWorkspaceDemo onRequestDemo={onCtaClick} />
          </div>
        </div>

        {/* 4 Core LMS Differentiators Bar */}
        <div className="stats-bar" aria-label="Keunggulan Arsitektur TunasCendekia LMS">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <CloudUploadIcon size={22} color="#10B981" />
              </div>
              <div>
                <div className="stat-value">Hingga 2 GB+</div>
                <div className="stat-label">Kapasitas upload per file &amp; cloud</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <ChatBubbleIcon size={22} color="#F59E0B" />
              </div>
              <div>
                <div className="stat-value">Notif Persisten</div>
                <div className="stat-label">Status pesan aktif hingga dibalas</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <AttendanceCheckIcon size={22} color="#10B981" />
              </div>
              <div>
                <div className="stat-value">Presensi Non-QR</div>
                <div className="stat-label">Tanpa antre scan QR di kelas</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <ServerScaleIcon size={22} color="#F59E0B" />
              </div>
              <div>
                <div className="stat-value">1K - 100K+ User</div>
                <div className="stat-label">Paket terukur &amp; opsi custom B2B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
