import React from 'react';
import { PILLARS_DATA } from '../data/content';
import { JenjangType } from '../types';
import { TrophyIcon, ArrowRightIcon } from './Icons';

interface AboutSectionProps {
  onSelectJenjang: (jenjang: JenjangType) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectJenjang }) => {
  return (
    <section className="section section-slate" id="tentang-kami">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TENTANG TUNASCENDEKIA</span>
          <h2 className="section-title">
            Menjembatani Potensi Anak Menuju Medali Olimpiade &amp; Sekolah Impian
          </h2>
        </div>

        {/* Narrative Grid: Problem vs Solution */}
        <div className="about-narrative-grid">
          <article className="narrative-card problem-card">
            <div className="narrative-label">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>Tantangan Pembinaan Saat Ini</span>
            </div>
            <p className="narrative-text">
              Banyak siswa berbakat memiliki minat tinggi pada sains dan matematika, namun terhambat oleh terbatasnya jam pembinaan olimpiade di sekolah. Di sisi lain, bimbingan belajar konvensional umumnya hanya berfokus pada materi ujian harian reguler.
            </p>
          </article>

          <article className="narrative-card solution-card">
            <div className="narrative-label">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Solusi Ekosistem TunasCendekia</span>
            </div>
            <p className="narrative-text">
              TunasCendekia hadir sebagai ekosistem edutech spesialis kompetisi akademik dan Tes Kemampuan Akademik (TKA). Melalui metode Live Interactive Virtual Classroom via Zoom, kami mempertemukan siswa dari seluruh penjuru Indonesia dengan para pelatih olimpiade dan peraih medali nasional tanpa batas geografis. Kami fokus membangun pemahaman konsep mendalam (deep concept understanding) dan penalaran logika tingkat tinggi (HOTS).
            </p>
          </article>
        </div>

        {/* USP Highlight Box */}
        <div className="usp-highlight-box">
          <div className="usp-icon-badge" aria-hidden="true">
            <TrophyIcon size={32} color="#F59E0B" />
          </div>
          <div>
            <div className="usp-content-tag">UNIQUE SELLING PROPOSITION (USP)</div>
            <p className="usp-quote">
              “Satu-satunya bimbingan persiapan OSN &amp; TKA berbasis kurikulum kompetisi nasional dengan pendampingan langsung dua arah dari alumni peraih medali dalam format kelas kecil yang terukur.”
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards (Jenjang Pendidikan) */}
        <div className="pillars-heading">
          <h3>3 Pilar Program Pembinaan Berjenjang</h3>
        </div>

        <div className="pillars-grid">
          {PILLARS_DATA.map((pillar) => (
            <article key={pillar.id} className="pillar-card">
              <div>
                <div className="pillar-top">
                  <div className="pillar-icon" aria-hidden="true">
                    {pillar.id === 'SD' && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v8" />
                        <path d="m4.93 10.93 1.41 1.41" />
                        <path d="M2 18h2" />
                        <path d="M20 18h2" />
                        <path d="m19.07 10.93-1.41 1.41" />
                        <path d="M22 22H2" />
                        <path d="m8 6 4-4 4 4" />
                        <path d="M16 18a4 4 0 0 0-8 0" />
                      </svg>
                    )}
                    {pillar.id === 'SMP' && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                    )}
                    {pillar.id === 'SMA' && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    )}
                  </div>
                  <span className="pillar-step-badge">{pillar.badge}</span>
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>

              <button
                type="button"
                className="pillar-action-link"
                onClick={() => onSelectJenjang(pillar.id)}
              >
                <span>Konsultasi Program {pillar.id}</span>
                <ArrowRightIcon size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

