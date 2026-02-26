'use client';

import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';
import Image from 'next/image';
import myImage from '../public/Harshika_image.jpg';


export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 overflow-hidden bg-slate-50">
      {/* Vibrant Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-orange-300 to-pink-400 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-blue-300 to-emerald-300 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-orange-600 font-mono text-sm font-bold inline-flex items-center gap-2 mb-8">
              <Terminal className="w-4 h-4" /> Hello World
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]"
          >
            I&apos;m <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Harshika</span><br />Saini.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-600 mb-8"
          >
            I build scalable, vibrant digital experiences.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl text-lg text-slate-600 leading-relaxed mb-10"
          >
            Fullstack Software Engineer with 2+ years of experience building end-to-end React/TypeScript frontends and Node.js/Java backend services. Passionate about creating reusable components and performant APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:harshikasaini1415@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-full border-2 border-slate-200 transition-all hover:scale-105 hover:border-slate-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="order-1 lg:order-2 relative mx-auto w-full max-w-md aspect-square lg:max-w-lg"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
            className="relative w-full h-full"
          >
            {/* Decorative backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-purple-500 rounded-[3rem] rotate-6 opacity-60 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500 to-pink-500 rounded-[3rem] -rotate-6 opacity-60 blur-xl" />
            
            {/* Main Image - Replace the src with your actual image URL */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-white">
              <Image 
                src={myImage}
                alt="Harshika Saini" 
                fill 
                className="object-cover" 
                referrerPolicy="no-referrer"
                priority
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                ⚛️
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Frontend</p>
                <p className="font-black text-slate-800">React & TS</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                ☕
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Backend</p>
                <p className="font-black text-slate-800">Java & Node</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
