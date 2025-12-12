import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCode, FaMobile, FaPalette, FaCloud, FaRobot, FaShieldAlt, 
  FaChartLine, FaDatabase, FaCogs, FaSearch, FaShoppingCart, FaGlobe,
  FaChevronRight, FaArrowRight, FaRocket, FaSatellite, FaStar
} from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaCode className="text-3xl" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and scalability.",
      features: ["Responsive Design", "Progressive Web Apps", "API Integration", "Performance Optimization", "E-commerce Solutions", "CMS Development"],
      color: "from-blue-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      stats: "500+ Projects"
    },
    {
      id: 2,
      icon: <FaMobile className="text-3xl" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences and native performance.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment", "Push Notifications", "Offline Support"],
      color: "from-green-500 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
      stats: "300+ Apps"
    },
    {
      id: 3,
      icon: <FaPalette className="text-3xl" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user engagement, drive conversions and create memorable brand experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "User Testing", "Brand Identity"],
      color: "from-purple-500 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
      stats: "4.9★ Rating"
    },
    {
      id: 4,
      icon: <FaCloud className="text-3xl" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions that grow with your business needs.",
      features: ["AWS/Azure/GCP", "DevOps", "CI/CD Pipelines", "Serverless Architecture", "Microservices", "Kubernetes"],
      color: "from-orange-500 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
      stats: "24/7 Support"
    },
    {
      id: 5,
      icon: <FaRobot className="text-3xl" />,
      title: "AI & ML Solutions",
      description: "Intelligent solutions leveraging artificial intelligence and machine learning to automate and optimize processes.",
      features: ["Predictive Analytics", "Chatbots", "Computer Vision", "NLP", "Recommendation Systems", "Automation"],
      color: "from-indigo-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      stats: "AI-Powered"
    },
    {
      id: 6,
      icon: <FaShoppingCart className="text-3xl" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with secure payments, inventory management, and seamless user journeys.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Analytics", "Mobile Commerce", "Security"],
      color: "from-teal-500 to-green-600",
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      stats: "98% Uptime"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Space Effect Background */}
      <div className="absolute inset-0">
        {/* Stars Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e40af0a_0%,transparent_50%),radial-gradient(circle_at_70%_70%,#7c3aed0a_0%,transparent_50%)]"></div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: Math.random() * 2 + 0.5 + 'px',
                height: Math.random() * 2 + 0.5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.8 + 0.2,
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            initial={{
              x: Math.random() * 100 + 50 + 'vw',
              y: Math.random() * 30 + 'vh',
              opacity: 0,
            }}
            animate={{
              x: `-${Math.random() * 200 + 100}px`,
              y: `+=${Math.random() * 200 + 100}px`,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatDelay: Math.random() * 15 + 10,
            }}
          />
        ))}

        {/* Nebula Effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />

        {/* Space Dust */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute w-[1px] h-[1px] bg-white/20 rounded-full"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10 mb-6"
          >
            <CiSettings className="text-3xl text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Our Services
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to accelerate your business growth and drive innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Services Navigation */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-black/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                <FaCogs className="text-blue-400" />
                <span>All Services</span>
              </h3>
              
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`relative w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeService === index
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm"
                        : "hover:bg-white/5"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} backdrop-blur-sm`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${
                            activeService === index ? "text-white" : "text-gray-300"
                          }`}>
                            {service.title}
                          </h4>
                          <motion.div
                            animate={{ 
                              x: hoveredService === index ? 5 : 0,
                              opacity: hoveredService === index ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                            className="text-blue-400"
                          >
                            <FaChevronRight />
                          </motion.div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500">{service.stats}</span>
                          {activeService === index && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-blue-500 rounded-full"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Stats in sidebar */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      1000+
                    </div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Details */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[activeService].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl group"
              >
                {/* Background Image with Space Effect Overlay */}
                <div className="absolute inset-0">
                  {/* Card Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${services[activeService].bgImage})`
                    }}
                  />
                  
                  {/* Space Effect Overlay */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 backdrop-blur-[1px]"></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${services[activeService].color} opacity-15`}></div>
                    
                    {/* Animated Space Particles on Card */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={`card-particle-${i}`}
                        className="absolute w-[2px] h-[2px] bg-white/30 rounded-full"
                        style={{
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 100 + '%',
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: Math.random() * 5 + 3,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Service Icon and Header */}
                    <div className="lg:w-1/3">
                      <div className={`bg-gradient-to-r ${services[activeService].color} p-6 rounded-2xl backdrop-blur-sm border border-white/20 inline-block mb-6`}>
                        {services[activeService].icon}
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {services[activeService].title}
                      </h2>
                      
                      <div className="flex items-center gap-2 mb-6">
                        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <span className="text-sm text-gray-400">{services[activeService].stats}</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="lg:w-2/3">
                      <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                        {services[activeService].description}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {services[activeService].features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`}
                            />
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Get Started</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FaArrowRight />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Additional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "99.9%", label: "Uptime", color: "from-green-500 to-emerald-500", icon: "🚀" },
                  { value: "24/7", label: "Support", color: "from-blue-500 to-cyan-500", icon: "🛡️" },
                  { value: "< 24h", label: "Response Time", color: "from-purple-500 to-pink-500", icon: "⚡" },
                  { value: "100%", label: "Satisfaction", color: "from-orange-500 to-red-500", icon: "⭐" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl text-center hover:border-white/10 transition-all duration-300"
                  >
                    <div className="text-lg mb-2">{stat.icon}</div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl backdrop-blur-sm">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Space effect in CTA */}
              <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={`cta-star-${i}`}
                    className="absolute w-[1px] h-[1px] bg-white/30 rounded-full"
                    style={{
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                    }}
                    animate={{
                      opacity: [0.1, 0.5, 0.1],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">
                Ready to Launch Your Project into Space?
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto relative z-10">
                Join the journey with cutting-edge solutions that propel your business forward
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg relative z-10 group overflow-hidden"
              >
                <span className="flex items-center gap-3">
                  <FaRocket className="group-hover:animate-pulse" />
                  Schedule a Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ 
        __html: `
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
            background-size: 200% auto;
          }
        `
      }} />
    </section>
  );
};

export default Services;