"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function EncryptionBlock() {
  const [bgText, setBgText] = useState("");

  useEffect(() => {
    // Generate static matrix-like background text on mount
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let fullText = '';
    for (let i = 0; i < 200; i++) {
        let snippet = '';
        for (let k = 0; k < 12; k++) snippet += chars[Math.floor(Math.random()*chars.length)];
        fullText += snippet + ' ';
    }
    setTimeout(() => setBgText(fullText), 0);
    
    // Periodically update some segments for visual noise
    const interval = setInterval(() => {
       setBgText(prev => {
          let updated = '';
          for (let i = 0; i < 200; i++) {
             if (Math.random() > 0.95) {
                 for (let k = 0; k < 12; k++) updated += chars[Math.floor(Math.random()*chars.length)];
                 updated += ' ';
             } else {
                 updated += prev.split(' ')[i] + ' ';
             }
          }
          return updated;
       });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[500px] flex flex-col items-center justify-center py-32 mt-16 bg-[#06060f] overflow-hidden z-10 w-full border-t border-white/5">
      {/* Background Matrix/Encryption Text */}
      <div className="absolute inset-0 z-0 p-4 opacity-10 flex flex-wrap content-start font-mono text-[10px] sm:text-xs text-[#a855f7] break-all leading-relaxed pointer-events-none overflow-hidden select-none" style={{ animation: 'codeFlicker 4s ease-in-out infinite' }}>
         {bgText}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Lock */}
        <div className="relative flex flex-col items-center mb-8">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-12 h-10 border-4 border-primary-light border-b-0 rounded-t-[24px] -mb-1 relative z-10"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-20 h-16 rounded-xl bg-gradient-to-br from-primary-dark to-accent-dark border-2 border-primary-light/60 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.5)] z-20 relative overflow-hidden"
          >
             {/* Keyhole */}
             <div className="w-3 h-3 rounded-full bg-black/60 relative">
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-3 bg-black/60 rounded-b-sm" />
             </div>
             {/* sweeping highlight */}
             <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_infinite]" />
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 10, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-1/2 px-3 py-1 bg-accent rounded-lg text-[10px] font-bold tracking-wider uppercase shadow-lg z-30 transform -translate-y-1/2"
          >
            Encryption
          </motion.div>
        </div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          Secure Your Data with <br />
          <span className="gradient-text">End-to-End Encryption</span>
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white/50 text-center max-w-xl text-lg"
        >
          Building reliable security architectures from the ground up to protect user privacy and internal data streams.
        </motion.p>
      </div>
    </section>
  );
}
