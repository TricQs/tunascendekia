import React from 'react';
import { FEATURES_DATA } from '../data/content';
import { ZoomLiveIcon, CurriculumHotsIcon, SmallClassIcon, CbtAnalyticsIcon } from './Icons';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="section" id="fitur-program">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FITUR UNGGULAN &amp; MANFAAT</span>
          <h2 className="section-title">
            Dirancang Khusus untuk Mencetak Problem Solver Tangguh
          </h2>
          <p className="section-subtitle">
            Setiap fitur di TunasCendekia dirancang untuk memberikan pengalaman belajar kompetitif yang efektif, terarah, dan nyaman dari rumah.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES_DATA.map((feat) => (
            <article key={feat.number} className="feature-card">
              <div>
                <div className="feature-header">
                  <div className="feature-icon-box" aria-hidden="true">
                    {feat.iconType === 'zoom' && <ZoomLiveIcon size={26} color="#10B981" />}
                    {feat.iconType === 'curriculum' && <CurriculumHotsIcon size={26} color="#F59E0B" />}
                    {feat.iconType === 'class' && <SmallClassIcon size={26} color="#10B981" />}
                    {feat.iconType === 'cbt' && <CbtAnalyticsIcon size={26} color="#F59E0B" />}
                  </div>
                  <div>
                    <div className="feature-number">{feat.number}</div>
                    <h3 className="feature-title">{feat.title}</h3>
                  </div>
                </div>
                <p className="feature-desc">{feat.description}</p>
              </div>

              <div className="benefit-badge">
                <span>{feat.benefit}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

