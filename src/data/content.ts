import {
  EducationLevel,
  FaqItemData,
  FeatureCardData,
  PillarCardData,
  PricingTierData,
  ProgramTrack,
  SandboxProblemSet,
} from '../types';

export const SANDBOX_PROBLEMS: SandboxProblemSet[] = [
  {
    level: 'SD',
    tabLabel: 'SD (Kelas 4-6)',
    gradeRangeLabel: 'SD Kelas 4-6',
    trackLabel: 'TKA Numerasi & OSN SD',
    conceptTitle: 'Pola Ubin Ganjil Membentuk Persegi Sempurna',
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
        highlightBadge: 'Model Barisan',
        explanation:
          'Alih-alih menjumlahkan satu per satu, visualisasikan setiap suku ganjil (1, 3, 5, ...) sebagai baris ubin bertingkat.',
      },
      {
        stageNumber: 2,
        shortLabel: '2. Lipat Siku L',
        title: 'Tahap 2: Susun Menjadi Siku-Siku (L-Tile)',
        highlightBadge: 'Pola Geometri',
        explanation:
          'Setiap lapisan ganjil baru tepat membungkus dua sisi persegi sebelumnya sehingga membentuk bangun siku beraturan.',
      },
      {
        stageNumber: 3,
        shortLabel: '3. Persegi k x k',
        title: 'Tahap 3: Terbukti Luas Selalu Sama Dengan k kuadrat',
        highlightBadge: 'Simpulan Nalar',
        explanation:
          'Jumlah k bilangan ganjil pertama selalu membentuk persegi utuh berukuran k x k tanpa menghafal rumus deret.',
      },
    ],
    challengeQuestion:
      'Jika lapisan ganjil ke-8 memiliki 15 ubin (untuk k = 8 lapis), berapakah total seluruh ubin yang tersusun?',
    challengeOptions: [
      {
        id: 'sd-a',
        label: '56 ubin',
        isCorrect: false,
        feedbackHint:
          'Perhatikan panjang sisi persegi penuh saat k = 8: bukan 7 x 8, melainkan sisi sama panjang k x k.',
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
          'Coba geser slider k untuk melihat hubungan jumlah lapis dengan ukuran sisi persegi yang terbentuk.',
      },
    ],
    correctExplanation:
      'Tepat. Delapan lapis ubin ganjil membentuk persegi berukuran 8 x 8 sehingga totalnya 64 ubin (k kuadrat).',
  },
  {
    level: 'SMP',
    tabLabel: 'SMP (Kelas 7-9)',
    gradeRangeLabel: 'SMP Kelas 7-9',
    trackLabel: 'OSN Matematika & TKA SMP',
    conceptTitle: 'Pembuktian Luas Selisih Dua Kuadrat',
    parameterLabel: 'Ukuran Potongan Sisi (b)',
    parameterUnit: 'cm',
    parameterMin: 2,
    parameterMax: 6,
    parameterDefault: 4,
    stages: [
      {
        stageNumber: 1,
        shortLabel: '1. Bangun a kuadrat',
        title: 'Tahap 1: Tinjau Persegi Utuh Berukuran a x a',
        highlightBadge: 'Luas Awal',
        explanation:
          'Mulai dari persegi besar dengan panjang sisi tetap a = 10 cm sehingga luas awal bernilai 100 cm persegi.',
      },
      {
        stageNumber: 2,
        shortLabel: '2. Potong b kuadrat',
        title: 'Tahap 2: Buang Persegi Sudut b x b dan Belah Sisa',
        highlightBadge: 'Reduksi Luas',
        explanation:
          'Membuang persegi kecil b x b menyisakan dua bagian berbentuk L. Kita pisahkan potongan bawah selebar (a - b) x b.',
      },
      {
        stageNumber: 3,
        shortLabel: '3. Putar & Gabung',
        title: 'Tahap 3: Putar 90 Derajat Menjadi (a + b)(a - b)',
        highlightBadge: 'Faktorisasi',
        explanation:
          'Potongan bawah diputar dan ditempel ke sisi kanan, membentuk persegi panjang tunggal berukuran (a + b) kali (a - b).',
      },
    ],
    challengeQuestion:
      'Tanpa menghitung kuadrat secara manual, berapakah hasil 53 kuadrat dikurangi 47 kuadrat dengan konsep potongan luas?',
    challengeOptions: [
      {
        id: 'smp-a',
        label: '300',
        isCorrect: false,
        feedbackHint:
          'Cek kembali jumlah kedua sisi (53 + 47) dikalikan dengan selisihnya (53 - 47). Hasil penjumlahannya bernilai 100.',
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
          'Selisih antara 53 dan 47 bukan 10, melainkan 6. Kalikan 100 dengan selisih sisi yang tepat.',
      },
    ],
    correctExplanation:
      'Benar. Dengan identitas (53 + 47)(53 - 47) = 100 x 6 = 600, soal aljabar kompetitif selesai dalam hitungan detik.',
  },
  {
    level: 'SMA',
    tabLabel: 'SMA (Kelas 10-12)',
    gradeRangeLabel: 'SMA Kelas 10-12',
    trackLabel: 'OSN Fisika & TKA Saintek',
    conceptTitle: 'Transformasi Grafik Kecepatan v-t Menjadi Jarak Tempuh',
    parameterLabel: 'Kecepatan Awal (v0)',
    parameterUnit: 'm/s',
    parameterMin: 4,
    parameterMax: 12,
    parameterDefault: 8,
    stages: [
      {
        stageNumber: 1,
        shortLabel: '1. Grafik v-t',
        title: 'Tahap 1: Amati Luas Segitiga di Bawah Kurva v-t',
        highlightBadge: 'Kinematika',
        explanation:
          'Pada perlambatan tetap selama t = 8 detik, jarak tempuh sama dengan luas daerah segitiga antara sumbu waktu dan grafik kecepatan.',
      },
      {
        stageNumber: 2,
        shortLabel: '2. Belah 1/2 v0',
        title: 'Tahap 2: Bagi Tepat di Kecepatan Tengah (1/2 v0)',
        highlightBadge: 'Partisi Kurva',
        explanation:
          'Garis horizontal pada setengah kecepatan awal membagi puncak segitiga untuk menunjukkan kecepatan rata-rata gerak.',
      },
      {
        stageNumber: 3,
        shortLabel: '3. Persegi Panjang',
        title: 'Tahap 3: Putar Puncak 180 Derajat Jadi Luas t x (1/2 v0)',
        highlightBadge: 'Ekuivalensi',
        explanation:
          'Puncak segitiga mengisi rongga kanan secara kongruen menjadi persegi panjang t x (1/2 v0), membuktikan s = 1/2 v0 t secara visual.',
      },
    ],
    challengeQuestion:
      'Sebuah benda direm beraturan dari kecepatan awal v0 = 18 m/s hingga berhenti dalam t = 6 detik. Berapakah jarak tempuhnya?',
    challengeOptions: [
      {
        id: 'sma-a',
        label: '36 meter',
        isCorrect: false,
        feedbackHint:
          'Setengah dari 18 m/s adalah 9 m/s. Kalikan kecepatan rata-rata 9 m/s dengan selang waktu 6 detik.',
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
          '108 meter adalah luas persegi penuh v0 x t. Ingat kurva berbentuk segitiga sehingga tingginya menjadi 1/2 v0.',
      },
    ],
    correctExplanation:
      'Tepat. Luas persegi panjang ekuivalen memiliki tinggi 1/2 x 18 = 9 m/s dan alas 6 s, sehingga jarak tempuhnya 54 meter.',
  },
];

