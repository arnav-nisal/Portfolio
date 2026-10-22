import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { Smartphone, Brain, Terminal } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    'Languages & Frameworks': Smartphone,
    'AI & ML': Brain,
    'Systems & Backend': Terminal,
  };

  const displayedCategories = selectedCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 reveal-on-scroll">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
              03 / Technical Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Tech Stack & Skills
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Languages, frameworks, machine learning runtimes, and low-level systems.
            </p>
          </div>

          {/* Category Filter on Mobile / Desktop */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all interactive-tap ${
                selectedCategory === 'all'
                  ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
              }`}
            >
              All Domains
            </button>
            {skillsCategories.map((group) => {
              const isSelected = selectedCategory === group.category;
              return (
                <button
                  key={group.category}
                  onClick={() => setSelectedCategory(group.category)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all interactive-tap ${
                    isSelected
                      ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
                  }`}
                >
                  {group.category.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {displayedCategories.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Terminal;

            return (
              <div
                key={group.category}
                className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between card-fluid reveal-on-scroll"
                style={{ transitionDelay: `${(idx + 1) * 80}ms` }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-white/[0.06]">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider font-mono">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-medium text-zinc-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80"></span>
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-zinc-400">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-normal pl-3">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Chips in Footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {group.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-white/5 text-[10px] font-mono text-zinc-400"
                    >
                      {s.name}
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
