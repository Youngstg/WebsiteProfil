import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Macropad3D from './Macropad3D';
import { MACROPAD_KEYS } from '../data/macropadKeys';

export default function SkillTool() {
  const [activeSkill, setActiveSkill] = useState(MACROPAD_KEYS[0]);

  return (
    <section id="skills" className="relative bg-teal-900 pt-8 sm:pt-10 pb-8 sm:pb-10 overflow-hidden">
      {/* Decorative ambient background rings matching original theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute w-[min(700px,95vw)] h-[min(700px,95vw)] border-[20px] sm:border-[30px] border-teal-800/15 rounded-full top-[10%] -left-[150px] sm:-left-[200px]" />
        <div className="absolute w-[min(600px,90vw)] h-[min(600px,90vw)] border-[18px] sm:border-[25px] border-teal-800/15 rounded-full bottom-[5%] -right-[120px] sm:-right-[150px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-5 sm:mb-6 md:mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="script-heading text-[clamp(2.25rem,5vw,4rem)] text-[#FFCC80] mb-2 sm:mb-2.5 leading-tight"
          >
            Skill Tool
          </motion.h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gold-400/50 mx-auto" />
        </div>

        {/* 3D Macropad Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full">
          {/* Left Column: Big Bold Typography & Skill Bio */}
          <div className="lg:col-span-6 xl:col-span-6 py-2 sm:py-3 flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.id}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Category Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span 
                    className="px-3 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase border shadow-sm"
                    style={{
                      backgroundColor: `${activeSkill.color}25`,
                      color: activeSkill.color,
                      borderColor: `${activeSkill.color}50`
                    }}
                  >
                    {activeSkill.category}
                  </span>
                </div>

                {/* Big Bold Headline */}
                <h3 className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-black text-white uppercase tracking-tight font-heading leading-tight drop-shadow-md break-words">
                  {activeSkill.name}
                </h3>

                {/* Dev Tagline */}
                <p 
                  className="text-[clamp(1rem,2vw,1.5rem)] font-bold italic leading-snug drop-shadow break-words"
                  style={{ color: activeSkill.color }}
                >
                  "{activeSkill.tagline}"
                </p>

                {/* Detailed Description */}
                <p className="text-teal-100/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
                  {activeSkill.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: 3D Mechanical Macropad */}
          <div className="lg:col-span-6 xl:col-span-6 w-full min-w-0 flex flex-col items-center justify-center">
            <div className="w-full min-w-0 relative flex items-center justify-center">
              <Macropad3D onSelectSkill={setActiveSkill} activeSkill={activeSkill} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}