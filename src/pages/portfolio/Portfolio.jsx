import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaLaptopCode, FaShoppingCart, FaGlobe, FaPalette } from "react-icons/fa";

const SAMPLE_PORTFOLIO = [
  {
    title: "Startup Landing Page",
    type: "Single Page Website",
    desc: "A sleek, conversion-focused landing page for startups and new product launches.",
    icon: <FaGlobe className="text-orange-400 text-2xl" />,
  },
  {
    title: "Corporate Business Site",
    type: "Multi Page Website",
    desc: "Professional website layout for growing businesses to showcase services and teams.",
    icon: <FaLaptopCode className="text-orange-400 text-2xl" />,
  },
  {
    title: "E-Commerce Concept",
    type: "Online Store",
    desc: "A full shopping interface concept — product grid, filters, and cart functionality.",
    icon: <FaShoppingCart className="text-orange-400 text-2xl" />,
  },
  {
    title: "Creative Portfolio Design",
    type: "Personal Portfolio",
    desc: "Elegant and bold portfolio layout for designers and freelancers.",
    icon: <FaPalette className="text-orange-400 text-2xl" />,
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(255,100,0,0.08),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Coming Soon Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <FaTools className="text-6xl text-orange-500 mx-auto mb-6 animate-spin-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            Portfolio Coming Soon
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Our real-world projects and client case studies are currently in
            development. Meanwhile, explore some of our{" "}
            <span className="text-orange-400 font-semibold">
              demo concepts and creative prototypes
            </span>{" "}
            below.
          </p>
        </motion.div>

        {/* Sample Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SAMPLE_PORTFOLIO.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 border border-gray-700 hover:border-orange-500 
              rounded-2xl p-6 shadow-md shadow-black/40 hover:shadow-orange-400/20 
              transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="font-semibold text-lg text-orange-400">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.type}</p>
              <p className="text-gray-500 text-sm mt-3">{project.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20 text-gray-400 text-sm"
        >
          <p>
            🚀 More live projects and real-world client work will be updated
            soon. <br /> Follow{" "}
            <span className="text-orange-400 font-semibold">Mecatronix Hub Pvt. Ltd.</span>{" "}
            as we continue building the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
