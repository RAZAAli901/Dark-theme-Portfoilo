"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10 max-w-7xl mx-auto w-full">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mb-16 flex flex-wrap gap-4 justify-between items-end"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-white/50 max-w-xl text-lg">
            A selection of my recent work in web development, AI integration, and systems engineering.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group glass-card overflow-hidden flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden bg-surface-light border-b border-white/5">
              {/* Dummy Image Fallback if real image is missing */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
                [Project Preview Image]
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 mb-6 flex-grow">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-primary-light bg-primary/10 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
                >
                  Live Link
                </a>
                <a 
                  href={project.githubLink}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center py-2.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center flex-col items-center">
         <motion.a 
            href={portfolioData.socials.github} 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-btn px-8 py-3 bg-surface border border-white/20 rounded-full text-white/90 hover:text-white transition-colors"
         >
            View All Projects onto GitHub
         </motion.a>
      </div>
    </section>
  );
}
