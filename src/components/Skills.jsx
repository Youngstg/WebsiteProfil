import { useState } from 'react';
import { FiCode, FiSmartphone, FiCpu, FiServer, FiTerminal, FiLayers, FiArrowUpRight } from 'react-icons/fi';
import Macropad3D from './Macropad3D';
import { MACROPAD_KEYS } from '../data/macropadKeys';
import { useLanguage } from '../context/LanguageContext';

const categoryIcons = {
  Languages: FiCode,
  'Bahasa pemrograman': FiCode,
  'Mobile & Web': FiSmartphone,
  'AI & Vision': FiCpu,
  Infrastructure: FiServer,
  Infrastruktur: FiServer
};

const projectTargetMap = {
  // SIBI
  'sibi': 'project-sibi-recognition',
  'pengenalan sibi': 'project-sibi-recognition',
  'sibi recognition': 'project-sibi-recognition',

  // CuteSnaps
  'cutesnaps': 'project-cutesnaps',

  // KosMatch
  'kosmatch': 'project-kosmatch',

  // CareCircle
  'carecircle': 'project-carecircle',

  // KM ITERA
  'km itera': 'project-km-itera',

  // AAC Karla Bionic
  'aplikasi aac': 'project-aac-karla-bionic',
  'aac app': 'project-aac-karla-bionic',
  'karla bionic': 'project-aac-karla-bionic',

  // DIGO
  'digo': 'project-digo',

  // AllAround
  'allaround': 'project-allaround',

  // Unfolia
  'unfolia': 'project-unfolia',

  // Breast Cancer EDA
  'eda breast cancer': 'project-eda-breast-cancer',
  'breast cancer': 'project-eda-breast-cancer',

  // Labs & Infrastructure
  'lab pks': 'experience-pks',
  'pks': 'experience-pks',
  'lab jaringan': 'experience-jarkom',
  'network lab': 'experience-jarkom',

  // Tencent Cloud VPS
  'tencent cloud vps': 'project-carecircle',
  'vps tencent cloud': 'project-carecircle',
  'vps': 'project-carecircle',
};

