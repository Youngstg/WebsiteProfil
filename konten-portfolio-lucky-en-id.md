# Konten Portfolio — Lucky Immanuel Sitanggang (EN + ID)

Dokumen ini berisi tulisan ulang seluruh konten portfolio dalam dua versi, **English (Bagian A)** dan **Bahasa Indonesia (Bagian B)**, dengan struktur yang sama agar mudah ditempel bagian per bagian.

## Cara memakai

1. Tanda **`[ … ]`** berarti data yang harus kamu isi dengan fakta asli. **Jangan dibiarkan kosong dan jangan diisi angka yang tidak bisa dibuktikan.** Kalau tidak ada datanya, hapus kalimat itu.
2. Isi sudah mengikuti fakta dari teks portfolio-mu. Angka seperti 97.2% (SIBI), IPK 3.77, dan skor TOEFL 513 dipertahankan karena sudah ada di webmu.
3. Beberapa klaim lama sengaja diganti agar sesuai kenyataan hasil UAT (misalnya "24/7" di DIGO dan "filter AI" di CuteSnaps). Lihat bagian **Catatan keaslian** di bawah.
4. Tambahkan tombol pengalih bahasa **EN | ID** di pojok atas webmu, dan pastikan tiap versi punya atribut bahasanya sendiri (`lang="en"` dan `lang="id"`).

## Saran 1–6 dan di mana penerapannya

Ini enam saran prioritas dari ulasan sebelumnya, dan di mana masing-masing diterapkan di dokumen ini.

| # | Saran | Penerapan di dokumen | Yang masih harus kamu lakukan |
|---|---|---|---|
| 1 | Pembuka terlalu umum, ganti dengan bukti | Hero (A1/B1) dan About (A2/B2) memakai AAC dan SIBI 97,2% sebagai bukti, tanpa frasa seperti "rock-solid" atau "fault-tolerant" | Isi baris "How I work / Cara saya bekerja" dengan 1–2 kalimat spesifik milikmu |
| 2 | Proyek AAC harus jadi proyek unggulan | Proyek nomor 1 di A4/B4 | Buat video demo singkat (30–60 detik) jika perjanjian kerahasiaan mengizinkan |
| 3 | Ganti bar persentase skill | Skills (A3/B3) berupa tabel per bidang plus proyek tempat dipakai | Isi kolom "Used in" yang masih `[ … ]` |
| 4 | Kartu proyek harus menjelaskan kamu, bukan hanya fitur | Tiap kartu kini punya: ringkasan, peran, teknologi, dampak/hasil, **tantangan**, dan tautan | Isi peran, hasil, dan tantangan tiap kartu dengan fakta asli |
| 5 | Klaim angka perlu bukti | Bagian "Catatan keaslian" dan tabel "Bukti angka" di bawah | Siapkan bukti untuk tiap angka sebelum publikasi |
| 6 | Proyek yang ditautkan harus siap | Tabel "Kesiapan proyek" di bawah | Selesaikan perbaikan prioritas, atau ubah klaim, sebelum mengirim lamaran |

### Template kartu proyek (saran #4)

Setiap proyek unggulan sebaiknya bisa menjawab lima pertanyaan ini dalam 4–6 baris:

1. **Masalah:** siapa penggunanya dan apa kesulitannya?
2. **Peranmu:** apa yang kamu kerjakan sendiri, dan apa yang dikerjakan tim?
3. **Tantangan:** keputusan atau masalah teknis tersulit, dan bagaimana kamu menyelesaikannya.
4. **Hasil:** angka atau umpan balik nyata (pengguna, akurasi, waktu muat, dll.).
5. **Bukti:** tautan demo, repo, atau laporan yang bisa langsung dibuka.

### Bukti angka (saran #5)

| Angka di webmu | Pertanyaan yang mungkin diajukan rekruter | Bukti yang disiapkan |
|---|---|---|
| SIBI 97,2% | Diuji pada berapa klip? Dibagi bagaimana (latih/uji)? Metriknya akurasi atau F1? Bagaimana per kelas? | Laporan atau notebook, jumlah data uji, matriks konfusi |
| 10 gestur SIBI | Gestur apa saja? Dari mana datanya? | Daftar kelas dan sumber dataset |
| IPK 3,77 | Predikat resminya apa? | Transkrip nilai |
| TOEFL 513 | ITP atau iBT? Kapan? | Sertifikat (PDF) |
| AWS Cloud Practitioner | Kapan lulus? | Tanggal dan ID verifikasi kredensial |
| "99.9% uptime" dan "10.000+ komunitas" (KM ITERA) | Diukur dengan apa? Arti 10.000+ apa? | Dihapus di dokumen ini. Pakai lagi hanya jika ada sumber ukurnya dan definisi yang jelas |

