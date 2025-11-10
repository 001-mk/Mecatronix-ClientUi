import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    { name: "TechStart Inc.", industry: "Technology", logo: "TS" },
    { name: "DataInsight Corp", industry: "Analytics", logo: "DI" },
    { name: "Creative Studio", industry: "Design", logo: "CS" },
    { name: "FinTech Solutions", industry: "Finance", logo: "FS" },
    { name: "ShopEasy Retail", industry: "E-commerce", logo: "SR" },
    { name: "SecureCloud Inc.", industry: "Security", logo: "SC" },
    { name: "SmartTech Industries", industry: "IoT", logo: "ST" },
    { name: "BusinessCorp Ltd.", industry: "Enterprise", logo: "BC" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're proud to partner with innovative companies across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <h3 className="text-white font-semibold mb-1">{client.name}</h3>
              <p className="text-gray-400 text-sm">{client.industry}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;