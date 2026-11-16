import {
  FaqItemData,
  FeatureCardData,
  PainPointItem,
  ProgramCatalogItem,
  SandboxProblemSet,
  StrategicStoryCard,
  TrackOverviewData,
} from '../types';

export const SANDBOX_PROBLEMS: SandboxProblemSet[] = [
  {
    level: 'SD',
    tabLabel: 'SD (Kelas 4-6)',
    gradeRangeLabel: 'SD Kelas 4-6',
    trackLabel: 'TKA & Olimpiade SD',
    conceptTitle: 'Visual Learning: Pola Ubin Ganjil Membentuk Persegi',
    parameterLabel: 'Jumlah Lapis Ubin (k)',
    parameterUnit: 'lapis',
    parameterMin: 2,
    parameterMax: 5,
    parameterDefault: 4,
    stages: [
      {
        stageNumber: 1,
        shortLabel: '1. Pisah Lapisan',
        title: 'Tahap 1: Urai Deret Bilangan Ganjil',
        highlightBadge: 'Visual Barisan',
        explanation:
          'Konsep dasar dijelaskan lewat bentuk visual konkret: setiap bilangan ganjil (1, 3, 5, ...) disusun sebagai baris ubin bertingkat.',
      },
      {
        stageNumber: 2,
        shortLabel: '2. Lipat Siku L',
        title: 'Tahap 2: Susun Menjadi Siku-Siku (L-Tile)',
        highlightBadge: 'Pola Logika',
        explanation:
          'Setiap lapisan ganjil baru tepat membungkus dua sisi persegi sebelumnya sehingga membentuk bangun siku yang mudah dilihat anak.',
      },
      {
        stageNumber: 3,
        shortLabel: '3. Persegi k x k',
        title: 'Tahap 3: Terbukti Luas Membentuk Persegi k x k',
        highlightBadge: 'Paham Konsep',
        explanation:
          'Jumlah k bilangan ganjil pertama selalu membentuk persegi utuh k x k. Siswa paham polanya tanpa menghafal rumus.',
      },
    ],
    challengeQuestion:
      'Jika lapisan ganjil ke-8 memiliki 15 ubin (k = 8 lapis), berapakah total seluruh ubin yang terbentuk?',
    challengeOptions: [
      {
        id: 'sd-a',
        label: '56 ubin',
        isCorrect: false,
        feedbackHint:
          'Perhatikan bentuk persegi penuh saat k = 8: panjang kedua sisinya sama panjang, bukan 7 x 8.',
      },
      {
        id: 'sd-b',
        label: '64 ubin',
        isCorrect: true,
        feedbackHint: '',
      },
      {
        id: 'sd-c',
        label: '72 ubin',
        isCorrect: false,
        feedbackHint:
          'Geser pengatur k di atas dan amati hubungan banyaknya lapis dengan ukuran persegi k x k.',
      },
    ],
    correctExplanation:
      'Tepat. Delapan lapis ubin ganjil membentuk persegi berukuran 8 x 8 sehingga totalnya 64 ubin.',
  },
  {
    level: 'SMP',
    tabLabel: 'SMP (Kelas 7-9)',
    gradeRangeLabel: 'SMP Kelas 7-9',
    trackLabel: 'Olimpiade & TKA SMP',
    conceptTitle: 'Visual Learning: Pembuktian a² - b² = (a + b)(a - b)',
    parameterLabel: 'Ukuran Potongan (b)',
    parameterUnit: 'cm',
    parameterMin: 2,
    parameterMax: 6,
    parameterDefault: 4,
    stages: [
      {
        stageNumber: 1,
        shortLabel: '1. Bangun Awal a²',
        title: 'Tahap 1: Tinjau Persegi Utuh Berukuran a x a',
        highlightBadge: 'Konsep Luas',
        explanation:
          'Mulai dari persegi besar bersisi a = 10 cm sehingga luas awal bernilai 100 cm persegi.',
      },
      {
        stageNumber: 2,
        shortLabel: '2. Potong Sudut b²',
        title: 'Tahap 2: Pisahkan Persegi Kecil b² di Sudut Kanan',
        highlightBadge: 'Strategi Visual',
        explanation:
          'Membuang persegi kecil b x b menyisakan daerah berbentuk huruf L. Kita pisahkan potongan bawah selebar (a - b) x b.',
      },
      {
        stageNumber: 3,
        shortLabel: '3. Putar & Gabung',
        title: 'Tahap 3: Putar 90 Derajat Menjadi (a + b)(a - b)',
        highlightBadge: 'Inti Materi',
        explanation:
          'Potongan bawah diputar lalu digabungkan ke sisi kanan hingga membentuk persegi panjang (a + b) kali (a - b).',
      },
    ],
    challengeQuestion:
      'Gunakan strategi potongan luas untuk menghitung nilai 53 kuadrat dikurangi 47 kuadrat secara cepat:',
    challengeOptions: [
      {
        id: 'smp-a',
        label: '300',
        isCorrect: false,
        feedbackHint:
          'Jumlahkan dahulu kedua bilangan (53 + 47 = 100), lalu kalikan dengan selisihnya (53 - 47).',
      },
      {
        id: 'smp-b',
        label: '600',
        isCorrect: true,
        feedbackHint: '',
      },
      {
        id: 'smp-c',
        label: '1.000',
        isCorrect: false,
        feedbackHint:
          'Selisih antara 53 dan 47 bernilai 6, bukan 10. Kalikan 100 dengan selisih yang tepat.',
      },
    ],
    correctExplanation:
      'Benar. Dengan visualisasi (53 + 47)(53 - 47) = 100 x 6 = 600, soal nonrutin terselesaikan dalam hitungan detik.',
  },
  {
    level: 'SMA',
    tabLabel: 'SMA (Kelas 10-12)',
    gradeRangeLabel: 'SMA Kelas 10-12',
    trackLabel: 'OSN Fisika & TKA Saintek',
    conceptTitle: 'Visual Learning: Ekuivalensi Luas Grafik Kecepatan v-t',
    parameterLabel: 'Kecepatan Awal (v₀)',
    parameterUnit: 'm/s',
    parameterMin: 4,
    parameterMax: 12,
    parameterDefault: 8,
    stages: [
      {
        stageNumber: 1,
        shortLabel: '1. Grafik v-t',
        title: 'Tahap 1: Amati Luas Segitiga di Bawah Kurva v-t',
        highlightBadge: 'Penalaran Ilmiah',
        explanation:
          'Selama perlambatan tetap t = 8 detik, jarak tempuh benda sama dengan luas daerah segitiga di bawah grafik.',
      },
      {
        stageNumber: 2,
        shortLabel: '2. Belah 1/2 v₀',
        title: 'Tahap 2: Bagi Tepat di Kecepatan Tengah (1/2 v₀)',
        highlightBadge: 'Analisis Kurva',
        explanation:
          'Pemotongan di setengah kecepatan awal memudahkan siswa melihat transformasi bentuk tanpa hafalan rumus.',
      },
      {
        stageNumber: 3,
        shortLabel: '3. Persegi Panjang',
        title: 'Tahap 3: Putar Puncak 180 Derajat Jadi Luas t x (1/2 v₀)',
        highlightBadge: 'Simpulan Visual',
        explanation:
          'Bagian atas segitiga tepat mengisi sisi kanan membentuk persegi panjang berukuran alas t dan tinggi 1/2 v₀.',
      },
    ],
    challengeQuestion:
      'Sebuah benda direm beraturan dari v₀ = 18 m/s hingga berhenti dalam t = 6 detik. Berapakah jarak tempuhnya?',
    challengeOptions: [
      {
        id: 'sma-a',
        label: '36 meter',
        isCorrect: false,
        feedbackHint:
          'Setengah dari 18 m/s bernilai 9 m/s. Kalikan 9 m/s dengan selang waktu 6 detik.',
      },
      {
        id: 'sma-b',
        label: '54 meter',
        isCorrect: true,
        feedbackHint: '',
      },
      {
        id: 'sma-c',
        label: '108 meter',
        isCorrect: false,
        feedbackHint:
          '108 meter merupakan luas persegi penuh v₀ x t. Tinggi persegi panjang ekuivalen hanya setengahnya.',
      },
    ],
    correctExplanation:
      'Tepat. Luas persegi panjang ekuivalen memiliki tinggi 1/2 x 18 = 9 m/s dan waktu 6 s, menghasilkan 54 meter.',
  },
];

