"use client";

import React, { useEffect, useState } from 'react';
import logo from '@/../public/logo.jpeg';
import Image from 'next/image';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // Hide navbar on scroll down, after 100px
      } else if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY); // Update last scroll position

      // Check which section is currently in the viewport
      const sections = document.querySelectorAll('section');
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0 && !found) {
          setActiveSection(section.id);
          found = true;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg text-black flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-transform duration-300 z-50 ${
          showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image src={logo} alt="DigiSir Logo" width={40} height={40} />
        </div>

        {/* Nav Links Section */}
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className={`text-black hover:underline ${activeSection === "home" ? "underline" : ""}`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-black hover:underline ${activeSection === "about" ? "underline" : ""}`}
          >
            About Us
          </a>
          <a
            href="#features"
            className={`text-black hover:underline ${activeSection === "features" ? "underline" : ""}`}
          >
            Features
          </a>
          <a
            href="#contact"
            className={`text-black hover:underline ${activeSection === "contact" ? "underline" : ""}`}
          >
            Contact Us
          </a>
        </div>

        {/* Log In Button */}
        <div>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
            Log In
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
