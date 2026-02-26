'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
    >
      <div className="font-mono text-lg font-black tracking-tighter text-slate-900">
        <a href="#top" className="hover:text-orange-500 transition-colors flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 text-white flex items-center justify-center text-sm">HS</span>
          Harshika.
        </a>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
        <a href="#experience" className="hover:text-orange-500 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-orange-500 transition-colors">Skills</a>
        <a href="#education" className="hover:text-orange-500 transition-colors">Education</a>
      </nav>

      <div className="flex items-center gap-4 text-slate-600">
        <a href="https://github.com/HarshikaSaini" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-colors">
          <Github className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/harshika-saini" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100 hover:text-blue-600 transition-colors">
          <Linkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:harshikasaini1415@gmail.com" className="p-2 rounded-full hover:bg-slate-100 hover:text-orange-500 transition-colors">
          <Mail className="w-5 h-5" />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </motion.header>
  );
}
