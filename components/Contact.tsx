'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-orange-200 via-pink-200 to-blue-200 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/60 backdrop-blur-3xl p-12 md:p-20 rounded-[3rem] border border-white shadow-2xl shadow-slate-200/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-6 inline-block">
            What&apos;s Next?
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8">Let&apos;s Work Together</h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a
            href="mailto:harshikasaini1415@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 w-full sm:w-auto justify-center"
          >
            <Mail className="w-6 h-6" />
            Say Hello
          </a>
          <a
            href="tel:+919718832180"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-lg rounded-full border-2 border-slate-200 transition-all hover:scale-105 hover:border-slate-300 w-full sm:w-auto justify-center"
          >
            <Phone className="w-6 h-6" />
            +91 9718832180
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-8"
        >
          <a
            href="https://github.com/HarshikaSaini"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-900 hover:scale-110 transition-all shadow-sm"
          >
            <Github className="w-8 h-8" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/harshika-saini"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:scale-110 transition-all shadow-sm"
          >
            <Linkedin className="w-8 h-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
