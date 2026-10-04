import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Macropad3D from './Macropad3D';
import { MACROPAD_KEYS } from '../data/macropadKeys';


export default function SkillTool() {
  const [activeSkill, setActiveSkill] = useState(MACROPAD_KEYS[0]);

  return (
    <section id="skills" className="relative bg-teal-900 pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
      {/* Decorative ambient background rings matching original theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[700px] h-[700px] border-[30px] border-teal-800/15 rounded-full top-[10%] -left-[200px]" />
        <div className="absolute w-[600px] h-[600px] border-[25px] border-teal-800/15 rounded-full bottom-[5%] -right-[150px]" />
      </div>

      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="script-heading text-5xl md:text-6xl text-[#FFCC80] mb-3"
          >
            Skill Tool
          </motion.h2>
          <div className="w-20 h-0.5 bg-gold-400/50 mx-auto" />
        </div>

        {/* TikTok-Inspired 3D Macropad Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 w-full">
          {/* Left Column: Big Bold Typography & Skill Bio (matching TikTok video style) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {/* Category Badge */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span 
                    className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border shadow-sm"
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
                <h3 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white uppercase tracking-tight font-heading leading-none drop-shadow-md">
                  {activeSkill.name}
                </h3>

                {/* Witty Dev Tagline (like in video) */}
                <p 
                  className="text-xl sm:text-2xl font-bold italic leading-snug drop-shadow"
                  style={{ color: activeSkill.color }}
                >
                  "{activeSkill.tagline}"
                </p>

                {/* Detailed Description */}
                <p className="text-teal-100/90 text-base md:text-lg leading-relaxed font-sans">
                  {activeSkill.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Authentic 3D Mechanical Macropad with Expanded Movement Canvas */}
          <div className="lg:col-span-7 xl:col-span-8 w-full min-w-0 flex flex-col items-center justify-center">
            <div className="w-full min-w-0 relative flex items-center justify-center">
              <Macropad3D onSelectSkill={setActiveSkill} activeSkill={activeSkill} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
