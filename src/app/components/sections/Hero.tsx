'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Web Development",
      description: "Creating modern, responsive websites and web applications using cutting-edge technologies. From concept to deployment, I build digital experiences that engage users and drive results.",
      image: "/hero/web.jpg",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Custom Software Development",
      description: "Building tailored software solutions that perfectly fit your business needs. From desktop applications to complex systems, I deliver robust and scalable software architecture.",
      image: "/hero/software.jpg",
      gradient: "from-emerald-600 to-blue-600"
    },
    {
      id: 3,
      title: "Custom Odoo Module Development",
      description: "Extending and customizing Odoo ERP with specialized modules. I create seamless integrations and custom functionalities to optimize your business processes.",
      image: "/hero/odoo.jpg",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Database Management",
      description: "Designing, optimizing, and maintaining robust database systems. From schema design to performance tuning, I ensure your data is secure, accessible, and efficiently managed.",
      image: "/hero/database.jpg",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "AI and ML Systems Development",
      description: "Building intelligent systems that learn and adapt. From machine learning models to AI-powered applications, I transform data into actionable insights and automated solutions.",
      image: "/hero/ai.png",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Open-source Software Setup",
      description: "Implementing and configuring open-source solutions for your infrastructure. I help you leverage the power of community-driven software to reduce costs and increase flexibility.",
      image: "/hero/custom.jpg",
      gradient: "from-green-600 to-teal-600"
    },
    {
      id: 7,
      title: "Cross-Platform Mobile Development",
      description: "Building robust and intuitive mobile applications for iOS and Android from a single codebase using modern frameworks. Deliver a consistent user experience across devices.",
      image: "/hero/mobile.jpg",
      gradient: "from-blue-600 to-cyan-600"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="text-left text-white">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-300"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="space-x-4"
                  >
                  </motion.div>
                </div>

                {/* Right Content - Profile Picture (Only on first slide) */}
                {currentSlide === 0 && (
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex justify-center lg:justify-end"
                  >
                    <div className="relative">
                      <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                        <img
                          src="/profile.jpg" // Add your profile picture here
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-gray-500 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 8, ease: 'linear' }}
          key={currentSlide}
        />
      </div>
    </section>
  );
};

export default Hero;