import React from 'react';
import Image from 'next/image'; // Impor komponen Image

const Testimonial = ({ data }) => {
  return (
    <section id="testimonial" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">What do they say about me</h2>
      <div className="bg-[#1f1f1f] p-8 rounded-xl max-w-3xl mx-auto flex flex-col md:flex-row items-center border border-gray-700">
        {/* Mengganti tag <img> dengan komponen <Image /> */}
        <div className="w-24 h-24 rounded-full bg-gray-600 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <Image
            src="/images/client-photo.jpg" // Path ke gambar klien
            alt={data.author}
            width={96} // Atur lebar gambar
            height={96} // Atur tinggi gambar
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-gray-300 italic mb-4">"{data.quote}"</p>
          <p className="font-semibold text-lg">{data.author}</p>
          <p className="text-gray-500">{data.role}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;