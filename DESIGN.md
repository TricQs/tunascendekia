# TunasCendekia — Design Direction (DESIGN.md)

> Brand Identity, Design Read, and Architectural Decisions for TunasCendekia Landing Page.
> Filtered against the [anti-slop](https://github.com/miqdadbadjuber/anti-slop) framework.

---

## 1. Brand Identity & Persona
- **Brand Name:** TunasCendekia
- **Product Category:** E-Learning Platform (Bimbel Online Interaktif SD, SMP, SMA)
- **Target Audience:** Siswa berprestasi (SD Kelas 4–6, SMP, SMA) dan Orang Tua (usia 35–50 tahun) yang mengincar medali olimpiade dan seleksi sekolah unggulan / PTN.
- **Brand Voice:** Intelektual, kredibel, suportif, memberdayakan (*empowering*), dan profesional-komunikatif.
- **Key Message:** "Mengasah Nalar Juara, Mengantar Siswa ke Panggung Prestasi Nasional."
- **Official Logo:** Topi Toga Akademik (*Cendekia*) + Tunas Daun Hijau (*Pertumbuhan/Tunas*) + Rumbai Emas (*Prestasi/Medali*) — tersimpan di `public/logo.webp`.

---

## 2. Design Read & Dials (Part 3)
- **Design Read:** Reading this as: *Edutech landing page for ambitious students & parents preparing for academic Olympiads (OSN) and TKA, in a clean, intellectual, flat-minimalist style with academic rigor, dial ENERGY 2 / RHYTHM 2 / MOTION 2.*
- **Dial Settings:**
  - **ENERGY: 2 (Balanced)** — Wibawa akademis yang kuat dan percaya diri tanpa terkesan kaku atau terlalu heboh (*no AI gradient slop*).
  - **RHYTHM: 2 (Structured with Intentional Breaks)** — Variasi layout yang dinamis antara grid interaktif, simulasi whiteboard HOTS, USP callout, dan pricing hierarchy.
  - **MOTION: 2 (Functional Transitions)** — Interaksi mikro yang bermakna: tab switching bedah soal HOTS, accordion FAQ, pre-populasi paket ke form konsultasi, dan responsive mobile drawer.

---

## 3. Color System & Purpose (R-01, R-29)
1. **Primary Deep Navy (`#0F172A`):** Melambangkan kedalaman intelektual, otoritas akademis, dan ketenangan berpikir analitis.
2. **Accent 1 Emerald Green (`#10B981`):** Melambangkan "Tunas" (pertumbuhan bertahap, kesegaran ide, dan perkembangan nalar siswa).
3. **Accent 2 Warm Gold (`#F59E0B`):** Melambangkan raihan medali emas olimpiade, keunggulan (*excellence*), dan panggung prestasi nasional.
4. **Neutrals Clean White (`#FFFFFF`) & Soft Slate (`#F8FAFC`):** Menjamin keterbacaan tingkat tinggi (*high contrast*) standar WCAG AA (rasio kontras 16.5:1 untuk teks utama).

---

## 4. Typography & Layout Decisions (R-06, R-11, R-31)
- **Typography:** `Plus Jakarta Sans` dipadukan dengan `Inter`. Memberikan kejelasan geometri dan keterbacaan optimal pada istilah matematika serta penalaran ilmiah.
- **Border Radius:** Sistematis (`8px`, `12px`, `16px`, `24px`), menghindari tren *pill-shaped everywhere*.
- **Iconography:** Seluruh ikon SVG dibuat khusus merepresentasikan alat akademis riil (kamera Zoom, silabus modul, kelompok belajar kecil, analitik CBT, medali emas, topi toga). Bebas dari ikon generic AI (*no sparkle/stars*).
- **Semantik & Aksesibilitas:** Menggunakan elemen HTML5 semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), keyboard navigable (Tab, Enter, Escape), dan target sentuh minimal 44px di mobile.

