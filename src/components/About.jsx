import React from 'react';
import { aboutHighlights } from '../data/portfolioData';
import { Briefcase, GraduationCap, Cpu, Smartphone, Network } from 'lucide-react';

export default function About() {
  const highlightIcons = [Cpu, Smartphone, Network];

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 reveal-on-scroll">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            01 / Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Background, core engineering philosophy, and experience.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Main Narrative & Focus Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base reveal-on-scroll">
              <p>
                I am a <strong className="text-white font-semibold">19-year-old B.Tech Computer Science and Engineering student at DES Pune University</strong>. My core engineering focus is on <strong className="text-white font-semibold">building intelligent systems</strong>—spanning local AI model deployment, quantized neural networks, and embedded hardware.
              </p>
              <p>
                I work across the software stack: from taking computer vision models (such as YOLOv11-seg) and optimizing them for edge devices via TFLite and WebAssembly, to engineering high-performance cross-platform mobile applications with <strong className="text-white font-semibold">Expo, React Native, and Flutter</strong>.
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Completed a frontend software engineering internship at <strong className="text-zinc-200">Manman Manufacturing</strong> (1 year ago), building internal web applications and client-facing interfaces for manufacturing operations.
              </p>
            </div>

            {/* Core Pillars / Domain Cards */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                Core Domains
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {aboutHighlights.map((item, idx) => {
                  const Icon = highlightIcons[idx] || Cpu;
                  return (
                    <div 
                      key={item.title}
                      className="glass-card p-3.5 rounded-xl card-fluid reveal-on-scroll"
                      style={{ transitionDelay: `${(idx + 1) * 80}ms` }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-zinc-900 border border-white/10 text-cyan-400">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[11px] font-mono font-medium text-zinc-300 truncate">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-xs font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Quick Context Highlights on Right */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card p-5 sm:p-6 rounded-2xl card-fluid reveal-on-scroll">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Work Experience</h3>
                    <p className="text-[11px] text-zinc-400 font-mono">Manman Manufacturing</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-400">
                  1 Year Ago
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Frontend Software Engineering Intern: Engineered responsive user interfaces and internal web applications for manufacturing operations and workflows.
              </p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl card-fluid reveal-on-scroll stagger-1">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-blue-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Education</h3>
                    <p className="text-[11px] text-zinc-400 font-mono">DES Pune University</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-400">
                  Age 19
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                B.Tech in Computer Science and Engineering (Undergraduate). Focus on systems engineering, computer vision pipelines, and mobile AI.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
