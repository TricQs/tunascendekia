import React, { useEffect, useRef } from 'react';
import {
  FormDataType,
  FormFieldKey,
  FormStatus,
  InstitutionType,
  SelectedB2BInquiry,
} from '../types';
import { DeckIllustration } from './DeckIllustrations';
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
  selectedInquiry: SelectedB2BInquiry | null;
  onInputChange: (field: FormFieldKey | 'paketPilihan', value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClearInquiry: () => void;
  submitButtonRef: React.RefObject<HTMLButtonElement>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  errors,
  firstErrorField,
  errorFocusNonce,
  formStatus,
  selectedInquiry,
  onInputChange,
  onSubmit,
  onClearInquiry,
  submitButtonRef,
}) => {
  const institusiRef = useRef<HTMLInputElement>(null);
  const picRef = useRef<HTMLInputElement>(null);
  const tipeRef = useRef<HTMLSelectElement>(null);
  const jumlahRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!firstErrorField || errorFocusNonce === 0) return;

    const fieldRefMap: Record<
      FormFieldKey,
      React.RefObject<HTMLInputElement | HTMLSelectElement>
    > = {
      namaInstitusi: institusiRef,
      namaPic: picRef,
      tipeInstitusi: tipeRef,
      jumlahPengguna: jumlahRef,
      nomorWhatsapp: whatsappRef,
    };

    fieldRefMap[firstErrorField].current?.focus();
  }, [firstErrorField, errorFocusNonce]);

  const isSubmitting = formStatus === 'submitting';

  return (
    <section className="section section-slate" id="kontak">
      <div className="container">
        {/* B2B Demo Banner */}
        <div className="cta-banner-card">
          <div className="cta-banner-split">
            <div className="cta-banner-content left-aligned">
              <span className="banner-kicker">ADOPSI B2B &amp; PRESENTASI KAMPUS</span>
              <h2 className="cta-banner-title">
                Siap Meng-upgrade Portal Akademik Institusi Anda?
              </h2>
              <p className="cta-banner-text">
                Jadwalkan sesi pitching dan uji coba langsung sistem TunasCendekia LMS bersama tim
                IT kami untuk kampus, universitas, maupun sekolah Anda.
              </p>
            </div>
            <div className="cta-banner-art" aria-hidden="true">
              <DeckIllustration variant="contact-team" />
            </div>
          </div>
        </div>

        {/* Contact Grid: B2B Form + Static Non-Clickable Contact Panel */}
        <div className="contact-grid">
          <div className="form-card">
            <div className="form-card-header">
              <h3>Formulir Permintaan Demo &amp; Penawaran Kustom (B2B)</h3>
              <p>
                Lengkapi profil institusi di bawah ini untuk menjadwalkan presentasi sistem dan
                diskusi paket kapasitas pengguna.
              </p>
            </div>

            {selectedInquiry && (
              <div className="selected-package-pill visible" role="status">
                <span>
                  Paket Dipilih: {selectedInquiry.planName} ({selectedInquiry.userCapacityLabel} |{' '}
                  {selectedInquiry.billingCycle === 'tahunan' ? 'Tahunan' : 'Bulanan'})
                </span>
                <button
                  type="button"
                  className="clear-package-btn"
                  onClick={onClearInquiry}
                >
                  Hapus Pilihan
                </button>
              </div>
            )}

            <form onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="namaInstitusi" className="form-label">
                    Nama Universitas / Sekolah <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={institusiRef}
                    type="text"
                    id="namaInstitusi"
                    name="namaInstitusi"
                    className={`form-control ${errors.namaInstitusi ? 'is-invalid' : ''}`}
                    placeholder="Contoh: Universitas Nusantara / SMA Harapan"
                    value={formData.namaInstitusi}
                    onChange={(e) => onInputChange('namaInstitusi', e.target.value)}
                    aria-invalid={Boolean(errors.namaInstitusi)}
                    aria-describedby={errors.namaInstitusi ? 'err-namaInstitusi' : undefined}
                    required
                  />
                  {errors.namaInstitusi && (
                    <p id="err-namaInstitusi" className="field-error" role="alert">
                      {errors.namaInstitusi}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="namaPic" className="form-label">
                    Nama PIC &amp; Jabatan <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={picRef}
                    type="text"
                    id="namaPic"
                    name="namaPic"
                    className={`form-control ${errors.namaPic ? 'is-invalid' : ''}`}
                    placeholder="Contoh: Ibu Clara - Kepala Lab / Wakil Rektor"
                    value={formData.namaPic}
                    onChange={(e) => onInputChange('namaPic', e.target.value)}
                    aria-invalid={Boolean(errors.namaPic)}
                    aria-describedby={errors.namaPic ? 'err-namaPic' : undefined}
                    required
                  />
                  {errors.namaPic && (
                    <p id="err-namaPic" className="field-error" role="alert">
                      {errors.namaPic}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="tipeInstitusi" className="form-label">
                    Kategori Institusi <span aria-hidden="true">*</span>
                  </label>
                  <select
                    ref={tipeRef}
                    id="tipeInstitusi"
                    name="tipeInstitusi"
                    className={`form-control ${errors.tipeInstitusi ? 'is-invalid' : ''}`}
                    value={formData.tipeInstitusi}
                    onChange={(e) =>
                      onInputChange('tipeInstitusi', e.target.value as InstitutionType | '')
                    }
                    aria-invalid={Boolean(errors.tipeInstitusi)}
                    aria-describedby={errors.tipeInstitusi ? 'err-tipeInstitusi' : undefined}
                    required
                  >
                    <option value="" disabled>
                      Pilih Kategori Institusi
                    </option>
                    <option value="Universitas / Perguruan Tinggi">
                      Universitas / Perguruan Tinggi
                    </option>
                    <option value="Sekolah (SD / SMP / SMA)">Sekolah (SD / SMP / SMA)</option>
                    <option value="Lembaga Pelatihan & Vokasi">
                      Lembaga Pelatihan &amp; Vokasi
                    </option>
                  </select>
                  {errors.tipeInstitusi && (
                    <p id="err-tipeInstitusi" className="field-error" role="alert">
                      {errors.tipeInstitusi}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="jumlahPengguna" className="form-label">
                    Estimasi Pengguna Aktif <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={jumlahRef as React.RefObject<HTMLInputElement>}
                    type="text"
                    id="jumlahPengguna"
                    name="jumlahPengguna"
                    className={`form-control ${errors.jumlahPengguna ? 'is-invalid' : ''}`}
                    placeholder="Contoh: 10.000 Mahasiswa atau 100.000 User"
                    value={formData.jumlahPengguna}
                    onChange={(e) => onInputChange('jumlahPengguna', e.target.value)}
                    aria-invalid={Boolean(errors.jumlahPengguna)}
                    aria-describedby={errors.jumlahPengguna ? 'err-jumlahPengguna' : undefined}
                    required
                  />
                  {errors.jumlahPengguna && (
                    <p id="err-jumlahPengguna" className="field-error" role="alert">
                      {errors.jumlahPengguna}
                    </p>
                  )}
                </div>

                <div className="form-group full-width">
                  <label htmlFor="nomorWhatsapp" className="form-label">
                    Nomor WhatsApp PIC / Kontak Kantor <span aria-hidden="true">*</span>
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
                      Gunakan awalan 08 atau +62 (10 sampai 14 digit aktif untuk pengiriman proposal
                      &amp; tautan sandbox demo).
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
                    ? 'Memproses Permintaan Demo...'
                    : 'Ajukan Live Demo & Proposal B2B'}
                </span>
                {!isSubmitting && <ArrowRightIcon size={18} />}
              </button>

              <p className="form-note">
                <ShieldLockIcon size={15} color="#047857" />
                <span>
                  Kebutuhan sistem dan estimasi pengguna dijaga kerahasiaannya untuk persiapan
                  demo tim teknis TunasCendekia.
                </span>
              </p>
            </form>
          </div>

          {/* Static Non-Clickable Contact Panel */}
          <aside className="contact-info-card" aria-label="Informasi Kontak TunasCendekia LMS">
            <h3>Hubungi Tim Akademik &amp; Solusi B2B</h3>
            <p>
              Diskusikan kustomisasi kapasitas hingga 100.000+ mahasiswa, integrasi SIAKAD, dan
              kebutuhan infrastruktur portal kampus Anda.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  <WhatsAppIcon size={20} color="#10B981" />
                </div>
                <div>
                  <div className="contact-item-label">WhatsApp Bisnis</div>
                  <div className="contact-item-value">+62 812-3456-7890</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  <InstagramIcon size={20} color="#10B981" />
                </div>
                <div>
                  <div className="contact-item-label">Instagram</div>
                  <div className="contact-item-value">@tunascendekia.id</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  <EmailIcon size={20} color="#10B981" />
                </div>
                <div>
                  <div className="contact-item-label">Email Enterprise</div>
                  <div className="contact-item-value">halo@tunascendekia.id</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  <GlobeIcon size={20} color="#10B981" />
                </div>
                <div>
                  <div className="contact-item-label">Website Demo</div>
                  <div className="contact-item-value">tunascendekia.vercel.app</div>
                </div>
              </div>
            </div>

            <div className="operational-hours">
              <strong>Jam Dukungan Teknis &amp; Pitching:</strong>
              Senin sampai Sabtu: 08.00 - 21.00 WIB (Presentasi Daring &amp; Kunjungan Kampus)
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
