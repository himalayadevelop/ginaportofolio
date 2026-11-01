import React from 'react';
import { useLanguage } from '../../context/useLanguage';
import { SectionHeading } from '../common/SectionHeading';
import { QuickContactCard } from './QuickContactCard';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
  onNotify: (title: string, message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  const { lang, t } = useLanguage();

  const handleEmailCopied = (msg: string) => {
    onNotify(
      lang === 'id' ? 'Email Tersalin' : 'Email Copied',
      msg,
      'info'
    );
  };

  const handleFormSuccess = () => {
    onNotify(
      lang === 'id' ? 'Pesan Terkirim' : 'Inquiry Sent',
      lang === 'id'
        ? 'Pesan telah diterima dan akan ditindaklanjuti dalam kurun 1x24 jam.'
        : 'Inquiry received. Gina Pasa will respond within 24 hours.',
      'success'
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels & Live Clock (5 cols) */}
          <div className="lg:col-span-5">
            <QuickContactCard onNotify={handleEmailCopied} />
          </div>

          {/* Clean Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      </div>
    </section>
  );
};
