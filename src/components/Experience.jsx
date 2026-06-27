import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen, FiUsers, FiBriefcase } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { experience } = portfolioData;

const typeConfig = {
  education: { icon: FiBookOpen, color: 'text-blue-400', bg: 'bg-blue-400' },
  organization: { icon: FiUsers, color: 'text-purple-400', bg: 'bg-purple-400' },
  work: { icon: FiBriefcase, color: 'text-gold-400', bg: 'bg-gold-400' },
};

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const config = typeConfig[item.type] || typeConfig.work;
  const Icon = config.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full ${config.bg}/20 flex items-center justify-center ${config.color} flex-shrink-0`}>
          <Icon size={18} />
        </div>
        {index < experience.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-gold-400/30 to-transparent mt-2" />
        )}
      </div>

      {/* Card */}
      <div className="card-white p-5 md:p-6 mb-6 flex-1">
        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
            <p className="text-sm font-medium text-teal-800">{item.organization}</p>
          </div>
          <span className="text-xs font-mono text-text-dark-muted px-3 py-1 rounded-full bg-teal-900/5 border border-teal-800/10 whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-text-dark-muted text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">Experience</h2>
          <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
