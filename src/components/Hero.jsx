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
    <section id="home" className="relative pt-24 pb-0 bg-teal-900 overflow-hidden flex flex-col justify-center min-h-screen">
      {/* Decorative background curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[800px] border-[40px] border-teal-800/20 rounded-full -top-[400px] -left-[200px]" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[600px] h-[600px] border-[40px] border-teal-800/20 rounded-full top-[200px] -right-[200px]" 
        />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pb-24 lg:-ml-12 xl:-ml-24"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-8"
          >
            <span className="text-4xl md:text-5xl 2xl:text-6xl text-white font-serif tracking-wide block mb-2">Hello, I'm</span>
            <span className="text-6xl md:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[8rem] font-black text-white leading-none block uppercase">
              LUCKY
            </span>
            <span className="text-6xl md:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[8rem] font-black text-white leading-none block uppercase">
              IMMANUEL
            </span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <motion.a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FFCC80] text-teal-950 font-bold px-10 py-3 rounded-full hover:bg-[#FFB74D] transition-colors text-lg"
            >
              My Opus
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo and Portofolio text */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center md:justify-end h-[400px] md:h-[500px] xl:h-[550px] 2xl:h-[650px] -mt-16 md:-mt-24 xl:-mt-32"
        >
          <div className="relative w-full max-w-[350px] xl:max-w-[400px] 2xl:max-w-[500px] h-full">
            {/* Outline photo effect - using drop-shadow for white stroke if png is transparent */}
            <motion.img
              initial={{ filter: 'drop-shadow(0px 0px 0px white) grayscale(100%) brightness(110%) contrast(125%)' }}
              animate={{ filter: 'drop-shadow(0px 0px 5px white) grayscale(100%) brightness(110%) contrast(125%)' }}
              transition={{ duration: 1.5, delay: 0.8 }}
              src={profile.photo}
              alt={profile.name}
              className="absolute bottom-10 md:bottom-16 right-0 w-full object-contain object-bottom h-[120%] z-20"
            />

            {/* "Portofolio" Script floating over photo and diagonal */}
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.6 }}
              className="absolute -bottom-10 md:-bottom-12 -left-20 md:-left-40 xl:-left-48 z-30 script-heading text-6xl md:text-[8rem] xl:text-[9rem] 2xl:text-[11rem] text-white"
              style={{
                textShadow: '-3px -3px 0 #0D2634, 3px -3px 0 #0D2634, -3px 3px 0 #0D2634, 3px 3px 0 #0D2634, 0px 5px 15px rgba(0,0,0,0.3)'
              }}
            >
              Portofolio
            </motion.h2>
          </div>
        </motion.div>
      </div>

      {/* Bottom Diagonal Bio Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="relative w-full min-h-[250px] flex items-center justify-center pt-24 pb-16 z-10 mt-auto"
      >
        <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }} />
        
        <div className="relative z-20 max-w-3xl px-8 text-center mt-12 md:mt-4">
          <p className="text-teal-950 font-bold text-base md:text-lg lg:text-xl leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
