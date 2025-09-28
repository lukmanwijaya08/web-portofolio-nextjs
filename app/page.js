import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Skills from './components/Skills';
import Footer from './components/Footer';

const portfolioData = {
  name: "Lukman Wijayanto",
  title: "Frontend Developer", 
  photo: "/images/bg-foto.png",
  socialMedia: [
    { name: "Facebook", icon: "/images/facebook.png", link: "#" },
    { name: "Instagram", icon: "/images/instagram.png", link: "#" },
    { name: "Whatsapp", icon: "/images/whatsapp.png", link: "#" },
    { name: "LinkedIn", icon: "/images/linkdn.png", link: "#" },
  ],
};

const projectsData = [
  { name: "Slicing Mobile Apps", link: "#" },
  { name: "Redesign Web / Apps", link: "#" },
  { name: "Frontend Website Apps", link: "#" },
];

const servicesData = [
  { icon: "🎨", title: "UI/UX Design", description: "Deskripsi singkat tentang layanan ini." },
  { icon: "💻", title: "Web Development", description: "Deskripsi singkat tentang layanan ini." },
  { icon: "📱", title: "Mobile Apps", description: "Deskripsi singkat tentang layanan ini." },
  { icon: "🚀", title: "API Integration", description: "Deskripsi singkat tentang layanan ini." },
];

const testimonialData = {
  quote: "Deskripsi singkat tentang testimoni dari klien.",
  author: "Nama Klien",
  role: "Jabatan Klien",
};

const skillsData = [
  { name: "Photoshop", icon: "/images/ps.png" },
  { name: "Figma", icon: "/images/figma.png" },
  // ... Tambahkan tools lainnya
];

const HomePage = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 lg:px-20">
        <div id="hero">
          <Hero 
            name={portfolioData.name} 
            title={portfolioData.title}
            photo={portfolioData.photo}
            socialMedia={portfolioData.socialMedia}
          />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects data={projectsData} />
        </div>
        <div id="skills">
          <Skills data={skillsData} />
        </div>
        <div id="contact-me">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
