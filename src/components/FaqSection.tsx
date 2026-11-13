import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { ChevronDownIcon } from './Icons';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TANYA JAWAB (FAQ)</span>
          <h2 className="section-title">
            Pertanyaan yang Sering Diajukan Orang Tua &amp; Siswa
          </h2>
          <p className="section-subtitle">
            Informasi lengkap mengenai alur sesi Zoom, batasan kuota kelas, seleksi pengajar, hingga
            kebijakan penjadwalan ulang.
          </p>
        </div>

        <div className="faq-container">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <ChevronDownIcon size={18} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className={`faq-panel-grid ${isOpen ? 'open' : ''}`}
                  hidden={!isOpen}
                >
                  <div className="faq-panel-inner">
                    <div className="faq-answer">{item.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
