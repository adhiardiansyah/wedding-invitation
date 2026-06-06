# 💍 Wedding Invitation - Ayu & Adhi

Undangan pernikahan digital untuk **Ns. Adriani Oktaviani Ayu Wangi, S. Kep.** & **Adhi Ardiansyah, A.Md.Kom.**

📅 **Sabtu, 5 September 2026**

🔗 **Live:** https://adhiardiansyah.github.io/wedding-invitation/

---

## ✨ Fitur

### 🎨 Tema Jawa
- Background motif **Kawung** & **Parang** (batik tradisional)
- Pola **Mega Mendung** (awan khas Cirebon)
- Objek melayang: **Wayang**, **Gamelan**, **Batik Stamp**, **Kipas**
- Ornamen sudut Jawa di setiap section
- Kelopak **bunga melati** jatuh perlahan (floating petals)

### 🎭 Animasi
| Tipe | Efek |
|------|------|
| `reveal` | Fade in + naik dari bawah |
| `reveal-left` | Slide dari kiri |
| `reveal-right` | Slide dari kanan |
| `reveal-scale` | Scale up dari kecil |
| `reveal-zoom` | Zoom in dengan bounce |
| `reveal-rotate` | Rotate + fade in |
| `reveal-flip` | Flip 3D perspective |

- ✨ **Shimmer text** pada nama pengantin
- 💗 **HeartBeat** pada tanda & dan love
- 🎵 **Ornament float & glow** pada ornamen kawung
- 🔘 **Button pulse** pada tombol "Buka Undangan"
- 📸 **Photo glow** pada foto pengantin
- ⏰ **Countdown pulse** pada angka countdown

### 🎵 Musik
- **Denny Caknan - Cundamani** sebagai background music
- Auto-play saat user berinteraksi (touch/click)
- Toggle play/pause di pojok kanan atas

### 📱 Fitur Lainnya
- 📱 Fully responsive (mobile-first)
- ⏰ Countdown timer real-time
- 📸 Gallery foto (5 slot)
- 💒� RSVP & ucapan (tersimpan di localStorage)
- 💳 Amplop digital (rekening BRI)
- 🗺️ Link Google Maps
- 🙏 Bismillah & QS. Ar-Rum: 21
- 📍 Navigasi dots di sisi kanan

### 👤 Personalisasi Tamu
Tambahkan parameter `?to=NAMA` di URL untuk menampilkan nama tamu:

```
https://adhiardiansyah.github.io/wedding-invitation/?to=Budi+Santoso
https://adhiardiansyah.github.io/wedding-invitation/?to=Ibu+Ratna
https://adhiardiansyah.github.io/wedding-invitation/?to=Pak+Ahmad+keluarga
```

Parameter yang didukung: `?to=`, `?nama=`, `?untuk=`

---

## 📁 Struktur Folder

```
wedding-invitation/
├── index.html          # Single-file website (HTML + CSS + JS)
├── README.md
└── assets/
    ├── music.mp3       # Denny Caknan - Cundamani
    └── images/
        ├── bride.jpg   # Foto mempelai wanita
        ├── groom.jpg   # Foto mempelai pria
        ├── photo-1.jpg # Galeri foto 1
        ├── photo-2.jpg # Galeri foto 2
        ├── photo-3.jpg # Galeri foto 3
        ├── photo-4.jpg # Galeri foto 4
        └── photo-5.jpg # Galeri foto 5
```

---

## 🚀 Deploy ke GitHub Pages

1. Push repo ini ke GitHub
2. Buka **Settings** → **Pages**
3. Pilih source: **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Akses di: `https://adhiardiansyah.github.io/wedding-invitation/`

---

## 📸 Menambahkan Foto

Letakkan foto di folder `assets/images/` dengan nama:
- `bride.jpg` — Foto mempelai wanita
- `groom.jpg` — Foto mempelai pria
- `photo-1.jpg` s/d `photo-5.jpg` — Galeri foto

---

## 🎵 Mengganti Musik

Letakkan file musik di `assets/music.mp3` atau edit tag `<audio>` di `index.html`.

---

## 📝 Customisasi

Semua data (nama, tanggal, lokasi, cerita, rekening) bisa diedit langsung di `index.html`.

---

## 🎨 Warna Tema

| Variabel | Warna | Kegunaan |
|----------|-------|----------|
| `--gold` | #C8A96E | Warna emas utama |
| `--gold-light` | #D4AF37 | Emas terang |
| `--gold-dark` | #8B6914 | Emas gelap |
| `--cream` | #FFF8E7 | Background utama |
| `--brown` | #5C3D2E | Coklat |
| `--maroon` | #8B1A1A | Merah marun |

---

Made with ♥ by [Adhi Ardiansyah](https://github.com/adhiardiansyah)
