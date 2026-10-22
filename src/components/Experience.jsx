import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-[#1f1f24]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Experience & Education
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Software engineering internship and university degree.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((item, idx) => {
            const isInternship = item.type === 'Internship';
            
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0e0e11] border border-[#222227] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1a1a20]">
                    <div className="flex items-center gap-2">
                      {isInternship ? (
                        <Briefcase className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-zinc-400" />
                      )}
                      <span className="text-xs font-mono text-zinc-400">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mb-4">
                    {item.company} • Pune, India
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1a1a20] flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#16161c] border border-zinc-800 text-[11px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
