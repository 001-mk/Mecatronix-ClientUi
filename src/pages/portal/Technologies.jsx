import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaVuejs, FaNodeJs, FaPython, FaJava, 
  FaAws, FaDocker, FaJenkins,
  FaCodeBranch, FaRocket, FaBolt, FaServer, FaDatabase
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiSass, 
  SiWebgl, SiThreedotjs, SiExpress, SiDjango, 
  SiSpringboot, SiGraphql, SiMongodb, SiPostgresql, 
  SiMysql, SiRedis, SiFirebase, SiElasticsearch, 
  SiAmazondynamodb, SiKubernetes, SiTerraform, 
  SiGooglecloud
} from "react-icons/si";
import { VscAzure, VscTerminalCmd } from "react-icons/vsc";

const Technologies = () => {
  const techCategories = [
    {
      category: "Frontend",
      icon: <FaBolt className="text-blue-400" />,
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
      technologies: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, color: "#ffffff" },
        { name: "Vue.js", icon: <FaVuejs className="text-[#4FC08D]" />, color: "#4FC08D" },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, color: "#3178C6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, color: "#06B6D4" },
        { name: "SASS", icon: <SiSass className="text-[#CC6699]" />, color: "#CC6699" },
        { name: "WebGL", icon: <SiWebgl className="text-[#990000]" />, color: "#990000" },
        { name: "Three.js", icon: <SiThreedotjs className="text-white" />, color: "#ffffff" },
      ]
    },
    {
      category: "Backend",
      icon: <FaServer className="text-emerald-400" />,
      color: "from-emerald-500 to-green-500",
      gradient: "bg-gradient-to-r from-emerald-500/10 to-green-500/10",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, color: "#339933" },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, color: "#3776AB" },
        { name: "Java", icon: <FaJava className="text-[#007396]" />, color: "#007396" },
        { name: "Express", icon: <SiExpress className="text-white" />, color: "#ffffff" },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" />, color: "#092E20" },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" />, color: "#6DB33F" },
        { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" />, color: "#E10098" },
        { name: "REST APIs", icon: <VscTerminalCmd className="text-[#FF6B6B]" />, color: "#FF6B6B" },
      ]
    },
    {
      category: "Database",
      icon: <FaDatabase className="text-purple-400" />,
      color: "from-purple-500 to-violet-500",
      gradient: "bg-gradient-to-r from-purple-500/10 to-violet-500/10",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, color: "#336791" },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, color: "#4479A1" },
        { name: "Redis", icon: <SiRedis className="text-[#DC382D]" />, color: "#DC382D" },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, color: "#FFCA28" },
        { name: "Elasticsearch", icon: <SiElasticsearch className="text-[#005571]" />, color: "#005571" },
        { name: "DynamoDB", icon: <SiAmazondynamodb className="text-[#4053D6]" />, color: "#4053D6" },
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: <FaRocket className="text-orange-400" />,
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-r from-orange-500/10 to-red-500/10",
      technologies: [
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" />, color: "#FF9900" },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, color: "#2496ED" },
        { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" />, color: "#326CE5" },
        { name: "Jenkins", icon: <FaJenkins className="text-[#D24939]" />, color: "#D24939" },
        { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC]" />, color: "#7B42BC" },
        { name: "Azure", icon: <VscAzure className="text-[#0078D4]" />, color: "#0078D4" },
        { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" />, color: "#4285F4" },
        { name: "CI/CD", icon: <FaCodeBranch className="text-[#FF6B6B]" />, color: "#FF6B6B" },
      ]
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Space Effect Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 0.5 + 'px',
                height: Math.random() * 2 + 0.5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.8 + 0.2,
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
              y: Math.random() * 100 + 'vh',
              opacity: 0,
            }}
            animate={{
              x: [null, `-=${Math.random() * 200 + 100}px`],
              y: [null, `+=${Math.random() * 200 + 100}px`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatDelay: Math.random() * 10 + 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center p-3 md:p-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10 mb-6"
          >
            <FaRocket className="text-2xl md:text-4xl text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Tech Stack
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Building exceptional digital experiences with modern, cutting-edge technologies
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-12 md:space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-8">
                <div className={`p-2 md:p-3 rounded-xl backdrop-blur-sm border border-white/10 ${category.gradient}`}>
                  <div className="text-xl md:text-2xl">
                    {category.icon}
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h2>
                  <div className="h-0.5 w-16 sm:w-24 mx-auto sm:mx-0 mt-2 bg-gradient-to-r from-transparent via-current to-transparent opacity-30"></div>
                </div>
              </div>

              {/* Technology Cards - Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 px-4 sm:px-0">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={`${category.category}-${tech.name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Card */}
                    <div className="relative p-3 md:p-4 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
                      {/* Background effect */}
                      <div 
                        className="absolute inset-0 opacity-5"
                        style={{ backgroundColor: tech.color }}
                      ></div>
                      
                      {/* Icon */}
                      <div className="relative flex justify-center mb-2 md:mb-3">
                        <div className="p-2 md:p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-white/5">
                          <div className="text-lg md:text-2xl">
                            {tech.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Name */}
                      <div className="relative text-center">
                        <span className="text-xs sm:text-sm font-medium text-gray-300">
                          {tech.name}
                        </span>
                        <div 
                          className="h-0.5 w-6 md:w-8 mx-auto mt-1 md:mt-2 opacity-50"
                          style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Animated separator */}
              {categoryIndex < techCategories.length - 1 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-px mt-8 md:mt-12 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-4 sm:mx-0"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-gray-800/50"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "50+", label: "Technologies", icon: "⚡", color: "from-blue-500 to-cyan-500" },
              { value: "100+", label: "Projects", icon: "🚀", color: "from-emerald-500 to-green-500" },
              { value: "4.9★", label: "Rating", icon: "⭐", color: "from-purple-500 to-violet-500" },
              { value: "24/7", label: "Support", icon: "🛡️", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Card */}
                <div className="relative p-4 md:p-6 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl md:rounded-2xl">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl">{stat.icon}</span>
                    <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
                      {stat.label}
                    </div>
                    <div className={`h-0.5 w-8 md:w-12 mx-auto mt-2 md:mt-3 bg-gradient-to-r ${stat.color} opacity-20`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-block p-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl">
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 md:mb-6 max-w-xl mx-auto">
                Let's leverage our technology expertise to bring your vision to life
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Technologies;