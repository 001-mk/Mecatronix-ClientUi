import React from "react";
import { motion } from "framer-motion";

const Technologies = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS", "WebGL", "Three.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "Express", "Django", "Spring Boot", "GraphQL", "REST APIs"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Elasticsearch", "DynamoDB"]
    },
    {
      category: "DevOps & Cloud",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Azure", "GCP", "CI/CD"]
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Expo", "Xcode", "Android Studio"]
    },
    {
      category: "AI/ML",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "NLP", "Computer Vision", "Scikit-learn", "Keras"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Technology Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We work with cutting-edge technologies to deliver robust, scalable, and future-proof solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-orange-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-orange-400 hover:border-orange-400/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;