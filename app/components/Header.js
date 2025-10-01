// app/components/Header.js
'use client';

import React, { useState, useEffect } from 'react';
import { Home, User, FolderKanban, Award, Download } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "#hero", icon: <Home size={24} /> },
  { name: "About Me", href: "#about", icon: <User size={24} /> },
  { name: "Portofolio", href: "#projects", icon: <FolderKanban size={24} /> },
  { name: "My Skills", href: "#skills", icon: <Award size={24} /> },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveLink = navLinks.find(link => link.href === `#${entry.target.id}`);
            if (newActiveLink) {
              setActiveLink(newActiveLink.name);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    // Mengamati setiap section kecuali tautan Download CV
    navLinks.forEach(link => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Navigasi Desktop */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-50 bg-[#121212] bg-opacity-70 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-20 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#A06CFF] hover:text-white transition-colors duration-300">
            Porto.me
          </div>
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-white hover:text-[#A06CFF] transition-colors duration-300 ${activeLink === link.name ? 'text-[#A06CFF]' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1fEkdvZlBP7F8Nur41UMlqwQg_gpZVE8y/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A06CFF] border border-[#A06CFF] px-6 py-2 rounded-lg hover:bg-[#A06CFF] hover:text-white transition-colors duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </nav>
        </div>
      </header>

      {/* Navigasi Mobile */}
      <footer className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-sm mx-auto z-50 bg-[#2a2a2a] bg-opacity-90 backdrop-blur-md rounded-[20px] shadow-2xl border border-[#3b3b3b]">
        <nav className="flex justify-around items-center h-16">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`flex flex-col items-center justify-center p-3 m-1 rounded-[16px] transition-all duration-300
                ${activeLink === link.name 
                  ? 'text-[#A06CFF] shadow-lg'
                  : 'text-gray-400 hover:text-[#A06CFF] hover:bg-[#3b3b3b]'}`}
            >
              {link.icon}
              {activeLink === link.name && (
                <span className="text-xs font-medium mt-1 animate-fadeIn">{link.name}</span>
              )}
            </a>
          ))}
          {/* Tombol Download CV di navigasi mobile */}
          <a 
            href="https://drive.google.com/file/d/1fEkdvZlBP7F8Nur41UMlqwQg_gpZVE8y/view?usp=drive_link" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 m-1 rounded-[16px] transition-all duration-300 text-gray-400 hover:text-[#A06CFF] hover:bg-[#3b3b3b]"
          >
            <Download size={24} />
            <span className="text-xs font-medium mt-1 animate-fadeIn">Download CV</span>
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Header;