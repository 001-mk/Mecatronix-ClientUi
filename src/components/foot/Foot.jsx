import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaAward,
  FaStar
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { NAV } from "../../helper/data_help";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Img_Helper from "../../helper/img_help";
import { motion, AnimatePresence } from "framer-motion";

// Import the centralized configuration
import { mecatronixConfig } from "../../config/envConfig";

const Foot = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Use centralized configuration with safe destructuring
  const {
    app = {},
    contact = {},
    social = {},
    location: companyLocation = {},
  } = mecatronixConfig || {};

  // Destructure with safe fallbacks
  const APP_NAME = app?.name || 'Mecatronix';
  const COMPANY_NAME = app?.companyName || 'Mecatronix Industries';
  const APP_SLOGAN = app?.slogan || 'Engineering the Future of Automation';

  const PRIMARY_PHONE = contact?.primaryPhone || '+919843274321';
  const WHATSAPP_NUMBER = contact?.whatsappNumber || '+919843274321';
  const COMPANY_EMAIL = contact?.companyEmail || 'connect@mecatronixhub.com';
  const SUPPORT_EMAIL = contact?.supportEmail || 'support@mecatronixhub.com';
  const SALES_EMAIL = contact?.salesEmail || 'sales@mecatronixhub.com';

  const COMPANY_ADDRESS = companyLocation?.address || '123 Industrial Park, Tech Zone';
  const COMPANY_CITY = companyLocation?.city || 'Chennai';
  const COMPANY_STATE = companyLocation?.state || 'Tamil Nadu';
  const COMPANY_COUNTRY = companyLocation?.country || 'India';

  const subtitles = ["Technology", "Automation", "Future", "Innovation", "Excellence"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  // Social Media Links from centralized config
  const socialLinks = [
    {
      icon: FaFacebookF,
      color: "from-blue-600 to-blue-700",
      href: social?.facebook,
      delay: 0,
      label: "Facebook"
    },
    {
      icon: FaInstagram,
      color: "from-pink-600 to-purple-600",
      href: social?.instagram,
      delay: 0.1,
      label: "Instagram"
    },
    {
      icon: FaWhatsapp,
      color: "from-green-500 to-green-600",
      href: `https://wa.me/${WHATSAPP_NUMBER ? WHATSAPP_NUMBER.replace('+', '') : ''}`,
      delay: 0.2,
      label: "WhatsApp"
    },
  ].filter(link => link.href); // Filter out undefined URLs

  // Contact information from config
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: `${COMPANY_ADDRESS}, ${COMPANY_CITY}, ${COMPANY_STATE}, ${COMPANY_COUNTRY}`,
      delay: 0
    },
    {
      icon: FaPhoneAlt,
      text: PRIMARY_PHONE,
      href: `tel:${PRIMARY_PHONE}`,
      delay: 0.1
    },
    {
      icon: FaEnvelope,
      text: COMPANY_EMAIL,
      href: `mailto:${COMPANY_EMAIL}`,
      delay: 0.2
    },
  ];

  // Generate stars with animation
  const generateStars = () => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 3 + 2
    }));
  };

  const [stars] = useState(() => generateStars());

  return (
    <footer className="bg-black text-gray-300 pt-20 pb-8 relative overflow-hidden">

      {/* Space Effect Background */}
      <div className="absolute inset-0">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: star.opacity,
              }}
              animate={{
                opacity: [star.opacity, star.opacity * 0.5, star.opacity],
              }}
              transition={{
                duration: star.animationDuration,
                repeat: Infinity,
                delay: star.animationDelay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 30 + 'vh',
              opacity: 0,
            }}
            animate={{
              x: [null, `-${Math.random() * 200 + 100}px`],
              y: [null, `+=${Math.random() * 100 + 50}px`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 1.5 + 0.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 15 + 10,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 relative z-10">

        {/* ===== BRAND SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <motion.div
            className="flex items-center gap-3 cursor-pointer group relative mb-12"
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
                transition={{ duration: 0.6 }}
              />
              <motion.img
                src={Img_Helper.titlte}
                alt="Mecatronix Logo"
                className="w-full h-3/4 object-contain transition-all duration-300"
                transition={{ duration: 0.6 }}
              />

            </div>
            <div className="absolute bottom-0 left-[68px] overflow-hidden w-[130px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: -100, opacity: 0, scale: 0.8 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ x: 100, opacity: 0, scale: 1.2 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="text-[10px] text-transparent bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text uppercase font-black tracking-widest"
                >
                  {subtitles[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            className="text-sm leading-relaxed text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {APP_SLOGAN}. We transform complex challenges into elegant technological solutions.
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + social.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                <div className="relative">
                  <div className={`bg-gradient-to-r ${social.color} p-4 rounded-2xl backdrop-blur-lg border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 z-10 relative overflow-hidden`}>
                    <social.icon className="text-white text-base relative z-10" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  {/* Outer Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10`}></div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== QUICK LINKS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Quick Links
          </motion.h3>
          <nav className="flex flex-col gap-4">
            {NAV.map((n, index) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={n.id}
                  className={`flex items-center gap-3 text-base font-semibold transition-all duration-500 ${location.pathname === n.id
                    ? "text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text"
                    : "text-gray-400 group-hover:text-white"
                    }`}
                >
                  <motion.div
                    className={`p-2 rounded-lg ${location.pathname === n.id
                      ? "bg-gradient-to-r from-orange-500 to-red-600"
                      : "bg-gray-800 group-hover:bg-orange-500/20"
                      } transition-all duration-500`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaArrowRight className={`text-xs ${location.pathname === n.id ? "text-white" : "text-gray-400 group-hover:text-orange-400"
                      } transition-colors duration-500`} />
                  </motion.div>
                  {n.label}

                  {location.pathname === n.id && (
                    <motion.div
                      layoutId="footerActive"
                      className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full ml-2"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* ===== CONTACT INFO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h3>
          <ul className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + item.delay }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl shadow-2xl group-hover:shadow-orange-500/30 transition-all duration-500 z-10 relative">
                    <item.icon className="text-white text-sm" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                </motion.div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:bg-clip-text transition-all duration-500 flex-1 pt-1"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 flex-1 pt-1">{item.text}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ===== SUBSCRIBE FORM ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Stay Updated
          </motion.h3>
          <motion.p
            className="text-sm mb-6 text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join our exclusive newsletter and be the first to access cutting-edge insights,
            project updates, and innovative solutions.
          </motion.p>

          <AnimatePresence mode="wait">
            {isSubscribed ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg border border-green-400/30 rounded-2xl p-6 text-center shadow-2xl shadow-green-500/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <FaEnvelope className="text-white text-lg" />
                </motion.div>
                <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                  <span className="text-lg font-bold">Successfully Subscribed!</span>
                </div>
                <p className="text-sm text-green-300">Welcome to the {APP_NAME.toLowerCase()} innovation circle!</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                onSubmit={handleSubscribe}
                className="relative group"
              >
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 focus-within:border-orange-500 focus-within:shadow-2xl focus-within:shadow-orange-500/30 transition-all duration-500 shadow-xl">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 text-white bg-transparent text-base outline-none placeholder-gray-500 focus:placeholder-gray-400 font-medium"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SiMinutemailer className="text-xl" />
                  </motion.button>
                </div>

                {/* Form Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 group-focus-within:opacity-30 transition-opacity duration-500 -z-10" />
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ===== BOTTOM LINE ===== */}
      <motion.div
        className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between text-center text-sm text-gray-500 px-4 sm:px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center gap-2 mb-4 lg:mb-0"
          whileHover={{ scale: 1.02 }}
        >
          <span>© {new Date().getFullYear()}</span>
          <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text font-black text-lg">{APP_NAME.toLowerCase()}</span>
          <span className="text-gray-600">•</span>
          <span>All rights reserved</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <span className="flex items-center gap-2 text-gray-400">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            Crafted with passion
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1">
              <FaCode className="text-orange-400" />
              <FaPaintBrush className="text-purple-400" />
            </span>
          </span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Foot;