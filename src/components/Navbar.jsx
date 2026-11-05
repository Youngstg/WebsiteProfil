import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

const navLinks = [
  { name: 'HOME', href: '#hero', id: 'hero' },
  { name: 'ABOUT', href: '#about', id: 'about' },
  { name: 'SKILLS', href: '#skills', id: 'skills' },
  { name: 'PROJECTS', href: '#projects', id: 'projects' },
  { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { name: 'CONTACT', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      let currentSection = 'hero';
      let maxVisibleHeight = 0;

      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(window.innerHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          currentSection = id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setActiveSection(id);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? 'bg-obsidian-900/95 backdrop-blur-md border-b border-gold-600/20 shadow-xl'
          : 'bg-obsidian-900/80 backdrop-blur-md border-b border-gold-600/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left balance spacer for centered desktop capsule */}
        <div className="hidden md:block w-24 lg:w-28" />

        {/* Desktop Nav Menu (Centered Capsule Pill) */}
        <nav className="hidden md:flex items-center gap-1 bg-obsidian-800/80 p-1.5 rounded-full border border-gold-600/25 shadow-inner mx-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 min-h-[36px] inline-flex items-center justify-center ${
                  isActive
                    ? 'text-gold-300 bg-gold-600/20 shadow-sm border border-gold-500/30 font-bold'
                    : 'text-slate-300 hover:text-gold-300 hover:bg-gold-500/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'contact')}
            className="gold-gradient-btn px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-gold-glow flex items-center gap-2 min-h-[44px]"
          >
            <span>Hire Me</span>
            <FiArrowRight className="text-xs" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-300 hover:text-gold-400 bg-obsidian-850 rounded-xl border border-gold-600/20 transition-colors"
            aria-label="Toggle Navigation Menu"
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
            className="md:hidden bg-obsidian-900/95 backdrop-blur-2xl border-t border-gold-600/20 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors min-h-[44px] flex items-center justify-between border ${
                      isActive
                        ? 'bg-gold-500/15 text-gold-300 border-gold-500/40'
                        : 'bg-obsidian-850 text-slate-300 border-gold-600/15 hover:text-gold-300 hover:border-gold-500/30'
                    }`}
                  >
                    <span>{link.name}</span>
                    <FiArrowRight className={`text-xs ${isActive ? 'text-gold-400' : 'text-slate-500'}`} />
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
