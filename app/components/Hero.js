// app/components/Hero.js
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import * as THREE from 'three';

const Hero = ({ name, title, photo, socialMedia }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Pastikan kode berjalan di sisi klien saja
    if (typeof window === 'undefined') return;
    if (!mountRef.current) return;

    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;

    // Inisialisasi Scene, Camera, dan Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Tambahkan pencahayaan
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xA06CFF, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Buat model 3D (Dodecahedron)
    const geometry = new THREE.DodecahedronGeometry(2, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0xA06CFF,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.9
    });
    const dodecahedron = new THREE.Mesh(geometry, material);
    scene.add(dodecahedron);

    camera.position.z = 5;

    // Rotasi berdasarkan posisi mouse
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animasi
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotasi objek secara halus
      dodecahedron.rotation.x += 0.005;
      dodecahedron.rotation.y += 0.005;

      // Animasi pergerakan mengikuti kursor mouse
      dodecahedron.rotation.x += mouse.y * 0.005;
      dodecahedron.rotation.y += mouse.x * 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Penanganan resize
    const handleResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section id="hero" className="flex flex-col-reverse lg:flex-row items-center justify-between py-20 min-h-screen relative overflow-hidden">
      {/* Bagian Kiri: Teks dan Tombol */}
      <div className="lg:w-1/2 text-left mb-10 lg:mb-0 mt-10 md:mt-0 z-10">
        <h1 className="text-xl text-[#A06CFF] mb-2">Hello Guys,</h1>
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight">I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A06CFF] to-[#D5A0FF]">{name}</span></h2>
        <p className="text-gray-400 mt-4 text-lg max-w-xl">
          Write a short and sweet description about who you are, what you do, and what you want.
        </p>
        <div className="mt-8">
          <a href="#projects" className="relative text-[#A06CFF] py-3 px-8 rounded-full text-lg font-semibold border border-[#A06CFF] hover:bg-[#A06CFF] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            My Portfolio
          </a>
        </div>
      </div>

      {/* Bagian Kanan: Foto dan Latar Belakang 3D */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-10 lg:mt-0 relative z-10">
        {/* Kontainer untuk Partikel dan Foto */}
        <div className="relative w-[450px] h-[600px] flex items-center justify-center">
          {/* Canvas untuk Animasi 3D */}
          <div ref={mountRef} className="absolute inset-0 z-0"></div>
          
          {/* Foto Profil */}
          <div className="relative w-full h-full z-10">
            <Image
              src="/images/bg-foto.png"
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
        {/* Bagian Find Me On */}
        <div className="flex items-center space-x-4 md:space-x-6 mt-8 z-10">
          <p className="font-semibold text-sm md:text-base">Find Me On</p>
          <div className="flex space-x-2 md:space-x-4">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center border border-white hover:bg-white transition-all duration-300 transform hover:scale-110 group"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:filter group-hover:invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
