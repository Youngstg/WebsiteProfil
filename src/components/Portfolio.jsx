import { useState } from 'react';
import { 
  FiArrowUpRight, 
  FiLayers, 
  FiMapPin, 
  FiGlobe,
  FiCamera,
  FiMessageSquare,
  FiHeart,
  FiMaximize2,
  FiGithub,
  FiCpu,
  FiSmartphone
} from 'react-icons/fi';
import { SiPython, SiJupyter, SiReact } from 'react-icons/si';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

function SparklesIcon(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" {...props}>
      <path d="M7.53 1.282a.5.5 0 0 1 .94 0l.485 1.455a7.5 7.5 0 0 0 4.793 4.793l1.455.485a.5.5 0 0 1 0 .94l-1.455.485a7.5 7.5 0 0 0-4.793 4.793l-.485 1.455a.5.5 0 0 1-.94 0l-.485-1.455a7.5 7.5 0 0 0-4.793-4.793L.505 8.95a.5.5 0 0 1 0-.94l1.455-.485A7.5 7.5 0 0 0 6.753 2.738L7.238 1.282z"/>
    </svg>
  );
}

const projectIcons = {
  'aac-karla-bionic': FiSmartphone,
  'sibi-recognition': FiCpu,
  'km-itera': FiGlobe,
  'kosmatch': FiMapPin,
  'carecircle': FiHeart,
  'cutesnaps': FiCamera,
  'DIGO': FiMessageSquare,
  'AllAround': FiLayers,
  'Unfolia': SiPython,
  'Breast Cancer Classification (EDA)': SiJupyter,
  'Klasifikasi Kanker Payudara (EDA)': SiJupyter
};