export const STRATEGIC_STORY_CARDS: StrategicStoryCard[] = [
  {
    id: 'problem',
    tag: '01 | Problem Statement',
    title: 'Kesenjangan Pembinaan Kompetisi di Sekolah & Bimbel Umum',
    body: 'Banyak siswa berprestasi kesulitan menemukan bimbingan terarah untuk kompetisi TKA & OSN. Sekolah memiliki keterbatasan waktu dan tenaga pelatih ahli, sementara bimbel umum hanya berfokus pada kurikulum reguler tanpa pemahaman konsep mendalam.',
    accentTheme: 'navy',
    illustrationKey: 'problem',
  },
  {
    id: 'vision',
    tag: '02 | Our Vision',
    title: 'Pemerataan Akses Pembinaan Prestasi Nasional',
    body: 'Mewujudkan pemerataan akses pembinaan prestasi akademik berkualitas di seluruh Indonesia, mengantar siswa berbakat meraih medali dan menembus sekolah serta perguruan tinggi impian.',
    highlightText: 'Fokus kami: nalar kuat, percaya diri, dan prestasi nyata.',
    accentTheme: 'emerald',
    illustrationKey: 'vision',
  },
  {
    id: 'opportunity',
    tag: '03 | The Opportunity',
    title: 'Akses Mentor Nasional Tanpa Terkendala Wilayah',
    body: 'Tingginya minat orang tua dan siswa terhadap jalur prestasi (OSN & TKA) untuk masuk sekolah unggulan dan PTN. Pembelajaran daring via Zoom membuka akses mentor nasional secara merata di seluruh Indonesia.',
    accentTheme: 'gold',
    illustrationKey: 'opportunity',
  },
  {
    id: 'solution',
    tag: '04 | Our Solution',
    title: 'Ekosistem Bimbel Daring Interaktif & Terukur',
    body: 'Ekosistem bimbel daring interaktif via Zoom dengan kurikulum khusus olimpiade & TKA, dibimbing langsung oleh mentor peraih medali nasional dalam kelas kecil yang terstruktur dan terukur.',
    accentTheme: 'navy',
    illustrationKey: 'solution',
  },
];

