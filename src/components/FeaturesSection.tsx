import React from 'react';
import { FEATURES_DATA } from '../data/content';
import { FeatureCardData } from '../types';
import {
  CbtAnalyticsIcon,
  CheckIcon,
  CurriculumHotsIcon,
  SmallClassIcon,
  ZoomLiveIcon,
} from './Icons';

const renderFeatureIcon = (key: FeatureCardData['iconKey']) => {
  switch (key) {
    case 'zoom':
      return <ZoomLiveIcon size={26} color="#10B981" />;
    case 'curriculum':
      return <CurriculumHotsIcon size={26} color="#F59E0B" />;
    case 'group':
      return <SmallClassIcon size={26} color="#10B981" />;
    case 'analytics':
      return <CbtAnalyticsIcon size={26} color="#F59E0B" />;
  }
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="section" id="fitur-program">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FITUR &amp; KEUNGGULAN</span>
          <h2 className="section-title">
            Dirancang Untuk Membangun Nalar Kritis, Bukan Sekadar Menghafal
          </h2>
          <p className="section-subtitle">
            Setiap komponen kelas kami disusun agar siswa mampu menguasai konsep secara mendalam
            dan orang tua menerima laporan perkembangan yang transparan.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES_DATA.map((feature) => (
            <article key={feature.id} className="feature-card">
              <div>
                <div className="feature-header">
                  <div className="feature-icon-box" aria-hidden="true">
                    {renderFeatureIcon(feature.iconKey)}
                  </div>
                  <div>
                    <div className="feature-number">{feature.number}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                </div>
                <p className="feature-desc">{feature.description}</p>
              </div>
              <div className="benefit-badge">
                <span className="benefit-icon-check" aria-hidden="true">
                  <CheckIcon size={14} color="#047857" />
                </span>
                <span>{feature.benefitText}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
