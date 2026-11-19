import React, { useState } from 'react';
import { LmsModuleTab } from '../types';
import {
  AttendanceCheckIcon,
  CalendarSyncIcon,
  ChatBubbleIcon,
  CheckIcon,
  CloudUploadIcon,
  PlayIcon,
  VideoArchiveIcon,
} from './Icons';

interface LmsWorkspaceDemoProps {
  onRequestDemo: () => void;
}

interface SampleFileItem {
  id: string;
  name: string;
  sizeLabel: string;
  sizeMb: number;
}

const SAMPLE_FILES: SampleFileItem[] = [
  { id: 'f1', name: 'Laporan_Sistem_Basis_Data.pdf', sizeLabel: '14 MB', sizeMb: 14 },
  { id: 'f2', name: 'Video_Demo_Aplikasi_Kampus.mp4', sizeLabel: '680 MB', sizeMb: 680 },
  { id: 'f3', name: 'Dataset_Skripsi_Machine_Learning.zip', sizeLabel: '1.85 GB', sizeMb: 1894 },
];

const LECTURE_RECORDINGS = [
  {
    id: 'rec-1',
    course: 'TI-401 • Rekayasa Perangkat Lunak',
    topic: 'Pertemuan 11: Arsitektur Cloud & API Microservices',
    duration: '1j 24m',
    chapters: ['00:00 Review Sistem', '18:30 Integrasi SIAKAD', '46:10 Tanya Jawab Kelas'],
  },
  {
    id: 'rec-2',
    course: 'TI-308 • Desain Antarmuka (UI/UX)',
    topic: 'Pertemuan 09: Audit Portal Akademik & Wireframing',
    duration: '1j 12m',
    chapters: ['00:00 Masalah Portal Lama', '22:15 Studi Kasus Mahasiswa', '51:00 Tugas Proyek'],
  },
];

const ADVISING_SLOTS = [
  { id: 'slot-1', label: 'Kamis, 10:00 WIB', room: 'Ruang Bimbingan LMS #A2' },
  { id: 'slot-2', label: 'Jumat, 13:30 WIB', room: 'Sesi Online LMS Terpadu' },
  { id: 'slot-3', label: 'Senin, 15:00 WIB', room: 'Ruang Konsultasi Prodi' },
];

const TABS: Array<{ id: LmsModuleTab; label: string }> = [
  { id: 'chat', label: 'Chat Persisten' },
  { id: 'upload', label: 'Upload 2 GB' },
  { id: 'recording', label: 'Rekaman Auto' },
  { id: 'attendance', label: 'Absen Non-QR' },
  { id: 'advising', label: 'Bimbingan' },
];