export const PILLARS_DATA: PillarCardData[] = [
  {
    id: 'sd',
    stepLabel: 'Tahap 01',
    title: 'Jenjang SD (Kelas 4-6)',
    description:
      'Membangun fondasi nalar logika, eksplorasi Matematika dan IPA Olimpiade tingkat dasar, serta kesiapan menghadapi seleksi SMP unggulan.',
    jenjangValue: 'SD',
    iconKey: 'seedling',
  },
  {
    id: 'smp',
    stepLabel: 'Tahap 02',
    title: 'Jenjang SMP (Kelas 7-9)',
    description:
      'Pendalaman konsep Matematika, IPA (Fisika dan Biologi), serta IPS dari level Kabupaten hingga Nasional sekaligus penguatan TKA SMA favorit.',
    jenjangValue: 'SMP',
    iconKey: 'compass',
  },
  {
    id: 'sma',
    stepLabel: 'Tahap 03',
    title: 'Jenjang SMA (Kelas 10-12)',
    description:
      'Pembinaan terstruktur bidang utama OSN SMA dan penguasaan TKA Saintek maupun Soshum sebagai bekal jalur prestasi menuju PTN tujuan.',
    jenjangValue: 'SMA',
    iconKey: 'graduation',
  },
];

export const FEATURES_DATA: FeatureCardData[] = [
  {
    id: 'live-zoom',
    number: 'Keunggulan 01',
    title: 'Live Interactive Classroom via Zoom',
    description:
      'Sesi tatap muka daring dua arah secara langsung bersama pembimbing, bukan sekadar menonton rekaman video satu arah. Siswa didorong aktif berdiskusi dan membedah argumen jawaban secara real-time.',
    benefitText:
      'Siswa berani bertanya di tempat hingga paham akar konsepnya tanpa menumpuk kebingungan.',
    iconKey: 'zoom',
  },
  {
    id: 'kurikulum-hots',
    number: 'Keunggulan 02',
    title: 'Kurikulum Berbasis Nalar HOTS & Standar OSN',
    description:
      'Materi disusun bertahap mulai dari pemahaman prinsip dasar hingga latihan pemecahan soal non-rutin tingkat Kabupaten, Provinsi, Nasional, dan TKA berstandar seleksi ketat.',
    benefitText:
      'Anak terlatih mengurai soal baru dengan logika mandiri, bukan bergantung pada hafalan rumus.',
    iconKey: 'curriculum',
  },
  {
    id: 'kelas-kecil',
    number: 'Keunggulan 03',
    title: 'Kapasitas Kelas Kecil & Klinik Soal Mingguan',
    description:
      'Setiap kelas Zoom dibatasi maksimal 10 hingga 15 siswa agar pembimbing dapat memantau cara berpikir tiap peserta. Tersedia klinik soal mingguan untuk mengulas PR maupun soal sekolah yang sulit.',
    benefitText:
      'Perhatian personal terjaga meski kelas diikuti dari kota berbeda di seluruh Indonesia.',
    iconKey: 'group',
  },
  {
    id: 'diagnostic-cbt',
    number: 'Keunggulan 04',
    title: 'Diagnostic Test & Evaluasi Perkembangan Berkala',
    description:
      'Sebelum penempatan kelas, siswa mengikuti Diagnostic Test untuk memetakan kekuatan dan celah konsepnya. Orang tua menerima laporan progres periodik yang jelas dan terukur.',
    benefitText:
      'Orang tua mengetahui perkembangan nyata anak di tiap bab dan fokus perbaikan selanjutnya.',
    iconKey: 'analytics',
  },
];

