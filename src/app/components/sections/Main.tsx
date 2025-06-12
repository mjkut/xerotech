'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Brain, Building, Zap } from 'lucide-react';

const solutions = [
  {
    title: "Web Applications",
    description: "From simple websites to complex web applications, we can build responsive, scalable and modern solutions that work across all devices and browsers.",
    technologies: ["Django", "Wagtail", "React.js", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    complexity: "Whether it's a simple portfolio site or a complex enterprise application with real-time features, I can deliver.",
    icon: Code,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Odoo ERP Solutions",
    description: "Custom Odoo module development and implementation to streamline your business processes and enhance your ERP capabilities.",
    technologies: ["Python", "Odoo", "PostgreSQL", "XML", "JavaScript", "QWeb", "OWL"],
    complexity: "From simple customizations to complex business-specific modules, we can develop tailored Odoo solutions.",
    icon: Database,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences while maintaining high performance.",
    technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Firebase"],
    complexity: "From MVP to full-featured apps with offline capabilities and real-time synchronization.",
    icon: Smartphone,
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage the power of artificial intelligence to automate processes and gain insights from data.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision"],
    complexity: "With clearly defined requirements and sufficient training data, complex AI solutions can be developed and integrated into existing systems.",
    icon: Brain,
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Enterprise Solutions",
    description: "Robust, secure and scalable enterprise-level applications that streamline business processes and improve efficiency.",
    technologies: ["C#", ".NET", "Microservices", "Docker", "Rest APIs"],
    complexity: "Complex enterprise systems can be successfully implemented with proper planning and architectural design.",
    icon: Building,
    gradient: "from-indigo-500 to-blue-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Main() {

  return (
    <section className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            {/* Zap  */}
            <Zap className="text-blue-500 mr-3" size={32} /> 
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Turning Your Vision into Reality
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            In the world of software development, every great innovation starts with an idea. 
            Whether you have a groundbreaking concept or a business challenge that needs a digital solution, 
            we are here to assure you that your vision can be transformed into reality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm"
            >
              <span className="text-blue-300 font-medium">Expert Development</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 backdrop-blur-sm"
            >
              <span className="text-purple-300 font-medium">Scalable Solutions</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 backdrop-blur-sm"
            >
              <span className="text-green-300 font-medium">Modern Technologies</span>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 backdrop-blur-sm"
          >
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Every challenge has a solution waiting to be discovered
            </span>
          </motion.div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Solutions & Expertise
            </span>
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {solutions.map((solution) => { 
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${solution.gradient} bg-opacity-20 mb-4`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {solution.title}
                    </h4>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {solution.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 text-sm bg-gray-700/60 text-gray-300 rounded-full border border-gray-600/50 hover:border-gray-500/50 hover:bg-gray-600/60 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Complexity Note */}
                    <div className="pt-4 border-t border-gray-700/50">
                      <p className="text-sm text-gray-400 italic leading-relaxed">
                        {solution.complexity}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Bring Your Ideas to Life?
          </h4>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and explore how we can turn your vision into a powerful digital solution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}