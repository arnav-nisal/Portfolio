import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Award, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'Edge AI & Healthcare', label: 'Edge AI' },
    { id: 'Identity & Biometrics', label: 'Mobile & Native' },
    { id: 'Agentic Systems', label: 'Agentic Systems' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 reveal-on-scroll">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
              02 / Featured Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Engineered systems, published research, and hackathon-winning architectures.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 scrollbar-none">
            {filterOptions.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all interactive-tap ${
                    isSelected
                      ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredProjects.map((project, idx) => {
            const isRetiQ = project.id === 'retiq';

            return (
              <div
                key={project.id}
                className={`glass-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between card-fluid reveal-on-scroll ${
                  isRetiQ && activeFilter === 'all' ? 'md:col-span-2 border-amber-500/25' : ''
                }`}
                style={{ transitionDelay: `${(idx + 1) * 70}ms` }}
              >
                <div>
                  
                  {/* Category & Academic Award Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900/90 border border-white/5">
                      {project.category}
                    </span>

                    {project.award && (
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium shadow-sm ${
                        isRetiQ 
                          ? 'award-badge-glow text-amber-300' 
                          : 'bg-zinc-900/90 border border-emerald-500/30 text-emerald-300'
                      }`}>
                        <Award className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate max-w-[220px] sm:max-w-none">{project.award}</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mb-3.5">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* RetiQ Research Highlight Callout */}
                  {isRetiQ && (
                    <div className="mb-5 p-3.5 sm:p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 text-xs text-zinc-300 space-y-1.5">
                      <div className="font-semibold text-amber-200 flex items-center gap-1.5 font-mono text-[11px]">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>ISLH 2026 Research & Travel Award Recognition</span>
                      </div>
                      <p className="text-zinc-300/90 leading-relaxed text-xs">
                        Co-authored research paper on real-time reticulocyte enumeration using quantized YOLOv11-seg inference directly on smartphone chipsets under mobile optical microscopy. The prestigious <strong>Berend Houwen Travel Award at ISLH 2026</strong> was awarded to the project's presenting author (my father).
                      </p>
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6 text-xs text-zinc-300">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Tech Stack Badges & Repository Link */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-white/5 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white transition-colors interactive-tap py-1"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* GitHub Link Footer */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-white/[0.06] flex flex-col xs:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 reveal-on-scroll">
          <span>Explore all open-source repositories and experiments</span>
          <a
            href="https://github.com/arnav-nisal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white transition-colors interactive-tap"
          >
            <span>github.com/arnav-nisal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
