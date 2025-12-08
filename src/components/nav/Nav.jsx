import React, { useState, useEffect } from "react";
import { NAV } from "../../helper/data_help";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Img_Helper from "../../helper/img_help";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaPhone,
  FaStar,
  FaRocket,
  FaShieldAlt,
  FaHeadset
} from "react-icons/fa";
import mecatronixConfig from "../../config/envConfig";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Use centralized configuration with safe destructuring
  const {
    contact = {},
  } = mecatronixConfig || {};

  const PRIMARY_PHONE = contact?.primaryPhone || '+919843274321';

  const subtitles = ["Innovation", "Automation", "Future", "Excellence", "Technology"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  // Enhanced services data
  const services = [
    {
      title: "Industrial Automation",
      description: "Complete automation solutions for manufacturing",
      icon: FaRocket,
      color: "from-orange-500 to-red-500",
      bg: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      title: "Robotics & AI",
      description: "Smart robotic systems with AI integration",
      icon: FaShieldAlt,
      color: "from-blue-500 to-purple-600",
      bg: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      title: "IoT Solutions",
      description: "Connected devices and smart systems",
      icon: FaHeadset,
      color: "from-green-500 to-emerald-600",
      bg: "bg-gradient-to-r from-green-500 to-emerald-600"
    }
  ];

  // Animated subtitles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-b from-black/90 to-transparent backdrop-blur-2xl"
          : "bg-gradient-to-b from-black/80 to-transparent backdrop-blur-lg"
      }`}
    >
      {/* Top Announcement Bar */}
      <motion.div
        className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-4 text-center text-sm font-medium relative overflow-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-shimmer" />

        <div className="relative z-10 flex items-center justify-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <FaStar className="text-yellow-300" />
          </motion.div>
          <span className="font-semibold">🚀 Limited Time Offer: Get 20% Off on Automation Solutions!</span>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <FaStar className="text-yellow-300" />
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* --- OPTIMIZED LOGO SECTION --- */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer group relative"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative h-14 w-auto flex items-center justify-center">
            {/* Main Logo */}
            <motion.img
              src={Img_Helper.mainlogo}
              alt="Mecatronix Logo"
              className="w-full h-full object-contain transition-all duration-300"
              whileHover={{
                scale: 1.1,
                rotate: [0, -3, 3, 0]
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Pulsing Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-sm opacity-0 group-hover:opacity-40 -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0, 0.1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </div>
          <div className="absolute bottom-0 left-[51px] overflow-hidden w-[130px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 15px rgba(255,165,0,0.7)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                exit={{ x: 100, opacity: 0, scale: 1.2 }}
                transition={{
                  duration: 1.0,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-xs text-transparent bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text uppercase font-black tracking-widest"
              >
                {subtitles[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* --- ENHANCED DESKTOP NAV LINKS --- */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.3 }}
              className="relative"
              onMouseEnter={() => setHoveredNav(n.id)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <Link
                to={n.id}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                  location.pathname === n.id
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {n.label}

                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/0 to-red-600/0 group-hover:from-orange-500/10 group-hover:to-red-600/10 transition-all duration-300 -z-10" />

                {/* Active Indicator */}
                {location.pathname === n.id && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              {n.id === "/services" && hoveredNav === n.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-4 z-50"
                >
                  <div className="space-y-3">
                    {services.map((service, index) => {
                      const ServiceIcon = service.icon;
                      return (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className={`${service.bg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <ServiceIcon className="text-white text-lg" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-sm">{service.title}</h4>
                            <p className="text-gray-400 text-xs">{service.description}</p>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="text-orange-400"
                          >
                            <FaArrowRight className="text-sm" />
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </nav>

        {/* --- ENHANCED DESKTOP CTA & CONTACT --- */}
        <motion.div
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Quick Contact */}
          <div className="flex items-center gap-3">
            {/* Phone */}
            <motion.a
              href={`tel:${PRIMARY_PHONE}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="text-blue-400 text-sm" />
              <span className="text-white text-xs font-semibold">Call Us</span>
            </motion.a>
          </div>

          {/* Main CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/openline"
              className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

              <span className="relative flex items-center gap-2">
                Get Quote
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaRocket className="text-xs" />
                </motion.div>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* --- MOBILE CTA ONLY (No Menu Button) --- */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Link
              to="/openline"
              className="relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm tracking-wide shadow-lg sm:shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/40 sm:hover:shadow-orange-500/50 transition-all duration-500 overflow-hidden block"
            >
              {/* Animated Shine */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 sm:via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

              {/* Floating Particles - Hidden on mobile for performance */}
              <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      width: 2,
                      height: 2,
                      left: `${20 + i * 30}%`,
                      bottom: 5,
                    }}
                  />
                ))}
              </div>

              <span className="relative flex items-center gap-2 sm:gap-3">
                <span className="hidden xs:inline">Get Quote</span>
                <span className="xs:hidden">Quote</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaRocket className="text-xs" />
                </motion.div>
              </span>
            </Link>

            {/* Outer Glow - Hidden on very small screens for performance */}
            <motion.div
              className="hidden sm:block absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Nav;