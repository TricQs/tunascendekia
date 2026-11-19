import {
  B2BPricingTier,
  FaqItemData,
  LmsModuleFeature,
  PortalComparisonRow,
  StrategicStoryCard,
} from '../types';

export const STRATEGIC_STORY_CARDS: StrategicStoryCard[] = [
  {
    id: 'problem',
    tag: '01 | Problem Statement',
    title: 'Portal Akademik Konvensional Sering Kaku & Membatasi Aktivitas Belajar',
    body: 'Banyak portal kampus maupun sekolah memiliki UI/UX yang lambat, batas unggah tugas kecil (sekitar 10 MB), notifikasi pesan yang hilang sebelum dibalas, kewajiban antre scan QR presensi, hingga tidak adanya arsip otomatis rekaman perkuliahan.',
    accentTheme: 'navy',
    illustrationKey: 'problem',
  },
  {
    id: 'vision',
    tag: '02 | Our Vision',
    title: 'Mewujudkan Ekosistem Kampus & Sekolah Digital Terpadu',
    body: 'Membangun platform Learning Management System (LMS) berstandar modern yang menggantikan portal terpisah-pisah menjadi satu ruang kerja kolaboratif antara mahasiswa, dosen, pembimbing skripsi, dan admin akademik.',
    highlightText: 'Satu sistem terpadu untuk perkuliahan, pengumpulan tugas, presensi, dan bimbingan.',
    accentTheme: 'emerald',
    illustrationKey: 'vision',
  },
  {
    id: 'opportunity',
    tag: '03 | The Opportunity (B2B)',
    title: 'Transformasi Digital Perguruan Tinggi & Sekolah Modern',
    body: 'Institusi pendidikan membutuhkan sistem yang fleksibel disesuaikan dengan kapasitas pengguna (1.000 hingga 100.000+ akun aktif), siap terhubung dengan SIAKAD/SSO, serta mudah digunakan tanpa pelatihan rumit.',
    accentTheme: 'gold',
    illustrationKey: 'opportunity',
  },
  {
    id: 'solution',
    tag: '04 | Our Solution',
    title: 'TunasCendekia LMS: Workspace Cerdas Berbasis Cloud',
    body: 'Platform B2B SaaS dengan upload hingga 2 GB per file (hingga Unlimited Cloud), notifikasi chat persisten layaknya workspace pesan, auto-upload rekaman kuliah ke linimasa, presensi tanpa QR, dan penjadwalan bimbingan otomatis.',
    accentTheme: 'navy',
    illustrationKey: 'solution',
  },
];

export const PORTAL_COMPARISON_ROWS: PortalComparisonRow[] = [
  {
    aspect: 'Antarmuka & Pengalaman (UI/UX)',
    legacyPortal: 'Menu tersebar di banyak tab statis dan kurang nyaman di layar ponsel.',
    tunasCendekiaLms: 'Workspace terpadu bersih, responsif di desktop maupun smartphone.',
  },
  {
    aspect: 'Chat & Notifikasi Diskusi',
    legacyPortal: 'Notifikasi hilang otomatis setelah pesan dibuka, meski belum sempat dibalas.',
    tunasCendekiaLms: 'Notifikasi persisten: badge "Perlu Balasan" tetap aktif sampai respons terkirim.',
  },
  {
    aspect: 'Kapasitas Upload Tugas & Proyek',
    legacyPortal: 'Batas sempit (~10 MB), sering gagal saat mengunggah video, desain, atau dataset.',
    tunasCendekiaLms: 'Mendukung upload hingga 2 GB per file hingga opsi penyimpanan Unlimited Cloud.',
  },
  {
    aspect: 'Arsip Rekaman Perkuliahan',
    legacyPortal: 'Tautan rekaman tercecer di chat grup dan sering kedaluwarsa.',
    tunasCendekiaLms: 'Setiap sesi mengajar otomatis tersimpan dan terindeks rapi di linimasa kelas.',
  },
  {
    aspect: 'Sistem Presensi Mahasiswa/Siswa',
    legacyPortal: 'Bergantung pada scan QR manual di layar kelas atau input satu per satu.',
    tunasCendekiaLms: 'Smart Session & Geo-Check-In 1-klik tervalidasi tanpa antre scan QR.',
  },
  {
    aspect: 'Penjadwalan Bimbingan & Skripsi',
    legacyPortal: 'Harus membuat janji manual lewat WhatsApp pribadi dosen.',
    tunasCendekiaLms: 'Sinkronisasi kalender bimbingan otomatis langsung di dalam sistem LMS.',
  },
];

