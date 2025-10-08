import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center cursor-pointer"
        >
          {/* Orbe lumineuse plus petite */}
          <div
            className="relative w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-full 
            bg-gradient-to-br from-[#f3f3f3] to-[#d6d6d6]
            flex justify-center items-center shadow-[0_0_20px_rgba(0,188,212,0.2)]
            hover:shadow-[0_0_35px_rgba(0,188,212,0.6)]
            transition-all duration-500"
          >
            {/* Halo animé */}
            <div className="absolute inset-0 rounded-full bg-[#00bcd4]/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icône plus grande */}
            <motion.img
              src={tech.icon}
              alt={tech.name}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain z-10"
              whileHover={{ scale: 1.15, rotate: 3 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Nom */}
          <motion.p
            className="mt-3 text-[14px] sm:text-[15px] text-gray-200 font-medium tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {tech.name}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
