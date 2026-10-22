import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0-.01-2.9 1.45 1.45 0 0 0 .01 2.9m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const CURRENT_YEAR = new Date().getFullYear();

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-16 sm:py-24 bg-[#09090b] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container */}
        <div className="glass-card p-6 sm:p-10 md:p-12 rounded-3xl relative overflow-hidden card-fluid mb-12 sm:mb-16 reveal-on-scroll">
          
          {/* Ambient corner light */}
          <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-4 sm:space-y-5 relative z-10">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let's Build Something Great</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Get in Touch
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              I am open to software engineering internships, edge AI research collaborations, and technical discussions. Feel free to connect directly via email or social profiles.
            </p>

            {/* Email Actions (Mobile-Optimized Touch Targets) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full xs:w-auto px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 interactive-tap shadow-md"
              >
                <Mail className="w-4 h-4 text-zinc-800" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full xs:w-auto px-4 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-xs font-mono transition-all flex items-center justify-center gap-2 interactive-tap"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Profiles */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 sm:pt-6 border-t border-white/[0.06]">
              <span className="text-xs text-zinc-500 font-mono w-full xs:w-auto mb-1 xs:mb-0">
                PROFILES:
              </span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 hover:text-white transition-all interactive-tap"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 hover:text-white transition-all interactive-tap"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

          </div>
        </div>

        {/* Clean Footer Bar with Safe Area Spacing */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono pb-8 sm:pb-4">
          <div>
            © {CURRENT_YEAR} Arnav Nisal. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <MapPin className="w-3 h-3 text-zinc-500" />
            <span>DES Pune University • Pune, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
