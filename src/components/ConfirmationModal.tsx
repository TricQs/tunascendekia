import React, { useEffect } from 'react';
import { FormDataType } from '../types';
import { CheckIcon } from './Icons';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: FormDataType;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const waMessage = encodeURIComponent(
    `Halo Tim Akademik TunasCendekia! Saya ingin klaim Kelas Percobaan & Diagnostic Test Gratis.\n\n` +
      `• Nama: ${data.namaLengkap}\n` +
      `• Jenjang Kelas: ${data.jenjangKelas}\n` +
      `• Bidang Minat: ${data.bidangMinat}\n` +
      `• No. WhatsApp: ${data.nomorWhatsapp}\n` +
      `• Program Pilihan: ${data.paketPilihan}`
  );

  return (
    <div
      className="modal-backdrop open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="modal-icon" aria-hidden="true">
          <CheckIcon size={32} color="#10B981" />
        </div>
        <h4 id="modalTitle">Klaim Diagnostic Test Berhasil!</h4>
        <p>
          Terima kasih! Tim Konsultan Akademik TunasCendekia telah menerima data pendaftaran Anda.
        </p>

        <div className="modal-summary">
          <div>
            <strong>Nama Orang Tua / Siswa:</strong> {data.namaLengkap}
          </div>
          <div>
            <strong>Jenjang Kelas:</strong> {data.jenjangKelas}
          </div>
          <div>
            <strong>Bidang Minat:</strong> {data.bidangMinat}
          </div>
          <div>
            <strong>Nomor WhatsApp:</strong> {data.nomorWhatsapp}
          </div>
          <div>
            <strong>Program Pilihan:</strong> {data.paketPilihan}
          </div>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={onClose}
          >
            Tutup
          </button>
          <a
            href={`https://wa.me/6281234567890?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Lanjut ke WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

