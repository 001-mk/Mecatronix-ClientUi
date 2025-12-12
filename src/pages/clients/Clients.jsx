import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCrown, FaGlobe, FaTrophy, FaStar, FaRocket, FaArrowRight, FaSatellite, FaUsers, FaHandshake } from 'react-icons/fa'

const Clients = () => {
  const [hoveredClient, setHoveredClient] = useState(null)
  
  const clients = [
    {
      id: 1,
      name: "Coca-Cola",
      logo: "https://cdn.worldvectorlogo.com/logos/coca-cola-4.svg",
      website: "https://coca-cola.com",
      industry: "Beverages",
      year: "2018",
      glow: "red"
    },
    {
      id: 2,
      name: "Nike",
      logo: "https://cdn.worldvectorlogo.com/logos/nike-4.svg",
      website: "https://nike.com",
      industry: "Sportswear",
      year: "2019",
      glow: "black"
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg",
      website: "https://amazon.com",
      industry: "E-commerce",
      year: "2020",
      glow: "orange"
    },
    {
      id: 4,
      name: "Netflix",
      logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
      website: "https://netflix.com",
      industry: "Entertainment",
      year: "2017",
      glow: "red"
    },
    {
      id: 5,
      name: "Adobe",
      logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
      website: "https://adobe.com",
      industry: "Software",
      year: "2019",
      glow: "red"
    },
    {
      id: 6,
      name: "Firefox",
      logo: "https://cdn.worldvectorlogo.com/logos/firefox-2.svg",
      website: "https://firefox.com",
      industry: "Technology",
      year: "2021",
      glow: "orange"
    },
    {
      id: 7,
      name: "Sony",
      logo: "https://cdn.worldvectorlogo.com/logos/sony-2.svg",
      website: "https://sony.com",
      industry: "Electronics",
      year: "2016",
      glow: "blue"
    },
    {
      id: 8,
      name: "Ferrari",
      logo: "https://cdn.worldvectorlogo.com/logos/ferrari-7.svg",
      website: "https://ferrari.com",
      industry: "Automotive",
      year: "2018",
      glow: "red"
    },
    {
      id: 9,
      name: "Mastercard",
      logo: "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg",
      website: "https://mastercard.com",
      industry: "Finance",
      year: "2020",
      glow: "red"
    },
    {
      id: 10,
      name: "Harley Davidson",
      logo: "https://cdn.worldvectorlogo.com/logos/harley-davidson-1.svg",
      website: "https://harley-davidson.com",
      industry: "Motorcycles",
      year: "2017",
      glow: "black"
    },
    {
      id: 11,
      name: "SoundCloud",
      logo: "https://cdn.worldvectorlogo.com/logos/soundcloud-2.svg",
      website: "https://soundcloud.com",
      industry: "Music",
      year: "2019",
      glow: "orange"
    },
    {
      id: 12,
      name: "Canon",
      logo: "https://cdn.worldvectorlogo.com/logos/canon-2.svg",
      website: "https://canon.com",
      industry: "Photography",
      year: "2018",
      glow: "black"
    }
  ]

  // Duplicate for seamless scroll
  const scrollingClients = [...clients, ...clients, ...clients]

  // Space background stars
  const [stars, setStars] = useState([])
  
  useEffect(() => {
    const starArray = Array.from({ length: 300 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2
    }))
    setStars(starArray)
  }, [])

  const glowColors = {
    red: "rgba(239, 68, 68, 0.5)",
    orange: "rgba(249, 115, 22, 0.5)",
    blue: "rgba(59, 130, 246, 0.5)",
    black: "rgba(0, 0, 0, 0.5)",
    purple: "rgba(168, 85, 247, 0.5)",
    pink: "rgba(236, 72, 153, 0.5)"
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
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
        {[...Array(6)].map((_, i) => (
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
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-orange-500/5 via-red-500/5 to-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Space Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      </div>

      <div className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
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
              <FaCrown className="text-4xl text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Cosmic Partners
              </motion.span>
            </h1>
            
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Aligned with stellar brands across the universe. We forge partnerships that reach for the stars.
            </p>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
            >
              {[
                { value: "500+", label: "Projects", icon: <FaRocket className="text-blue-400" /> },
                { value: "50+", label: "Countries", icon: <FaGlobe className="text-purple-400" /> },
                { value: "99%", label: "Satisfaction", icon: <FaStar className="text-yellow-400" /> },
                { value: "12+", label: "Years", icon: <FaTrophy className="text-pink-400" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scrolling Container */}
          <div className="relative mb-24">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
            
            {/* Scrolling Track */}
            <div className="overflow-hidden py-8">
              <motion.div
                animate={{ x: [0, -2400] }}
                transition={{
                  x: {
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }
                }}
                className="flex gap-8"
              >
                {scrollingClients.map((client, index) => (
                  <motion.a
                    key={`${client.id}-${index}`}
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex-shrink-0 group"
                    onMouseEnter={() => setHoveredClient(index)}
                    onMouseLeave={() => setHoveredClient(null)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Client Card */}
                    <div className="relative w-80 h-52 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-500 group-hover:border-white/40">
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ backgroundColor: glowColors[client.glow] }}
                        animate={{
                          scale: hoveredClient === index ? [1, 1.1, 1] : 1
                        }}
                      />
                      
                      {/* Card Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40">
                        {/* Space Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
                          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl"></div>
                        </div>
                      </div>
                      
                      {/* Floating Stars */}
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={`star-${index}-${i}`}
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
                          }}
                        />
                      ))}
                      
                      {/* Content Container */}
                      <div className="relative h-full p-6">
                        {/* Logo and Name */}
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div 
                            className="relative"
                            animate={{
                              rotateY: hoveredClient === index ? 180 : 0
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110">
                              {/* Logo in original colors */}
                              <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-full object-contain"
                                style={{ filter: 'none' }} // Removed the invert filter
                              />
                            </div>
                            
                            {/* Year Badge */}
                            <motion.div 
                              className="absolute -top-2 -right-2"
                              animate={{
                                scale: hoveredClient === index ? [1, 1.2, 1] : 1
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-2 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/10">
                                <span className="text-xs text-gray-300">{client.year}</span>
                              </div>
                            </motion.div>
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                              {client.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-3">{client.industry}</p>
                            
                            {/* Orbit Indicator */}
                            <div className="flex items-center gap-2">
                              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 2, delay: index * 0.1 }}
                                />
                              </div>
                              <span className="text-xs text-gray-500">Orbital Partner</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Connection Dots */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex items-center gap-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-blue-400 rounded-full"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Reverse Scrolling Container */}
          <div className="relative mb-24">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
            
            {/* Reverse Scrolling Track */}
            <div className="overflow-hidden py-8">
              <motion.div
                animate={{ x: [-2400, 0] }}
                transition={{
                  x: {
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }
                }}
                className="flex gap-8"
              >
                {[...scrollingClients].reverse().map((client, index) => (
                  <motion.a
                    key={`reverse-${client.id}-${index}`}
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex-shrink-0 group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Client Card */}
                    <div className="relative w-64 h-36 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-300 group-hover:border-white/40">
                      {/* Background */}
                      <div className="absolute inset-0 bg-black/60">
                        {/* Stars */}
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-[1px] h-[1px] bg-white/20 rounded-full"
                            style={{
                              left: Math.random() * 100 + '%',
                              top: Math.random() * 100 + '%',
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Content Container */}
                      <div className="relative h-full p-5 flex items-center gap-4">
                        {/* Logo - Original Colors */}
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        >
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="w-full h-full object-contain"
                            style={{ filter: 'none' }} // Removed the invert filter
                          />
                        </motion.div>
                        
                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-base mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {client.name}
                          </h3>
                          <p className="text-gray-400 text-xs mb-2">{client.industry}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-gray-500 bg-gray-900/50 px-2 py-0.5 rounded-full">
                              Since {client.year}
                            </span>
                          </div>
                        </div>
                        
                        {/* Arrow */}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                        >
                          <FaArrowRight />
                        </motion.div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl backdrop-blur-sm">
              <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-12 relative overflow-hidden">
                {/* Space Background in CTA */}
                <div className="absolute inset-0">
                  {/* Nebula */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
                </div>
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-6 relative z-10"
                >
                  <FaHandshake className="text-2xl text-white" />
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                  Ready to Launch Your Brand into Orbit?
                </h3>
                
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                  Join our constellation of stellar partners and reach new heights with our cosmic expertise.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FaRocket className="group-hover:animate-pulse" />
                    Begin Your Space Journey
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
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
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  )
}

export default Clients