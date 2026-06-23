# 💍 Wedding Invitation — Adriani & Adhi

Undangan pernikahan digital & fisik untuk **Ns. Adriani Oktaviani Ayu Wangi, S.Kep.** & **Adhi Ardiansyah, A.Md.Kom.**

📅 **Sabtu, 5 September 2026**

🔗 **Live:** [adhiardiansyah.github.io/wedding-invitation](https://adhiardiansyah.github.io/wedding-invitation/?to=Budi+Santoso)

---

## ✨ Fitur

### Undangan Digital
- Tema Jawa 3D — warna coklat gelap/gold, ornamen Jawa, background image per section
- Opening: foto pengantin full-screen + tombol "Buka Undangan"
- Video opening animation (mp4) dengan reveal teks setelah video selesai
- Desktop: split layout (kiri statis ornamen Jawa + kanan scrollable)
- Mobile: full-width responsive
- Firebase RSVP & ucapan realtime
- Background musik + toggle
- Countdown hitung mundur
- Bottom navigation
- Scroll reveal animations
- Floating melati petals
- URL personalization (`?to=Nama+Tamu`)

### Undangan Fisik (Cetak)
- Layout A4 landscape, dilipat menjadi A5
- 4 panel: Cover, Back Cover, Isi Mempelai+Acara, Lokasi+QR
- Desain matching undangan digital (coklat gelap + gold)
- Background ornamen Jawa (webp/png)
- Denah lokasi SVG + QR code
- Generate PDF otomatis via Puppeteer

---

## 🚀 Quick Start

### Undangan Digital

Sudah live di GitHub Pages:
```
https://adhiardiansyah.github.io/wedding-invitation/?to=Nama+Tamu
```

### Undangan Fisik

```bash
npm install
node generate-pdf.js
```

Hasil: `undangan-fisik.pdf` — siap cetak.

---

## 📁 Struktur File

```
wedding-invitation/
├── index.html                    # Undangan digital
├── undangan-fisik.html           # Undangan fisik (layout cetak)
├── generate-pdf.js               # Script HTML → PDF
├── maps-qr.svg                   # QR code lokasi
├── package.json                  # Dependencies
├── README.md
├── PETUNJUK-CETAK.md
├── FIREBASE_SETUP.md
└── assets/
    ├── bg/                       # Background ornamen Jawa
    │   ├── BACKGROUND-GREEN-PII.webp
    │   ├── P7-COUPLE-REV-PII.webp
    │   ├── SUJA-ACARA-BG2-PII.webp
    │   ├── SUJA-CVR-DSKTP-PII-scaled-1-1.webp
    │   └── SUJA-REDD-BACK-SCALED-PII.png
    ├── images/
    │   ├── background.jpg        # Foto pengantin (opening + cover)
    │   ├── bride.jpg             # Foto mempelai wanita
    │   └── groom.jpg             # Foto mempelai pria
    ├── music.mp3                 # Musik latar
    └── PREMIUM-VINTAGE-07-1.mp4  # Video opening animation
```

---

## 🛠️ Kustomisasi

### Foto
- `assets/images/background.jpg` — foto utama pengantin
- `assets/images/bride.jpg` & `groom.jpg` — foto mempelai individual

### Musik
Ganti file `assets/music.mp3`

### URL Personalisasi
```
?to=Nama+Tamu
?nama=Nama+Tamu
?untuk=Nama+Tamu
```

---

## 📝 Info Pernikahan

| Detail | Info |
|--------|------|
| **Mempelai Wanita** | Ns. Adriani Oktaviani Ayu Wangi, S.Kep. |
| **Mempelai Pria** | Adhi Ardiansyah, A.Md.Kom. |
| **Orang Tua Wanita** | Bapak Muhamad Adnan, S.E. & Ibu Mujiati |
| **Orang Tua Pria** | Bapak Mohammad Zaenal Fanani, S.P. & Ibu Aminingsih |
| **Tanggal** | Sabtu, 5 September 2026 |
| **Akad Nikah** | 08:00 — 10:00 WIB |
| **Resepsi** | 10:00 — 16:00 WIB |
| **Lokasi** | Taman Jatisari Permai, Jl. Semeru 2 Blok DI No. 18-19, RT.002/RW.016, Kel. Jatisari, Kec. Jatiasih, Kota Bekasi, Jawa Barat 17426 |
| **Maps** | [Google Maps](https://maps.app.goo.gl/x8h9EpjDU6npPFGR8) |

---

Made with ♥ for our special day
