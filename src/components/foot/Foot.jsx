import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { NAV } from "../../helper/data_help";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Img_Helper from "../../helper/img_help";
import { motion, AnimatePresence } from "framer-motion";

const Foot = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const subtitles = ["Technology", "Automation", "Future"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300 pt-14 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12 relative z-10">
        {/* ===== BRAND SECTION ===== */}
        <div>
          <div
            className="flex items-center gap-3 cursor-pointer group mb-4"
            onClick={() => navigate("/")}
          >
            <div className="h-14 w-auto flex items-center justify-center relative">
              <img
                src={Img_Helper.mainlogo}
                alt="Mecatronix Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-14 overflow-hidden w-[100px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 60, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider"
                  >
                    {subtitles[currentIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Innovating technology with precision. Mecatronix delivers
            cutting-edge engineering and digital solutions for the modern world.
          </p>

          <div className="flex items-center gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaWhatsapp].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_12px_rgba(255,80,0,0.4)]"
                aria-label="social link"
              >
                <Icon className="text-white text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2 text-sm">
            {NAV.map((n) => (
              <Link
                key={n.id}
                to={n.id}
                className={`relative font-medium ${location.pathname === n.id
                  ? "text-orange-400"
                  : "text-gray-300"
                  } hover:text-orange-400 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-orange-500 to-red-600 hover:after:w-full after:transition-all after:duration-300`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ===== CONTACT INFO ===== */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <span>123 Tech Park, Innovation City, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              <a
                href="tel:+911234567890"
                className="hover:text-orange-400 transition"
              >
                +91 12345 67890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              <a
                href="mailto:info@mecatronix.com"
                className="hover:text-orange-400 transition"
              >
                info@mecatronix.com
              </a>
            </li>
          </ul>
        </div>

        {/* ===== SUBSCRIBE FORM ===== */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">
            Subscribe
          </h3>
          <p className="text-sm mb-3 text-gray-400">
            Join our newsletter to get updates about our latest innovations and
            projects.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center rounded-lg overflow-hidden border border-gray-700 focus-within:border-orange-500 transition-colors duration-300 shadow-[0_0_12px_rgba(255,80,0,0.15)]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-white bg-transparent text-sm outline-none placeholder-gray-500 focus:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 text-sm font-semibold hover:brightness-110 hover:shadow-[0_0_10px_rgba(255,80,0,0.4)] transition-all duration-300"
            >
              <SiMinutemailer className="text-lg" />
            </button>
          </form>
        </div>

      </div>

      {/* ===== BOTTOM LINE ===== */}
      <div className="border-t border-gray-800 mt-10 pt-4 flex flex-col sm:flex-row items-center justify-around text-center text-sm text-gray-500 px-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-400 font-semibold">Mecatronix</span>. All rights reserved.
        </p>
        <p className="mt-1 sm:mt-0">
          Built with ❤️ using{" "}
          <span className="text-orange-400">React</span> &{" "}
          <span className="text-orange-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Foot;
