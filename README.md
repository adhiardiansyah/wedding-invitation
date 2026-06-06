# 💍 Wedding Invitation — Ayu & Adhi

Undangan pernikahan digital untuk **Ns. Adriani Oktaviani Ayu Wangi, S. Kep.** & **Adhi Ardiansyah, A.Md.Kom.**

📅 **Sabtu, 5 September 2026**

🔗 **Live:** [adhiardiansyah.github.io/wedding-invitation](https://adhiardiansyah.github.io/wedding-invitation/)

---

## 🎨 Tema Desain

### Estetika Jawa Modern Mewah

Undangan ini menggunakan tema **Jawa** yang elegan dan mewah, terinspirasi dari elemen-elemen budaya Jawa:

| Elemen | Deskripsi |
|--------|-----------|
| **Gebyok Frame** | Ornamen sudut dan border samping bergaya ukiran Gebyok (partisi kayu tradisional Jawa) |
| **Gold Arch + Crown** | Frame lengkung emas di cover dengan mahkota (crown) SVG di puncak |
| **Gunungan Wayang** | Ornamen Gunungan/Kayon dari wayang kulit sebagai pembatas section |
| **Batik Kawung** | Pola Kawung (lingkaran geometris) sebagai watermark background |
| **Warna Kayu Jati** | Palet coklat kayu jati yang kaya: coklat gelap, coklat kayu, krem, emas |
| **Gold Accent** | Garis emas, border emas, tombol emas, efek shimmer di semua section |
| **Crown Motif** | Mahkota kerajaan Jawa di atas cover arch |
| **Corner Ornaments** | Ornamen sudut Gebyok di kartu mempelai |
| **Melati Petals** | Kelopak melati jatuh sebagai animasi dekoratif |

### Palet Warna

```
--gold:        #C8A96E    (emas utama)
--gold-light:  #E8D5A3    (emas terang)
--gold-dark:   #8B6914    (emas gelap)
--brown-dark:  #3E2518    (coklat kayu gelap)
--brown-rich:  #4A2E1C    (coklat kayu kaya)
--cream:       #FFF8E7    (krem)
--maroon:      #6B1A1A    (merah marun)
```

### Tipografi

- **Headings:** Crimson Text Italic (elegant serif)
- **Body:** Quicksand (clean sans-serif)

---

## ✨ Fitur

### Sections
1. **Cover** — Gold arch frame, crown motif, nama tamu personalisasi
2. **Bismillah** — Ayat Al-Quran dengan Gunungan ornament
3. **Kedua Mempelai** — Kartu mempelai dengan foto, corner ornaments, shimmer text
4. **Countdown** — Hitung mundur ke hari pernikahan
5. **Acara** — Detail Akad Nikah & Resepsi dengan tombol Maps
6. **Love Story** — Timeline perjalanan cinta
7. **Galeri** — Grid foto prewedding
8. **Amplop Digital** — Rekening bank dengan tombol salin
9. **RSVP** — Form konfirmasi kehadiran & ucapan

### Fitur Teknis
- **Single-file HTML** — Semua CSS/JS inline, mudah di-deploy
- **Responsive** — Tampilan optimal di mobile dan desktop
- **Auto-play Music** — Musik otomatis saat user pertama kali berinteraksi
- **Personalisasi URL** — Parameter `?to=Nama_Tamu` untuk menampilkan nama tamu
- **LocalStorage RSVP** — Data tersimpan di browser (tanpa backend)
- **Reveal Animations** — Animasi muncul saat scroll
- **Floating Petals** — Kelopak melati jatuh dekoratif
- **Shimmer Text** — Efek berkilau pada nama mempelai

---

## 🚀 Deploy ke GitHub Pages

### Langkah-langkah:

1. **Buat repository** di GitHub dengan nama `wedding-invitation`

2. **Push kode** ke repository:
   ```bash
   cd ~/Documents/Projects/wedding-invitation
   git init
   git add .
   git commit -m "💍 Wedding invitation"
   git branch -M main
   git remote add origin https://github.com/adhiardiansyah/wedding-invitation.git
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages:**
   - Buka repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Klik Save

4. **Tunggu 1-2 menit** hingga live di:
   `https://adhiardiansyah.github.io/wedding-invitation/`

---

## 🛠️ Kustomisasi

### Mengganti Foto

Simpan foto di folder `assets/images/`:
- `bride.jpg` — Foto mempelai wanita
- `groom.jpg` — Foto mempelai pria
- `photo-1.jpg` s/d `photo-5.jpg` — Foto galeri

### Mengganti Musik

Simpan file `music.mp3` di folder `assets/`

### Personalisasi Link Tamu

Tambahkan parameter `?to=` di URL:
```
https://adhiardiansyah.github.io/wedding-invitation/?to=Budi+Santoso
```

Mendukung parameter: `?to=`, `?nama=`, `?untuk=`

---

## 📁 Struktur File

```
wedding-invitation/
├── index.html              # Single-file HTML/CSS/JS
├── README.md               # Dokumentasi ini
└── assets/
    ├── music.mp3           # Denny Caknan - Cundamani
    └── images/
        ├── bride.jpg       # Foto mempelai wanita
        ├── groom.jpg       # Foto mempelai pria
        ├── photo-1.jpg     # Foto galeri 1
        ├── photo-2.jpg     # Foto galeri 2
        ├── photo-3.jpg     # Foto galeri 3
        ├── photo-4.jpg     # Foto galeri 4
        └── photo-5.jpg     # Foto galeri 5
```

---

## 📝 Info Pernikahan

| Detail | Info |
|--------|------|
| **Mempelai Wanita** | Ns. Adriani Oktaviani Ayu Wangi, S. Kep. |
| **Mempelai Pria** | Adhi Ardiansyah, A.Md.Kom. |
| **Ortua Wanita** | Bapak Muhamad Adnan & Ibu Mujiati |
| **Ortua Pria** | Bapak Mohammad Zaenal Fanani & Ibu Aminingsih |
| **Tanggal** | Sabtu, 5 September 2026 |
| **Akad Nikah** | 08.00 — 10.00 WIB |
| **Resepsi** | 10.00 — 16.00 WIB |
| **Lokasi** | Perumahan Taman Jatisari Permai, Jl. Semeru 2 Blok DI No. 18-19, RT.002/RW.016, Jatisari, Kec. Jatiasih, Kota Bekasi, Jawa Barat, 17426 |
| **Maps** | [Google Maps](https://maps.app.goo.gl/x8h9EpjDU6npPFGR8) |
| **Amplop Digital** | BRI 670701031400534 a.n. Adhi Ardiansyah |

---

Made with ♥ for our special day
