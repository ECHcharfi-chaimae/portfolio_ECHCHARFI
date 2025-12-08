import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState } from "react";
import resumeFile from "../assets/CV.pdf";
import { FaArrowUp } from "react-icons/fa";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumeFile;
      link.download = "CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    }, 1000);
  };

  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
  <div
    className={`relative inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center md:items-start gap-5
      pt-16 md:pt-0 md:top-[120px]`} // padding-top ajouté pour mobile
  >
    {/* Ligne verticale et point — supprimée en mobile */}
    <div className="hidden md:flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-[#4864ad]" />
      <div className="w-1 sm:h-80 h-40 violet-gradient" />
    </div>

    {/* Texte + bouton */}
    <div className="text-center md:text-left flex flex-col items-center md:items-start">
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#4864ad]">Chaimae</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-md`}>
        I am a software engineer
      </p>

      {/* Bouton download */}
      <div className="mt-6 flex justify-center md:justify-start">
        <button
          onClick={handleDownload}
          disabled={loading}
          className="relative overflow-hidden bg-[#142269ff] py-3 px-9 rounded-xl outline-none text-white font-bold shadow-lg shadow-blue-500/50 hover:bg-[#0d5d5e] transition-all duration-300 active:scale-95 border border-white/20"
        >
          {loading ? "Downloading..." : "Curriculum vitæ"}
        </button>
      </div>
    </div>
  </div>

  {/* Canvas 3D */}
  <div className="w-full h-[50vh] md:h-[100vh] mt-0">
    <ComputersCanvas className="z-0" />
  </div>

  {/* Flèche pour descendre */}
  <button
    onClick={scrollToFooter}
    className="absolute right-6 bottom-6 flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-600 text-black font-bold py-3 px-3 rounded-full hover:scale-105 transition-transform"
  >
    <FaArrowUp className="transform rotate-180" />
  </button>
</section>


  );
};

export default Hero;