export const PAIN_POINTS_DATA: PainPointItem[] = [
  {
    id: 'cost-distance',
    painQuestion: 'Bimbel offline mahal dan jauh?',
    solutionLabel: 'Online dan terjangkau',
    detailText: 'Kelas langsung via Zoom dengan biaya transparan tanpa beban transportasi.',
  },
  {
    id: 'pickup-time',
    painQuestion: 'Tidak ada waktu antar jemput?',
    solutionLabel: 'Belajar dari rumah',
    detailText: 'Siswa mengikuti sesi pembinaan dengan aman dan nyaman dari rumah.',
  },
  {
    id: 'schedule-clash',
    painQuestion: 'Jadwal sering bentrok?',
    solutionLabel: 'Jadwal fleksibel',
    detailText: 'Tersedia pilihan kelas reguler, bootcamp kilat, dan rekaman ulang materi.',
  },
  {
    id: 'trust-quality',
    painQuestion: 'Bingung pilih bimbel yang tepat?',
    solutionLabel: 'Pengajar profesional dan terpercaya',
    detailText: 'Dibimbing langsung mentor alumni peraih medali OSN dan pengajar terkurasi.',
  },
];

export const BUSINESS_FORMATS: string[] = [
  'Paket Bimbingan Intensif TKA & OSN',
  'Program Try-Out Akbar Berkala',
  'Bootcamp Kilat Jelang Kompetisi',
  'Program Kemitraan Bimbingan Sekolah',
];

