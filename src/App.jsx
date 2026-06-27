import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillTool from './components/SkillTool';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';

export default function App() {
  return (
    <div className="relative min-h-screen bg-teal-900">
      <BackgroundShapes />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SkillTool />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
