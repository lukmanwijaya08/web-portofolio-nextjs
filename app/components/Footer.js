// app/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-8 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-center space-y-2 md:space-y-0">
        {/* Tulisan Utama */}
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A06CFF] to-[#D5A0FF]">
          Build with Next.js
        </div>

        {/* Kredit */}
        <div className="text-sm text-gray-400">
          Created by Lukman Wijayanto
        </div>
      </div>
    </footer>
  );
};

export default Footer;
