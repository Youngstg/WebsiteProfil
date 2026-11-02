import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiArrowDown,
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiLayers,
  FiBookOpen,
  FiDownload,
  FiMaximize2,
} from 'react-icons/fi';
import { SiGooglecolab, SiJupyter } from 'react-icons/si';
import portfolioData from '../data/portfolio.json';
import ProjectModal from './ProjectModal';

const { projects } = portfolioData;
const categories = ['All', ...new Set(projects.map((project) => project.category))];

function ProjectVisual({ project, compact = false }) {
  if (project.image) {
    return (
      <img 
        src={project.image} 
        alt={`Preview ${project.title}`} 
        loading="lazy" 
        className="h-full w-full object-cover" 
      />
    );
  }

  const previewUrl = project.notebookUrl || project.liveUrl;
  if (previewUrl) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-white">
        <iframe
          src={previewUrl}
          title={`Preview ${project.title}`}
          tabIndex="-1"
          loading="lazy"
          className={compact
            ? 'pointer-events-none absolute left-0 top-0 h-[312%] w-[312%] origin-top-left scale-[0.32] border-0'
            : 'pointer-events-none h-full w-full border-0 bg-white'}
        />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-cream-100 text-teal-950">
      <span className={`${compact ? 'text-3xl' : 'text-7xl'} script-heading`}>
        {project.title.split(' ').slice(0, 2).map((word) => word[0]).join('')}
      </span>
    </div>
  );
}

