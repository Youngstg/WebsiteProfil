# Laporan Pemeriksaan QA Portfolio (luckystg.vercel.app)

Tanggal Pemeriksaan: 07 November 2026  
Target URL: [https://luckystg.vercel.app](https://luckystg.vercel.app)  
Peran: Penguji QA (Quality Assurance)  

---

## Ringkasan Pemeriksaan Langkah 0

> **KESIMPULAN: GAGAL PADA LANGKAH 0 (PENGUJIAN BERHENTI)**  
> Website live di `https://luckystg.vercel.app` **masih menjalankan versi lama**. Update dua bahasa belum diterapkan/dideploy ke produksi Vercel. Pengalih bahasa **EN | ID** belum ada, dan bar persentase skill masih aktif di halaman publik.

---

## Tabel Pemeriksaan Langkah 0

| Item | Status | Temuan | Bukti Nyata (Teks & Lokasi) |
|---|---|---|---|
| **Langkah 0.1: Pengalih Bahasa EN \| ID di Header** | **GAGAL** | Tidak ditemukan tombol pengalih bahasa `EN \| ID` di header navbar maupun mobile menu. Endpoint URL `/id/` mengembalikan kode status HTTP 404. | 1. Navigasi di bundle live (`/assets/index-CvAwNvq1.js`): `[{name:"HOME",href:"#hero"},{name:"ABOUT",href:"#about"},{name:"SKILLS",href:"#skills"},{name:"PROJECTS",href:"#projects"},{name:"EXPERIENCE",href:"#experience"},{name:"CONTACT",href:"#contact"}]`<br>2. Request HTTP: `curl -sI https://luckystg.vercel.app/id/` $\rightarrow$ `HTTP/1.1 404 Not Found` (X-Vercel-Error: NOT_FOUND). |
| **Langkah 0.2: Penghapusan Bar Persentase Skill** | **GAGAL** | Bar persentase skill (progress bars) masih ada dan aktif dirender di section Skills dengan nilai persentase numerik. | Di bundle live (`/assets/index-CvAwNvq1.js`): objek skill masih memuat `level`: `{name:"Python",level:85},{name:"JavaScript / TypeScript",level:80},{name:"PHP",level:70},{name:"C / C++",level:50}` dan merender elemen baris dengan atribut progress `level`. |
| **Langkah 0.3: Verifikasi Klaim Lama** | **GAGAL** | Klaim metrik lama yang sudah dihapus di dokumen konten masih tampil di halaman live. | Di bundle live (`/assets/index-CvAwNvq1.js`):<br>1. Hero: `8+` Key Projects, `15+` Tech Skills, `4+` Roles Held.<br>2. Proyek KM ITERA: `10,000+` Campus Community dan `99.9%` Uptime Reliability. |

---

## Daftar Perbaikan Berurutan (Prioritas Tindakan)

Karena Langkah 0 **WAJIB** dan pemeriksaan harus berhenti jika gagal, berikut langkah perbaikan berurutan dari yang terpenting agar versi baru dapat diuji:

1. **Selesaikan & Terapkan Perubahan di Branch `content/bilingual`:**
   - Ubah komponen `Navbar.jsx` untuk menambahkan tombol toggle `EN | ID`.
   - Ubah `Skills.jsx` dengan mengganti bar persentase menjadi tabel kategori per bidang + kolom *"Used in / Dipakai di"*.
   - Ubah `Hero.jsx`, `About.jsx`, `Portfolio.jsx`, dan `Experience.jsx` sesuai konten bilingual (9 Proyek, 6 Peran, hapus klaim 99.9% dan 10.000+).
   - Siapkan entry point multi-page `/` dan `/id/` serta metadata A0 dan B0.
2. **Kompilasi dan Uji Build Lokal:**
   - Jalankan `npm run build` dan `npm run preview` untuk memastikan tidak ada error kompilasi dan kedua rute (`/` dan `/id/`) berfungsi tanpa 404.
3. **Deploy Versi Baru ke Vercel:**
   - Lakukan merge/deploy branch `content/bilingual` ke environment Vercel (atau deploy preview URL) sehingga versi baru benar-benar live dan dapat diakses publik.
4. **Jalankan Ulang QA Langkah 1–9:**
   - Setelah Langkah 0 lolos (pengalih bahasa live dan bar persentase hilang), lakukan verifikasi menyeluruh untuk placeholder `[ ... ]`, kesetaraan konten EN & ID, validitas tautan, metadata OG/hreflang, responsivitas 375px/1280px, aksesibilitas, dan ketiadaan data privat.

