import { FiArrowUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { data } = useLanguage();
  const { profile, footer } = data;

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-gold-600/20 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="font-heading font-bold text-gold-300 tracking-wider">
            {profile.name.toUpperCase()}
          </span>
          <span>•</span>
          <span>{footer.copyright}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#hero"
            onClick={scrollToTop}
            className="hover:text-gold-300 transition-colors flex items-center gap-1 min-h-[44px]"
          >
            <FiArrowUp className="text-xs" />
            <span>{footer.backToTop}</span>
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-300 transition-colors min-h-[44px] inline-flex items-center"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-300 transition-colors min-h-[44px] inline-flex items-center"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
