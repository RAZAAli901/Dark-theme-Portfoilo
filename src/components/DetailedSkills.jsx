"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function DetailedSkills() {
  const { row1, row2 } = portfolioData.detailedSkills;
  
  // Custom infinite scrolling track component
  const ScrollTrack = ({ items, reverse = false, speed = "35s" }) => {
    const doubled = [...items, ...items, ...items];
    return (
      <div className="flex w-max overflow-hidden relative  py-4">
        <div 
          className="flex gap-6 w-max"
          style={{ 
            animation: `${reverse ? 'marqueeRight' : 'marqueeLeft'} ${speed} linear infinite` 
          }}
        >
          {doubled.map((skill, i) => (
            <div 
              key={i} 
              className="glass-card px-8 py-6 flex items-center gap-4 min-w-[200px] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]"
            >
              <div className="text-3xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="font-semibold text-white/80 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 mt-8 relative overflow-hidden z-10 w-full">
      {/* Background Video placeholder - simple dark gradient fallback */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(76,29,149,0.1)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary-light">&lt;</span> Technologies <span className="text-primary-light">/&gt;</span>
          </h2>
          <p className="text-white/50 max-w-2xl text-lg">
            Tools and frameworks I use to build scalable, high-performance applications.
          </p>
        </motion.div>
      </div>

      {/* Marquee Tracks Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 z-10 pt-4 pb-12">
         {/* Fade masks */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050510] to-transparent z-20 pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050510] to-transparent z-20 pointer-events-none" />

         <ScrollTrack items={row1} speed="40s" />
         <ScrollTrack items={row2} reverse speed="45s" />
      </div>
    </section>
  );
}
