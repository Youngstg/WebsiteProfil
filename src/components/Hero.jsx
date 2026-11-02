import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 }
  }
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 60, damping: 20, delay: 0.3 }
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 md:pt-20 lg:pt-22 pb-0 bg-teal-900 overflow-hidden flex flex-col justify-between min-h-[100svh]">
      {/* Decorative background curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[min(450px,90vw)] sm:w-[600px] lg:w-[800px] xl:w-[900px] h-[min(450px,90vw)] sm:h-[600px] lg:h-[800px] xl:h-[900px] border-[20px] sm:border-[35px] lg:border-[40px] border-teal-800/20 rounded-full -top-[180px] sm:-top-[300px] lg:-top-[400px] -left-[120px] sm:-left-[200px]" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[min(350px,80vw)] sm:w-[480px] lg:w-[600px] xl:w-[700px] h-[min(350px,80vw)] sm:h-[480px] lg:h-[600px] xl:h-[700px] border-[20px] sm:border-[35px] lg:border-[40px] border-teal-800/20 rounded-full top-[150px] sm:top-[200px] -right-[120px] sm:-right-[200px]" 
        />
      </div>

      {/* Main Hero Content - Vertically centered with flex-1 */}
      <div className="section-container relative z-10 flex-1 flex items-center justify-center w-full py-4 sm:py-6 lg:py-8 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start py-2 sm:py-4 z-10"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gold-400/15 text-gold-300 border border-gold-400/30 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Software Developer • AI Enthusiast
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-3 sm:mb-4"
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-serif tracking-wide block mb-1">Hello, I'm</span>
              <span className="text-[clamp(2.5rem,6.5vw,5.75rem)] xl:text-[6rem] 2xl:text-[6.75rem] font-black text-white leading-[0.92] block uppercase tracking-tight">
                LUCKY
              </span>
              <span className="text-[clamp(2.5rem,6.5vw,5.75rem)] xl:text-[6rem] 2xl:text-[6.75rem] font-black text-white leading-[0.92] block uppercase tracking-tight">
                IMMANUEL
              </span>
            </motion.h1>

            {/* Subtitle / Focus Areas */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-teal-200/90 font-medium max-w-xl mb-5 sm:mb-6 leading-relaxed"
            >
              {profile.title}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <motion.a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.96 }}
                className="btn-gold min-h-[46px] px-8 sm:px-10 text-sm sm:text-base font-bold shadow-lg shadow-black/20 touch-manipulation cursor-pointer"
              >
                My Opus
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-outline min-h-[46px] px-6 sm:px-8 text-sm sm:text-base font-semibold touch-manipulation cursor-pointer hover:border-gold-400 hover:text-gold-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Quick Stats Matrix */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 sm:gap-8 pt-3 border-t border-white/10 w-full max-w-md">
              <div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-gold-400 block">{profile.stats.projects}</span>
                <span className="text-[10px] sm:text-[11px] text-text-muted uppercase tracking-wider font-semibold">Projects</span>
              </div>
              <div className="w-[1px] h-7 bg-white/10" />
              <div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-gold-400 block">{profile.stats.skills}</span>
                <span className="text-[10px] sm:text-[11px] text-text-muted uppercase tracking-wider font-semibold">Skills</span>
              </div>
              <div className="w-[1px] h-7 bg-white/10" />
              <div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-gold-400 block">{profile.stats.experience}</span>
                <span className="text-[10px] sm:text-[11px] text-text-muted uppercase tracking-wider font-semibold">Years Exp</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center md:justify-end items-end h-[200px] sm:h-[260px] md:h-[380px] lg:h-[460px] xl:h-[520px] 2xl:h-[560px] w-full md:pr-6 lg:pr-10 xl:pr-14"
          >
            <div className="relative w-full max-w-[190px] sm:max-w-[240px] md:max-w-[340px] lg:max-w-[400px] xl:max-w-[460px] 2xl:max-w-[500px] h-full flex items-end justify-center md:justify-end">
              <motion.img
                initial={{ filter: 'grayscale(100%) brightness(110%) contrast(125%)' }}
                animate={{ filter: 'grayscale(100%) brightness(110%) contrast(125%)' }}
                transition={{ duration: 1.5, delay: 0.8 }}
                src={profile.photo}
                alt={profile.name}
                loading="lazy"
                className="relative max-h-full w-auto max-w-full object-contain object-bottom z-20 pointer-events-none drop-shadow-2xl rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Diagonal Bio Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="relative w-full flex items-center justify-center pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-10 z-20 shrink-0 mt-0"
      >
        <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)' }} />
        
        {/* "Portofolio" Script floating anchored directly to this diagonal banner */}
        <div className="section-container absolute top-0 inset-x-0 pointer-events-none z-30">
          <div className="relative w-full flex justify-center md:justify-end md:pr-8 lg:pr-14 xl:pr-20">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.6 }}
              className="absolute -top-14 sm:-top-16 md:-top-20 lg:-top-24 xl:-top-28 -left-1 sm:-left-3 md:-left-6 lg:left-auto script-heading text-[clamp(2.75rem,6.5vw,7.5rem)] text-white select-none pointer-events-none drop-shadow-lg"
            >
              Portofolio
            </motion.h2>
          </div>
        </div>

        <div className="relative z-20 max-w-4xl xl:max-w-5xl px-5 sm:px-8 lg:px-12 text-center mt-3 sm:mt-4 md:mt-2">
          <p className="text-teal-950 font-bold text-[clamp(0.875rem,1.8vw,1.25rem)] leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </motion.div>
    </section>
  );
}