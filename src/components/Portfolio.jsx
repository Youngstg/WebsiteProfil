import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiArrowDown,
  FiArrowUp,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
} from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { projects } = portfolioData;
const categories = ['All', ...new Set(projects.map((project) => project.category))];

function ProjectVisual({ project, compact = false }) {
  if (project.image) {
    return <img src={project.image} alt={`Preview ${project.title}`} className="h-full w-full object-cover" />;
  }

  if (project.liveUrl) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-white">
        <iframe
          src={project.liveUrl}
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

  const getRelativePosition = (index) => {
    const count = visibleProjects.length;
    let offset = index - activeIndex;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    return offset;
  };

  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[520px] [perspective:1000px] md:h-[520px]" aria-label="Choose a project">

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
              x: distance * 14,
              y: offset * 76,
              rotateX: offset * -16,
              scale: 1 - distance * 0.075,
              opacity: distance > 3 ? 0 : 1 - distance * 0.14,
            }}
            transition={{ type: 'spring', stiffness: 190, damping: 24 }}
            whileHover={{ x: distance * 14 - 8 }}
            whileTap={{ scale: 0.97 }}
            className={`absolute left-1/2 top-1/2 h-[145px] w-[290px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.75rem] border text-left shadow-2xl sm:w-[360px] md:h-[170px] md:w-[420px] ${
              isActive
                ? 'border-gold-400 ring-4 ring-gold-400/15'
                : 'border-white/15 hover:border-gold-400/60'
            }`}
            style={{ zIndex: visibleProjects.length - distance, transformStyle: 'preserve-3d' }}
            aria-label={`Show details for ${project.title}`}
            aria-pressed={isActive}
          >
            <div className="h-full w-full">
              <ProjectVisual project={project} compact />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-950/40 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-[75%] flex-col justify-center p-5 text-white md:p-6">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300">{project.category}</p>
              <h3 className="text-base font-bold drop-shadow-md md:text-lg">{project.title}</h3>
            </div>
            <span className="absolute right-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/20 bg-teal-950/70 px-2 text-xs font-bold text-white backdrop-blur-sm">
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
    <section id="portfolio" className="relative flex min-h-screen items-center overflow-hidden py-24 md:py-28">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.85, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-x-0 bottom-0 top-[310px] overflow-hidden bg-white [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_100%)] sm:top-[280px] md:top-[290px]"
          aria-hidden="true"
        >
          <ProjectVisual project={activeProject} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 via-teal-900/45 to-teal-800/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/75 via-transparent to-teal-900/80" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-teal-900/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-teal-900/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 lg:px-12 xl:px-16">
        <div className="mb-5 text-center lg:mb-8">
          <p className="mb-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
            <FiLayers /> Selected works
          </p>
          <h2 className="script-heading mb-5 text-5xl text-white md:text-6xl">My Opus</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-md transition-all ${
                  activeTab === category
                    ? 'bg-gold-400 text-teal-950'
                    : 'border border-white/15 bg-teal-950/30 text-text-muted hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid min-h-[650px] items-center lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl py-8"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
                Project {String(activeIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')} · {activeProject.category}
              </p>
              <h3 className="mb-6 text-5xl font-bold leading-[0.95] text-white sm:text-6xl xl:text-7xl">
                {activeProject.title}
              </h3>
              <p className="mb-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                {activeProject.description}
              </p>
              <div className="mb-9 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {activeProject.liveUrl && (
                  <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
                    View live project <FiArrowUpRight />
                  </a>
                )}
                {activeProject.repoUrl && (
                  <a href={activeProject.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                    <FiGithub /> Source code
                  </a>
                )}
                {!activeProject.repoUrl && activeProject.liveUrl && (
                  <span className="inline-flex items-center gap-2 text-xs text-text-muted"><FiExternalLink /> Opens in a new tab</span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div>
            <ProjectDeck projects={filteredProjects} activeProject={activeProject} onSelect={selectProject} />
            <div className="flex items-center justify-center gap-3">
              <button type="button" onClick={() => moveProject(-1)} className="rounded-full border border-white/15 bg-teal-950/60 p-3 text-white backdrop-blur-sm transition-colors hover:border-gold-400 hover:text-gold-400" aria-label="Previous project"><FiArrowUp /></button>
              <span className="text-xs uppercase tracking-widest text-text-muted">Select a project</span>
              <button type="button" onClick={() => moveProject(1)} className="rounded-full border border-white/15 bg-teal-950/60 p-3 text-white backdrop-blur-sm transition-colors hover:border-gold-400 hover:text-gold-400" aria-label="Next project"><FiArrowDown /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
