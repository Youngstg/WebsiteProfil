import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { projects } = portfolioData;

// Group projects by category
const groupedProjects = projects.reduce((acc, project) => {
  if (!acc[project.category]) acc[project.category] = [];
  acc[project.category].push(project);
  return acc;
}, {});

const categories = Object.keys(groupedProjects);

/* ─── Thumbnail card (rounded rectangle, slightly tilted on hover) ─── */
function ProjectThumb({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex justify-center"
    >
      <div className="relative w-full max-w-sm aspect-video rounded-[2rem] overflow-hidden bg-white shadow-[0px_0px_20px_rgba(255,204,128,0.4)] transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105 cursor-pointer">
        {project.embedPreview && project.liveUrl ? (
          <div className="w-full h-full relative overflow-hidden pointer-events-none bg-white">
            <iframe
              src={project.liveUrl}
              className="absolute top-0 left-0 w-[400%] h-[400%] border-0 origin-top-left scale-[0.25]"
              title={project.title}
              scrolling="no"
            />
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-700/80 to-teal-800/60">
            <span className="text-3xl md:text-4xl font-bold text-gold-400 script-heading select-none">
              {project.title.split(' ').map(w => w[0]).join('')}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full bg-gold-400 text-teal-950 flex items-center justify-center hover:bg-gold-500 transition-colors"
              aria-label="Live demo">
              <FiExternalLink size={16} />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Source code">
              <FiGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Category section with white card ─── */
function CategorySection({ category, categoryProjects, index, onViewMore }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="relative pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden"
    >
      <div className="relative z-10 w-[110vw] -ml-2 md:ml-8">
        {/* White card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-l-[3rem] md:rounded-l-[5rem] p-6 md:p-10 pt-16 md:pt-20 relative shadow-xl -rotate-2 md:-rotate-3 origin-left"
        >
          {/* Script heading — overlapping the white card, text-stroke effect */}
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="script-heading text-5xl md:text-7xl text-white absolute -top-12 md:-top-16 left-8 md:left-16 z-20 tracking-wider"
            style={{
              textShadow: '-2px -2px 0 #0D2634, 2px -2px 0 #0D2634, -2px 2px 0 #0D2634, 2px 2px 0 #0D2634, 0px 4px 10px rgba(0,0,0,0.3)'
            }}
          >
            {category}
          </motion.h3>

          {/* Container for content to restrict width inside the overflowing card */}
          <div className="max-w-[100vw] md:max-w-7xl pr-[10vw]">
            {/* 3 project thumbnails inside white card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10">
              {categoryProjects.slice(0, 3).map((project, i) => (
                <ProjectThumb key={project.id} project={project} index={i} />
              ))}
            </div>

            {/* Lihat Selengkapnya button inside white card */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => onViewMore(category)}
                className="bg-[#FFCC80] text-teal-950 font-bold px-8 py-3 rounded-full hover:bg-[#FFB74D] transition-colors shadow-sm"
              >
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Detail view (selengkapnya) — white card with back, title, full projects ─── */
function DetailView({ category, categoryProjects, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      className="section-container py-8"
    >
      {/* White Card */}
      <div className="card-white p-6 md:p-10 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-2 border-teal-700/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border-2 border-teal-700/5 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <button
            onClick={onBack}
            className="px-4 py-1.5 rounded-full bg-gold-400 text-teal-950 text-sm font-semibold hover:bg-gold-500 transition-colors flex items-center gap-1.5"
          >
            <FiArrowLeft size={14} />
            Back
          </button>
          <h3 className="text-2xl md:text-3xl font-bold text-text-dark">{category}</h3>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {categoryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Large thumbnail */}
              <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-cream-200 border border-teal-800/10">
                {project.embedPreview && project.liveUrl ? (
                  <div className="w-full h-full relative overflow-hidden pointer-events-none bg-white">
                    <iframe
                      src={project.liveUrl}
                      className="absolute top-0 left-0 w-[400%] h-[400%] border-0 origin-top-left scale-[0.25]"
                      title={project.title}
                      scrolling="no"
                    />
                  </div>
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-700/20 to-teal-800/10">
                    <span className="text-4xl font-bold text-teal-700/40 script-heading select-none">
                      {project.title.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-text-dark mb-3">{project.title}</h4>

              {/* Description */}
              <p className="text-text-dark-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Action links */}
              <div className="flex justify-center gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold text-gold-500 hover:text-gold-600 transition-colors flex items-center gap-1">
                    <FiExternalLink size={12} /> Live
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors flex items-center gap-1">
                    <FiGithub size={12} /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Portfolio component ─── */
export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="portfolio" className="relative py-16 md:py-24">
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">My Opus</h2>
        <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedCategory ? (
          <DetailView
            key={`detail-${selectedCategory}`}
            category={selectedCategory}
            categoryProjects={groupedProjects[selectedCategory] || []}
            onBack={() => setSelectedCategory(null)}
          />
        ) : (
          <motion.div
            key="categories-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {categories.map((cat, idx) => (
              <CategorySection
                key={cat}
                category={cat}
                categoryProjects={groupedProjects[cat]}
                index={idx}
                onViewMore={setSelectedCategory}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
