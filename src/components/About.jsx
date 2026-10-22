import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-[#1f1f24]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Background, focus areas, and industry experience.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a <strong className="text-white">19-year-old B.Tech Computer Science and Engineering student at DES Pune University</strong>. My core engineering focus is on <strong className="text-white">building intelligent systems</strong>—spanning local AI model deployment, quantized neural networks, and embedded IoT hardware.
            </p>
            <p>
              I work across the software stack: from taking computer vision models (such as YOLOv11-seg) and optimizing them for edge devices via TFLite and WebAssembly, to engineering high-performance cross-platform mobile applications with <strong className="text-white">Expo, React Native, and Flutter</strong>.
            </p>
            <p className="text-zinc-400 text-sm">
              Completed a frontend software engineering internship at <strong className="text-zinc-200">Manman Manufacturing</strong> (1 year ago), building internal web applications and user interfaces for production operations.
            </p>
          </div>

          {/* Quick Context Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-xl bg-[#0e0e11] border border-[#222227]">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-4 h-4 text-zinc-400" />
                <h3 className="text-sm font-semibold text-white">Work Experience</h3>
              </div>
              <p className="text-xs text-zinc-400 font-mono">Manman Manufacturing • 1 Year Ago</p>
              <p className="text-xs text-zinc-300 mt-1.5 leading-normal">
                Frontend Software Engineering Intern: Engineered responsive user interfaces and internal web applications for manufacturing operations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0e0e11] border border-[#222227]">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-4 h-4 text-zinc-400" />
                <h3 className="text-sm font-semibold text-white">Education</h3>
              </div>
              <p className="text-xs text-zinc-400 font-mono">DES Pune University</p>
              <p className="text-xs text-zinc-300 mt-1.5 leading-normal">
                B.Tech in Computer Science and Engineering (Undergraduate, 19 years old). Focus on systems engineering, computer vision, and machine learning.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
