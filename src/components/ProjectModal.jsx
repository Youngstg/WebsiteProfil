import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiMonitor, FiTablet, FiSmartphone } from 'react-icons/fi';

const viewportSizes = [
  { name: 'Desktop', icon: FiMonitor, width: '100%' },
  { name: 'Tablet', icon: FiTablet, width: '768px' },
  { name: 'Mobile', icon: FiSmartphone, width: '375px' },
];

export default function ProjectModal({ project, onClose }) {
  const [activeViewport, setActiveViewport] = useState('Desktop');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!project) return null;

  const currentViewport = viewportSizes.find(v => v.name === activeViewport);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-teal-950/90 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-teal-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-white/10">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-text-light truncate">{project.title}</h3>
                <p className="text-sm text-text-muted truncate">{project.description}</p>
              </div>

              <div className="flex items-center gap-2 ml-4">
                {project.liveUrl && (
                  <div className="hidden md:flex items-center gap-1 mr-2 p-1 rounded-lg bg-teal-800">
                    {viewportSizes.map(({ name, icon: Icon }) => (
                      <button
                        key={name}
                        onClick={() => { setActiveViewport(name); setIframeLoaded(false); }}
                        className={`p-2 rounded-md transition-all duration-200 ${
                          activeViewport === name ? 'bg-gold-400/20 text-gold-400' : 'text-text-muted hover:text-text-light'
                        }`}
                        title={name}
                      >
                        <Icon size={16} />
                      </button>
                    ))}
                  </div>
                )}

                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg text-text-muted hover:text-gold-400 transition-all" title="Open live site">
                    <FiExternalLink size={18} />
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg text-text-muted hover:text-gold-400 transition-all" title="View source code">
                    <FiGithub size={18} />
                  </a>
                )}
                <button onClick={onClose}
                  className="p-2 rounded-lg text-text-muted hover:text-red-400 transition-all ml-1" aria-label="Close">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden p-4 md:p-6 flex items-center justify-center bg-teal-950/50">
              {project.liveUrl ? (
                <div className="relative rounded-lg overflow-hidden border border-white/10 transition-all duration-500 h-full"
                  style={{ width: currentViewport.width, maxWidth: '100%' }}>
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-teal-800">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-2 border-gold-400/30 border-t-gold-400 rounded-full animate-spin" />
                        <span className="text-sm text-text-muted">Loading preview...</span>
                      </div>
                    </div>
                  )}
                  <iframe src={project.liveUrl} title={`Preview of ${project.title}`}
                    className="w-full h-full min-h-[400px] md:min-h-[500px] bg-white"
                    onLoad={() => setIframeLoaded(true)}
                    sandbox="allow-scripts allow-same-origin allow-popups" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-gold-400 script-heading">
                      {project.title.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-text-light mb-2">{project.title}</h4>
                  <p className="text-text-muted max-w-md mb-6">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 text-xs font-mono rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-gold inline-flex items-center gap-2">
                      <FiGithub size={16} /> View on GitHub
                    </a>
                  )}
                </div>
              )}
            </div>

            {project.liveUrl && (
              <div className="px-4 md:px-6 py-3 border-t border-white/10 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-mono rounded-full bg-gold-400/10 text-gold-400">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