### Kesiapan proyek (saran #6)

Rekruter dan engineer akan membuka demo-mu. Ini hal yang sebaiknya beres lebih dulu, berdasarkan hasil UAT:

| Proyek | Sebelum ditautkan, selesaikan |
|---|---|
| AAC (Karla Bionic) | Pastikan boleh dipublikasikan (kerahasiaan); siapkan video demo |
| SIBI | Siapkan laporan, data uji, dan repositori yang rapi dengan README |
| KM ITERA | Tegaskan peranmu dan hasil terukur; pastikan situs live berfungsi |
| KosMatch | Amankan parameter `redirect`, buat kalkulator bisa dipakai langsung, tambah rate limiting, dan halaman privasi/syarat |
| CareCircle | Perbaiki unggah dokumen (MinIO), tambah header keamanan, halaman privasi, dan fitur hapus akun. Ini aplikasi data kesehatan, jadi bagian privasi paling dinilai |
| CuteSnaps | Pastikan room hanya untuk 2 orang, pasang TURN yang layak, dan samakan klaim dengan fitur nyata |
| DIGO | Tambah kebijakan privasi, batas input dan rate limit, perbaiki reset sesi, dan jangan klaim 24/7 |
| AllAround | Hapus angka kompresi palsu, tangani PDF terkunci dan rusak, dan ubah klaim "< 1MB" bila belum tercapai |
| Unfolia | Periksa ketentuan Instagram; proyek ini belum diuji |
| EDA Kanker Payudara | Aman; cukup tandai sebagai proyek akademik |

Detail tiap perbaikan ada di file `rencana-perbaikan-*.md` masing-masing proyek.

---

## Catatan keaslian (baca sebelum menempel)

| Hal | Keputusan di dokumen ini |
|---|---|
| "99.9% Uptime" dan "10,000+ Campus Community" (KM ITERA) | Dihapus dari teks utama. Pakai hanya jika bisa kamu jelaskan dan buktikan (apa arti 10.000+, dari mana angka uptime) |
| "8+ Key Projects" dan "4+ Roles" | Diganti dengan angka yang cocok dengan isi: 9 proyek dan 6 peran |
| Bar persentase skill | Dihapus; skill dikelompokkan dan dikaitkan dengan proyek |
| "Cisco CCNA" | Ditulis sebagai materi/praktik lab, karena tidak ada sertifikat CCNA di bagian Credentials. Ganti jika kamu memang punya sertifikasinya |
| CuteSnaps: "filter AI" dan "beragam frame" | Ditulis sesuai fitur nyata (properti AR berbasis MediaPipe dan frame Y2K). Tambahkan "AI" atau "puluhan frame" hanya jika benar |
| DIGO: "24/7" | Dihapus. Tambahkan lagi hanya setelah terbukti |
| AllAround: "puluhan utilitas" | Ditulis "20+ alat" (hasil UAT mencatat 24 alat) |
| Unfolia | Periksa ketentuan Instagram sebelum menampilkan proyek ini secara publik |
| EDA Breast Cancer | Dilabeli sebagai proyek akademik |
| Proyek yang dipamerkan | Selesaikan perbaikan prioritas pada proyek yang kamu tautkan (privasi, klaim, bug) sebelum melamar |

---

# BAGIAN A — ENGLISH

## A0. Metadata (untuk Google dan pratinjau WhatsApp/LinkedIn)

**Title:**
```
Lucky Immanuel Sitanggang — Software Engineer & AI | ITERA
```

**Description:**
```
Informatics graduate building AI and full-stack apps for accessibility: an AAC app for children with cerebral palsy, SIBI sign language recognition (97.2%), and campus web platforms.
```

**og:title:** `Lucky Immanuel Sitanggang — Software Engineer & AI`
**og:description:** (sama dengan description di atas)
**og:image:** gambar 1200×630 px berisi foto atau nama + peran (wajib ada agar pratinjau tidak polos)

## A1. Hero

**Headline**
> Hi, I'm Lucky. I build AI and full-stack apps with accessibility at the core.

