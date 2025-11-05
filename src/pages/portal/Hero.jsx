import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCodeBranch,
  FaServer,
  FaRocket,
  FaGlobe,
  FaTools,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="Portal"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a0000] to-[#2b0000] text-white overflow-hidden"
    >
      {/* 🔸 Glowing Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,90,0,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,40,0,0.12),transparent_80%)]"></div>

      {/* 🔸 Floating Icons */}
      <motion.div
        className="absolute top-28 left-16 text-orange-500/20 text-6xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCodeBranch />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-24 text-red-500/20 text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaServer />
      </motion.div>

      {/* 🔸 Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Building
            </span>{" "}
            Digital Experiences
            <br />
            That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              Transform Brands
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-md">
            At{" "}
            <span className="text-orange-400 font-semibold">mecatronix</span>,
            we engineer next-generation web solutions that fuse innovation,
            aesthetics, and high performance — making your brand stand out in
            the digital world.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/40"
            >
              Explore Our Work
            </a>
            <a
              href="#contact"
              className="border border-gray-700 text-white px-6 py-3 rounded-lg hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Features Row */}
          <div className="mt-10 text-sm text-gray-400 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              <FaGlobe className="text-orange-400" /> Hosting & SEO
            </div>
            <div className="flex items-center gap-2">
              <FaTools className="text-orange-400" /> Maintenance
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="text-orange-400" /> Brand Growth
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Animated Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,100,0,0.2)]">
            <FaLaptopCode className="text-6xl text-orange-400 animate-bounce mb-4" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Next-Gen Web Solutions
            </h3>
            <p className="text-gray-300 text-sm mt-3 px-6 text-center">
              React • Node.js • MongoDB • Express • Tailwind • SEO
            </p>

            {/* Inner Pulse Animation */}
            <motion.div
              className="absolute inset-0 rounded-3xl border border-orange-500/20"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>

          {/* Glowing Orb */}
          <div className="absolute -bottom-16 w-72 h-72 bg-gradient-to-r from-orange-500/30 to-red-500/30 blur-[120px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
