"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const { name, roles, description, initials } = portfolioData.personal;

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center pt-32 md:pt-40 pb-12 overflow-hidden px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative mt-8">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-primary-light animate-pulse" style={{ animationDirection: 'alternate-reverse', animationDuration: '1s' }} />
            <span className="text-sm font-medium text-white/80">
              {roles.join(" • ")}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Hi, I&apos;m <br />
            <span className="gradient-text">{name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Link 
              href="#projects" 
              className="glow-btn px-8 py-4 bg-primary text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:-translate-y-1"
            >
              View Projects
            </Link>
            <a 
              href={portfolioData.personal.resumeLink} 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl transition-all hover:bg-white/10 hover:-translate-y-1"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Content - Floating Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative lg:ml-auto w-full max-w-md aspect-square flex items-center justify-center mx-auto"
        >
          {/* Decorative glowing background rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-16 rounded-full border border-primary/20 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Main Avatar */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent-dark p-1 shadow-[0_0_60px_rgba(124,58,237,0.3)] z-10"
          >
            <div className="w-full h-full rounded-full bg-[#050510] flex items-center justify-center overflow-hidden border-4 border-[#050510]">
              {/* Replace with actual image when available */}
              <div className="text-7xl font-black text-white/20 select-none">
                {initials}
              </div>
            </div>
          </motion.div>

          {/* Floating Tech Icons in Background */}
          {portfolioData.detailedSkills.row1.slice(0, 3).map((skill, index) => (
            <motion.div
              key={skill.name}
              animate={{ 
                y: [-8, 8, -8], 
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 4 + index, 
                repeat: Infinity, 
                delay: index * 0.5 
              }}
              className="absolute glass-card w-14 h-14 flex items-center justify-center text-2xl z-20 shadow-xl"
              style={{
                top: `${20 + index * 30}%`,
                left: index % 2 === 0 ? '10%' : '80%',
              }}
            >
              {skill.icon}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
