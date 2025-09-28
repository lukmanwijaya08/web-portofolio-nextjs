import React from 'react';

const Services = ({ data }) => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Why Hire Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((service, index) => (
          <div key={index} className="bg-[#1f1f1f] p-8 rounded-xl text-center flex flex-col items-center">
            {/* Placeholder untuk ikon. Anda bisa ganti dengan gambar SVG atau ikon font */}
            <div className="w-16 h-16 bg-[#A06CFF] rounded-full flex items-center justify-center mb-4 text-3xl">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;