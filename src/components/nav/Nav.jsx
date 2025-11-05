import React, { useState, useEffect } from "react";
import { NAV } from "../../helper/data_help";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from "react-router-dom";
import Img_Helper from "../../helper/img_help";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const navigate = useNavigate();
  const subtitles = ["Technology", "Automation", "Future"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="h-14 w-auto flex items-center justify-center relative">
            <img
              src={Img_Helper.mainlogo}
              alt="Mecatronix Logo"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {/* SLIDING SUBTITLE */}
            <div className="absolute bottom-0 left-14 overflow-hidden w-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: [0, -3, 3, -2, 2, 0], opacity: 1 }}
                  exit={{ x: 60, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    rotate: { duration: 0.4, ease: "easeInOut" },
                  }}
                  className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider"
                >
                  {subtitles[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link
              key={n.id}
              to={n.id}
              className={`text-sm font-semibold  ${location.pathname === n.id
                ? "text-orange-400"
                : "text-gray-300"
                } text-gray-300 hover:text-orange-400 transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-orange-500 to-red-600 hover:after:w-full after:transition-all after:duration-300`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex">
          <Link
            to="/openline"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold tracking-wide shadow-md hover:shadow-orange-500/30 transition-all duration-300"
          >
            Get Quote
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Nav;
