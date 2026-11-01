import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { careerTimeline, educationHistory } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const CareerTimeline: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading
          badge={t('exp.badge')}
          title={t('exp.title')}
          subtitle={
            lang === 'id'
              ? 'Rekam jejak kepemimpinan komunikasi strategis, manajemen reputasi publik, dan fondasi akademis.'
              : 'Proven leadership in corporate communications, public affairs, and academic background.'
          }
          align="left"
        />

        {/* Chronological Ledger */}
        <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-12 ml-2 sm:ml-4">
          {careerTimeline.map((item, index) => {
            const role = lang === 'id' && item.roleId ? item.roleId : item.role;
            const summary = lang === 'id' && item.summaryId ? item.summaryId : item.summary;
            const achievements = lang === 'id' && item.keyAchievementsId ? item.keyAchievementsId : item.keyAchievements;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Quiet timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-900 dark:bg-white border-2 border-white dark:border-[#0a0a0c]" />

                <div className="editorial-card rounded-2xl p-6 sm:p-8">
                  {/* Top metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">
                        {role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.isCurrent && (
                        <Badge variant="success" dot>
                          {lang === 'id' ? 'Posisi Terkini' : 'Current Mandate'}
                        </Badge>
                      )}
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {item.company}
                    </span>
                    <span>•</span>
                    <span className="text-neutral-500 flex items-center gap-1 font-mono text-xs">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  {/* Role Summary */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {summary}
                  </p>

                  {/* Key Achievements */}
                  <ul className="space-y-2 mb-6">
                    {achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Practice Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Pedigree */}
        <div className="mt-16 pt-12 border-t border-neutral-200/80 dark:border-white/10">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {t('exp.education')}
            </h3>
          </div>

          <div className="space-y-6">
            {educationHistory.map((edu) => {
              const degree = lang === 'id' && edu.degreeId ? edu.degreeId : edu.degree;
              const highlights = lang === 'id' && edu.highlightsId ? edu.highlightsId : edu.highlights;

              return (
                <div
                  key={edu.id}
                  className="editorial-card rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                      {degree}
                    </h4>
                    <span className="text-xs font-mono text-neutral-400">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
                    {edu.institution} • {edu.location}
                  </p>

                  <ul className="space-y-2">
                    {highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0 mt-2" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
