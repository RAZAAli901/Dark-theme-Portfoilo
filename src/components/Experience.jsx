"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const experiences = portfolioData.experience.filter(e => e.type === "work");
  const education = portfolioData.experience.filter(e => e.type === "education");

  const Card = ({ item, index }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:bg-primary/20 transition-all duration-500" />
      
      <div className="relative z-10">
        <span className="text-primary-light font-mono text-sm mb-2 block">{item.date}</span>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
        <span className="text-white/60 font-medium block mb-4">{item.entity}</span>
        <p className="text-white/70 leading-relaxed mb-6">{item.description}</p>
        
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {item.tags.map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 px-6 md:px-12 relative z-10 max-w-7xl mx-auto w-full">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-white/90 mb-2 flex items-center gap-3">
             <span className="text-primary">✦</span> Education
          </h3>
          {education.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Experience Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-white/90 mb-2 flex items-center gap-3">
             <span className="text-primary">✦</span> Professional Experience
          </h3>
          {experiences.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
