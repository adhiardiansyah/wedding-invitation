# 🖨️ Petunjuk Cetak Undangan Fisik

Panduan lengkap untuk mencetak undangan pernikahan dari file `undangan-fisik.html`.

---

## 📐 Spesifikasi Undangan

| Spesifikasi | Detail |
|-------------|--------|
| **Ukuran kertas** | A4 (297 × 210 mm) landscape |
| **Hasil akhir** | A5 (148 × 210 mm) setelah dilipat |
| **Jumlah panel** | 4 panel (cover, back cover, dalam kiri, dalam kanan) |
| **Cetak** | Bolak-balik (duplex) |

---

## 🔧 Generate PDF

### Prasyarat

- Node.js (v18+)
- Google Chrome terinstall di sistem

### Langkah

```bash
# 1. Install dependency (sekali saja)
npm install

# 2. Generate PDF
node generate-pdf.js
```

Hasil: file `undangan-fisik.pdf` di folder yang sama.

---

## 🖨️ Cara Cetak

### Opsi A: Cetak Sendiri (Printer Rumah/Kantor)

1. Buka `undangan-fisik.pdf`
2. Setting printer:
   - **Ukuran kertas:** A4
   - **Orientasi:** Landscape
   - **Skala:** 100% (Actual Size / Fit to Page)
   - **Margin:** None / 0
   - **Duplex:** Flip on Short Edge
3. Cetak halaman 1 (sisi luar: cover + back cover)
4. Balik kertas, cetak halaman 2 (sisi dalam: bismillah + detail acara)
5. Lipat kertas tepat di tengah

### Opsi B: Cetak di Percetakan (Rekomendasi)

Bawa file `undangan-fisik.pdf` ke percetakan dan sampaikan spesifikasi berikut:

| Item | Spesifikasi |
|------|-------------|
| **File** | `undangan-fisik.pdf` (2 halaman) |
| **Kertas** | Art Carton 260gsm / Ivory 260gsm |
| **Cetak** | Full color, bolak-balik |
| **Orientasi** | Landscape |
| **Finishing** | Laminasi doff + hotprint emas (opsional) |
| **Lipat** | Lipat tengah (menjadi A5) |

---

## 📄 Layout Panel

Setelah dilipat, urutan panel dari luar ke dalam:

```
┌─────────────────────────────────────────┐
│         SISI LUAR (Halaman 1)           │
│                                         │
│   ┌──────────────┬──────────────┐       │
│   │              │              │       │
│   │  COVER       │  BACK COVER  │       │
│   │  (Depan)     │  (Belakang)  │       │
│   │              │              │       │
│   └──────────────┴──────────────┘       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         SISI DALAM (Halaman 2)          │
│                                         │
│   ┌──────────────┬──────────────┐       │
│   │              │              │       │
│   │  BISMILLAH   │  DETAIL      │       │
│   │  & MEMPELAI  │  ACARA       │       │
│   │              │              │       │
│   └──────────────┴──────────────┘       │
└─────────────────────────────────────────┘
```

Ketika dilipat dan dibuka seperti buku:
- **Sampul depan** → Cover dengan nama mempelai
- **Buka** → Kiri: Bismillah & data mempelai | Kanan: Detail acara & lokasi
- **Sampul belakang** → Pesan penutup & ucapan terima kasih

---

## ✍️ Menulis Nama Tamu

Pada cover terdapat garis kosong untuk nama tamu. Ada 2 opsi:

1. **Tulis tangan** — Setelah dicetak, tulis nama tamu dengan pulpen emas/hitam
2. **Edit HTML** — Sebelum generate PDF, ubah teks di bagian guest field pada `undangan-fisik.html`

---

## 💡 Tips Hasil Terbaik

- **Kertas:** Gunakan minimal 230gsm agar tidak tembus dan terasa kokoh
- **Warna:** Pastikan printer dikalibrasi, warna coklat tua harus pekat (tidak pucat)
- **Hotprint emas:** Finishing hotprint pada ornamen emas memberikan kesan mewah
- **Laminasi doff:** Memberikan tekstur halus dan melindungi cetakan
- **Test print:** Cetak 1 lembar dulu di kertas HVS biasa untuk cek layout sebelum cetak massal
- **Amplop:** Gunakan amplop ukuran C5 (162 × 229 mm) untuk undangan A5

---

## 🔄 Kustomisasi

Jika ingin mengubah konten undangan fisik:

1. Edit file `undangan-fisik.html`
2. Buka di browser untuk preview
3. Jalankan `node generate-pdf.js` untuk regenerate PDF
4. Cetak PDF baru

---

## ❓ Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Warna terlalu terang saat cetak | Naikkan saturasi di setting printer atau minta percetakan adjust |
| Teks terlalu kecil | Pastikan cetak di skala 100%, bukan "Fit to Page" yang memperkecil |
| Lipatan tidak pas tengah | Gunakan penggaris dan bone folder untuk lipatan presisi |
| QR code tidak terbaca | Pastikan resolusi cetak minimal 300 DPI |
| PDF layout berbeda dari browser | Gunakan `node generate-pdf.js` — jangan pakai Ctrl+P browser |
