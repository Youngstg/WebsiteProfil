import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, data } = useLanguage();
  const navLinks = data.nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (isNavigatingRef.current) return;

      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= docHeight - 70) {
        setActiveSection('contact');
        return;
      }

      if (scrollY < 80) {
        setActiveSection('hero');
        return;
      }

      const threshold = 160;
      const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setActiveSection(id);

    isNavigatingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const target = document.querySelector(href);
    if (target) {
      const navOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      scrollTimeoutRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
      }, 750);
    } else {
      isNavigatingRef.current = false;
    }
  };

  const handleLanguageSwitch = (targetLang) => {
    if (targetLang === lang) return;
    const hash = window.location.hash || '';
    if (targetLang === 'id') {
      window.location.href = `/id/${hash}`;
    } else {
      window.location.href = `/${hash}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? 'bg-obsidian-950/75 backdrop-blur-xl border-b border-gold-600/20 shadow-lg shadow-black/30'
          : 'bg-obsidian-950/40 backdrop-blur-md border-b border-gold-600/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3">
        {/* Left: Language Switcher Capsule on Desktop */}
        <div className="flex items-center gap-2">
          <div 
            className="flex items-center bg-obsidian-900/90 border border-gold-600/30 rounded-full p-1 shadow-sm backdrop-blur-md"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => handleLanguageSwitch('en')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all min-h-[30px] ${
                lang === 'en'
                  ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Switch to English version"
              aria-current={lang === 'en' ? 'true' : undefined}
            >
              EN
            </button>
            <span className="text-slate-600 px-0.5 select-none" aria-hidden="true">|</span>
            <button
              onClick={() => handleLanguageSwitch('id')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all min-h-[30px] ${
                lang === 'id'
                  ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Beralih ke versi Bahasa Indonesia"
              aria-current={lang === 'id' ? 'true' : undefined}
            >
              ID
            </button>
          </div>
        </div>

        {/* Center: Desktop Nav Menu (Centered Capsule Pill with sliding indicator) */}
        <nav 
          className="hidden md:flex items-center gap-1 bg-obsidian-900/60 backdrop-blur-md p-1.5 rounded-full border border-gold-600/25 shadow-inner mx-auto"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full min-h-[36px] inline-flex items-center justify-center transition-colors duration-200 outline-none focus:outline-none focus-visible:outline-none ring-0 select-none ${
                  isActive
                    ? 'text-obsidian-950 font-extrabold'
                    : 'text-slate-300 hover:text-gold-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gold-400 rounded-full pointer-events-none"
                    transition={{
                      type: 'spring',
                      stiffness: 440,
                      damping: 24,
                      mass: 0.65,
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Contact CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'contact')}
            className="gold-gradient-btn px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-gold-glow flex items-center gap-2 min-h-[44px]"
          >
            <span>{lang === 'id' ? 'Kontak' : 'Contact'}</span>
            <FiArrowRight className="text-xs" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-300 hover:text-gold-400 bg-obsidian-850 rounded-xl border border-gold-600/20 transition-colors outline-none focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-obsidian-950/95 backdrop-blur-2xl border-t border-gold-600/20 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {/* Language Switcher inside Mobile Drawer */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-gold-600/20 px-2">
                <span className="text-xs text-slate-400 font-medium">
                  {lang === 'id' ? 'Pilih Bahasa:' : 'Select Language:'}
                </span>
                <div className="flex items-center gap-1.5 bg-obsidian-900 border border-gold-600/30 rounded-full p-1">
                  <button
                    onClick={() => {
                      setIsMobileOpen(false);
                      handleLanguageSwitch('en');
                    }}
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      lang === 'en' ? 'bg-gold-500 text-obsidian-950' : 'text-slate-400'
                    }`}
                  >
                    English (EN)
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileOpen(false);
                      handleLanguageSwitch('id');
                    }}
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      lang === 'id' ? 'bg-gold-500 text-obsidian-950' : 'text-slate-400'
                    }`}
                  >
                    Indonesia (ID)
                  </button>
                </div>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors min-h-[44px] flex items-center justify-between border outline-none focus:outline-none ${
                      isActive
                        ? 'bg-gold-400 text-obsidian-950 border-gold-400 font-extrabold'
                        : 'bg-obsidian-850 text-slate-300 border-gold-600/15 hover:text-gold-300 hover:border-gold-500/30'
                    }`}
                  >
                    <span>{link.name}</span>
                    <FiArrowRight className={`text-xs ${isActive ? 'text-obsidian-950' : 'text-slate-500'}`} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
