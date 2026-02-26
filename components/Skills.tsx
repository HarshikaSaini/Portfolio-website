'use client';

import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Settings, TerminalSquare } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6 text-orange-500" />,
    color: 'bg-orange-50 border-orange-200 text-orange-700',
    skills: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Material-UI', 'HTML5/CSS3']
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-blue-500" />,
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'RESTful APIs', 'GraphQL', 'WebSockets']
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    skills: ['MongoDB', 'Redis', 'MySQL', 'Aurora', 'NoSQL']
  },
  {
    title: 'DevOps & Tools',
    icon: <Settings className="w-6 h-6 text-purple-500" />,
    color: 'bg-purple-50 border-purple-200 text-purple-700',
    skills: ['Git/GitHub', 'Docker', 'AWS', 'GCP', 'CI/CD', 'Kafka', 'Grafana']
  },
  {
    title: 'Languages',
    icon: <Code2 className="w-6 h-6 text-pink-500" />,
    color: 'bg-pink-50 border-pink-200 text-pink-700',
    skills: ['Java', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Methodologies',
    icon: <TerminalSquare className="w-6 h-6 text-indigo-500" />,
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    skills: ['Agile', 'Scrum', 'System Design']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Technical Arsenal</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-lg shadow-slate-200/40 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl ${category.color.split(' ')[0]} bg-opacity-50`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-xl text-sm font-bold border ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
