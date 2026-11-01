import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import type { Project } from '../../types/portfolio';
import { useLanguage } from '../../context/useLanguage';
import { Badge } from '../common/Badge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const { lang, t } = useLanguage();

  const title = project.title;
  const tagline = lang === 'id' && project.taglineId ? project.taglineId : project.tagline;
  const summary = lang === 'id' && project.summaryId ? project.summaryId : project.summary;
  const categoryLabel = lang === 'id' ? project.categoryLabelId : project.categoryLabel;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl dark:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <img
          src={project.coverImage}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Badges on Image */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Badge variant="primary" className="bg-slate-900/80 text-white border-white/20">
            {categoryLabel}
          </Badge>

          <span className="text-[11px] font-mono font-medium text-slate-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
            {project.year}
          </span>
        </div>

        {/* Role & Client bar at bottom of image */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
          <span className="font-mono">{project.role}</span>
          <span className="text-slate-400 font-mono">{project.client}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
            {project.featured && (
              <span title="Featured Project" className="inline-flex">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              </span>
            )}
          </div>

          <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3 line-clamp-1">
            {tagline}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-6">
            {summary}
          </p>

          {/* Key Metric Highlights */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200/50 dark:border-white/5">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <TrendingUp className="w-3 h-3 text-indigo-500" />
                    <span className="truncate">{metric.label}</span>
                  </div>
                  <span className="text-base font-bold font-mono text-slate-900 dark:text-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 text-[11px] font-mono rounded-lg text-slate-500 dark:text-slate-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
          >
            <span>{t('projects.caseStudy')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${title}`}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${title}`}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