export const LMS_FEATURES_DATA: LmsModuleFeature[] = [
  {
    id: 'persistent-chat',
    number: 'Modul 01',
    title: 'Smart Chat & Persistent Unread Notification',
    description:
      'Komunikasi akademik terstruktur per mata kuliah dan bimbingan. Pesan yang baru dibaca tanpa balasan tetap ditandai status aktif agar dosen maupun mahasiswa tidak lupa menindaklanjuti.',
    benefitText: 'Menghilangkan miskomunikasi tugas dan mempercepat alur tanya-jawab kelas.',
    iconKey: 'chat',
  },
  {
    id: 'cloud-upload-2gb',
    number: 'Modul 02',
    title: 'High-Capacity Cloud Upload (Hingga 2 GB/File)',
    description:
      'Mahasiswa dapat mengunggah laporan, video presentasi, aplikasi tugas akhir, hingga dataset berukuran hingga 2 GB per berkas langsung ke penyimpanan cloud LMS dengan pelacakan versi.',
    benefitText: 'Bebas kendala batasan 10 MB saat pengumpulan proyek dan tugas praktikum.',
    iconKey: 'cloud',
  },
  {
    id: 'auto-recording',
    number: 'Modul 03',
    title: 'Automated Lecture Recording Library',
    description:
      'Rekaman pertemuan sinkron otomatis diunggah ke halaman mata kuliah masing-masing beserta penanda topik pertemuan, memudahkan mahasiswa mengulas materi sebelum ujian.',
    benefitText: 'Dosen tidak perlu mengunggah ulang video secara manual di akhir kelas.',
    iconKey: 'video',
  },
  {
    id: 'smart-attendance',
    number: 'Modul 04',
    title: 'Smart Session Attendance (Tanpa Antre QR)',
    description:
      'Menggantikan pemindaian QR konvensional dengan check-in tervalidasi sesi kelas aktif, geolokasi kampus, serta log partisipasi otomatis yang langsung masuk ke rekap nilai kehadiran.',
    benefitText: 'Menghemat waktu awal kelas dan mencegah kecurangan titip presensi.',
    iconKey: 'attendance',
  },
  {
    id: 'auto-advising',
    number: 'Modul 05',
    title: 'Integrated Thesis & Consultation Scheduler',
    description:
      'Sistem otomatis mencocokkan slot waktu kosong dosen pembimbing dan mahasiswa untuk bimbingan skripsi atau konsultasi akademik lengkap dengan catatan revisi terpusat.',
    benefitText: 'Tanpa perlu janjian manual melalui WhatsApp pribadi di luar jam kerja.',
    iconKey: 'calendar',
  },
  {
    id: 'b2b-security',
    number: 'Modul 06',
    title: 'Multi-Role Access, SSO & Integrasi SIAKAD',
    description:
      'Arsitektur siap skala institusi dengan hak akses terpisah untuk Mahasiswa, Dosen/Guru, Kaprodi, dan Admin IT Kampus beserta integrasi API SIAKAD serta Single Sign-On.',
    benefitText: 'Skalabel dari 1.000 pengguna hingga 100.000+ akun kampus tanpa downtime.',
    iconKey: 'shield',
  },
];

export const SYSTEM_GUARANTEES: string[] = [
  'Upload file besar hingga 2 GB / Unlimited',
  'Chat notifikasi persisten sebelum dibalas',
  'Rekaman kuliah otomatis masuk linimasa',
  'Bimbingan & presensi terintegrasi penuh',
];

export const formatRupiah = (amount: number): string =>
  `Rp ${amount.toLocaleString('id-ID')}`;

