// app/components/About.js
'use client';

import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react'; // Menggunakan ikon untuk edukasi dan pekerjaan

const About = () => {
  // Data untuk riwayat edukasi atau pengalaman, bisa disesuaikan
  const timelineData = [
    {
      year: "2018",
      title: "Lulusan Sekolah Menengah",
      institution: "SMA Negeri 1 Jakarta",
      description: "Fokus pada bidang Ilmu Pengetahuan Alam (IPA)."
    },
    {
      year: "2022",
      title: "Sarjana Teknik Informatika",
      institution: "Universitas XYZ",
      description: "Spesialisasi dalam Pengembangan Perangkat Lunak dan Web."
    },
    {
      year: "2023",
      title: "Mulai Karir sebagai Pengembang",
      institution: "PT. Teknologi Maju",
      description: "Memulai sebagai Junior Frontend Developer."
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#1f1f1f] text-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A06CFF] to-[#D5A0FF]">Me</span>
        </h2>
        
        {/* Deskripsi Singkat */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed">
            Halo! Saya adalah seorang pengembang perangkat lunak yang bersemangat dengan pengalaman lebih dari 3 tahun dalam membangun aplikasi web yang menarik dan fungsional. Saya memiliki keahlian dalam React, Next.js, dan Tailwind CSS, dan selalu mencari tantangan baru untuk mengembangkan diri.
          </p>
        </div>

        {/* Garis Stepper Horisontal */}
        <div className="relative flex flex-col md:flex-row items-center justify-between mt-12">
          {/* Garis penghubung */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#2a2a2a] transform -translate-y-1/2 hidden md:block"></div>

          {/* Stepper Items */}
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className="relative z-10 flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/3"
            >
              {/* Lingkaran dengan ikon */}
              <div className="flex items-center justify-center w-12 h-12 bg-[#A06CFF] rounded-full p-2 text-white">
                {index === 0 && <GraduationCap size={24} />}
                {index === 1 && <GraduationCap size={24} />}
                {index === 2 && <Briefcase size={24} />}
              </div>
              
              {/* Konten Stepper */}
              <div className="mt-4 text-center">
                <p className="text-xl font-bold text-white">{item.year}</p>
                <p className="mt-2 font-semibold text-[#D5A0FF]">{item.title}</p>
                <p className="text-sm text-gray-400">{item.institution}</p>
                <p className="mt-1 text-sm text-gray-400 hidden md:block">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
