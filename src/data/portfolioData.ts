import type { PersonalProfile, Project, SkillGroup, CareerExperience, EducationItem } from '../types/portfolio';

export const personalProfile: PersonalProfile = {
  name: 'Gina Pasa',
  preferredName: 'Gina Pasa',
  title: 'Information Technology, Digital Communications & Education',
  titleId: 'Teknologi Informasi, Komunikasi Digital & Pendidikan',
  headline: 'Bridging Information Technology, Digital Communications, and Continuous Learning.',
  headlineId: 'Menggabungkan Teknologi Informasi, Komunikasi Digital, dan Pendidikan yang Berkelanjutan.',
  bioSummary: 'Pribadi yang memiliki ketertarikan mendalam pada perkembangan teknologi informasi, komunikasi, dan pemanfaatan media digital. Berlatar belakang pendidikan Rekayasa Perangkat Lunak dan saat ini menempuh studi Ilmu Komunikasi di Universitas Terbuka.',
  bioSummaryId: 'Pribadi yang memiliki ketertarikan mendalam pada perkembangan teknologi informasi, komunikasi, dan pemanfaatan media digital. Berlatar belakang pendidikan Rekayasa Perangkat Lunak dan saat ini menempuh studi Ilmu Komunikasi di Universitas Terbuka.',
  detailedStory: [
    'I am an individual with a strong passion for the advancement of information technology, communications, and digital media utilization. I possess an educational background in Software Engineering and am currently pursuing my degree in Communication Science at Universitas Terbuka. Additionally, I have hands-on experience in competency development within the communications domain.',
    'I consistently strive to develop my personal capabilities, broaden my knowledge, and stay abreast of the latest advancements in technology and digital communications. I firmly believe that adaptability, critical thinking, creativity, and effective communication skills are essential to navigating the dynamic demands of the digital workplace.',
    'The professional profile I aspire to present is that of a dedicated individual with core interests in information technology, digital communications, and education. I aim to demonstrate that I am open to continuous learning, highly adaptable to technological evolution, and fueled by a genuine drive to steadily enhance my skills and impact.'
  ],
  detailedStoryId: [
    'Saya merupakan pribadi yang memiliki ketertarikan terhadap perkembangan teknologi informasi, komunikasi, dan pemanfaatan media digital. Saya memiliki latar belakang pendidikan Rekayasa Perangkat lunak dan saat ini juga menempuh pendidikan di bidang Ilmu Komunikasi di Universitas Terbuka. Selain itu, saya juga memiliki pengalaman dalam proses pengembangan kompetensi di bidang ilmu komunikasi.',
    'Saya senantiasa berusaha mengembangkan kemampuan diri, menambah wawasan, serta mengikuti perkembangan teknologi dan komunikasi digital. Saya percaya bahwa kemampuan beradaptasi, berpikir kritis, kreativitas, dan komunikasi yang baik merupakan hal penting untuk menghadapi perkembangan dunia kerja di era digital.',
    'Profil profesional yang ingin saya tampilkan adalah sebagai individu yang memiliki minat pada bidang teknologi informasi, komunikasi digital, dan pendidikan. Saya ingin menunjukkan bahwa saya merupakan pribadi yang terbuka terhadap pembelajaran baru, mampu beradaptasi dengan perkembangan teknologi, serta memiliki semangat untuk terus meningkatkan kemampuan diri.'
  ],
  location: 'Indonesia • Terbuka untuk Kolaborasi & Pembelajaran Baru',
  email: 'ginapasa@gmail.com',
  phone: '+62 812-8899-7721',
  whatsappUrl: 'https://wa.me/6281288997721?text=Halo%20Gina,%20saya%20tertarik%20berdiskusi%20mengenai%20kolaborasi%20teknologi%20dan%20komunikasi.',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  twitterUrl: 'https://x.com',
  cvDownloadUrl: '#resume-download',
  availabilityStatus: {
    status: 'available',
    label: 'Open for Opportunities in IT, Digital Comms & Education',
    labelId: 'Terbuka untuk Peluang di Komunikasi & Pendidikan',
  },
  stats: {
    yearsExperience: 4,
    completedProjects: 24,
    uptimeSla: '100%',
    clientSatisfaction: 'Dedikasi Tinggi',
  },
};

