import React from 'react';
import { LMS_FEATURES_DATA } from '../data/content';
import { LmsModuleFeature } from '../types';
import { DeckIllustration } from './DeckIllustrations';
import {
  AttendanceCheckIcon,
  CalendarSyncIcon,
  ChatBubbleIcon,
  CheckIcon,
  CloudUploadIcon,
  ShieldLockIcon,
  VideoArchiveIcon,
} from './Icons';

const renderModuleIcon = (key: LmsModuleFeature['iconKey']) => {
  switch (key) {
    case 'chat':
      return <ChatBubbleIcon size={24} color="#10B981" />;
    case 'cloud':
      return <CloudUploadIcon size={24} color="#F59E0B" />;
    case 'video':
      return <VideoArchiveIcon size={24} color="#10B981" />;
    case 'attendance':
      return <AttendanceCheckIcon size={24} color="#F59E0B" />;
    case 'calendar':
      return <CalendarSyncIcon size={24} color="#10B981" />;
    case 'shield':
      return <ShieldLockIcon size={24} color="#F59E0B" />;
  }
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="section" id="fitur-program">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ARSITEKTUR &amp; 6 MODUL UTAMA LMS</span>
          <h2 className="section-title">
            Ekosistem Kerja Digital yang Lengkap dalam Satu Platform
          </h2>
          <p className="section-subtitle">
            Setiap modul dirancang untuk menyelesaikan hambatan teknis sehari-hari yang dihadapi
            mahasiswa, dosen pembimbing, dan administrator akademik.
          </p>
        </div>

        {/* Visual Showcase Strip */}
        <div className="product-showcase-strip">
          <div className="product-showcase-item">
            <div className="showcase-art">
              <DeckIllustration variant="product-zoom" />
            </div>
            <div className="showcase-copy">
              <span className="showcase-pill">Workspace Terintegrasi</span>
              <h3>UI/UX Bersih &amp; Nyaman untuk Generasi Digital</h3>
              <p>
                Navigasi berbasis mata kuliah, tugas, chat bimbingan, dan arsip video ditempatkan
                dalam satu alur kerja intuitif yang ringan di desktop maupun ponsel.
              </p>
            </div>
          </div>

          <div className="product-showcase-item">
            <div className="showcase-art">
              <DeckIllustration variant="product-clinic" />
            </div>
            <div className="showcase-copy">
              <span className="showcase-pill pill-emerald">Arsitektur Terbuka</span>
              <h3>Siap Terhubung ke SIAKAD &amp; Kalender Akademik</h3>
              <p>
                Mendukung sinkronisasi data nilai, jadwal bimbingan skripsi, serta kontrol akses
                berjenjang mulai dari ribuan hingga ratusan ribu akun aktif.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core LMS Modules */}
        <div className="features-grid">
          {LMS_FEATURES_DATA.map((feature) => (
            <article key={feature.id} className="feature-card">
              <div>
                <div className="feature-header">
                  <div className="feature-icon-box" aria-hidden="true">
                    {renderModuleIcon(feature.iconKey)}
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
