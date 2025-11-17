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
};

const projectImage = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d5d3d606-bbe9-49c8-ae9b-ce8459c9429a-gn2tymhbk96d-space-minimax-io/assets/icons/neo_keanu_reeves_matrix_iconic_portrait-1.jpg';

const projectsData: Project[] = [
  {
    name: 'E-COMMERCE PLATFORM',
    category: 'FULL-STACK',
    tech: 'Next.js, TypeScript, Stripe',
    image: projectImage,
    description: "A modern e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
    features: [
      'Payment Integration',
      'Real-time Analytics',
      'Admin Dashboard',
      'Responsive Design',
      'SEO Optimized',
      'Progressive Web App',
    ],
  },
  {
    name: 'AI CHAT APPLICATION',
    category: 'FRONTEND',
    tech: 'React, WebSockets, OpenAI',
    image: projectImage,
    description: 'An intelligent chat application powered by AI with real-time messaging, sentiment analysis, and smart reply suggestions. Features a sleek, modern interface.',
    features: [
      'Real-time Messaging',
      'AI Integration',
      'Sentiment Analysis',
      'Smart Replies',
      'Dark Mode',
      'Voice Input',
    ],
  },
  {
    name: 'ANALYTICS DASHBOARD',
    category: 'DATA VISUALIZATION',
    tech: 'Vue.js, D3.js, Node.js',
    image: projectImage,
    description: 'Comprehensive analytics dashboard with interactive data visualizations, real-time updates, and customizable reports for business intelligence.',
    features: [
      'Interactive Charts',
      'Real-time Updates',
      'Custom Reports',
      'Data Export',
      'Multi-user Support',
      'API Integration',
    ],
  },
  {
    name: 'MOBILE FITNESS APP',
    category: 'MOBILE',
    tech: 'React Native, Firebase',
    image: projectImage,
    description: 'Cross-platform fitness tracking application with workout plans, progress tracking, and social features to keep users motivated and engaged.',
    features: [
      'Workout Tracking',
      'Progress Analytics',
      'Social Features',
      'Offline Mode',
      'Push Notifications',
      'Wearable Integration',
    ],
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
                            className="matrix-card rounded-lg overflow-hidden group cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black-alpha-80 to-transparent"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="matrix-font text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="matrix-title text-2xl font-black mb-2">{project.name}</h3>
                                    <p className="matrix-font text-sm text-green-400">{project.tech}</p>
                                </div>

                                <p className="matrix-font text-sm leading-relaxed text-muted-foreground line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="space-y-2">
                                    <h4 className="font-display text-sm font-semibold text-green-400 uppercase">Key Features:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.features.slice(0, 3).map((feature) => (
                                            <span 
                                                key={feature} 
                                                className="matrix-font text-xs px-2 py-1 border border-green-500/50 rounded-sm"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="matrix-button w-full px-4 py-2 text-sm">
                                    VIEW PROJECT
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;