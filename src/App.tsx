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
  EducationLevel,
  FormDataType,
  FormFieldKey,
  FormStatus,
  SelectedConsultationProgram,
} from './types';

const DEFAULT_PACKAGE_LABEL = 'Kelas Percobaan & Diagnostic Test Gratis';

const INITIAL_FORM_DATA: FormDataType = {
  namaOrangTua: '',
  namaDanKelasSiswa: '',
  nomorWhatsapp: '',
  jenjang: '',
  targetProgram: '',
  paketPilihan: DEFAULT_PACKAGE_LABEL,
};

function validateWhatsappNumber(rawValue: string): string | null {
  const cleaned = rawValue.trim().replace(/[\s.-]/g, '');
  if (!cleaned) {
    return 'Mohon isi nomor WhatsApp aktif orang tua atau wali.';
  }

  // Accept local 08... (10-14 digits) or international +628... (10-14 digits)
  const isValidLocal = /^08\d{8,12}$/.test(cleaned);
  const isValidIntl = /^\+628\d{7,11}$/.test(cleaned);

  if (!isValidLocal && !isValidIntl) {
    return 'Format nomor tidak valid. Gunakan awalan 08 atau +628 berisi 10 sampai 14 digit.';
  }

  return null;
}

export const App: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM_DATA);
  const [selectedConsultation, setSelectedConsultation] =
    useState<SelectedConsultationProgram | null>(null);
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

  const handleSelectPlanFromPricing = (selection: SelectedConsultationProgram) => {
    const cycleText = selection.billingCycle === 'semester' ? 'Paket Semester' : 'Bulanan';
    setSelectedConsultation(selection);
    setFormData((prev) => ({
      ...prev,
      jenjang: selection.level,
      targetProgram: selection.track,
      paketPilihan: `${selection.planName} (${selection.track} ${selection.level} - ${cycleText})`,
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.jenjang;
      delete next.targetProgram;
      return next;
    });
    scrollToSection('kontak');
  };

  const handleSelectLevelForDiagnostic = (level: EducationLevel) => {
    setFormData((prev) => ({
      ...prev,
      jenjang: level,
      paketPilihan: `${DEFAULT_PACKAGE_LABEL} (Jenjang ${level})`,
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.jenjang;
      return next;
    });
    scrollToSection('kontak');
  };

  const handleClearConsultation = () => {
    setSelectedConsultation(null);
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
      'namaOrangTua',
      'namaDanKelasSiswa',
      'jenjang',
      'targetProgram',
      'nomorWhatsapp',
    ];

    if (!formData.namaOrangTua.trim()) {
      fieldErrors.namaOrangTua = 'Mohon isi nama lengkap orang tua atau wali siswa.';
    }
    if (!formData.namaDanKelasSiswa.trim()) {
      fieldErrors.namaDanKelasSiswa = 'Mohon isi nama panggilan siswa beserta kelasnya.';
    }
    if (!formData.jenjang) {
      fieldErrors.jenjang = 'Mohon pilih jenjang pendidikan siswa (SD, SMP, atau SMA).';
    }
    if (!formData.targetProgram) {
      fieldErrors.targetProgram = 'Mohon pilih target program (TKA, OSN, atau keduanya).';
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
      namaOrangTua: formData.namaOrangTua.trim(),
      namaDanKelasSiswa: formData.namaDanKelasSiswa.trim(),
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
          onRequestDiagnosticForLevel={handleSelectLevelForDiagnostic}
        />

        <AboutSection onSelectJenjang={handleSelectLevelForDiagnostic} />

        <FeaturesSection />

        <PricingSection onSelectPlan={handleSelectPlanFromPricing} />

        <FaqSection />

        <ContactSection
          formData={formData}
          errors={errors}
          firstErrorField={firstErrorField}
          errorFocusNonce={errorFocusNonce}
          formStatus={formStatus}
          selectedConsultation={selectedConsultation}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
          onClearConsultation={handleClearConsultation}
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