export const featuredProjects: Project[] = [];

export const skillGroups: SkillGroup[] = [
  {
    id: 'it-software',
    title: 'Teknologi Informasi & RPL',
    titleId: 'Teknologi Informasi & Rekayasa Perangkat Lunak',
    description: 'Fondasi teknis rekayasa perangkat lunak, sistem informasi, dan pemanfaatan teknologi digital.',
    descriptionId: 'Fondasi teknis rekayasa perangkat lunak, sistem informasi, dan pemanfaatan teknologi digital.',
    skills: [
      { name: 'Rekayasa Perangkat Lunak (RPL)', level: 92, experienceYears: 3, featured: true, category: 'it-software', tagline: 'Pemahaman alur logika sistem, arsitektur software, dan algoritma', badge: 'Fondasi' },
      { name: 'Teknologi Web & Platform Digital', level: 90, experienceYears: 3, featured: true, category: 'it-software', tagline: 'HTML5, CSS3, JavaScript modern, dan integrasi antarmuka digital', badge: 'Teknis' },
      { name: 'Manajemen Informasi & Data', level: 88, experienceYears: 2, featured: true, category: 'it-software', tagline: 'Pengorganisasian data sistem, analisis kebutuhan pengguna, dan alur data' },
      { name: 'Literasi Alat & Infrastruktur Digital', level: 92, experienceYears: 4, category: 'it-software', tagline: 'Pemanfaatan tools produktivitas, kolaborasi cloud, dan otomatisasi alur kerja' },
    ],
  },
  {
    id: 'digital-comm',
    title: 'Komunikasi Digital & Media',
    titleId: 'Komunikasi Digital & Media',
    description: 'Penyusunan pesan, penulisan narasi, dan pemanfaatan kanal media digital untuk komunikasi efektif.',
    descriptionId: 'Penyusunan pesan, penulisan narasi, dan pemanfaatan kanal media digital untuk komunikasi efektif.',
    skills: [
      { name: 'Komunikasi Digital & Media Sosial', level: 94, experienceYears: 3, featured: true, category: 'digital-comm', tagline: 'Penyampaian informasi terstruktur dan interaksi komunikatif di ranah digital', badge: 'Inti' },
      { name: 'Penulisan Pesan & Storytelling', level: 90, experienceYears: 3, featured: true, category: 'digital-comm', tagline: 'Artikulasi gagasan yang jelas, persuasif, dan mudah dipahami publik', badge: 'Kreativitas' },
      { name: 'Pengembangan Kompetensi Komunikasi', level: 92, experienceYears: 2, category: 'digital-comm', tagline: 'Praktik riset komunikasi, etika media, dan dinamika interaksi khalayak' },
      { name: 'Pemanfaatan Media Visual & Konten', level: 88, experienceYears: 3, category: 'digital-comm', tagline: 'Kurasi elemen visual informatif untuk mendukung kejelasan pesan' },
    ],
  },
  {
    id: 'learning-adaptability',
    title: 'Kemampuan Belajar & Pendidikan',
    titleId: 'Pendidikan & Kemampuan Beradaptasi',
    description: 'Kemampuan berpikir kritis, adaptasi teknologi baru, dan pengembangan materi edukatif.',
    descriptionId: 'Kemampuan berpikir kritis, adaptasi teknologi baru, dan pengembangan materi edukatif.',
    skills: [
      { name: 'Kemampuan Beradaptasi Cepat', level: 96, experienceYears: 4, featured: true, category: 'learning-adaptability', tagline: 'Fleksibilitas tinggi dalam mempelajari teknologi dan metodologi baru', badge: 'Karakter' },
      { name: 'Berpikir Kritis & Problem Solving', level: 92, experienceYears: 4, featured: true, category: 'learning-adaptability', tagline: 'Analisis masalah secara obyektif dan merumuskan solusi efektif', badge: 'Penting' },
      { name: 'Pengembangan Edukasi Digital', level: 90, experienceYears: 2, category: 'learning-adaptability', tagline: 'Penyusunan materi pembelajaran yang terstruktur dan mudah diakses' },
      { name: 'Semangat Pembelajaran Berkelanjutan', level: 98, experienceYears: 4, category: 'learning-adaptability', tagline: 'Dedikasi untuk terus memperbarui wawasan dan keterampilan diri' },
    ],
  },
];

