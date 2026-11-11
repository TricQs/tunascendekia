import React from 'react';
import { PRICING_DATA } from '../data/content';
import { CheckIcon } from './Icons';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section className="section section-slate" id="paket-belajar">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">INVESTASI PENDIDIKAN</span>
          <h2 className="section-title">
            Pilihan Paket Pembinaan Sesuai Target Prestasi Anak
          </h2>
          <p className="section-subtitle">
            Investasi transparan dengan fasilitas lengkap untuk mendukung perjalanan akademik siswa dari tingkat daerah hingga panggung nasional.
          </p>
        </div>

        <div className="pricing-grid">
          {PRICING_DATA.map((pkg) => (
            <article
              key={pkg.id}
              className={`pricing-card ${pkg.featured ? 'featured' : ''}`}
            >
              {pkg.popularRibbon && (
                <div className="popular-ribbon">{pkg.popularRibbon}</div>
              )}

              <div>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-target">{pkg.target}</p>

                <div className="price-box">
                  <div className="price-main">{pkg.priceMain}</div>
                  <div className="price-sub">{pkg.priceSub}</div>
                </div>

                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon" aria-hidden="true">
                        <CheckIcon size={12} color={pkg.featured ? '#10B981' : '#047857'} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className={`btn btn-${pkg.buttonVariant} btn-block`}
                onClick={() => onSelectPackage(pkg.name)}
              >
                {pkg.ctaText}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

