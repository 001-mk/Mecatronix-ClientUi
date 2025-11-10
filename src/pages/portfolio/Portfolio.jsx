import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTools, 
  FaLaptopCode, 
  FaShoppingCart, 
  FaGlobe, 
  FaPalette,
  FaMobileAlt,
  FaDatabase,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaEye,
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaAward,
  FaUsers,
  FaRegClock
} from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioCategories = [
    { id: "all", label: "All Projects", count: 12 },
    { id: "web", label: "Web Development", count: 6 },
    { id: "mobile", label: "Mobile Apps", count: 3 },
    { id: "ecommerce", label: "E-commerce", count: 2 },
    { id: "design", label: "UI/UX Design", count: 4 }
  ];

  const SAMPLE_PORTFOLIO = [
    {
      id: 1,
      title: "Startup Launch Platform",
      type: "Single Page Application",
      category: "web",
      desc: "A sleek, conversion-focused landing page for startups and new product launches with integrated analytics.",
      icon: <FaRocket className="text-2xl" />,
      image: "/api/placeholder/400/300",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      status: "Completed",
      duration: "2 weeks",
      client: "TechStart Inc.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Analytics Integration"],
      color: "from-orange-500 to-red-500",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Corporate Business Suite",
      type: "Multi Page Website",
      category: "web",
      desc: "Professional website layout for growing businesses to showcase services, teams, and case studies.",
      icon: <FaLaptopCode className="text-2xl" />,
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "MongoDB"],
      status: "Completed",
      duration: "4 weeks",
      client: "BusinessCorp Ltd.",
      features: ["Admin Dashboard", "Blog System", "Contact Forms", "Multi-language"],
      color: "from-blue-500 to-purple-600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "E-Commerce Excellence",
      type: "Online Store",
      category: "ecommerce",
      desc: "A full shopping interface concept with product grid, filters, cart, and payment integration.",
      icon: <FaShoppingCart className="text-2xl" />,
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      status: "Completed",
      duration: "6 weeks",
      client: "ShopEasy Retail",
      features: ["Payment Gateway", "Inventory Management", "User Accounts", "Order Tracking"],
      color: "from-green-500 to-emerald-600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Creative Portfolio Design",
      type: "Personal Portfolio",
      category: "design",
      desc: "Elegant and bold portfolio layout for designers and freelancers with smooth animations.",
      icon: <FaPalette className="text-2xl" />,
      image: "/api/placeholder/400/300",
      technologies: ["GSAP", "Three.js", "CSS3"],
      status: "Completed",
      duration: "3 weeks",
      client: "Creative Studio",
      features: ["3D Animations", "Dark/Light Mode", "Project Gallery", "Contact Integration"],
      color: "from-purple-500 to-pink-600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      type: "Financial Application",
      category: "mobile",
      desc: "Secure and intuitive mobile banking application with biometric authentication.",
      icon: <FaMobileAlt className="text-2xl" />,
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      status: "In Development",
      duration: "8 weeks",
      client: "FinTech Solutions",
      features: ["Biometric Login", "Transaction History", "Bill Payments", "Security Alerts"],
      color: "from-cyan-500 to-blue-600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      type: "Business Intelligence",
      category: "web",
      desc: "Comprehensive analytics dashboard with real-time data visualization and reporting.",
      icon: <FaChartLine className="text-2xl" />,
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      status: "Completed",
      duration: "5 weeks",
      client: "DataInsight Corp",
      features: ["Real-time Charts", "Custom Reports", "Data Export", "User Management"],
      color: "from-indigo-500 to-purple-600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Cloud Security Platform",
      type: "Security Solution",
      category: "web",
      desc: "Enterprise-grade security platform with threat detection and compliance monitoring.",
      icon: <FaShieldAlt className="text-2xl" />,
      image: "/api/placeholder/400/300",
      technologies: ["Angular", "Java", "AWS", "Redis"],
      status: "Completed",
      duration: "10 weeks",
      client: "SecureCloud Inc.",
      features: ["Threat Detection", "Compliance Reports", "Real-time Alerts", "Audit Logs"],
      color: "from-red-500 to-pink-600",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "IoT Management System",
      type: "Internet of Things",
      category: "web",
      desc: "Centralized platform for managing and monitoring IoT devices across multiple locations.",
      icon: <FaCloud className="text-2xl" />,
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MQTT", "MongoDB"],
      status: "In Development",
      duration: "12 weeks",
      client: "SmartTech Industries",
      features: ["Device Management", "Real-time Monitoring", "Alert System", "Data Analytics"],
      color: "from-gray-500 to-blue-600",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: FaAward },
    { number: "98%", label: "Client Satisfaction", icon: FaStar },
    { number: "15+", label: "Technologies", icon: FaCode },
    { number: "24/7", label: "Support", icon: FaRegClock }
  ];

  const filteredProjects = activeFilter === "all" 
    ? SAMPLE_PORTFOLIO 
    : SAMPLE_PORTFOLIO.filter(project => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,75,0,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [null, -25, 0],
              x: [null, Math.random() * 12 - 6, 0],
              opacity: [0.1, 0.6, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-300">Our Work</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient mb-6">
            Portfolio Showcase
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of innovative projects that showcase our expertise in 
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text font-semibold"> web development</span>, 
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-semibold"> mobile applications</span>, and 
            <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text font-semibold"> digital solutions</span>.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white text-lg" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {portfolioCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl shadow-orange-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`bg-gradient-to-r ${project.color} p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed" 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.desc}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{project.type}</span>
                      <span>{project.duration}</span>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <motion.button
                        className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaEye />
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <FaTools className="text-4xl text-orange-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-400 mb-6">
              We're constantly working on new and exciting projects. 
              Follow our journey as we continue to push the boundaries of digital innovation.
            </p>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content would go here */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;