export const careerTimeline: CareerExperience[] = [
  {
    id: 'comms-tech-dev',
    role: 'Pengembangan Kompetensi Komunikasi & Pemanfaatan Teknologi',
    roleId: 'Pengembangan Kompetensi Komunikasi & Pemanfaatan Teknologi',
    company: 'Proyek Pembelajaran & Praktik Profesional Mandiri',
    location: 'Indonesia',
    period: '2023 - Sekarang',
    type: 'Pengembangan Berkelanjutan',
    typeId: 'Pengembangan Berkelanjutan',
    summary: 'Fokus dalam integrasi keahlian teknologi informasi dan kajian ilmu komunikasi untuk mengelola media digital serta membangun komunikasi yang efektif.',
    summaryId: 'Fokus dalam integrasi keahlian teknologi informasi dan kajian ilmu komunikasi untuk mengelola media digital serta membangun komunikasi yang efektif.',
    keyAchievements: [
      'Menempuh studi Ilmu Komunikasi di Universitas Terbuka sembari menerapkan wawasan praktis dalam strategi komunikasi digital.',
      'Mengaplikasikan latar belakang Rekayasa Perangkat Lunak untuk mengoptimalkan pemanfaatan media digital dan platform informasi.',
      'Senantiasa mengikuti tren teknologi informasi terbaru dan metodologi komunikasi modern guna memperkuat daya saing profesional.',
    ],
    keyAchievementsId: [
      'Menempuh studi Ilmu Komunikasi di Universitas Terbuka sembari menerapkan wawasan praktis dalam strategi komunikasi digital.',
      'Mengaplikasikan latar belakang Rekayasa Perangkat Lunak untuk mengoptimalkan pemanfaatan media digital dan platform informasi.',
      'Senantiasa mengikuti tren teknologi informasi terbaru dan metodologi komunikasi modern guna memperkuat daya saing profesional.',
    ],
    technologies: ['Teknologi Informasi', 'Ilmu Komunikasi', 'Media Digital', 'Rekayasa Perangkat Lunak', 'Komunikasi Publik'],
    isCurrent: true,
  },
  {
    id: 'software-foundation',
    role: 'Pendidikan & Praktik Rekayasa Perangkat Lunak',
    roleId: 'Pendidikan & Praktik Rekayasa Perangkat Lunak',
    company: 'Institusi Rekayasa Perangkat Lunak (RPL)',
    location: 'Indonesia',
    period: 'Fondasi Pendidikan',
    type: 'Pendidikan Kejuruan / Formal',
    typeId: 'Pendidikan Kejuruan / Formal',
    summary: 'Membangun fondasi logika berpikir terstruktur, pemahaman rekayasa perangkat lunak, algoritma sistem, dan pemanfaatan teknologi komputer.',
    summaryId: 'Membangun fondasi logika berpikir terstruktur, pemahaman rekayasa perangkat lunak, algoritma sistem, dan pemanfaatan teknologi komputer.',
    keyAchievements: [
      'Memahami arsitektur perangkat lunak, pengembangan aplikasi dasar, dan manajemen sistem informasi.',
      'Melatih kemampuan berpikir analitis dan pemecahan masalah (problem solving) yang sistematis.',
      'Membangun disiplin teknis yang kini menjadi nilai tambah unik dalam memahami aspek teknologi di dunia komunikasi modern.',
    ],
    keyAchievementsId: [
      'Memahami arsitektur perangkat lunak, pengembangan aplikasi dasar, dan manajemen sistem informasi.',
      'Melatih kemampuan berpikir analitis dan pemecahan masalah (problem solving) yang sistematis.',
      'Membangun disiplin teknis yang kini menjadi nilai tambah unik dalam memahami aspek teknologi di dunia komunikasi modern.',
    ],
    technologies: ['Rekayasa Perangkat Lunak', 'Logika Pemrograman', 'Sistem Informasi', 'Teknologi Komputer'],
  },
];

