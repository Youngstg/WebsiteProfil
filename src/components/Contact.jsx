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
        <div className="gold-glass rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-gold-600/35 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Email Card */}
            <a
              href={`mailto:${profile.socials.email}`}
              className="p-6 rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-4 shadow-gold-glow">
                <FiMail />
              </div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                Direct Email
              </span>
              <span className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors break-all">
                {profile.socials.email}
              </span>
              <span className="mt-4 text-xs font-semibold text-gold-400 inline-flex items-center gap-1">
                <span>Send Email</span>
                <FiArrowUpRight />
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-4 shadow-gold-glow">
                <FiLinkedin />
              </div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                LinkedIn Profile
              </span>
              <span className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                Lucky Immanuel
              </span>
              <span className="mt-4 text-xs font-semibold text-gold-400 inline-flex items-center gap-1">
                <span>Connect Online</span>
                <FiArrowUpRight />
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-obsidian-900/90 border border-gold-600/25 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl group-hover:bg-gold-500 group-hover:text-black transition-colors mb-4 shadow-gold-glow">
                <FiGithub />
              </div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                GitHub Repository
              </span>
              <span className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                @Youngstg
              </span>
              <span className="mt-4 text-xs font-semibold text-gold-400 inline-flex items-center gap-1">
                <span>View Repositories</span>
                <FiArrowUpRight />
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