export const FEATURES_DATA: FeatureCardData[] = [
  {
    id: 'product-service',
    number: 'Layanan 01',
    title: 'Live Interactive Class via Zoom & Klinik Mingguan',
    description:
      'Pembelajaran berlangsung tatap muka dua arah bersama mentor peraih medali olimpiade, dilengkapi bank soal HOTS bertingkat (Basic to Advanced) serta sesi tanya-jawab soal sulit setiap minggu.',
    benefitText: 'Siswa aktif bertanya langsung dan memahami langkah penyelesaian hingga tuntas.',
    iconKey: 'zoom',
  },
  {
    id: 'visual-learning',
    number: 'Layanan 02',
    title: 'Visual Learning Approach di Setiap Pembahasan',
    description:
      'Setiap pembahasan soal dilengkapi visualisasi interaktif agar siswa dapat memvisualisasikan proses berpikir, melihat struktur pembuktian konsep, dan menangkap inti materi jauh lebih mudah.',
    benefitText: 'Tidak sekadar menghafal rumus cepat, melainkan menguasai logika di baliknya.',
    iconKey: 'curriculum',
  },
  {
    id: 'competitive-advantage',
    number: 'Layanan 03',
    title: 'Kurikulum Khusus Kompetisi & Kelas Terstruktur',
    description:
      'Keunggulan kami terletak pada kurikulum terarah mulai dari fondasi hingga level nonrutin OSN, serta kelas interaktif terukur dengan diskusi dua arah antara mentor dan peserta.',
    benefitText: 'Retensi pemahaman jangka panjang bertingkat dari SD, SMP, hingga SMA.',
    iconKey: 'group',
  },
  {
    id: 'brand-voice',
    number: 'Layanan 04',
    title: 'Evaluasi Try-Out Berkala & Pendampingan Suportif',
    description:
      'Try-out berkala memetakan kesiapan anak secara objektif dengan gaya pengajaran yang mudah dipahami, komunikatif, dan membangun rasa ingin tahu siswa tanpa menghilangkan profesionalisme.',
    benefitText: 'Orang tua memperoleh gambaran kesiapan anak menuju tes unggulan dan OSN.',
    iconKey: 'analytics',
  },
];

export const TRACK_OVERVIEWS: TrackOverviewData[] = [
  {
    stepNumber: '1',
    track: 'TKA',
    title: 'TKA',
    subtitle: 'Tes Kemampuan Akademik',
    suitableFor: 'Siswa yang ingin kuat di pelajaran inti dan siap menghadapi tes akademik.',
    learningFocus: [
      'Soal HOTS bertingkat, dari dasar hingga lanjut',
      'Try-out berkala untuk mengukur kesiapan',
    ],
  },
  {
    stepNumber: '2',
    track: 'Olimpiade',
    title: 'Olimpiade',
    subtitle: 'Olimpiade Sains Nasional (OSN)',
    suitableFor: 'Siswa yang ingin berprestasi dan bertanding di kompetisi sains.',
    learningFocus: [
      'Soal nonrutin dan strategi penyelesaiannya',
      'Bimbingan langsung mentor peraih medali',
    ],
  },
  {
    stepNumber: '3',
    track: 'TKA + Olimpiade',
    title: 'TKA + Olimpiade',
    subtitle: 'Dua target, satu paket',
    suitableFor: 'Siswa yang menargetkan skor akademik kuat sekaligus siap bertanding.',
    learningFocus: [
      'Materi TKA diperdalam dengan soal olimpiade',
      'Satu paket untuk dua target sekaligus',
    ],
  },
];

export const UNIVERSAL_GUARANTEES: string[] = [
  'Kelas live interaktif via Zoom',
  'Mentor peraih medali olimpiade',
  'Pembahasan visual interaktif',
  'Tanya-jawab soal sulit tiap minggu',
];

export const formatRupiah = (amount: number): string =>
  `Rp ${amount.toLocaleString('id-ID')}`;

