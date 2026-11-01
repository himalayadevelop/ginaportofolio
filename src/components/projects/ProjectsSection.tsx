import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X, Sparkles, Filter } from 'lucide-react';
import type { Project, ProjectCategory } from '../../types/portfolio';
import { featuredProjects } from '../../data/portfolioData';
import { useLanguage } from '../../context/useLanguage';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; labelKey: string }[] = [
    { id: 'all', labelKey: 'projects.filter.all' },
    { id: 'ai', labelKey: 'projects.filter.ai' },
    { id: 'fullstack', labelKey: 'projects.filter.fullstack' },
    { id: 'fintech', labelKey: 'projects.filter.fintech' },
    { id: 'creative', labelKey: 'projects.filter.creative' },
  ];

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return featuredProjects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const titleMatch = project.title.toLowerCase().includes(q);
      const summaryMatch = (project.summary + ' ' + (project.summaryId || '')).toLowerCase().includes(q);
      const tagMatch = project.tags.some((t) => t.toLowerCase().includes(q));
      const clientMatch = project.client.toLowerCase().includes(q);

      return titleMatch || summaryMatch || tagMatch || clientMatch;
    });
  }, [activeCategory, searchQuery]);

  const handleNavigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = featuredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % featuredProjects.length;
      setSelectedProject(featuredProjects[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + featuredProjects.length) % featuredProjects.length;
      setSelectedProject(featuredProjects[prevIndex]);
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('projects.badge')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
          align="center"
        />

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-500/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{t(cat.labelKey)}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('projects.searchPlaceholder')}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span>
            {lang === 'id'
              ? `Menampilkan ${filteredProjects.length} dari ${featuredProjects.length} proyek terpilih`
              : `Displaying ${filteredProjects.length} of ${featuredProjects.length} featured works`}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            {lang === 'id' ? 'Klik studi kasus untuk detail arsitektur' : 'Click case study for deep dive'}
          </span>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5">
            <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              {t('projects.empty')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {lang === 'id'
                ? 'Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.'
                : 'Try adjusting your search query or reset the filter.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors cursor-pointer"
            >
              {lang === 'id' ? 'Reset Pencarian' : 'Reset Filters'}
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigate={handleNavigateProject}
        />
      )}
    </section>
  );
};
