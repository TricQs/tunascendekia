import { HotsTopic, PillarCardData, FeatureCardData, PricingCardData, FaqItemData } from '../types';

export const HOTS_TOPICS: HotsTopic[] = [
  {
    id: 'math',
    label: 'Matematika OSN',
    tag: '⚡ BEDAH SOAL HOTS • TEORI BILANGAN',
    level: 'Level: OSN Provinsi',
    question: 'Tentukan banyaknya pasangan bilangan bulat positif (a, b) sehingga KPK(a, b) + FPB(a, b) = a · b − 2026.',
    stepHtml: '<strong>Konsep Kunci (Bukan Hafalan):</strong> Misalkan d = FPB(a, b), maka a = d·x dan b = d·y dengan FPB(x, y) = 1. Substitusi menghasilkan faktorisasi aljabar terstruktur: <strong>(d·x − 1)(d·y − 1) = d·x·y − d + 1</strong>.',
  },
  {
    id: 'science',
    label: 'Fisika & Sains',
    tag: '🔬 BEDAH SOAL HOTS • MEKANIKA & ENERGI',
    level: 'Level: OSN Kota / Provinsi',
    question: 'Sebuah balok bermassa m meluncur tanpa gesekan pada lintasan lengkung lalu memasuki bidang kasar dengan koefisien gesek μ(x) = μ₀·x. Tentukan jarak henti maksimum!',
    stepHtml: '<strong>Konsep Kunci (Deep Concept):</strong> Gunakan Teorema Usaha-Energi dengan integrasi gaya non-konservatif: <strong>m·g·h = ∫ μ₀·x·m·g dx = ½ μ₀·m·g·x²</strong>, menghasilkan <strong>x = √(2h / μ₀)</strong>.',
  },
  {
    id: 'tka',
    label: 'Penalaran TKA',
    tag: '🧠 BEDAH SOAL HOTS • PENALARAN KUANTITATIF TKA',
    level: 'Level: Seleksi Unggulan & PTN',
    question: 'Jika rasio efisiensi panel A dan B adalah 3 : 5 sementara laju degradasi tahunannya masing-masing 4% dan 10%, pada tahun ke berapa output keduanya setara?',
    stepHtml: '<strong>Konsep Kunci (Nalar Analitis):</strong> Pemodelan diskrit eksponensial <strong>3·(0,96)ⁿ = 5·(0,90)ⁿ</strong> diselesaikan dengan perbandingan rasio logaritmik cepat tanpa kalkulator.',
  },
];

export const PILLARS_DATA: PillarCardData[] = [
  {
    id: 'SD',
    title: 'Jenjang SD (Kelas 4–6)',
    badge: 'Fondasi Eksplorasi',
    description: 'Fondasi nalar logika, eksplorasi Matematika & IPA Olimpiade, serta persiapan seleksi SMP unggulan.',
  },
  {
    id: 'SMP',
    title: 'Jenjang SMP (Kelas 7–9)',
    badge: 'Akselerasi Kompetisi',
    description: 'Pendalaman konsep Matematika, IPA (Fisika/Biologi), dan IPS tingkat Kabupaten hingga Nasional serta TKA SMA favorit.',
  },
  {
    id: 'SMA',
    title: 'Jenjang SMA (Kelas 10–12)',
    badge: 'Puncak Prestasi & PTN',
    description: 'Pembinaan intensif 9 bidang OSN SMA dan penguasaan TKA Saintek/Soshum untuk tiket emas menuju PTN impian.',
  },
];

export const FEATURES_DATA: FeatureCardData[] = [
  {
    number: 'Fitur 01',
    title: 'Live Interactive Mentoring via Zoom',
    description: 'Sesi tatap muka virtual dua arah bersama mentor peraih medali OSN. Siswa bebas bertanya, berdiskusi, dan membedah soal secara real-time.',
    benefit: '💡 Manfaat: Paham konsep dari akar, bukan sekadar menghafal rumus instan.',
    iconType: 'zoom',
  },
  {
    number: 'Fitur 02',
    title: 'Kurikulum & Bank Soal HOTS Bertingkat',
    description: 'Modul digital eksklusif yang disusun dari tingkat Basic, Intermediate, hingga Advanced sesuai silabus resmi OSN Tingkat Kota (OSN-K), Provinsi (OSN-P), dan Nasional.',
    benefit: '📈 Manfaat: Melatih ketajaman logika bertahap tanpa membuat siswa merasa kewalahan.',
    iconType: 'curriculum',
  },
  {
    number: 'Fitur 03',
    title: 'Small Class (10–15 Siswa) & Klinik Soal',
    description: 'Kuota kelas dibatasi ketat maksimal 15 siswa, dilengkapi sesi Klinik Soal khusus setiap akhir pekan untuk membahas PR atau materi yang belum dikuasai.',
    benefit: '🎯 Manfaat: Perhatian mentor merata dan tidak ada siswa yang tertinggal materi.',
    iconType: 'class',
  },
  {
    number: 'Fitur 04',
    title: 'Simulasi CBT & Laporan Diagnostik Berkala',
    description: 'Try-out rutin berbasis Computer-Based Test (CBT) dengan sistem penilaian standar kompetisi nasional, lengkap dengan rapor analitik.',
    benefit: '📊 Manfaat: Orang tua dapat memantau grafik perkembangan dan kesiapan anak secara transparan.',
    iconType: 'cbt',
  },
];

