import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCode, FaMobile, FaPalette, FaCloud, FaRobot, FaShieldAlt, 
  FaChartLine, FaDatabase, FaCogs, FaSearch, FaShoppingCart, FaGlobe 
} from "react-icons/fa";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Progressive Web Apps", "API Integration", "Performance Optimization"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user engagement and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for growing businesses.",
      features: ["AWS/Azure/GCP", "DevOps", "CI/CD Pipelines", "Serverless Architecture"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs and growth objectives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Navigation */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeService === index
                    ? "bg-white/10 backdrop-blur-lg border border-orange-500/50"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <div className={`bg-gradient-to-r ${services[activeService].color} p-4 rounded-2xl inline-block mb-6`}>
                {services[activeService].icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{services[activeService].title}</h3>
              <p className="text-gray-300 text-lg mb-6">{services[activeService].description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;