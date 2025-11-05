import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaCode,
  FaLightbulb,
  FaHandshake,
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaMobileAlt,
  FaNetworkWired,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-orange-500 text-3xl" />,
    title: "Rapid & Reliable Delivery",
    desc: "We ensure timely delivery of high-performance digital products using agile methods.",
  },
  {
    icon: <FaCode className="text-orange-500 text-3xl" />,
    title: "Full-Stack Expertise",
    desc: "From React, Node.js, and MongoDB to AI & automation — we build everything end-to-end.",
  },
  {
    icon: <FaLightbulb className="text-orange-500 text-3xl" />,
    title: "Creative & Innovative Thinking",
    desc: "We combine creativity with technology to craft innovative digital experiences.",
  },
  {
    icon: <FaHandshake className="text-orange-500 text-3xl" />,
    title: "Client-First Collaboration",
    desc: "We partner with you closely, transforming your ideas into future-ready solutions.",
  },
  {
    icon: <FaCloud className="text-orange-500 text-3xl" />,
    title: "Cloud & IoT Solutions",
    desc: "Integrating smart automation, IoT, and scalable cloud systems to modernize businesses.",
  },
  {
    icon: <FaShieldAlt className="text-orange-500 text-3xl" />,
    title: "Security & Scalability",
    desc: "We prioritize data protection and performance for every project we deliver.",
  },
];

const steps = [
  { icon: <FaCogs />, title: "Discovery & Strategy", desc: "Understanding your business and defining clear digital goals." },
  { icon: <FaMobileAlt />, title: "Design & Development", desc: "Creating intuitive interfaces and building powerful backends." },
  { icon: <FaNetworkWired />, title: "Deployment & Support", desc: "Ensuring smooth launch, optimization, and continuous growth." },
];

const Ourworld = () => {
  return (
    <section
      id="ourworld"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,100,0,0.15),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-md">
            Our World at Mecatronix Hub
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            <span className="text-orange-400 font-medium">Mecatronix Hub Pvt. Ltd.</span> 
            is a growing IT & innovation company focused on crafting modern digital 
            ecosystems. We build next-generation solutions — from responsive websites 
            and mobile apps to AI-driven platforms and IoT systems.
          </p>
        </motion.div>

        {/* CORE FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              className="bg-gray-800/40 backdrop-blur-md border border-gray-700 hover:border-orange-500 p-6 rounded-2xl text-center shadow-lg shadow-black/40 hover:shadow-orange-500/20 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-orange-400">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* OUR PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-6 text-orange-400">
            How We Work
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every project follows a seamless, transparent process that ensures 
            creativity, precision, and quality — from concept to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-900/50 border border-gray-700 hover:border-orange-500 rounded-2xl shadow-lg shadow-black/40 text-center transition-all duration-300"
            >
              <div className="text-3xl text-orange-500 mb-4 flex justify-center">{step.icon}</div>
              <h4 className="font-semibold text-lg text-orange-400">{step.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* VISION / MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be a global leader in engineering, automation, and digital 
              innovation — empowering industries and startups to achieve 
              excellence through intelligent technology.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To deliver high-impact digital solutions built with precision, 
              design, and scalability — blending creativity and engineering to 
              redefine the digital future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ourworld;
