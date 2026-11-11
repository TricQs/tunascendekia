import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ConfirmationModal } from './components/ConfirmationModal';
import { FormDataType, JenjangType } from './types';

export const App: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    namaLengkap: '',
    jenjangKelas: '',
    bidangMinat: '',
    nomorWhatsapp: '',
    paketPilihan: 'Kelas Percobaan & Diagnostic Test Gratis',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormDataType>(formData);

  const scrollToContact = () => {
    const el = document.getElementById('kontak');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    const el = document.getElementById('paket-belajar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPackage = (packageName: string) => {
    setFormData((prev) => ({ ...prev, paketPilihan: packageName }));
    scrollToContact();
    setTimeout(() => {
      document.getElementById('namaLengkap')?.focus();
    }, 450);
  };

  const handleSelectJenjang = (jenjang: JenjangType) => {
    setFormData((prev) => ({ ...prev, jenjangKelas: jenjang }));
    scrollToContact();
    setTimeout(() => {
      document.getElementById('namaLengkap')?.focus();
    }, 450);
  };

  const handleClearPackage = () => {
    setFormData((prev) => ({
      ...prev,
      paketPilihan: 'Kelas Percobaan & Diagnostic Test Gratis',
    }));
  };

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.namaLengkap.trim() ||
      !formData.jenjangKelas ||
      !formData.bidangMinat ||
      !formData.nomorWhatsapp.trim()
    ) {
      alert('Mohon lengkapi seluruh kolom Nama, Jenjang Kelas, Bidang Minat, dan Nomor WhatsApp.');
      return;
    }

    setSubmittedData({ ...formData });
    setModalOpen(true);
    setFormData({
      namaLengkap: '',
      jenjangKelas: '',
      bidangMinat: '',
      nomorWhatsapp: '',
      paketPilihan: 'Kelas Percobaan & Diagnostic Test Gratis',
    });
  };

  return (
    <div className="app-root">
      <Navbar onCobaKelasClick={scrollToContact} />

      <main>
        <HeroSection
          onDaftarTestClick={scrollToContact}
          onLihatPaketClick={scrollToPricing}
        />
        <AboutSection onSelectJenjang={handleSelectJenjang} />
        <FeaturesSection />
        <PricingSection onSelectPackage={handleSelectPackage} />
        <FaqSection />
        <ContactSection
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
          onClearPackage={handleClearPackage}
          selectedPackage={formData.paketPilihan}
        />
      </main>

      <Footer />
      <FloatingActions />

      <ConfirmationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={submittedData}
      />
    </div>
  );
};

export default App;

