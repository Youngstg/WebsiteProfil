import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiArrowUpRight, FiClock } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { lang, data } = useLanguage();
  const { contact, profile } = data;

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            {contact.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            {contact.heading} <span className="gold-gradient-text">{contact.subheading}</span> ✦
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-sans max-w-lg mx-auto">
            {contact.intro}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Centered Luxury Contact Channels */}
        <div className="gold-glass rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 relative overflow-hidden border border-gold-600/35 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            {/* Email Card */}
            <a
              href={`mailto:${profile.socials.email}`}
              className="p-4 sm:p-5 md:p-6 rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 min-w-0"
              aria-label="Send direct email"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-lg sm:text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-3 shadow-gold-glow shrink-0">
                <FiMail />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                {lang === 'id' ? 'Email Langsung' : 'Direct Email'}
              </span>
              <span 
                className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300 transition-colors truncate max-w-full block"
                title={profile.socials.email}
              >
                {profile.socials.email}
              </span>
              <span className="mt-3 text-xs font-semibold text-gold-400 inline-flex items-center gap-1">
                <span>{lang === 'id' ? 'Kirim Pesan' : 'Send Message'}</span>
                <FiArrowUpRight className="text-xs" />
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 md:p-6 rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 min-w-0"
              aria-label="LinkedIn profile"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-lg sm:text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-3 shadow-gold-glow shrink-0">
                <FiLinkedin />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                LinkedIn
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300 transition-colors truncate max-w-full block">
                Lucky Immanuel
              </span>
              <span className="mt-3 text-xs font-semibold text-gold-400 inline-flex items-center gap-1">
                <span>{lang === 'id' ? 'Hubungkan' : 'Connect'}</span>
                <FiArrowUpRight className="text-xs" />
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 md:p-6 rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 min-w-0"
              aria-label="GitHub profile"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-lg sm:text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-3 shadow-gold-glow shrink-0">
                <FiGithub />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                GitHub
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300 transition-colors truncate max-w-full block">
                @Youngstg
              </span>
              <span className="mt-3 text-xs font-semibold text-gold-400 inline-flex items-center gap-1">
                <span>{lang === 'id' ? 'Lihat Profil' : 'View Profile'}</span>
                <FiArrowUpRight className="text-xs" />
              </span>
            </a>
          </div>

          {/* Location & Response Note */}
          <div className="pt-6 border-t border-gold-600/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-slate-400">
              <FiMapPin className="text-gold-400" />
              <span>{profile.socials.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gold-300/90 font-mono">
              <FiClock className="text-gold-400" />
              <span>{contact.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
