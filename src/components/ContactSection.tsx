import React, { useEffect, useRef } from 'react';
import {
  EducationLevel,
  FormDataType,
  FormFieldKey,
  FormStatus,
  SelectedConsultationProgram,
  TargetProgramChoice,
} from '../types';
import {
  ArrowRightIcon,
  EmailIcon,
  GlobeIcon,
  InstagramIcon,
  ShieldLockIcon,
  WhatsAppIcon,
} from './Icons';

interface ContactSectionProps {
  formData: FormDataType;
  errors: Partial<Record<FormFieldKey, string>>;
  firstErrorField: FormFieldKey | null;
  errorFocusNonce: number;
  formStatus: FormStatus;
  selectedConsultation: SelectedConsultationProgram | null;
  onInputChange: (field: FormFieldKey | 'paketPilihan', value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClearConsultation: () => void;
  submitButtonRef: React.RefObject<HTMLButtonElement>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  errors,
  firstErrorField,
  errorFocusNonce,
  formStatus,
  selectedConsultation,
  onInputChange,
  onSubmit,
  onClearConsultation,
  submitButtonRef,
}) => {
  const namaOrangTuaRef = useRef<HTMLInputElement>(null);
  const namaSiswaRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const jenjangRef = useRef<HTMLSelectElement>(null);
  const targetProgramRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (!firstErrorField || errorFocusNonce === 0) return;

    const fieldRefMap: Record<
      FormFieldKey,
      React.RefObject<HTMLInputElement | HTMLSelectElement>
    > = {
      namaOrangTua: namaOrangTuaRef,
      namaDanKelasSiswa: namaSiswaRef,
      nomorWhatsapp: whatsappRef,
      jenjang: jenjangRef,
      targetProgram: targetProgramRef,
    };

    fieldRefMap[firstErrorField].current?.focus();
  }, [firstErrorField, errorFocusNonce]);

  const isSubmitting = formStatus === 'submitting';

  return (
    <section className="section section-slate" id="kontak">
      <div className="container">
        {/* Consultation Header Banner Card */}
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">
              Siap Mengukur Potensi Akademik Anak Secara Terarah?
            </h2>
            <p className="cta-banner-text">
              Konsultasikan target sekolah unggulan atau bidang Olimpiade Sains Nasional bersama
              tim akademik kami, lalu ikuti Kelas Percobaan &amp; Diagnostic Test Gratis.
            </p>
          </div>
        </div>

        {/* Contact Grid: Registration Form + Official Contact Card */}
        <div className="contact-grid">
          <div className="form-card">
            <div className="form-card-header">
              <h3>Formulir Konsultasi &amp; Pendaftaran Diagnostic Test</h3>
              <p>
                Lengkapi data di bawah ini untuk menjadwalkan sesi pemetaan nalar awal dan kelas
                percobaan via Zoom.
              </p>
            </div>

            {selectedConsultation && (
              <div className="selected-package-pill visible" role="status">
                <span>
                  Program Dipilih: {selectedConsultation.planName} ({selectedConsultation.track}{' '}
                  {selectedConsultation.level} |{' '}
                  {selectedConsultation.billingCycle === 'semester'
                    ? 'Paket Semester'
                    : 'Bulanan'}
                  )
                </span>
                <button
                  type="button"
                  className="clear-package-btn"
                  onClick={onClearConsultation}
                >
                  Hapus Pilihan
                </button>
              </div>
            )}

            <form onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                {/* Field 1: Nama Orang Tua / Wali */}
                <div className="form-group">
                  <label htmlFor="namaOrangTua" className="form-label">
                    Nama Orang Tua / Wali <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={namaOrangTuaRef}
                    type="text"
                    id="namaOrangTua"
                    name="namaOrangTua"
                    className={`form-control ${errors.namaOrangTua ? 'is-invalid' : ''}`}
                    placeholder="Contoh: Ibu Rina Hartono"
                    value={formData.namaOrangTua}
                    onChange={(e) => onInputChange('namaOrangTua', e.target.value)}
                    aria-invalid={Boolean(errors.namaOrangTua)}
                    aria-describedby={errors.namaOrangTua ? 'err-namaOrangTua' : undefined}
                    required
                  />
                  {errors.namaOrangTua && (
                    <p id="err-namaOrangTua" className="field-error" role="alert">
                      {errors.namaOrangTua}
                    </p>
                  )}
                </div>

                {/* Field 2: Nama & Kelas Siswa */}
                <div className="form-group">
                  <label htmlFor="namaDanKelasSiswa" className="form-label">
                    Nama &amp; Kelas Siswa <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={namaSiswaRef}
                    type="text"
                    id="namaDanKelasSiswa"
                    name="namaDanKelasSiswa"
                    className={`form-control ${errors.namaDanKelasSiswa ? 'is-invalid' : ''}`}
                    placeholder="Contoh: Bagas Pratama - Kelas 8"
                    value={formData.namaDanKelasSiswa}
                    onChange={(e) => onInputChange('namaDanKelasSiswa', e.target.value)}
                    aria-invalid={Boolean(errors.namaDanKelasSiswa)}
                    aria-describedby={
                      errors.namaDanKelasSiswa ? 'err-namaDanKelasSiswa' : undefined
                    }
                    required
                  />
                  {errors.namaDanKelasSiswa && (
                    <p id="err-namaDanKelasSiswa" className="field-error" role="alert">
                      {errors.namaDanKelasSiswa}
                    </p>
                  )}
                </div>

                {/* Field 3: Jenjang */}
                <div className="form-group">
                  <label htmlFor="jenjang" className="form-label">
                    Jenjang Pendidikan <span aria-hidden="true">*</span>
                  </label>
                  <select
                    ref={jenjangRef}
                    id="jenjang"
                    name="jenjang"
                    className={`form-control ${errors.jenjang ? 'is-invalid' : ''}`}
                    value={formData.jenjang}
                    onChange={(e) =>
                      onInputChange('jenjang', e.target.value as EducationLevel | '')
                    }
                    aria-invalid={Boolean(errors.jenjang)}
                    aria-describedby={errors.jenjang ? 'err-jenjang' : undefined}
                    required
                  >
                    <option value="" disabled>
                      Pilih Jenjang
                    </option>
                    <option value="SD">SD (Kelas 4-6)</option>
                    <option value="SMP">SMP (Kelas 7-9)</option>
                    <option value="SMA">SMA (Kelas 10-12)</option>
                  </select>
                  {errors.jenjang && (
                    <p id="err-jenjang" className="field-error" role="alert">
                      {errors.jenjang}
                    </p>
                  )}
                </div>

                {/* Field 4: Target Program */}
                <div className="form-group">
                  <label htmlFor="targetProgram" className="form-label">
                    Target Program <span aria-hidden="true">*</span>
                  </label>
                  <select
                    ref={targetProgramRef}
                    id="targetProgram"
                    name="targetProgram"
                    className={`form-control ${errors.targetProgram ? 'is-invalid' : ''}`}
                    value={formData.targetProgram}
                    onChange={(e) =>
                      onInputChange('targetProgram', e.target.value as TargetProgramChoice | '')
                    }
                    aria-invalid={Boolean(errors.targetProgram)}
                    aria-describedby={errors.targetProgram ? 'err-targetProgram' : undefined}
                    required
                  >
                    <option value="" disabled>
                      Pilih Target Program
                    </option>
                    <option value="TKA">TKA (Tes Kemampuan Akademik)</option>
                    <option value="OSN">OSN (Olimpiade Sains Nasional)</option>
                    <option value="TKA & OSN">TKA &amp; OSN (Keduanya)</option>
                  </select>
                  {errors.targetProgram && (
                    <p id="err-targetProgram" className="field-error" role="alert">
                      {errors.targetProgram}
                    </p>
                  )}
                </div>

                {/* Field 5: Nomor WhatsApp Aktif */}
                <div className="form-group full-width">
                  <label htmlFor="nomorWhatsapp" className="form-label">
                    Nomor WhatsApp Aktif <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={whatsappRef}
                    type="tel"
                    id="nomorWhatsapp"
                    name="nomorWhatsapp"
                    className={`form-control ${errors.nomorWhatsapp ? 'is-invalid' : ''}`}
                    placeholder="Contoh: 081234567890 atau +6281234567890"
                    value={formData.nomorWhatsapp}
                    onChange={(e) => onInputChange('nomorWhatsapp', e.target.value)}
                    aria-invalid={Boolean(errors.nomorWhatsapp)}
                    aria-describedby={errors.nomorWhatsapp ? 'err-nomorWhatsapp' : 'hint-wa'}
                    required
                  />
                  {errors.nomorWhatsapp ? (
                    <p id="err-nomorWhatsapp" className="field-error" role="alert">
                      {errors.nomorWhatsapp}
                    </p>
                  ) : (
                    <p id="hint-wa" className="field-hint">
                      Gunakan awalan 08 atau +62 (10 sampai 14 digit aktif untuk pengiriman tautan
                      Zoom).
                    </p>
                  )}
                </div>
              </div>

              <button
                ref={submitButtonRef}
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? 'Memproses Pendaftaran...'
                    : 'Klaim Kelas Percobaan & Diagnostic Test Gratis'}
                </span>
                {!isSubmitting && <ArrowRightIcon size={18} />}
              </button>

              <p className="form-note">
                <ShieldLockIcon size={15} color="#047857" />
                <span>
                  Data Anda terjaga kerahasiaannya dan hanya digunakan untuk penjadwalan konsultasi
                  akademik TunasCendekia.
                </span>
              </p>
            </form>
          </div>

          {/* Official Contact Card */}
          <aside className="contact-info-card" aria-label="Kontak Resmi TunasCendekia">
            <h3>Hubungi Tim Akademik Kami</h3>
            <p>
              Konsultasikan target sekolah unggulan atau bidang OSN yang paling sesuai dengan
              profil akademik putra/putri Anda.
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

              <a href="mailto:halo@tunascendekia.id" className="contact-item">
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
              Senin sampai Sabtu: 08.00 - 21.00 WIB (Live Zoom &amp; Klinik Soal Akhir Pekan)
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
