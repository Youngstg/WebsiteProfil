import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Opus', href: '#portfolio' },
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
    <footer className="relative border-t border-white/10">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-2xl font-bold text-gold-400 script-heading"
          >
            Lucky
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-5">
            {footerLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-text-muted hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-text-muted hover:text-gold-400 hover:border-gold-400/40 transition-all"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