interface LevelPricingSchedule {
  level: EducationLevel;
  track: ProgramTrack;
  baseMonthly: number;
  intensiveMonthly: number;
  privateMonthly: number;
}

const PRICING_SCHEDULES: LevelPricingSchedule[] = [
  {
    level: 'SD',
    track: 'TKA',
    baseMonthly: 420000,
    intensiveMonthly: 760000,
    privateMonthly: 1850000,
  },
  {
    level: 'SD',
    track: 'OSN',
    baseMonthly: 450000,
    intensiveMonthly: 820000,
    privateMonthly: 1950000,
  },
  {
    level: 'SMP',
    track: 'TKA',
    baseMonthly: 490000,
    intensiveMonthly: 860000,
    privateMonthly: 2100000,
  },
  {
    level: 'SMP',
    track: 'OSN',
    baseMonthly: 520000,
    intensiveMonthly: 920000,
    privateMonthly: 2250000,
  },
  {
    level: 'SMA',
    track: 'TKA',
    baseMonthly: 560000,
    intensiveMonthly: 960000,
    privateMonthly: 2400000,
  },
  {
    level: 'SMA',
    track: 'OSN',
    baseMonthly: 600000,
    intensiveMonthly: 1050000,
    privateMonthly: 2600000,
  },
];