export const LmsWorkspaceDemo: React.FC<LmsWorkspaceDemoProps> = ({ onRequestDemo }) => {
  const [activeTab, setActiveTab] = useState<LmsModuleTab>('chat');

  // State 1: Persistent Unread Chat Demo
  const [chatState, setChatState] = useState<'unread' | 'read-unreplied' | 'replied'>('unread');
  const [replyDraft, setReplyDraft] = useState<string>(
    'Baik Pak, file Bab 3 revisi sudah saya unggah langsung di modul bimbingan.'
  );

  // State 2: Large 2 GB Cloud Upload Demo
  const [selectedFileId, setSelectedFileId] = useState<string>('f2');
  const [uploadedIds, setUploadedIds] = useState<Record<string, boolean>>({ f2: true });

  // State 3: Auto-Recorded Lecture Demo
  const [activeRecId, setActiveRecId] = useState<string>('rec-1');
  const [activeChapterIdx, setActiveChapterIdx] = useState<number>(1);

  // State 4: Non-QR Smart Attendance Demo
  const [attendanceVerified, setAttendanceVerified] = useState<boolean>(false);

  // State 5: Auto Advising Scheduler Demo
  const [selectedSlotId, setSelectedSlotId] = useState<string>('slot-1');
  const [bookedSlotId, setBookedSlotId] = useState<string | null>(null);

  const selectedFile = SAMPLE_FILES.find((f) => f.id === selectedFileId) ?? SAMPLE_FILES[0];
  const isSelectedFileUploaded = Boolean(uploadedIds[selectedFile.id]);
  const activeRecording =
    LECTURE_RECORDINGS.find((r) => r.id === activeRecId) ?? LECTURE_RECORDINGS[0];

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const nextIdx =
        e.key === 'ArrowRight' ? (idx + 1) % TABS.length : (idx - 1 + TABS.length) % TABS.length;
      setActiveTab(TABS[nextIdx].id);
    }
  };

  const unreadCount = chatState === 'replied' ? 0 : 1;

  return (
    <div
      className="zoom-mockup-card"
      id="lms-demo-sandbox"
      aria-label="Simulasi Interaktif Platform TunasCendekia LMS"
    >
      {/* Top LMS Workspace Bar */}
      <div className="zoom-topbar">
        <div className="window-dots" aria-hidden="true">
          <span className="window-dot dot-red" />
          <span className="window-dot dot-amber" />
          <span className="window-dot dot-green" />
        </div>
        <div className="zoom-session-badge lms-status-badge">
          <span className="live-pulse emerald-dot" aria-hidden="true" />
          <span>TUNASCENDEKIA LMS • DEMO WORKSPACE</span>
        </div>
        <div className="zoom-Capacity-pill">Cloud &amp; Notif Aktif</div>
      </div>

      <div className="zoom-body">
        {/* 5 Interactive Feature Tabs */}
        <div
          className="lms-demo-tabs"
          role="tablist"
          aria-label="Pilih Modul Simulasi LMS"
        >
          {TABS.map((tab, idx) => (
            <button
              key={tab.id}
              id={`lms-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls="lms-demo-panel"
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`lms-demo-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
            >
              <span>{tab.label}</span>
              {tab.id === 'chat' && unreadCount > 0 && (
                <span className="tab-notif-dot" aria-label="1 pesan perlu balasan">
                  1
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Simulation Panel */}
        <div
          id="lms-demo-panel"
          role="tabpanel"
          aria-labelledby={`lms-tab-${activeTab}`}
          className="brilliant-board lms-board"
        >
          {activeTab === 'chat' && (
            <div className="lms-sim-pane">
              <div className="lms-pane-header">
                <div className="lms-pane-title-wrap">
                  <ChatBubbleIcon size={18} color="#047857" />
                  <div>
                    <span className="sandbox-track-meta">Solusi Chat Portal Kampus</span>
                    <h2 className="brilliant-step-caption">
                      Notifikasi Tetap Bertahan Jika Dibaca Tapi Belum Dibalas
                    </h2>
                  </div>
                </div>
                <span
                  className={`lms-status-chip ${
                    chatState === 'replied' ? 'chip-emerald' : 'chip-amber'
                  }`}
                >
                  {chatState === 'unread' && '1 Pesan Baru'}
                  {chatState === 'read-unreplied' && 'Dibaca • Perlu Balasan (Notif Tetap Aktif)'}
                  {chatState === 'replied' && 'Terbalas • Selesai'}
                </span>
              </div>

              <div className="lms-compare-mini">
                <span>
                  <strong>Portal Lama:</strong> Dibuka = notif langsung hilang (sering lupa dibalas).
                </span>
              </div>

              <div className="chat-thread-box">
                <div className="chat-msg-card incoming">
                  <div className="chat-msg-meta">
                    <strong>Dr. Hendra Wijaya (Dosen Pembimbing)</strong>
                    <span>09:15 WIB</span>
                  </div>
                  <p>
                    Tolong unggah revisi Bab 3 sebelum sesi evaluasi siang ini ya. Kabari kalau
                    sudah masuk ke sistem.
                  </p>
                </div>

                {chatState === 'replied' && (
                  <div className="chat-msg-card outgoing">
                    <div className="chat-msg-meta">
                      <strong>Anda (Mahasiswa)</strong>
                      <span>Baru saja • Terkirim</span>
                    </div>
                    <p>{replyDraft}</p>
                  </div>
                )}
              </div>

              {chatState !== 'replied' ? (
                <div className="chat-sim-controls">
                  <div className="chat-btn-row">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setChatState('read-unreplied')}
                      disabled={chatState === 'read-unreplied'}
                    >
                      {chatState === 'read-unreplied'
                        ? 'Sudah Dibaca (Badge "1" Tetap Ada!)'
                        : '1. Simulasikan Buka Chat Tanpa Balas'}
                    </button>
                  </div>

                  <div className="chat-reply-bar">
                    <input
                      type="text"
                      className="form-control chat-reply-input"
                      value={replyDraft}
                      onChange={(e) => setReplyDraft(e.target.value)}
                      aria-label="Balasan pesan bimbingan"
                    />
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setChatState('replied')}
                    >
                      2. Kirim Balasan
                    </button>
                  </div>
                </div>
              ) : (
                <div className="chat-done-bar">
                  <span>
                    Badge notifikasi otomatis terhapus bersih hanya setelah balasan terkirim.
                  </span>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setChatState('unread')}
                  >
                    Ulangi Simulasi
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="lms-sim-pane">
              <div className="lms-pane-header">
                <div className="lms-pane-title-wrap">
                  <CloudUploadIcon size={18} color="#047857" />
                  <div>
                    <span className="sandbox-track-meta">Cloud Assignment Storage</span>
                    <h2 className="brilliant-step-caption">
                      Upload Berkas Tugas hingga 2 GB / File (vs Batas 10 MB Portal Lama)
                    </h2>
                  </div>
                </div>
              </div>

              <div className="file-picker-list" role="radiogroup" aria-label="Pilih simulasi file">
                {SAMPLE_FILES.map((file) => (
                  <button
                    key={file.id}
                    type="button"
                    role="radio"
                    aria-checked={selectedFileId === file.id}
                    className={`file-pick-item ${selectedFileId === file.id ? 'selected' : ''}`}
                    onClick={() => setSelectedFileId(file.id)}
                  >
                    <span className="file-pick-name">{file.name}</span>
                    <span className="file-pick-size">{file.sizeLabel}</span>
                  </button>
                ))}
              </div>

              <div className="upload-compare-grid">
                <div className="upload-compare-box box-legacy">
                  <span className="compare-label">Portal Konvensional (Maks. 10 MB)</span>
                  <strong>GAGAL: Berkas {selectedFile.sizeLabel} melebihi kuota 10 MB!</strong>
                </div>

                <div className="upload-compare-box box-lms">
                  <span className="compare-label">TunasCendekia LMS (Hingga 2 GB / File)</span>
                  <strong>
                    {isSelectedFileUploaded
                      ? `100% Terunggah (${selectedFile.sizeLabel})`
                      : `Siap mengunggah ${selectedFile.sizeLabel}`}
                  </strong>
                  <div className="upload-progress-track" aria-hidden="true">
                    <div
                      className="upload-progress-fill"
                      style={{ width: isSelectedFileUploaded ? '100%' : '20%' }}
                    />
                  </div>
                  {!isSelectedFileUploaded && (
                    <button
                      type="button"
                      className="btn btn-primary btn-sm upload-trigger-btn"
                      onClick={() =>
                        setUploadedIds((prev) => ({ ...prev, [selectedFile.id]: true }))
                      }
                    >
                      Unggah Sekarang ({selectedFile.sizeLabel})
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recording' && (
            <div className="lms-sim-pane">
              <div className="lms-pane-header">
                <div className="lms-pane-title-wrap">
                  <VideoArchiveIcon size={18} color="#047857" />
                  <div>
                    <span className="sandbox-track-meta">Auto-Archive Course Timeline</span>
                    <h2 className="brilliant-step-caption">
                      Rekaman Kuliah Dosen Otomatis Tersedia per Pertemuan
                    </h2>
                  </div>
                </div>
              </div>

              <div className="rec-selector-row">
                {LECTURE_RECORDINGS.map((rec) => (
                  <button
                    key={rec.id}
                    type="button"
                    className={`rec-pill-btn ${activeRecId === rec.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveRecId(rec.id);
                      setActiveChapterIdx(0);
                    }}
                  >
                    {rec.course}
                  </button>
                ))}
              </div>

              <div className="rec-player-mock">
                <div className="rec-video-screen">
                  <span className="rec-play-circle" aria-hidden="true">
                    <PlayIcon size={18} color="#0F172A" />
                  </span>
                  <div className="rec-screen-meta">
                    <strong>{activeRecording.topic}</strong>
                    <span>
                      Durasi {activeRecording.duration} • Bab Aktif:{' '}
                      {activeRecording.chapters[activeChapterIdx]}
                    </span>
                  </div>
                </div>

                <div className="rec-chapters-row">
                  {activeRecording.chapters.map((ch, idx) => (
                    <button
                      key={ch}
                      type="button"
                      className={`chapter-chip ${activeChapterIdx === idx ? 'active' : ''}`}
                      onClick={() => setActiveChapterIdx(idx)}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="lms-sim-pane">
              <div className="lms-pane-header">
                <div className="lms-pane-title-wrap">
                  <AttendanceCheckIcon size={18} color="#047857" />
                  <div>
                    <span className="sandbox-track-meta">Smart Presence Automation</span>
                    <h2 className="brilliant-step-caption">
                      Presensi Otomatis Tanpa Antre Scan QR di Depan Kelas
                    </h2>
                  </div>
                </div>
              </div>

              <div className="upload-compare-grid">
                <div className="upload-compare-box box-legacy">
                  <span className="compare-label">Cara Lama (Portal Biasa)</span>
                  <strong>Harus membuka kamera scan QR dosen saat kelas berlangsung.</strong>
                </div>

                <div className="upload-compare-box box-lms">
                  <span className="compare-label">TunasCendekia Smart Check-In</span>
                  <strong>
                    {attendanceVerified
                      ? 'Hadir Terverifikasi • Ruang B-402 / Wi-Fi Kampus'
                      : 'Sesi Kuliah TI-401 Sedang Berlangsung'}
                  </strong>
                  <button
                    type="button"
                    className={`btn btn-sm ${attendanceVerified ? 'btn-navy' : 'btn-primary'}`}
                    onClick={() => setAttendanceVerified((prev) => !prev)}
                  >
                    {attendanceVerified
                      ? 'Status: Tercatat Otomatis di Rekap SIAKAD'
                      : 'Presensi 1-Klik Sekarang'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'advising' && (
            <div className="lms-sim-pane">
              <div className="lms-pane-header">
                <div className="lms-pane-title-wrap">
                  <CalendarSyncIcon size={18} color="#047857" />
                  <div>
                    <span className="sandbox-track-meta">Thesis &amp; Advising Scheduler</span>
                    <h2 className="brilliant-step-caption">
                      Jadwal Bimbingan Skripsi Tersinkron Tanpa Janjian WA Manual
                    </h2>
                  </div>
                </div>
              </div>

              <div className="advising-slots-grid">
                {ADVISING_SLOTS.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    className={`advising-slot-card ${selectedSlotId === slot.id ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedSlotId(slot.id);
                      setBookedSlotId(null);
                    }}
                  >
                    <strong>{slot.label}</strong>
                    <span>{slot.room}</span>
                  </button>
                ))}
              </div>

              <div className="advising-action-bar">
                {bookedSlotId === selectedSlotId ? (
                  <div className="advising-confirmed-msg">
                    <CheckIcon size={15} color="#047857" />
                    <span>
                      Terkonfirmasi otomatis di kalender dosen &amp; mahasiswa (tanpa chat WA
                      manual).
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-block"
                    onClick={() => setBookedSlotId(selectedSlotId)}
                  >
                    Booking Slot Bimbingan Secara Sistem
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Demo CTA Strip */}
        <div className="achievement-float">
          <div className="achievement-item">
            <span className="achievement-badge-icon badge-emerald" aria-hidden="true">
              <CheckIcon size={14} color="#10B981" />
            </span>
            <span>Siap Diintegrasikan dengan Sistem Kampus &amp; Sekolah</span>
          </div>

          <button type="button" className="btn btn-primary btn-sm" onClick={onRequestDemo}>
            Jadwalkan Presentasi &amp; Demo B2B
          </button>
        </div>
      </div>
    </div>
  );
};
