import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '../common/SocialIcons';
import { useLanguage } from '../../context/useLanguage';
import { personalProfile } from '../../data/portfolioData';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { id: 'hero', label: lang === 'id' ? 'Beranda' : 'Index' },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <footer className="border-t border-neutral-200/80 dark:border-white/10 pt-16 pb-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200/80 dark:border-white/10">
          {/* Brand info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="text-xl font-serif italic text-neutral-900 dark:text-white">
              Gina Pasa
            </div>
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mt-1">
              {lang === 'id' ? personalProfile.titleId : personalProfile.title}
            </span>

            <p className="mt-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
              {lang === 'id' ? personalProfile.headlineId : personalProfile.headline}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>
                {lang === 'id'
                  ? personalProfile.availabilityStatus.labelId
                  : personalProfile.availabilityStatus.label}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-4">
              {lang === 'id' ? 'Navigasi' : 'Navigation'}
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 flex flex-col md:items-end">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-4">
              {lang === 'id' ? 'Koneksi' : 'Connect'}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalProfile.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-8 inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>{t('footer.backToTop')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>© {currentYear} GINA PASA. {t('footer.rights')}</p>
          <p>Pangandaran, Indonesia • Communications</p>
        </div>
      </div>
    </footer>
  );
};
