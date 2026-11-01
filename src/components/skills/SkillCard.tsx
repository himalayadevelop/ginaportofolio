import React from 'react';
import { motion } from 'framer-motion';
import type { SkillItem } from '../../types/portfolio';

interface SkillCardProps {
  skill: SkillItem;
  isSelected?: boolean;
  onSelect?: (skill: SkillItem) => void;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  isSelected = false,
  onSelect,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onClick={() => onSelect && onSelect(skill)}
      className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer select-none text-left ${
        isSelected
          ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-950 dark:border-white shadow-md'
          : 'editorial-card hover:border-neutral-400 dark:hover:border-neutral-600'
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4 className="text-sm font-semibold tracking-tight">
          {skill.name}
        </h4>
        {skill.badge && (
          <span
            className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
              isSelected
                ? 'border-white/30 text-white dark:border-black/30 dark:text-neutral-950'
                : 'border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400'
            }`}
          >
            {skill.badge}
          </span>
        )}
      </div>

      <p
        className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
          isSelected
            ? 'text-neutral-300 dark:text-neutral-700'
            : 'text-neutral-500 dark:text-neutral-400'
        }`}
      >
        {skill.tagline}
      </p>

      <div
        className={`text-[11px] font-mono tracking-wider uppercase ${
          isSelected
            ? 'text-neutral-400 dark:text-neutral-600'
            : 'text-neutral-400 dark:text-neutral-500'
        }`}
      >
        <span>{skill.experienceYears} Years Advisory</span>
      </div>
    </motion.div>
  );
};
