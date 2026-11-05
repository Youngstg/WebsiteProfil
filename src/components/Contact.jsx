import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            Let's Build Something <span className="gold-gradient-text">Exceptional</span> ✦
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-sans max-w-lg mx-auto">
            Open for Software Engineer &amp; AI Engineering roles, collaborations, and impactful tech initiatives.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Centered Luxury Contact Channels */}
        <div className="gold-glass rounded-2xl sm:rounded-3xl p-3 sm:p-8 md:p-12 relative overflow-hidden border border-gold-600/35 shadow-2xl">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            {/* Email Card */}
            <a
              href={`mailto:${profile.socials.email}`}
              className="p-2.5 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 min-w-0"
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-base sm:text-lg md:text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-2 sm:mb-3 md:mb-4 shadow-gold-glow shrink-0">
                <FiMail />
              </div>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-0.5 sm:mb-1 truncate max-w-full">
                <span className="hidden sm:inline">Direct </span>Email
              </span>
              <span 
                className="text-[10px] sm:text-xs md:text-sm font-bold text-white group-hover:text-gold-300 transition-colors truncate max-w-full block"
                title={profile.socials.email}
              >
                <span className="sm:hidden">Send Mail</span>
                <span className="hidden sm:inline break-all">{profile.socials.email}</span>
              </span>
              <span className="mt-2 sm:mt-3 md:mt-4 text-[9px] sm:text-xs font-semibold text-gold-400 inline-flex items-center gap-0.5 sm:gap-1">
                <span className="hidden sm:inline">Send </span><span>Email</span>
                <FiArrowUpRight className="text-[9px] sm:text-xs" />
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 min-w-0"
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-base sm:text-lg md:text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-2 sm:mb-3 md:mb-4 shadow-gold-glow shrink-0">
                <FiLinkedin />
              </div>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-0.5 sm:mb-1 truncate max-w-full">
                LinkedIn
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white group-hover:text-gold-300 transition-colors truncate max-w-full block">
                <span className="sm:hidden">Lucky</span>
                <span className="hidden sm:inline">Lucky Immanuel</span>
              </span>
              <span className="mt-2 sm:mt-3 md:mt-4 text-[9px] sm:text-xs font-semibold text-gold-400 inline-flex items-center gap-0.5 sm:gap-1">
                <span className="hidden sm:inline">Connect </span><span>Online</span>
                <FiArrowUpRight className="text-[9px] sm:text-xs" />
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 min-w-0"
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-base sm:text-lg md:text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-2 sm:mb-3 md:mb-4 shadow-gold-glow shrink-0">
                <FiGithub />
              </div>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-0.5 sm:mb-1 truncate max-w-full">
                GitHub
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white group-hover:text-gold-300 transition-colors truncate max-w-full block">
                @Youngstg
              </span>
              <span className="mt-2 sm:mt-3 md:mt-4 text-[9px] sm:text-xs font-semibold text-gold-400 inline-flex items-center gap-0.5 sm:gap-1">
                <span className="hidden sm:inline">View </span><span>Profile</span>
                <FiArrowUpRight className="text-[9px] sm:text-xs" />
              </span>
            </a>
          </div>

          {/* Bottom Location Bar */}
          <div className="pt-6 border-t border-gold-600/20 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-slate-400">
              <FiMapPin className="text-gold-400" />
              <span>Sumatera / Lampung, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
