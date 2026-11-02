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
    <section id="home" className="relative pt-16 sm:pt-20 pb-0 bg-teal-900 overflow-hidden flex flex-col justify-between min-h-[100svh] 2xl:min-h-[820px] 2xl:max-h-[860px]">
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

      {/* Main Hero Content */}
      <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-end mt-auto mb-0 pb-0">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pb-8 sm:pb-12 md:pb-16 flex flex-col items-start"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-4 sm:mb-6"
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-serif tracking-wide block mb-1 sm:mb-2">Hello, I'm</span>
            <span className="text-[clamp(2.5rem,7vw,5.75rem)] font-black text-white leading-[0.92] block uppercase tracking-tight">
              LUCKY
            </span>
            <span className="text-[clamp(2.5rem,7vw,5.75rem)] font-black text-white leading-[0.92] block uppercase tracking-tight">
              IMMANUEL
            </span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <motion.a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="min-h-[44px] inline-flex items-center justify-center bg-[#FFCC80] text-teal-950 font-bold px-8 sm:px-10 py-3 rounded-full hover:bg-[#FFB74D] transition-colors text-base sm:text-lg shadow-lg shadow-black/15 touch-manipulation cursor-pointer"
            >
              My Opus
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center md:justify-end items-end h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px] w-full md:pr-10 lg:pr-16 xl:pr-24 pb-0"
        >
          <div className="relative w-full max-w-[190px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[290px] xl:max-w-[330px] h-full flex items-end justify-center md:justify-end">
            <motion.img
              initial={{ filter: 'grayscale(100%) brightness(110%) contrast(125%)' }}
              animate={{ filter: 'grayscale(100%) brightness(110%) contrast(125%)' }}
              transition={{ duration: 1.5, delay: 0.8 }}
              src={profile.photo}
              alt={profile.name}
              loading="lazy"
              className="relative max-h-[105%] w-auto max-w-full object-contain object-bottom z-20 pointer-events-none"
            />
          </div>
        </motion.div>
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