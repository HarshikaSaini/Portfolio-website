'use client';

import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 text-center text-slate-500 font-bold text-sm border-t border-slate-200 bg-slate-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2">
          Designed & Built by{' '}
          <a
            href="https://github.com/HarshikaSaini"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 hover:text-orange-600 transition-colors"
          >
            Harshika Saini
          </a>
        </p>
        <p className="text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
