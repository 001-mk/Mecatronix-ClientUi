import React, { useEffect, useMemo, useState } from "react";
import Icons from "../../helper/icon_help"; // Adjust path if needed to match your folder structure
import { SpaceBackground } from "../../components/star/SpaceBackground";
import { MdOutlineQrCode2 } from "react-icons/md";

const Hero = () => {
  // Destructuring only the icons available in your Icon_Helper.js
  const {
    FaLaptopCode,
    FaRocket,
    FaCodeBranch,
    FaMicrochip
  } = Icons;

  const [particles, setParticles] = useState([]);

  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  const [shootingStars] = useState(() =>
    Array.from({ length: 4 }).map(() => ({
      id: crypto?.randomUUID?.() ?? Math.random().toString(36),
      left: Math.random() * 100,
      top: Math.random() * 40,
      delay: Math.random() * 10
    }))
  );

  // Generate particles once on mount
  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 15 + 5,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 4
    }));
    setParticles(newParticles);
  }, []);


  return (
    <section
      id="Portal"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-20"
    >

      <SpaceBackground stars={stars} shootingStars={shootingStars} />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-gradient-to-r from-orange-500/20 to-orange-500/20 rounded-full animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* 02. CONTENT SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT & DATA READOUT */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-4 bg-black border border-white/10 px-4 py-1.5 skew-x-[-15deg]">
            <div className="w-2 h-2 bg-orange-600 animate-pulse skew-x-[15deg]"></div>
            <span className="text-[10px] font-mono font-black i text-orange-500 uppercase tracking-[.3em] skew-x-[15deg]">
              Status_Active // Est_2025
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter uppercase">
              MECA<span className="text-orange-600">TRONIX</span>
              <div className="text-3xl md:text-5xl text-gray-500 font-light mt-2 tracking-widest border-l-4 border-orange-600 pl-6">
                Digital_Engines
              </div>
            </h1>

            <p className="text-xs md:text-sm font-mono text-gray-400 leading-relaxed max-w-md uppercase tracking-widest">
              [ <span className="text-white">Protocol_01</span> ] Deploying advanced automation
              architectures and high-performance digital ecosystems for the industrial frontier.
            </p>
          </div>

          {/* Tactical CTA Buttons */}
          <div className="flex flex-wrap gap-6 pt-6">
            <a
              href="/portfolio"
              className="relative group bg-orange-600 text-white px-10 py-4 skew-x-[-15deg] transition-all hover:bg-orange-700 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3 skew-x-[15deg] font-black text-[11px] uppercase tracking-widest">
                Explore_Work {FaRocket && <FaRocket className="group-hover:translate-x-1 transition-transform" />}
              </span>
            </a>

            <a
              href="/openline"
              className="relative group border border-white/20 text-white px-10 py-4 skew-x-[-15deg] transition-all hover:border-orange-600 hover:text-orange-500"
            >
              <span className="relative z-10 flex items-center gap-3 skew-x-[15deg] font-black text-[11px] uppercase tracking-widest">
                Start_Project {FaCodeBranch && <FaCodeBranch className="group-hover:scale-110 transition-transform" />}
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT: TACTICAL HUD MODULE */}
        <div className="relative flex justify-center items-center ">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] -rotate-90 border border-white/5 bg-white/[0.02] rounded-full flex items-center justify-center p-8">

            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-600"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-orange-600"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-orange-600"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-600"></div>

            <div className="absolute w-[80%] h-[80%] border border-dashed border-white/30 rounded-full animate-[spin_20s_linear_infinite]"></div>

            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-1/2 border-b rounded-b-full border-orange-500/30 bg-gradient-to-t from-orange-500/10 to-transparent animate-scan z-0"></div>

            <div className="relative z-10 text-center rotate-90 ">
              <div className="mb-6 flex justify-center">
                <div className="p-2 border border-orange-600/20 bg-black">
                  {FaLaptopCode && <MdOutlineQrCode2 className="text-7xl text-orange-600" />}
                </div>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-[.4em] mb-2">
                System_Core
              </h3>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                {FaMicrochip && <FaMicrochip className="inline mr-2" />}
                AI_Neural • Scalable_Build
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-left border-l border-orange-600 pl-2">
                  <p className="text-[8px] text-gray-600 font-mono uppercase">Load_Factor</p>
                  <p className="text-[12px] text-white font-mono tracking-tighter">88.4%_NOMINAL</p>
                </div>
                <div className="text-left border-l border-white/10 pl-2">
                  <p className="text-[8px] text-gray-600 font-mono uppercase">Ping_Lat</p>
                  <p className="text-[12px] text-white font-mono tracking-tighter">1.02ms_STABLE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 03. INDUSTRIAL SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.5em] rotate-90 origin-left translate-x-1.5">
          Scroll_Down
        </span>
        <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-600 animate-scroll-line"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;