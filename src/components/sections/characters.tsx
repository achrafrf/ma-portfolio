"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Project = {
  name: string;
  category: string;
  tech: string;
  image: string;
  description: string;
  features: string[];
  link?: string;
  github?: string;
};

const projectsData: Project[] = [
  {
    name: 'DATA FC',
    category: 'FULL-STACK',
    tech: 'Next.js, API',
    image: '/datafc.png',
    description: "A modern e-commerce platform with real-time inventory management, secure payment processing, and intuitive admin dashboard.",
    features: [
      'Payment Integration',
      'Real-time Analytics',
      'Admin Dashboard',
      'Responsive Design',
    ],
    link: '#',
    github: '#'
  },
  {
    name: 'ASHGHAL',
    category: 'FRONTEND',
    tech: 'React, WebSockets, OpenAI',
    image: '/ASHGHAL.png',
    description: 'Intelligent chat application powered by AI with real-time messaging and sentiment analysis.',
    features: [
      'Real-time Messaging',
      'AI Integration',
      'Sentiment Analysis',
      'Smart Replies',
    ],
    link: '#',
    github: '#'
  },
  {
    name: 'CONVERTER MORA',
    category: 'DATA VISUALIZATION',
    tech: 'Vue.js, D3.js, Node.js',
    image: '/convertermora.png',
    description: 'Analytics dashboard with interactive data visualizations and real-time updates.',
    features: [
      'Interactive Charts',
      'Real-time Updates',
      'Custom Reports',
      'Data Export',
    ],
    link: '#',
    github: '#'
  },
  {
    name: 'PROGASUR',
    category: 'MOBILE',
    tech: 'React Native, Firebase',
    image: '/progasur.png',
    description: 'Cross-platform fitness tracking application with workout plans and progress tracking.',
    features: [
      'Workout Tracking',
      'Progress Analytics',
      'Social Features',
      'Offline Mode',
    ],
    link: '#',
    github: '#'
  },
];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="projects" className="py-20 px-6 relative dark" ref={ref}>
            <div className="container mx-auto max-w-7xl">
                <motion.div 
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                    <h2 className="matrix-title text-5xl md:text-6xl font-black mb-4">
                        FEATURED<br />
                        <span className="text-green-400">PROJECTS</span>
                    </h2>
                    <p className="matrix-font text-xl text-green-300">
                        Innovative solutions built with cutting-edge technology
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.name}
                            className="matrix-card rounded-lg overflow-hidden group cursor-pointer h-full flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="relative flex-shrink-0">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black-alpha-80 to-transparent"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="matrix-font text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 space-y-4 flex-grow flex flex-col">
                                <div className="flex-grow">
                                    <h3 className="matrix-title text-xl font-black mb-2">{project.name}</h3>
                                    <p className="matrix-font text-sm text-green-400 mb-3">{project.tech}</p>
                                    
                                    <p className="matrix-font text-sm leading-relaxed text-muted-foreground line-clamp-2 mb-3">
                                        {project.description}
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="font-display text-xs font-semibold text-green-400 uppercase">Features:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {project.features.slice(0, 2).map((feature) => (
                                                <span 
                                                    key={feature} 
                                                    className="matrix-font text-xs px-2 py-1 border border-green-500/30 rounded-sm"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <button className="matrix-button flex-1 px-3 py-2 text-sm flex items-center justify-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        Code
                                    </button>
                                    <button className="matrix-button flex-1 px-3 py-2 text-sm flex items-center justify-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;