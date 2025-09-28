// app/components/Projects.js
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projectsData = [
  {
    title: "Dashboard Management",
    description: "Membuat dashboard manajemen yang responsif untuk mengelola data.",
    link: "#", // Ganti dengan link proyek yang relevan
    image: "/images/proj-dashboard.png",
  },
  {
    title: "Mobile App Flutter",
    description: "Mengembangkan aplikasi mobile menggunakan Flutter dengan desain yang modern.",
    link: "#",
    image: "/images/proj-flutter.png",
  },
  {
    title: "Slicing Mobile Apps",
    description: "Mengembangkan antarmuka pengguna mobile yang responsif dan estetik.",
    link: "#",
    image: "/images/project-mobile.png",
  },
  {
    title: "Redesign Website",
    description: "Meningkatkan desain dan fungsionalitas situs web lama menjadi lebih modern.",
    link: "#",
    image: "/images/project-web.png",
  },
  {
    title: "Frontend Website Apps",
    description: "Membangun aplikasi web interaktif dengan teknologi frontend terbaru.",
    link: "#",
    image: "/images/project-app.png",
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(projectsData.length / itemsPerSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Math.ceil(projectsData.length / itemsPerSlide)) % Math.ceil(projectsData.length / itemsPerSlide));
  };

  return (
    <section id="projects" className="py-20 bg-[#1f1f1f] text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A06CFF] to-[#D5A0FF]">Projects</span>
        </h2>
        
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Carousel Slide */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projectsData.map((project, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/3 p-2">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    {/* Gambar Proyek */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay dengan Efek Blur dan Informasi */}
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
                        View Project
                        <ExternalLink size={18} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi Kiri */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#A06CFF] bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-80 transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Tombol Navigasi Kanan */}
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#A06CFF] bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-80 transition-all duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indikator Slide */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(projectsData.length / itemsPerSlide) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-[#A06CFF]' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
