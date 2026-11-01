import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { personalProfile } from '../../data/portfolioData';
import { Button } from '../common/Button';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const { lang, t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Main Editorial Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 text-[11px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{personalProfile.location}</span>
            </motion.div>

            {/* Headline with Serif Artistry */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="space-y-4 mb-8"
            >
              <span className="text-xs font-mono font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                {lang === 'id' ? personalProfile.titleId : personalProfile.title}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
                {lang === 'id' ? (
                  <>
                    Menghubungkan teknologi informasi, komunikasi digital, dan{' '}
                    <span className="font-serif italic text-neutral-600 dark:text-neutral-300">
                      semangat pembelajaran baru.
                    </span>
                  </>
                ) : (
                  <>
                    Connecting information technology, digital communications, and{' '}
                    <span className="font-serif italic text-neutral-600 dark:text-neutral-300">
                      continuous learning.
                    </span>
                  </>
                )}
              </h1>
            </motion.div>

            {/* Executive Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-10 max-w-xl"
            >
              {lang === 'id' ? personalProfile.bioSummaryId : personalProfile.bioSummary}
            </motion.p>

            {/* Clean Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14"
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollTo('contact')}
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
              >
                {t('hero.getInTouch')}
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => scrollTo('about')}
              >
                {t('hero.viewWork')}
              </Button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t('nav.resume')}</span>
              </button>
            </motion.div>

            {/* Quiet Metrics Ledger */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-8 border-t border-neutral-200/80 dark:border-white/10"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-serif text-neutral-900 dark:text-white font-normal">
                  RPL
                </span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1 block">
                  Latar Belakang
                </span>
              </div>

              <div>
                <span className="block text-2xl sm:text-3xl font-serif text-neutral-900 dark:text-white font-normal">
                  UT
                </span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1 block">
                  Ilmu Komunikasi
                </span>
              </div>

              <div>
                <span className="block text-2xl sm:text-3xl font-serif text-neutral-900 dark:text-white font-normal">
                  Adaptif
                </span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1 block">
                  Karakter
                </span>
              </div>

              <div>
                <span className="block text-2xl sm:text-3xl font-serif text-neutral-900 dark:text-white font-normal">
                  Kritis
                </span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1 block">
                  Pola Pikir
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Executive Practice Overview (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="editorial-card rounded-2xl p-7 text-neutral-800 dark:text-neutral-200"
            >
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100 dark:border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                <span>Profil Profesional</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Aktif Belajar & Berkembang
                </span>
              </div>

              <div className="py-6 space-y-4">
                <blockquote className="font-serif italic text-lg sm:text-xl text-neutral-900 dark:text-white leading-relaxed">
                  "{lang === 'id'
                    ? 'Kemampuan beradaptasi, berpikir kritis, kreativitas, dan komunikasi yang baik merupakan hal penting untuk menghadapi perkembangan era digital.'
                    : 'Adaptability, critical thinking, creativity, and effective communication are fundamental to thriving in the digital age.'}"
                </blockquote>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  — Gina Pasa
                </p>
              </div>

              <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800 space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 dark:text-white font-medium">
                      {lang === 'id' ? 'Rekayasa Perangkat Lunak' : 'Software Engineering'}
                    </strong>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {lang === 'id' ? 'Latar belakang pendidikan teknis, logika sistem, dan komputasi' : 'Technical foundation in software logic, systems, and digital tools'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 dark:text-white font-medium">
                      {lang === 'id' ? 'Ilmu Komunikasi (Universitas Terbuka)' : 'Communication Science (UT)'}
                    </strong>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {lang === 'id' ? 'Studi aktif di bidang komunikasi dan pemanfaatan media digital' : 'Currently pursuing degree with focus on digital media and communication'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 dark:text-white font-medium">
                      {lang === 'id' ? 'Minat Pendidikan & Pembelajaran' : 'Passion for Education & Growth'}
                    </strong>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {lang === 'id' ? 'Terbuka terhadap ilmu baru serta semangat terus mengasah kemampuan diri' : 'Open to continuous learning and dedicated to progressive self-improvement'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Studi: Universitas Terbuka</span>
                <span>Fokus: IT, Komunikasi & Edukasi</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
