import { useState, useEffect } from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiPython, SiReact, SiFirebase, SiLaravel, SiCisco } from 'react-icons/si';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

function SparklesIcon(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" {...props}>
      <path d="M7.53 1.282a.5.5 0 0 1 .94 0l.485 1.455a7.5 7.5 0 0 0 4.793 4.793l1.455.485a.5.5 0 0 1 0 .94l-1.455.485a7.5 7.5 0 0 0-4.793 4.793l-.485 1.455a.5.5 0 0 1-.94 0l-.485-1.455a7.5 7.5 0 0 0-4.793-4.793L.505 8.95a.5.5 0 0 1 0-.94l1.455-.485A7.5 7.5 0 0 0 6.753 2.738L7.238 1.282z"/>
    </svg>
  );
}

const typewriterRoles = [
  'Software Developer',
  'Mobile App Engineer',
  'AI & Vision Enthusiast',
  'ITERA Fresh Graduate',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    let timeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        }, 300);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 overflow-hidden">
      {/* Ambient Golden Backlight Glows */}
      <div 
        className="absolute top-1/4 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/3 left-10 w-72 sm:w-80 h-72 sm:h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Side-by-Side Lockup on Mobile: Greeting & Titles (Left) + Refined Luxury Portrait (Right) */}
            <div className="flex items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1 space-y-3">
                {/* Top Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-600/10 border border-gold-600/30 text-gold-300 text-[11px] sm:text-xs font-semibold tracking-wider">
                  <SparklesIcon className="text-gold-400 text-xs" />
                  <span>LUCKY IMMANUEL SITANGGANG</span>
                </div>

                {/* Headline & Typewriter */}
                <div className="space-y-1.5">
                  <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                    Hi, I'm <span className="gold-gradient-text">LUCKY</span> ✦
                  </h1>
                  <div className="text-base sm:text-xl lg:text-2xl font-medium text-slate-300 flex items-center gap-2 flex-wrap">
                    <span>I'm a</span>
                    <span className="text-gold-300 font-semibold underline decoration-gold-500/50 underline-offset-4">
                      {displayText || 'Software Developer'}
                    </span>
                    <span className="cursor-blink text-gold-400 font-bold text-xl sm:text-2xl">|</span>
                  </div>
                </div>
              </div>

              {/* Mobile Luxury Arched Portrait Card (Visible on Mobile / Compact screens - Exactly as Stitch Mobile screen) */}
              <div className="lg:hidden relative flex-shrink-0 group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-gold-500/30 via-amber-500/20 to-transparent rounded-3xl blur-lg pointer-events-none group-hover:scale-105 transition-transform duration-500" />
                <div className="relative w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden border border-amber-500/40 shadow-gold-glow bg-obsidian-900/90 p-1 flex flex-col justify-end">
                  <img
                    src="/images/Fotosaya.jpg"
                    alt="Lucky Immanuel Sitanggang"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Online Indicator Badge */}
                  <div className="absolute top-2 left-2 bg-obsidian-900/90 backdrop-blur-md border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-md z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[9px] font-semibold text-emerald-300 tracking-wide">ITERA</span>
                  </div>

                  {/* Floating Gold Mini Badge */}
                  <div className="absolute bottom-2 inset-x-2 bg-obsidian-900/85 backdrop-blur-md border border-gold-600/30 rounded-lg py-1 px-1.5 text-center z-10 shadow-lg">
                    <span className="block text-[10px] font-bold text-gold-300 font-mono leading-none">AI &amp; Dev</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-sans">
              Fresh graduate from <strong className="text-slate-200 font-semibold">Institut Teknologi Sumatera (ITERA)</strong> with a passion for Artificial Intelligence &amp; Full-Stack Mobile/Web Development. Dedicated to crafting inclusive, accessible, and high-impact technology solutions.
            </p>

            {/* Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* CV Download Button */}
              <a
                href="mailto:immanuelsgt@gmail.com?subject=Lucky%20CV%20Request"
                className="gold-gradient-btn inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-obsidian-950 font-bold text-xs sm:text-sm tracking-wide shadow-gold-glow min-h-[44px]"
              >
                <FiDownload className="text-sm sm:text-base" />
                <span>Download CV</span>
              </a>

              {/* Social Media Pill Group */}
              <div className="flex items-center gap-1.5 p-1 bg-obsidian-850 rounded-full border border-gold-600/25">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-gold-300 hover:bg-gold-500/10 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-gold-300 hover:bg-gold-500/10 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href={`mailto:${profile.socials.email}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-gold-300 hover:bg-gold-500/10 transition-colors"
                  aria-label="Direct Email"
                >
                  <FiMail size={18} />
                </a>
              </div>
            </div>

            {/* Key Metric Micro-Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-slate-800/80 max-w-lg">
              <div className="bg-obsidian-900/60 p-3 rounded-xl border border-gold-600/15 text-center sm:text-left">
                <span className="block text-xl sm:text-3xl font-extrabold text-gold-300 font-heading">3.77</span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">ITERA GPA</span>
              </div>
              <div className="bg-obsidian-900/60 p-3 rounded-xl border border-gold-600/15 text-center sm:text-left">
                <span className="block text-xl sm:text-3xl font-extrabold text-gold-300 font-heading">8+</span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">Key Projects</span>
              </div>
              <div className="bg-obsidian-900/60 p-3 rounded-xl border border-gold-600/15 text-center sm:text-left">
                <span className="block text-xl sm:text-3xl font-extrabold text-gold-300 font-heading">15+</span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">Tech Skills</span>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Hero Portrait Showcase (Full Image Box) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center w-full">
            <div className="relative w-full max-w-sm">
              {/* Golden Ambient Halo */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-gold-500/25 via-amber-600/20 to-transparent rounded-3xl blur-2xl transform rotate-2 pointer-events-none" 
                aria-hidden="true"
              />

              {/* Card Container - Full Picture Showcase */}
              <div className="relative rounded-3xl gold-glass p-2.5 sm:p-3 overflow-hidden border border-gold-600/35 shadow-2xl shadow-gold-950/50 group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-obsidian-950 border border-gold-600/20">
                  <img
                    src="/images/Fotosaya.jpg"
                    alt="Lucky Immanuel Sitanggang"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Luxury Gradient Sheen */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-obsidian-950/40 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-20 transition-opacity duration-500" 
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Ribbon Strip */}
      <div
        className="mt-12 sm:mt-14 w-full relative overflow-hidden backdrop-blur-md border-y border-gold-500/30 shadow-2xl"
        style={{
          background:
            'linear-gradient(90deg, rgba(9, 11, 16, 0.98) 0%, rgba(35, 27, 10, 0.92) 20%, rgba(212, 175, 55, 0.22) 50%, rgba(35, 27, 10, 0.92) 80%, rgba(9, 11, 16, 0.98) 100%)',
          boxShadow:
            'rgba(212, 175, 55, 0.25) 0px 0px 35px -5px, rgba(254, 240, 138, 0.15) 0px 1px 0px inset, rgba(254, 240, 138, 0.1) 0px -1px 0px inset',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3.5 sm:py-4">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto w-full px-2 py-1 justify-start sm:justify-around text-slate-300 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default">
              <SiPython className="text-gold-400 text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                Python &amp; OpenCV
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent flex-shrink-0" />

            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default">
              <SiReact className="text-cyan-400 text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                React Native
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent flex-shrink-0" />

            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default">
              <SiFirebase className="text-amber-500 text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                Firebase &amp; PostGIS
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent flex-shrink-0" />

            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default">
              <SiLaravel className="text-red-500 text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                Laravel &amp; Next.js
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent flex-shrink-0" />

            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default">
              <SiCisco className="text-gold-400 text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                Cisco CCNA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
