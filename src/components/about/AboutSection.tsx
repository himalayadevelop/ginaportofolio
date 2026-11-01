import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MessageSquare, BookOpen, ArrowUpRight, FileText } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { personalProfile } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResumeModal }) => {
  const { lang, t } = useLanguage();

  const storyParagraphs = lang === 'id' ? personalProfile.detailedStoryId : personalProfile.detailedStory;

  const corePillars = [
    {
      num: '01',
      icon: <Code2 className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />,
      title: lang === 'id' ? 'Rekayasa Perangkat Lunak' : 'Software Engineering',
      desc:
        lang === 'id'
          ? 'Latar belakang pendidikan Rekayasa Perangkat Lunak yang membentuk pola pikir logis, terstruktur, dan pemahaman mendalam tentang teknologi digital.'
          : 'Educational background in Software Engineering providing analytical logic, structured systems thinking, and technological acumen.',
    },
    {
      num: '02',
      icon: <MessageSquare className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />,
      title: lang === 'id' ? 'Ilmu Komunikasi (Universitas Terbuka)' : 'Communication Science (UT)',
      desc:
        lang === 'id'
          ? 'Saat ini menempuh studi Ilmu Komunikasi di Universitas Terbuka serta berpengalaman dalam proses pengembangan kompetensi komunikasi dan media digital.'
          : 'Currently pursuing Communication Science at Universitas Terbuka, actively developing practical competencies in digital communications and media dynamics.',
    },
    {
      num: '03',
      icon: <BookOpen className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />,
      title: lang === 'id' ? 'Pendidikan & Kemampuan Beradaptasi' : 'Education & Adaptability',
      desc:
        lang === 'id'
          ? 'Pribadi yang terbuka terhadap pembelajaran baru, berpikir kritis, kreatif, serta memiliki komitmen kuat untuk terus meningkatkan kemampuan diri.'
          : 'An open-minded continuous learner equipped with adaptability, critical thinking, creativity, and a drive for self-improvement in the digital era.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={lang === 'id' ? personalProfile.headlineId : personalProfile.headline}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Prepared Portrait from public/Fotolatar.png (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="editorial-card rounded-2xl overflow-hidden p-2.5">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <img
                  src="/Fotolatar.png"
                  alt={personalProfile.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                  <div className="text-lg font-serif italic text-neutral-100">
                    GINA PASA
                  </div>
                  <div className="text-xs font-mono text-neutral-300 mt-0.5">
                    {lang === 'id'
                      ? 'Ilmu Komunikasi (UT)'
                      : 'Communication Science'}
                  </div>
                </div>
              </div>

              <div className="p-3 text-[11px] font-mono text-neutral-500 text-center flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{lang === 'id' ? 'Aktif Menempuh Studi di Universitas Terbuka' : 'Student at Universitas Terbuka'}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Professional Profile Statement */}
            <div className="pb-6 border-b border-neutral-200/80 dark:border-white/10 mb-8">
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block mb-3">
                {lang === 'id' ? 'Profil Profesional' : 'Professional Profile'}
              </span>
              <p className="text-base sm:text-lg font-serif italic text-neutral-900 dark:text-white leading-relaxed">
                "{lang === 'id'
                  ? 'Menghubungkan minat pada teknologi informasi, komunikasi digital, dan pendidikan untuk siap menghadapi tantangan dunia kerja di era digital.'
                  : 'Bridging a strong passion for information technology, digital communications, and education to excel in the digital era.'}"
              </p>
            </div>

            {/* User Provided Narrative Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-10">
              {storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                onClick={onOpenResumeModal}
                icon={<FileText className="w-4 h-4" />}
                iconPosition="left"
              >
                {t('about.viewResume')}
              </Button>

              <a
                href={personalProfile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                <span>{lang === 'id' ? 'Hubungi via WhatsApp' : 'Direct WhatsApp'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-neutral-200/80 dark:border-white/10">
          {corePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="editorial-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-widest text-neutral-400">
                    {pillar.num}
                  </span>
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/80">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