export default function Portfolio() {
  const { lang, data } = useLanguage();
  const { projects } = data;
  const [modalProject, setModalProject] = useState(null);

  const aacProject = projects.featured.find(p => p.id === 'aac-karla-bionic') || projects.featured[0];
  const sibiProject = projects.featured.find(p => p.id === 'sibi-recognition') || projects.featured[1];
  const otherFeatured = projects.featured.filter(p => p.id !== aacProject?.id && p.id !== sibiProject?.id);

  const handleOpenProject = (project) => {
    setModalProject(project);
  };

  return (
    <section id="projects" className="py-14 sm:py-20 relative overflow-hidden">
      <div id="portfolio" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
              {projects.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
              {projects.heading} <span className="gold-gradient-text">{projects.subheading}</span> ✦
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-sans max-w-xl">
              {projects.intro}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-obsidian-900 border border-gold-600/30 text-gold-300">
              {lang === 'id' ? '6 Proyek Unggulan' : '6 Featured Projects'}
            </span>
          </div>
        </div>

        {/* Row 1: The Two Flagship Projects (AAC Karla Bionic & SIBI Recognition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Flagship #1: AAC App for Children with Cerebral Palsy (Karla Bionic) */}
          {aacProject && (
            <div className="lg:col-span-7 bg-obsidian-950/90 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group border border-gold-600/35 hover:border-gold-400/60 shadow-2xl transition-all duration-300">
              {/* Screenshot preview background */}
              {aacProject.image && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-3xl">
                  <img
                    src={aacProject.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/85 to-obsidian-950/40" />
                </div>
              )}

              <div className="absolute -right-12 -top-12 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-mono text-gold-300 font-semibold backdrop-blur-md flex items-center gap-1.5">
                        <SparklesIcon className="text-[11px]" />
                        <span>{aacProject.flag}</span>
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-mono text-gold-400 backdrop-blur-md">
                        Karla Bionic
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {aacProject.repoUrl && (
                        <a
                          href={aacProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-obsidian-900/90 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors shadow-md backdrop-blur-md"
                          title="GitHub Repository"
                        >
                          <FiGithub size={15} />
                        </a>
                      )}
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-obsidian-900/90 text-slate-300 border border-slate-700">
                        {aacProject.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-500/20 to-amber-600/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-2xl shadow-gold-glow flex-shrink-0 backdrop-blur-md">
                      <SiReact />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-gold-300 transition-colors drop-shadow-md">
                        {aacProject.title}
                      </h3>
                      <p className="text-xs text-gold-400/90 font-mono mt-0.5">
                        Assistive Tech • Cerebral Palsy Level 3
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans drop-shadow-sm">
                    {aacProject.description}
                  </p>

                  {/* Impact & Challenge Blocks */}
                  <div className="space-y-2.5 mb-6 text-xs font-sans">
                    <div className="p-3 rounded-xl bg-obsidian-900/90 border border-gold-600/20 backdrop-blur-md">
                      <span className="text-gold-300 font-bold block mb-1">
                        {lang === 'id' ? '✦ Dampak Nyata:' : '✦ Real-World Impact:'}
                      </span>
                      <p className="text-slate-300 leading-relaxed">{aacProject.impact}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-obsidian-900/90 border border-slate-800 backdrop-blur-md">
                      <span className="text-slate-300 font-bold block mb-1">
                        {lang === 'id' ? '✦ Tantangan & Solusi:' : '✦ Technical Challenge:'}
                      </span>
                      <p className="text-slate-400 leading-relaxed">{aacProject.challenge}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {aacProject.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-[11px] bg-obsidian-900/90 border border-slate-700 text-slate-300 font-mono backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gold-400/80 font-mono">
                    Assistive Ecosystem
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Flagship #2: SIBI Sign Language Recognition */}
          {sibiProject && (
            <div className="lg:col-span-5 bg-obsidian-950/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group border border-gold-600/30 hover:border-gold-400/50 shadow-2xl transition-all duration-300 relative overflow-hidden">
              {sibiProject.image && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-3xl">
                  <img
                    src={sibiProject.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-55 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/85 to-obsidian-950/40" />
                </div>
              )}

              <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-mono text-gold-300 font-medium backdrop-blur-md">
                      {sibiProject.flag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {sibiProject.repoUrl && (
                        <a
                          href={sibiProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-obsidian-900/90 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors shadow-md backdrop-blur-md"
                          title="GitHub Repository"
                        >
                          <FiGithub size={15} />
                        </a>
                      )}
                      {sibiProject.liveUrl && (
                        <a
                          href={sibiProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-obsidian-900/90 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors shadow-md backdrop-blur-md"
                          title="Hugging Face Space Demo"
                        >
                          <FiArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl shadow-gold-glow flex-shrink-0 backdrop-blur-md">
                      <FiCpu />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold-300 transition-colors drop-shadow-md">
                        {sibiProject.title}
                      </h3>
                      <p className="text-xs text-gold-400 font-mono">VideoMAE Transformer Research</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans mb-3.5 drop-shadow-sm">
                    {sibiProject.description}
                  </p>

                  {/* Metrics Badge */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 bg-obsidian-900/90 rounded-2xl border border-slate-800 backdrop-blur-md mb-3">
                    <div className="text-center">
                      <span className="text-[10px] text-slate-400 block uppercase">
                        {lang === 'id' ? 'Akurasi' : 'Accuracy'}
                      </span>
                      <span className="text-lg sm:text-xl font-bold font-mono text-gold-300">97.2%</span>
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] text-slate-400 block uppercase">Dataset</span>
                      <span className="text-lg sm:text-xl font-bold font-mono text-gold-300">
                        {lang === 'id' ? '1.000 Video' : '1,000 Clips'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-obsidian-900/85 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-200 block mb-1">
                      {lang === 'id' ? 'Tantangan & Solusi:' : 'Challenge & Solution:'}
                    </strong>
                    {sibiProject.challenge}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {sibiProject.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] bg-obsidian-900/90 border border-slate-700 text-slate-300 font-mono backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Row 2: Four Featured Projects (KM ITERA, KosMatch, CareCircle, CuteSnaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-14">
          {otherFeatured.map((project) => {
            const Icon = projectIcons[project.id] || FiGlobe;

            return (
              <div
                key={project.id}
                className="bg-obsidian-950/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group border border-gold-600/25 hover:border-gold-400/50 shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {project.image && (
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl">
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-45 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/90 to-obsidian-950/50" />
                  </div>
                )}

                <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/20 border border-amber-500/40 text-gold-300 backdrop-blur-md">
                        {project.flag}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.embedPreview && (
                          <button
                            onClick={() => handleOpenProject(project)}
                            className="w-8 h-8 rounded-full bg-obsidian-900/90 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors backdrop-blur-md"
                            title="Quick Preview"
                          >
                            <FiMaximize2 size={12} />
                          </button>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-obsidian-900/90 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors backdrop-blur-md"
                            title="GitHub"
                          >
                            <FiGithub size={13} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-obsidian-900/90 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-colors backdrop-blur-md"
                            title="Live Site"
                          >
                            <FiArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-2.5">
                      <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-400 text-lg shadow-sm backdrop-blur-md shrink-0">
                        <Icon />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-gold-300 transition-colors drop-shadow-md">
                          {project.title}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {project.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-3 drop-shadow-sm">
                      {project.description}
                    </p>

                    {/* Challenge Block */}
                    <div className="p-3 rounded-xl bg-obsidian-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                      <strong className="text-slate-200 block mb-0.5">
                        {lang === 'id' ? 'Tantangan & Solusi:' : 'Technical Challenge:'}
                      </strong>
                      {project.challenge}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] bg-obsidian-900/90 border border-slate-700/80 text-slate-300 font-mono backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section: More Projects / Proyek Lainnya */}
        <div className="pt-6 border-t border-gold-600/20">
          <div className="mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="gold-gradient-text">{projects.moreHeading}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {projects.moreIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.more.map((project) => (
              <div
                key={project.title}
                className="p-5 rounded-2xl bg-obsidian-900/85 border border-gold-600/20 hover:border-gold-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-heading font-bold text-base text-white group-hover:text-gold-300 transition-colors">
                      {project.title}
                    </h5>
                    <div className="flex items-center gap-1.5">
                      {project.colabUrl && (
                        <a
                          href={project.colabUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-obsidian-850 border border-slate-700 flex items-center justify-center text-amber-400 hover:bg-gold-500 hover:text-black transition-colors"
                          title="Open Google Colab"
                        >
                          <FiArrowUpRight size={13} />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-obsidian-850 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-gold-300 transition-colors"
                          title="GitHub"
                        >
                          <FiGithub size={13} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-obsidian-850 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-gold-300 transition-colors"
                          title="Live Demo"
                        >
                          <FiArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-obsidian-950 border border-slate-800 text-slate-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal Preview */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
}
