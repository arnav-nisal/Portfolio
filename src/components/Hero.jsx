import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowDown, 
  Copy, 
  Check, 
  Sparkles, 
  Award, 
  GraduationCap, 
  Briefcase
} from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/[0.06] relative overflow-hidden">
      
      {/* Subtle radial highlight behind hero header */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[36rem] sm:h-[36rem] bg-indigo-500/[0.04] rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header Block */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">

          {/* Headline & Subheadline */}
          <div className="space-y-2.5">
            <h1 className="text-3xl xs:text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400">
              {personalInfo.title}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            {personalInfo.tagline}
          </p>

          {/* Context Narrative */}
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
            Building intelligent software systems from quantized computer vision and cross-platform mobile applications (<span className="text-zinc-200 font-medium">Expo, React Native, Flutter</span>) to edge runtimes. Frontend software engineering internship completed at <span className="text-zinc-200 font-medium">Manman Manufacturing</span> (1 year ago).
          </p>

          {/* Call to Actions (Mobile Responsive & Touch Optimized) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            <a
              href="#projects"
              id="hero-cta-projects"
              className="w-full xs:w-auto px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 interactive-tap"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 text-zinc-700" />
            </a>

            <a
              href="#contact"
              id="hero-cta-contact"
              className="flex-1 xs:flex-initial px-5 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-medium text-xs sm:text-sm transition-all flex items-center justify-center interactive-tap"
            >
              Contact Me
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex-1 xs:flex-initial px-4 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 border border-white/10 text-xs font-mono transition-all flex items-center justify-center gap-2 interactive-tap"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[140px] xs:max-w-none">{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Minimalist Key Specs Grid (Mobile Optimized Cards) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          <div className="glass-card p-3.5 sm:p-4 rounded-xl card-fluid">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>PRIMARY FOCUS</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1.5">
              Cross-Platform & Edge AI
            </div>
          </div>

          <div className="glass-card p-3.5 sm:p-4 rounded-xl card-fluid border-amber-500/20">
            <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 font-mono">
              <Award className="w-3 h-3 text-amber-400" />
              <span>HONORS & AWARDS</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1.5">
              ISLH 2026 & HackForge Win
            </div>
          </div>

          <div className="glass-card p-3.5 sm:p-4 rounded-xl card-fluid">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
              <GraduationCap className="w-3 h-3 text-blue-400" />
              <span>EDUCATION</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1.5">
              B.Tech CSE (Age 19)
            </div>
          </div>

          <div className="glass-card p-3.5 sm:p-4 rounded-xl card-fluid">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
              <Briefcase className="w-3 h-3 text-emerald-400" />
              <span>INDUSTRY WORK</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1.5">
              Manman Mfg (1 Yr Ago)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
