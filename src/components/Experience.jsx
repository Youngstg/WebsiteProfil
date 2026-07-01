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
      className="relative flex gap-6 group"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.15 }}
          className={`w-10 h-10 rounded-full ${config.bg}/20 flex items-center justify-center ${config.color} flex-shrink-0 transition-colors group-hover:${config.bg}/30 z-10`}
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
        className="card-white p-5 md:p-6 mb-6 flex-1 transition-shadow"
      >
        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-text-dark group-hover:text-teal-800 transition-colors">{item.title}</h3>
            <p className="text-sm font-medium text-teal-800">{item.organization}</p>
          </div>
          <span className="text-xs font-mono text-text-dark-muted px-3 py-1 rounded-full bg-teal-900/5 border border-teal-800/10 whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-text-dark-muted text-sm leading-relaxed">{item.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">Experience</h2>
          <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
