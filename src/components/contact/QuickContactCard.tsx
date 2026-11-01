import React, { useState, useEffect } from 'react';
import { Copy, Check, Mail, MessageSquare, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '../common/SocialIcons';
import { useLanguage } from '../../context/useLanguage';
import { personalProfile } from '../../data/portfolioData';
import { useClipboard } from '../../hooks/useClipboard';

interface QuickContactCardProps {
  onNotify?: (message: string) => void;
}

export const QuickContactCard: React.FC<QuickContactCardProps> = ({ onNotify }) => {
  const { lang, t } = useLanguage();
  const { copied, copy } = useClipboard(2500);
  const [wibTime, setWibTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setWibTime(new Intl.DateTimeFormat('id-ID', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    copy(personalProfile.email);
    if (onNotify) {
      onNotify(t('contact.copied'));
    }
  };

  return (
    <div className="editorial-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
      <div>
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{lang === 'id' ? personalProfile.availabilityStatus.labelId : personalProfile.availabilityStatus.label}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-serif text-neutral-900 dark:text-white mb-2">
          {lang === 'id' ? 'Kanal Diskusi & Konsultasi' : 'Direct Channels & Advisory'}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          {lang === 'id'
            ? 'Terbuka untuk diskusi strategis seputar penataan narasi korporat, advokasi krisis media, kampanye reputasi publik, maupun peran penasihat komunikasi.'
            : 'Open for strategic discussions covering corporate narrative design, crisis steering, public campaigns, and executive communications advisory.'}
        </p>

        {/* Live WIB Clock */}
        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 mb-6">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {t('contact.wibClock')}
            </span>
            <span className="text-[11px] px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-mono">
              UTC+7
            </span>
          </div>
          <div className="text-2xl font-serif text-neutral-900 dark:text-white">
            {wibTime || '07:00:00'}
          </div>
          <span className="text-[11px] font-mono text-neutral-400">
            {lang === 'id' ? 'Jam Konsultasi: 09:00 - 18:00 WIB' : 'Core Consultation Hours: 09:00 - 18:00 WIB'}
          </span>
        </div>

        {/* Email Copy Box */}
        <div className="mb-6">
          <span className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-2">
            Direct Email
          </span>
          <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2 overflow-hidden">
              <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
              <span className="text-xs sm:text-sm font-mono text-neutral-900 dark:text-white truncate">
                {personalProfile.email}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Salin email"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono mb-8">
          <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span>{personalProfile.location}</span>
        </div>
      </div>

      {/* WhatsApp Action & Socials */}
      <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
        <a
          href={personalProfile.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-medium text-xs sm:text-sm transition-all shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'Kirim Pesan WhatsApp' : 'Direct WhatsApp'}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <div className="flex items-center justify-center gap-3 pt-2">
          <a
            href={personalProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalProfile.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