export const educationHistory: EducationItem[] = [
  {
    id: 'edu-ut',
    degree: 'Program Studi Ilmu Komunikasi (S1)',
    degreeId: 'Program Studi Ilmu Komunikasi (S1)',
    institution: 'Universitas Terbuka (UT)',
    period: 'Sedang Menempuh Pendidikan',
    location: 'Indonesia',
    highlights: [
      'Mendalami teori komunikasi, media penyiaran, komunikasi digital, dan dinamika interaksi publik.',
      'Mempelajari proses pengembangan kompetensi profesional di bidang komunikasi dan pemanfaatan media digital modern.',
      'Mengkombinasikan wawasan komunikasi teoretis dengan pemahaman teknis teknologi informasi.',
    ],
    highlightsId: [
      'Mendalami teori komunikasi, media penyiaran, komunikasi digital, dan dinamika interaksi publik.',
      'Mempelajari proses pengembangan kompetensi profesional di bidang komunikasi dan pemanfaatan media digital modern.',
      'Mengkombinasikan wawasan komunikasi teoretis dengan pemahaman teknis teknologi informasi.',
    ],
  },
  {
    id: 'edu-rpl',
    degree: 'Pendidikan Rekayasa Perangkat Lunak (RPL)',
    degreeId: 'Pendidikan Rekayasa Perangkat Lunak (RPL)',
    institution: 'Pendidikan Rekayasa Perangkat Lunak',
    period: 'Latar Belakang Pendidikan',
    location: 'Indonesia',
    highlights: [
      'Fondasi kuat dalam rekayasa perangkat lunak, logika sistem, dan teknologi komputasi.',
      'Membentuk kemampuan berpikir kritis, pemecahan masalah secara terstruktur, dan adaptasi terhadap perkembangan teknologi.',
    ],
    highlightsId: [
      'Fondasi kuat dalam rekayasa perangkat lunak, logika sistem, dan teknologi komputasi.',
      'Membentuk kemampuan berpikir kritis, pemecahan masalah secara terstruktur, dan adaptasi terhadap perkembangan teknologi.',
    ],
  },
];

export const contactServices = [
  { id: 'it-media', label: 'Teknologi Informasi & Media Digital', labelId: 'Teknologi Informasi & Media Digital' },
  { id: 'digital-comms', label: 'Komunikasi Digital & Pembuatan Narasi', labelId: 'Komunikasi Digital & Pembuatan Narasi' },
  { id: 'education-learning', label: 'Pengembangan Konten Pendidikan & Edukasi', labelId: 'Pengembangan Konten Pendidikan & Edukasi' },
  { id: 'collaboration', label: 'Kolaborasi Proyek & Peluang Kerja', labelId: 'Kolaborasi Proyek & Peluang Kerja' },
];

export const budgetRanges = [
  { id: 'starter', label: 'Proyek / Kolaborasi Terbuka' },
  { id: 'fulltime', label: 'Purna Waktu / Full-Time' },
  { id: 'parttime', label: 'Paruh Waktu / Freelance' },
  { id: 'internship', label: 'Magang / Pengembangan Diri' },
];
