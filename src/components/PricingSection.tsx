import React, { useState } from 'react';
import {
  formatRupiah,
  PROGRAM_CATALOGUE,
  TRACK_OVERVIEWS,
  UNIVERSAL_GUARANTEES,
} from '../data/content';
import {
  BillingCycle,
  LevelFilter,
  ProgramTrack,
  SelectedConsultationProgram,
} from '../types';
import { CheckIcon } from './Icons';

interface PricingSectionProps {
  onSelectPlan: (selection: SelectedConsultationProgram) => void;
}

const LEVEL_FILTER_OPTIONS: Array<{ value: LevelFilter; label: string }> = [
  { value: 'ALL', label: 'Semua (9 Program)' },
  { value: 'SD', label: 'Jenjang SD' },
  { value: 'SMP', label: 'Jenjang SMP' },
  { value: 'SMA', label: 'Jenjang SMA' },
];

const TRACK_FILTER_OPTIONS: Array<{ value: 'ALL' | ProgramTrack; label: string }> = [
  { value: 'ALL', label: 'Semua Jalur' },
  { value: 'TKA', label: 'TKA' },
  { value: 'Olimpiade', label: 'Olimpiade' },
  { value: 'TKA + Olimpiade', label: 'TKA + Olimpiade' },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<LevelFilter>('ALL');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<'ALL' | ProgramTrack>('ALL');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('bulanan');

  const isSemester = billingCycle === 'semester';

  const visiblePrograms = PROGRAM_CATALOGUE.filter((item) => {
    const matchesLevel = selectedLevelFilter === 'ALL' || item.level === selectedLevelFilter;
    const matchesTrack = selectedTrackFilter === 'ALL' || item.track === selectedTrackFilter;
    return matchesLevel && matchesTrack;
  });

  return (
    <section className="section section-slate" id="paket-belajar">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ONLINE PRODUCT CATALOGUE • 3 JENJANG x 3 JALUR = 9 PROGRAM</span>
          <h2 className="section-title">
            Pilih Jalur &amp; Jenjang Program yang Tepat untuk Anak Anda
          </h2>
          <p className="section-subtitle">
            Tiga jalur persiapan utama yang dirancang khusus untuk setiap jenjang SD (Kelas 4-6),
            SMP (Kelas 7-9), dan SMA (Kelas 10-12).
          </p>
        </div>

        {/* Slide 15 Blueprint: 3 Jalur Persiapan Overview Cards */}
        <div className="track-overview-grid" aria-label="Tiga Jalur Persiapan">
          {TRACK_OVERVIEWS.map((path) => (
            <article key={path.track} className="track-overview-card">
              <div className="track-step-circle">{path.stepNumber}</div>
              <h3 className="track-overview-title">{path.title}</h3>
              <p className="track-overview-sub">{path.subtitle}</p>

              <div className="track-meta-block">
                <span className="track-meta-label">Cocok Untuk</span>
                <p>{path.suitableFor}</p>
              </div>

              <div className="track-meta-block">
                <span className="track-meta-label">Fokus Belajar</span>
                <ul className="track-focus-list">
                  {path.learningFocus.map((pt, idx) => (
                    <li key={idx}>
                      <span className="dot-bullet" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Catalogue Filter Bar (Jenjang + Jalur + Billing Switch with Explicit Dividers) */}
        <div className="pricing-controls-panel" aria-label="Filter Katalog Program">
          <div className="pricing-filter-row">
            <div className="filter-group">
              <div className="filter-group-header">
                <span className="filter-step-num" aria-hidden="true">1</span>
                <span className="filter-group-label" id="catalogue-level-label">
                  Jenjang Pendidikan
                </span>
              </div>
              <div
                className="segmented-control"
                role="radiogroup"
                aria-labelledby="catalogue-level-label"
              >
                {LEVEL_FILTER_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={selectedLevelFilter === opt.value}
                    className={`segment-btn ${selectedLevelFilter === opt.value ? 'active' : ''}`}
                    onClick={() => setSelectedLevelFilter(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-divider" aria-hidden="true" />

            <div className="filter-group">
              <div className="filter-group-header">
                <span className="filter-step-num" aria-hidden="true">2</span>
                <span className="filter-group-label" id="catalogue-track-label">
                  Jalur Program
                </span>
              </div>
              <div
                className="segmented-control"
                role="radiogroup"
                aria-labelledby="catalogue-track-label"
              >
                {TRACK_FILTER_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={selectedTrackFilter === opt.value}
                    className={`segment-btn ${selectedTrackFilter === opt.value ? 'active' : ''}`}
                    onClick={() => setSelectedTrackFilter(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-divider" aria-hidden="true" />

            <div className="filter-group billing-switch-group">
              <div className="filter-group-header">
                <span className="filter-step-num" aria-hidden="true">3</span>
                <span className="filter-group-label" id="billing-switch-label">
                  Siklus Pembayaran
                </span>
              </div>
              <div className="billing-switch-row">
                <span className={!isSemester ? 'billing-text-active' : 'billing-text-muted'}>
                  Bulanan
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isSemester}
                  aria-labelledby="billing-switch-label"
                  className={`billing-switch-btn ${isSemester ? 'checked' : ''}`}
                  onClick={() =>
                    setBillingCycle((prev) => (prev === 'bulanan' ? 'semester' : 'bulanan'))
                  }
                >
                  <span className="billing-switch-thumb" aria-hidden="true" />
                </button>
                <span className={isSemester ? 'billing-text-active' : 'billing-text-muted'}>
                  Paket Semester
                  <span className="discount-badge">Hemat 10%</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 16: All Available Programs Matrix (Up to 9 Programs) */}
        <div className="catalog-grid">
          {visiblePrograms.map((program) => {
            const activePrice = isSemester ? program.semesterPriceRp : program.monthlyPriceRp;
            const activeSessionQuota = isSemester
              ? program.sessionQuotaSemester
              : program.sessionQuotaMonthly;

            return (
              <article
                key={program.id}
                className={`catalog-card tone-${program.cardTone}`}
              >
                <div>
                  <div className="catalog-card-top">
                    <span className="catalog-level-tag">JENJANG {program.level}</span>
                    {program.badgeLabel && (
                      <span className="catalog-highlight-badge">{program.badgeLabel}</span>
                    )}
                  </div>

                  <h3 className="catalog-track-title">{program.trackLabel}</h3>
                  <p className="catalog-headline">{program.headline}</p>

                  <ul className="catalog-bullets">
                    {program.bullets.map((b, idx) => (
                      <li key={idx}>
                        <span className="check-icon-mini" aria-hidden="true">
                          <CheckIcon size={12} color="currentColor" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="catalog-footer">
                  <div className="catalog-price-row">
                    <div>
                      <span className="catalog-price-amount">{formatRupiah(activePrice)}</span>
                      <span className="catalog-price-unit">
                        {isSemester ? ' / 6 bulan' : ' / bulan'}
                      </span>
                    </div>
                    <span className="catalog-session-meta">{activeSessionQuota}</span>
                  </div>

                  <button
                    type="button"
                    className={`btn btn-block ${
                      program.cardTone === 'navy' ? 'btn-primary' : 'btn-navy'
                    }`}
                    onClick={() =>
                      onSelectPlan({
                        level: program.level,
                        track: program.track,
                        planName: `Program ${program.trackLabel} ${program.level}`,
                        billingCycle,
                      })
                    }
                  >
                    Pilih Program Ini
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Slide 15 Bottom Navy Strip: Di Semua Program */}
        <div className="universal-guarantee-bar">
          <div className="guarantee-title">Di semua program:</div>
          <div className="guarantee-items">
            {UNIVERSAL_GUARANTEES.map((item) => (
              <div key={item} className="guarantee-item">
                <CheckIcon size={15} color="#10B981" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
