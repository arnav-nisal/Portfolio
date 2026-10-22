import React from 'react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-[#1f1f24]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Tech Stack & Skills
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Languages, frameworks, machine learning runtimes, and hardware platforms.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsCategories.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#0e0e11] border border-[#222227] p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono pb-3 mb-4 border-b border-[#1f1f24]">
                  {group.category}
                </h3>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-medium text-zinc-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-normal">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag summary */}
              <div className="mt-6 pt-4 border-t border-[#1a1a20] flex flex-wrap gap-1.5">
                {group.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-[#16161c] border border-zinc-800 text-[10px] font-mono text-zinc-400"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
