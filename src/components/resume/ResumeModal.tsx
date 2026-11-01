import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { personalProfile, careerTimeline, educationHistory, skillGroups } from '../../data/portfolioData';
import { useLanguage } from '../../context/useLanguage';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify?: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const content = `
# ${personalProfile.name}
${personalProfile.title}
Location: ${personalProfile.location} | Email: ${personalProfile.email} | Phone: ${personalProfile.phone}

---
## EXECUTIVE SUMMARY
${lang === 'id' ? personalProfile.bioSummaryId : personalProfile.bioSummary}

---
## STRATEGIC & COMMUNICATION EXPERTISE
${skillGroups.map(g => `- ${g.title}: ${g.skills.map(s => s.name).join(', ')}`).join('\n')}

---
## PROFESSIONAL EXPERIENCE
${careerTimeline.map(exp => `
### ${exp.role} — ${exp.company} (${exp.period})
Location: ${exp.location}
${exp.summary}
Key Achievements:
${exp.keyAchievements.map(a => `* ${a}`).join('\n')}
Practice Focus: ${exp.technologies.join(', ')}
`).join('\n')}

---
## EDUCATION
${educationHistory.map(edu => `
### ${edu.degree} — ${edu.institution} (${edu.period})
${edu.highlights.map(h => `* ${h}`).join('\n')}
`).join('\n')}
    `.trim();

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Gina_Pasa_Executive_CV_${new Date().getFullYear()}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (onNotify) {
      onNotify(
        lang === 'id' ? 'Unduhan Dimulai' : 'Download Started',
        lang === 'id' ? 'File ringkasan CV berhasil diunduh.' : 'Executive CV file successfully downloaded.',
        'success'
      );
    }
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#0e0f12] border border-neutral-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-800 dark:text-neutral-100 z-10"
        >
          {/* Top Control Bar */}
          <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-900/60 border-b border-neutral-200/80 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <h3 id="resume-title" className="text-xs font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-300">
                {lang === 'id' ? 'Ringkasan Eksekutif & Curriculum Vitae' : 'Executive Resume & Bio'}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                title="Cetak CV"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Cetak' : 'Print'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Unduh File' : 'Download CV'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Canvas */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#0e0f12]">
            {/* Header / Brand */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
              <h1 className="text-3xl sm:text-4xl font-serif text-neutral-900 dark:text-white">
                {personalProfile.name}
              </h1>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-500 mt-1">
                {lang === 'id' ? personalProfile.titleId : personalProfile.title}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  {personalProfile.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  {personalProfile.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  {personalProfile.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-neutral-400" />
                  ginapasa.com
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                {lang === 'id' ? 'Ringkasan Eksekutif' : 'Executive Summary'}
              </h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-serif italic text-base">
                "{lang === 'id' ? personalProfile.bioSummaryId : personalProfile.bioSummary}"
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                {lang === 'id' ? 'Area Praktik & Kompetensi' : 'Practice Areas & Expertise'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillGroups.map((group) => (
                  <div key={group.id} className="p-3.5 rounded-xl editorial-card">
                    <strong className="block text-neutral-900 dark:text-white mb-1 font-medium">
                      {lang === 'id' ? group.titleId : group.title}
                    </strong>
                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {group.skills.map((s) => s.name).join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-4">
                {lang === 'id' ? 'Riwayat Pengalaman Profesional' : 'Professional Work History'}
              </h2>
              <div className="space-y-6">
                {careerTimeline.map((item) => (
                  <div key={item.id} className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-sm font-semibold text-neutral-900 dark:text-white">
                      <span>{item.role} • {item.company}</span>
                      <span className="text-xs font-mono font-normal text-neutral-400">{item.period}</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {lang === 'id' && item.summaryId ? item.summaryId : item.summary}
                    </p>
                    <ul className="space-y-1 pl-4 list-disc text-xs text-neutral-500 leading-relaxed">
                      {(lang === 'id' && item.keyAchievementsId ? item.keyAchievementsId : item.keyAchievements).map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <h2 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                {lang === 'id' ? 'Pendidikan' : 'Education'}
              </h2>
              {educationHistory.map((edu) => (
                <div key={edu.id} className="text-xs space-y-1">
                  <div className="flex items-center justify-between text-sm font-semibold text-neutral-900 dark:text-white">
                    <span>{edu.degree} — {edu.institution}</span>
                    <span className="font-mono text-neutral-400 font-normal">{edu.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-neutral-500">
                    {(lang === 'id' && edu.highlightsId ? edu.highlightsId : edu.highlights).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
