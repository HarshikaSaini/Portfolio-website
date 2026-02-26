'use client';

import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'APJ Abdul Kalam Technical University',
    period: '2021 - 2023',
    score: 'CGPA: 7.8 / 75.6%'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Chaudhary Charan Singh University',
    period: '2018 - 2021',
    score: 'CGPA: 7.2'
  }
];

const achievements = [
  'Solved 500+ DSA Questions on platforms like LeetCode',
  'Secured 2nd Position in CodeAI (hackathon) among 300 participants',
  'Achieved 50-day streak badge on LeetCode, refining algorithmic thinking',
  'Recognized for contributing to continuous learning culture with 100+ hours of self-learning at Namaste Dev'
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Education & Achievements</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">My academic background and competitive programming milestones.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-slate-900">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/40 border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-slate-900 max-w-[70%]">{edu.degree}</h4>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold font-mono shrink-0">{edu.period}</span>
                </div>
                <p className="text-slate-600 mb-6 text-lg">{edu.institution}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm">
                  <BookOpen className="w-4 h-4" />
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-slate-900">Achievements</h3>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/40 border border-slate-100">
              <ul className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed font-medium">{achievement}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