function ProjectDeck({ projects: visibleProjects, activeProject, onSelect }) {
  const activeIndex = visibleProjects.findIndex((project) => project.id === activeProject.id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getRelativePosition = (index) => {
    const count = visibleProjects.length;
    let offset = index - activeIndex;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    return offset;
  };

  return (
    <div className="relative mx-auto h-[360px] sm:h-[420px] md:h-[480px] lg:h-[530px] xl:h-[590px] 2xl:h-[640px] w-full max-w-[500px] xl:max-w-[560px] 2xl:max-w-[620px] [perspective:1000px] my-4 overflow-visible" aria-label="Choose a project">
      {visibleProjects.map((project, index) => {
        const offset = getRelativePosition(index);
        const distance = Math.abs(offset);
        const isActive = offset === 0;

        return (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => onSelect(project)}
            initial={false}
            animate={{
              x: isMobile ? distance * 4 : distance * 8,
              y: offset * (isMobile ? 66 : 74),
              rotateX: offset * -14,
              scale: 1 - distance * 0.07,
              opacity: distance > 3 ? 0 : 1 - distance * 0.15,
            }}
            transition={{ type: 'spring', stiffness: 190, damping: 24 }}
            whileHover={{ x: (isMobile ? distance * 4 : distance * 8) - 4 }}
            whileTap={{ scale: 0.97 }}
            className={`absolute left-1/2 top-1/2 h-[125px] sm:h-[145px] md:h-[165px] lg:h-[185px] xl:h-[200px] 2xl:h-[215px] w-[min(270px,calc(100vw-3.5rem))] sm:w-[350px] md:w-[390px] lg:w-[440px] xl:w-[480px] 2xl:w-[520px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] border text-left shadow-2xl transition-all touch-manipulation ${
              isActive
                ? 'border-gold-400 ring-4 ring-gold-400/20'
                : 'border-white/15 hover:border-gold-400/60'
            } ${distance > 2 ? 'pointer-events-none' : ''}`}
            tabIndex={isActive ? 0 : -1}
            style={{ zIndex: visibleProjects.length - distance, transformStyle: 'preserve-3d' }}
            aria-label={`Show details for ${project.title}`}
            aria-pressed={isActive}
          >
            <div className="h-full w-full">
              <ProjectVisual project={project} compact />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-950/45 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-[78%] flex-col justify-center p-4 sm:p-5 text-white">
              <p className="mb-1 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300">
                {project.isNotebook && <SiJupyter className="text-amber-400" />}
                {project.category}
              </p>
              <h3 className="text-sm sm:text-base md:text-lg font-bold drop-shadow-md line-clamp-2">{project.title}</h3>
            </div>
            <span className="absolute right-2.5 top-2.5 sm:right-3 sm:top-3 flex h-7 sm:h-8 min-w-7 sm:min-w-8 items-center justify-center rounded-full border border-white/20 bg-teal-950/70 px-1.5 sm:px-2 text-[10px] sm:text-xs font-bold text-white backdrop-blur-sm">
              {String(index + 1).padStart(2, '0')}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((project) => project.category === activeTab);
  const activeProject = filteredProjects.find((project) => project.id === activeProjectId) || filteredProjects[0];
  const activeIndex = filteredProjects.findIndex((project) => project.id === activeProject.id);

  const selectProject = (project) => setActiveProjectId(project.id);

  const moveProject = (direction) => {
    const nextIndex = (activeIndex + direction + filteredProjects.length) % filteredProjects.length;
    setActiveProjectId(filteredProjects[nextIndex].id);
  };

  const changeCategory = (category) => {
    const categoryProjects = category === 'All'
      ? projects
      : projects.filter((project) => project.category === category);
    setActiveTab(category);
    setActiveProjectId(categoryProjects[0].id);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') moveProject(-1);
      if (event.key === 'ArrowDown') moveProject(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section id="portfolio" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden py-14 sm:py-18 lg:py-24">
      {/* Background Visual Showcase with Subtle Ambient Blend */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.45, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)]"
          aria-hidden="true"
        >
          <ProjectVisual project={activeProject} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-950/75 to-teal-950/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-teal-900/90 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-teal-900 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-teal-900 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full section-container my-auto">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 md:mb-12 text-center">
          <p className="mb-1.5 flex items-center justify-center gap-2 text-xs lg:text-sm font-bold uppercase tracking-[0.28em] text-gold-400">
            <FiLayers /> Selected works
          </p>
          <h2 className="script-heading mb-3 sm:mb-4 text-[clamp(2.5rem,5.5vw,4.5rem)] text-white">My Opus</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 min-h-[44px] inline-flex items-center justify-center text-xs sm:text-sm lg:text-base font-semibold backdrop-blur-md transition-all touch-manipulation ${
                  activeTab === category
                    ? 'bg-gold-400 text-teal-950 shadow-md shadow-gold-400/20'
                    : 'border border-white/15 bg-teal-950/40 text-text-muted hover:text-white hover:border-gold-400/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Active Project Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-6 xl:col-span-6 py-2 sm:py-4 flex flex-col justify-center"
            >
              <p className="mb-2 sm:mb-3 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                <span>Project {String(activeIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')} · {activeProject.category}</span>
                {activeProject.isNotebook && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] tracking-normal font-semibold">
                    <SiJupyter size={12} /> Jupyter Notebook
                  </span>
                )}
              </p>
              <h3 className="mb-3 sm:mb-4 text-[clamp(2rem,4.5vw,4.25rem)] font-bold leading-tight text-white tracking-tight break-words">
                {activeProject.title}
              </h3>
              <p className="mb-5 sm:mb-6 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/80">
                {activeProject.description}
              </p>
              <div className="mb-6 sm:mb-8 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-gold-300 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {activeProject.isNotebook || activeProject.notebookUrl ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setModalProject(activeProject)}
                      className="btn-gold min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm shadow-lg shadow-gold-400/20 touch-manipulation cursor-pointer"
                    >
                      <FiBookOpen size={16} /> Baca Notebook Interaktif
                    </button>
                    {activeProject.colabUrl && (
                      <a
                        href={activeProject.colabUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm touch-manipulation hover:border-amber-400 hover:text-amber-300"
                        title="Jalankan di Google Colab"
                      >
                        <SiGooglecolab size={16} className="text-amber-400" /> Run in Colab
                      </a>
                    )}
                    {activeProject.repoUrl && (
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm touch-manipulation"
                      >
                        <FiGithub size={16} /> Source Code
                      </a>
                    )}
                    {activeProject.ipynbUrl && (
                      <a
                        href={activeProject.ipynbUrl}
                        download
                        className="btn-outline min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm touch-manipulation text-text-muted hover:text-gold-300"
                        title="Download file .ipynb"
                      >
                        <FiDownload size={15} /> .ipynb
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    {activeProject.liveUrl && (
                      <button
                        type="button"
                        onClick={() => setModalProject(activeProject)}
                        className="btn-gold min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm shadow-lg shadow-gold-400/20 touch-manipulation cursor-pointer"
                      >
                        Preview di Web <FiMaximize2 size={15} />
                      </button>
                    )}
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm touch-manipulation"
                      >
                        Kunjungi Web <FiArrowUpRight size={16} />
                      </a>
                    )}
                    {activeProject.repoUrl && (
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm touch-manipulation"
                      >
                        <FiGithub size={16} /> Source Code
                      </a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 3D Project Deck & Navigation */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center w-full min-w-0">
            <ProjectDeck projects={filteredProjects} activeProject={activeProject} onSelect={selectProject} />
            <div className="flex items-center justify-center gap-3 mt-4">
              <button 
                type="button" 
                onClick={() => moveProject(-1)} 
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-white/15 bg-teal-950/60 text-white backdrop-blur-sm transition-all hover:border-gold-400 hover:text-gold-400 active:scale-95 touch-manipulation" 
                aria-label="Previous project"
              >
                <FiArrowUp size={18} />
              </button>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-text-muted select-none">Select a project</span>
              <button 
                type="button" 
                onClick={() => moveProject(1)} 
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-white/15 bg-teal-950/60 text-white backdrop-blur-sm transition-all hover:border-gold-400 hover:text-gold-400 active:scale-95 touch-manipulation" 
                aria-label="Next project"
              >
                <FiArrowDown size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Project & Notebook Viewer Modal */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
}