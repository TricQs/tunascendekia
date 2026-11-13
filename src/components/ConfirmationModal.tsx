import React, { useEffect, useRef } from 'react';
import { FormDataType } from '../types';
import { CheckIcon, CloseIcon } from './Icons';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: FormDataType;
  returnFocusToRef?: React.RefObject<HTMLButtonElement>;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  data,
  returnFocusToRef,
}) => {
  const modalCardRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef<boolean>(false);

  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      previousActiveRef.current = document.activeElement as HTMLElement | null;
      wasOpenRef.current = true;
      document.body.style.overflow = 'hidden';

      const focusTimer = window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);

      return () => window.clearTimeout(focusTimer);
    }

    if (!isOpen && wasOpenRef.current) {
      wasOpenRef.current = false;
      document.body.style.overflow = '';
      const targetToRestore = returnFocusToRef?.current ?? previousActiveRef.current;
      targetToRestore?.focus();
    }

    return undefined;
  }, [isOpen, returnFocusToRef]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalCardRef.current) {
        const focusables = Array.from(
          modalCardRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        );
        if (focusables.length === 0) return;

        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];
        const activeEl = document.activeElement;

        if (e.shiftKey) {
          if (activeEl === firstEl || !modalCardRef.current.contains(activeEl)) {
            e.preventDefault();
            lastEl.focus();
          }
        } else if (activeEl === lastEl || !modalCardRef.current.contains(activeEl)) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const waMessage = encodeURIComponent(
    `Halo Tim Akademik TunasCendekia! Saya ingin menjadwalkan Kelas Percobaan & Diagnostic Test Gratis.\n\n` +
      `- Nama Orang Tua/Wali: ${data.namaOrangTua}\n` +
      `- Nama & Kelas Siswa: ${data.namaDanKelasSiswa}\n` +
      `- Jenjang: ${data.jenjang}\n` +
      `- Target Program: ${data.targetProgram}\n` +
      `- No. WhatsApp Aktif: ${data.nomorWhatsapp}\n` +
      `- Program Pilihan: ${data.paketPilihan}`
  );

  return (
    <div
      className="modal-backdrop open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDesc"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card" ref={modalCardRef}>
        <button
          ref={closeButtonRef}
          type="button"
          className="modal-close-x"
          onClick={onClose}
          aria-label="Tutup jendela konfirmasi"
        >
          <CloseIcon size={18} color="#475569" />
        </button>

        <div className="modal-icon" aria-hidden="true">
          <CheckIcon size={32} color="#047857" />
        </div>
        <h4 id="modalTitle">Pendaftaran Diagnostic Test Diterima</h4>
        <p id="modalDesc">
          Data pendaftaran Anda sudah siap diteruskan kepada Konsultan Akademik TunasCendekia
          untuk penjadwalan sesi Zoom.
        </p>

        <div className="modal-summary">
          <div>
            <strong>Orang Tua / Wali:</strong> {data.namaOrangTua}
          </div>
          <div>
            <strong>Siswa &amp; Kelas:</strong> {data.namaDanKelasSiswa}
          </div>
          <div>
            <strong>Jenjang Pendidikan:</strong> {data.jenjang}
          </div>
          <div>
            <strong>Target Program:</strong> {data.targetProgram}
          </div>
          <div>
            <strong>Nomor WhatsApp:</strong> {data.nomorWhatsapp}
          </div>
          <div>
            <strong>Program Pilihan:</strong> {data.paketPilihan}
          </div>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-secondary btn-block" onClick={onClose}>
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
