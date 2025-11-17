"use client";

import { useState } from "react";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b-[2px] border-[rgba(16,185,129,0.5)] shadow-[0_0_5px_#00ff00]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="font-display text-2xl font-bold text-primary uppercase [text-shadow:0_0_5px_theme(colors.primary)]">
              PORTFOLIO
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-body text-primary uppercase text-base hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              className="md:hidden font-body uppercase text-primary border-2 border-primary rounded px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-secondary/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-6 py-8">
              {navItems.map((item) => (
                <a
                  key={`mobile-${item.name}`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-body text-primary uppercase text-lg hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;