export const formatRupiah = (amount: number): string =>
  `Rp ${amount.toLocaleString('id-ID')}`;

export const PRICING_TIERS: PricingTierData[] = PRICING_SCHEDULES.flatMap((s) => {
  const levelText = s.level === 'SD' ? 'SD Kelas 4-6' : s.level === 'SMP' ? 'SMP Kelas 7-9' : 'SMA Kelas 10-12';
  const trackText = s.track === 'TKA' ? 'Persiapan TKA' : 'Pembinaan OSN';

  // Exact semester pricing = 6 months * monthly - clear 10% semester discount
  const regularSem = Math.round((s.baseMonthly * 6 * 0.9) / 10000) * 10000;
  const intensiveSem = Math.round((s.intensiveMonthly * 6 * 0.9) / 10000) * 10000;
  const privateSem = Math.round((s.privateMonthly * 6 * 0.9) / 10000) * 10000;

  return [
    {
      id: `${s.track.toLowerCase()}-${s.level.toLowerCase()}-reguler`,
      track: s.track,
      level: s.level,
      name: `Kelas Fondasi ${s.track}`,
      target: `${levelText} dengan fokus penguatan konsep dasar dan latihan terstruktur (${trackText}).`,
      classQuota: 'Maks. 15 siswa per kelas Zoom',
      sessionQuotaMonthly: '8x sesi Live Zoom / bulan',
      sessionQuotaSemester: '48x sesi Live Zoom / semester',
      mentorCredential: 'Pembimbing Spesialis Bidang & Tutor Senior',
      monthlyPriceRp: s.baseMonthly,
      semesterPriceRp: regularSem,
      semesterSavingsLabel: `Hemat ${formatRupiah(s.baseMonthly * 6 - regularSem)} vs bayar bulanan`,
      features: [
        'Maksimal 15 siswa per kelas Zoom interaktif 2 arah',
        'Modul konsep dan bank soal HOTS format PDF per pertemuan',
        'Rekaman sesi Zoom tersimpan untuk ditinjau ulang',
        '1x Try Out Evaluasi Berkala per bulan beserta pembahasan',
      ],
      featured: false,
      buttonVariant: 'navy',
    },
    {
      id: `${s.track.toLowerCase()}-${s.level.toLowerCase()}-intensif`,
      track: s.track,
      level: s.level,
      name: `Program Intensif ${s.track}`,
      target: `${levelText} yang menargetkan lolos seleksi sekolah unggulan atau jenjang kabupaten hingga nasional.`,
      classQuota: 'Maks. 10 siswa per kelas Zoom',
      sessionQuotaMonthly: '12x sesi Live Zoom / bulan',
      sessionQuotaSemester: '72x sesi Live Zoom / semester',
      mentorCredential: 'Alumni Medalis OSN / Pembina TKA Terkurasi',
      monthlyPriceRp: s.intensiveMonthly,
      semesterPriceRp: intensiveSem,
      semesterSavingsLabel: `Hemat ${formatRupiah(s.intensiveMonthly * 6 - intensiveSem)} vs bayar bulanan`,
      features: [
        'Kelas kecil maksimal 10 siswa agar diskusi nalar lebih intensif',
        'Dibimbing langsung Alumni Medalis OSN & pembina berpengalaman',
        'Termasuk 4x Klinik Soal Mingguan & bedah PR sekolah atau lomba',
        'Rapor perkembangan konsep bulanan langsung untuk orang tua',
      ],
      featured: true,
      ribbonLabel: 'Rekomendasi Orang Tua',
      buttonVariant: 'primary',
    },
    {
      id: `${s.track.toLowerCase()}-${s.level.toLowerCase()}-privat`,
      track: s.track,
      level: s.level,
      name: `Mentoring Privat 1-on-1`,
      target: `${levelText} yang membutuhkan silabus khusus, akselerasi materi, dan jadwal fleksibel.`,
      classQuota: '1 siswa per kelas (Privat 1-on-1)',
      sessionQuotaMonthly: '8x sesi Privat / bulan',
      sessionQuotaSemester: '48x sesi Privat / semester',
      mentorCredential: 'Mentor Utama Alumni Medalis OSN Nasional',
      monthlyPriceRp: s.privateMonthly,
      semesterPriceRp: privateSem,
      semesterSavingsLabel: `Hemat ${formatRupiah(s.privateMonthly * 6 - privateSem)} vs bayar bulanan`,
      features: [
        'Kurikulum kustom menyesuaikan peta diagnostik awal dan target sekolah',
        'Jadwal sesi fleksibel dengan dukungan tanya soal terarah antara pertemuan',
        'Simulasi CBT / Try Out OSN lengkap dengan bedah solusi langkah demi langkah',
        'Konsultasi progres berkala langsung antara mentor dan orang tua',
      ],
      featured: false,
      buttonVariant: 'secondary',
    },
  ];
});

