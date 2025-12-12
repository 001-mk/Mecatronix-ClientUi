import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelopeOpenText, FaCheck, FaArrowRight, FaShieldAlt, FaRocket, FaPaperPlane, FaStar, FaSatellite } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const resetForm = () => {
    setStatus("idle");
    setEmail("");
  };

  const SpaceBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
          initial={{
            x: Math.random() * 100 + 50 + 'vw',
            y: Math.random() * 30 + 'vh',
            opacity: 0,
          }}
          animate={{
            x: `-${Math.random() * 200 + 100}px`,
            y: `+=${Math.random() * 200 + 100}px`,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatDelay: Math.random() * 15 + 10,
          }}
        />
      ))}

      {/* Nebula Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />

      {/* Space Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

    </div>
  );

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            y: [null, -50, 0],
            x: [null, Math.random() * 30 - 15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            width: Math.random() * 15 + 3,
            height: Math.random() * 15 + 3,
          }}
        />
      ))}
    </div>
  );

  return (
    <section
      id="newsletter"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <SpaceBackground />
      <FloatingParticles />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Icon with Glow */}
          <motion.div
            className="inline-flex items-center justify-center p-6 mb-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/10"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-0"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <FaPaperPlane className="relative text-4xl text-white z-10" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Join Our Orbit
              </span>
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Subscribe to our cosmic newsletter and receive interstellar insights directly in your inbox
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                  <FaRocket className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Weekly Space Briefs</h3>
                  <p className="text-gray-400">Cutting-edge tech insights and cosmic discoveries delivered weekly</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <FaShieldAlt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Exclusive Cosmic Content</h3>
                  <p className="text-gray-400">Access to premium tutorials, case studies, and interstellar knowledge</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-pink-400/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-blue-500/20">
                  <FaEnvelopeOpenText className="text-pink-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Priority Launch Access</h3>
                  <p className="text-gray-400">Be the first to know about new cosmic launches and special missions</p>
                </div>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                {["🚀 No Spam", "⚡ Instant Unsubscribe", "🛡️ Privacy First", "⭐ VIP Access"].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="px-3 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-gray-300 text-sm">{badge}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              {/* Form Card */}
              <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                {/* Space Background in Card */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-[1px] h-[1px] bg-white/10 rounded-full"
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Close button */}
                {(status === "success" || status === "error") && (
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <IoClose className="text-white text-xl" />
                  </motion.button>
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Launch Your Journey
                  </h3>
                  <p className="text-gray-400 mb-8">
                    Enter your email to join our cosmic community
                  </p>

                  {/* Email Input */}
                  <div className="relative mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@galaxy.com"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                      disabled={status === "loading" || status === "success"}
                      required
                    />
                    {status === "loading" && (
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                      </motion.div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className={`relative w-full py-4 rounded-xl font-bold text-lg overflow-hidden group ${
                      status === "loading" || status === "success"
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600"
                    }`}
                    whileHover={status === "idle" || status === "error" ? { scale: 1.02 } : {}}
                    whileTap={status === "idle" || status === "error" ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {status === "loading" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Launching...
                        </>
                      ) : status === "success" ? (
                        <>
                          <FaCheck className="text-green-300" />
                          Welcome to Orbit!
                        </>
                      ) : (
                        <>
                          Join Mission
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    {status === "idle" || status === "error" ? (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    ) : null}
                  </motion.button>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        className="mt-4 p-4 rounded-xl bg-red-500/10 backdrop-blur-sm border border-red-500/30 text-red-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-sm">Please enter a valid email address</span>
                        </div>
                      </motion.div>
                    )}
                    
                    {status === "success" && (
                      <motion.div
                        className="mt-4 p-4 rounded-xl bg-green-500/10 backdrop-blur-sm border border-green-500/30 text-green-200"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FaStar className="animate-pulse" />
                          <span className="text-sm">Welcome aboard! Check your email for confirmation.</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Stats */}
              <motion.div
                className="mt-8 grid grid-cols-3 gap-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                {[
                  { value: "10K+", label: "Cosmic Subscribers", color: "from-blue-400 to-cyan-400" },
                  { value: "99%", label: "Orbit Rate", color: "from-purple-400 to-pink-400" },
                  { value: "24h", label: "Light Speed Response", color: "from-cyan-400 to-blue-400" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.form>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            By subscribing, you agree to our Interstellar Privacy Policy and consent to receive cosmic transmissions from us.
          </p>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;