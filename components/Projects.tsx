'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import devTinder from '../public/devtinder.png';
import video from '../public/youtube.png';

const projects = [
  {
    id: 1,
    title: 'DevTinder Application',
    description: 'Real-time networking platform built with React, Node.js, Socket.io, MongoDB, and JWT authentication. Features include real-time chat, match algorithms, and scalable pub/sub messaging using Redis.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Tailwind'],
    link: 'https://devtinder-ui-ycxo.onrender.com/',
    image: devTinder,
    color: 'from-pink-500 to-orange-400',
    hrefLink:"https://github.com/HarshikaSaini/dev_tinder_frontend"
  },
  {
    id: 2,
    title: 'Video Hunt',
    description: 'Video streaming application enabling users to search and play videos based on preferences. Integrates YouTube/Vimeo APIs with React player, infinite scroll, and recommendation engine using React Query.',
    tech: ['React', 'Material-UI', 'React Query', 'Axios', 'HLS'],
    link: 'https://harshika-youtube.netlify.app/',
    image: video,
    color: 'from-blue-500 to-purple-500',
    hrefLink:"https://github.com/HarshikaSaini/ytclone"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">A selection of my recent full-stack applications and experiments.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-100">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10`} />
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Links */}
                <div className="absolute top-6 right-6 z-20 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href={project.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.hrefLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-1 text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl border border-slate-200/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
