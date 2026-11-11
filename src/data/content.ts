import { HotsTopic, PillarCardData, FeatureCardData, PricingCardData, FaqItemData } from '../types';

export const HOTS_TOPICS: HotsTopic[] = [
  {
    id: 'math',
    label: 'Matematika OSN',
    tag: '⚡ BEDAH SOAL HOTS • TEORI BILANGAN',
    level: 'Level: OSN Provinsi',
    question:
      'Tentukan banyaknya pasangan bilangan bulat positif (a, b) sehingga KPK(a, b) + FPB(a, b) = a · b − 2026.',
    algorithmName: 'Algoritma Parameterisasi FPB & Dekomposisi Prima',
    finalAnswer: '8 Pasangan Solusi (a, b)',
    steps: [
      {
        stepNumber: 1,
        title: 'Parameterisasi Koprima (Reduksi FPB)',
        formula: 'd = FPB(a, b)  ⇒  a = d·x,  b = d·y   dengan FPB(x, y) = 1',
        explanation:
          'Substitusi KPK(a, b) = d·x·y ke persamaan awal menghasilkan bentuk terfaktorisasi terhadap variabel d.',
        highlightBadge: 'Langkah 1/4 • Reduksi Variabel',
      },
      {
        stepNumber: 2,
        title: 'Uji Keterbagian & Pemangkasan Ruang Cari',
        formula: 'd · (d·x·y − x·y − 1) = 2026 = 2 × 1013',
        explanation:
          'Karena d wajib membagi 2026, ruang pencarian dipangkas drastis menjadi 4 kandidat faktor saja: d ∈ {1, 2, 1013, 2026}.',
        highlightBadge: 'Langkah 2/4 • Prune Search Space',
      },
      {
        stepNumber: 3,
        title: 'Eliminasi Cabang & Faktorisasi Prima',
        formula: 'Uji d = 2  ⇒  x·y − 1 = 1013  ⇒  x·y = 1014 = 2¹ × 3¹ × 13²',
        explanation:
          'Kandidat d = 1, 1013, 2026 tidak menghasilkan bilangan bulat. Untuk d = 2 diperoleh x·y = 1014 yang memiliki 3 blok faktor prima saling lepas.',
        highlightBadge: 'Langkah 3/4 • Dekomposisi Prima',
      },
      {
        stepNumber: 4,
        title: 'Kombinatorika Pasangan Koprima',
        formula: 'Banyak Solusi = 2ᵏ = 2³ = 8 pasangan (a, b)',
        explanation:
          'Karena FPB(x, y) = 1, ketiga blok prima {2, 3, 169} didistribusikan secara independen ke x atau y, menghasilkan tepat 8 pasangan solusi.',
        highlightBadge: 'Langkah 4/4 • Solusi Terverifikasi',
      },
    ],
  },
  {
    id: 'science',
    label: 'Fisika & Sains',
    tag: '🔬 BEDAH SOAL HOTS • MEKANIKA & ENERGI',
    level: 'Level: OSN Kota / Provinsi',
    question:
      'Sebuah balok bermassa m meluncur tanpa gesekan dari ketinggian h lalu memasuki bidang kasar dengan koefisien gesek μ(x) = μ₀·x. Tentukan jarak henti maksimum!',
    algorithmName: 'Algoritma Integrasi Usaha Non-Konservatif',
    finalAnswer: 'x_maks = √(2h / μ₀)',
    steps: [
      {
        stepNumber: 1,
        title: 'Konservasi Energi Mekanik Awal',
        formula: 'E_p(awal) = m·g·h  →  E_k(0) = ½·m·v₀² = m·g·h',
        explanation:
          'Saat balok menuruni lintasan lengkung licin hingga titik x = 0, seluruh energi potensial berubah menjadi energi kinetik maksimum.',
        highlightBadge: 'Langkah 1/4 • Konversi Energi',
      },
      {
        stepNumber: 2,
        title: 'Pemodelan Gaya Gesek Variabel terhadap Posisi',
        formula: 'f_k(x) = μ(x) · N = (μ₀ · x) · m · g',
        explanation:
          'Koefisien gesek meningkat secara linier terhadap posisi x, sehingga perlambatan tidak konstan dan harus dianalisis melalui grafik gaya.',
        highlightBadge: 'Langkah 2/4 • Gaya Fungsi Posisi',
      },
      {
        stepNumber: 3,
        title: 'Integrasi Luas Daerah Usaha Disipasi',
        formula: 'W_gesek = ∫₀ˣ (μ₀·m·g·x) dx = ½ · μ₀ · m · g · x²',
        explanation:
          'Total energi yang diserap lintasan kasar setara dengan luas segitiga di bawah kurva gaya gesek f_k(x) dari 0 hingga x.',
        highlightBadge: 'Langkah 3/4 • Integrasi Kurva',
      },
      {
        stepNumber: 4,
        title: 'Titik Henti Maksimum (E_awal = W_gesek)',
        formula: 'm·g·h = ½·μ₀·m·g·x²  ⇒  x_maks = √(2h / μ₀)',
        explanation:
          'Variabel massa m dan gravitasi g saling meniadakan, menghasilkan jarak henti eksak yang hanya bergantung pada h dan μ₀.',
        highlightBadge: 'Langkah 4/4 • Ekuilibrium Energi',
      },
    ],
  },
  {
    id: 'tka',
    label: 'Penalaran TKA',
    tag: '🧠 BEDAH SOAL HOTS • PENALARAN KUANTITATIF TKA',
    level: 'Level: Seleksi Unggulan & PTN',
    question:
      'Jika rasio efisiensi panel A dan B adalah 3 : 5 sementara laju degradasi tahunannya masing-masing 4% dan 10%, pada tahun ke berapa output keduanya setara?',
    algorithmName: 'Algoritma Fast Exponentiation & Konvergensi Rasio',
    finalAnswer: 'Tahun ke-8 (n ≈ 7,92)',
    steps: [
      {
        stepNumber: 1,
        title: 'Pemodelan Peluruhan Eksponensial Diskrit',
        formula: 'P_A(n) = 3 · (0,96)ⁿ   dan   P_B(n) = 5 · (0,90)ⁿ',
        explanation:
          'Degradasi 4% menyisakan efisiensi 96% per tahun, sedangkan degradasi 10% menyisakan 90% per tahun.',
        highlightBadge: 'Langkah 1/4 • Formulasi Fungsi',
      },
      {
        stepNumber: 2,
        title: 'Normalisasi Rasio Pertumbuhan Relatif',
        formula: '(0,96 / 0,90)ⁿ = 5 / 3  ⇒  (16 / 15)ⁿ ≈ 1,667',
        explanation:
          'Bagi kedua ruas sehingga membentuk basis pecahan tunggal 16/15 yang mudah diestimasi tanpa kalkulator.',
        highlightBadge: 'Langkah 2/4 • Reduksi Rasio 16/15',
      },
      {
        stepNumber: 3,
        title: 'Iterasi Pangkat Dua (Binary Doubling)',
        formula: 'n=2 → 1,138  |  n=4 → 1,294  |  n=8 → (1,294)² ≈ 1,675',
        explanation:
          'Kuadratkan nilai secara beruntun (n = 1 → 2 → 4 → 8) untuk melompati perhitungan manual satu per satu.',
        highlightBadge: 'Langkah 3/4 • O(log n) Doubling',
      },
      {
        stepNumber: 4,
        title: 'Deteksi Titik Potong Kurva Efisiensi',
        formula: '(16/15)⁸ ≈ 1,675 > 1,667  ⇒  Konvergen di Tahun ke-8',
        explanation:
          'Kurva efisiensi Panel A menyusul Panel B tepat menjelang akhir tahun ke-8, diselesaikan dalam waktu kurang dari 40 detik.',
        highlightBadge: 'Langkah 4/4 • Titik Konvergensi',
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
