import React from 'react';
import {
  PORTAL_COMPARISON_ROWS,
  STRATEGIC_STORY_CARDS,
} from '../data/content';
import { DeckIllustration } from './DeckIllustrations';
import { ArrowRightIcon, CheckIcon } from './Icons';

interface AboutSectionProps {
  onSelectScaleQuick: (estimate: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectScaleQuick }) => {
  return (
    <section className="section section-slate" id="tentang-kami">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ANALISIS PORTAL LAMA &amp; SOLUSI LMS</span>
          <h2 className="section-title">
            Mengapa Kampus &amp; Sekolah Beralih ke Ekosistem TunasCendekia LMS
          </h2>
          <p className="section-subtitle">
            Dirancang oleh tim pengembang IT untuk memecahkan keterbatasan portal akademik lama
            secara langsung dari sisi pengalaman pengguna (UI/UX), infrastruktur file, hingga
            alur bimbingan.
          </p>
        </div>

        {/* 4 Deck Story Cards: Problem, Vision, Opportunity, Solution */}
        <div className="deck-story-grid">
          {STRATEGIC_STORY_CARDS.map((card) => (
            <article key={card.id} className={`deck-story-card theme-${card.accentTheme}`}>
              <div className="deck-story-visual">
                <DeckIllustration variant={card.illustrationKey} />
              </div>
              <div className="deck-story-content">
                <span className="deck-story-tag">{card.tag}</span>
                <h3 className="deck-story-title">{card.title}</h3>
                <p className="deck-story-body">{card.body}</p>
                {card.highlightText && (
                  <p className="deck-story-highlight">{card.highlightText}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Head-to-Head Comparison Matrix: Portal Biasa vs TunasCendekia LMS */}
        <div className="comparison-panel">
          <div className="comparison-panel-header">
            <span className="section-tag">BENCHMARKING SISTEM</span>
            <h3>Perbandingan Portal Akademik Konvensional vs TunasCendekia LMS</h3>
            <p>
              Ringkasan perbaikan konkret yang ditawarkan saat tim kami melakukan presentasi solusi
              di hadapan rektorat, pimpinan akademik, dan tim IT institusi.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Aspek Sistem</th>
                  <th scope="col">Portal Akademik Lama</th>
                  <th scope="col" className="col-lms-highlight">
                    TunasCendekia LMS (Solusi Kami)
                  </th>
                </tr>
              </thead>
              <tbody>
                {PORTAL_COMPARISON_ROWS.map((row) => (
                  <tr key={row.aspect}>
                    <td data-label="Aspek Sistem" className="cell-aspect">
                      {row.aspect}
                    </td>
                    <td data-label="Portal Lama" className="cell-legacy">
                      {row.legacyPortal}
                    </td>
                    <td data-label="TunasCendekia LMS" className="cell-lms">
                      <span className="cell-check" aria-hidden="true">
                        <CheckIcon size={13} color="#047857" />
                      </span>
                      <span>{row.tunasCendekiaLms}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom B2B Quick Scale Strip */}
        <div className="business-model-strip">
          <div className="business-model-left">
            <span className="business-model-tag">Model Adopsi Institusi (B2B SaaS)</span>
            <h4>Tersedia untuk Berbagai Ukuran Kampus, Universitas &amp; Sekolah</h4>
          </div>

          <div className="business-model-actions" aria-label="Pilih Estimasi Skala Institusi">
            <span className="action-prompt-label">Pilih skala pengguna institusi Anda:</span>
            <div className="jenjang-quick-btns">
              {['< 1.000 User', '1.000 - 10.000 User', '100.000+ Custom'].map((scale) => (
                <button
                  key={scale}
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => onSelectScaleQuick(scale)}
                >
                  <span>{scale}</span>
                  <ArrowRightIcon size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
