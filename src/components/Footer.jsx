import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Opus', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialIcons = [
  { icon: FiGithub, href: profile.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: FiInstagram, href: profile.socials.instagram, label: 'Instagram' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-teal-950/40">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-2xl font-bold text-gold-400 script-heading min-h-[44px] inline-flex items-center"
          >
            Lucky
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {footerLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="min-h-[44px] inline-flex items-center px-2.5 py-1 text-xs sm:text-sm text-text-muted hover:text-gold-400 transition-colors touch-manipulation"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons with >= 44x44px Touch Target */}
          <div className="flex gap-3 items-center">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/15 flex items-center justify-center text-text-muted hover:text-gold-400 hover:border-gold-400/40 transition-all touch-manipulation"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}