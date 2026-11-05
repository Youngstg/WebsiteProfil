import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCpu, FiServer, FiTerminal } from 'react-icons/fi';
import Macropad3D from './Macropad3D';
import { MACROPAD_KEYS } from '../data/macropadKeys';

const skillCategories = [
  {
    title: 'Core Languages',
    icon: FiCode,
    items: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: 'C / C++', level: 75 },
      { name: 'PHP', level: 70 },
    ],
  },
  {
    title: 'Mobile & Web',
    icon: FiSmartphone,
    items: [
      { name: 'React Native (Expo)', level: 85 },
      { name: 'React.js / Next.js', level: 80 },
      { name: 'Firebase & Firestore', level: 75 },
      { name: 'Laravel Framework', level: 70 },
    ],
  },
  {
    title: 'AI & Vision',
    icon: FiCpu,
    items: [
      { name: 'OpenCV', level: 80 },
      { name: 'VideoMAE / Transformers', level: 75 },
      { name: 'Google Gemini API', level: 80 },
      { name: 'Image Processing Pipelines', level: 75 },
    ],
  },
  {
    title: 'Infrastructure',
    icon: FiServer,
    items: [
      { name: 'Cisco Packet Tracer / CCNA', level: 80 },
      { name: 'VLAN / Routing / DHCP', level: 80 },
      { name: 'Linux (Ubuntu) & Postfix', level: 75 },
      { name: 'Git & GitHub Actions', level: 85 },
    ],
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(MACROPAD_KEYS[0]);
  const [showMacropad, setShowMacropad] = useState(false);

  return (
    <section id="skills" className="py-14 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Stitch */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            TECHNICAL COMPETENCIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            My <span className="gold-gradient-text">Skills</span> ✦
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-md mx-auto font-sans">
            Categorized proficiency across mobile development, computer vision, web engineering, and networking.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* 4 Categorized Proficiency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="gold-glass rounded-2xl p-6 space-y-5"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-gold-600/20">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-base shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs font-semibold mb-1.5 text-slate-300">
                        <span>{skill.name}</span>
                        <span className="text-gold-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-obsidian-900 rounded-full overflow-hidden border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-amber-300 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive 3D Macropad Toggle / Showcase */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => setShowMacropad(!showMacropad)}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-obsidian-850 hover:bg-obsidian-800 border border-gold-600/30 hover:border-gold-500/50 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md"
          >
            <FiTerminal className="text-gold-400" />
            <span>{showMacropad ? 'Tutup 3D Macropad' : 'Buka Interactive 3D Mechanical Macropad'}</span>
          </button>

          {showMacropad && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 gold-glass rounded-3xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Active Skill Info */}
                <div className="lg:col-span-5 text-left space-y-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border"
                    style={{
                      backgroundColor: `${activeSkill.color}20`,
                      color: activeSkill.color,
                      borderColor: `${activeSkill.color}50`,
                    }}
                  >
                    {activeSkill.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-heading">
                    {activeSkill.name}
                  </h3>
                  <p
                    className="text-base sm:text-lg font-bold italic"
                    style={{ color: activeSkill.color }}
                  >
                    "{activeSkill.tagline}"
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {activeSkill.description}
                  </p>
                  <p className="text-[11px] text-gold-400/80 font-mono">
                    ✦ Klik tombol fisik pada macropad untuk mendengar bunyi mechanical switch
                  </p>
                </div>

                {/* Right: 3D Canvas */}
                <div className="lg:col-span-7 flex justify-center w-full">
                  <div className="w-full max-w-lg aspect-square sm:aspect-[4/3] flex items-center justify-center">
                    <Macropad3D onSelectSkill={setActiveSkill} activeSkill={activeSkill} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
