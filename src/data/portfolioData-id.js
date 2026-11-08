export const portfolioDataId = {
  lang: 'id',
  locale: 'id_ID',
  profile: {
    name: 'Lucky Immanuel Sitanggang',
    headline: 'Halo, saya Lucky. Saya membangun aplikasi AI dan full-stack dengan aksesibilitas sebagai inti.',
    subheadline: 'Lulusan Teknik Informatika Institut Teknologi Sumatera (ITERA), IPK 3,77. Di Karla Bionic saya membangun aplikasi AAC untuk anak dengan cerebral palsy, dan saya melatih model VideoMAE yang mengenali 10 gerakan Bahasa Isyarat Indonesia (SIBI) dengan akurasi 97,2%. Terbuka untuk posisi Software Engineer dan AI Engineer, siap bergabung segera.',
    university: 'Institut Teknologi Sumatera (ITERA)',
    photo: '/images/image.webp',
    stats: {
      gpa: '3,77',
      projects: '9',
      roles: '6'
    },
    coreTech: ['Python', 'React Native', 'Next.js', 'Laravel', 'Firebase', 'PostGIS'],
    typewriterRoles: [
      'Software Engineer',
      'AI & Vision Engineer',
      'Mobile App Engineer',
      'Full-Stack Developer'
    ],
    socials: {
      github: 'https://github.com/Youngstg',
      linkedin: 'https://linkedin.com/in/luckyimmanuel',
      email: 'immanuelsgt@gmail.com',
      location: 'Sumatera / Lampung, Indonesia'
    },
    cvUrl: '/images/certificates/CV_Lucky_Immanuel_Sitanggang.pdf'
  },
  nav: [
    { name: 'BERANDA', href: '#hero', id: 'hero' },
    { name: 'TENTANG', href: '#about', id: 'about' },
    { name: 'KEAHLIAN', href: '#skills', id: 'skills' },
    { name: 'PROYEK', href: '#projects', id: 'projects' },
    { name: 'PENGALAMAN', href: '#experience', id: 'experience' },
    { name: 'KONTAK', href: '#contact', id: 'contact' }
  ],
  about: {
    badge: 'KENALI LEBIH DEKAT',
    heading: 'Tentang',
    subheading: 'Lucky',
    intro: 'Saya lulusan Teknik Informatika ITERA (2022–2026, IPK 3,77/4,00) yang peduli pada teknologi yang benar-benar bisa dipakai oleh orang dengan kemampuan yang berbeda. Pekerjaan saya mencakup aplikasi mobile, computer vision, platform web, dan laboratorium jaringan.',
    built: 'aplikasi komunikasi AAC untuk anak dengan cerebral palsy level 3 di Karla Bionic; pengenal Bahasa Isyarat Indonesia berbasis VideoMAE; dan produk web untuk KM ITERA dengan Laravel dan REST API.',
    howIWork: 'Saya berfokus pada penyelesaian masalah nyata melalui otomasi cerdas, perancangan sistem yang pragmatis, dan pengujian berkelanjutan.',
    lookingFor: 'Posisi Software Engineer atau AI Engineer di bidang IT, di mana saya bisa membangun produk teknologi berdampak bersama pengguna nyata.',
    quote: 'Teknologi seharusnya menutup kesenjangan kemampuan, bukan memperlebarnya.',
    cards: [
      {
        title: 'Cara saya membangun',
        description: 'Saya mulai dari keterbatasan nyata pengguna, lalu memilih arsitektur paling sederhana yang andal dan mudah diakses.'
      },
      {
        title: 'Yang menggerakkan saya',
        description: 'Alat yang inklusif, otomasi cerdas, dan perangkat lunak yang berfungsi untuk orang sungguhan di kondisi nyata.'
      }
    ]
  },
  skills: {
    badge: 'KOMPETENSI TEKNIS',
    heading: 'Keahlian',
    subheading: 'Saya',
    intro: 'Dikelompokkan per bidang keahlian, beserta proyek nyata tempat saya menerapkannya.',
    headers: {
      area: 'Bidang',
      skills: 'Keahlian & Teknologi',
      usedIn: 'Dipakai di'
    },
    categories: [
      {
        area: 'Bahasa pemrograman',
        skills: 'Python, JavaScript / TypeScript, PHP, C / C++',
        usedIn: 'SIBI, CuteSnaps, KosMatch, CareCircle, KM ITERA, Lab PKS'
      },
      {
        area: 'Mobile & Web',
        skills: 'React Native (Expo), React / Next.js, Laravel, Firebase / Firestore, PostGIS',
        usedIn: 'Aplikasi AAC, KM ITERA, KosMatch, CareCircle'
      },
      {
        area: 'AI & Vision',
        skills: 'OpenCV, VideoMAE / Transformers, Google Gemini API, MediaPipe, pipeline pengolahan citra',
        usedIn: 'Pengenalan SIBI, DIGO, CuteSnaps'
      },
      {
        area: 'Infrastruktur',
        skills: 'Linux (Ubuntu) & Postfix, deployment VPS Tencent Cloud (Docker, Nginx, MinIO, PM2), Git & GitHub Actions, Cisco Packet Tracer (materi dan praktik lab CCNA)',
        usedIn: 'VPS Tencent Cloud, KosMatch, CareCircle, CuteSnaps, Lab Jaringan, KM ITERA'
      }
    ]
  },
  projects: {
    badge: 'KARYA PORTOFOLIO',
    heading: 'Proyek',
    subheading: 'Unggulan',
    intro: 'Riset aksesibilitas, rekayasa computer vision, dan platform web siap produksi.',
    featured: [
      {
        id: 'aac-karla-bionic',
        title: 'Aplikasi AAC untuk Anak dengan Cerebral Palsy — Karla Bionic',
        shortTitle: 'AAC Karla Bionic',
        flag: 'Proyek Utama',
        description: 'Aplikasi komunikasi lintas platform untuk anak dengan cerebral palsy level 3. Memiliki antarmuka landscape dengan tombol komunikasi berukuran besar, serta pemantauan orang tua secara real-time dengan notifikasi push.',
        role: 'Mobile Developer Intern',
        stack: ['React Native (Expo Router)', 'Firebase Firestore & Auth', 'EAS'],
        impact: 'Dikustomisasi khusus untuk 1 anak dengan cerebral palsy level 3 dan orang tuanya, mempermudah komunikasi sehari-hari serta membantu orang tua memantau aktivitas anak secara real-time.',
        challenge: 'Merancang antarmuka yang ramah kenyamanan visual dan motorik anak serta mengimplementasikan notifikasi push yang andal; diselesaikan melalui pengujian berulang bersama anak dan walinya, serta mengacu pada literatur penelitian teknologi asistif.',
        image: '/images/preview/karla-bionic.webp',
        liveUrl: '',
        repoUrl: 'https://github.com/Youngstg/AplikasiAAC',
        embedPreview: false
      },
      {
        id: 'sibi-recognition',
        title: 'Pengenalan Bahasa Isyarat SIBI',
        shortTitle: 'Pengenalan SIBI',
        flag: 'Riset AI & Vision',
        description: 'Melakukan fine-tuning model VideoMAE pra-latih untuk mengklasifikasikan 10 gerakan Bahasa Isyarat Indonesia (SIBI) dari video, mencapai akurasi 97,2% pada dataset 1.000 video.',
        role: 'End-to-End AI Engineer (pengumpulan data di SLB PKK, pembersihan, pra-pemrosesan, pelatihan, evaluasi, hingga deployment)',
        stack: ['Python', 'PyTorch / Transformers', 'OpenCV', 'Hugging Face'],
        impact: 'Mengenali 10 gerakan bahasa isyarat SIBI dengan akurasi 97,2% untuk edukasi teman tuli.',
        challenge: 'Menghadapi kendala komunikasi saat pengambilan 1.000 data video bersama siswa di SLB PKK serta durasi komputasi training transformer yang panjang; diselesaikan lewat pendekatan komunikasi adaptif yang sabar serta eksperimen tuning parameter terstruktur.',
        image: '/images/preview/sibi.webp',
        liveUrl: 'https://huggingface.co/spaces/Luckystg/SIBI_Recognition_VideoMAE-demo',
        repoUrl: 'https://github.com/Youngstg/SIBI-Classification-VideoMAE',
        embedPreview: false
      },
      {
        id: 'km-itera',
        title: 'Website KM ITERA',
        shortTitle: 'Portal KM ITERA',
        flag: 'Portal Kampus Resmi',
        description: 'Website resmi dan pusat informasi digital KM ITERA yang melayani mahasiswa aktif maupun masyarakat umum. Dibangun dengan Laravel, Tailwind CSS, dan MySQL, menampilkan antarmuka landing page interaktif dengan animasi pembuka serta integrasi chatbot berbasis konteks.',
        role: 'Frontend Developer & Chatbot Integrator (membangun seluruh antarmuka landing page interaktif, mengintegrasikan REST API, serta merancang UI dan konteks chatbot)',
        result: 'Transformasi tampilan portal kampus menjadi jauh lebih modern serta peningkatan visibilitas SEO di mesin pencari.',
        stack: ['Laravel', 'Tailwind CSS', 'MySQL', 'REST API', 'Chatbot AI'],
        challenge: 'Membangun antarmuka interaktif modern menggunakan engine templating Laravel Blade serta mengatasi bug pemanggilan data di server production; diselesaikan melalui optimasi script sisi klien dan debugging kueri data agar rendering kembali stabil.',
        image: '/images/preview/km-itera.webp',
        liveUrl: 'https://www.km-itera.com',
        repoUrl: '',
        embedPreview: true
      },
      {
        id: 'kosmatch',
        title: 'KosMatch',
        shortTitle: 'KosMatch DSS',
        flag: 'Pendukung Keputusan Geospasial',
        description: 'Aplikasi web pendukung keputusan untuk memilih kos di sekitar kampus. Membandingkan biaya bulanan sebenarnya, waktu perjalanan, fasilitas wajib, dan aturan kos, dengan PostGIS untuk kueri geospasial.',
        role: 'Solo Full-Stack Developer',
        stack: ['Next.js', 'PostGIS', 'VPS Tencent Cloud', 'External Map API'],
        challenge: 'Mengintegrasikan koordinat titik alamat secara presisi dari API eksternal serta mengkustomisasi peta interaktif, di-deploy langsung pada VPS Tencent Cloud pribadi.',
        image: '/images/preview/kosmatch.webp',
        liveUrl: 'https://kosmatch.us.ci',
        repoUrl: 'https://github.com/Youngstg/KosMatch',
        embedPreview: false
      },
      {
        id: 'carecircle',
        title: 'CareCircle',
        shortTitle: 'CareCircle Layanan Lansia',
        flag: 'Platform Perawatan Lansia',
        description: 'Ruang koordinasi privat bagi keluarga yang merawat lansia: berbagi tugas, jadwal obat, catatan kesehatan, dan brankas dokumen medis, dengan akses berbasis peran.',
        role: 'Solo Full-Stack Developer',
        stack: ['Next.js', 'MySQL', 'Prisma', 'MinIO (VPS Tencent Cloud)'],
        challenge: 'Mengonfigurasi dan mengintegrasikan object storage MinIO self-hosted pada VPS Tencent Cloud pribadi untuk mengelola penyimpanan dokumen rekam medis keluarga secara aman dan terisolasi.',
        image: '/images/preview/carecircle.webp',
        liveUrl: 'https://carecircle.us.ci',
        repoUrl: 'https://github.com/Youngstg/CareCircle',
        embedPreview: true
      },
      {
        id: 'cutesnaps',
        title: 'CuteSnaps',
        shortTitle: 'CuteSnaps Photobooth',
        flag: 'Aplikasi WebRTC Real-Time',
        description: 'Photobooth bergaya Y2K di browser. Dua orang bisa berfoto bersama secara real-time lewat WebRTC, dengan properti AR yang mengikuti wajah (MediaPipe) dan beragam frame estetik.',
        role: 'Solo Developer',
        stack: ['WebRTC', 'MediaPipe Face Mesh', 'Canvas API', 'Flask & OpenCV', 'VPS Tencent Cloud'],
        challenge: 'Mengomposisikan foto pengguna ke dalam template bingkai secara presisi tanpa merusak rasio template, serta mengamankan room sesi foto duo WebRTC yang di-deploy pada VPS Tencent Cloud pribadi.',
        image: '/images/preview/cutesnaps.webp',
        liveUrl: 'https://cutesnaps.us.ci',
        repoUrl: 'https://github.com/Youngstg/Photobooth',
        embedPreview: true
      }
    ],
    moreHeading: 'Proyek Lainnya',
    moreIntro: 'Kumpulan utilitas web, chatbot penjualan, dan eksperimen machine learning lainnya.',
    more: [
      {
        title: 'DIGO',
        description: 'Chatbot penjualan dan layanan pelanggan berbasis Google Gemini, dengan formulir kontak untuk diteruskan ke tim.',
        stack: ['Google Gemini', 'Chatbot', 'Web App'],
        liveUrl: 'https://digo.us.ci',
        repoUrl: 'https://github.com/Youngstg/Digo-Chatbot'
      },
      {
        title: 'AllAround',
        description: 'Kumpulan 20+ alat berbasis browser, termasuk kompres dan gabung PDF, pengubah latar gambar, penghitung kata, dan pembuat QR.',
        stack: ['Multi-tool', 'Produktivitas', 'Web App'],
        liveUrl: 'https://allaround-woad.vercel.app',
        repoUrl: 'https://github.com/Youngstg/Allaround'
      },
      {
        title: 'Unfolia',
        description: 'Aplikasi web Flask yang melacak pengikut Instagram dan menampilkan riwayat perubahan dalam grafik interaktif.',
        stack: ['Python', 'Flask', 'Analytics'],
        liveUrl: '',
        repoUrl: 'https://github.com/Youngstg/UnfollowerChecker'
      },
      {
        title: 'Klasifikasi Kanker Payudara (EDA)',
        description: 'Proyek akademik: analisis data eksploratif dan model machine learning pada dataset publik, mencakup korelasi fitur, outlier, dan evaluasi model.',
        stack: ['Jupyter Notebook', 'Scikit-Learn', 'Seaborn'],
        colabUrl: 'https://colab.research.google.com/github/Youngstg/EDA-Breast-Cancer/blob/main/EDA_Breast_Cancer_Portfolio.ipynb',
        notebookUrl: '/notebooks/eda-breast-cancer.html',
        repoUrl: 'https://github.com/Youngstg/EDA-Breast-Cancer'
      }
    ]
  },
  experience: {
    badge: 'REKAM JEJAK KARIR',
    heading: 'Pengalaman &',
    subheading: 'Pendidikan',
    academicHeading: 'Perjalanan Akademik',
    credentialsHeading: 'Sertifikat & Kredensial',
    items: [
      {
        title: 'Mobile Developer Intern',
        organization: 'Karla Bionic',
        period: 'Jun – Agu 2025',
        bullets: [
          'Membangun aplikasi AAC lintas platform untuk anak dengan cerebral palsy level 3 menggunakan React Native (Expo Router) dan Firebase.',
          'Merancang antarmuka landscape yang inklusif dengan tombol komunikasi besar, dan menambahkan pemantauan orang tua secara real-time dengan notifikasi push.',
          'Mengonfigurasi build EAS untuk deployment, menghasilkan aplikasi siap produksi yang disesuaikan khusus untuk anak dan walinya.'
        ]
      },
      {
        title: 'Specialist Staff, Web & IT Development',
        organization: 'KM ITERA',
        period: 'Feb – Des 2025',
        bullets: [
          'Meningkatkan pengalaman pengguna, aksesibilitas, dan visibilitas mesin pencari untuk website universitas dan KM ITERA dengan menghadirkan antarmuka interaktif yang modern.',
          'Memimpin digitalisasi kegiatan antarorganisasi kampus dengan membangun produk IT menggunakan Laravel dan REST API.'
        ]
      },
      {
        title: 'Asisten Laboratorium Jaringan Komputer',
        organization: 'ITERA',
        period: 'Sep – Des 2025',
        bullets: [
          'Membimbing 30–50 mahasiswa dalam konfigurasi VLAN, DHCP, dan wireless access point dengan teknologi Cisco.',
          'Membantu mahasiswa menyiapkan mail server Linux menggunakan SMTP dan Postfix.'
        ]
      },
      {
        title: 'Asisten Praktikum Teori Bahasa Formal dan Otomata (TBFO)',
        organization: 'ITERA',
        period: 'Sep – Des 2024',
        bullets: [
          'Menjadi penghubung antara mahasiswa dan dosen; mengatur jadwal kelas pengganti dan penilaian.',
          'Mengadakan sesi bimbingan tentang DFA/NFA, tata bahasa, dan model komputasi formal untuk mahasiswa sarjana.'
        ]
      },
      {
        title: 'Asisten Laboratorium PKS 1 & 2 (Pengenalan Komputasi & Software)',
        organization: 'ITERA',
        period: 'Agu 2023 – Des 2024',
        bullets: [
          'Menyiapkan materi ajar dan bertanggung jawab penuh atas penilaian tugas, praktikum, dan kuis untuk 70–120 mahasiswa selama beberapa semester (C++ dan Python).',
          'Menyusun asesmen pemrograman bersama dosen.'
        ]
      },
      {
        title: 'Staf PPK',
        organization: 'HMIF ITERA',
        period: 'Agu 2023 – Des 2024',
        bullets: [
          'Memimpin Thesis Expo sebagai Ketua Pelaksana, mengarahkan acara dari perencanaan sampai pelaksanaan untuk 100+ peserta.',
          'Mengoordinasikan FTI Expo dan menyelenggarakan seminar dengan pembicara dari industri.'
        ]
      }
    ],
    education: {
      institution: 'Institut Teknologi Sumatera (ITERA)',
      degree: 'Sarjana Teknik Informatika',
      period: '2022 – 2026',
      gpa: '3,77 / 4,00 (Dengan Pujian / Cum Laude)',
      coursework: 'Kecerdasan Buatan, Computer Vision, Sistem Basis Data, Jaringan Komputer, Rekayasa Perangkat Lunak Berorientasi Objek.'
    },
    certificates: [
      {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        image: '/images/certificates/ccp.webp',
        pdfUrl: '/images/certificates/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf'
      },
      {
        name: 'TOEFL ITP',
        issuer: 'Pusat Bahasa ITERA (Skor: 513)',
        image: '/images/certificates/toefl.webp',
        pdfUrl: '/images/certificates/TOEFL_Lucky%20Immanuel%20Sitanggang.pdf'
      }
    ]
  },
  contact: {
    badge: 'HUBUNGI SAYA',
    heading: 'Mari Membangun Sesuatu',
    subheading: 'Bersama',
    intro: 'Terbuka untuk posisi Software Engineer dan AI Engineer, kolaborasi, dan proyek yang membuat teknologi lebih inklusif.',
    note: 'Biasanya saya membalas dalam 1–2 hari kerja.',
    channels: [
      { label: 'Email Langsung', value: 'immanuelsgt@gmail.com', href: 'mailto:immanuelsgt@gmail.com' },
      { label: 'LinkedIn', value: 'Lucky Immanuel', href: 'https://linkedin.com/in/luckyimmanuel' },
      { label: 'GitHub', value: '@Youngstg', href: 'https://github.com/Youngstg' }
    ]
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Lucky Immanuel Sitanggang. Hak Cipta Dilindungi.`,
    backToTop: 'Kembali ke atas'
  }
};

