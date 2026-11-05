import { useState, useEffect } from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiPython, SiReact, SiFirebase, SiLaravel, SiCisco, SiNextdotjs } from 'react-icons/si';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

const typewriterRoles = [
  'Software Developer',
  'Mobile App Engineer',
  'AI & Vision Enthusiast',
  'ITERA Fresh Graduate',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(typewriterRoles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    let timeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 32);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        }, 380);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 65);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative pt-3 sm:pt-5 lg:pt-6 pb-0 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left pb-4 lg:pb-8">
            {/* Top Side-by-Side Lockup on Mobile: Greeting & Titles (Left) + Refined Luxury Portrait (Right) */}
            <div className="flex items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1 space-y-3">
                {/* Headline & Typewriter */}
                <div className="space-y-1.5">
                  <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                    Hi, I'm <span className="gold-gradient-text">LUCKY</span> ✦
                  </h1>
                  <div className="text-base sm:text-xl lg:text-2xl font-medium text-slate-300 min-h-[1.75em] flex items-center flex-wrap">
                    <span className="mr-2">I'm a</span>
                    <span className="inline-flex items-center">
                      <span className="text-gold-300 font-semibold underline decoration-gold-500/50 underline-offset-4 tracking-normal">
                        {displayText}
                      </span>
                      <span className="cursor-blink text-gold-400 font-bold text-xl sm:text-2xl select-none ml-0.5" aria-hidden="true">|</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Luxury Arched Portrait Card (Visible on Mobile / Compact screens - Exactly as Stitch Mobile screen) */}
              <div className="lg:hidden relative flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-gold-500/30 via-amber-500/20 to-transparent rounded-3xl blur-lg pointer-events-none" />
                <div className="relative w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden border border-amber-500/40 shadow-gold-glow bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 p-1 flex flex-col justify-end">
                  <img
                    src="/images/image.webp"
                    alt="Lucky Immanuel Sitanggang"
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/40 via-transparent to-transparent pointer-events-none" />
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
                href="/images/certificates/CV_Lucky_Immanuel_Sitanggang.pdf"
                download="CV_Lucky_Immanuel_Sitanggang.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-5 sm:pt-6 max-w-lg">
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

          {/* Right Column: Desktop Hero Portrait Showcase (Touching Gradient Line) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end items-end w-full relative self-end">
            <div className="relative w-full max-w-sm xl:max-w-md flex justify-center items-end">
              {/* Golden Ambient Halo */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-gold-500/25 via-amber-600/15 to-transparent rounded-full blur-3xl pointer-events-none" 
                aria-hidden="true"
              />

              {/* Character Image raised by 2px above bottom gradient line */}
              <div className="relative z-10 w-full flex justify-center items-end">
                <img
                  src="/images/image.webp"
                  alt="Lucky Immanuel Sitanggang"
                  className="w-auto h-auto max-h-[460px] xl:max-h-[520px] object-contain object-bottom mb-[2px] drop-shadow-[0_15px_35px_rgba(212,175,55,0.22)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Ribbon Strip */}
      <div
        className="mt-4 sm:mt-6 lg:mt-0 w-full relative overflow-hidden backdrop-blur-md border-y border-gold-500/30 shadow-2xl"
        style={{
          background:
            'linear-gradient(90deg, #06070a 0%, #090B10 25%, #18140a 50%, rgba(184, 144, 32, 0.45) 75%, #d4af37 100%)',
          boxShadow: '0 0 35px rgba(212, 175, 55, 0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-around sm:justify-around w-full px-1 sm:px-2 py-1 text-slate-300 text-xs sm:text-sm font-medium overflow-hidden sm:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div 
              className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default"
              title="Python & OpenCV"
            >
              <SiPython className="text-gold-400 text-xl sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                Python &amp; OpenCV
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent flex-shrink-0" />

            <div 
              className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default"
              title="React Native"
            >
              <SiReact className="text-cyan-400 text-xl sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                React Native
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent flex-shrink-0" />

            <div 
              className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default"
              title="Firebase & PostGIS"
            >
              <SiFirebase className="text-amber-500 text-xl sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                Firebase &amp; PostGIS
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent flex-shrink-0" />

            <div 
              className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default"
              title="Laravel & Next.js"
            >
              <div className="flex items-center gap-1 sm:gap-1.5">
                <SiLaravel className="text-red-500 text-xl sm:text-xl group-hover:scale-110 transition-transform" />
                <SiNextdotjs className="text-white text-xl sm:text-xl group-hover:scale-110 transition-transform" />
              </div>
              <span className="hidden sm:inline font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                Laravel &amp; Next.js
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent flex-shrink-0" />

            <div 
              className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 hover:text-gold-300 transition-colors group cursor-default"
              title="Cisco CCNA"
            >
              <SiCisco className="text-gold-400 text-xl sm:text-xl group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium tracking-wide text-slate-200 group-hover:text-gold-300">
                Cisco CCNA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
