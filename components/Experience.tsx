'use client';

import { motion } from 'motion/react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Associate Software Engineer',
    company: 'Info Origin Technologies Pvt Ltd.',
    location: 'Noida, UP',
    period: 'Dec 2024 - Present',
    color: 'from-orange-500 to-pink-500',
    description: [
      'Designed and developed scalable backend services using Java and Spring Boot, following clean architecture and microservices best practices.',
      'Implemented RESTful APIs and integrated asynchronous data pipelines using Kafka, ensuring reliable and high-throughput data processing.',
      'Worked with relational databases (Aurora/MySQL) using Hibernate to design optimized schemas and improve query performance by 60%.',
      'Architected reusable React component libraries with TypeScript accelerating feature velocity 30% through atomic design principles and design system governance.',
      'Engineered performant RESTful APIs using Node.js/Express and MongoDB, leveraging Redis pub/sub messaging systems and scaling to 15K+ requests per minute.',
      'Configured CI/CD pipelines and deployed an enterprise-grade private NPM registry via Verdaccio, streamlining monorepo dependencies and enabling semantic versioning across 5+ teams.',
      'Led Agile sprints in Jira, achieving 100% velocity commitments through automated testing (Jest/Cypress) and Grafana SLO monitoring.'
    ]
  },
  {
    id: 2,
    role: 'UI Developer',
    company: 'Aero Aegis',
    location: 'Bangalore, KA',
    period: 'May 2024 - Dec 2024',
    color: 'from-blue-500 to-emerald-500',
    description: [
      'Implemented JWT/RBAC authentication, boosting retention 20%, and collaborated on CI/CD workflows using GitHub Actions.',
      'Created dashboards with <100ms latency and reduced load times 25% via code-splitting.',
      'Developed real-time chat feature built with React, Apache Charts, Socket.io, MongoDB, and JWT authentication.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Professional Journey</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">My track record of building scalable systems and beautiful interfaces.</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Colorful gradient accent line */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${exp.color} rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} p-0.5 shrink-0 shadow-lg`}>
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-slate-800" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-bold text-slate-600">
                      {exp.company}
                    </p>
                    <p className="text-slate-500 flex items-center gap-2 mt-2 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-mono text-sm font-bold shrink-0">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {exp.description.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
