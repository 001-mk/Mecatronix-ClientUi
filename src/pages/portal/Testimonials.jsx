import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaAward, FaRocket, FaSatellite } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starArray = Array.from({ length: 200 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2
    }))
    setStars(starArray)
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CEO, TechStart Inc.",
      company: "E-commerce Platform",
      content: "Mecatronix transformed our online presence with a stunning e-commerce platform. Their attention to detail and technical expertise exceeded our expectations. The project was delivered on time and within budget, and we've seen a 40% increase in sales since launch.",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
      glow: "blue",
      initials: "SC",
      project: "E-commerce Redesign"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CTO, DataInsight Corp",
      company: "Data Analytics Dashboard",
      content: "The team delivered a complex data analytics dashboard ahead of schedule. Their professionalism and technical skills are truly impressive. The solution has helped us make data-driven decisions that improved our operational efficiency by 35%.",
      rating: 5,
      color: "from-purple-500 to-pink-500",
      glow: "purple",
      initials: "MR",
      project: "Data Analytics Platform"
    },
    {
      id: 3,
      name: "Emily Watson",
      position: "Marketing Director, Creative Studio",
      company: "Portfolio Website",
      content: "Our new portfolio website has generated 3x more leads. The design is beautiful and the performance is exceptional. The team understood our brand perfectly and delivered a website that truly represents our creative vision.",
      rating: 5,
      color: "from-green-500 to-emerald-500",
      glow: "green",
      initials: "EW",
      project: "Creative Portfolio"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Founder, FinTech Solutions",
      company: "Mobile Banking App",
      content: "The mobile banking app they built for us is secure, fast, and user-friendly. Their ongoing support has been invaluable. We've received exceptional feedback from our users about the app's intuitive design and reliability.",
      rating: 5,
      color: "from-orange-500 to-red-500",
      glow: "orange",
      initials: "DK",
      project: "FinTech Application"
    },
    {
      id: 5,
      name: "Alexandra Park",
      position: "Product Manager, HealthTech",
      company: "Healthcare Platform",
      content: "The healthcare platform they developed for us is HIPAA-compliant and incredibly robust. The team's expertise in security and scalability gave us complete confidence throughout the development process.",
      rating: 5,
      color: "from-indigo-500 to-violet-500",
      glow: "indigo",
      initials: "AP",
      project: "Healthcare System"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const glowColors = {
    blue: "rgba(59, 130, 246, 0.3)",
    purple: "rgba(168, 85, 247, 0.3)",
    green: "rgba(34, 197, 94, 0.3)",
    orange: "rgba(249, 115, 22, 0.3)",
    indigo: "rgba(129, 140, 248, 0.3)",
    pink: "rgba(236, 72, 153, 0.3)"
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`
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
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
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

        {/* Space Dust */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute w-[1px] h-[1px] bg-white/20 rounded-full"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* Space Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center p-5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10 mb-6"
          >
            <FaAward className="text-4xl text-white" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Cosmic Testimonials
            </motion.span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Hear from our interstellar partners about their journey to success with our cosmic solutions.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Stats Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              {/* Space pattern in sidebar */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[1px] h-[1px] bg-white/10 rounded-full"
                    style={{
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                    }}
                  />
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                <FaStar className="text-yellow-400 animate-pulse" />
                <span>Stellar Success Metrics</span>
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      4.9
                    </div>
                    <div className="text-gray-400">/ 5.0</div>
                  </div>
                  <div className="text-sm text-gray-500">Average Rating</div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-500">Client Retention</div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    150+
                  </div>
                  <div className="text-sm text-gray-500">Orbital Projects</div>
                </div>
              </div>
            </div>

            {/* Company Logos */}
            <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl"></div>
              </div>
              
              <h4 className="text-gray-300 text-sm font-medium mb-4 relative z-10">Orbiting Partners</h4>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {["TechStart", "DataInsight", "FinTech", "HealthTech", "Creative", "EcoSys"].map((company, i) => (
                  <motion.div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xs text-gray-400 hover:text-white transition-colors">{company}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Testimonial Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeTestimonial].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                {/* Main Card */}
                <div className="relative h-full bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden group">
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: glowColors[testimonials[activeTestimonial].glow] }}
                  />
                  
                  {/* Space Background in Card */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeTestimonial].color} opacity-5`}></div>
                    
                    {/* Floating Stars in Card */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={`card-star-${i}`}
                        className="absolute w-[1px] h-[1px] bg-white/30 rounded-full"
                        style={{
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 100 + '%',
                        }}
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.1, 0.5, 0.1],
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <motion.div
                    className="absolute bottom-6 right-6"
                  >
                    <FaQuoteLeft className="text-4xl opacity-20 rotate-180" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start gap-6 mb-8">
                      {/* Avatar */}
                      <motion.div
                        animate={{ 
                          rotateY: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        className={`bg-gradient-to-r ${testimonials[activeTestimonial].color} p-4 rounded-2xl`}
                      >
                        <div className="w-16 h-16 rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold">
                          {testimonials[activeTestimonial].initials}
                        </div>
                      </motion.div>

                      {/* Client Info */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {testimonials[activeTestimonial].name}
                          </h3>
                          <div className="flex gap-1">
                            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-400 animate-pulse" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-400 mb-1">{testimonials[activeTestimonial].position}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                          <FaRocket className="text-xs text-blue-400" />
                          <span className="text-sm text-gray-400">{testimonials[activeTestimonial].project}</span>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="mb-8">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        "{testimonials[activeTestimonial].content}"
                      </p>
                    </div>

                    {/* Impact Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {[
                        { label: "Satisfaction", value: "98%", color: "from-green-500 to-emerald-500" },
                        { label: "On-Time Delivery", value: "95%", color: "from-blue-500 to-cyan-500" },
                        { label: "ROI Increase", value: "40%", color: "from-purple-500 to-pink-500" }
                      ].map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        >
                          <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-500">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className="group"
                          >
                            <div className="relative">
                              <div className={`w-2 h-2 rounded-full transition-all ${
                                activeTestimonial === index 
                                  ? "bg-white" 
                                  : "bg-gray-600 group-hover:bg-gray-500"
                              }`} />
                              {activeTestimonial === index && (
                                <motion.div
                                  className="absolute inset-0 rounded-full border-2 border-white"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1.5 }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <motion.button
                          onClick={prevTestimonial}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl transition-all border border-white/10"
                        >
                          <FaChevronLeft className="text-gray-400" />
                        </motion.button>
                        <motion.button
                          onClick={nextTestimonial}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl transition-all border border-white/10"
                        >
                          <FaChevronRight className="text-gray-400" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() => setActiveTestimonial(index)}
              >
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: glowColors[testimonial.glow] }}
                />
                
                <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/70 text-sm">{testimonial.position.split(',')[0]}</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm line-clamp-3">"{testimonial.content.substring(0, 120)}..."</p>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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

export default Testimonials;