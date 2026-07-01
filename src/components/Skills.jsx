import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function Skills() {
  // Flatten all skills for display
  const allSkills = portfolioData.skills.flatMap(cat => cat.items);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">Skill Tool</h2>
          <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
        </motion.div>

        {/* White Card with Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="card-white p-8 md:p-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
            {allSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon];
              const color = iconColors[skill.icon] || '#666';

              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  {/* Icon container */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5, boxShadow: `0px 10px 20px ${color}30` }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-colors duration-300"
                      style={{
                        background: `${color}15`,
                        border: `1.5px solid ${color}30`,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="text-2xl md:text-3xl"
                          style={{ color }}
                        />
                      )}
                    </motion.div>
                    {/* Decorative platform line */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-[2px] rounded-full bg-teal-800/10 transition-all duration-300 group-hover:w-14 group-hover:bg-teal-800/30" />
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
