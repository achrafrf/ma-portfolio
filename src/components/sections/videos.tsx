'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  {
    id: 1,
    name: 'React & Next.js',
    description: 'Expert in building modern, performant web applications with React and Next.js frameworks',
    level: 95,
    category: 'FRONTEND',
    icon: '⚛️',
  },
  {
    id: 2,
    name: 'TypeScript',
    description: 'Strong typing and advanced TypeScript patterns for scalable applications',
    level: 90,
    category: 'FRONTEND',
    icon: '📘',
  },
  {
    id: 3,
    name: 'Node.js & APIs',
    description: 'Building robust backend services and RESTful APIs with Node.js and Express',
    level: 88,
    category: 'BACKEND',
    icon: '🟢',
  },
  {
    id: 4,
    name: 'Database Design',
    description: 'SQL and NoSQL database architecture, optimization, and management',
    level: 85,
    category: 'BACKEND',
    icon: '💾',
  },
  {
    id: 5,
    name: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces with attention to user experience',
    level: 87,
    category: 'DESIGN',
    icon: '🎨',
  },
  {
    id: 6,
    name: 'DevOps & CI/CD',
    description: 'Automated deployment pipelines, Docker, and cloud infrastructure',
    level: 82,
    category: 'DEVOPS',
    icon: '🚀',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 px-6 relative bg-black" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            TECHNICAL
            <br />
            <span className="text-green-400">EXPERTISE</span>
          </h2>
          <p className="font-body text-xl text-green-300">
            Comprehensive skill set across the full development stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="matrix-card rounded-lg overflow-hidden cursor-pointer group transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{skill.icon}</div>
                  <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold font-display text-foreground">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {skill.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400 font-semibold">Proficiency</span>
                    <span className="text-green-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-black matrix-border rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-400"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;