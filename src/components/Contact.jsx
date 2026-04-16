"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { email, phone, location } = portfolioData.personal;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10 max-w-7xl mx-auto w-full">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
        <p className="text-white/50 max-w-xl text-lg">
           Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-start gap-4 group">
             <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light group-hover:bg-primary/20 transition-colors">
               <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
             </div>
             <div>
               <h4 className="text-white/50 text-sm font-medium mb-1">Email</h4>
               <a href={`mailto:${email}`} className="text-white text-lg font-medium hover:text-primary-light transition-colors">{email}</a>
             </div>
          </div>

          <div className="flex items-start gap-4 group">
             <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light group-hover:bg-primary/20 transition-colors">
               <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
             </div>
             <div>
               <h4 className="text-white/50 text-sm font-medium mb-1">Phone</h4>
               <a href={`tel:${phone}`} className="text-white text-lg font-medium hover:text-primary-light transition-colors">{phone}</a>
             </div>
          </div>

          <div className="flex items-start gap-4 group">
             <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light group-hover:bg-primary/20 transition-colors">
               <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
             </div>
             <div>
               <h4 className="text-white/50 text-sm font-medium mb-1">Location</h4>
               <span className="text-white text-lg font-medium">{location}</span>
             </div>
          </div>
        </motion.div>

        {/* Contact Form (Right) */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <form className="glass-card p-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                <input type="text" id="name" placeholder="John Doe" className="bg-[#050510]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                <input type="email" id="email" placeholder="john@example.com" className="bg-[#050510]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-white/70">Subject</label>
              <input type="text" id="subject" placeholder="Project Inquiry" className="bg-[#050510]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." className="bg-[#050510]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light transition-colors resize-none"></textarea>
            </div>
            <button className="glow-btn mt-2 w-full py-4 bg-gradient-to-r from-primary-dark to-accent-dark hover:from-primary hover:to-accent text-white font-bold rounded-lg transition-all shadow-lg text-lg">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
