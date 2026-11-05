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
          <div className="absolute inset-0 bg-obsidian-950/90 backdrop-blur-md" />

          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`relative z-10 w-full bg-obsidian-900 border border-gold-600/30 rounded-3xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300 ${
              isFullscreen 
                ? 'max-w-none h-[98vh]' 
                : isNotebook 
                  ? 'max-w-6xl h-[92vh]' 
                  : 'max-w-5xl h-[90vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gold-600/20 gap-3 bg-obsidian-850/80">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-1">
                  <h3 className="text-base sm:text-xl font-bold font-heading text-white truncate">{project.title}</h3>
                  {isNotebook && (
                    <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/30">
                      <SiJupyter size={13} /> Notebook
                    </span>
                  )}
                  {project.tags && project.tags[0] && (
                    <span className="shrink-0 hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-300 text-[11px] font-medium border border-gold-500/20">
                      {project.tags[0]}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 truncate">{project.description}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Viewport switchers for Desktop / Tablet / Mobile */}
                {previewUrl && (
                  <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-obsidian-950/80 border border-gold-600/20 mr-1">
                    {viewportSizes.map(({ name, icon: Icon }) => (
                      <button
                        key={name}
                        onClick={() => { setActiveViewport(name); setIframeLoaded(false); }}
                        className={`p-1.5 rounded-lg transition-all duration-200 ${
                          activeViewport === name ? 'bg-gold-500/20 text-gold-300 font-bold' : 'text-slate-400 hover:text-white'
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
                    className="min-h-[38px] px-3 flex items-center gap-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition-all text-xs font-semibold"
                    title="Jalankan di Google Colab"
                  >
                    <SiGooglecolab size={16} />
                    <span className="hidden sm:inline">Colab</span>
                  </a>
                )}

                {/* Download .ipynb */}
                {project.ipynbUrl && (
                  <a 
                    href={project.ipynbUrl} 
                    download
                    className="min-h-[38px] px-3 flex items-center gap-1.5 rounded-xl bg-obsidian-850 border border-gold-600/20 text-gold-300 hover:bg-gold-500/15 transition-all text-xs font-semibold"
                    title="Unduh file .ipynb"
                  >
                    <FiDownload size={14} />
                    <span className="hidden sm:inline">.ipynb</span>
                  </a>
                )}

                {/* Live Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[38px] px-3.5 flex items-center gap-1.5 rounded-xl gold-gradient-btn text-obsidian-950 font-bold transition-all text-xs shadow-gold-glow"
                  >
                    <FiExternalLink size={14} />
                    <span className="hidden sm:inline">Buka Langsung</span>
                  </a>
                )}

                {/* Repo Link */}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[38px] p-2 flex items-center justify-center rounded-xl bg-obsidian-850 border border-gold-600/20 text-slate-300 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                    title="Lihat Repository GitHub"
                  >
                    <FiGithub size={16} />
                  </a>
                )}

                {/* Fullscreen Toggle */}
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="hidden sm:flex min-h-[38px] p-2 items-center justify-center rounded-xl bg-obsidian-850 border border-gold-600/20 text-slate-300 hover:text-gold-300 transition-colors"
                  title={isFullscreen ? 'Keluar Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? <FiMinimize2 size={16} /> : <FiMaximize2 size={16} />}
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="min-h-[38px] p-2 flex items-center justify-center rounded-xl bg-obsidian-850 border border-gold-600/20 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                  aria-label="Tutup preview"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Iframe Viewport Container */}
            <div className="flex-1 bg-obsidian-950 relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
              {!iframeLoaded && previewUrl && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-obsidian-950 z-10 text-gold-300">
                  <div className="w-9 h-9 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs font-mono text-slate-400">Memuat antarmuka proyek...</p>
                </div>
              )}

              {previewUrl ? (
                <div 
                  className="h-full bg-obsidian-900 shadow-2xl transition-all duration-300 overflow-hidden rounded-xl border border-gold-600/20"
                  style={{ width: currentViewport ? currentViewport.width : '100%' }}
                >
                  <iframe
                    src={previewUrl}
                    title={project.title}
                    className="w-full h-full border-none"
                    onLoad={() => setIframeLoaded(true)}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-8 max-w-md">
                  <p className="text-base font-bold text-white mb-2">{project.title}</p>
                  <p className="text-xs text-slate-400 mb-6">{project.description}</p>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-gradient-btn px-6 py-2.5 rounded-full text-xs font-bold uppercase flex items-center gap-2"
                    >
                      <FiGithub size={15} />
                      <span>Kunjungi GitHub</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
