import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <p className="text-sm text-gray-400">Building sleek & modern digital experiences</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/ECHcharfi-chaimae"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chaimae-ech-charfi-582366199/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-12 bottom-12 flex items-center gap-4 bg-gradient-to-r from-blue-400 to-blue-600 text-black font-bold py-4 px-4 rounded-full hover:scale-105 transition-transform"
      >
        <FaArrowUp />
      </button>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Chaimae ECH-CHARFI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
