import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiExternalLink, 
  FiGithub, 
  FiMonitor, 
  FiTablet, 
  FiSmartphone,
  FiDownload,
  FiMaximize2,
  FiMinimize2
} from 'react-icons/fi';
import { SiGooglecolab, SiJupyter } from 'react-icons/si';

const viewportSizes = [
  { name: 'Desktop', icon: FiMonitor, width: '100%' },
  { name: 'Tablet', icon: FiTablet, width: '768px' },
  { name: 'Mobile', icon: FiSmartphone, width: '375px' },
];

export default function ProjectModal({ project, onClose }) {
  const [activeViewport, setActiveViewport] = useState('Desktop');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) return null;

  const previewUrl = project.notebookUrl || project.liveUrl;
  const isNotebook = Boolean(project.isNotebook || project.notebookUrl);
  const currentViewport = viewportSizes.find(v => v.name === activeViewport);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-teal-950/90 backdrop-blur-md" />

          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`relative z-10 w-full bg-teal-900 border border-white/15 rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300 ${
              isFullscreen 
                ? 'max-w-none h-[98vh]' 
                : isNotebook 
                  ? 'max-w-6xl h-[92vh]' 
                  : 'max-w-5xl h-[90vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 md:p-5 border-b border-white/10 gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white truncate">{project.title}</h3>
                  {isNotebook && (
                    <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/30">
                      <SiJupyter size={13} /> Notebook
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-text-muted truncate">{project.description}</p>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                {/* Viewport switchers for Desktop / Tablet / Mobile */}
                {previewUrl && (
                  <div className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-teal-950/60 border border-white/10 mr-1">
                    {viewportSizes.map(({ name, icon: Icon }) => (
                      <button
                        key={name}
                        onClick={() => { setActiveViewport(name); setIframeLoaded(false); }}
                        className={`p-1.5 rounded-md transition-all duration-200 ${
                          activeViewport === name ? 'bg-gold-400/20 text-gold-400' : 'text-text-muted hover:text-text-light'
                        }`}
                        title={`Tampilan ${name}`}
                      >
                        <Icon size={15} />
                      </button>
                    ))}
                  </div>
                )}

                {/* Google Colab launcher */}
                {project.colabUrl && (
                  <a 
                    href={project.colabUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="min-h-[38px] px-2.5 sm:px-3 flex items-center gap-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition-all text-xs font-semibold"
                    title="Jalankan di Google Colab"
                  >
                    <SiGooglecolab size={16} />
                    <span className="hidden sm:inline">Run Colab</span>
                  </a>
                )}

                {/* Download raw .ipynb */}
                {project.ipynbUrl && (
                  <a 
                    href={project.ipynbUrl} 
                    download
                    className="min-h-[38px] px-2 sm:px-2.5 flex items-center gap-1.5 rounded-lg border border-white/10 text-text-muted hover:text-gold-400 hover:border-gold-400/40 transition-all text-xs"
                    title="Download file .ipynb"
                  >
                    <FiDownload size={15} />
                    <span className="hidden md:inline">.ipynb</span>
                  </a>
                )}

                {/* GitHub link */}
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg border border-white/10 text-text-muted hover:text-gold-400 hover:border-gold-400/40 transition-all" 
                    title="Buka Source Code GitHub"
                  >
                    <FiGithub size={16} />
                  </a>
                )}

                {/* Open preview in separate tab */}
                {previewUrl && (
                  <a 
                    href={previewUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg border border-white/10 text-text-muted hover:text-gold-400 hover:border-gold-400/40 transition-all" 
                    title="Buka di tab baru"
                  >
                    <FiExternalLink size={16} />
                  </a>
                )}

                {/* Fullscreen toggle */}
                <button
                  type="button"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="hidden sm:flex min-w-[38px] min-h-[38px] items-center justify-center rounded-lg border border-white/10 text-text-muted hover:text-white transition-all"
                  title={isFullscreen ? 'Keluar Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? <FiMinimize2 size={16} /> : <FiMaximize2 size={16} />}
                </button>

                {/* Close button */}
                <button 
                  onClick={onClose}
                  className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-300 text-text-muted transition-all" 
                  aria-label="Tutup"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden p-2 sm:p-4 flex items-center justify-center bg-teal-950/60">
              {previewUrl ? (
                <div 
                  className="relative rounded-xl overflow-hidden border border-white/10 transition-all duration-300 h-full w-full bg-white shadow-inner"
                  style={{ width: currentViewport.width, maxWidth: '100%' }}
                >
                  {!iframeLoaded && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-teal-900/90 backdrop-blur-sm">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-9 h-9 border-2 border-gold-400/30 border-t-gold-400 rounded-full animate-spin" />
                        <span className="text-xs sm:text-sm font-medium text-gold-300">
                          {isNotebook ? 'Memuat Jupyter Notebook interaktif...' : 'Memuat preview web...'}
                        </span>
                      </div>
                    </div>
                  )}
                  <iframe 
                    src={previewUrl} 
                    title={`Preview ${project.title}`}
                    className="w-full h-full bg-white border-0"
                    onLoad={() => setIframeLoaded(true)}
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads" 
                  />
                </div>
              ) : project.image ? (
                <div className="flex items-center justify-center h-full w-full p-4">
                  <img src={project.image} alt={project.title} className="max-h-full max-w-full rounded-xl object-contain shadow-2xl" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center px-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center mb-5">
                    <span className="text-2xl font-bold text-gold-400 script-heading">
                      {project.title.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-text-light mb-2">{project.title}</h4>
                  <p className="text-text-muted text-xs sm:text-sm max-w-md mb-6">{project.description}</p>
                </div>
              )}
            </div>

            {/* Footer tags */}
            <div className="px-4 md:px-6 py-2.5 sm:py-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 bg-teal-900/80">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[11px] text-text-muted hidden sm:inline">
                {isNotebook ? 'Tip: Anda dapat menggulir halaman untuk melihat seluruh cell, output grafik, dan markdown.' : 'Klik tab baru untuk membuka situs penuh.'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
