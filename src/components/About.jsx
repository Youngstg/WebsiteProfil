import { FiCompass, FiTarget, FiUserCheck } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

function LightbulbIcon(props) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" {...props}>
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"/>
    </svg>
  );
}

export default function About() {
  const { lang, data } = useLanguage();
  const { about, profile } = data;

  return (
    <section id="about" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            {about.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            {about.heading} <span className="gold-gradient-text">{about.subheading}</span> ✦
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* 3 Column / Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Experience & Background Summary */}
          <div className="md:col-span-4 gold-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-5 text-xl shadow-gold-glow">
                <FiUserCheck className="text-2xl" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2.5">
                {lang === 'id' ? 'Latar Belakang & Rekayasa' : 'Engineering Mindset'}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans">
                {about.intro}
              </p>
              <div className="pt-2 border-t border-gold-600/15 text-xs text-slate-400 space-y-2">
                <p>
                  <strong className="text-gold-300 font-semibold">
                    {lang === 'id' ? 'Yang saya bangun: ' : "What I've built: "}
                  </strong>
                  {about.built}
                </p>
                <p>
                  <strong className="text-gold-300 font-semibold">
                    {lang === 'id' ? 'Cara saya bekerja: ' : 'How I work: '}
                  </strong>
                  {about.howIWork}
                </p>
              </div>
            </div>

            {/* Stats Matrix: 3.77 GPA, 9 Projects, 6 Roles */}
            <div className="grid grid-cols-3 gap-2.5 pt-5 mt-4 border-t border-gold-600/20">
              <div className="bg-obsidian-900/80 p-2.5 sm:p-3 rounded-2xl border border-gold-600/15 text-center">
                <div className="text-xl sm:text-2xl font-bold text-gold-300 font-heading">3.77</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">
                  {lang === 'id' ? 'IPK' : 'GPA'}
                </div>
              </div>
              <div className="bg-obsidian-900/80 p-2.5 sm:p-3 rounded-2xl border border-gold-600/15 text-center">
                <div className="text-xl sm:text-2xl font-bold text-gold-300 font-heading">9</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">
                  {lang === 'id' ? 'Proyek' : 'Projects'}
                </div>
              </div>
              <div className="bg-obsidian-900/80 p-2.5 sm:p-3 rounded-2xl border border-gold-600/15 text-center">
                <div className="text-xl sm:text-2xl font-bold text-gold-300 font-heading">6</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">
                  {lang === 'id' ? 'Peran' : 'Roles'}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Center Feature (Luxury Gold Emblem Concept) */}
          <div className="md:col-span-4 gold-glass rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-gold-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Golden Geometric Icon Feature */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gold-600 via-amber-400 to-yellow-200 p-[2px] mb-5 shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-obsidian-900 rounded-full flex items-center justify-center text-3xl text-gold-300">
                <FiCompass />
              </div>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Human-Centered AI &amp; Tech
            </h3>
            <p className="text-xs text-gold-400 font-mono mb-4">
              {profile.university}
            </p>
            <p className="text-slate-200 text-sm leading-relaxed max-w-xs font-sans italic">
              "{about.quote}"
            </p>
            <div className="mt-5 pt-4 border-t border-gold-600/20 text-xs text-slate-400 max-w-xs">
              <strong className="text-gold-300 block mb-1">
                {lang === 'id' ? 'Yang saya cari:' : "What I'm looking for:"}
              </strong>
              <span>{about.lookingFor}</span>
            </div>
          </div>

          {/* Card 3: Philosophy & Mission (Cards from A2 / B2) */}
          <div className="md:col-span-4 space-y-5 flex flex-col justify-between">
            {/* Card: How I build */}
            <div className="gold-glass rounded-3xl p-6 border border-gold-600/25 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-2.5 text-gold-300">
                <LightbulbIcon className="text-lg text-gold-400" />
                <h4 className="font-heading font-bold text-base text-white">
                  {about.cards[0].title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {about.cards[0].description}
              </p>
            </div>

            {/* Card: What drives me */}
            <div className="gold-glass rounded-3xl p-6 border border-gold-600/25 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-2.5 text-gold-400">
                <FiTarget className="text-lg text-gold-400" />
                <h4 className="font-heading font-bold text-base text-white">
                  {about.cards[1].title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {about.cards[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
