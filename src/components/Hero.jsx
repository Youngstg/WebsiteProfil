import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-0 bg-teal-900 overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Decorative background curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[800px] h-[800px] border-[40px] border-teal-800/20 rounded-full -top-[400px] -left-[200px]" />
        <div className="absolute w-[600px] h-[600px] border-[40px] border-teal-800/20 rounded-full top-[200px] -right-[200px]" />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="pb-24"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-4xl md:text-5xl text-white font-serif tracking-wide block mb-2">Hello, I'm</span>
            <span className="text-6xl md:text-[5.5rem] font-black text-white leading-none block uppercase">
              LUCKY
            </span>
            <span className="text-6xl md:text-[5.5rem] font-black text-white leading-none block uppercase">
              IMMANUEL
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-[#FFCC80] text-teal-950 font-bold px-10 py-3 rounded-full hover:bg-[#FFB74D] transition-colors shadow-sm text-lg"
            >
              My Opus
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo and Portofolio text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative flex justify-center md:justify-end h-[400px] md:h-[500px] -mt-16 md:-mt-24"
        >
          <div className="relative w-full max-w-[350px] h-full">
            {/* Outline photo effect - using drop-shadow for white stroke if png is transparent */}
            <img
              src={profile.photo}
              alt={profile.name}
              className="absolute bottom-10 md:bottom-16 right-0 w-full object-contain object-bottom h-[120%] z-20 grayscale brightness-110 contrast-125"
              style={{ filter: 'drop-shadow(0px 0px 5px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) grayscale(100%)' }}
            />

            {/* "Portofolio" Script floating over photo and diagonal */}
            <h2 
              className="absolute -bottom-10 md:-bottom-12 -left-20 md:-left-40 z-30 script-heading text-6xl md:text-[8rem] text-white -rotate-6"
              style={{
                textShadow: '-3px -3px 0 #0D2634, 3px -3px 0 #0D2634, -3px 3px 0 #0D2634, 3px 3px 0 #0D2634, 0px 5px 15px rgba(0,0,0,0.3)'
              }}
            >
              Portofolio
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Bottom Diagonal Bio Section */}
      <div className="relative w-full min-h-[250px] flex items-center justify-center pt-24 pb-16 z-10">
        <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }} />
        
        <div className="relative z-20 max-w-3xl px-8 text-center mt-12 md:mt-4">
          <p className="text-teal-950 font-bold text-base md:text-lg leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
