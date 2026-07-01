import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Opus', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'portfolio', 'experience', 'contact'];
      
      let currentSection = 'home';
      let maxVisibleHeight = 0;

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(window.innerHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // If this section occupies more of the screen than the previous ones
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          currentSection = id;
        }
      });

      // Override if we hit the absolute bottom of the page and Contact is visible
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveKey = (href) => {
    const map = { '#home': 'home', '#experience': 'experience', '#portfolio': 'portfolio', '#contact': 'contact' };
    return map[href];
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setActiveSection(getActiveKey(href));
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-teal-900/30 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-end h-16 md:h-18">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`nav-pill ${
                activeSection === getActiveKey(link.href) ? 'nav-pill-active' : ''
              }`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-text-light hover:text-gold-400 transition-colors rounded-lg"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-teal-900/40 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`nav-pill text-center ${
                    activeSection === getActiveKey(link.href) ? 'nav-pill-active' : ''
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
