# TunasCendekia: Anti-Slop Delivery Gate

Status Audit Terakhir: Lulus (`npm run build` dan audit statis bebas em-dash, klaim tanpa verifikasi, kata klise, serta strict TypeScript).

## Block 1: Hard Gate (Structural & Brand Integrity)
- [x] **No Unicode Em Dashes**: 0 karakter `\u2014` di `index.html`, `src/`, dan berkas desain.
- [x] **No Fabricated Superiority Claims or Metrics**: Klaim `#1 di Indonesia` dan persentase tidak terverifikasi (`+38%`) dihapus dan diganti deskripsi program operasional yang jujur.
- [x] **No Banned Buzzwords**: Bebas dari `Revolusioner`, `Next-Gen`, `AI-Powered`, `Platform Cerdas Masa Depan`, dan `Tanpa Batas`.
- [x] **Strict TypeScript (`strict: true`)**: 0 penggunaan `any`, `@ts-ignore`, `@ts-expect-error`, maupun non-null assertion `!` yang tidak dijaga guard runtime.
- [x] **No `window.alert()`**: Validasi formulir menggunakan inline error yang terhubung melalui `aria-describedby` dan `aria-invalid="true"`.

## Block 2: Purpose-Gate (Parent & Student Pedagogy)
- [x] **Interactive Concept Sandbox (`ZoomAlgorithmVisualizer.tsx`)**: Mendukung perpindahan jenjang `SD (Kelas 4-6)`, `SMP (Kelas 7-9)`, dan `SMA (Kelas 10-12)` via `role="tablist"`, slider parameter reaktif terhadap diagram SVG, pembuktian visual 3 tahap, serta status `exploring`, `answered-correct`, dan `answered-retry`.
- [x] **Transparent Program Filter (`PricingSection.tsx`)**: Filter jalur `TKA` vs `OSN`, jenjang `SD`/`SMP`/`SMA`, dan switch `role="switch"` untuk `Bulanan` vs `Paket Semester` dengan pre-fill langsung ke formulir `#kontak`.
- [x] **Conversion & WhatsApp Handoff (`ContactSection.tsx`, `ConfirmationModal.tsx`)**: Validasi nomor WhatsApp `08` / `+628` (10-14 digit), pemindahan fokus ke input tidak valid pertama, status `Memproses Pendaftaran...`, serta modal konfirmasi dengan focus trap dan pemulihan fokus.

## Block 3: Liveliness & Tactile Craft
- [x] **Visual Proof Physics**: Animasi transformasi geometri (lipatan ubin ganjil L-tile SD, potongan luas selisih kuadrat SMP, rotasi kurva `v-t` SMA) patuh terhadap `@media (prefers-reduced-motion: reduce)`.
- [x] **No Emoji Replacement Dependencies**: Ikon struktural menggunakan komponen SVG geometris khusus di `src/components/Icons.tsx`.

## Block 4: Visual Polish & Responsive Ergonomics
- [x] **WCAG AA Contrast**: Emerald pada permukaan terang memakai `#047857`; tombol Emerald `#10B981` memakai teks `#0F172A`.
- [x] **Surface Consistency**: Kartu `12px`, tombol `8px`, badge metadata `9999px`, tanpa `backdrop-filter: blur`.
- [x] **Navigation & Floating Controls**: Header sticky `72px`, drawer seluler menutup dengan `Escape` dan mengunci scroll body saat terbuka, tombol aksi mengambang >= `44x44px` dengan offset `safe-area-inset-bottom` serta anti-tabrak footer.
