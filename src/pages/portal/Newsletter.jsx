import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelopeOpenText, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { subscribeNewsletterAPI } from "../../api/api";
import { validateEmail } from "../../helper/res_help";
import { useToast } from "../../hooks/useToast"; // Import the toast hook

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [isHovered, setIsHovered] = useState(false);
  const { success, error, loading, dismissAll } = useToast(); // Initialize toast hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      error("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Show loading toast
    const loadingToast = loading("Subscribing to newsletter...");

    try {
      const result = await subscribeNewsletterAPI({ email: email });

      // Dismiss loading toast
      dismissAll();

      if (result.success) {
        setStatus("success");
        success("🎉 Welcome to our newsletter! Check your email for confirmation.", {
          duration: 5000,
        });
        setEmail("");

        // Reset form after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        error("❌ Subscription failed. Please try again later.");
      }
    } catch (err) {
      // Dismiss loading toast
      dismissAll();

      setStatus("error");
      error("❌ Something went wrong. Please try again later.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setEmail("");
    dismissAll();
  };

  // Floating particles background
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-300/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: [null, -30, 0],
            x: [null, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
          }}
        />
      ))}
    </div>
  );

  return (
    <section
      id="newsletter"
      className="relative py-24 bg-gradient-to-br from-orange-600 via-red-600 to-red-800 text-white overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,200,0,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,100,100,0.2),transparent_70%)]"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <FloatingParticles />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Animated Icon */}
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-yellow-300 rounded-full blur-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <FaEnvelopeOpenText className="relative text-yellow-300 text-6xl z-10" />
          </div>
        </motion.div>

        {/* Heading with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
            Join Our{" "}
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Newsletter
            </motion.span>
          </h2>
        </motion.div>

        <motion.p
          className="text-gray-200 max-w-2xl mx-auto mb-10 text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Get exclusive access to cutting-edge tutorials, industry insights, and
          <span className="font-bold text-yellow-300"> special offers</span> from{" "}
          <span className="font-extrabold text-yellow-300">mecatronix</span>.
          Transform your skills with our curated content.
        </motion.p>

        {/* Enhanced Form with States */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative flex flex-col sm:flex-row justify-center items-center gap-4 bg-white/15 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl shadow-orange-500/20 border border-white/20">
            {/* Close button for success/error states */}
            {(status === "success" || status === "error") && (
              <motion.button
                type="button"
                onClick={resetForm}
                className="absolute -top-2 -right-2 bg-white/20 backdrop-blur-md rounded-full p-1 hover:bg-white/30 transition-colors z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <IoClose className="text-white text-lg" />
              </motion.button>
            )}

            <div className="relative flex-1 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email address"
                className="w-full px-6 py-4 rounded-2xl outline-none text-gray-900 text-lg font-medium placeholder-gray-500 focus:ring-4 focus:ring-yellow-400/50 shadow-lg transition-all duration-300 border-2 border-transparent focus:border-yellow-400"
                disabled={status === "loading" || status === "success"}
                required
              />

              {/* Loading indicator */}
              {status === "loading" && (
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                </motion.div>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl ${status === "loading" || status === "success"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-gray-900 hover:shadow-yellow-500/40"
                }`}
              whileHover={status === "idle" || status === "error" ? {
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              } : {}}
              whileTap={status === "idle" || status === "error" ? { scale: 0.95 } : {}}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.span className="flex items-center gap-2 justify-center">
                {status === "loading" ? (
                  "Subscribing..."
                ) : status === "success" ? (
                  <>
                    <FaCheck className="text-green-600" />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </motion.span>
            </motion.button>
          </div>

          {/* Loading State Indicator */}
          <AnimatePresence>
            {status === "loading" && (
              <motion.div
                className="mt-6 p-4 rounded-2xl backdrop-blur-md border bg-blue-500/20 border-blue-400/50 text-blue-100"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center gap-2 text-lg font-medium">
                  <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  Subscribing to newsletter...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Enhanced Trust Indicators */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Unsubscribe anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>GDPR compliant</span>
          </div>
        </motion.div>

        {/* Subscription Stats */}
        <motion.div
          className="mt-12 p-6 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "10K+", label: "Subscribers" },
              { number: "99%", label: "Open Rate" },
              { number: "24h", label: "Response Time" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletter;