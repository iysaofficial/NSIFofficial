# NSIF Official Website

Website resmi National Science and Invention Fair (NSIF), dibangun menggunakan React dan Vite.

## Struktur Folder Project (`src/`)

```
src/
├── assets/                  # Asset statis, icon font, dan stylesheet global
│   ├── animate.css
│   ├── main.css
│   ├── responsive.css
│   ├── elagent/
│   ├── font-awesome/
│   ├── simple-line-icon/
│   └── themify-icon/
├── components/              # Komponen modular aplikasi
│   ├── common/              # Komponen layout global (Navigation, Footer, BackToTop)
│   ├── home/                # Komponen spesifik halaman Beranda (Hero, About, Organized, Category, dll.)
│   ├── faq/                 # Komponen FAQ (FAQSection)
│   ├── contact/             # Komponen Kontak (ContactSection)
│   ├── news/                # Komponen Berita (NewsSection)
│   └── index.js             # Barrel export untuk semua komponen
├── data/                    # Data statis (seperti terms & conditions)
│   └── terms.jsx
├── pages/                   # Halaman-halaman website (Pages)
│   ├── Home.jsx             # Halaman Beranda
│   ├── FAQPage.jsx          # Halaman Tanya Jawab (FAQ)
│   ├── ContactPage.jsx      # Halaman Kontak
│   ├── news/NewsPage.jsx    # Halaman Berita & Media
│   ├── low/                 # Halaman Daftar Pemenang (LOW)
│   │   ├── ListLow.jsx
│   │   ├── 2025/List2025.jsx
│   │   └── 2026/List2026.jsx
│   ├── registration/        # Halaman Pendaftaran
│   │   ├── HomeIndo.jsx
│   │   ├── IndoOffline.jsx
│   │   ├── IndoOnline.jsx
│   │   ├── ThankYouIndo.jsx
│   │   └── registration.css
│   └── index.js             # Barrel export untuk semua pages
├── routes/                  # Konfigurasi routing terpusat
│   └── index.jsx
└── main.jsx                 # Entry point aplikasi (Root render & Global styles)
```

## Perintah Pengembangan

- `npm run dev` : Menjalankan development server lokal
- `npm run build` : Membangun bundle produksi ke direktori `dist/`
- `npm run preview` : Meninjau hasil build produksi secara lokal