// Exact 3 Jenjang (SD, SMP, SMA) x 3 Jalur (TKA, Olimpiade, TKA + Olimpiade) = 9 Programs
export const PROGRAM_CATALOGUE: ProgramCatalogItem[] = [
  // JENJANG SD (Teal Accent)
  {
    id: 'sd-tka',
    level: 'SD',
    track: 'TKA',
    trackLabel: 'TKA',
    headline: 'Bangun fondasi berhitung dan sains sejak dini.',
    bullets: [
      'Konsep dasar dijelaskan lewat visual dan contoh sehari-hari.',
      'Latihan bertahap agar siswa teliti dan percaya diri.',
    ],
    classQuota: 'Kelas Interaktif via Zoom',
    sessionQuotaMonthly: '8x sesi Live Zoom / bulan',
    sessionQuotaSemester: '48x sesi Live Zoom / semester',
    monthlyPriceRp: 420000,
    semesterPriceRp: 2270000,
    cardTone: 'teal',
  },
  {
    id: 'sd-olimpiade',
    level: 'SD',
    track: 'Olimpiade',
    trackLabel: 'OLIMPIADE',
    headline: 'Kenalkan serunya berpikir logis dan kreatif.',
    bullets: [
      'Soal logika dan teka-teki yang dikemas menyenangkan.',
      'Dibimbing mentor peraih medali olimpiade.',
    ],
    classQuota: 'Kelas Interaktif via Zoom',
    sessionQuotaMonthly: '8x sesi Live Zoom / bulan',
    sessionQuotaSemester: '48x sesi Live Zoom / semester',
    monthlyPriceRp: 450000,
    semesterPriceRp: 2430000,
    cardTone: 'teal',
  },
  {
    id: 'sd-combo',
    level: 'SD',
    track: 'TKA + Olimpiade',
    trackLabel: 'TKA + OLIMPIADE',
    headline: 'Satu paket: fondasi kuat dan nalar yang terasah.',
    bullets: [
      'Materi TKA dasar plus soal logika yang menantang.',
      'Kelas live interaktif dengan mentor berpengalaman.',
    ],
    classQuota: 'Paket Ganda Terintegrasi',
    sessionQuotaMonthly: '12x sesi Live Zoom / bulan',
    sessionQuotaSemester: '72x sesi Live Zoom / semester',
    monthlyPriceRp: 690000,
    semesterPriceRp: 3730000,
    cardTone: 'teal',
    badgeLabel: '2 Target Sekaligus',
  },

  // JENJANG SMP (Emerald Accent)
  {
    id: 'smp-tka',
    level: 'SMP',
    track: 'TKA',
    trackLabel: 'TKA',
    headline: 'Siap menghadapi tes dengan soal yang lebih analitis.',
    bullets: [
      'Latihan soal HOTS bertingkat, dari dasar hingga lanjut.',
      'Belajar menerapkan konsep, bukan sekadar menghafal rumus.',
    ],
    classQuota: 'Kelas Interaktif via Zoom',
    sessionQuotaMonthly: '8x sesi Live Zoom / bulan',
    sessionQuotaSemester: '48x sesi Live Zoom / semester',
    monthlyPriceRp: 490000,
    semesterPriceRp: 2650000,
    cardTone: 'emerald',
  },
  {
    id: 'smp-olimpiade',
    level: 'SMP',
    track: 'Olimpiade',
    trackLabel: 'OLIMPIADE',
    headline: 'Naik level dari soal sekolah ke soal olimpiade.',
    bullets: [
      'Strategi memecah soal nonrutin langkah demi langkah.',
      'Pembahasan visual interaktif di setiap soal.',
    ],
    classQuota: 'Kelas Interaktif via Zoom',
    sessionQuotaMonthly: '8x sesi Live Zoom / bulan',
    sessionQuotaSemester: '48x sesi Live Zoom / semester',
    monthlyPriceRp: 520000,
    semesterPriceRp: 2810000,
    cardTone: 'emerald',
  },
  {
    id: 'smp-combo',
    level: 'SMP',
    track: 'TKA + Olimpiade',
    trackLabel: 'TKA + OLIMPIADE',
    headline: 'Satu paket: siap TKA, siap tanding olimpiade.',
    bullets: [
      'Materi TKA diperdalam dengan soal nonrutin.',
      'Visualisasi interaktif membantu memahami konsep sulit.',
    ],
    classQuota: 'Paket Ganda Terintegrasi',
    sessionQuotaMonthly: '12x sesi Live Zoom / bulan',
    sessionQuotaSemester: '72x sesi Live Zoom / semester',
    monthlyPriceRp: 790000,
    semesterPriceRp: 4270000,
    cardTone: 'emerald',
    badgeLabel: 'Pilihan Populer SMP',
  },

  // JENJANG SMA (Navy Accent)
  {
    id: 'sma-tka',
    level: 'SMA',
    track: 'TKA',
    trackLabel: 'TKA',
    headline: 'Targetkan skor tinggi untuk jalur prestasi dan PTN.',
    bullets: [
      'Penalaran kuantitatif dan analisis ilmiah secara terstruktur.',
      'Try-out berkala untuk mengukur kesiapan.',
    ],
    classQuota: 'Kelas Interaktif via Zoom',
    sessionQuotaMonthly: '8x sesi Live Zoom / bulan',
    sessionQuotaSemester: '48x sesi Live Zoom / semester',
    monthlyPriceRp: 560000,
    semesterPriceRp: 3020000,
    cardTone: 'navy',
  },
  {
    id: 'sma-olimpiade',
    level: 'SMA',
    track: 'Olimpiade',
    trackLabel: 'OLIMPIADE',
    headline: 'Tembus seleksi OSN dengan strategi yang matang.',
    bullets: [
      'Teknik pembuktian dan soal kompleks dari mentor medalis.',
      'Tanya-jawab soal sulit tiap minggu.',
    ],
    classQuota: 'Kelas Interaktif via Zoom',
    sessionQuotaMonthly: '8x sesi Live Zoom / bulan',
    sessionQuotaSemester: '48x sesi Live Zoom / semester',
    monthlyPriceRp: 600000,
    semesterPriceRp: 3240000,
    cardTone: 'navy',
  },
  {
    id: 'sma-combo',
    level: 'SMA',
    track: 'TKA + Olimpiade',
    trackLabel: 'TKA + OLIMPIADE',
    headline: 'Satu paket, dua target: skor TKA kuat dan siap OSN.',
    bullets: [
      'Dibimbing alumni peraih medali olimpiade.',
      'Try-out berkala dan latihan soal tingkat lanjut.',
    ],
    classQuota: 'Paket Ganda Terintegrasi',
    sessionQuotaMonthly: '12x sesi Live Zoom / bulan',
    sessionQuotaSemester: '72x sesi Live Zoom / semester',
    monthlyPriceRp: 890000,
    semesterPriceRp: 4810000,
    cardTone: 'navy',
    badgeLabel: 'Persiapan Lengkap SMA',
  },
];

