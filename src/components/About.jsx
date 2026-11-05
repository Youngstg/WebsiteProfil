import { FiCompass, FiTarget, FiUserCheck } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

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
  return (
    <section id="about" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            GET TO KNOW ME
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            About <span className="gold-gradient-text">Lucky</span> ✦
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* 3 Column / Split Layout matching Stitch */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Experience & Background Summary */}
          <div className="md:col-span-4 gold-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-5 text-xl shadow-gold-glow">
                <FiUserCheck className="text-2xl" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2.5">
                Engineering Mindset
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                Specialized in Informatics Engineering at ITERA with consistent academic excellence (3.77 GPA). Experienced across full-stack mobile applications, AI computer vision architectures, and network systems engineering.
              </p>
            </div>

            {/* Stats Mini Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gold-600/20">
              <div className="bg-obsidian-900/80 p-3.5 rounded-2xl border border-gold-600/15">
                <div className="text-2xl font-bold text-gold-300 font-heading">3.77</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wide">Grad GPA</div>
              </div>
              <div className="bg-obsidian-900/80 p-3.5 rounded-2xl border border-gold-600/15">
                <div className="text-2xl font-bold text-gold-300 font-heading">4+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wide">Roles Held</div>
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
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs font-sans italic">
              "Building technology is not merely about writing lines of code; it is about bridging capability gaps and creating inclusive tools that empower every individual."
            </p>
          </div>

          {/* Card 3: Philosophy & Mission */}
          <div className="md:col-span-4 space-y-5 flex flex-col justify-between">
            {/* Philosophy Card */}
            <div className="gold-glass rounded-3xl p-6 border border-gold-600/25 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-2.5 text-gold-300">
                <LightbulbIcon className="text-lg text-gold-400" />
                <h4 className="font-heading font-bold text-base text-white">
                  My Philosophy
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Combining rigorous theoretical computer science with agile development paradigms to build intuitive, fault-tolerant, and performant user applications.
              </p>
            </div>

            {/* Mission Card */}
            <div className="gold-glass rounded-3xl p-6 border border-gold-600/25 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-2.5 text-gold-400">
                <FiTarget className="text-lg text-gold-400" />
                <h4 className="font-heading font-bold text-base text-white">
                  The Mission
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Empowering communities through inclusive assistive systems, intelligent automation, and rock-solid software infrastructure that addresses tangible real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
