import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaPaperPlane,
  FaCheckCircle,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaGlobe,
  FaIndustry
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { addEnquiryAPI } from "../../api/api"; // Your enquiry API
import { useToast } from "../../hooks/useToast"; // Toast notifications

const Openline = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { success, error, loading } = useToast();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    // eslint-disable-next-line no-unused-vars
    const loadingToast = loading("Sending your enquiry...");

    try {
      // Call your enquiry API
      const result = await addEnquiryAPI(formData);

      if (result.success) {
        success("🎉 Enquiry sent successfully! We'll contact you within 24 hours.");
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      } else {
        error("❌ Failed to send enquiry. Please try again.");
      }
    } catch (err) {
      error("❌ Something went wrong. Please try again later.", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Address",
      desc: "connect@mecatronixhub.com",
      link: "mailto:connect@mecatronixhub.com",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Phone Number",
      desc: "+91 98432 74321",
      link: "tel:+919843274321",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      desc: "+91 98432 74321",
      link: "https://wa.me/919843274321",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      desc: "Ambattur Industrial Estate, Chennai, India",
      link: "#map",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Business Hours",
      desc: "Mon - Fri: 9:00 AM - 6:00 PM",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Support",
      desc: "24/7 Customer Support",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", color: "hover:bg-blue-400", label: "Twitter" },
    { icon: FaInstagram, href: "#", color: "hover:bg-pink-600", label: "Instagram" },
    { icon: FaFacebookF, href: "#", color: "hover:bg-blue-600", label: "Facebook" }
  ];

  const stats = [
    { number: "24h", label: "Response Time", icon: FaRocket },
    { number: "100+", label: "Projects Completed", icon: FaCheckCircle },
    { number: "98%", label: "Client Satisfaction", icon: FaUserTie },
    { number: "5+", label: "Years Experience", icon: FaIndustry }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-32 pb-20 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,75,0,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [null, -30, 0],
              x: [null, Math.random() * 15 - 7.5, 0],
              opacity: [0.1, 0.6, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
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
            <span className="text-sm font-semibold text-gray-300">Get In Touch</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient mb-6">
            Let's Build Something
            <br />
            <span className="text-transparent bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text">
              Amazing Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into exceptional digital experiences?
            Our team is here to bring your vision to life with cutting-edge technology
            and innovative solutions.
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

        {/* Contact Info & Form Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`bg-white/5 backdrop-blur-lg border border-white/10 p-3 rounded-lg ${social.color} hover:scale-110 transition-all duration-300 group relative overflow-hidden`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-white text-lg group-hover:text-white transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <FaCheckCircle className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-300 mb-4">
                    Your enquiry has been received. We'll contact you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40"
                >
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                    Start Your Project
                  </h3>
                  <p className="text-gray-400 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your project requirements, goals, and timeline..."
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-lg" />
                            Send Enquiry
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 text-center">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <FaMapMarkerAlt />
              Our Location
            </h3>
          </div>
          <iframe
            title="Mecatronix Hub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1353561615373!2d80.17885707587677!3d13.073238315209156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263f9f22dbd09%3A0x1c3a83ef6cbbf!2sAmbattur%20Industrial%20Estate%2C%20Chennai%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Openline;