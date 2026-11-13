# TunasCendekia: Visual & Interactive Design System

## 1. Visual Identity & Dials
- **Dial Calibration**: `ENERGY 2 / RHYTHM 2 / MOTION 2`
- **Brand Voice**: Intelektual, kredibel, transparan, dan suportif bagi orang tua (35-50 tahun) serta siswa berprestasi (SD Kelas 4-6, SMP, SMA).
- **Primary Brand Assets**:
  - `public/logo.png`: Logo resmi tunas akademik dan topi wisuda untuk header dan footer.
  - `public/favicon.png`: Ikon tab peramban transparan.
  - `public/mentor-zoom.jpg`, `public/student-zoom-1.jpg`, `public/student-zoom-2.jpg`: Foto kelas daring untuk simulasi antarmuka Zoom.

## 2. Color Tokens (WCAG AA >= 4.5:1 Verified)
- **Primary Ink & Dark Surface**: Deep Navy `#0F172A` (`--navy-900`), Charcoal Dark `#090D16` (`--navy-950`)
- **Academic Emerald Accent**:
  - Action Fill: `#10B981` (`--emerald-500`) dipasangkan dengan teks kontras tinggi `#0F172A` (rasio > 7:1)
  - Text / Link / Button Dark Emerald: `#047857` (`--emerald-700`) pada latar putih atau slate `#F8FAFC` (>= 4.5:1)
  - Light Emerald Tint: `#ECFDF5` (`--emerald-50`) dan `#D1FAE5` (`--emerald-100`)
- **Merit Gold Accent**:
  - Highlight Fill / Border: `#F59E0B` (`--gold-500`) dipasangkan dengan teks `#0F172A`
  - Text on Light Gold Tint (`#FFFBEB`): `#B45309` (`--gold-700`) atau `#92400E` (`--gold-800`)
- **Surfaces & Structural Dividers**:
  - Base White: `#FFFFFF`
  - Alternate Soft Slate: `#F8FAFC`
  - Card & Section Divider: `1px solid #E2E8F0` (`--navy-200`)

## 3. Typography
- **Headings**: `'Plus Jakarta Sans'`, tracking `-0.02em`, bobot `700`.
- **Body & Controls**: `'Inter'`, `16px`, `line-height: 1.6`, bobot `400 / 600 / 700`.
- **Mathematical Notation (Sandbox)**: `Georgia, 'Times New Roman', serif` dengan `font-variant-numeric: tabular-nums`.

## 4. Geometry & Accessibility Rules
- **Editorial Cards**: `border-radius: 12px`, `border: 1px solid #E2E8F0`, bayangan tipis `0 1px 3px rgba(15, 23, 42, 0.06)`.
- **Primary Controls & Buttons**: `border-radius: 8px`, tinggi sentuh minimal `44px`.
- **Compact Metadata Badges Only**: `border-radius: 9999px` hanya untuk pill/tag metadata kecil.
- **Zero Layered Glassmorphism**: Tidak menggunakan `backdrop-filter: blur`.
- **Focus Ring & Motion**: `:focus-visible { outline: 2px solid #10B981; outline-offset: 2px; }` dan dukungan penuh `@media (prefers-reduced-motion: reduce)`.
