import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { projects } = portfolioData;

const categories = ['All', ...new Set(projects.map(p => p.category))];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 15 }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -5 }}
      className="card-white flex flex-col h-full overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-teal-900/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : project.embedPreview && project.liveUrl ? (
          <div className="w-full h-full relative overflow-hidden pointer-events-none bg-white transition-transform duration-500 group-hover:scale-105">
            <iframe
              src={project.liveUrl}
              className="absolute top-0 left-0 w-[333%] h-[333%] border-0 origin-top-left scale-[0.3]"
              title={project.title}
              scrolling="no"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-700/80 to-teal-800/60 transition-transform duration-500 group-hover:scale-105">
            <span className="text-4xl md:text-5xl font-bold text-gold-400/80 script-heading select-none tracking-widest">
              {project.title.substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-teal-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
          <div className="flex gap-4">
            {project.liveUrl && (
              <motion.a 
                href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gold-400 text-teal-950 flex items-center justify-center hover:bg-gold-500 transition-colors shadow-lg"
                aria-label="Live demo"
              >
                <FiExternalLink size={20} />
              </motion.a>
            )}
            {project.repoUrl && (
              <motion.a 
                href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white text-teal-950 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Source code"
              >
                <FiGithub size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-xl font-bold text-text-dark group-hover:text-teal-800 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-400/20 text-gold-600 whitespace-nowrap">
            {project.category}
          </span>
        </div>
        <p className="text-text-dark-muted text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium text-teal-800 bg-teal-800/10 px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="w-full mx-auto px-6 lg:px-12 xl:px-16 2xl:px-24 max-w-[1750px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">My Opus</h2>
          <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category 
                  ? 'bg-gold-400 text-teal-950 shadow-md' 
                  : 'bg-teal-900/50 text-text-muted hover:bg-teal-800/60 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
