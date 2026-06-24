import React from "react";
import { Sparkles, ArrowRight, Github, Instagram, Linkedin, FileText, Coffee } from "lucide-react";
import { motion } from "motion/react";
import { professionalSummary } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-24 md:py-36">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00ff9d]/5 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/3 rounded-full bg-[#00f0ff]/5 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 rounded-full border border-[#00ff9d]/20 bg-[#00ff9d]/5 px-3.5 py-1.5 text-xs font-medium text-[#00ff9d]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="font-mono uppercase tracking-wider">AVAILABLE_FOR: SENIOR SDET & AUTOMATION ARCHITECT</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hi, I'm <span className="bg-gradient-to-r from-[#00ff9d] via-[#00f0ff] to-[#00ff9d] bg-clip-text text-transparent">Akshay Babu</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-xl font-bold tracking-tight text-slate-300 sm:text-2xl font-mono"
            >
              <span className="text-[#00f0ff]">&lt;</span>Senior SDET & Test Automation Specialist <span className="text-[#00f0ff]">/&gt;</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto text-base text-slate-400 leading-relaxed"
            >
              {professionalSummary.bio}
            </motion.p>
          </div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-8 border-y border-[#1a233d] py-6 max-w-md mx-auto"
          >
            <div>
              <div className="font-display text-3xl font-bold text-white sm:text-4xl">{professionalSummary.yearsOfExperience}</div>
              <div className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">Years Exp</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-[#00ff9d] sm:text-4xl">{professionalSummary.totalProjects}</div>
              <div className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">Client Projects</div>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              id="cta-contact-btn"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-[#00ff9d] to-[#00f0ff] px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-[#00ff9d]/10 transition-all hover:scale-[1.02] hover:shadow-[#00ff9d]/20 active:scale-95 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              id="cta-resume-btn"
              href="https://drive.google.com/file/d/1wyWM8hlNsG4lhiX19TCa3U2Dx_47Cdkd/view?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-xl border border-[#00ff9d]/30 bg-[#00ff9d]/5 px-8 py-3.5 text-sm font-semibold text-[#00ff9d] transition-all hover:border-[#00ff9d]/60 hover:bg-[#00ff9d]/10 cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
            <button
              id="cta-experience-btn"
              onClick={() => scrollToSection("experience")}
              className="inline-flex items-center space-x-2 rounded-xl border border-[#1a233d] bg-[#0d1222]/40 px-8 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-[#00f0ff]/30 hover:bg-[#0d1222]/80 cursor-pointer font-mono text-xs tracking-wider"
            >
              <span>View Experience</span>
            </button>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mr-2">CONNECT:</span>
            <a
              href="https://github.com/akshaybabu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-lg border border-[#1a233d] bg-[#0d1222]/40 px-3.5 py-2 font-mono text-xs text-slate-300 transition-all hover:border-[#00f0ff]/30 hover:bg-[#0d1222] hover:text-[#00f0ff]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/anthoorveettilakshaybabu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-lg border border-[#1a233d] bg-[#0d1222]/40 px-3.5 py-2 font-mono text-xs text-slate-300 transition-all hover:border-[#00f0ff]/30 hover:bg-[#0d1222] hover:text-[#00f0ff]"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/achu_1215/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-lg border border-[#1a233d] bg-[#0d1222]/40 px-3.5 py-2 font-mono text-xs text-slate-300 transition-all hover:border-[#00f0ff]/30 hover:bg-[#0d1222] hover:text-[#00f0ff]"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>
            <a
              href="https://buymeacoffee.com/akshaybabu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-lg border border-[#00ff9d]/20 bg-[#00ff9d]/5 px-3.5 py-2 font-mono text-xs text-[#00ff9d] transition-all hover:border-[#00ff9d]/40 hover:bg-[#00ff9d]/10"
            >
              <Coffee className="h-4 w-4 text-[#00ff9d]" />
              <span>Buy Me a Coffee</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
