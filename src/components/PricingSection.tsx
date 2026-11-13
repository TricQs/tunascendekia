import React, { useState } from 'react';
import { formatRupiah, PRICING_TIERS } from '../data/content';
import {
  BillingCycle,
  EducationLevel,
  ProgramTrack,
  SelectedConsultationProgram,
} from '../types';
import { CheckIcon } from './Icons';

interface PricingSectionProps {
  onSelectPlan: (selection: SelectedConsultationProgram) => void;
}

const TRACK_OPTIONS: Array<{ value: ProgramTrack; label: string; subtitle: string }> = [
  {
    value: 'TKA',
    label: 'Persiapan TKA',
    subtitle: 'Tes Kemampuan Akademik & Seleksi Sekolah Unggulan',
  },
  {
    value: 'OSN',
    label: 'Pembinaan OSN',
    subtitle: 'Olimpiade Sains Nasional Tingkat Kabupaten hingga Nasional',
  },
];

const LEVEL_OPTIONS: Array<{ value: EducationLevel; label: string }> = [
  { value: 'SD', label: 'SD (Kelas 4-6)' },
  { value: 'SMP', label: 'SMP (Kelas 7-9)' },
  { value: 'SMA', label: 'SMA (Kelas 10-12)' },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [selectedTrack, setSelectedTrack] = useState<ProgramTrack>('OSN');
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>('SMP');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('bulanan');

  const visibleTiers = PRICING_TIERS.filter(
    (tier) => tier.track === selectedTrack && tier.level === selectedLevel
  );

  const isSemester = billingCycle === 'semester';

  return (
    <section className="section section-slate" id="paket-belajar">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">INVESTASI PENDIDIKAN</span>
          <h2 className="section-title">
            Pilihan Paket Pembinaan Sesuai Target Prestasi Anak
          </h2>
          <p className="section-subtitle">
            Pilih jalur program, jenjang pendidikan, dan siklus pembayaran untuk melihat rincian
            kuota kelas, jumlah sesi Zoom, serta biaya secara transparan.
          </p>
        </div>

        {/* Filter Controls: Track, Level & Accessible Billing Cycle Switch */}
        <div className="pricing-controls-panel" aria-label="Filter Program dan Siklus Pembayaran">
          <div className="pricing-filter-row">
            <div className="filter-group">
              <span className="filter-group-label" id="track-filter-label">
                1. Jalur Program
              </span>
              <div
                className="segmented-control"
                role="radiogroup"
                aria-labelledby="track-filter-label"
              >
                {TRACK_OPTIONS.map((track) => (
                  <button
                    key={track.value}
                    type="button"
                    role="radio"
                    aria-checked={selectedTrack === track.value}
                    className={`segment-btn ${selectedTrack === track.value ? 'active' : ''}`}
                    onClick={() => setSelectedTrack(track.value)}
                  >
                    {track.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-group-label" id="level-filter-label">
                2. Jenjang Pendidikan
              </span>
              <div
                className="segmented-control"
                role="radiogroup"
                aria-labelledby="level-filter-label"
              >
                {LEVEL_OPTIONS.map((lvl) => (
                  <button
                    key={lvl.value}
                    type="button"
                    role="radio"
                    aria-checked={selectedLevel === lvl.value}
                    className={`segment-btn ${selectedLevel === lvl.value ? 'active' : ''}`}
                    onClick={() => setSelectedLevel(lvl.value)}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group billing-switch-group">
              <span className="filter-group-label" id="billing-switch-label">
                3. Siklus Pembayaran
              </span>
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

          <p className="pricing-track-note">
            {TRACK_OPTIONS.find((t) => t.value === selectedTrack)?.subtitle}
          </p>
        </div>

        {/* Filtered Pricing Tiers */}
        <div className="pricing-grid">
          {visibleTiers.map((tier) => {
            const activePrice = isSemester ? tier.semesterPriceRp : tier.monthlyPriceRp;
            const activeSessionQuota = isSemester
              ? tier.sessionQuotaSemester
              : tier.sessionQuotaMonthly;

            return (
              <article
                key={tier.id}
                className={`pricing-card ${tier.featured ? 'featured' : ''}`}
              >
                {tier.ribbonLabel && (
                  <div className="popular-ribbon">{tier.ribbonLabel}</div>
                )}

                <div>
                  <div className="package-meta-row">
                    <span className="package-meta-badge">
                      {tier.track} | {tier.level}
                    </span>
                    <span className="package-meta-quota">{tier.classQuota}</span>
                  </div>

                  <h3 className="package-name">{tier.name}</h3>
                  <p className="package-target">{tier.target}</p>

                  <div className="price-box">
                    <div className="price-main-row">
                      <span className="price-main">{formatRupiah(activePrice)}</span>
                      <span className="price-unit">
                        {isSemester ? '/ 6 bulan' : '/ bulan'}
                      </span>
                    </div>
                    <div className="price-sub">{activeSessionQuota}</div>
                    {isSemester && (
                      <div className="price-savings-note">{tier.semesterSavingsLabel}</div>
                    )}
                  </div>

                  <div className="mentor-spec-line">
                    <strong>Pembimbing:</strong> {tier.mentorCredential}
                  </div>

                  <ul className="package-features">
                    {tier.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="check-icon" aria-hidden="true">
                          <CheckIcon
                            size={12}
                            color={tier.featured ? '#10B981' : '#047857'}
                          />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={`btn btn-${tier.buttonVariant} btn-block`}
                  onClick={() =>
                    onSelectPlan({
                      level: tier.level,
                      track: tier.track,
                      planName: tier.name,
                      billingCycle,
                    })
                  }
                >
                  Pilih Program Ini
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
