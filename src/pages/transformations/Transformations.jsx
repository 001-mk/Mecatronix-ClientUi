import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaGlobe,
  FaCogs,
  FaShoppingCart,
  FaTools,
  FaUserTie,
  FaRedo,
  FaSearch,
  FaServer,
  FaMobileAlt,
  FaExchangeAlt,
  FaPaintBrush,
  FaDatabase,
  FaRocket,
  FaCloud,
} from "react-icons/fa";

// ============================= SERVICES =============================
const SERVICES = [
  { title: 'Single Page Website', desc: 'Perfect for startups, portfolios, or quick landing pages that need a fast launch.', icon: <FaGlobe className="text-orange-400 text-3xl" /> },
  { title: 'Multi Page Website', desc: 'Professional multi-section websites ideal for businesses, organizations, and agencies.', icon: <FaLaptopCode className="text-orange-400 text-3xl" /> },
  { title: 'Dynamic Website', desc: 'Websites with admin panels and content management systems for easy updates.', icon: <FaCogs className="text-orange-400 text-3xl" /> },
  { title: 'E-commerce Development', desc: 'Online stores with secure checkout, product management, and payment integration.', icon: <FaShoppingCart className="text-orange-400 text-3xl" /> },
  { title: 'Custom Web Applications', desc: 'Tailor-made web apps built with React, Node.js, and MongoDB for your unique business logic.', icon: <FaTools className="text-orange-400 text-3xl" /> },
  { title: 'Portfolio Websites', desc: 'Personal or creative portfolios that beautifully present your skills and projects.', icon: <FaUserTie className="text-orange-400 text-3xl" /> },
  { title: 'Business & Corporate Sites', desc: 'High-performance sites that build trust and showcase company services effectively.', icon: <FaServer className="text-orange-400 text-3xl" /> },
  { title: 'Website Redesign', desc: 'Transform your old website into a fresh, modern, and mobile-friendly experience.', icon: <FaRedo className="text-orange-400 text-3xl" /> },
  { title: 'SEO & Optimization', desc: 'Boost your site speed, accessibility, and Google ranking with professional optimization.', icon: <FaSearch className="text-orange-400 text-3xl" /> },
  { title: 'Hosting & Maintenance', desc: 'Managed hosting, security patches, and uptime monitoring to keep your site running smoothly.', icon: <FaCloud className="text-orange-400 text-3xl" /> },
  { title: 'Responsive Design', desc: 'Seamless user experience across mobile, tablet, and desktop devices.', icon: <FaMobileAlt className="text-orange-400 text-3xl" /> },
  { title: 'UI/UX Enhancement', desc: 'Modern, user-friendly designs focused on engagement and conversions.', icon: <FaPaintBrush className="text-orange-400 text-3xl" /> },
  { title: 'Website Migration', desc: 'Safely move your existing website to new servers or tech stacks without downtime.', icon: <FaExchangeAlt className="text-orange-400 text-3xl" /> },
];

// ============================= TECH STACK =============================
const TECH_STACK = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '⚙️' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Next.js', icon: '⬛' },
  { name: 'AWS', icon: '☁️' },
];

// ============================= PROCESS =============================
const PROCESS = [
  { step: '1️⃣ Research & Strategy', detail: 'We analyze your goals, audience, and competitors to create a focused plan.' },
  { step: '2️⃣ UI/UX Design', detail: 'We craft pixel-perfect layouts and interactions to maximize engagement.' },
  { step: '3️⃣ Development', detail: 'Using React, Node, and modern stacks — we turn designs into reality.' },
  { step: '4️⃣ Testing & QA', detail: 'Every line of code is tested for performance, security, and responsiveness.' },
  { step: '5️⃣ Launch & Support', detail: 'We deploy, monitor, and maintain your site for long-term success.' },
];

// ============================= PAGE =============================
const Transformations = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(255,80,0,0.1),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 drop-shadow-lg">
            Web Development Services
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="text-red-500 font-semibold">Mecatronix Hub Pvt. Ltd.</span>,
            we specialize in crafting high-performing, visually stunning websites that empower your brand and accelerate growth.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 hover:border-orange-500 
              p-6 rounded-2xl shadow-md shadow-black/40 hover:shadow-orange-400/20 
              transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-orange-400 text-center">{service.title}</h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed text-center">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-semibold text-orange-400 mb-6">Our Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 hover:border-orange-500 transition-all"
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-semibold text-center text-orange-400 mb-10">Our Development Process</h3>
          <div className="grid md:grid-cols-5 gap-8">
            {PROCESS.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 border border-gray-700 hover:border-orange-500 rounded-xl p-6 text-center transition-all"
              >
                <p className="text-2xl mb-3">{item.step}</p>
                <p className="text-gray-300 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-orange-500 mb-4">Ready to Transform Your Digital Presence?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Let’s create a stunning, fast, and future-ready website for your business.
          </p>
          <a
            href="/openline"
            className="inline-block px-8 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-400 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformations;
