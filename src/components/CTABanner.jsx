"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden glass-card border border-primary/20 p-10 md:p-16 text-center shadow-[0_0_80px_rgba(124,58,237,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
          {/* Animated decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Interested in working together?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              I&apos;m always open to discussing product design work or partnership opportunities. Let&apos;s create something impactful.
            </p>
            <Link 
              href="#contact"
              className="glow-btn px-10 py-5 bg-white text-black text-lg font-bold rounded-xl transition-all hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
