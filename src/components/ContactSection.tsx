import React from 'react';
import { FormDataType, JenjangType, BidangMinatType } from '../types';
import { WhatsAppIcon, InstagramIcon, EmailIcon, GlobeIcon, ArrowRightIcon } from './Icons';

interface ContactSectionProps {
  formData: FormDataType;
  onInputChange: (field: keyof FormDataType, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClearPackage: () => void;
  selectedPackage: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  onInputChange,
  onSubmit,
  onClearPackage,
  selectedPackage,
}) => {
  const isCustomPackage = selectedPackage !== 'Kelas Percobaan & Diagnostic Test Gratis';

  return (
    <section className="section section-slate" id="kontak">
      <div className="container">
        {/* High-Converting CTA Banner Card */}
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">
              Siap Mengukir Prestasi Bersama TunasCendekia?
            </h2>
            <p className="cta-banner-text">
              Jangan biarkan potensi akademik anak Anda berhenti di rata-rata. Konsultasikan kebutuhan belajar dan ikuti Diagnostic Test Gratis bersama tim akademik kami hari ini!
            </p>
          </div>
        </div>

        {/* Contact Grid: Registration Form + Direct Contact Information */}
        <div className="contact-grid">
          {/* Registration Form Card */}
          <div className="form-card">
            <div className="form-card-header">
              <h3>Formulir Konsultasi &amp; Pendaftaran Diagnostic Test</h3>
              <p>
                Isi data singkat di bawah ini untuk menjadwalkan sesi Kelas Percobaan &amp; Diagnostic Test Gratis.
              </p>
            </div>

            {/* Selected Package Banner */}
            {isCustomPackage && (
              <div className="selected-package-pill visible">
                <span>Program Pilihan: {selectedPackage}</span>
                <button
                  type="button"
                  className="clear-package-btn"
                  onClick={onClearPackage}
                >
                  Ubah
                </button>
              </div>
            )}

            <form onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                {/* Field 1: Nama Orang Tua / Siswa */}
                <div className="form-group full-width">
                  <label htmlFor="namaLengkap" className="form-label">
                    Nama Orang Tua / Siswa <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="namaLengkap"
                    className="form-control"
                    placeholder="Contoh: Ibu Rina / Ananda Bagas"
                    value={formData.namaLengkap}
                    onChange={(e) => onInputChange('namaLengkap', e.target.value)}
                    required
                  />
                </div>

                {/* Field 2: Jenjang Kelas */}
                <div className="form-group">
                  <label htmlFor="jenjangKelas" className="form-label">
                    Jenjang Kelas <span>*</span>
                  </label>
                  <select
                    id="jenjangKelas"
                    className="form-control"
                    value={formData.jenjangKelas}
                    onChange={(e) => onInputChange('jenjangKelas', e.target.value as JenjangType)}
                    required
                  >
                    <option value="" disabled>Pilih Jenjang Kelas</option>
                    <option value="SD">SD (Kelas 4–6)</option>
                    <option value="SMP">SMP (Kelas 7–9)</option>
                    <option value="SMA">SMA (Kelas 10–12)</option>
                  </select>
                </div>

                {/* Field 3: Bidang Minat */}
                <div className="form-group">
                  <label htmlFor="bidangMinat" className="form-label">
                    Bidang Minat <span>*</span>
                  </label>
                  <select
                    id="bidangMinat"
                    className="form-control"
                    value={formData.bidangMinat}
                    onChange={(e) => onInputChange('bidangMinat', e.target.value as BidangMinatType)}
                    required
                  >
                    <option value="" disabled>Pilih Bidang Minat</option>
                    <option value="Matematika">Matematika</option>
                    <option value="IPA-Sains">IPA-Sains</option>
                    <option value="IPS">IPS</option>
                    <option value="TKA Umum">TKA Umum</option>
                  </select>
                </div>

                {/* Field 4: Nomor WhatsApp */}
                <div className="form-group full-width">
                  <label htmlFor="nomorWhatsapp" className="form-label">
                    Nomor WhatsApp <span>*</span>
                  </label>
                  <input
                    type="tel"
                    id="nomorWhatsapp"
                    className="form-control"
                    placeholder="Contoh: 081234567890"
                    value={formData.nomorWhatsapp}
                    onChange={(e) => onInputChange('nomorWhatsapp', e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                <span>Klaim Kelas Percobaan &amp; Diagnostic Test Gratis</span>
                <ArrowRightIcon size={18} />
              </button>

              <p className="form-note">
                🔒 Data Anda aman dan hanya digunakan untuk penjadwalan akademik oleh Konsultan TunasCendekia.
              </p>
            </form>
          </div>

          {/* Official Contact Details Card */}
          <aside className="contact-info-card" aria-label="Kontak Resmi TunasCendekia">
            <h3>Hubungi Tim Akademik Kami</h3>
            <p>
              Konsultasikan target sekolah unggulan atau bidang OSN yang paling sesuai dengan profil akademik putra/putri Anda.
            </p>

            <div className="contact-list">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon" aria-hidden="true">
                  <WhatsAppIcon size={20} color="#10B981" />
                </div>
                <div>
                  <div className="contact-item-label">WhatsApp Konsultasi</div>
                  <div className="contact-item-value">+62 812-3456-7890</div>
                </div>
              </a>

              <a
                href="https://instagram.com/tunascendekia.id"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon" aria-hidden="true">
                  <InstagramIcon size={20} color="#10B981" />
                </div>
                <div>
                  <div className="contact-item-label">Instagram</div>
                  <div className="contact-item-value">@tunascendekia.id</div>
                </div>
              </a>

              <a
                href="mailto:halo@tunascendekia.id"
                className="contact-item"
              >
                <div className="contact-item-icon" aria-hidden="true">
                  <EmailIcon size={20} color="#10B981" />
                </div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">halo@tunascendekia.id</div>
                </div>
              </a>

              <a
                href="https://www.tunascendekia.id"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon" aria-hidden="true">
                  <GlobeIcon size={20} color="#10B981" />
                </div>
                <div>
                  <div className="contact-item-label">Website</div>
                  <div className="contact-item-value">www.tunascendekia.id</div>
                </div>
              </a>
            </div>

            <div className="operational-hours">
              <strong>Jam Layanan Akademik:</strong>
              Senin – Sabtu: 08.00 – 21.00 WIB (Live Zoom &amp; Klinik Soal Akhir Pekan)
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