**Sub-headline**
> Informatics Engineering graduate from Institut Teknologi Sumatera (ITERA), GPA 3.77. At Karla Bionic I built an AAC app for children with cerebral palsy, and I trained a VideoMAE model that recognizes 10 Indonesian Sign Language (SIBI) gestures at 97.2% accuracy. Open to Software Engineer and AI Engineer roles, available immediately.

**Tombol:** `View Projects` · `Download CV` · `Contact Me`

**Angka ringkas**
`3.77 GPA` · `9 Projects` · `6 Roles`

**Teknologi utama:** Python · React Native · Next.js · Laravel · Firebase · PostGIS

## A2. About

**Heading:** About Me

> I'm an Informatics Engineering graduate from ITERA (2022–2026, GPA 3.77/4.00) who cares about technology that people with different abilities can actually use. My work spans mobile apps, computer vision, web platforms, and networking labs.
>
> **What I've built:** an AAC communication app for children with Level 3 cerebral palsy at Karla Bionic; a VideoMAE-based Indonesian Sign Language recognizer; and web products for KM ITERA using Laravel and REST APIs.
>
> **How I work:** I focus on solving real-world problems through intelligent automation, pragmatic system design, and continuous testing.
>
> **What I'm looking for:** Software Engineer or AI Engineer roles across the IT field where I can build impactful technology products with real users.

**Kutipan (opsional):**
> Technology should close capability gaps, not widen them.

**Kartu singkat**
- **How I build:** I start from the user's real constraints, then choose the simplest architecture that is reliable and accessible.
- **What drives me:** inclusive tools, intelligent automation, and software that works for real people in real conditions.

## A3. Skills

**Intro:** Grouped by area, with the projects where I used each.

| Area | Skills | Used in |
|---|---|---|
| Languages | Python, JavaScript / TypeScript, PHP, C / C++ | SIBI, CuteSnaps, KosMatch, CareCircle, KM ITERA, Lab PKS |
| Mobile & Web | React Native (Expo), React / Next.js, Laravel, Firebase / Firestore, PostGIS | AAC app, KM ITERA, KosMatch, CareCircle |
| AI & Vision | OpenCV, VideoMAE / Transformers, Google Gemini API, MediaPipe, image-processing pipelines | SIBI Recognition, DIGO, CuteSnaps |
| Infrastructure | Linux (Ubuntu) & Postfix, VPS deployment, Git & GitHub Actions, Cisco Packet Tracer (CCNA coursework and lab practice) | Network Lab, KM ITERA |

## A4. Featured Projects

> Tampilkan 6 proyek ini di bagian utama, sisanya ringkas di bagian "More projects". Isi tautan Demo/GitHub setiap proyek. Rekruter akan mengkliknya.

### 1. AAC App for Children with Cerebral Palsy — Karla Bionic *(flagship)*
A cross-platform communication app for children with Level 3 cerebral palsy. It has a landscape interface with large communication buttons, and real-time monitoring for parents with push notifications.
**My role:** Mobile Developer Intern. **Stack:** React Native (Expo Router), Firebase Firestore & Auth, EAS.
**Impact:** Customized specifically for 1 child with Level 3 cerebral palsy and their parents, making daily communication significantly easier and giving parents a reliable way to monitor their child.
**Challenge:** Designing an interface that met the specific visual and motor comfort requirements of the child while implementing reliable push notifications; solved through iterative usability testing with the child and guardian, guided by assistive technology research literature.

