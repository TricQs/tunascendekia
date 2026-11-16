import React from 'react';
import {
  BUSINESS_FORMATS,
  PAIN_POINTS_DATA,
  STRATEGIC_STORY_CARDS,
} from '../data/content';
import { EducationLevel } from '../types';
import { DeckIllustration } from './DeckIllustrations';
import { ArrowRightIcon, CheckIcon } from './Icons';

interface AboutSectionProps {
  onSelectJenjang: (jenjang: EducationLevel) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectJenjang }) => {
  return (
    <section className="section section-slate" id="tentang-kami">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">VISI, PELUANG &amp; SOLUSI</span>
          <h2 className="section-title">
            Merancang Ekosistem Pembinaan Prestasi yang Terarah di Seluruh Indonesia
          </h2>
          <p className="section-subtitle">
            Mengatasi kesenjangan pembinaan TKA dan Olimpiade melalui pembelajaran daring
            interaktif yang mengutamakan kedalaman konsep.
          </p>
        </div>

        {/* 4 Deck Story Cards: Problem Statement, Our Vision, The Opportunity, Our Solution */}
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

        {/* Pain Point & Solusi Orang Tua (Slide 8 Persona Blueprint) */}
        <div className="pain-point-section">
          <div className="pain-point-header">
            <span className="section-tag">UNTUK ORANG TUA &amp; WALI SISWA</span>
            <h3>Mengapa Orang Tua Mempercayakan Pendampingan Anak ke TunasCendekia</h3>
            <p>
              Dirancang untuk orang tua yang peduli mutu pendidikan anak namun memiliki kesibukan
              kerja dan keterbatasan waktu mengantar ke bimbel luring.
            </p>
          </div>

          <div className="pain-point-grid">
            {PAIN_POINTS_DATA.map((item) => (
              <article key={item.id} className="pain-point-card">
                <div className="pain-question">{item.painQuestion}</div>
                <div className="pain-arrow-row" aria-hidden="true">
                  <span className="pain-arrow-circle">
                    <ArrowRightIcon size={15} color="#FFFFFF" />
                  </span>
                  <span className="pain-solution-pill">{item.solutionLabel}</span>
                </div>
                <p className="pain-detail">{item.detailText}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Ekosistem & Format Pembinaan + Akses Cepat Jenjang */}
        <div className="business-model-strip">
          <div className="business-model-left">
            <span className="business-model-tag">Format Pembelajaran Lengkap</span>
            <h4>Tersedia untuk Jenjang SD, SMP, dan SMA</h4>
            <div className="business-formats-list">
              {BUSINESS_FORMATS.map((fmt) => (
                <span key={fmt} className="business-format-pill">
                  <CheckIcon size={13} color="#10B981" />
                  <span>{fmt}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="business-model-actions" aria-label="Pilih Jenjang Konsultasi">
            <span className="action-prompt-label">Mulai dari jenjang anak Anda:</span>
            <div className="jenjang-quick-btns">
              {(['SD', 'SMP', 'SMA'] as EducationLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => onSelectJenjang(lvl)}
                >
                  <span>Jenjang {lvl}</span>
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
