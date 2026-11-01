import React from 'react';

const mediaCredits = [
  'The Yogyakarta Post',
  'Kompas',
  'Bloomberg News',
  'DealStreetAsia',
  'Bisnis Indonesia',
  'Katadata',
  'Tech in Asia',
  'CNBC Indonesia',
  'Antara News',
  'Investor Daily',
];

export const TechTicker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden border-y border-neutral-200/80 dark:border-white/10 bg-neutral-50/50 dark:bg-neutral-900/30 py-3.5 select-none">
      <div className="flex animate-marquee gap-10 items-center">
        {[...mediaCredits, ...mediaCredits].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-4 shrink-0"
          >
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </div>
        ))}
      </div>
    </div>
  );
};
