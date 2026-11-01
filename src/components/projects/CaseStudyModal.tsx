import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Calendar,
  User,
  Building,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import type { Project, GalleryItem } from '../../types/portfolio';
import { useLanguage } from '../../context/useLanguage';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate?: (direction: 'next' | 'prev') => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'results' | 'gallery'>('overview');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, lightboxImage, onClose]);

  if (!project) return null;

  const title = project.title;
  const tagline = lang === 'id' && project.taglineId ? project.taglineId : project.tagline;
  const fullDesc = lang === 'id' && project.fullDescriptionId ? project.fullDescriptionId : project.fullDescription;
  const categoryLabel = lang === 'id' ? project.categoryLabelId : project.categoryLabel;
  const archOverview = lang === 'id' && project.architecture.overviewId ? project.architecture.overviewId : project.architecture.overview;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-100 z-10"
        >
          {/* Header Bar */}
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-slate-950 shrink-0">
            <img
              src={project.coverImage}
              alt={title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Top Close Button & Nav */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {onNavigate && (
                <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => onNavigate('prev')}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('next')}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Metadata inside header banner */}
            <div className="absolute bottom-4 left-6 right-6">
              <Badge variant="primary" className="bg-slate-900/90 text-white border-white/20 mb-2">
                {categoryLabel}
              </Badge>
              <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                {title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-indigo-300 mt-1 line-clamp-1">
                {tagline}
              </p>
            </div>
          </div>

          {/* Quick Stats & Meta bar */}
          <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-indigo-500" />
                {project.role}
              </span>
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-purple-500" />
                {project.client}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                {project.year} ({project.duration})
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>{t('projects.sourceCode')}</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t('projects.liveDemo')}</span>
                </a>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-slate-200 dark:border-white/5 px-6 bg-white dark:bg-slate-900 text-xs sm:text-sm font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              {t('modal.overview')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`py-3 px-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'architecture'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              {t('modal.techStack')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('results')}
              className={`py-3 px-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'results'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              {t('modal.results')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`py-3 px-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'gallery'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              {t('modal.gallery')} ({project.gallery.length})
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {lang === 'id' ? 'Latar Belakang & Deskripsi Sistem' : 'Project Background'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {fullDesc}
                  </p>
                </div>

                {/* Challenges & Solutions Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-sm mb-3">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <h4>{t('modal.challenges')}</h4>
                    </div>
                    <div className="space-y-3">
                      {project.challenges.map((c, i) => (
                        <div key={i} className="text-xs">
                          <strong className="block text-slate-900 dark:text-white mb-1">
                            {lang === 'id' && c.titleId ? c.titleId : c.title}
                          </strong>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {lang === 'id' && c.descriptionId ? c.descriptionId : c.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-3">
                      <Lightbulb className="w-4 h-4 shrink-0" />
                      <h4>{t('modal.solutions')}</h4>
                    </div>
                    <div className="space-y-3">
                      {project.solutions.map((s, i) => (
                        <div key={i} className="text-xs">
                          <strong className="block text-slate-900 dark:text-white mb-1">
                            {lang === 'id' && s.titleId ? s.titleId : s.title}
                          </strong>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {lang === 'id' && s.descriptionId ? s.descriptionId : s.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                    {lang === 'id' ? 'Ikhtisar Arsitektur' : 'Architecture Blueprint'}
                  </h4>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {archOverview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
                    <h5 className="text-xs font-mono font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      Frontend & Client
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                      {project.architecture.frontend.map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
                    <h5 className="text-xs font-mono font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      Backend & Storage
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                      {project.architecture.backend.map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
                    <h5 className="text-xs font-mono font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500" />
                      Cloud, SRE & Observability
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                      {project.architecture.cloudAndDevOps.map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-6">
                {/* Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 flex flex-col justify-between"
                    >
                      <span className="text-xs text-slate-500 dark:text-slate-400">{m.label}</span>
                      <span className="text-2xl font-black font-mono text-indigo-600 dark:text-indigo-400 my-1">
                        {m.value}
                      </span>
                      {m.description && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-500">
                          {m.description}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {lang === 'id' ? 'Hasil & Manfaat Nyata' : 'Key Business & Technical Outcomes'}
                  </h4>
                  {project.results.map((res, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5 flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-sm font-semibold text-slate-900 dark:text-white">
                          {res.kpi}
                        </strong>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                          {lang === 'id' && res.detailId ? res.detailId : res.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxImage(item)}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 aspect-video bg-slate-950 cursor-pointer"
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-xl bg-white/90 text-slate-900 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-2.5 bg-slate-950/80 backdrop-blur-sm text-left">
                        <p className="text-xs font-semibold text-white truncate">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Controls */}
          <div className="p-4 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={onClose}>
              {t('modal.back')}
            </Button>

            {project.demoUrl && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(project.demoUrl, '_blank')}
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                {t('projects.liveDemo')}
              </Button>
            )}
          </div>
        </motion.div>

        {/* Lightbox Image Preview Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-8"
              onClick={() => setLightboxImage(null)}
            >
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className="max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
                <div className="p-4 bg-slate-900 text-white text-center">
                  <h4 className="text-sm font-bold">{lightboxImage.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{lightboxImage.caption}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
