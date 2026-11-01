import React, { useEffect, useState } from 'react';
import type { Language } from '../types/portfolio';
import { LanguageContext } from './languageContextDef';

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navigation
    'nav.about': 'Tentang Saya',
    'nav.skills': 'Keahlian Komunikasi',
    'nav.experience': 'Perjalanan Karier',
    'nav.contact': 'Hubungi Saya',
    'nav.resume': 'Ringkasan CV',
    'nav.available': 'Tersedia untuk Konsultasi',
    'nav.letsTalk': 'Mulai Diskusi',

    // Hero
    'hero.badge': 'Spesialis Komunikasi Strategis & Manajemen Brand',
    'hero.intro': 'Halo, Saya',
    'hero.viewWork': 'Pelajari Profil',
    'hero.getInTouch': 'Hubungi Saya',
    'hero.quickStats.experience': 'Tahun Pengalaman',
    'hero.quickStats.projects': 'Kampanye Strategis',
    'hero.quickStats.satisfaction': 'Tingkat Sentimen Positif',
    'hero.quickStats.uptime': 'Kepuasan Pemangku Kepentingan',
    'hero.terminal.title': 'strategi-komunikasi.ts',
    'hero.terminal.status': 'Strategi Aktif & Siap Kampanye',

    // About & Story
    'about.badge': 'Profil & Rumusan Diri',
    'about.title': 'Menghubungkan Visi Organisasi dengan Kepercayaan Publik',
    'about.philosophy': 'Filosofi Komunikasi',
    'about.philosophyText': 'Komunikasi berkelas dunia berakar dari empati mendalam terhadap audiens, ketajaman artikulasi pesan, dan pengelolaan reputasi yang etis serta terukur.',
    'about.viewResume': 'Buka Digital CV',
    'about.downloadResume': 'Unduh Ringkasan CV (PDF)',

    // Skills
    'skills.badge': 'Keahlian & Kapabilitas Komunikasi',
    'skills.title': 'Peta Kompetensi & Standar Komunikasi Strategis',
    'skills.subtitle': 'Pengalaman mendalam dalam komunikasi korporat, relasi media nasional & regional, manajemen krisis reputasi, hingga kampanye digital terpadu.',
    'skills.level': 'Tingkat Kemahiran',
    'skills.experience': 'Tahun Jam Terbang',

    // Experience
    'exp.badge': 'Rekam Jejak Profesional',
    'exp.title': 'Pengalaman Karier & Pendidikan',
    'exp.education': 'Latar Belakang Akademik',

    // Contact
    'contact.badge': 'Mulai Berkolaborasi',
    'contact.title': 'Mari Diskusikan Strategi Komunikasi Anda',
    'contact.subtitle': 'Apakah Anda membutuhkan praktisi komunikasi senior untuk mengarahkan kampanye brand, menyusun strategi komunikasi krisis, atau konsultasi reputasi publik?',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.namePlaceholder': 'mis. Budi Santoso',
    'contact.form.email': 'Alamat Email Perusahaan',
    'contact.form.emailPlaceholder': 'budi@perusahaan.com',
    'contact.form.service': 'Jenis Layanan / Kebutuhan',
    'contact.form.budget': 'Estimasi Anggaran Proyek',
    'contact.form.message': 'Deskripsi Singkat Kebutuhan Komunikasi',
    'contact.form.messagePlaceholder': 'Ceritakan secara ringkas tujuan komunikasi, target audiens, dan ekspektasi yang Anda harapkan...',
    'contact.form.send': 'Kirim Pesan Sekarang',
    'contact.form.sending': 'Mengirimkan Pesan...',
    'contact.form.successTitle': 'Pesan Berhasil Terkirim!',
    'contact.form.successDesc': 'Terima kasih atas minat Anda. Saya akan meninjau pesan ini dan membalas dalam kurun waktu 1x24 jam kerja.',
    'contact.form.sendAnother': 'Kirim Pesan Lainnya',
    'contact.copied': 'Email disalin ke clipboard!',
    'contact.wibClock': 'Waktu Lokal Jakarta (WIB)',

    // Footer
    'footer.rights': 'Hak Cipta Dilindungi.',
    'footer.designedWith': 'Dirancang & dibangun menggunakan React 19, TypeScript, Tailwind CSS, & Framer Motion.',
    'footer.backToTop': 'Kembali ke Atas',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Communications Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume CV',
    'nav.available': 'Open for Advisory',
    'nav.letsTalk': "Let's Talk",

    // Hero
    'hero.badge': 'Lead Strategic Communications & Brand Specialist',
    'hero.intro': 'Hello, I am',
    'hero.viewWork': 'Explore Profile',
    'hero.getInTouch': 'Get In Touch',
    'hero.quickStats.experience': 'Years Experience',
    'hero.quickStats.projects': 'Strategic Campaigns',
    'hero.quickStats.satisfaction': 'Positive Sentiment Rate',
    'hero.quickStats.uptime': 'Stakeholder Satisfaction',
    'hero.terminal.title': 'strategic-communication.ts',
    'hero.terminal.status': 'Strategy Active & Ready',

    // About & Story
    'about.badge': 'Profile & Story',
    'about.title': 'Connecting Organizational Vision with Public Trust',
    'about.philosophy': 'Communication Philosophy',
    'about.philosophyText': 'World-class communication stems from profound empathy, authentic storytelling, and crystal-clear narratives that inspire meaningful action.',
    'about.viewResume': 'Open Digital CV',
    'about.downloadResume': 'Download CV Summary (PDF)',

    // Skills
    'skills.badge': 'Capabilities & Strategy',
    'skills.title': 'Core Competencies & Strategic Communications',
    'skills.subtitle': 'Deep hands-on experience across corporate affairs, tier-1 media relations, crisis reputation management, and multi-channel public campaigns.',
    'skills.level': 'Proficiency',
    'skills.experience': 'Years in Production',

    // Experience
    'exp.badge': 'Professional Career',
    'exp.title': 'Experience & Education',
    'exp.education': 'Academic Background',

    // Contact
    'contact.badge': 'Start a Conversation',
    'contact.title': "Let's Shape Your Strategic Communications Together",
    'contact.subtitle': 'Need a seasoned communications strategist to lead your corporate narrative, handle media relations, or safeguard brand reputation?',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'e.g. Alexander Vance',
    'contact.form.email': 'Business Email',
    'contact.form.emailPlaceholder': 'alexander@company.com',
    'contact.form.service': 'Engagement Scope',
    'contact.form.budget': 'Estimated Budget',
    'contact.form.message': 'Project Summary & Objectives',
    'contact.form.messagePlaceholder': 'Briefly explain the communication objectives, target audience, and expectations...',
    'contact.form.send': 'Send Message Now',
    'contact.form.sending': 'Transmitting Message...',
    'contact.form.successTitle': 'Message Successfully Delivered!',
    'contact.form.successDesc': 'Thank you for reaching out. I will review your requirements and respond within 24 business hours.',
    'contact.form.sendAnother': 'Send Another Message',
    'contact.copied': 'Email address copied to clipboard!',
    'contact.wibClock': 'Local Time in Jakarta (WIB)',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.designedWith': 'Engineered with React 19, TypeScript, Tailwind CSS, & Framer Motion.',
    'footer.backToTop': 'Back to Top',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language-preference') as Language;
      if (saved === 'id' || saved === 'en') return saved;
      return 'id'; // Default to Indonesian
    }
    return 'id';
  });

  useEffect(() => {
    localStorage.setItem('language-preference', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLangState((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
