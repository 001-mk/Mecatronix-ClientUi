import React from "react";
import { FaAward, FaUsers, FaRocket, FaStar, FaRegClock, FaCode } from "react-icons/fa";

const Stats = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: FaAward, color: "from-orange-500 to-red-500" },
    { number: "98%", label: "Client Satisfaction", icon: FaStar, color: "from-green-500 to-emerald-600" },
    { number: "24/7", label: "Support Available", icon: FaRegClock, color: "from-blue-500 to-cyan-600" },
    { number: "100+", label: "Technologies Used", icon: FaCode, color: "from-purple-500 to-pink-600" },
    { number: "5+", label: "Years Experience", icon: FaUsers, color: "from-yellow-500 to-orange-500" },
    { number: "15+", label: "Countries Served", icon: FaRocket, color: "from-indigo-500 to-purple-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,75,0,0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering excellence and innovation across global projects with measurable results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{ animationDelay: `${index * 100}ms` }}
              className="opacity-0 animate-zoom-in bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500"
            >
              <div className="flex justify-center mb-3">
                <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="text-white text-lg" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1 tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
};

export default Stats;