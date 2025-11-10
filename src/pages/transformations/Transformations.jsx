import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaShieldAlt,
  FaChartLine,
  FaCode,
  FaLightbulb,
  FaHeadset,
  FaAward,
  FaStar,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaPause
} from "react-icons/fa";

const Transformations = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProcess, setActiveProcess] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Enhanced Services with categories
  const serviceCategories = [
    { id: "all", label: "All Services", count: 16 },
    { id: "development", label: "Development", count: 8 },
    { id: "design", label: "UI/UX Design", count: 4 },
    { id: "optimization", label: "Optimization", count: 4 }
  ];

  const SERVICES = [
    { 
      title: 'Single Page Website', 
      desc: 'Perfect for startups, portfolios, or quick landing pages that need a fast launch with maximum impact.', 
      icon: <FaGlobe className="text-3xl" />,
      category: "development",
      features: ["Fast Loading", "SEO Ready", "Mobile First", "Analytics"],
      color: "from-blue-500 to-cyan-600",
      duration: "1-2 weeks",
      price: "Starting at ₹15,000"
    },
    { 
      title: 'Multi Page Website', 
      desc: 'Professional multi-section websites ideal for businesses, organizations, and agencies with comprehensive content.', 
      icon: <FaLaptopCode className="text-3xl" />,
      category: "development",
      features: ["5+ Pages", "Contact Forms", "Blog Ready", "Admin Panel"],
      color: "from-purple-500 to-pink-600",
      duration: "3-4 weeks",
      price: "Starting at ₹35,000"
    },
    { 
      title: 'Dynamic Website', 
      desc: 'Websites with admin panels and content management systems for easy updates and dynamic content.', 
      icon: <FaCogs className="text-3xl" />,
      category: "development",
      features: ["CMS Integration", "User Management", "Dynamic Content", "Database"],
      color: "from-green-500 to-emerald-600",
      duration: "4-6 weeks",
      price: "Starting at ₹50,000"
    },
    { 
      title: 'E-commerce Development', 
      desc: 'Complete online stores with secure checkout, product management, and multiple payment integrations.', 
      icon: <FaShoppingCart className="text-3xl" />,
      category: "development",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Security"],
      color: "from-orange-500 to-red-600",
      duration: "6-8 weeks",
      price: "Starting at ₹75,000"
    },
    { 
      title: 'Custom Web Applications', 
      desc: 'Tailor-made web apps built with React, Node.js, and MongoDB for your unique business logic and workflows.', 
      icon: <FaTools className="text-3xl" />,
      category: "development",
      features: ["Custom Logic", "API Integration", "Real-time Features", "Scalable"],
      color: "from-indigo-500 to-purple-600",
      duration: "8-12 weeks",
      price: "Custom Quote"
    },
    { 
      title: 'Portfolio Websites', 
      desc: 'Personal or creative portfolios that beautifully present your skills, projects, and professional journey.', 
      icon: <FaUserTie className="text-3xl" />,
      category: "design",
      features: ["Creative Layouts", "Project Showcase", "Contact Integration", "Blog"],
      color: "from-pink-500 to-rose-600",
      duration: "2-3 weeks",
      price: "Starting at ₹20,000"
    },
    { 
      title: 'Business & Corporate Sites', 
      desc: 'High-performance sites that build trust and showcase company services, team, and achievements effectively.', 
      icon: <FaServer className="text-3xl" />,
      category: "development",
      features: ["Professional Design", "Service Pages", "Team Section", "Testimonials"],
      color: "from-gray-500 to-blue-600",
      duration: "4-5 weeks",
      price: "Starting at ₹45,000"
    },
    { 
      title: 'Website Redesign', 
      desc: 'Transform your old website into a fresh, modern, and mobile-friendly experience that converts visitors.', 
      icon: <FaRedo className="text-3xl" />,
      category: "design",
      features: ["Modern Design", "Better UX", "Improved Performance", "SEO Boost"],
      color: "from-yellow-500 to-orange-600",
      duration: "3-4 weeks",
      price: "Starting at ₹30,000"
    },
    { 
      title: 'SEO & Optimization', 
      desc: 'Boost your site speed, accessibility, and Google ranking with professional optimization techniques.', 
      icon: <FaSearch className="text-3xl" />,
      category: "optimization",
      features: ["Speed Optimization", "SEO Audit", "Content Strategy", "Ranking Boost"],
      color: "from-teal-500 to-green-600",
      duration: "2-3 weeks",
      price: "Starting at ₹25,000"
    },
    { 
      title: 'Hosting & Maintenance', 
      desc: 'Managed hosting, security patches, and uptime monitoring to keep your site running smoothly 24/7.', 
      icon: <FaCloud className="text-3xl" />,
      category: "optimization",
      features: ["24/7 Monitoring", "Security Updates", "Backup Solutions", "Performance"],
      color: "from-cyan-500 to-blue-600",
      duration: "Ongoing",
      price: "From ₹2,000/month"
    },
    { 
      title: 'Responsive Design', 
      desc: 'Seamless user experience across mobile, tablet, and desktop devices with perfect responsiveness.', 
      icon: <FaMobileAlt className="text-3xl" />,
      category: "design",
      features: ["Mobile First", "Tablet Optimized", "Touch Friendly", "Fast Loading"],
      color: "from-blue-500 to-indigo-600",
      duration: "Included",
      price: "Standard Feature"
    },
    { 
      title: 'UI/UX Enhancement', 
      desc: 'Modern, user-friendly designs focused on engagement, conversions, and exceptional user experience.', 
      icon: <FaPaintBrush className="text-3xl" />,
      category: "design",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      color: "from-purple-500 to-pink-600",
      duration: "2-4 weeks",
      price: "Starting at ₹40,000"
    },
    { 
      title: 'Website Migration', 
      desc: 'Safely move your existing website to new servers or tech stacks without downtime or data loss.', 
      icon: <FaExchangeAlt className="text-3xl" />,
      category: "optimization",
      features: ["Zero Downtime", "Data Migration", "SEO Preservation", "Testing"],
      color: "from-green-500 to-teal-600",
      duration: "1-2 weeks",
      price: "Starting at ₹20,000"
    },
    { 
      title: 'Security Implementation', 
      desc: 'Enterprise-grade security measures including SSL, firewalls, and vulnerability assessments.', 
      icon: <FaShieldAlt className="text-3xl" />,
      category: "optimization",
      features: ["SSL Certificate", "Security Audit", "Firewall Setup", "Monitoring"],
      color: "from-red-500 to-pink-600",
      duration: "1 week",
      price: "Starting at ₹15,000"
    },
    { 
      title: 'Performance Analytics', 
      desc: 'Comprehensive analytics setup with dashboards, reports, and actionable insights for growth.', 
      icon: <FaChartLine className="text-3xl" />,
      category: "optimization",
      features: ["Google Analytics", "Custom Dashboards", "Conversion Tracking", "Reports"],
      color: "from-orange-500 to-yellow-600",
      duration: "1-2 weeks",
      price: "Starting at ₹18,000"
    },
    { 
      title: 'API Integration', 
      desc: 'Seamless integration with third-party services, payment gateways, and external platforms.', 
      icon: <FaCode className="text-3xl" />,
      category: "development",
      features: ["REST APIs", "Webhooks", "Authentication", "Documentation"],
      color: "from-indigo-500 to-purple-600",
      duration: "2-3 weeks",
      price: "Starting at ₹30,000"
    }
  ];

  // Enhanced Tech Stack
  const TECH_STACK = [
    { name: 'React.js', icon: '⚛️', category: 'Frontend', proficiency: 95 },
    { name: 'Node.js', icon: '🟢', category: 'Backend', proficiency: 90 },
    { name: 'MongoDB', icon: '🍃', category: 'Database', proficiency: 85 },
    { name: 'Express', icon: '⚙️', category: 'Backend', proficiency: 88 },
    { name: 'Tailwind CSS', icon: '💨', category: 'Frontend', proficiency: 92 },
    { name: 'Firebase', icon: '🔥', category: 'Backend', proficiency: 80 },
    { name: 'Next.js', icon: '⬛', category: 'Frontend', proficiency: 90 },
    { name: 'AWS', icon: '☁️', category: 'DevOps', proficiency: 75 },
    { name: 'TypeScript', icon: '🔷', category: 'Frontend', proficiency: 85 },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', proficiency: 80 },
    { name: 'Docker', icon: '🐳', category: 'DevOps', proficiency: 70 },
    { name: 'GraphQL', icon: '📊', category: 'Backend', proficiency: 75 }
  ];

  // Enhanced Process with details
  const PROCESS = [
    { 
      step: 'Discovery & Strategy', 
      detail: 'We analyze your goals, audience, and competitors to create a focused digital strategy.',
      icon: <FaLightbulb className="text-2xl" />,
      duration: '1-2 weeks',
      deliverables: ['Project Plan', 'Wireframes', 'Tech Stack']
    },
    { 
      step: 'UI/UX Design', 
      detail: 'We craft pixel-perfect layouts and interactions to maximize engagement and conversions.',
      icon: <FaPaintBrush className="text-2xl" />,
      duration: '2-3 weeks',
      deliverables: ['Design Mockups', 'Prototypes', 'Style Guide']
    },
    { 
      step: 'Development', 
      detail: 'Using React, Node, and modern stacks — we turn designs into fully functional applications.',
      icon: <FaCode className="text-2xl" />,
      duration: '4-8 weeks',
      deliverables: ['Frontend & Backend', 'Database', 'APIs']
    },
    { 
      step: 'Testing & QA', 
      detail: 'Every line of code is tested for performance, security, and responsiveness across devices.',
      icon: <FaCheckCircle className="text-2xl" />,
      duration: '1-2 weeks',
      deliverables: ['Bug Reports', 'Performance Tests', 'Security Audit']
    },
    { 
      step: 'Launch & Support', 
      detail: 'We deploy, monitor, and maintain your site for long-term success with ongoing support.',
      icon: <FaRocket className="text-2xl" />,
      duration: 'Ongoing',
      deliverables: ['Live Website', 'Documentation', 'Support Plan']
    }
  ];

  // Stats
  const stats = [
    { number: "100+", label: "Projects Delivered", icon: FaAward },
    { number: "98%", label: "Client Satisfaction", icon: FaStar },
    { number: "24/7", label: "Support Available", icon: FaClock },
    { number: "50+", label: "Technologies", icon: FaUsers }
  ];

  const filteredServices = activeCategory === "all" 
    ? SERVICES 
    : SERVICES.filter(service => service.category === activeCategory);

  // Auto-rotate process
  React.useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % PROCESS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, PROCESS.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,75,0,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.1),transparent_60%)]"></div>
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
            <span className="text-sm font-semibold text-gray-300">Our Services</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient mb-6">
            Web Development Services
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with our comprehensive web development solutions. 
            From stunning single-page sites to complex enterprise applications, we deliver 
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text font-semibold"> excellence in every pixel</span>.
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

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {serviceCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
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

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500">
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-orange-400 font-semibold">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                </div>
                
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Our Technology Stack
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver fast, secure, and scalable web solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <h4 className="font-semibold text-white mb-1">{tech.name}</h4>
                <p className="text-gray-400 text-xs mb-2">{tech.category}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-400 mt-1">{tech.proficiency}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Our Development Process
              </h3>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white/5 border border-white/10 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every project follows our proven 5-step process to ensure quality, transparency, and success.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="flex flex-col md:flex-row gap-8">
              {PROCESS.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex-1 text-center ${
                    activeProcess === index ? "scale-105" : "scale-95"
                  } transition-transform duration-500`}
                >
                  <div className={`bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl mb-4 mx-auto w-16 h-16 flex items-center justify-center ${
                    activeProcess === index ? "ring-4 ring-orange-400/50" : ""
                  }`}>
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{step.step}</h4>
                  <p className="text-gray-400 text-sm mb-3">{step.detail}</p>
                  <div className="text-xs text-orange-400 mb-2">{step.duration}</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {step.deliverables.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                animate={{ width: `${((activeProcess + 1) / PROCESS.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss your project and create a stunning, fast, and future-ready website that drives results.
            </p>
            <motion.a
              href="/openline"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <FaArrowRight />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformations;