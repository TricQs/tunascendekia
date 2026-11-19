import React, { useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ConfirmationModal } from './components/ConfirmationModal';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FeaturesSection } from './components/FeaturesSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import {
  FormDataType,
  FormFieldKey,
  FormStatus,
  SelectedB2BInquiry,
} from './types';

const DEFAULT_PACKAGE_LABEL = 'Live Demo & Konsultasi LMS Kampus';

const INITIAL_FORM_DATA: FormDataType = {
  namaInstitusi: '',
  namaPic: '',
  tipeInstitusi: '',
  jumlahPengguna: '',
  nomorWhatsapp: '',
  paketPilihan: DEFAULT_PACKAGE_LABEL,
};

function validateWhatsappNumber(rawValue: string): string | null {
  const cleaned = rawValue.trim().replace(/[\s.-]/g, '');
  if (!cleaned) {
    return 'Mohon isi nomor WhatsApp aktif PIC atau kantor institusi.';
  }

  const isValidLocal = /^08\d{8,12}$/.test(cleaned);
  const isValidIntl = /^\+628\d{7,11}$/.test(cleaned);

  if (!isValidLocal && !isValidIntl) {
    return 'Format nomor tidak valid. Gunakan awalan 08 atau +628 berisi 10 sampai 14 digit.';
  }

  return null;
}

export const App: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM_DATA);
  const [selectedInquiry, setSelectedInquiry] = useState<SelectedB2BInquiry | null>(null);
  const [errors, setErrors] = useState<Partial<Record<FormFieldKey, string>>>({});
  const [firstErrorField, setFirstErrorField] = useState<FormFieldKey | null>(null);
  const [errorFocusNonce, setErrorFocusNonce] = useState<number>(0);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<FormDataType>(INITIAL_FORM_DATA);

  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const submitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlanFromPricing = (selection: SelectedB2BInquiry) => {
    const cycleText = selection.billingCycle === 'tahunan' ? 'Tahunan' : 'Bulanan';
    setSelectedInquiry(selection);
    setFormData((prev) => ({
      ...prev,
      jumlahPengguna: selection.userCapacityLabel,
      paketPilihan: `${selection.planName} (${cycleText})`,
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.jumlahPengguna;
      return next;
    });
    scrollToSection('kontak');
  };

  const handleSelectScaleQuick = (estimate: string) => {
    const mappedPlan = estimate.includes('100.000')
      ? 'Institutional Custom Scale'
      : estimate.includes('10.000')
      ? 'Enterprise Kampus & Universitas'
      : 'Starter Institusi & Sekolah';

    setSelectedInquiry({
      planId: estimate.includes('100.000')
        ? 'paket-custom'
        : estimate.includes('10.000')
        ? 'paket-b'
        : 'paket-a',
      planName: mappedPlan,
      billingCycle: 'bulanan',
      userCapacityLabel: estimate,
    });
    setFormData((prev) => ({
      ...prev,
      jumlahPengguna: estimate,
      paketPilihan: `${mappedPlan} (${estimate})`,
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.jumlahPengguna;
      return next;
    });
    scrollToSection('kontak');
  };

  const handleClearInquiry = () => {
    setSelectedInquiry(null);
    setFormData((prev) => ({
      ...prev,
      paketPilihan: DEFAULT_PACKAGE_LABEL,
    }));
  };

  const handleInputChange = (field: FormFieldKey | 'paketPilihan', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field !== 'paketPilihan') {
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
      if (formStatus === 'error') {
        setFormStatus('idle');
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus === 'submitting') return;

    const fieldErrors: Partial<Record<FormFieldKey, string>> = {};
    const orderedFields: FormFieldKey[] = [
      'namaInstitusi',
      'namaPic',
      'tipeInstitusi',
      'jumlahPengguna',
      'nomorWhatsapp',
    ];

    if (!formData.namaInstitusi.trim()) {
      fieldErrors.namaInstitusi = 'Mohon isi nama universitas, sekolah, atau institusi.';
    }
    if (!formData.namaPic.trim()) {
      fieldErrors.namaPic = 'Mohon isi nama lengkap dan jabatan PIC.';
    }
    if (!formData.tipeInstitusi) {
      fieldErrors.tipeInstitusi = 'Mohon pilih kategori institusi Anda.';
    }
    if (!formData.jumlahPengguna.trim()) {
      fieldErrors.jumlahPengguna = 'Mohon isi estimasi jumlah mahasiswa atau siswa aktif.';
    }

    const waError = validateWhatsappNumber(formData.nomorWhatsapp);
    if (waError) {
      fieldErrors.nomorWhatsapp = waError;
    }

    const firstInvalid = orderedFields.find((key) => Boolean(fieldErrors[key])) ?? null;

    if (firstInvalid) {
      setErrors(fieldErrors);
      setFirstErrorField(firstInvalid);
      setErrorFocusNonce((prev) => prev + 1);
      setFormStatus('error');
      return;
    }

    setErrors({});
    setFirstErrorField(null);
    setFormStatus('submitting');

    const snapshot: FormDataType = {
      ...formData,
      namaInstitusi: formData.namaInstitusi.trim(),
      namaPic: formData.namaPic.trim(),
      jumlahPengguna: formData.jumlahPengguna.trim(),
      nomorWhatsapp: formData.nomorWhatsapp.trim(),
    };

    submitTimerRef.current = window.setTimeout(() => {
      setSubmittedData(snapshot);
      setFormStatus('submitted');
      setModalOpen(true);
    }, 300);
  };

  return (
    <>
      <Navbar onTryFreeClick={() => scrollToSection('kontak')} />

      <main>
        <HeroSection
          onCtaClick={() => scrollToSection('kontak')}
          onSecondaryClick={() => scrollToSection('paket-belajar')}
        />

        <AboutSection onSelectScaleQuick={handleSelectScaleQuick} />

        <FeaturesSection />

        <PricingSection onSelectPlan={handleSelectPlanFromPricing} />

        <FaqSection />

        <ContactSection
          formData={formData}
          errors={errors}
          firstErrorField={firstErrorField}
          errorFocusNonce={errorFocusNonce}
          formStatus={formStatus}
          selectedInquiry={selectedInquiry}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
          onClearInquiry={handleClearInquiry}
          submitButtonRef={submitButtonRef}
        />
      </main>

      <Footer />

      <FloatingActions />

      <ConfirmationModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setFormStatus('idle');
        }}
        data={submittedData}
        returnFocusToRef={submitButtonRef}
      />
    </>
  );
};

export default App;
