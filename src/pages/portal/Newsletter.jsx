import React from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="relative py-20 bg-gradient-to-br from-orange-600 via-red-600 to-red-800 text-white overflow-hidden"
    >
      {/* Decorative glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,200,0,0.25),transparent_70%)]"></div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Icon and heading */}
        <div className="flex justify-center mb-4">
          <FaEnvelopeOpenText className="text-yellow-300 text-5xl animate-bounce" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Subscribe to Our <span className="text-yellow-300">Newsletter</span>
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-8 text-lg">
          Stay updated with the latest trends, tutorials, and exclusive offers from{" "}
          <span className="font-semibold text-yellow-300">mecatronix</span>.
          No spam — only valuable insights.
        </p>

        {/* Input Form */}
        <motion.form
          className="relative flex flex-col sm:flex-row justify-center items-center gap-4 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-[0_0_40px_rgba(255,120,0,0.25)] border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg outline-none text-gray-900 focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-500/30"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Subtext */}
        <p className="text-sm text-gray-300 mt-5">
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};

export default Newsletter;
