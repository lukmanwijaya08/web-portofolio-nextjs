// app/components/Skills.js

import React from 'react';
import Image from 'next/image';

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Tools I work with</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {data.map((skill, index) => (
          <div key={index} className="w-24 h-24 bg-white/5 backdrop-blur-lg rounded-xl flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-[#A06CFF] border border-transparent">
            {/* Tambahkan tag <a> di sini */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={64}
                height={64}
                className="object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;