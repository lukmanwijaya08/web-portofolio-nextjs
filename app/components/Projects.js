// app/components/Projects.js
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react'; // Impor ExternalLink untuk tautan

const projectsData = [
  {
    title: "Dashboard Psikotes Online",
    description: "Membuat dashboard manajemen yang responsif untuk mengelola data.",
    // link: "#",
    image: "/images/proj-dashboard.png",
  },
  {
    title: "Mobile App Flutter BangSha",
    description: "Mengembangkan aplikasi mobile menggunakan Flutter dengan desain yang modern.",
    // link: "#",
    image: "/images/proj-flutter.png",
  },
  {
    title: "Dashboard POS RetailQ",
    description: "Mengembangkan aplikasi web menggunakan Laravel dan Tailwind dengan desain yang modern",
    // link: "#",
    image: "/images/pos-retailq.png", // Anda bisa mengganti ini dengan gambar yang sesuai
  },
  {
    title: "Frontend Website App SIPS DISHUB Kota Semarang",
    description: "Membangun aplikasi web interaktif dengan HTML, Css, Javascript dan Jquery.",
    // link: "#",
    image: "/images/fe-sipss.png", // Anda bisa mengganti ini dengan gambar yang sesuai
  },
  {
    title: "Frontend Web Portofolio",
    description: "Membangun aplikasi web portofolio menggunakan Next Js",
    // link: "#",
    image: "/images/fe-porto.png", // Anda bisa mengganti ini dengan gambar yang sesuai
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#1f1f1f] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A06CFF] to-[#D5A0FF]">Projects</span>
        </h2>
        
        {/* Grid Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl shadow-lg group transition-all duration-300 transform hover:scale-105"
            >
              {/* Gambar Proyek */}
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay dengan Informasi */}
              <div
                className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-end p-6
                           transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#D5A0FF]">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-semibold hover:text-[#A06CFF] transition-colors duration-300"
                >
                  {/* View Project
                  <ExternalLink size={18} className="ml-2" /> */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;