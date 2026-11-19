import React, { useState } from 'react';
import {
  B2B_PRICING_TIERS,
  formatRupiah,
  SYSTEM_GUARANTEES,
} from '../data/content';
import { B2BPlanId, BillingCycle, SelectedB2BInquiry } from '../types';
import { CheckIcon } from './Icons';

interface PricingSectionProps {
  onSelectPlan: (selection: SelectedB2BInquiry) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('bulanan');
  const [estimatedUsers, setEstimatedUsers] = useState<number>(5000);

  const isAnnual = billingCycle === 'tahunan';

  const recommendedPlanId: B2BPlanId =
    estimatedUsers <= 1000
      ? 'paket-a'
      : estimatedUsers <= 10000
      ? 'paket-b'
      : 'paket-custom';

  const getScaleLabel = (users: number): string => {
    if (users >= 100000) return '100.000+ Pengguna (Multi-Kampus)';
    return `${users.toLocaleString('id-ID')} Pengguna Aktif`;
  };

  return (
    <section className="section section-slate" id="paket-belajar">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PAKET LANGGANAN B2B INSTITUSI</span>
          <h2 className="section-title">
            Skema Lisensi Terukur &amp; Dapat Disesuaikan dengan Kapasitas Kampus
          </h2>
          <p className="section-subtitle">
            Pilih paket standar berdasarkan jumlah mahasiswa/siswa aktif dan kebutuhan penyimpanan,
            atau sesuaikan arsitektur penuh melalui Paket Custom untuk skala hingga 100.000+
            pengguna.
          </p>
        </div>

        {/* Interactive Scale Estimator + Separated Billing Switch */}
        <div className="pricing-controls-panel" aria-label="Kalkulator Skala dan Siklus Lisensi">
          <div className="b2b-controls-split">
            <div className="filter-group">
              <div className="filter-group-header">
                <span className="filter-step-num" aria-hidden="true">1</span>
                <label htmlFor="campus-scale-slider" className="filter-group-label">
                  Simulasi Kapasitas Kampus / Sekolah
                </label>
              </div>
              <div className="scale-slider-box">
                <div className="scale-readout-row">
                  <strong className="scale-readout-num">{getScaleLabel(estimatedUsers)}</strong>
                  <span className="scale-recommend-pill">
                    Rekomendasi:{' '}
                    {recommendedPlanId === 'paket-a'
                      ? 'Paket A'
                      : recommendedPlanId === 'paket-b'
                      ? 'Paket B'
                      : 'Paket Custom'}
                  </span>
                </div>
                <input
                  id="campus-scale-slider"
                  type="range"
                  className="sandbox-range-slider"
                  min={500}
                  max={100000}
                  step={500}
                  value={estimatedUsers}
                  onChange={(e) => setEstimatedUsers(Number(e.target.value))}
                />
                <div className="scale-ticks-row">
                  <button type="button" onClick={() => setEstimatedUsers(1000)}>
                    1.000 (Sekolah/Prodi)
                  </button>
                  <button type="button" onClick={() => setEstimatedUsers(10000)}>
                    10.000 (Kampus)
                  </button>
                  <button type="button" onClick={() => setEstimatedUsers(100000)}>
                    100.000+ (Skala Besar)
                  </button>
                </div>
              </div>
            </div>

            <div className="filter-divider" aria-hidden="true" />

            <div className="filter-group billing-switch-group">
              <div className="filter-group-header">
                <span className="filter-step-num" aria-hidden="true">2</span>
                <span className="filter-group-label" id="billing-switch-label">
                  Siklus Tagihan Institusi
                </span>
              </div>
              <div className="billing-switch-row">
                <span className={!isAnnual ? 'billing-text-active' : 'billing-text-muted'}>
                  Bulanan
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isAnnual}
                  aria-labelledby="billing-switch-label"
                  className={`billing-switch-btn ${isAnnual ? 'checked' : ''}`}
                  onClick={() =>
                    setBillingCycle((prev) => (prev === 'bulanan' ? 'tahunan' : 'bulanan'))
                  }
                >
                  <span className="billing-switch-thumb" aria-hidden="true" />
                </button>
                <span className={isAnnual ? 'billing-text-active' : 'billing-text-muted'}>
                  Tahunan
                  <span className="discount-badge">Gratis 2 Bulan</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 B2B Tiers Grid (Paket A, Paket B, Paket Custom) */}
        <div className="catalog-grid b2b-pricing-grid">
          {B2B_PRICING_TIERS.map((tier) => {
            const isHighlightedBySlider = recommendedPlanId === tier.id;
            const activePrice = isAnnual ? tier.annualPriceRp : tier.monthlyPriceRp;

            return (
              <article
                key={tier.id}
                className={`catalog-card b2b-card tone-${tier.tone} ${
                  tier.featured ? 'b2b-featured' : ''
                } ${isHighlightedBySlider ? 'slider-matched' : ''}`}
              >
                <div>
                  <div className="catalog-card-top">
                    <span className="catalog-level-tag">{tier.codeLabel}</span>
                    {isHighlightedBySlider ? (
                      <span className="catalog-highlight-badge">Cocok untuk {getScaleLabel(estimatedUsers)}</span>
                    ) : (
                      tier.badgeLabel && (
                        <span className="catalog-highlight-badge">{tier.badgeLabel}</span>
                      )
                    )}
                  </div>

                  <h3 className="catalog-track-title">{tier.name}</h3>
                  <p className="catalog-headline">{tier.targetInstitution}</p>

                  {/* Spec Capacity Chips */}
                  <div className="b2b-spec-box">
                    <div>
                      <strong>Kapasitas:</strong> {tier.userLimitLabel}
                    </div>
                    <div>
                      <strong>Batas Upload:</strong> {tier.uploadLimitLabel}
                    </div>
                    <div>
                      <strong>Cloud Pool:</strong> {tier.storagePoolLabel}
                    </div>
                  </div>

                  <ul className="catalog-bullets">
                    {tier.highlights.map((item, idx) => (
                      <li key={idx}>
                        <span className="check-icon-mini" aria-hidden="true">
                          <CheckIcon size={12} color="currentColor" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="catalog-footer">
                  <div className="catalog-price-row">
                    {activePrice !== null ? (
                      <div>
                        <span className="catalog-price-amount">{formatRupiah(activePrice)}</span>
                        <span className="catalog-price-unit">
                          {isAnnual ? ' / tahun' : ' / bulan'}
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="catalog-price-amount">Penawaran Kustom</span>
                        <p className="custom-price-sub">{tier.customPriceNote}</p>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    className={`btn btn-block ${
                      tier.featured ? 'btn-primary' : 'btn-navy'
                    }`}
                    onClick={() =>
                      onSelectPlan({
                        planId: tier.id,
                        planName: tier.name,
                        billingCycle,
                        userCapacityLabel:
                          tier.id === 'paket-custom'
                            ? getScaleLabel(Math.max(estimatedUsers, 15000))
                            : tier.userLimitLabel,
                      })
                    }
                  >
                    {tier.ctaLabel}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Guarantee Bar */}
        <div className="universal-guarantee-bar">
          <div className="guarantee-title">Standar Layanan TunasCendekia LMS:</div>
          <div className="guarantee-items">
            {SYSTEM_GUARANTEES.map((item) => (
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
