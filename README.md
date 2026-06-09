# 💍 Wedding Invitation — Ayu & Adhi

Undangan pernikahan digital & fisik untuk **Ns. Adriani Oktaviani Ayu Wangi, S. Kep.** & **Adhi Ardiansyah, A.Md.Kom.**

📅 **Sabtu, 5 September 2026**

🔗 **Live:** [adhiardiansyah.github.io/wedding-invitation](https://adhiardiansyah.github.io/wedding-invitation/)

---

## ✨ Fitur

### Undangan Digital (Web)
- Tema Jawa modern mewah — gebyok frame, gunungan wayang, batik kawung, melati petals
- Responsive mobile & desktop
- Auto-play musik latar
- Personalisasi nama tamu via URL (`?to=Nama+Tamu`)
- Countdown hitung mundur
- RSVP & ucapan realtime (Firebase)
- Galeri foto, love story timeline
- Amplop digital

### Undangan Fisik (Cetak)
- Layout A4 landscape, dilipat menjadi A5
- 4 panel: Cover, Back Cover, Bismillah+Mempelai, Detail Acara
- Desain elegan warna coklat tua + gold
- QR code lokasi Google Maps
- Generate PDF otomatis via script

---

## 🚀 Quick Start

### Undangan Digital

Sudah live di GitHub Pages. Untuk personalisasi link tamu:

```
https://adhiardiansyah.github.io/wedding-invitation/?to=Budi+Santoso
```

### Undangan Fisik

Lihat panduan lengkap di [PETUNJUK-CETAK.md](PETUNJUK-CETAK.md).

```bash
# Install dependency (sekali saja)
npm install

# Generate PDF
node generate-pdf.js
```

Hasil: `undangan-fisik.pdf` — siap cetak.

---

## 📁 Struktur File

```
wedding-invitation/
├── index.html              # Undangan digital (single-file)
├── undangan-fisik.html     # Undangan fisik (layout cetak)
├── generate-pdf.js         # Script konversi HTML → PDF
├── maps-qr.svg             # QR code lokasi
├── FIREBASE_SETUP.md       # Panduan setup Firebase
├── PETUNJUK-CETAK.md       # Panduan cetak undangan fisik
├── package.json            # Dependencies (puppeteer-core)
├── README.md               # Dokumentasi ini
└── assets/
    ├── music.mp3           # Musik latar
    └── images/
        ├── bride.jpg       # Foto mempelai wanita
        ├── groom.jpg       # Foto mempelai pria
        └── photo-*.jpg     # Foto galeri
```

---

## 🛠️ Kustomisasi

### Foto
Simpan di `assets/images/`:
- `bride.jpg` & `groom.jpg` — foto mempelai
- `photo-1.jpg` s/d `photo-5.jpg` — foto galeri

### Musik
Ganti file `assets/music.mp3`

### Personalisasi URL
Parameter yang didukung: `?to=`, `?nama=`, `?untuk=`

---

## 📝 Info Pernikahan

| Detail | Info |
|--------|------|
| **Mempelai Wanita** | Ns. Adriani Oktaviani Ayu Wangi, S. Kep. |
| **Mempelai Pria** | Adhi Ardiansyah, A.Md.Kom. |
| **Orang Tua Wanita** | Bapak Muhamad Adnan & Ibu Mujiati |
| **Orang Tua Pria** | Bapak Mohammad Zaenal Fanani & Ibu Aminingsih |
| **Tanggal** | Sabtu, 5 September 2026 |
| **Akad Nikah** | 08.00 — 10.00 WIB |
| **Resepsi** | 10.00 — 16.00 WIB |
| **Lokasi** | Perumahan Taman Jatisari Permai, Jl. Semeru 2 Blok DI No. 18-19, RT.002/RW.016, Jatisari, Kec. Jatiasih, Kota Bekasi, Jawa Barat 17426 |
| **Maps** | [Google Maps](https://maps.app.goo.gl/x8h9EpjDU6npPFGR8) |

---

Made with ♥ for our special day