### 2. SIBI Sign Language Recognition
Fine-tuned a pre-trained VideoMAE transformer to classify 10 Indonesian Sign Language gestures from video, reaching 97.2% accuracy across a 1,000-video dataset.
**My role:** End-to-End AI Engineer (data collection at SLB PKK, cleaning, preprocessing, training, evaluation, and deployment). **Stack:** Python, PyTorch / Transformers, OpenCV, Hugging Face.
**Links:** [Demo (Hugging Face)](https://huggingface.co/spaces/Luckystg/SIBI_Recognition_VideoMAE-demo) · [GitHub](https://github.com/Youngstg/SIBI-Classification-VideoMAE)
**Challenge:** Navigating communication barriers while recording 1,000 gesture videos with students at SLB PKK, alongside lengthy transformer training times; solved through patient adaptive communication and systematic hyperparameter tuning.

### 3. KM ITERA Website
Official website and digital hub for KM ITERA, serving active students and the public seeking information about campus governance. Built with Laravel, Tailwind CSS, and MySQL, featuring an interactive landing page with entrance animations and an integrated context-aware chatbot.
**My role:** Frontend Developer & Chatbot Integrator (engineered the interactive landing page UI, integrated backend APIs, and developed the chatbot interface with customized context). **Result:** Modernized campus portal presentation and enhanced search engine SEO visibility.
**Link:** [Live Site](https://www.km-itera.com)
**Challenge:** Crafting modern interactive UI components within Laravel's Blade templating engine and resolving production data-fetching bugs; solved by optimizing client-side scripting and debugging production query endpoints for stable data rendering.

### 4. KosMatch
A decision-support web app for choosing a boarding house (kos) near campus. It compares the real monthly cost, travel time, required facilities, and house rules, using PostGIS for geospatial queries.
**My role:** Solo Full-Stack Developer. **Stack:** Next.js, PostGIS, External Map APIs.
**Links:** [Live](https://kosmatch.us.ci) · [GitHub](https://github.com/Youngstg/KosMatch)
**Challenge:** Accurately mapping dynamic address coordinate points from external APIs and customizing the interactive map interface for intuitive boarding house comparisons.

### 5. CareCircle
A private coordination space for families caring for elderly relatives: shared tasks, medication schedules, health logs, and a vault for important medical documents, with role-based access.
**My role:** Solo Full-Stack Developer. **Stack:** Next.js, MySQL, Prisma, MinIO (self-hosted VPS).
**Links:** [Live](https://carecircle.us.ci) · [GitHub](https://github.com/Youngstg/CareCircle)
**Challenge:** Configuring and integrating self-hosted MinIO object storage on a personal VPS to securely store and serve confidential family medical records within a Next.js environment.

### 6. CuteSnaps
A Y2K-style photobooth in the browser. Two people can take photos together in real time over WebRTC, with face-tracked AR props (MediaPipe) and aesthetic photo frames.
**My role:** Solo Developer. **Stack:** WebRTC, MediaPipe Face Mesh, Canvas API, Python (Flask), OpenCV.
**Links:** [Live](https://cutesnaps.us.ci) · [GitHub](https://github.com/Youngstg/Photobooth)
**Challenge:** Accurately compositing photos into aesthetic frame templates without distorting template aspect ratios, while enforcing room security for private real-time duo WebRTC sessions.

### More projects
- **DIGO** — A sales and customer-service chatbot built on Google Gemini, with a lead form for handing off to a human team. [Live](https://digo.us.ci) · [GitHub](https://github.com/Youngstg/Digo-Chatbot)
- **AllAround** — A browser-based toolbox with 20+ tools, including PDF compression and merging, background changer, word counter, and QR generator. [Live](https://allaround-woad.vercel.app) · [GitHub](https://github.com/Youngstg/Allaround)
- **Unfolia** — A Flask web app that tracks Instagram followers and shows change history as charts. [GitHub](https://github.com/Youngstg/UnfollowerChecker)
- **Breast Cancer Classification (EDA)** — Academic project: exploratory data analysis and machine-learning models on a public dataset, covering feature correlation, outliers, and model evaluation. [Notebook](https://colab.research.google.com/github/Youngstg/EDA-Breast-Cancer/blob/main/EDA_Breast_Cancer_Portfolio.ipynb) · [GitHub](https://github.com/Youngstg/EDA-Breast-Cancer)

## A5. Experience

**Mobile Developer Intern — Karla Bionic** · Jun – Aug 2025
- Built a cross-platform AAC app for children with Level 3 cerebral palsy using React Native (Expo Router) and Firebase.
- Designed an inclusive landscape interface with large communication buttons and added real-time parent monitoring with push notifications.
- Configured EAS builds for deployment, successfully delivering a production-ready application tailored for the child and guardian.

**Specialist Staff, Web & IT Development — KM ITERA** · Feb – Dec 2025
- Improved user experience, accessibility, and search engine visibility of university and KM ITERA websites by delivering modern interactive interfaces.
- Led the digitalization of inter-organization campus activities by building IT products with Laravel and REST APIs.

**Computer Network Lab Assistant — ITERA** · Sep – Dec 2025
- Guided 30–50 students in configuring VLANs, DHCP, and wireless access points with Cisco technologies.
- Helped students set up Linux mail servers using SMTP and Postfix.

**Teaching Assistant, Formal Languages & Automata Theory — ITERA** · Sep – Dec 2024
- Acted as liaison between students and lecturers; managed substitute class schedules and assessments.
- Ran tutoring sessions on DFA/NFA, grammars, and formal computation models for undergraduate students.

**Laboratory Assistant, PKS 1 & 2 (Intro to Computing & Software) — ITERA** · Aug 2023 – Dec 2024
- Prepared instructional materials and was fully responsible for grading tasks, practicums, and quizzes for 70–120 students across multiple semesters (C++ and Python).
- Designed programming assessments together with faculty.

**Staff PPK, HMIF ITERA** · Aug 2023 – Dec 2024
- Led the Thesis Expo as Head of Event, directing planning through execution for 100+ attendees.
- Coordinated the FTI Expo and organized seminars with industry speakers.

## A6. Education & Certificates

**Institut Teknologi Sumatera (ITERA)** · 2022 – 2026
Bachelor of Informatics Engineering · GPA 3.77 / 4.00 (Cum Laude)
Coursework: Artificial Intelligence, Computer Vision, Database Systems, Computer Networks, Object-Oriented Software Engineering.

**Certificates**
- **AWS Certified Cloud Practitioner** — Amazon Web Services · [View PDF](/images/certificates/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf)
- **TOEFL ITP** — ITERA Language Center · Score 513 · [View PDF](/images/certificates/TOEFL_Lucky%20Immanuel%20Sitanggang.pdf)

**CV:** [Download CV (PDF)](/images/certificates/CV_Lucky_Immanuel_Sitanggang.pdf)

## A7. Contact

**Heading:** Let's build something together

> Open to Software Engineer and AI Engineer roles, collaborations, and projects that make technology more inclusive. I usually reply within 1–2 business days.

- **Email:** immanuelsgt@gmail.com
- **LinkedIn:** Lucky Immanuel
- **GitHub:** @Youngstg
- **Location:** Sumatera / Lampung, Indonesia

**Footer:** © 2026 Lucky Immanuel Sitanggang · GitHub · LinkedIn · Back to top

---

# BAGIAN B — BAHASA INDONESIA

## B0. Metadata (untuk Google dan pratinjau WhatsApp/LinkedIn)

**Title:**
```
Lucky Immanuel Sitanggang — Software Engineer & AI | ITERA
```

**Description:**
```
Lulusan Teknik Informatika yang membangun aplikasi AI dan full-stack untuk aksesibilitas: aplikasi AAC untuk anak cerebral palsy, pengenalan bahasa isyarat SIBI (akurasi 97,2%), dan platform web kampus.
```

**og:title:** `Lucky Immanuel Sitanggang — Software Engineer & AI`
**og:description:** (sama dengan description di atas)
**og:image:** gambar 1200×630 px (sama dengan versi Inggris)

## B1. Hero

**Headline**
> Halo, saya Lucky. Saya membangun aplikasi AI dan full-stack dengan aksesibilitas sebagai inti.

**Sub-headline**
> Lulusan Teknik Informatika Institut Teknologi Sumatera (ITERA), IPK 3,77. Di Karla Bionic saya membangun aplikasi AAC untuk anak dengan cerebral palsy, dan saya melatih model VideoMAE yang mengenali 10 gerakan Bahasa Isyarat Indonesia (SIBI) dengan akurasi 97,2%. Terbuka untuk posisi Software Engineer dan AI Engineer, siap bergabung segera.

**Tombol:** `Lihat Proyek` · `Unduh CV` · `Hubungi Saya`

**Angka ringkas**
`IPK 3,77` · `9 Proyek` · `6 Peran`

**Teknologi utama:** Python · React Native · Next.js · Laravel · Firebase · PostGIS

## B2. Tentang Saya

**Heading:** Tentang Saya

> Saya lulusan Teknik Informatika ITERA (2022–2026, IPK 3,77/4,00) yang peduli pada teknologi yang benar-benar bisa dipakai oleh orang dengan kemampuan yang berbeda. Pekerjaan saya mencakup aplikasi mobile, computer vision, platform web, dan laboratorium jaringan.
>
> **Yang sudah saya bangun:** aplikasi komunikasi AAC untuk anak dengan cerebral palsy level 3 di Karla Bionic; pengenal Bahasa Isyarat Indonesia berbasis VideoMAE; dan produk web untuk KM ITERA dengan Laravel dan REST API.
>
> **Cara saya bekerja:** Saya berfokus pada penyelesaian masalah nyata melalui otomasi cerdas, perancangan sistem yang pragmatis, dan pengujian berkelanjutan.
>
> **Yang saya cari:** Posisi Software Engineer atau AI Engineer di bidang IT, di mana saya bisa membangun produk teknologi berdampak bersama pengguna nyata.

**Kutipan (opsional):**
> Teknologi seharusnya menutup kesenjangan kemampuan, bukan memperlebarnya.

**Kartu singkat**
- **Cara saya membangun:** saya mulai dari keterbatasan nyata pengguna, lalu memilih arsitektur paling sederhana yang andal dan mudah diakses.
- **Yang menggerakkan saya:** alat yang inklusif, otomasi cerdas, dan perangkat lunak yang berfungsi untuk orang sungguhan di kondisi nyata.

## B3. Keahlian

**Pengantar:** Dikelompokkan per bidang, beserta proyek tempat saya memakainya.

| Bidang | Keahlian | Dipakai di |
|---|---|---|
| Bahasa pemrograman | Python, JavaScript / TypeScript, PHP, C / C++ | SIBI, CuteSnaps, KosMatch, CareCircle, KM ITERA, Lab PKS |
| Mobile & Web | React Native (Expo), React / Next.js, Laravel, Firebase / Firestore, PostGIS | Aplikasi AAC, KM ITERA, KosMatch, CareCircle |
| AI & Vision | OpenCV, VideoMAE / Transformers, Google Gemini API, MediaPipe, pipeline pengolahan citra | Pengenalan SIBI, DIGO, CuteSnaps |
| Infrastruktur | Linux (Ubuntu) & Postfix, deployment VPS, Git & GitHub Actions, Cisco Packet Tracer (materi dan praktik lab CCNA) | Lab Jaringan, KM ITERA |

## B4. Proyek Unggulan

> Tampilkan 6 proyek ini di bagian utama, sisanya ringkas di bagian "Proyek lainnya". Isi tautan Demo/GitHub setiap proyek. Rekruter akan mengkliknya.

### 1. Aplikasi AAC untuk Anak dengan Cerebral Palsy — Karla Bionic *(proyek utama)*
Aplikasi komunikasi lintas platform untuk anak dengan cerebral palsy level 3. Memiliki antarmuka landscape dengan tombol komunikasi berukuran besar, serta pemantauan orang tua secara real-time dengan notifikasi push.
**Peran saya:** Mobile Developer Intern. **Teknologi:** React Native (Expo Router), Firebase Firestore & Auth, EAS.
**Dampak:** Dikustomisasi khusus untuk 1 anak dengan cerebral palsy level 3 dan orang tuanya, mempermudah komunikasi sehari-hari serta membantu orang tua memantau aktivitas anak secara real-time.
**Tantangan:** Merancang antarmuka yang ramah kenyamanan visual dan motorik anak serta mengimplementasikan notifikasi push yang andal; diselesaikan melalui pengujian berulang bersama anak dan walinya, serta mengacu pada literatur penelitian teknologi asistif.

### 2. Pengenalan Bahasa Isyarat SIBI
Melakukan fine-tuning model VideoMAE pra-latih untuk mengklasifikasikan 10 gerakan Bahasa Isyarat Indonesia dari video, mencapai akurasi 97,2% pada dataset 1.000 video.
**Peran saya:** End-to-End AI Engineer (pengumpulan data di SLB PKK, pembersihan, pra-pemrosesan, pelatihan, evaluasi, hingga deployment). **Teknologi:** Python, PyTorch / Transformers, OpenCV, Hugging Face.
**Tautan:** [Demo (Hugging Face)](https://huggingface.co/spaces/Luckystg/SIBI_Recognition_VideoMAE-demo) · [GitHub](https://github.com/Youngstg/SIBI-Classification-VideoMAE)
**Tantangan:** Menghadapi kendala komunikasi saat pengambilan 1.000 data video bersama siswa di SLB PKK serta durasi komputasi training transformer yang panjang; diselesaikan lewat pendekatan komunikasi adaptif yang sabar serta eksperimen tuning parameter terstruktur.

### 3. Website KM ITERA
Website resmi dan pusat informasi digital KM ITERA yang melayani mahasiswa aktif maupun masyarakat umum. Dibangun dengan Laravel, Tailwind CSS, dan MySQL, menampilkan antarmuka landing page interaktif dengan animasi pembuka serta integrasi chatbot berbasis konteks.
**Peran saya:** Frontend Developer & Chatbot Integrator (membangun seluruh antarmuka landing page interaktif, mengintegrasikan REST API, serta merancang UI dan konteks chatbot). **Hasil:** Transformasi tampilan portal kampus menjadi jauh lebih modern serta peningkatan visibilitas SEO di mesin pencari.
**Tautan:** [Situs Live](https://www.km-itera.com)
**Tantangan:** Membangun antarmuka interaktif modern menggunakan engine templating Laravel Blade serta mengatasi bug pemanggilan data di server production; diselesaikan melalui optimasi script sisi klien dan debugging kueri data agar rendering kembali stabil.

### 4. KosMatch
Aplikasi web pendukung keputusan untuk memilih kos di sekitar kampus. Membandingkan biaya bulanan sebenarnya, waktu perjalanan, fasilitas wajib, dan aturan kos, dengan PostGIS untuk kueri geospasial.
**Peran saya:** Solo Full-Stack Developer. **Teknologi:** Next.js, PostGIS, External Map API.
**Tautan:** [Live](https://kosmatch.us.ci) · [GitHub](https://github.com/Youngstg/KosMatch)
**Tantangan:** Mengintegrasikan koordinat titik alamat secara presisi dari API eksternal serta mengkustomisasi peta interaktif agar navigasi dan perbandingan kos berjalan intuitif.

### 5. CareCircle
Ruang koordinasi privat bagi keluarga yang merawat lansia: berbagi tugas, jadwal obat, catatan kesehatan, dan brankas dokumen medis, dengan akses berbasis peran.
**Peran saya:** Solo Full-Stack Developer. **Teknologi:** Next.js, MySQL, Prisma, MinIO (self-hosted VPS).
**Tautan:** [Live](https://carecircle.us.ci) · [GitHub](https://github.com/Youngstg/CareCircle)
**Tantangan:** Mengonfigurasi dan mengintegrasikan object storage MinIO self-hosted pada VPS pribadi untuk mengelola penyimpanan dokumen rekam medis keluarga secara aman dan terisolasi.

### 6. CuteSnaps
Photobooth bergaya Y2K di browser. Dua orang bisa berfoto bersama secara real-time lewat WebRTC, dengan properti AR yang mengikuti wajah (MediaPipe) dan beragam frame estetik.
**Peran saya:** Solo Developer. **Teknologi:** WebRTC, MediaPipe Face Mesh, Canvas API, Python (Flask), OpenCV.
**Tautan:** [Live](https://cutesnaps.us.ci) · [GitHub](https://github.com/Youngstg/Photobooth)
**Tantangan:** Mengomposisikan foto pengguna ke dalam template bingkai secara presisi tanpa merusak rasio template, serta mengamankan room sesi foto duo WebRTC agar terisolasi dan privat.

### Proyek lainnya
- **DIGO** — Chatbot penjualan dan layanan pelanggan berbasis Google Gemini, dengan formulir kontak untuk diteruskan ke tim. [Live](https://digo.us.ci) · [GitHub](https://github.com/Youngstg/Digo-Chatbot)
- **AllAround** — Kumpulan 20+ alat berbasis browser, termasuk kompres dan gabung PDF, pengubah latar gambar, penghitung kata, dan pembuat QR. [Live](https://allaround-woad.vercel.app) · [GitHub](https://github.com/Youngstg/Allaround)
- **Unfolia** — Aplikasi web Flask yang melacak pengikut Instagram dan menampilkan riwayat perubahan dalam grafik. [GitHub](https://github.com/Youngstg/UnfollowerChecker)
- **Klasifikasi Kanker Payudara (EDA)** — Proyek akademik: analisis data eksploratif dan model machine learning pada dataset publik, mencakup korelasi fitur, outlier, dan evaluasi model. [Notebook](https://colab.research.google.com/github/Youngstg/EDA-Breast-Cancer/blob/main/EDA_Breast_Cancer_Portfolio.ipynb) · [GitHub](https://github.com/Youngstg/EDA-Breast-Cancer)

## B5. Pengalaman

**Mobile Developer Intern — Karla Bionic** · Jun – Agu 2025
- Membangun aplikasi AAC lintas platform untuk anak dengan cerebral palsy level 3 menggunakan React Native (Expo Router) dan Firebase.
- Merancang antarmuka landscape yang inklusif dengan tombol komunikasi besar, dan menambahkan pemantauan orang tua secara real-time dengan notifikasi push.
- Mengonfigurasi build EAS untuk deployment, menghasilkan aplikasi siap produksi yang disesuaikan khusus untuk anak dan walinya.

**Specialist Staff, Web & IT Development — KM ITERA** · Feb – Des 2025
- Meningkatkan pengalaman pengguna, aksesibilitas, dan visibilitas mesin pencari untuk website universitas dan KM ITERA dengan menghadirkan antarmuka interaktif yang modern.
- Memimpin digitalisasi kegiatan antarorganisasi kampus dengan membangun produk IT menggunakan Laravel dan REST API.

**Asisten Laboratorium Jaringan Komputer — ITERA** · Sep – Des 2025
- Membimbing 30–50 mahasiswa dalam konfigurasi VLAN, DHCP, dan wireless access point dengan teknologi Cisco.
- Membantu mahasiswa menyiapkan mail server Linux menggunakan SMTP dan Postfix.

**Asisten Praktikum Teori Bahasa Formal dan Otomata (TBFO) — ITERA** · Sep – Des 2024
- Menjadi penghubung antara mahasiswa dan dosen; mengatur jadwal kelas pengganti dan penilaian.
- Mengadakan sesi bimbingan tentang DFA/NFA, tata bahasa, dan model komputasi formal untuk mahasiswa sarjana.

**Asisten Laboratorium PKS 1 & 2 (Pengenalan Komputasi & Software) — ITERA** · Agu 2023 – Des 2024
- Menyiapkan materi ajar dan bertanggung jawab penuh atas penilaian tugas, praktikum, dan kuis untuk 70–120 mahasiswa selama beberapa semester (C++ dan Python).
- Menyusun asesmen pemrograman bersama dosen.

**Staf PPK, HMIF ITERA** · Agu 2023 – Des 2024
- Memimpin Thesis Expo sebagai Ketua Pelaksana, mengarahkan acara dari perencanaan sampai pelaksanaan untuk 100+ peserta.
- Mengoordinasikan FTI Expo dan menyelenggarakan seminar dengan pembicara dari industri.

## B6. Pendidikan & Sertifikat

**Institut Teknologi Sumatera (ITERA)** · 2022 – 2026
Sarjana Teknik Informatika · IPK 3,77 / 4,00 (Dengan Pujian / Cum Laude)
Mata kuliah: Kecerdasan Buatan, Computer Vision, Sistem Basis Data, Jaringan Komputer, Rekayasa Perangkat Lunak Berorientasi Objek.

**Sertifikat**
- **AWS Certified Cloud Practitioner** — Amazon Web Services · [Lihat PDF](/images/certificates/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf)
- **TOEFL ITP** — Pusat Bahasa ITERA · Skor 513 · [Lihat PDF](/images/certificates/TOEFL_Lucky%20Immanuel%20Sitanggang.pdf)

**CV:** [Unduh CV (PDF)](/images/certificates/CV_Lucky_Immanuel_Sitanggang.pdf)

## B7. Kontak

**Heading:** Mari membangun sesuatu bersama

> Terbuka untuk posisi Software Engineer dan AI Engineer, kolaborasi, dan proyek yang membuat teknologi lebih inklusif. Biasanya saya membalas dalam 1–2 hari kerja.

- **Email:** immanuelsgt@gmail.com
- **LinkedIn:** Lucky Immanuel
- **GitHub:** @Youngstg
- **Lokasi:** Sumatera / Lampung, Indonesia

**Footer:** © 2026 Lucky Immanuel Sitanggang · GitHub · LinkedIn · Kembali ke atas

---

## Daftar periksa sebelum dipublikasikan

- [ ] Semua `[ … ]` sudah diisi atau kalimatnya dihapus
- [ ] Setiap angka (97,2%, 10 gestur, 3,77, 513) bisa kamu jelaskan asalnya jika ditanya
- [ ] Tiap proyek punya tautan demo dan/atau GitHub yang berfungsi
- [ ] Gambar pratinjau (og:image) sudah dibuat dan tampil saat tautan dibagikan di WhatsApp/LinkedIn
- [ ] CV (PDF) versi Inggris dan Indonesia sudah diperbarui dan konsisten dengan isi web
- [ ] Sertifikat PDF bisa dibuka, dan tidak memuat data pribadi yang tidak perlu (alamat, nomor ID lengkap)
- [ ] Setiap kartu proyek unggulan sudah punya peran, tantangan, hasil, dan tautan
- [ ] Setiap angka punya bukti yang siap ditunjukkan (lihat tabel "Bukti angka")
- [ ] Semua tautan dicoba di HP, dan tampilan dua bahasa dibaca ulang tanpa typo
- [ ] Proyek yang dipamerkan sudah bebas dari klaim yang tidak sesuai kenyataan
