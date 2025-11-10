import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaRocket, FaStar, FaRegClock, FaCode } from "react-icons/fa";

const Stats = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: FaAward, color: "from-orange-500 to-red-500" },
    { number: "98%", label: "Client Satisfaction", icon: FaStar, color: "from-green-500 to-emerald-600" },
    { number: "24/7", label: "Support Available", icon: FaRegClock, color: "from-blue-500 to-cyan-600" },
    { number: "100+", label: "Technologies Used", icon: FaCode, color: "from-purple-500 to-pink-600" },
    { number: "5+", label: "Years Experience", icon: FaUsers, color: "from-yellow-500 to-orange-500" },
    { number: "15+", label: "Countries Served", icon: FaRocket, color: "from-indigo-500 to-purple-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,75,0,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering excellence and innovation across global projects with measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default Stats;