import { useState } from 'react';
import { 
  FiArrowUpRight, 
  FiLayers, 
  FiMapPin, 
  FiGlobe,
  FiCamera,
  FiMessageSquare,
  FiHeart,
  FiMaximize2
} from 'react-icons/fi';
import { SiPython, SiJupyter } from 'react-icons/si';
import portfolioData from '../data/portfolio.json';
import ProjectModal from './ProjectModal';

function SparklesIcon(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" {...props}>
      <path d="M7.53 1.282a.5.5 0 0 1 .94 0l.485 1.455a7.5 7.5 0 0 0 4.793 4.793l1.455.485a.5.5 0 0 1 0 .94l-1.455.485a7.5 7.5 0 0 0-4.793 4.793l-.485 1.455a.5.5 0 0 1-.94 0l-.485-1.455a7.5 7.5 0 0 0-4.793-4.793L.505 8.95a.5.5 0 0 1 0-.94l1.455-.485A7.5 7.5 0 0 0 6.753 2.738L7.238 1.282z"/>
    </svg>
  );
}

const { projects } = portfolioData;

const filterCategories = ['All', 'AI & Vision', 'Mobile & Web'];

// Helper icons for projects
const projectIcons = {
  'SIBI Recognition': FiCpuIcon,
  'KosMatch': FiMapPin,
  'KM ITERA Website': FiGlobe,
  'CuteSnaps': FiCamera,
  'DIGO Chatbot': FiMessageSquare,
  'CareCircle': FiHeart,
  'AllAround': FiLayers,
  'Unfolia': SiPython,
  'EDA - Breast Cancer Classification': SiJupyter,
};

