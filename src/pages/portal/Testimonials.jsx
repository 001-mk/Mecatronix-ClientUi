import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechStart Inc.",
      company: "E-commerce Platform",
      content: "Mecatronix transformed our online presence with a stunning e-commerce platform. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Michael Rodriguez",
      position: "CTO, DataInsight Corp",
      content: "The team delivered a complex data analytics dashboard ahead of schedule. Their professionalism and technical skills are truly impressive.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Emily Watson",
      position: "Marketing Director, Creative Studio",
      content: "Our new portfolio website has generated 3x more leads. The design is beautiful and the performance is exceptional.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "David Kim",
      position: "Founder, FinTech Solutions",
      content: "The mobile banking app they built for us is secure, fast, and user-friendly. Their ongoing support has been invaluable.",
      rating: 5,
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,75,0,0.08),transparent_70%)]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <FaQuoteLeft className="text-orange-400 text-3xl mb-6" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonials[activeTestimonial].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeTestimonial].position}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === index 
                    ? "bg-orange-500 scale-125" 
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;