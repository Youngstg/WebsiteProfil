import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUser, FiTarget, FiAward } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">About Me</h2>
          <div className="w-16 h-0.5 bg-gold-400/40 mx-auto" />
        </motion.div>

        {/* White Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-white p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Bio */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-900/10 flex items-center justify-center text-teal-800">
                  <FiUser size={20} />
                </div>
                <h3 className="text-xl font-bold text-text-dark">Who am I?</h3>
              </div>
              <p className="text-text-dark-muted leading-relaxed mb-6">
                {profile.bio}
              </p>
              <p className="text-text-dark-muted leading-relaxed">
                Saat ini saya sedang menempuh pendidikan di{' '}
                <span className="text-teal-800 font-semibold">{profile.university}</span>,
                di mana saya terus mengembangkan skill dan pengetahuan saya.
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-5">
              <div className="bg-teal-900/5 rounded-2xl p-5 border border-teal-800/10">
                <div className="flex items-center gap-3 mb-2">
                  <FiTarget className="text-gold-500" size={18} />
                  <h4 className="font-semibold text-text-dark">My Focus</h4>
                </div>
                <p className="text-text-dark-muted text-sm leading-relaxed">
                  Fokus utama saya adalah pada <span className="text-teal-800 font-medium">Cyber Security</span> dan{' '}
                  <span className="text-teal-800 font-medium">Artificial Intelligence</span>.
                </p>
              </div>

              <div className="bg-teal-900/5 rounded-2xl p-5 border border-teal-800/10">
                <div className="flex items-center gap-3 mb-2">
                  <FiAward className="text-gold-500" size={18} />
                  <h4 className="font-semibold text-text-dark">Passion</h4>
                </div>
                <p className="text-text-dark-muted text-sm leading-relaxed">
                  Selain coding, saya aktif dalam komunitas IT dan senang berbagi pengetahuan melalui workshop dan mentoring.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(profile.stats).map(([key, value]) => (
                  <div key={key} className="bg-teal-900 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gold-400 mb-1">{value}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
