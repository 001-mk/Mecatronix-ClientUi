import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCodeBranch,
  FaServer,
  FaRocket,
  FaGlobe,
  FaTools,
  FaShieldAlt,
  FaLightbulb,
  FaMicrochip
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="Portal"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a0a] to-black text-white overflow-hidden"
    >
      {/* 🌌 Space Background Effect - REPLACED GRID */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-orange-800"></div>
      
      {/* 🌟 Space Nebula - REPLACED GLOWING ACCENTS */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* ✨ Floating Stars */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-orange-200 rounded-full"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* ☄️ Subtle Meteor Shower */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`meteor-${i}`}
          className="absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          initial={{
            x: -100,
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 20 - 10,
            opacity: 0
          }}
          animate={{
            x: window.innerWidth + 100,
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 15,
            repeat: Infinity,
            repeatDelay: Math.random() * 20
          }}
        />
      ))}

      {/* 🪐 Subtle Planets */}
      <motion.div
        className="absolute top-20 right-20 w-8 h-8"
        animate={{
          rotate: 360,
          y: [0, 10, 0]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-b from-red-500/30 to-red-700/30 rounded-full">
          <div className="absolute inset-1 bg-red-400/10 rounded-full blur-sm"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-24 w-6 h-6"
        animate={{
          rotate: -360,
          y: [0, -8, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-b from-orange-400/30 to-orange-600/30 rounded-full">
          <div className="absolute inset-0.5 bg-orange-300/10 rounded-full blur-sm"></div>
        </div>
      </motion.div>

      {/* 🌟 Space Dust Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute bg-orange-300/10 rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 🚀 Content Section - ORIGINAL CONTENT KEPT AS IS */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">
              Transforming Digital Since <span className="text-orange-400 font-bold">2025</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-[length:200%_100%] animate-gradient">
                mecatronix
              </span>
              <br />
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Where <span className="text-orange-400 font-semibold">innovation</span> meets
              <span className="text-red-400 font-semibold"> execution</span>. We craft digital
              experiences that propel brands into the future.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#portfolio"
              className="group relative bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <FaRocket className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="#contact"
              className="group relative border-2 border-gray-600 text-white px-8 py-4 rounded-xl hover:border-orange-400 hover:text-orange-400 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Project <FaLightbulb className="group-hover:scale-110 transition-transform" />
              </span>
            </a>
          </motion.div>

          {/* Tech Stack & Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            viewport={{ once: true }}
            className="pt-8 space-y-4"
          >
            <div className="text-sm text-gray-400 font-semibold">TECH STACK</div>
            <div className="flex flex-wrap gap-3 text-xs">
              {["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "TypeScript", "AWS", "Python"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg hover:bg-orange-500/20 hover:border-orange-400/50 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Animated Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* Main Glass Card */}
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-80 h-80 md:w-96 md:h-96 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl flex flex-col items-center justify-center shadow-2xl shadow-orange-500/20 group"
          >
            {/* Animated Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <FaLaptopCode className="text-7xl text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text" />
            </motion.div>

            {/* Card Content */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent text-center mb-3"
            >
              Future-Ready Solutions
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm text-center px-8 leading-relaxed"
            >
              AI-Powered • Scalable • Secure • High-Performance
            </motion.p>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 rounded-full blur-sm"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-500 rounded-full blur-sm"
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            {/* Inner Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* Background Orb Glow */}
          <div className="absolute -z-10 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-[100px] animate-pulse"></div>

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
              initial={{
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150,
                scale: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: [null, -20, 0],
                x: [null, Math.random() * 10 - 5, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-orange-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;