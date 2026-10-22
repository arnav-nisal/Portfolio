import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 reveal-on-scroll">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            04 / Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Experience & Education
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Software engineering internship and university degree trajectory.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {experienceData.map((item, idx) => {
            const isInternship = item.type === 'Internship';
            
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between card-fluid reveal-on-scroll"
                style={{ transitionDelay: `${(idx + 1) * 80}ms` }}
              >
                <div>
                  {/* Top Bar with Type and Period */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg bg-zinc-900 border border-white/10 ${
                        isInternship ? 'text-emerald-400' : 'text-blue-400'
                      }`}>
                        {isInternship ? (
                          <Briefcase className="w-4 h-4" />
                        ) : (
                          <GraduationCap className="w-4 h-4" />
                        )}
                      </div>
                      <span className="text-xs font-mono text-zinc-300 font-medium">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4">
                    <span className="text-zinc-300 font-medium">{item.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      Pune, India
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Technologies Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-white/5 text-[11px] font-mono text-zinc-300"
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
