import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython, SiJavascript, SiReact, SiHtml5, SiTailwindcss, SiNodedotjs,
  SiTensorflow, SiPytorch, SiPandas, SiScikitlearn,
  SiGit, SiLinux, SiDocker, SiCplusplus, SiOpenjdk
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import portfolioData from '../data/portfolio.json';

const iconMap = {
  SiPython, SiJavascript, SiReact, SiHtml5, SiTailwindcss, SiNodedotjs,
  SiTensorflow, SiPytorch, SiPandas, SiScikitlearn,
  SiGit, SiLinux, SiDocker, SiCplusplus, SiOpenjdk,
  SiVisualstudiocode: VscVscode
};

const iconColors = {
  SiPython: '#3776AB',
  SiJavascript: '#F7DF1E',
  SiReact: '#61DAFB',
  SiHtml5: '#E34F26',
  SiTailwindcss: '#06B6D4',
  SiNodedotjs: '#339933',
  SiTensorflow: '#FF6F00',
  SiPytorch: '#EE4C2C',
  SiPandas: '#150458',
  SiScikitlearn: '#F7931E',
  SiGit: '#F05032',
  SiLinux: '#FCC624',
  SiDocker: '#2496ED',
  SiVisualstudiocode: '#007ACC',
  SiCplusplus: '#00599C',
  SiOpenjdk: '#ED8B00',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Flatten all skills for display
  const allSkills = portfolioData.skills.flatMap(cat => cat.items);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">Skill Tool</h2>
          <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
        </motion.div>

        {/* White Card with Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-white p-8 md:p-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
            {allSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon];
              const color = iconColors[skill.icon] || '#666';

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  {/* Icon container */}
                  <div className="relative mb-4">
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        background: `${color}15`,
                        border: `1.5px solid ${color}30`,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="text-2xl md:text-3xl transition-transform duration-300"
                          style={{ color }}
                        />
                      )}
                    </div>
                    {/* Decorative platform line */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-[2px] rounded-full bg-teal-800/10" />
                  </div>

                  {/* Label */}
                  <span className="text-sm font-medium text-text-dark group-hover:text-teal-800 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs text-text-dark-muted mt-0.5">{skill.level}%</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
