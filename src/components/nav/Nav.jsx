import React, { useState, useEffect } from "react";
import { NAV } from "../../helper/data_help";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Img_Helper from "../../helper/img_help";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaBars,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const subtitles = ["Technology", "Automation", "Future"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animated subtitles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  // Animation variants
  const menuVariants = {
    closed: { x: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
    open: { x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 40 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-gray-800 shadow-[0_0_25px_-5px_rgba(255,255,255,0.1)]"
          : "bg-transparent backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* --- LOGO --- */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="h-12 sm:h-14 w-auto flex items-center justify-center relative">
            <motion.img
              src={Img_Helper.mainlogo}
              alt="Mecatronix Logo"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
            {/* SLIDING SUBTITLE */}
            <div className="absolute bottom-0 left-12 sm:left-14 overflow-hidden w-[90px] sm:w-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 60, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-semibold tracking-wider"
                >
                  {subtitles[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* --- DESKTOP NAV LINKS --- */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={n.id}
                className={`text-sm font-semibold relative group ${location.pathname === n.id
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-orange-400"
                  }`}
              >
                {n.label}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300 rounded-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* --- DESKTOP CTA --- */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Link
            to="/openline"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-[0_0_10px_rgba(255,100,0,0.4)] hover:shadow-[0_0_20px_rgba(255,100,0,0.6)] transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </Link>
        </motion.div>

        {/* --- MOBILE MENU BUTTON --- */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            to="/openline"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3.5 py-2 rounded-md text-xs font-semibold shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            Quote
          </Link>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FaTimes className="text-white text-lg" />
                </motion.div>
              ) : (
                <motion.div
                  key="bars"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FaBars className="text-white text-lg" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-gray-950 border-l border-gray-800 shadow-2xl z-50"
            >
              <div className="p-6 border-b border-gray-700 flex items-center justify-between bg-gray-900/90">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Menu
                </h3>
                <FaTimes
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white cursor-pointer text-xl"
                />
              </div>

              {/* Menu Items */}
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                className="p-6 space-y-3"
              >
                {NAV.map((item, i) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <Link
                      to={item.id}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${location.pathname === item.id
                          ? "bg-orange-500/20 border-orange-400 text-orange-400 shadow-md"
                          : "bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="font-medium">{item.label}</span>
                      <FaArrowRight
                        className={`text-xs transition-transform duration-300 ${location.pathname === item.id
                            ? "text-orange-400"
                            : "text-gray-400 group-hover:translate-x-1"
                          }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Contact */}
              <div className="p-6 border-t border-gray-700 mt-4 space-y-3">
                <h4 className="text-white text-sm font-semibold tracking-wider">
                  Contact Us
                </h4>
                <div className="space-y-2">
                  <a
                    href="tel:+919843274321"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition-all"
                  >
                    <FaPhone className="text-blue-400 text-sm" />
                    <span className="text-gray-200 text-sm font-medium">
                      +91 98432 74321
                    </span>
                  </a>
                  <a
                    href="mailto:connect@mecatronixhub.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition-all"
                  >
                    <FaEnvelope className="text-red-400 text-sm" />
                    <span className="text-gray-200 text-sm font-medium">
                      connect@mecatronixhub.com
                    </span>
                  </a>
                  <a
                    href="https://wa.me/919843274321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/60 hover:bg-gray-700 transition-all"
                  >
                    <FaWhatsapp className="text-green-400 text-sm" />
                    <span className="text-gray-200 text-sm font-medium">
                      Chat on WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
