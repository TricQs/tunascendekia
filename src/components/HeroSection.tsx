import React, { useState } from 'react';
import { HOTS_TOPICS } from '../data/content';
import { HotsTopic } from '../types';
import { ArrowRightIcon, ZoomLiveIcon, MedalAwardIcon, CheckIcon } from './Icons';

interface HeroSectionProps {
  onDaftarTestClick: () => void;
  onLihatPaketClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDaftarTestClick,
  onLihatPaketClick,
}) => {
  const [activeTopicId, setActiveTopicId] = useState<'math' | 'science' | 'tka'>('math');
  const currentTopic: HotsTopic =
    HOTS_TOPICS.find((t) => t.id === activeTopicId) || HOTS_TOPICS[0];

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

          {/* Hero Right Visual: Flat UI Mockup of Live Interactive Zoom Class */}
          <div className="hero-visual">
            <div className="zoom-mockup-card" aria-label="Simulasi Kelas Interaktif Zoom TunasCendekia">
              {/* Zoom Topbar */}
              <div className="zoom-topbar">
                <div className="window-dots" aria-hidden="true">
                  <span className="window-dot dot-red" />
                  <span className="window-dot dot-amber" />
                  <span className="window-dot dot-green" />
                </div>
                <div className="zoom-session-badge">
                  <span className="live-pulse" />
                  <span>LIVE ZOOM INTERAKTIF • 2 ARAH</span>
                </div>
                <div className="zoom-Capacity-pill">12/15 Siswa Aktif</div>
              </div>

              {/* Zoom Body */}
              <div className="zoom-body">
                {/* Topic Switcher Tabs */}
                <div className="mockup-tabs" role="tablist" aria-label="Contoh Bedah Soal HOTS">
                  {HOTS_TOPICS.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      className={`mockup-tab ${activeTopicId === topic.id ? 'active' : ''}`}
                      onClick={() => setActiveTopicId(topic.id)}
                      role="tab"
                      aria-selected={activeTopicId === topic.id}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>

                {/* Whiteboard HOTS Problem Breakdown */}
                <div className="hots-whiteboard">
                  <div className="whiteboard-header">
                    <span className="hots-tag">{currentTopic.tag}</span>
                    <span className="hots-level">{currentTopic.level}</span>
                  </div>
                  <p className="hots-question">{currentTopic.question}</p>
                  <div
                    className="hots-step-box"
                    dangerouslySetInnerHTML={{ __html: currentTopic.stepHtml }}
                  />
                </div>

                {/* Mentor & Student Cluster Row */}
                <div className="zoom-participants">
                  <div className="mentor-tile">
                    <div className="mentor-avatar" aria-hidden="true">KA</div>
                    <div className="mentor-info">
                      <h4>Kak Kevin Ardiansyah, S.Si.</h4>
                      <p>🥇 Medalis Emas OSN Matematika</p>
                    </div>
                  </div>

                  <div className="student-cluster">
                    <div className="avatar-stack" aria-hidden="true">
                      <span className="student-dot" style={{ background: '#10B981', color: '#090D16' }}>RA</span>
                      <span className="student-dot" style={{ background: '#F59E0B', color: '#090D16' }}>DN</span>
                      <span className="student-dot" style={{ background: '#38BDF8', color: '#090D16' }}>SF</span>
                      <span className="student-dot" style={{ background: '#A78BFA', color: '#090D16' }}>MK</span>
                      <span className="student-dot" style={{ background: '#334155', color: '#FFFFFF' }}>+8</span>
                    </div>
                    <span className="student-cluster-label">✋ 3 Siswa sedang diskusi interaktif</span>
                  </div>
                </div>

                {/* Achievement Badges Strip */}
                <div className="achievement-float">
                  <div className="achievement-item">
                    <span className="achievement-badge-icon badge-gold">
                      <MedalAwardIcon size={16} color="#F59E0B" />
                    </span>
                    <span>Alumni Lolos OSN-K &amp; OSN-P</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-badge-icon badge-emerald">
                      <CheckIcon size={14} color="#10B981" />
                    </span>
                    <span>Skor Diagnostik TKA +38%</span>
                  </div>
                </div>
              </div>
            </div>
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

