import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Copy, Check, ArrowUpRight, Award } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24 border-b border-[#1f1f24]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Header Block */}
        <div className="max-w-3xl space-y-6">
          
          {/* Status Label (Clean, solid, professional) */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
            <span>Pune, India</span>
            <span className="text-zinc-600">/</span>
            <span>DES Pune University</span>
          </div>

          {/* Headline & Subheadline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-zinc-300">
              {personalInfo.title}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {personalInfo.tagline}
          </p>

          {/* Short Narrative Context */}
          <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
            Building intelligent software systems from quantized computer vision and cross-platform mobile applications (Expo, React Native, Flutter) to edge runtimes. Frontend software engineering internship at <span className="text-zinc-300 font-medium">Manman Manufacturing</span> (1 year ago).
          </p>

          {/* Call to Actions (Standard, solid, high-craft buttons) */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#projects"
              id="hero-cta-projects"
              className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-colors flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 text-zinc-700" />
            </a>

            <a
              href="#contact"
              id="hero-cta-contact"
              className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-medium text-sm transition-colors"
            >
              Contact Me
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80 text-xs font-mono transition-colors flex items-center gap-2"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-zinc-200" />
                  <span className="text-zinc-200">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Minimalist Key Specs Bar */}
        <div className="mt-14 pt-8 border-t border-[#1f1f24] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-xs text-zinc-500 font-mono">PRIMARY FOCUS</div>
            <div className="text-sm font-medium text-zinc-200 mt-1">Cross-Platform & Edge AI</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 font-mono">HONORS & AWARDS</div>
            <div className="text-sm font-medium text-zinc-200 mt-1">
              ISLH 2026 & HackForge Winner
            </div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 font-mono">EDUCATION</div>
            <div className="text-sm font-medium text-zinc-200 mt-1">B.Tech CSE (Age 19)</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 font-mono">INDUSTRY WORK</div>
            <div className="text-sm font-medium text-zinc-200 mt-1">Manman Mfg (1 Yr Ago)</div>
          </div>
        </div>

      </div>
    </section>
  );
}
