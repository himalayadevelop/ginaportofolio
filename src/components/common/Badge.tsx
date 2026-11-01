import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'outline';
  dot?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  dot = false,
  className = '',
  onClick,
}) => {
  const variantStyles = {
    primary: 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-white/10',
    secondary: 'bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800',
    accent: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    success: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
    outline: 'bg-transparent text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800',
  };

  const dotStyles = {
    primary: 'bg-neutral-500',
    secondary: 'bg-neutral-400',
    accent: 'bg-amber-500',
    success: 'bg-emerald-500',
    outline: 'bg-neutral-400',
  };

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-tight border transition-colors ${
        variantStyles[variant]
      } ${onClick ? 'cursor-pointer select-none hover:border-neutral-400 dark:hover:border-neutral-600' : ''} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[variant]}`} />}
      {children}
    </span>
  );
};
