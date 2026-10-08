/**
 * Project data — sumber: docs/02_PROJECT_DATA.md
 *
 * Aturan akurasi:
 * - Jangan menambah klaim teknis/kontribusi yang tidak ada di 02_PROJECT_DATA.md.
 * - `description` memakai draft copy dari 03_DESIGN_SPEC.md (final copy: TBD).
 * - `links.github` dan `links.liveDemo` sengaja `null`. Isi hanya jika link benar-benar ada.
 * - `images` sengaja kosong. Isi hanya dengan screenshot/aset ASLI.
 * - Field kosong ([] atau null) = section tersebut tidak ditampilkan di UI.
 * - Urutan array = prioritas tampil (sesuai PRD: Featured 1–3, Other 4–5).
 */

export const projects = [
  // ---------------------------------------------------------------------------
  // 1. EventKampus (Featured)
  // ---------------------------------------------------------------------------
  {
    slug: 'eventkampus',
    title: 'EventKampus',
    category: 'Full-Stack Web Application',
    type: 'Academic project',
    context: 'Final project, semester 3',
    role: 'Full-Stack Developer',
    roleNote: null,
    team: {
      size: 3,
      note: 'Team of 3 students. Daffa handled the implementation independently in practice.',
    },
    featured: true,

    description:
      'A full-stack event management system developed as an academic project, covering event management, registration, ticketing, Google integrations, notifications, reporting, and role-based access.',
    overview: null,

    tech: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap 5'],
    techGroups: [
      { label: 'Backend', items: ['PHP 8.x (OOP)', 'MySQL'] },
      { label: 'Frontend', items: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5'] },
      { label: 'Integrations', items: ['Google OAuth 2.0', 'Google Calendar API'] },
      {
        label: 'Libraries',
        items: ['phpmailer/phpmailer', 'google/apiclient', 'vlucas/phpdotenv'],
      },
    ],

    features: [
      {
        group: 'Event Management',
        items: ['CRUD event', 'Event categories', 'Search by title', 'Category filtering'],
      },
      {
        group: 'Registration & Tickets',
        items: [
          'Online registration',
          'Payment proof upload',
          'E-ticket sent by email after verification',
          'Participant verification',
        ],
      },
      {
        group: 'Google Integration',
        items: ['Google Login', 'Google Calendar integration'],
      },
      {
        group: 'Notifications',
        items: ['Dashboard notifications', 'Email notifications'],
      },
      {
        group: 'Dashboard & Reporting',
        items: [
          'Event statistics',
          'Participant/category visualization',
          'PDF/CSV reports',
        ],
      },
      {
        group: 'Authentication & Access',
        items: [
          'Bcrypt password hashing',
          'Email verification',
          'Role-based access for Admin, EO, and Mahasiswa',
        ],
      },
    ],

    // Catatan: daftar lengkap diagram sistem lain masih TBD (jangan ditambah dulu).
    contributions: [
      'Designed the database structure',
      'Created the database, tables, and columns',
      'Created UML/system-flow documentation, including a Use Case Diagram and a Sequence Diagram',
      'Designed the UI/UX',
      'Evaluated usability from a user perspective',
      'Debugged the application and investigated database issues',
      'Considered security and authentication concerns',
    ],

    architecture: [],
    challenges: [],
    problemSolving: [],
    developmentApproach: [],

    aiAssistance: {
      tool: 'Antigravity',
      note: 'Used as an AI coding/development assistant to accelerate implementation. Daffa remained responsible for planning, database design, UI/UX decisions, debugging, issue identification, and evaluating results.',
    },

    // Jangan mengklaim authentication sebagai fully hardened / fully completed.
    knownLimitations: [
      'Authentication considerations (password hashing, OTP, Google OAuth) were explored, but the flow had an unfinished area: users on the Google-login route did not go through the same OTP flow.',
    ],

    links: {
  github: 'https://github.com/DaffaAndhikaPratama/EVENTKAMPUS',
  liveDemo: null,
  },
    images: [],
    // Internal: screenshot asli tidak tersedia; live demo tidak tersedia / tidak terkonfirmasi.
    assetNote: 'No original screenshots available. Live demo not available / not confirmed.',
  },

  // ---------------------------------------------------------------------------
  // 2. E-Procurement System (Featured)
  // ---------------------------------------------------------------------------
  {
    slug: 'e-procurement',
    title: 'E-Procurement System',
    category: 'Web & Mobile Application',
    type: 'Academic/team project',
    context: null,
    role: 'Frontend Developer',
    // Jangan mengklaim Daffa mengerjakan backend.
    roleNote: "Daffa's contribution is on the frontend; backend implementation is not claimed.",
    team: { size: 5, note: 'Team of 5.' },
    featured: true,

    description:
      'A web and mobile procurement system where Daffa contributed to frontend interface development across Laravel Blade and Ionic Angular.',
    overview: null,

    tech: ['Laravel Blade', 'Bootstrap', 'SCSS', 'Ionic Angular'],
    techGroups: [
      { label: 'Web frontend', items: ['Laravel Blade', 'HTML', 'Bootstrap', 'SCSS'] },
      { label: 'Mobile frontend', items: ['Ionic Angular'] },
    ],

    features: [],

    contributions: [
      'Frontend UI implementation',
      'Visual/interface implementation',
      'Buttons and interactive UI',
      'Toast notification work',
      'Hamburger/sidebar show-hide interaction',
      'Translating visual references into UI through code',
    ],

    architecture: [
      'Web application using Laravel',
      'Mobile application using Ionic Angular',
      'Laravel API connecting the mobile application to the backend',
    ],
    challenges: [],
    problemSolving: [],
    developmentApproach: [
      'Used visual references, including Pinterest',
      'Implemented the interface directly in code',
    ],
    // Catatan: Figma hanya eksperimen dasar dan BUKAN kontribusi utama (jangan ditonjolkan).

    aiAssistance: null,

    // Jangan menyajikan toast notification sebagai fitur selesai.
    knownLimitations: [
      'The toast notification work still had errors and is not presented as a fully completed feature.',
    ],

    links: {
    githubWeb: 'https://github.com/Vestegar4/E-Procurement',
    githubMobile: 'https://github.com/Vestegar4/E-Procurement_Ionic',
    liveDemo: null,
  },
    images: [],
    // Internal: screenshot asli sudah tidak tersedia (laptop cleanup); live demo tidak tersedia / tidak terkonfirmasi.
    assetNote:
      'Original screenshots are no longer available. Live demo not available / not confirmed.',
  },

  // ---------------------------------------------------------------------------
  // 3. Number Kaboom (Featured)
  // ---------------------------------------------------------------------------
  {
    slug: 'number-kaboom',
    title: 'Number Kaboom',
    category: 'Mobile Game',
    type: 'Individual academic project',
    context: 'Semester 4 project',
    role: 'Solo Developer',
    roleNote: null,
    team: { size: 1, note: 'Individual project.' },
    featured: true,

    description:
      'A Minesweeper-inspired mobile game developed as an individual academic project with a focus on gameplay interaction, responsive layouts, and iterative debugging.',
    overview:
      "A simple Minesweeper-inspired mobile game. The project theme had to be selected individually and could not duplicate another student's theme. The project was intentionally simple and did not use an API.",

    tech: ['Ionic Angular', 'Android Studio'],
    techGroups: [{ label: 'Stack', items: ['Ionic Angular', 'Android Studio'] }],

    features: [],
    contributions: [],
    architecture: [],

    challenges: [
      'Minesweeper number interaction could not be pressed',
      'Device compatibility and layout issues',
      'Flag button did not appear correctly',
      'Number colors were inconsistent',
      'Too many difficulty levels caused grid/layout problems',
      'Large grid could not be scrolled properly',
      'Numbers disappeared after grid interaction',
      'Score did not update correctly',
      'Timer started before the first grid interaction',
      'Timer stopped under an incorrect condition',
      'Difficulty options were too tightly positioned',
    ],

    problemSolving: [
      'Tested the game',
      'Identified issues independently',
      'Recorded which behavior was wrong',
      'Sent specific issues to the AI assistant for debugging/fixes',
      'Reviewed the output',
      'Selected which fixes were correct or still needed adjustment',
    ],

    developmentApproach: [
      'UI designed directly in code',
      'Visual references from Pinterest and existing Minesweeper games',
      'AI-assisted coding with Gemini',
      'Iterative testing and debugging',
    ],

    aiAssistance: {
      tool: 'Gemini',
      note: 'Used for AI-assisted coding and debugging. Daffa tested the game, identified the issues, and reviewed which fixes were correct.',
    },

    // Jangan klaim "fully responsive on all devices" / terbukti mendukung semua device.
    knownLimitations: [
      'Device compatibility and layout were identified as problems and addressed during iteration. Support across all devices has not been verified.',
    ],

    links: { github: 'https://github.com/daffaandhikapratama905-oss/NumberKaboom.git', liveDemo: null },
    images: [],
    assetNote: 'Asset availability: TBD.',
  },

  // ---------------------------------------------------------------------------
  // 4. GEMASTIK (Other)
  // ---------------------------------------------------------------------------
  {
    slug: 'gemastik',
    title: 'GEMASTIK',
    category: 'Game Art / Competition Project',
    type: 'Competition project',
    context: null,
    role: 'Game Artist / 2D Artist',
    // Jangan mengklaim Daffa sebagai programmer utama.
    roleNote: 'Daffa did not primarily contribute to game programming/development.',
    team: {
      size: 5,
      note: 'Official team size of 5, with 4 active contributors. Lore/story was handled by another teammate.',
    },
    featured: false,

    description:
      'A short-term Unity competition project where Daffa contributed pixel-art characters, objects, and UI assets.',
    overview:
      'A simple pixel-art game inspired by the visual direction of games such as Stardew Valley. Development lasted approximately two weeks and stopped after the competition submission.',

    tech: ['Unity', 'Aseprite', 'Pixel Studio'],
    techGroups: [{ label: 'Tools', items: ['Unity', 'Aseprite', 'Pixel Studio'] }],

    features: [],

    contributions: [
      'Character design',
      'Object/asset design',
      'UI visual/asset design',
      'Pixel-art drawing',
    ],

    architecture: [],
    challenges: [],
    problemSolving: [],

    // Jangan menyebut artwork berbasis referensi sebagai 100% original.
    developmentApproach: [
      'Used visual references, including Pinterest and other games',
      'Redrew/adapted references and made changes for the project',
    ],

    aiAssistance: null,
    knownLimitations: [],

    links: { github: null, liveDemo: null, videoDemo: 'https://youtu.be/gri83M_e2kw?si=mfaaM_Pfh1BOL6P4' },
    images: [],
    // Internal: pixel-art assets masih ada menurut Daffa, tetapi file belum disiapkan.
    assetNote: 'Pixel-art assets are still available according to Daffa (files not yet added).',
  },

  // ---------------------------------------------------------------------------
  // 5. YouTube Downloader (Other)
  // ---------------------------------------------------------------------------
  {
    slug: 'youtube-downloader',
    title: 'YouTube Downloader',
    category: 'Personal Utility',
    type: 'Personal utility project',
    context: null,
    role: 'Solo Developer',
    roleNote: null,
    team: { size: 1, note: 'Personal project.' },
    featured: false,

    description:
      'A personal Python utility built with BeeWare/Toga and yt-dlp for downloading YouTube video and audio content.',
    overview: 'A personal utility for downloading YouTube video and audio.',

    tech: ['Python', 'BeeWare / Toga', 'yt-dlp'],
    techGroups: [{ label: 'Stack', items: ['Python', 'BeeWare / Toga', 'yt-dlp'] }],

    features: [
      {
        group: 'Features',
        items: [
          'Video download',
          'Audio/MP3 download',
          'No API key requirement',
          'Windows .msi packaging',
          'Android .apk packaging',
        ],
      },
    ],

    contributions: [],
    architecture: [],
    challenges: [],
    problemSolving: [],
    developmentApproach: [],

    // Jangan dipresentasikan sebagai bukti utama kemampuan programming mandiri.
    aiAssistance: {
      tool: null,
      note: 'Built with full AI assistance.',
    },
    knownLimitations: [],

    links: { github: 'https://github.com/daffaandhikapratama905-oss/youtube-downloader-python.git', liveDemo: null },
    images: [],
    // Internal: README/dokumentasi ada; ketersediaan installer/demo saat ini: TBD.
    assetNote: 'README/documentation exists. Current installer/demo availability: TBD.',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
export const otherProjects = projects.filter((project) => !project.featured)

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}