export const FAQ_DATA: FaqItemData[] = [
  {
    id: 1,
    question: 'Apa saja perbedaan antara program TKA, Olimpiade, dan TKA + Olimpiade?',
    answer:
      'Jalur TKA berfokus pada soal HOTS bertingkat untuk menguatkan pelajaran inti dan try-out menghadapi tes masuk sekolah unggulan/PTN. Jalur Olimpiade membedah soal nonrutin OSN bersama mentor peraih medali. Jalur TKA + Olimpiade menggabungkan keduanya dalam satu jadwal terpadu sehingga siswa siap mengejar skor akademik maupun prestasi kompetisi.',
  },
  {
    id: 2,
    question: 'Bagaimana alur kelas Zoom dan dukungan jika siswa menemui soal sulit di luar jam kelas?',
    answer:
      'Seluruh sesi dilakukan live interaktif dua arah melalui Zoom dengan pendekatan pembahasan visual. Di luar kelas inti, setiap program sudah mencakup sesi klinik tanya-jawab soal sulit mingguan dan rekaman kelas agar siswa dapat mengulang materi dari rumah.',
  },
  {
    id: 3,
    question: 'Apakah program ini cocok untuk orang tua bekerja yang tidak sempat antar jemput ke tempat les?',
    answer:
      'Sangat cocok. Seluruh pembelajaran dilakukan daring dari rumah sehingga orang tua tidak perlu mengatur jadwal antar jemput atau terbebani biaya perjalanan, sementara laporan progres try-out berkala disampaikan secara jelas.',
  },
  {
    id: 4,
    question: 'Siapa yang membimbing anak saya di setiap jenjang SD, SMP, dan SMA?',
    answer:
      'Siswa dibimbing oleh mentor alumni peraih medali Olimpiade Sains Nasional (OSN) dan tutor berpengalaman yang terlatih menjelaskan konsep secara bertahap dan komunikatif sesuai usia belajar SD Kelas 4-6, SMP, maupun SMA.',
  },
  {
    id: 5,
    question: 'Apakah tersedia pilihan jadwal fleksibel atau persiapan khusus menjelang lomba/ujian?',
    answer:
      'Ya. Selain program bulanan dan paket semester terstruktur, TunasCendekia menyediakan sesi bootcamp kilat jelang kompetisi serta penjadwalan fleksibel apabila siswa berhalangan karena jadwal ujian sekolah.',
  },
];
