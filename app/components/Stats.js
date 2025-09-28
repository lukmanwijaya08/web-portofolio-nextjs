// app/components/Stats.js
import React from 'react';
// Perbaiki impor ikon dari 'lucide-react'
import { Laptop, Users, Trophy } from 'lucide-react'; 

const statsData = [
  {
    icon: <Laptop className="w-10 h-10 text-[#A06CFF] transition-transform duration-300 group-hover:scale-110" />,
    value: "10+",
    label: "Projects Completed",
  },
  {
    icon: <Users className="w-10 h-10 text-[#A06CFF] transition-transform duration-300 group-hover:scale-110" />,
    value: "50+",
    label: "Satisfied Clients",
  },
  {
    icon: <Trophy className="w-10 h-10 text-[#A06CFF] transition-transform duration-300 group-hover:scale-110" />,
    value: "3+",
    label: "Years of Experience",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-[#1f1f1f]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A06CFF] to-[#D5A0FF]">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] p-8 rounded-2xl shadow-lg border border-[#3b3b3b] text-center
                         hover:bg-[#3b3b3b] transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <p className="text-5xl font-extrabold text-[#D5A0FF] mb-2">{stat.value}</p>
              <p className="text-lg text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
