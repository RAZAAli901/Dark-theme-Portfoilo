"use client";

import { motion } from "framer-motion";

export default function QuoteBlock() {
  return (
    <section className="py-24 mt-16 mb-8 px-6 md:px-12 relative z-10 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative quotes */}
          <span className="absolute -top-12 -left-8 md:-left-16 text-8xl text-white/[0.03] font-serif leading-none select-none">"</span>
          <span className="absolute -bottom-16 -right-8 md:-right-16 text-8xl text-white/[0.03] font-serif leading-none select-none">"</span>
          
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white/90 mb-6">
            &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;
          </h2>
          <p className="text-primary-light font-mono text-sm tracking-widest uppercase">
            &mdash; Cory House
          </p>
        </motion.div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto mt-24 section-divider" />
    </section>
  );
}
