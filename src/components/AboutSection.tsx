import React from 'react';
import { PILLARS_DATA } from '../data/content';
import { EducationLevel, PillarCardData } from '../types';
import {
  ArrowRightIcon,
  CompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
  TargetIcon,
  TrophyIcon,
  SeedlingIcon,
} from './Icons';

interface AboutSectionProps {
  onSelectJenjang: (jenjang: EducationLevel) => void;
}

const renderPillarIcon = (key: PillarCardData['iconKey']) => {
  switch (key) {
    case 'seedling':
      return <SeedlingIcon size={24} color="#047857" />;
    case 'compass':
      return <CompassIcon size={24} color="#B45309" />;
    case 'graduation':
      return <GraduationCapIcon size={24} color="#0F172A" />;
  }
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectJenjang }) => {
  return (
    <section className="section section-slate" id="tentang-kami">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TENTANG TUNASCENDEKIA</span>
          <h2 className="section-title">
            Menjembatani Potensi Anak Menuju Medali Olimpiade &amp; Sekolah Impian
          </h2>
          <p className="section-subtitle">
            Dirancang khusus untuk menumbuhkan daya pikir kritis dan kecintaan terhadap eksplorasi
            sains serta matematika berstandar kompetisi nasional.
          </p>
        </div>

        {/* Problem & Solution Narrative Grid */}
        <div className="about-narrative-grid">
          <article className="narrative-card problem-card">
            <div className="narrative-label">
              <TargetIcon size={16} color="#B45309" />
              <span>Tantangan Saat Ini</span>
            </div>
            <p className="narrative-text">
              Banyak siswa berbakat memiliki minat tinggi pada sains dan matematika, namun terhambat
              oleh terbatasnya jam pembinaan olimpiade di sekolah. Di sisi lain, bimbingan belajar
              konvensional umumnya hanya berfokus pada materi ujian harian reguler.
            </p>
          </article>

          <article className="narrative-card solution-card">
            <div className="narrative-label">
              <LightbulbIcon size={16} color="#047857" />
              <span>Pendekatan TunasCendekia</span>
            </div>
            <p className="narrative-text">
              TunasCendekia hadir sebagai ekosistem edutech spesialis kompetisi akademik dan Tes
              Kemampuan Akademik (TKA). Melalui metode Live Interactive Virtual Classroom via Zoom,
              kami mempertemukan siswa dari seluruh penjuru Indonesia dengan pelatih olimpiade dan
              alumni peraih medali nasional secara lintas daerah. Kami berfokus membangun pemahaman
              konsep mendalam dan penalaran logika tingkat tinggi (HOTS).
            </p>
          </article>
        </div>

        {/* Unique Selling Proposition (USP) Highlight Box */}
        <div className="usp-highlight-box">
          <div className="usp-icon-badge" aria-hidden="true">
            <TrophyIcon size={30} color="#F59E0B" />
          </div>
          <div>
            <div className="usp-content-tag">Proposisi Nilai Utama</div>
            <p className="usp-quote">
              &ldquo;Satu-satunya bimbingan persiapan OSN &amp; TKA berbasis kurikulum kompetisi
              nasional dengan pendampingan langsung dua arah dari alumni peraih medali dalam format
              kelas kecil yang terukur.&rdquo;
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards (Jenjang Pendidikan) */}
        <div className="pillars-heading">
          <h3>Pembinaan Berjenjang Sesuai Fase Akademik Siswa</h3>
        </div>

        <div className="pillars-grid">
          {PILLARS_DATA.map((pillar) => (
            <article key={pillar.id} className="pillar-card">
              <div>
                <div className="pillar-top">
                  <div className="pillar-icon" aria-hidden="true">
                    {renderPillarIcon(pillar.iconKey)}
                  </div>
                  <span className="pillar-step-badge">{pillar.stepLabel}</span>
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
              <button
                type="button"
                className="pillar-action-link"
                onClick={() => onSelectJenjang(pillar.jenjangValue)}
              >
                <span>Pilih &amp; Konsultasi {pillar.jenjangValue}</span>
                <ArrowRightIcon size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
