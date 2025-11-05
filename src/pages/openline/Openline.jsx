import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white pt-32 pb-20 relative overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,80,0,0.15),transparent_70%)] animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Let’s Connect & Collaborate
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Whether you're a startup with a vision or an enterprise scaling
            digital transformation, Mecatronix Hub is ready to build your
            future.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaEnvelope className="text-orange-400 text-2xl" />,
              title: "Email",
              desc: "connect@mecatronixhub.com",
            },
            {
              icon: <FaPhoneAlt className="text-orange-400 text-2xl" />,
              title: "Phone",
              desc: "+91 98432 74321",
            },
            {
              icon: <FaWhatsapp className="text-orange-400 text-2xl" />,
              title: "WhatsApp",
              desc: "+91 98432 74321",
            },
            {
              icon: <FaMapMarkerAlt className="text-orange-400 text-2xl" />,
              title: "Location",
              desc: "Ambattur Industrial Estate, Chennai, India",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:border-orange-400 hover:shadow-orange-400/20 text-center transition-all duration-300"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h4 className="mt-3 font-semibold text-orange-400">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 shadow-lg shadow-black/40 backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-orange-400 text-center">
            Send Us a Message
          </h3>
          <p className="text-gray-400 text-center mb-8">
            Have a project idea or partnership proposal? Let’s talk.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              className="px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="Your Name"
              required
            />
            <input
              className="px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="Email Address"
              required
            />
            <input
              className="px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="Phone Number"
              required
            />
            <input
              className="px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="Company (Optional)"
            />
            <textarea
              className="md:col-span-2 px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              rows={5}
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl overflow-hidden border border-gray-700 shadow-lg shadow-black/40"
        >
          <iframe
            title="Mecatronix Hub Pvt. Ltd. Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1353561615373!2d80.17885707587677!3d13.073238315209156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263f9f22dbd09%3A0x1c3a83ef6cbbf!2sAmbattur%20Industrial%20Estate%2C%20Chennai%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
