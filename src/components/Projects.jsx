import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Award, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-[#1f1f24]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Engineered systems, research implementations, and open-source software.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => {
            const isRetiQ = project.id === 'retiq';

            return (
              <div
                key={project.id}
                className={`rounded-xl bg-[#0e0e11] border border-[#222227] hover:border-[#33333b] p-6 sm:p-7 flex flex-col justify-between transition-colors ${
                  isRetiQ ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  
                  {/* Category & Award Label */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {project.category}
                    </span>

                    {/* Academic Award / Recognition */}
                    {project.award && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono">
                        <Award className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{project.award}</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                    {project.title}
                  </h3>

                  {/* Exact User Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* RetiQ Research Highlight Box (Clean, academic styling) */}
                  {isRetiQ && (
                    <div className="mb-5 p-3.5 rounded-lg bg-[#141419] border border-zinc-800 text-xs text-zinc-300 space-y-1">
                      <div className="font-medium text-white flex items-center gap-1.5 font-mono">
                        <Award className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Research Publication & Award</span>
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Co-authored research paper received the <strong>Berend Houwen Travel Award at ISLH 2026</strong>. Evaluates real-time reticulocyte enumeration using quantized YOLOv11-seg inference on smartphone chipsets under mobile optical microscopy.
                      </p>
                    </div>
                  )}

                  {/* Architectural Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-zinc-400">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-zinc-600 font-mono mt-0.5">•</span>
                        <span className="text-zinc-300 leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Tech Stack Badges */}
                {/* Tech Stack Badges & GitHub Link */}
                <div className="pt-4 border-t border-[#1a1a20] flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#16161c] border border-zinc-800 text-[11px] font-mono text-zinc-400"
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
                      className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white transition-colors shrink-0"
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
        <div className="mt-10 pt-6 border-t border-[#1a1a20] flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>More public projects and experiments</span>
          <a
            href="https://github.com/arnav-nisal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors"
          >
            <span>github.com/arnav-nisal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