function FiCpuIcon(props) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  // Filter projects by category
  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'AI & Vision') {
      return project.category === 'AI/ML' || project.tags.some(t => ['Deep Learning', 'Computer Vision', 'VideoMAE', 'Machine Learning', 'AI Assistant'].includes(t));
    }
    if (activeTab === 'Mobile & Web') {
      return project.category === 'Web/Mobile' || project.tags.some(t => ['Web Development', 'Next.js', 'WebRTC', 'Healthcare', 'Multi-tool', 'Web App'].includes(t));
    }
    return true;
  });

  // Find flagship projects: KM ITERA (Largest div), SIBI Recognition, and KosMatch
  const kmIteraProject = projects.find(p => p.title.toLowerCase().includes('km itera')) || projects[0];
  const sibiProject = projects.find(p => p.title.toLowerCase().includes('sibi')) || projects[1];

  // Grid projects excluding the two top showcase flagships
  const gridProjects = filteredProjects.filter(p => p.id !== kmIteraProject?.id && p.id !== sibiProject?.id);

  const handleOpenProject = (project) => {
    setModalProject(project);
  };

  return (
    <section id="projects" className="py-14 sm:py-20 relative overflow-hidden">
      {/* Anchor for backwards compatibility */}
      <div id="portfolio" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
              PORTFOLIO WORK
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
              Featured <span className="gold-gradient-text">Projects</span> ✦
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-sans max-w-xl">
              Flagship AI research, full-stack spatial engineering, and interactive web/mobile applications.
            </p>
          </div>

          {/* Project Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0" data-purpose="project-filter">
            {filterCategories.map((tab) => {
              const isActive = activeTab === tab;
              const count = tab === 'All' ? projects.length : tab === 'AI & Vision' ? 3 : 6;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all min-h-[38px] flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'bg-gold-600 text-obsidian-950 font-bold shadow-gold-glow'
                      : 'bg-obsidian-800 text-slate-300 hover:text-gold-300 border border-gold-600/20'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/20 text-black' : 'bg-obsidian-900 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Top Row: Flagship Showcase with Previews */}
        {(activeTab === 'All' || activeTab === 'Mobile & Web') && kmIteraProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Flagship Bento Card: KM ITERA Website (lg:col-span-8 - Paling Besar) */}
            <div className="lg:col-span-8 gold-glass rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group border border-gold-600/35 hover:border-gold-400/60 transition-all duration-300">
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-mono text-gold-300 font-semibold">
                      Flagship • Campus Portal
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-mono text-gold-400 flex items-center gap-1">
                      <SparklesIcon className="text-[11px]" />
                      <span>Live Production Website</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenProject(kmIteraProject)}
                      className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors shadow-md"
                      title="Quick Preview"
                    >
                      <FiMaximize2 size={13} />
                    </button>
                    {kmIteraProject.liveUrl && (
                      <a
                        href={kmIteraProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors shadow-md"
                        title="Buka Website KM ITERA"
                      >
                        <FiArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Screenshot Preview Image for KM ITERA */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mb-6 border border-gold-600/30 bg-obsidian-950 group/img shadow-2xl">
                  <img
                    src={kmIteraProject.image}
                    alt={kmIteraProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-gold-300">
                    <span className="flex items-center gap-1.5 bg-obsidian-900/90 px-3 py-1 rounded-full border border-gold-600/30 backdrop-blur-md">
                      <SparklesIcon className="text-gold-400" />
                      <span>www.km-itera.com</span>
                    </span>
                    <span className="hidden sm:inline bg-obsidian-900/90 px-3 py-1 rounded-full border border-gold-600/30 text-[11px] text-slate-300">
                      Institut Teknologi Sumatera
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-amber-600/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-2xl shadow-gold-glow flex-shrink-0">
                    <FiGlobe />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {kmIteraProject.title}
                    </h3>
                    <p className="text-xs text-gold-400/90 font-mono mt-0.5">
                      Campus Digital Transformation &amp; Governance Portal
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  Official website and institutional digital ecosystem for KM ITERA. Built with modern architecture, optimized responsiveness, centralized governance, archival workflows, and event broadcast channels serving the academic community.
                </p>

                {/* Metrics Badges in KM ITERA */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="bg-obsidian-900/80 border border-gold-600/20 rounded-2xl p-3.5">
                    <div className="text-xl sm:text-2xl font-bold font-heading text-gold-300">10,000+</div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wide">Campus Community</div>
                  </div>
                  <div className="bg-obsidian-900/80 border border-gold-600/20 rounded-2xl p-3.5">
                    <div className="text-xl sm:text-2xl font-bold font-heading text-gold-300">99.9%</div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wide">Uptime Reliability</div>
                  </div>
                  <div className="bg-obsidian-900/80 border border-gold-600/20 rounded-2xl p-3.5 col-span-2 sm:col-span-1">
                    <div className="text-xl sm:text-2xl font-bold font-heading text-gold-300">Laravel</div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wide">Core Framework</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {kmIteraProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs bg-obsidian-900 border border-slate-700 text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gold-400/80 font-mono flex items-center gap-1.5">
                  <FiGlobe /> Production Ecosystem
                </span>
              </div>
            </div>

            {/* Secondary Bento Card: SIBI Recognition (lg:col-span-4) */}
            {sibiProject && (
              <div className="lg:col-span-4 gold-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between group border border-gold-600/30 hover:border-gold-400/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-mono text-gold-300 font-medium">
                      AI &amp; Computer Vision
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleOpenProject(sibiProject)}
                        className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors shadow-md"
                        title="Preview SIBI"
                      >
                        <FiMaximize2 size={13} />
                      </button>
                      {sibiProject.liveUrl && (
                        <a
                          href={sibiProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors shadow-md"
                          title="Buka Hugging Face Space"
                        >
                          <FiArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Screenshot Preview Image for SIBI */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-gold-600/30 bg-obsidian-950 group/img shadow-md">
                    <img
                      src={sibiProject.image}
                      alt={sibiProject.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl shadow-gold-glow flex-shrink-0">
                      <FiCpuIcon />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                        {sibiProject.title}
                      </h3>
                      <p className="text-xs text-gold-400 font-mono">VideoMAE Transformer Research</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    Deep learning architecture recognizing 26 dynamic SIBI gestures with high accuracy and low latency.
                  </p>

                  <div className="p-3 bg-obsidian-900/80 rounded-2xl border border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Accuracy</span>
                      <span className="text-gold-300 font-mono font-bold">98.4%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Classes</span>
                      <span className="text-gold-300 font-mono font-bold">26 Gestures</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 mt-4">
                  {sibiProject.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] bg-obsidian-900 border border-slate-700 text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bento Showcase: Grid Cards with Live Screenshot Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gridProjects.map((project) => {
            const Icon = projectIcons[project.title] || FiGlobe;
            const isNotebook = Boolean(project.isNotebook || project.notebookUrl);

            return (
              <div
                key={project.id}
                className="gold-glass rounded-2xl p-5 sm:p-6 flex flex-col justify-between group border border-gold-600/20 hover:border-gold-400/45 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/20 border border-amber-500/40 text-gold-300">
                      {isNotebook ? 'Jupyter ML' : project.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleOpenProject(project)}
                        className="w-7 h-7 rounded-full bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors"
                        title="Lihat Detail / Preview"
                      >
                        <FiMaximize2 size={11} />
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors"
                          title="Buka Website"
                        >
                          <FiArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Screenshot Preview Banner for EVERY project card */}
                  {project.image && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gold-600/25 bg-obsidian-950 group/img">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-400 text-base shadow-sm shrink-0">
                      <Icon />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-800/80 flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] bg-obsidian-900 border border-slate-700/80 text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal Preview */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
}
