import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, ShieldCheck, Share2, Users, MessageSquare, CheckCircle2 } from 'lucide-react';
import { skillGroups } from '../../data/portfolioData';
import type { SkillItem } from '../../types/portfolio';
import { useLanguage } from '../../context/useLanguage';
import { SectionHeading } from '../common/SectionHeading';
import { SkillCard } from './SkillCard';

export const SkillsSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeGroupId, setActiveGroupId] = useState<string>(skillGroups[0].id);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'corporate-comm':
        return <Newspaper className="w-3.5 h-3.5" />;
      case 'crisis-reputation':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'digital-brand':
        return <Share2 className="w-3.5 h-3.5" />;
      case 'internal-comm':
        return <Users className="w-3.5 h-3.5" />;
      default:
        return <MessageSquare className="w-3.5 h-3.5" />;
    }
  };

  const activeGroup = skillGroups.find((g) => g.id === activeGroupId) || skillGroups[0];
  const groupTitle = lang === 'id' ? activeGroup.titleId : activeGroup.title;
  const groupDesc = lang === 'id' ? activeGroup.descriptionId : activeGroup.description;

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-neutral-50/40 dark:bg-neutral-900/20 border-y border-neutral-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          badge={t('skills.badge')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
          align="left"
        />

        {/* Minimalist Practice Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-neutral-200/80 dark:border-white/10">
          {skillGroups.map((group) => {
            const isActive = activeGroupId === group.id;
            const title = lang === 'id' ? group.titleId : group.title;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => {
                  setActiveGroupId(group.id);
                  setSelectedSkill(null);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
                }`}
              >
                {getGroupIcon(group.id)}
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* Group Overview Description */}
        <div className="mb-10 max-w-2xl">
          <h3 className="text-xl font-normal text-neutral-900 dark:text-white mb-2">
            {groupTitle}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {groupDesc}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {activeGroup.skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isSelected={selectedSkill?.name === skill.name}
              onSelect={(s) => setSelectedSkill(s)}
            />
          ))}
        </div>

        {/* Interactive Capability Focus Card */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="editorial-card rounded-2xl p-6 max-w-2xl text-left mt-6"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {selectedSkill.name} — Scope & Advisory Mandate
                </h4>
                <span className="text-[11px] font-mono text-neutral-400">
                  {selectedSkill.experienceYears} Years Track Record
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {selectedSkill.tagline}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>
                  {lang === 'id'
                    ? 'Diterapkan pada skala korporasi nasional dan regional dengan hasil terukur.'
                    : 'Deployed across national and regional enterprise mandates with quantifiable outcomes.'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
