import React, { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import type { ToastMessage } from './types/portfolio';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { TechTicker } from './components/hero/TechTicker';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ContactSection } from './components/contact/ContactSection';
import { ResumeModal } from './components/resume/ResumeModal';
import { Toast } from './components/common/Toast';

let toastCounter = 0;
const generateToastId = () => {
  toastCounter += 1;
  return `toast-${toastCounter}`;
};

export const PortfolioApp: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (
      title: string,
      message: string,
      type: 'success' | 'info' | 'warning' | 'error' = 'info'
    ) => {
      const id = generateToastId();
      const newToast: ToastMessage = { id, title, message, type };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        dismissToast(id);
      }, 4500);
    },
    [dismissToast]
  );

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      {/* Navbar with scroll effect, active spy & controls */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Continuous Communications & Strategy Marquee Ticker */}
        <TechTicker />

        {/* Professional Presentation & Story */}
        <AboutSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Technical Capabilities & Skill Matrix */}
        <SkillsSection />

        {/* Interactive Contact Form & Live Channels */}
        <ContactSection onNotify={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Digital Resume / CV Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onNotify={addToast}
      />

      {/* Reactive Floating Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