export const PRICING_DATA: PricingCardData[] = [
  {
    id: 'reguler',
    name: 'Paket Tunas Reguler',
    target: 'Target: Persiapan Dasar TKA & Pengenalan Olimpiade',
    priceMain: 'Rp 350.000 / bulan',
    priceSub: '(atau Rp 1.500.000 / semester)',
    features: [
      '2x Sesi Live Zoom per Minggu (@90 Menit)',
      'Kelas Kecil (Maksimal 15 Siswa)',
      'Akses Modul Digital & Rekaman Kelas',
      '1x Simulasi CBT & Rapor Bulanan',
      'Grup Diskusi Materi bersama Mentor',
    ],
    ctaText: 'Pilih Paket Reguler',
    buttonVariant: 'navy',
  },
  {
    id: 'intensif',
    name: 'Paket Cendekia Intensif',
    target: 'Target: Persiapan Penuh Seleksi OSN-K, OSN-P & TKA Unggulan',
    priceMain: 'Rp 1.850.000 / semester',
    priceSub: '(Hemat Rp 550.000)',
    features: [
      '3x Sesi Live Zoom per Minggu (@90 Menit)',
      'Kelas Eksklusif (Maksimal 12 Siswa)',
      'Akses Penuh Bank Soal HOTS (Basic–Advanced)',
      'Sesi Klinik Soal & Konsultasi Mingguan',
      '2x Simulasi CBT per Bulan + Analisis Diagnostik Detail',
      'E-Sertifikat Pembinaan Resmi',
    ],
    ctaText: 'Daftar Paket Intensif',
    featured: true,
    popularRibbon: '⭐ PALING POPULER / BEST VALUE',
    buttonVariant: 'primary',
  },
  {
    id: 'bootcamp',
    name: 'Bootcamp Karantina Juara',
    target: 'Target: Program Kilat H-30 Jelang Kompetisi OSN / Ujian TKA',
    priceMain: 'Rp 950.000 / program',
    priceSub: '(1 Bulan Intensif)',
    features: [
      '5x Sesi Drilling Soal Prediksi via Zoom per Minggu',
      'Kelas Mikro (Maksimal 10 Siswa)',
      'Bedah Soal OSN/TKA 5 Tahun Terakhir',
      '4x Try-Out Akbar CBT Nasional + Ranking Nasional',
      'Sesi Strategi Manajemen Waktu & Mental Kompetisi',
    ],
    ctaText: 'Amankan Kuota Bootcamp',
    buttonVariant: 'gold',
  },
];

export const FAQ_DATA: FaqItemData[] = [
  {
    id: 1,
    question: 'Apakah anak saya yang belum pernah ikut olimpiade bisa mendaftar?',
    answer:
      'Tentu bisa. Setiap siswa baru akan mengikuti Diagnostic Test awal gratis untuk memetakan kemampuan dasar. Kurikulum kami disusun berjenjang mulai dari level Basic hingga Advanced, sehingga siswa pemula akan dibimbing dari konsep paling mendasar.',
  },
  {
    id: 2,
    question: 'Bagaimana jika siswa berhalangan hadir pada jadwal kelas Live Zoom?',
    answer:
      'Setiap sesi Live Zoom direkam secara otomatis dan diunggah ke dashboard belajar siswa maksimal 2 jam setelah kelas selesai. Siswa tetap bisa menonton ulang rekaman dan menanyakan materi yang belum dipahami pada sesi Klinik Soal akhir pekan.',
  },
  {
    id: 3,
    question: 'Siapa saja pengajar atau mentor di TunasCendekia?',
    answer:
      'Tim pengajar kami terdiri dari mahasiswa berprestasi dan alumni peraih medali Olimpiade Sains Nasional (OSN) serta kompetisi internasional dari PTN terbaik di Indonesia yang telah melewati seleksi pedagogi ketat.',
  },
  {
    id: 4,
    question: 'Bagaimana cara orang tua memantau perkembangan belajar anak?',
    answer:
      'Orang tua akan menerima Laporan Diagnostik Berkala setiap bulan melalui email dan WhatsApp yang memuat tingkat kehadiran, skor simulasi CBT, pemetaan penguasaan materi, serta catatan evaluasi personal dari mentor.',
  },
  {
    id: 5,
    question: 'Perangkat apa saja yang dibutuhkan untuk mengikuti kelas?',
    answer:
      'Siswa cukup menggunakan laptop, PC, atau tablet yang terhubung dengan koneksi internet stabil serta aplikasi Zoom. Seluruh modul dan simulasi CBT dapat diakses langsung melalui browser tanpa instalasi software tambahan yang berat.',
  },
];

