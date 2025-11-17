"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';

type ExperienceCategory = 'work' | 'education' | 'certification' | 'achievement';

type Experience = {
  id: number;
  category: ExperienceCategory;
  date: string;
  title: string;
  company: string;
  description: string;
  image?: string;
  alt: string;
  skills?: string[];
};

const experienceData: Experience[] = [
  {
    id: 1,
    category: 'work',
    date: '2023 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise web applications using React, Next.js, and Node.js. Architecting scalable solutions and mentoring junior developers.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d5d3d606-bbe9-49c8-ae9b-ce8459c9429a-gn2tymhbk96d-space-minimax-io/assets/images/matrix_digital_rain_green_code_background-5.jpg',
    alt: 'Senior Full-Stack Developer',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  {
    id: 2,
    category: 'work',
    date: '2021 - 2023',
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed responsive web applications and implemented modern UI/UX designs. Collaborated with cross-functional teams to deliver high-quality products.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d5d3d606-bbe9-49c8-ae9b-ce8459c9429a-gn2tymhbk96d-space-minimax-io/assets/images/matrix-resurrections-official-movie-poster-digital-6.jpg',
    alt: 'Frontend Developer',
    skills: ['React', 'Vue.js', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    category: 'education',
    date: '2017 - 2021',
    title: 'Bachelor of Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors. Specialized in software engineering and web development. Active member of the coding club.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d5d3d606-bbe9-49c8-ae9b-ce8459c9429a-gn2tymhbk96d-space-minimax-io/assets/images/neo-keanu-reeves-matrix-sunglasses-portrait-black--7.jpg',
    alt: 'Bachelor of Computer Science',
  },
  {
    id: 4,
    category: 'certification',
    date: '2022',
    title: 'AWS Certified Solutions Architect',
    company: 'Amazon Web Services',
    description: 'Professional certification demonstrating expertise in designing distributed systems on AWS platform.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d5d3d606-bbe9-49c8-ae9b-ce8459c9429a-gn2tymhbk96d-space-minimax-io/assets/images/the-matrix-1999-official-movie-poster-neo-trinity--2.jpg',
    alt: 'AWS Certified Solutions Architect',
  },
  {
    id: 5,
    category: 'achievement',
    date: '2023',
    title: 'Open Source Contributor',
    company: 'Various Projects',
    description: 'Active contributor to major open-source projects with over 500 commits. Maintaining popular npm packages used by thousands of developers.',
    alt: 'Open Source Contributor',
  },
];

const ExperienceSection = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const filters: string[] = ['ALL', 'WORK', 'EDUCATION', 'CERTIFICATION', 'ACHIEVEMENT'];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredExperience = experienceData.filter(item =>
    activeFilter === 'ALL' || item.category.toUpperCase() === activeFilter
  );

  return (
    <section id="experience" className="py-20 px-6 relative dark" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            PROFESSIONAL<br />
            <span className="text-accent">JOURNEY</span>
          </h2>
          <p className="font-body text-xl text-muted">Career milestones and continuous learning</p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'matrix-button px-6 py-3 rounded-none transition-all duration-300',
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-green-alpha-20'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <div className="space-y-8">
          {filteredExperience.map((item, index) => (
            <motion.article 
              key={item.id} 
              className="matrix-card rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
            >
              <div className="grid md:grid-cols-3 gap-6 p-6">
                {item.image && (
                  <motion.div 
                    className="md:col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={400}
                      height={400}
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </motion.div>
                )}
                <div className={cn(item.image ? 'md:col-span-2' : 'md:col-span-3')}>
                  <div className="space-y-4 flex flex-col h-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-label font-body">{item.category}</span>
                      <span className="font-body text-sm text-muted">{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display uppercase text-primary" style={{ textShadow: "0 0 5px var(--primary), 0 0 10px var(--primary)" }}>
                      {item.title}
                    </h3>
                    <p className="font-body text-green-400 font-semibold">
                      {item.company}
                    </p>
                    <p className="font-body text-muted-foreground leading-relaxed flex-grow">
                      {item.description}
                    </p>
                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <motion.span 
                            key={skill}
                            className="matrix-border rounded px-3 py-1 text-sm text-green-400"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;