export default function Skills() {
  const { lang, data } = useLanguage();
  const { skills } = data;
  const [activeSkill, setActiveSkill] = useState(MACROPAD_KEYS[0]);
  const [showMacropad, setShowMacropad] = useState(false);

  const handleProjectBadgeClick = (projectName) => {
    const raw = projectName.toLowerCase().trim();
    let targetId = projectTargetMap[raw];

    if (!targetId) {
      if (raw.includes('sibi')) targetId = 'project-sibi-recognition';
      else if (raw.includes('aac')) targetId = 'project-aac-karla-bionic';
      else if (raw.includes('kosmatch')) targetId = 'project-kosmatch';
      else if (raw.includes('carecircle')) targetId = 'project-carecircle';
      else if (raw.includes('cutesnaps')) targetId = 'project-cutesnaps';
      else if (raw.includes('km itera')) targetId = 'project-km-itera';
      else if (raw.includes('digo')) targetId = 'project-digo';
      else if (raw.includes('allaround')) targetId = 'project-allaround';
      else if (raw.includes('unfolia')) targetId = 'project-unfolia';
      else if (raw.includes('cancer') || raw.includes('eda')) targetId = 'project-eda-breast-cancer';
      else if (raw.includes('jarkom') || raw.includes('jaringan') || raw.includes('network')) targetId = 'experience-jarkom';
      else if (raw.includes('pks')) targetId = 'experience-pks';
      else if (raw.includes('vps') || raw.includes('tencent')) targetId = 'project-carecircle';
      else targetId = 'projects';
    }

    const element = document.getElementById(targetId) || document.getElementById('projects');
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      element.classList.remove('highlight-pulse');
      void element.offsetWidth;
      element.classList.add('highlight-pulse');

      setTimeout(() => {
        element.classList.remove('highlight-pulse');
      }, 2700);
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            {skills.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            {skills.heading} <span className="gold-gradient-text">{skills.subheading}</span> ✦
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto font-sans">
            {skills.intro}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Competencies Table with "Used in / Dipakai di" Column (No percentage bars) */}
        <div className="gold-glass rounded-3xl p-4 sm:p-6 lg:p-8 border border-gold-600/25 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto [scrollbar-width:thin]">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-gold-600/30 text-gold-400 text-xs font-heading font-bold uppercase tracking-wider">
                  <th scope="col" className="py-3.5 px-4 sm:px-6 w-[22%]">
                    {skills.headers.area}
                  </th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 w-[43%]">
                    {skills.headers.skills}
                  </th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 w-[35%]">
                    {skills.headers.usedIn}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold-600/15 text-xs sm:text-sm">
                {skills.categories.map((category) => {
                  const Icon = categoryIcons[category.area] || FiLayers;
                  const usedInItems = category.usedIn.split(',').map((s) => s.trim());

                  return (
                    <tr 
                      key={category.area}
                      className="hover:bg-gold-500/5 transition-colors group"
                    >
                      {/* Discipline / Area */}
                      <td className="py-4 px-4 sm:px-6 align-top">
                        <div className="flex items-center gap-2.5 font-heading font-bold text-white group-hover:text-gold-300 transition-colors">
                          <span className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-sm shrink-0 shadow-sm">
                            <Icon />
                          </span>
                          <span>{category.area}</span>
                        </div>
                      </td>

                      {/* Technologies & Tools */}
                      <td className="py-4 px-4 sm:px-6 align-top text-slate-300 font-sans leading-relaxed">
                        {category.skills}
                      </td>

                      {/* Used in / Dipakai di */}
                      <td className="py-4 px-4 sm:px-6 align-top">
                        <div className="flex flex-wrap gap-1.5">
                          {usedInItems.map((projectItem) => (
                            <button
                              key={projectItem}
                              type="button"
                              onClick={() => handleProjectBadgeClick(projectItem)}
                              title={lang === 'id' ? `Klik untuk melihat ${projectItem}` : `Click to jump to ${projectItem}`}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium bg-obsidian-900/90 text-gold-300 border border-gold-600/30 hover:border-gold-400 hover:bg-gold-500/15 hover:text-white shadow-sm transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group/pill text-left"
                            >
                              <span>{projectItem}</span>
                              <FiArrowUpRight className="text-[10px] text-gold-400/60 group-hover/pill:text-gold-300 transition-colors shrink-0" />
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive 3D Macropad Showcase */}
        {showMacropad && (
          <div className="mt-14 sm:mt-16 flex flex-col items-center">
            {/* Active Skill Pill above 3D Macropad */}
            <div className="mb-4 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-900/90 border border-gold-600/30 shadow-gold-glow">
              <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: activeSkill.color }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: activeSkill.color }}
                />
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">{activeSkill.name}</span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs font-mono" style={{ color: activeSkill.color }}>"{activeSkill.tagline}"</span>
            </div>

            {/* 3D Canvas */}
            <div className="w-full max-w-xl aspect-square sm:aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              <Macropad3D onSelectSkill={setActiveSkill} activeSkill={activeSkill} />
            </div>

            {/* Button Below */}
            <div className="mt-6 flex justify-center w-full relative z-30">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMacropad(false);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-obsidian-850 hover:bg-obsidian-800 border border-gold-600/30 hover:border-gold-500/50 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95 relative z-30"
              >
                <FiTerminal className="text-gold-400" />
                <span>{lang === 'id' ? 'Tutup 3D Macropad' : 'Close 3D Macropad'}</span>
              </button>
            </div>
          </div>
        )}

        {!showMacropad && (
          <div className="mt-10 text-center flex justify-center w-full relative z-30">
            <button
              type="button"
              onClick={() => setShowMacropad(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-obsidian-850 hover:bg-obsidian-800 border border-gold-600/30 hover:border-gold-500/50 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95 relative z-30"
            >
              <FiTerminal className="text-gold-400" />
              <span>
                {lang === 'id' 
                  ? 'Buka Interactive 3D Mechanical Macropad' 
                  : 'Open Interactive 3D Mechanical Macropad'}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
