import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, details }) => (
  <Tilt className="w-full sm:w-[200px] md:w-[220px]">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="relative rounded-[20px] overflow-hidden bg-tertiary shadow-lg group cursor-pointer h-[360px]"
    >
      {/* Contenu principal */}
      <div className="flex flex-col justify-center items-center py-10 px-4 h-full relative z-10 group-hover:opacity-0 transition-opacity duration-500">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mb-5 transition-transform duration-300 group-hover:scale-110"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>

      {/* Overlay avec fond dégradé bleu clair */}
      <div
        className="absolute inset-0 rounded-[20px] 
        bg-gradient-to-b from-[#a0d8f1] to-[#c2ebf9] 
        opacity-0 group-hover:opacity-100 
        transition-all duration-500 
        flex flex-col justify-center items-center text-center px-6 z-20"
      >
        <ul className="list-disc list-inside text-black font-bold text-[15px] leading-relaxed space-y-2 text-left max-w-[200px]">
          {details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate software engineer fluent in TypeScript and JavaScript,
        weaving magic with frameworks like React, Node.js, and Angular. I thrive
        on learning fast, turning ideas into reality, and creating efficient,
        scalable, and delightful digital experiences. Let's team up to transform
        your vision into something extraordinary!
      </motion.p>

      {/* Grille des services (4 en ligne) */}
      <div className="mt-20 flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
