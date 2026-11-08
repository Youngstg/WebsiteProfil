export const portfolioDataEn = {
  lang: 'en',
  locale: 'en_US',
  profile: {
    name: 'Lucky Immanuel Sitanggang',
    headline: "Hi, I'm Lucky. I build AI and full-stack apps with accessibility at the core.",
    subheadline: "Informatics Engineering graduate from Institut Teknologi Sumatera (ITERA), GPA 3.77. At Karla Bionic I built an AAC app for children with cerebral palsy, and I trained a VideoMAE model that recognizes 10 Indonesian Sign Language (SIBI) gestures at 97.2% accuracy. Open to Software Engineer and AI Engineer roles, available immediately.",
    university: 'Institut Teknologi Sumatera (ITERA)',
    photo: '/images/image.webp',
    stats: {
      gpa: '3.77',
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
    { name: 'HOME', href: '#hero', id: 'hero' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'CONTACT', href: '#contact', id: 'contact' }
  ],
  about: {
    badge: 'GET TO KNOW ME',
    heading: 'About',
    subheading: 'Lucky',
    intro: "I'm an Informatics Engineering graduate from ITERA (2022–2026, GPA 3.77/4.00) who cares about technology that people with different abilities can actually use. My work spans mobile apps, computer vision, web platforms, and networking labs.",
    built: 'an AAC communication app for children with Level 3 cerebral palsy at Karla Bionic; a VideoMAE-based Indonesian Sign Language recognizer; and web products for KM ITERA using Laravel and REST APIs.',
    howIWork: 'I focus on solving real-world problems through intelligent automation, pragmatic system design, and continuous testing.',
    lookingFor: 'Software Engineer or AI Engineer roles across the IT field where I can build impactful technology products with real users.',
    quote: 'Technology should close capability gaps, not widen them.',
    cards: [
      {
        title: 'How I build',
        description: "I start from the user's real constraints, then choose the simplest architecture that is reliable and accessible."
      },
      {
        title: 'What drives me',
        description: 'Inclusive tools, intelligent automation, and software that works for real people in real conditions.'
      }
    ]
  },
  skills: {
    badge: 'TECHNICAL COMPETENCIES',
    heading: 'My',
    subheading: 'Skills',
    intro: 'Grouped by technical discipline, paired with the active projects where each skill was applied.',
    headers: {
      area: 'Discipline',
      skills: 'Technologies & Tools',
      usedIn: 'Used in'
    },
    categories: [
      {
        area: 'Languages',
        skills: 'Python, JavaScript / TypeScript, PHP, C / C++',
        usedIn: 'SIBI, CuteSnaps, KosMatch, CareCircle, KM ITERA, Lab PKS'
      },
      {
        area: 'Mobile & Web',
        skills: 'React Native (Expo), React / Next.js, Laravel, Firebase / Firestore, PostGIS',
        usedIn: 'AAC app, KM ITERA, KosMatch, CareCircle'
      },
      {
        area: 'AI & Vision',
        skills: 'OpenCV, VideoMAE / Transformers, Google Gemini API, MediaPipe, image-processing pipelines',
        usedIn: 'SIBI Recognition, DIGO, CuteSnaps'
      },
      {
        area: 'Infrastructure',
        skills: 'Linux (Ubuntu) & Postfix, VPS deployment, Git & GitHub Actions, Cisco Packet Tracer (CCNA coursework and lab practice)',
        usedIn: 'Network Lab, KM ITERA'
      }
    ]
  },
  projects: {
    badge: 'PORTFOLIO WORK',
    heading: 'Featured',
    subheading: 'Projects',
    intro: 'Flagship accessibility research, computer vision engineering, and production web platforms.',
    featured: [
      {
        id: 'aac-karla-bionic',
        title: 'AAC App for Children with Cerebral Palsy — Karla Bionic',
        shortTitle: 'AAC Karla Bionic',
        flag: 'Flagship Project',
        description: 'A cross-platform communication app for children with Level 3 cerebral palsy. Features an inclusive landscape interface with large communication buttons, and real-time monitoring for parents with push notifications.',
        role: 'Mobile Developer Intern',
        stack: ['React Native (Expo Router)', 'Firebase Firestore & Auth', 'EAS'],
        impact: 'Customized specifically for 1 child with Level 3 cerebral palsy and their parents, making daily communication significantly easier and giving parents a reliable way to monitor their child in real time.',
        challenge: 'Designing an interface that met the specific visual and motor comfort requirements of the child while implementing reliable push notifications; solved through iterative usability testing with the child and guardian, guided by assistive technology research literature.',
        image: '/images/preview/karla-bionic.webp',
        liveUrl: '',
        repoUrl: 'https://github.com/Youngstg/AplikasiAAC',
        embedPreview: false
      },
      {
        id: 'sibi-recognition',
        title: 'SIBI Sign Language Recognition',
        shortTitle: 'SIBI Recognition',
        flag: 'AI & Vision Research',
        description: 'Fine-tuned a pre-trained VideoMAE transformer to classify 10 Indonesian Sign Language (SIBI) gestures from video, reaching 97.2% accuracy across a 1,000-video dataset.',
        role: 'End-to-End AI Engineer (data collection at SLB PKK, cleaning, preprocessing, training, evaluation, and deployment)',
        stack: ['Python', 'PyTorch / Transformers', 'OpenCV', 'Hugging Face'],
        impact: 'Recognizes 10 Indonesian sign language gestures with 97.2% accuracy for deaf education.',
        challenge: 'Navigating communication barriers while recording 1,000 gesture videos with students at SLB PKK, alongside lengthy transformer training times; solved through patient adaptive communication and systematic hyperparameter tuning.',
        image: '/images/preview/sibi.webp',
        liveUrl: 'https://huggingface.co/spaces/Luckystg/SIBI_Recognition_VideoMAE-demo',
        repoUrl: 'https://github.com/Youngstg/SIBI-Classification-VideoMAE',
        embedPreview: false
      },
      {
        id: 'km-itera',
        title: 'KM ITERA Website',
        shortTitle: 'KM ITERA Portal',
        flag: 'Official Campus Portal',
        description: 'Official website and digital hub for KM ITERA, serving active students and the public seeking information about campus governance. Built with Laravel, Tailwind CSS, and MySQL, featuring an interactive landing page with entrance animations and an integrated context-aware chatbot.',
        role: 'Frontend Developer & Chatbot Integrator (engineered the interactive landing page UI, integrated backend APIs, and developed the chatbot interface with customized context)',
        result: 'Modernized campus portal presentation and enhanced search engine SEO visibility.',
        stack: ['Laravel', 'Tailwind CSS', 'MySQL', 'REST API', 'AI Chatbot'],
        challenge: 'Crafting modern interactive UI components within Laravel\'s Blade templating engine and resolving production data-fetching bugs; solved by optimizing client-side scripting and debugging production query endpoints for stable data rendering.',
        image: '/images/preview/km-itera.webp',
        liveUrl: 'https://www.km-itera.com',
        repoUrl: '',
        embedPreview: true
      },
      {
        id: 'kosmatch',
        title: 'KosMatch',
        shortTitle: 'KosMatch DSS',
        flag: 'Geospatial Decision Support',
        description: 'A decision-support web app for choosing a boarding house (kos) near campus. It compares the real monthly cost, travel time, required facilities, and house rules, using PostGIS for geospatial queries.',
        role: 'Solo Full-Stack Developer',
        stack: ['Next.js', 'PostGIS', 'External Map APIs'],
        challenge: 'Accurately mapping dynamic address coordinate points from external APIs and customizing the interactive map interface for intuitive boarding house comparisons.',
        image: '/images/preview/kosmatch.webp',
        liveUrl: 'https://kosmatch.us.ci',
        repoUrl: 'https://github.com/Youngstg/KosMatch',
        embedPreview: false
      },
      {
        id: 'carecircle',
        title: 'CareCircle',
        shortTitle: 'CareCircle Healthcare',
        flag: 'Family Healthcare Coordination',
        description: 'A private coordination space for families caring for elderly relatives: shared tasks, medication schedules, health logs, and a vault for important medical documents, with role-based access.',
        role: 'Solo Full-Stack Developer',
        stack: ['Next.js', 'MySQL', 'Prisma', 'MinIO (self-hosted VPS)'],
        challenge: 'Configuring and integrating self-hosted MinIO object storage on a personal VPS to securely store and serve confidential family medical records within a Next.js environment.',
        image: '/images/preview/carecircle.webp',
        liveUrl: 'https://carecircle.us.ci',
        repoUrl: 'https://github.com/Youngstg/CareCircle',
        embedPreview: true
      },
      {
        id: 'cutesnaps',
        title: 'CuteSnaps',
        shortTitle: 'CuteSnaps Photobooth',
        flag: 'Real-Time WebRTC App',
        description: 'A Y2K-style photobooth in the browser. Two people can take photos together in real time over WebRTC, with face-tracked AR props (MediaPipe) and aesthetic photo frames.',
        role: 'Solo Developer',
        stack: ['WebRTC', 'MediaPipe Face Mesh', 'Canvas API', 'Python (Flask)', 'OpenCV'],
        challenge: 'Accurately compositing photos into aesthetic frame templates without distorting template aspect ratios, while enforcing room security for private real-time duo WebRTC sessions.',
        image: '/images/preview/cutesnaps.webp',
        liveUrl: 'https://cutesnaps.us.ci',
        repoUrl: 'https://github.com/Youngstg/Photobooth',
        embedPreview: true
      }
    ],
    moreHeading: 'More Projects',
    moreIntro: 'Additional engineering toolboxes, chatbots, and analytics experiments.',
    more: [
      {
        title: 'DIGO',
        description: 'A sales and customer-service chatbot built on Google Gemini, with a lead form for handing off to a human team.',
        stack: ['Google Gemini', 'Chatbot', 'Web App'],
        liveUrl: 'https://digo.us.ci',
        repoUrl: 'https://github.com/Youngstg/Digo-Chatbot'
      },
      {
        title: 'AllAround',
        description: 'A browser-based toolbox with 20+ tools, including PDF compression and merging, background changer, word counter, and QR generator.',
        stack: ['Multi-tool', 'Productivity', 'Web App'],
        liveUrl: 'https://allaround-woad.vercel.app',
        repoUrl: 'https://github.com/Youngstg/Allaround'
      },
      {
        title: 'Unfolia',
        description: 'A Flask web app that tracks Instagram followers and shows change history as interactive charts.',
        stack: ['Python', 'Flask', 'Analytics'],
        liveUrl: '',
        repoUrl: 'https://github.com/Youngstg/UnfollowerChecker'
      },
      {
        title: 'Breast Cancer Classification (EDA)',
        description: 'Academic project: exploratory data analysis and machine-learning models on a public dataset, covering feature correlation, outliers, and model evaluation.',
        stack: ['Jupyter Notebook', 'Scikit-Learn', 'Seaborn'],
        colabUrl: 'https://colab.research.google.com/github/Youngstg/EDA-Breast-Cancer/blob/main/EDA_Breast_Cancer_Portfolio.ipynb',
        notebookUrl: '/notebooks/eda-breast-cancer.html',
        repoUrl: 'https://github.com/Youngstg/EDA-Breast-Cancer'
      }
    ]
  },
  experience: {
    badge: 'CAREER TRAJECTORY',
    heading: 'Experience &',
    subheading: 'Education',
    academicHeading: 'Academic Journey',
    credentialsHeading: 'Certificates & Credentials',
    items: [
      {
        title: 'Mobile Developer Intern',
        organization: 'Karla Bionic',
        period: 'Jun – Aug 2025',
        bullets: [
          'Built a cross-platform AAC app for children with Level 3 cerebral palsy using React Native (Expo Router) and Firebase.',
          'Designed an inclusive landscape interface with large communication buttons and added real-time parent monitoring with push notifications.',
          'Configured EAS builds for deployment, successfully delivering a production-ready application tailored for the child and guardian.'
        ]
      },
      {
        title: 'Specialist Staff, Web & IT Development',
        organization: 'KM ITERA',
        period: 'Feb – Dec 2025',
        bullets: [
          'Improved user experience, accessibility, and search engine visibility of university and KM ITERA websites by delivering modern interactive interfaces.',
          'Led the digitalization of inter-organization campus activities by building IT products with Laravel and REST APIs.'
        ]
      },
      {
        title: 'Computer Network Lab Assistant',
        organization: 'ITERA',
        period: 'Sep – Dec 2025',
        bullets: [
          'Guided 30–50 students in configuring VLANs, DHCP, and wireless access points with Cisco technologies.',
          'Helped students set up Linux mail servers using SMTP and Postfix.'
        ]
      },
      {
        title: 'Teaching Assistant, Formal Languages & Automata Theory',
        organization: 'ITERA',
        period: 'Sep – Dec 2024',
        bullets: [
          'Acted as liaison between students and lecturers; managed substitute class schedules and assessments.',
          'Ran tutoring sessions on DFA/NFA, grammars, and formal computation models for undergraduate students.'
        ]
      },
      {
        title: 'Laboratory Assistant, PKS 1 & 2 (Intro to Computing & Software)',
        organization: 'ITERA',
        period: 'Aug 2023 – Dec 2024',
        bullets: [
          'Prepared instructional materials and was fully responsible for grading tasks, practicums, and quizzes for 70–120 students across multiple semesters (C++ and Python).',
          'Designed programming assessments together with faculty.'
        ]
      },
      {
        title: 'Staff PPK',
        organization: 'HMIF ITERA',
        period: 'Aug 2023 – Dec 2024',
        bullets: [
          'Led the Thesis Expo as Head of Event, directing planning through execution for 100+ attendees.',
          'Coordinated the FTI Expo and organized seminars with industry speakers.'
        ]
      }
    ],
    education: {
      institution: 'Institut Teknologi Sumatera (ITERA)',
      degree: 'Bachelor of Informatics Engineering',
      period: '2022 – 2026',
      gpa: '3.77 / 4.00 (Cum Laude)',
      coursework: 'Artificial Intelligence, Computer Vision, Database Systems, Computer Networks, Object-Oriented Software Engineering.'
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
        issuer: 'ITERA Language Center (Score: 513)',
        image: '/images/certificates/toefl.webp',
        pdfUrl: '/images/certificates/TOEFL_Lucky%20Immanuel%20Sitanggang.pdf'
      }
    ]
  },
  contact: {
    badge: 'GET IN TOUCH',
    heading: "Let's Build Something",
    subheading: 'Together',
    intro: 'Open to Software Engineer and AI Engineer roles, collaborations, and projects that make technology more inclusive.',
    note: 'I usually reply within 1–2 business days.',
    channels: [
      { label: 'Direct Email', value: 'immanuelsgt@gmail.com', href: 'mailto:immanuelsgt@gmail.com' },
      { label: 'LinkedIn', value: 'Lucky Immanuel', href: 'https://linkedin.com/in/luckyimmanuel' },
      { label: 'GitHub', value: '@Youngstg', href: 'https://github.com/Youngstg' }
    ]
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Lucky Immanuel Sitanggang. All Rights Reserved.`,
    backToTop: 'Back to top'
  }
};

