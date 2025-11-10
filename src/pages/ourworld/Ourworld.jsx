import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaUsers,
  FaChartLine,
  FaGlobeAmericas,
  FaAward,
  FaHeart,
  FaStar,
  FaRegClock,
  FaInfinity,
  FaLaptopCode,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaServer,
  FaPalette,
  FaEye
} from "react-icons/fa";

const Ourworld = () => {
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Rapid & Reliable Delivery",
      desc: "We ensure timely delivery of high-performance digital products using agile methods and continuous deployment.",
      color: "from-orange-500 to-red-500",
      stats: "98% On-Time Delivery"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Full-Stack Expertise",
      desc: "From React, Node.js, and MongoDB to AI & automation — we build everything end-to-end with modern tech stacks.",
      color: "from-blue-500 to-purple-600",
      stats: "50+ Technologies"
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Creative & Innovative Thinking",
      desc: "We combine creativity with technology to craft innovative digital experiences that stand out in the market.",
      color: "from-yellow-500 to-orange-500",
      stats: "100+ Innovative Projects"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Client-First Collaboration",
      desc: "We partner with you closely, transforming your ideas into future-ready solutions with transparent communication.",
      color: "from-green-500 to-emerald-600",
      stats: "95% Client Retention"
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: "Cloud & IoT Solutions",
      desc: "Integrating smart automation, IoT, and scalable cloud systems to modernize businesses for the digital age.",
      color: "from-cyan-500 to-blue-600",
      stats: "200+ Deployments"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Security & Scalability",
      desc: "We prioritize data protection and performance for every project we deliver, ensuring enterprise-grade security.",
      color: "from-purple-500 to-pink-600",
      stats: "Zero Security Breaches"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "AI & Machine Learning",
      desc: "Leveraging artificial intelligence to create smart applications that learn and adapt to user behavior.",
      color: "from-indigo-500 to-purple-600",
      stats: "25+ AI Projects"
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: "Automation Solutions",
      desc: "Building intelligent automation systems that streamline operations and boost productivity across industries.",
      color: "from-gray-500 to-blue-600",
      stats: "60% Efficiency Gain"
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: "Big Data Analytics",
      desc: "Transforming raw data into actionable insights with powerful analytics and visualization tools.",
      color: "from-red-500 to-pink-600",
      stats: "1M+ Data Points"
    }
  ];

  const steps = [
    { 
      icon: <FaCogs />, 
      title: "Discovery & Strategy", 
      desc: "Understanding your business and defining clear digital goals.",
      details: ["Requirement Analysis", "Project Planning", "Technology Stack", "Timeline Estimation"],
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: <FaPalette />, 
      title: "Design & Prototyping", 
      desc: "Creating intuitive interfaces and user experience designs.",
      details: ["UI/UX Design", "Wireframing", "Prototype Testing", "Design System"],
      color: "from-purple-500 to-pink-600"
    },
    { 
      icon: <FaLaptopCode />, 
      title: "Development & Testing", 
      desc: "Building powerful applications with rigorous quality assurance.",
      details: ["Agile Development", "Code Review", "Quality Testing", "Performance Optimization"],
      color: "from-blue-500 to-cyan-600"
    },
    { 
      icon: <FaServer />, 
      title: "Deployment & Launch", 
      desc: "Ensuring smooth deployment and go-live with comprehensive support.",
      details: ["CI/CD Pipeline", "Server Configuration", "Security Setup", "Launch Management"],
      color: "from-green-500 to-emerald-600"
    },
    { 
      icon: <FaNetworkWired />, 
      title: "Support & Growth", 
      desc: "Continuous monitoring, optimization, and feature enhancements.",
      details: ["24/7 Monitoring", "Regular Updates", "Performance Tracking", "Scalability Planning"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: FaAward, color: "from-orange-500 to-red-500" },
    { number: "98%", label: "Client Satisfaction", icon: FaHeart, color: "from-pink-500 to-rose-600" },
    { number: "24/7", label: "Support Available", icon: FaRegClock, color: "from-blue-500 to-cyan-600" },
    { number: "5+", label: "Years Experience", icon: FaStar, color: "from-yellow-500 to-orange-500" },
    { number: "100+", label: "Technologies Used", icon: FaCode, color: "from-purple-500 to-pink-600" },
    { number: "∞", label: "Innovation Drive", icon: FaInfinity, color: "from-green-500 to-emerald-600" }
  ];

  const values = [
    {
      icon: <FaUsers />,
      title: "Collaboration",
      desc: "We believe in working together with our clients as partners in success.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaChartLine />,
      title: "Excellence",
      desc: "We strive for perfection in every project, delivering nothing but the best.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Innovation",
      desc: "We constantly explore new technologies and methodologies to stay ahead.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      desc: "We maintain transparency and honesty in all our business dealings.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const tabs = [
    { id: "features", label: "Our Expertise", icon: FaRocket },
    { id: "process", label: "Our Process", icon: FaCogs },
    { id: "values", label: "Our Values", icon: FaHeart }
  ];

  return (
    <section
      id="ourworld"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,75,0,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [null, -20, 0],
              x: [null, Math.random() * 10 - 5, 0],
              opacity: [0.1, 0.5, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 12 + 3,
              height: Math.random() * 12 + 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-300">Our World</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient mb-6">
            Welcome to Our World
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            At <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text font-bold">Mecatronix Hub</span>, 
            we blend cutting-edge technology with creative innovation to build digital 
            solutions that transform businesses and shape the future.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex justify-center mb-3">
                <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-white text-lg" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl shadow-orange-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "features" && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500">
                    <div className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                    <div className="text-sm text-orange-400 font-semibold">
                      {item.stats}
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "process" && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-start gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className={`bg-gradient-to-r ${step.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-2xl text-white">{step.icon}</div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-bold text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">
                        Step {idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, detailIdx) => (
                        <span
                          key={detailIdx}
                          className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "values" && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                    <div className={`bg-gradient-to-r ${value.color} p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* VISION & MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid lg:grid-cols-2 gap-12 items-start"
        >
          <div className="group relative">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-500">
              <h3 className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
                Our Vision
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To be a global leader in engineering, automation, and digital 
                innovation — empowering industries and startups to achieve 
                excellence through intelligent technology and transformative solutions.
              </p>
              <div className="flex items-center gap-2 text-orange-400">
                <FaEye />
                <span className="font-semibold">Seeing the future of technology</span>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-500">
              <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To deliver high-impact digital solutions built with precision, 
                design, and scalability — blending creativity and engineering to 
                redefine the digital future and drive meaningful progress for our clients.
              </p>
              <div className="flex items-center gap-2 text-blue-400">
                <FaRocket />
                <span className="font-semibold">Building the future today</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ourworld;