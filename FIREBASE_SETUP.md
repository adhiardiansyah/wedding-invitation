# 🔥 Panduan Setup Firebase untuk Wedding Invitation

## Langkah 1: Buat Project Firebase

1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Klik **"Add project"** (atau "Tambahkan proyek")
3. Nama project: `wedding-ayu-adhi` (atau bebas)
4. Google Analytics: **Nonaktifkan** (tidak perlu)
5. Klik **"Create project"** / **"Buat proyek"**

## Langkah 2: Buat Realtime Database

1. Di Firebase Console, klik **"Realtime Database"** di sidebar kiri
2. Klik **"Create Database"** / **"Buat Database"**
3. Pilih lokasi: **Singapore** (terdekat ke Indonesia)
4. Security rules: Pilih **"Start in test mode"** (untuk testing)
5. Klik **"Enable"** / **"Aktifkan"**

## Langkah 3: Ambil Config Firebase

1. Klik icon ⚙️ (Settings) → **"Project settings"** / **"Setelan proyek"**
2. Scroll ke bawah, klik icon **Web** (</>)
3. Nama app: `wedding-invitation`
4. Klik **"Register app"**
5. Akan muncul config seperti ini:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "wedding-ayu-adhi.firebaseapp.com",
  databaseURL: "https://wedding-ayu-adhi-default-rtdb.firebaseio.com",
  projectId: "wedding-ayu-adhi",
  storageBucket: "wedding-ayu-adhi.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

6. **Copy semua config ini** dan kirim ke aku!

## Langkah 4: Set Security Rules (Penting!)

1. Kembali ke **"Realtime Database"**
2. Klik tab **"Rules"**
3. Ganti dengan:

```json
{
  "rules": {
    "wishes": {
      ".read": true,
      ".write": true
    }
  }
}
```

4. Klik **"Publish"**

> ⚠️ Rules di atas membiarkan semua orang baca dan tulis. Ini OK untuk undangan pernikahan karena hanya orang yang punya link yang bisa akses.

## Langkah 5: Kirim Config ke Aku

Kirim config Firebase-nya ke aku, nanti aku langsung implementasikan di code!

---

## 🔒 Catatan Keamanan

- Config Firebase **AMAN** untuk di-share (bukan rahasia)
- Yang rahasia adalah **Service Account Key** (tidak dipakai di frontend)
- Database hanya bisa diakses orang yang tahu URL undangan
- Kamu bisa monitor semua data di Firebase Console

## 📊 Monitor Data

Setelah live, kamu bisa lihat semua RSVP di:
- Firebase Console → Realtime Database → Data
- Bisa export ke CSV/JSON kapan saja
