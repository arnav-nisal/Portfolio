import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useScrollEffects } from './hooks/useScrollEffects';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const { scrollProgress, activeSection, showScrollTop } = useScrollEffects();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-zinc-800 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 origin-left pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      {/* Ambient Fluid Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-24 -left-20 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-blue-600/10 blur-[90px] animate-float-slow" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 sm:w-[32rem] sm:h-[32rem] rounded-full bg-indigo-600/10 blur-[110px] animate-float-reverse" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 sm:w-[26rem] sm:h-[26rem] rounded-full bg-cyan-600/8 blur-[100px] animate-float-slow" />
      </div>

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>

      {/* Footer & Contact */}
      <div className="relative z-10">
        <Contact />
      </div>

      {/* Mobile-Friendly Back to Top FAB */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 p-3 rounded-full glass-card hover:bg-zinc-800/90 text-zinc-300 hover:text-white border border-white/10 shadow-xl shadow-black/40 interactive-tap transition-all duration-300 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll back to top"
      >
        <ChevronUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>

    </div>
  );
}
