import React from 'react';
import { FEATURES_DATA } from '../data/content';
import { FeatureCardData } from '../types';
import { DeckIllustration } from './DeckIllustrations';
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
      return <ZoomLiveIcon size={24} color="#10B981" />;
    case 'curriculum':
      return <CurriculumHotsIcon size={24} color="#F59E0B" />;
    case 'group':
      return <SmallClassIcon size={24} color="#10B981" />;
    case 'analytics':
      return <CbtAnalyticsIcon size={24} color="#F59E0B" />;
  }
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="section" id="fitur-program">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PRODUCT, SERVICE &amp; VISUAL APPROACH</span>
          <h2 className="section-title">
            Keunggulan Metode Pembinaan TunasCendekia
          </h2>
          <p className="section-subtitle">
            Menggabungkan kelas tatap muka Zoom, bank soal HOTS bertingkat, pembahasan visual
            interaktif, dan gaya mengajar yang suportif serta kredibel.
          </p>
        </div>

        {/* Visual Showcase Banner from Deck Page 9 */}
        <div className="product-showcase-strip">
          <div className="product-showcase-item">
            <div className="showcase-art">
              <DeckIllustration variant="product-zoom" />
            </div>
            <div className="showcase-copy">
              <span className="showcase-pill">Product &amp; Service</span>
              <h3>Bank Soal HOTS &amp; Pembahasan Visual</h3>
              <p>
                Materi dikelompokkan bertingkat (Basic to Advanced) dengan diagram interaktif agar
                siswa melihat alur pembuktian, bukan menghafal rumus.
              </p>
            </div>
          </div>

          <div className="product-showcase-item">
            <div className="showcase-art">
              <DeckIllustration variant="product-clinic" />
            </div>
            <div className="showcase-copy">
              <span className="showcase-pill pill-emerald">Brand Personality</span>
              <h3>Suportif, Terbuka, dan Kredibel</h3>
              <p>
                Mentor menggunakan bahasa yang mudah dipahami untuk membangun rasa ingin tahu serta
                kepercayaan diri siswa menghadapi tes bergengsi.
              </p>
            </div>
          </div>
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
