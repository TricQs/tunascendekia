import { HotsTopic, PillarCardData, FeatureCardData, PricingCardData, FaqItemData } from '../types';

export const HOTS_TOPICS: HotsTopic[] = [
  {
    id: 'math',
    label: 'Matematika OSN',
    tag: '⚡ VISUAL PROOF • ALJABAR GEOMETRI OSN',
    level: 'Level: OSN & TKA',
    question:
      'Mengapa a² − b² = (a + b)(a − b)? Gunakan bukti geometri visual untuk menghitung 2026² − 2024² tanpa perkalian bersusun!',
    algorithmName: 'Transformasi Geometri Selisih Dua Kuadrat',
    finalAnswer: '2026² − 2024² = 4050 × 2 = 8.100',
    steps: [
      {
        stepNumber: 1,
        title: '1. Bangun Persegi Utuh Bersisi a (Luas a²)',
        formula: 'Luas Awal = a × a = a²',
        explanation:
          'Mulai dengan persegi biru bersisi a. Panjang sisi atas dan samping masing-masing adalah a.',
        highlightBadge: 'Langkah 1/4 • Persegi a²',
      },
      {
        stepNumber: 2,
        title: '2. Potong Persegi Kecil Bersisi b di Pojok (Luas −b²)',
        formula: 'Luas Sisa = a² − b²  (Sisi tegak tersisa: a − b)',
        explanation:
          'Kurangi dengan persegi kuning bersisi b di pojok kanan bawah. Lebar sisa di sisi kanan menjadi (a − b).',
        highlightBadge: 'Langkah 2/4 • Kurangi b²',
      },
      {
        stepNumber: 3,
        title: '3. Pisahkan & Putar Potongan Bawah Sebesar 90°',
        formula: 'Luas = a(a − b) + b(a − b)',
        explanation:
          'Potong persegi panjang bawah berukuran b × (a − b), lalu putar dan geser secara visual ke sebelah kanan.',
        highlightBadge: 'Langkah 3/4 • Rotasi & Translasi',
      },
      {
        stepNumber: 4,
        title: '4. Satukan Menjadi Persegi Panjang (a + b) × (a − b)',
        formula: 'a² − b² = (a + b)(a − b)  ⇒  (2026+2024)(2026−2024) = 8.100',
        explanation:
          'Kedua bagian menyatu sempurna menjadi persegi panjang dengan panjang (a + b) dan tinggi (a − b).',
        highlightBadge: 'Langkah 4/4 • Terbukti Visual!',
      },
    ],
  },
  {
    id: 'science',
    label: 'Fisika & Sains',
    tag: '🔬 VISUAL PROOF • KINEMATIKA & INTEGRAL LUAS',
    level: 'Level: OSN Fisika',
    question:
      'Mengapa jarak henti benda yang melambat beraturan dari kecepatan v₀ selama waktu t adalah ½ · v₀ · t? Buktikan lewat geometri luas!',
    algorithmName: 'Transformasi Setengah Jumlah Sisi (Rata-Rata Kecepatan)',
    finalAnswer: 'Jarak Tempuh (Δx) = ½ · v₀ · t',
    steps: [
      {
        stepNumber: 1,
        title: '1. Plot Kurva Kecepatan v₀ Terhadap Waktu t',
        formula: 'Luas Grafik v-t = Jarak Tempuh (Δx)',
        explanation:
          'Kecepatan turun linier dari v₀ hingga 0 selama waktu t, membentuk bidang segitiga siku-siku.',
        highlightBadge: 'Langkah 1/4 • Grafik v-t',
      },
      {
        stepNumber: 2,
        title: '2. Ambil Setengah Tinggi Kecepatan (½ v₀)',
        formula: 'Tinggi Rata-Rata = ½ · v₀',
        explanation:
          'Tarik garis potong mendatar tepat di setengah tinggi segitiga (½ v₀) untuk membagi puncak segitiga.',
        highlightBadge: 'Langkah 2/4 • Garis Potong ½ v₀',
      },
      {
        stepNumber: 3,
        title: '3. Putar Puncak Segitiga 180° ke Sisi Kanan',
        formula: 'Transformasi Luas Segitiga → Persegi Panjang',
        explanation:
          'Segitiga kecil di atas garis ½ v₀ diputar 180° dan digeser menutup celah kosong di sebelah kanan.',
        highlightBadge: 'Langkah 3/4 • Rotasi Puncak',
      },
      {
        stepNumber: 4,
        title: '4. Terbentuk Persegi Panjang Utuh (t × ½ v₀)',
        formula: 'Δx = Lebar × Tinggi = t × (½ v₀) = ½ · v₀ · t',
        explanation:
          'Tanpa menghafal rumus integral, terlihat jelas bahwa luas segitiga kecepatan sama persis dengan persegi panjang t × ½v₀.',
        highlightBadge: 'Langkah 4/4 • Terbukti Visual!',
      },
    ],
  },
  {
    id: 'tka',
    label: 'Penalaran TKA',
    tag: '🧠 VISUAL PROOF • DERET GEOMETRI TAK HINGGA',
    level: 'Level: TKA Kuantitatif',
    question:
      'Berapakah nilai eksak dari ½ + ¼ + ⅛ + 1/16 + ... hingga tak hingga? Buktikan tanpa rumus deret melalui partisi persegi!',
    algorithmName: 'Partisi Rekursif Persegi Satuan 1 × 1',
    finalAnswer: 'Total Jumlah Deret = 1 Satuan Utuh',
    steps: [
      {
        stepNumber: 1,
        title: '1. Ambil Setengah Bagian Pertama (Luas = ½)',
        formula: 'S₁ = ½   (Sisa ruang kosong = ½)',
        explanation:
          'Sebuah persegi berukuran 1 × 1 dibagi dua. Blok biru mengisi tepat setengah bagian kiri.',
        highlightBadge: 'Langkah 1/4 • Partisi 1/2',
      },
      {
        stepNumber: 2,
        title: '2. Tambahkan Setengah dari Sisa Ruang (Luas + ¼)',
        formula: 'S₂ = ½ + ¼ = ¾   (Sisa ruang kosong = ¼)',
        explanation:
          'Sisa ruang di kanan dibagi dua lagi secara mendatar. Blok kuning mengisi ¼ bagian dari persegi utuh.',
        highlightBadge: 'Langkah 2/4 • Partisi +1/4',
      },
      {
        stepNumber: 3,
        title: '3. Lanjutkan Pembelahan Separuh Sisa (+ ⅛ + 1/16)',
        formula: 'S₄ = ½ + ¼ + ⅛ + 1/16 = 15/16',
        explanation:
          'Setiap suku baru selalu mengisi tepat separuh dari celah yang tersisa secara berulang.',
        highlightBadge: 'Langkah 3/4 • Partisi +1/8 + 1/16',
      },
      {
        stepNumber: 4,
        title: '4. Konvergensi Penuh Menutup Persegi 1 × 1',
        formula: '½ + ¼ + ⅛ + 1/16 + ... = 1',
        explanation:
          'Celah sisa mengecil menuju nol sehingga seluruh potongan menyatu menjadi tepat 1 persegi utuh.',
        highlightBadge: 'Langkah 4/4 • Konvergen = 1',
      },
    ],
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
