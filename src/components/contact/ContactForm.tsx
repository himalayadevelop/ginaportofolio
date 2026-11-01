import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import type { ContactFormData } from '../../types/portfolio';
import { contactServices, budgetRanges } from '../../data/portfolioData';
import { useLanguage } from '../../context/useLanguage';
import { Button } from '../common/Button';

interface ContactFormProps {
  onSuccess?: () => void;
}

interface ValidationErrors {
  fullName?: string;
  email?: string;
  serviceType?: string;
  budgetRange?: string;
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    serviceType: contactServices[0].id,
    budgetRange: budgetRanges[1].id,
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email regex
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validateField = (field: keyof ContactFormData, value: string): string | undefined => {
    switch (field) {
      case 'fullName':
        if (!value.trim()) {
          return lang === 'id' ? 'Nama lengkap wajib diisi.' : 'Full name is required.';
        }
        if (value.trim().length < 2) {
          return lang === 'id' ? 'Nama minimal 2 karakter.' : 'Name must be at least 2 characters.';
        }
        return undefined;

      case 'email':
        if (!value.trim()) {
          return lang === 'id' ? 'Alamat email wajib diisi.' : 'Email address is required.';
        }
        if (!emailRegex.test(value.trim())) {
          return lang === 'id' ? 'Format email tidak valid.' : 'Invalid email format.';
        }
        return undefined;

      case 'message':
        if (!value.trim()) {
          return lang === 'id' ? 'Rincian pesan konsultasi wajib diisi.' : 'Inquiry details are required.';
        }
        if (value.trim().length < 20) {
          return lang === 'id'
            ? `Pesan minimal 20 karakter (saat ini ${value.trim().length}).`
            : `Message must be at least 20 characters (currently ${value.trim().length}).`;
        }
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = {
      fullName: true,
      email: true,
      serviceType: true,
      budgetRange: true,
      message: true,
    };
    setTouched(allTouched);

    const newErrors: ValidationErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    if (newErrors.fullName || newErrors.email || newErrors.message) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      serviceType: contactServices[0].id,
      budgetRange: budgetRanges[1].id,
      message: '',
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
  };

  return (
    <div className="editorial-card rounded-2xl p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="py-12 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {t('contact.form.successTitle')}
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              {t('contact.form.successDesc')}
            </p>

            <div className="pt-4">
              <Button
                variant="outline"
                size="md"
                onClick={handleReset}
                icon={<RefreshCw className="w-3.5 h-3.5" />}
              >
                {t('contact.form.sendAnother')}
              </Button>
            </div>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name Field */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-2">
                  {t('contact.form.name')}{' '}
                  <span className="text-neutral-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    onBlur={() => handleBlur('fullName')}
                    placeholder={t('contact.form.namePlaceholder')}
                    className={`w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none transition-colors ${
                      touched.fullName && errors.fullName
                        ? 'border-rose-500'
                        : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white'
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <AlertCircle className="w-4 h-4 text-rose-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                </div>
                {touched.fullName && errors.fullName && (
                  <p className="mt-1.5 text-xs text-rose-500 font-mono">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address Field */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-2">
                  {t('contact.form.email')}{' '}
                  <span className="text-neutral-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className={`w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none transition-colors ${
                      touched.email && errors.email
                        ? 'border-rose-500'
                        : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <AlertCircle className="w-4 h-4 text-rose-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                </div>
                {touched.email && errors.email && (
                  <p className="mt-1.5 text-xs text-rose-500 font-mono">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-2.5">
                {t('contact.form.service')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {contactServices.map((svc) => {
                  const isSelected = formData.serviceType === svc.id;
                  const label = lang === 'id' ? svc.labelId : svc.label;

                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => handleChange('serviceType', svc.id)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium border-neutral-900 dark:border-white'
                          : 'bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-2.5">
                {t('contact.form.budget')}
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((b) => {
                  const isSelected = formData.budgetRange === b.id;

                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => handleChange('budgetRange', b.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white'
                          : 'bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400'
                      }`}
                    >
                      {b.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400">
                  {t('contact.form.message')}{' '}
                  <span className="text-neutral-400">*</span>
                </label>
                <span className="text-[11px] font-mono text-neutral-400">
                  {formData.message.trim().length}/20 min
                </span>
              </div>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                placeholder={t('contact.form.messagePlaceholder')}
                className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none transition-colors resize-none ${
                  touched.message && errors.message
                    ? 'border-rose-500'
                    : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white'
                }`}
              />
              {touched.message && errors.message && (
                <p className="mt-1.5 text-xs text-rose-500 font-mono">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              icon={<Send className="w-4 h-4" />}
              iconPosition="right"
              className="w-full"
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