export const FAQ_DATA: FaqItemData[] = [
  {
    id: 1,
    question: 'Bagaimana alur pembelajaran via Zoom, dan apakah rekaman kelas tersedia jika anak berhalangan?',
    answer:
      'Seluruh sesi berlangsung secara tatap muka dua arah melalui Zoom, diawali bedah konsep visual dan dilanjutkan latihan soal terpandu. Setiap pertemuan direkam otomatis dan dibagikan pada hari yang sama beserta anotasi papan tulis agar siswa dapat mengulang materi kapan saja saat sakit atau memiliki agenda sekolah.',
  },
  {
    id: 2,
    question: 'Mengapa jumlah peserta per kelas Zoom dibatasi 10 hingga 15 siswa?',
    answer:
      'Pembelajaran TKA dan Olimpiade menuntut keberanian berargumen serta koreksi logika di tempat. Dengan batas maksimal 10 siswa di kelas Intensif dan 15 siswa di kelas Fondasi, mentor dapat memeriksa langkah pengerjaan tiap anak secara aktif dan menghindari kelas pasif.',
  },
  {
    id: 3,
    question: 'Siapa yang mengajar di TunasCendekia dan bagaimana seleksi mentornya?',
    answer:
      'Tim pengajar kami terdiri dari alumni peraih medali Olimpiade Sains Nasional (OSN), finalis pelatnas, serta pembina TKA dan ujian seleksi PTN yang telah melalui tahap micro-teaching terkurasi untuk memastikan penyampaian materi mudah diikuti siswa SD, SMP, maupun SMA.',
  },
  {
    id: 4,
    question: 'Apa perbedaan utama antara jalur program TKA dan pembinaan OSN?',
    answer:
      'Program TKA (Tes Kemampuan Akademik) berfokus pada kecepatan, akurasi penalaran literasi-numerasi, serta penguasaan konsep Saintek/Soshum untuk masuk SMP/SMA unggulan dan PTN. Sementara program OSN menggali topik kompetisi non-rutin tingkat mendalam (Teori Bilangan, Kombinatorika, Mekanika Analisis, hingga pembuktian matematis) menuju jenjang Kabupaten, Provinsi, dan Nasional.',
  },
  {
    id: 5,
    question: 'Apakah jadwal kelas dapat dijadwalkan ulang (reschedule) saat anak menghadapi ujian sekolah atau lomba?',
    answer:
      'Ya. Peserta Program Privat 1-on-1 dapat melakukan penjadwalan ulang minimal H-1 sebelum sesi dimulai. Untuk kelas Grup, siswa yang berhalangan karena ujian sekolah atau lomba dapat meminta akses kelas pengganti di jadwal paralel minggu yang sama atau mendiskusikan soal melalui Klinik Soal Mingguan.',
  },
];
