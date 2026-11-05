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
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // 1. Bottom of page threshold (activate 'contact' when near footer)
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // 2. Top of page threshold (activate 'hero' when at top)
      if (scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      // 3. Scanning line positioned 180px below top viewport (under fixed navbar)
      const targetY = scrollY + 180;
      const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (targetY >= top && targetY < top + height) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setActiveSection(id);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? 'bg-obsidian-950/60 backdrop-blur-xl border-b border-gold-600/20 shadow-lg shadow-black/30'
          : 'bg-obsidian-950/35 backdrop-blur-md border-b border-gold-600/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left balance spacer for centered desktop capsule */}
        <div className="hidden md:block w-24 lg:w-28" />

        {/* Desktop Nav Menu (Centered Capsule Pill with animated sliding indicator) */}
        <nav className="hidden md:flex items-center gap-1 bg-obsidian-900/40 backdrop-blur-md p-1.5 rounded-full border border-gold-600/25 shadow-inner mx-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full min-h-[36px] inline-flex items-center justify-center transition-colors duration-200 ${
                  isActive
                    ? 'text-gold-300 font-bold'
                    : 'text-slate-300 hover:text-gold-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gold-600/25 border border-gold-400/40 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
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
            className="md:hidden bg-obsidian-950/85 backdrop-blur-2xl border-t border-gold-600/20 overflow-hidden shadow-2xl"
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
