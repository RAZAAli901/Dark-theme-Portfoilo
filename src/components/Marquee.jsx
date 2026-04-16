"use client";

import { portfolioData } from "@/data/portfolio";

export default function Marquee() {
  const { marqueeSkills } = portfolioData;
  const doubledSkills = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills];

  return (
    <div className="relative py-6 bg-[#0a0a1a]/80 border-y border-white/5 overflow-hidden flex items-center z-10 w-full">
      {/* Fade Gradients for smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050510] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050510] to-transparent z-10" />
      
      <div className="marquee-track flex w-max">
        {doubledSkills.map((skill, i) => (
          <div key={i} className="flex items-center gap-3 text-white/50 px-4 group hover:text-white/80 transition-colors cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:shadow-[0_0_8px_#7c3aed] transition-shadow" />
            <span className="text-sm font-mono tracking-wide">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
