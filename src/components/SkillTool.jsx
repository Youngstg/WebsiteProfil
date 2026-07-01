import { motion } from 'framer-motion';
import { SiPython, SiReact, SiCplusplus, SiLaravel, SiCisco } from 'react-icons/si';

const mainSkills = [
  { name: 'Python', icon: SiPython, color: 'text-blue-500', desc: 'Programming Language' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400', desc: 'Frontend Framework' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-700', desc: 'Programming Language' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-500', desc: 'Backend Framework' },
  { name: 'Cisco', icon: SiCisco, color: 'text-sky-500', desc: 'Networking' },
];

export default function SkillTool() {
  return (
    <section className="relative bg-teal-900 pt-16">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">
          Skill Tool
        </h2>
        <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
      </div>

      {/* White Card */}
      <div className="w-full flex justify-center px-4 md:px-0">
        <div className="bg-white rounded-[3rem] md:rounded-[4rem] min-h-[350px] flex items-center justify-center w-fit px-8 md:px-20 py-12 md:py-16 shadow-xl mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {mainSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Container with dark bg and colorful icon */}
                <div className="w-28 h-28 md:w-32 md:h-32 bg-[#120B2E] rounded-[2rem] flex items-center justify-center mb-6 relative"
                     style={{ boxShadow: '0 10px 20px -5px rgba(0,0,0,0.3)' }}>
                  <skill.icon className={`text-6xl md:text-7xl ${skill.color}`} />
                  <div className="absolute -bottom-2 w-24 h-2 bg-transparent rounded-[50%] shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
                </div>
                <h4 className="font-bold text-teal-950 text-xl md:text-2xl">{skill.name}</h4>
                <p className="text-base md:text-lg text-text-dark-muted mt-2 font-semibold max-w-[150px]">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