export const B2B_PRICING_TIERS: B2BPricingTier[] = [
  {
    id: 'paket-a',
    codeLabel: 'PAKET A • STARTER',
    name: 'Starter Institusi & Sekolah',
    targetInstitution:
      'Dirancang untuk sekolah menengah, akademi, atau program studi dengan skala hingga 1.000 pengguna aktif.',
    userLimitLabel: 'Maks. 1.000 Pengguna Aktif',
    uploadLimitLabel: 'Upload File hingga 2 GB / berkas',
    storagePoolLabel: '20 GB per Prodi / 200 GB Pool Cloud',
    monthlyPriceRp: 4500000,
    annualPriceRp: 45000000,
    highlights: [
      'Workspace LMS modern responsif (Web & Mobile Browser)',
      'Chat kelas dengan notifikasi persisten (tetap aktif hingga dibalas)',
      'Upload tugas besar hingga 2 GB per file + Auto-Archive Rekaman',
      'Presensi pintar Non-QR otomatis untuk seluruh sesi kelas',
    ],
    ctaLabel: 'Pilih Paket A (1.000 User)',
    tone: 'teal',
  },
  {
    id: 'paket-b',
    codeLabel: 'PAKET B • CAMPUS PRO',
    name: 'Enterprise Kampus & Universitas',
    targetInstitution:
      'Solusi lengkap bagi perguruan tinggi berkembang untuk menggantikan portal akademik konvensional secara menyeluruh.',
    userLimitLabel: 'Maks. 10.000 Pengguna Aktif',
    uploadLimitLabel: 'Upload Tugas & Media > 2 GB / berkas',
    storagePoolLabel: 'Unlimited Cloud Storage Institusi',
    monthlyPriceRp: 14500000,
    annualPriceRp: 145000000,
    featured: true,
    badgeLabel: 'Rekomendasi Kampus',
    highlights: [
      'Semua fitur Paket A + Unlimited Cloud Storage untuk rekaman & tugas',
      'Modul Penjadwalan Bimbingan Skripsi Otomatis terhubung ke Dosen',
      'Dashboard Analitik Retensi Mahasiswa, Nilai & Kehadiran Real-Time',
      'Dukungan teknis prioritas & pelatihan onboarding dosen',
    ],
    ctaLabel: 'Pilih Paket B (10.000 User)',
    tone: 'emerald',
  },
  {
    id: 'paket-custom',
    codeLabel: 'CUSTOMIZE • SKALA BESAR',
    name: 'Institutional Custom Scale',
    targetInstitution:
      'Untuk universitas besar (misal 50.000 - 100.000+ mahasiswa aktif) yang membutuhkan integrasi SIAKAD & arsitektur khusus.',
    userLimitLabel: '10.000 hingga 100.000+ Pengguna',
    uploadLimitLabel: 'Kapasitas Upload Kustom (> 5 GB / berkas)',
    storagePoolLabel: 'Dedicated Cloud / On-Premise Kampus',
    monthlyPriceRp: null,
    annualPriceRp: null,
    customPriceNote: 'Terbuka untuk Diskusi & Penyesuaian Anggaran',
    highlights: [
      'Kapasitas dan fitur dapat di-customize penuh sesuai kebutuhan institusi',
      'Integrasi API langsung dengan SIAKAD, PDDIKTI, & Single Sign-On (SSO)',
      'White-label domain & identitas visual resmi milik kampus/yayasan',
      'Tim IT engineer khusus untuk migrasi data dari portal lama',
    ],
    ctaLabel: 'Diskusikan Paket Custom',
    tone: 'navy',
  },
];

export const FAQ_DATA: FaqItemData[] = [
  {
    id: 1,
    question: 'Bagaimana notifikasi chat di TunasCendekia LMS berbeda dari portal kampus biasa?',
    answer:
      'Pada banyak portal lama, notifikasi pesan langsung hilang saat chat dibuka meskipun dosen atau mahasiswa belum sempat membalas. Di TunasCendekia LMS, setiap pesan yang belum mendapat balasan tetap mempertahankan indikator "Perlu Balasan" sehingga komunikasi bimbingan selalu tuntas.',
  },
  {
    id: 2,
    question: 'Apakah benar sistem mendukung upload tugas hingga 2 GB dan bagaimana keamanan servernya?',
    answer:
      'Ya. Berkas besar seperti video demo aplikasi, file desain CAD, maupun dataset tugas akhir dikirim melalui unggahan bertahap (chunked cloud upload) hingga 2 GB pada Paket A dan kapasitas Unlimited pada Paket B, lengkap dengan pemindaian format dan enkripsi penyimpanan.',
  },
  {
    id: 3,
    question: 'Bagaimana cara kerja presensi tanpa harus scan QR di dalam kelas?',
    answer:
      'Presensi dijalankan melalui verifikasi sesi kuliah aktif dikombinasikan dengan geolokasi jaringan/area kelas atau aktivitas langsung saat mengikuti kelas daring, sehingga mahasiswa tidak perlu antre memindai QR sambil tetap menjaga validitas kehadiran.',
  },
  {
    id: 4,
    question: 'Bagaimana alur bimbingan skripsi atau konsultasi akademik tanpa WhatsApp manual?',
    answer:
      'Dosen cukup mengatur ketersediaan jam bimbingan di kalender LMS. Mahasiswa memilih slot yang masih kosong secara mandiri di dalam sistem, mengunggah berkas revisi, dan sistem mengirimkan pengingat otomatis kepada kedua pihak.',
  },
  {
    id: 5,
    question: 'Apakah kampus dengan 50.000 hingga 100.000+ mahasiswa bisa menyesuaikan fitur dan harga?',
    answer:
      'Bisa. Kami menyediakan Paket Customize bagi institusi berkapasitas besar yang ingin menyesuaikan jumlah pengguna aktif, integrasi database SIAKAD existing, SSO kampus, serta skema lisensi tahunan melalui diskusi langsung dengan tim pengembang kami.',
  },
];
