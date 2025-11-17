"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 px-6 bg-black/90 border-t border-green-500">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="matrix-title text-3xl font-black text-primary">PORTFOLIO</div>
            <p className="matrix-font text-gray-300 leading-relaxed">
              Let's build something extraordinary together. Available for freelance projects and full-time opportunities.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="matrix-border w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-alpha-20 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="matrix-font text-xs">GH</span>
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="matrix-border w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-alpha-20 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="matrix-font text-xs">IN</span>
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="matrix-border w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-alpha-20 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="matrix-font text-xs">TW</span>
              </motion.a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold matrix-title text-green-400">QUICK LINKS</h3>
            <nav className="space-y-3">
              <a href="#home" className="block matrix-font text-white hover:text-green-400 transition-colors duration-300">
                Home
              </a>
              <a href="#projects" className="block matrix-font text-white hover:text-green-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#skills" className="block matrix-font text-white hover:text-green-400 transition-colors duration-300">
                Skills
              </a>
              <a href="#experience" className="block matrix-font text-white hover:text-green-400 transition-colors duration-300">
                Experience
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold matrix-title text-green-400">GET IN TOUCH</h3>
            <div className="space-y-3">
              <a href="mailto:hello@example.com" className="block matrix-font text-gray-300 hover:text-green-400 transition-colors">
                hello@example.com
              </a>
              <a href="tel:+1234567890" className="block matrix-font text-gray-300 hover:text-green-400 transition-colors">
                +1 (234) 567-890
              </a>
              <p className="matrix-font text-gray-400 text-sm">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="matrix-font text-sm text-gray-400">© 2025 Portfolio. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <div className="matrix-font text-sm text-gray-400">Designed & Built with passion</div>
              <div className="w-px h-4 bg-green-500/30"></div>
              <div className="matrix-font text-sm text-green-400">Code is poetry.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 matrix-font text-xs text-green-500 animate-pulse">
          01000011 01101111 01100100 01100101
        </div>
        <div className="absolute top-1/4 right-1/4 matrix-font text-xs text-green-500 animate-pulse">
          01000011 01110010 01100101 01100001
        </div>
        <div className="absolute bottom-1/4 left-1/3 matrix-font text-xs text-green-500 animate-pulse">
          01001001 01101110 01101110 01101111
        </div>
      </div>
    </footer>
  );
};

export default Footer;