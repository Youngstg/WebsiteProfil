import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiBriefcase } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { experience } = portfolioData;

const typeConfig = {
  education: { icon: FiBookOpen, color: 'text-blue-400', bg: 'bg-blue-400' },
  organization: { icon: FiUsers, color: 'text-purple-400', bg: 'bg-purple-400' },
  work: { icon: FiBriefcase, color: 'text-gold-400', bg: 'bg-gold-400' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 15 }
  }
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

function TimelineItem({ item, index }) {
  const config = typeConfig[item.type] || typeConfig.work;
  const Icon = config.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="relative flex gap-3 sm:gap-6 group"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.15 }}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${config.bg}/20 flex items-center justify-center ${config.color} shrink-0 transition-colors group-hover:${config.bg}/30 z-10`}
        >
          <Icon size={18} />
        </motion.div>
        {index < experience.length - 1 && (
          <motion.div 
            variants={lineVariants}
            style={{ transformOrigin: "top" }}
            className="w-[2px] flex-1 bg-gradient-to-b from-gold-400/50 to-transparent mt-2" 
          />
        )}
      </div>

      {/* Card */}
      <motion.div 
        whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" }}
        className="card-white p-4 sm:p-5 md:p-6 mb-5 sm:mb-6 flex-1 min-w-0 transition-shadow"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-text-dark group-hover:text-teal-800 transition-colors break-words">{item.title}</h3>
            <p className="text-xs sm:text-sm font-medium text-teal-800 break-words">{item.organization}</p>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-text-dark-muted px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-teal-900/5 border border-teal-800/10 self-start sm:self-auto shrink-0 whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-text-dark-muted text-xs sm:text-sm leading-relaxed">{item.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="script-heading text-[clamp(2rem,5vw,3.75rem)] text-gold-400 mb-2 sm:mb-3">Experience</h2>
          <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto w-full"
        >
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}