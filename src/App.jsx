import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import { LanguageProvider } from './context/LanguageContext';

export default function App({ lang = 'en' }) {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, []);

  return (
    <LanguageProvider defaultLang={lang}>
      <div className="relative min-h-screen bg-obsidian-950 text-slate-100 overflow-x-hidden w-full max-w-[100vw] ambient-glow-bg flex flex-col justify-between selection:bg-gold-500 selection:text-black">
        <BackgroundShapes />
        <Navbar />
        <main className="relative z-10 overflow-x-hidden w-full flex-grow pt-18 sm:pt-20">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
