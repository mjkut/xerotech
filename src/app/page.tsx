'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Update window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateRandomPosition = (dimension: number) => {
    return Math.random() * dimension;
  };

  return (
    <main className="min-h-screen bg-gray-900">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-blue-900/30" />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">XeroTech Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting engaging, responsive and user-friendly web applications with a passion for innovation and a drive to deliver high-quality solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/dashboard"
              className="inline-block relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 
                        text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 
                        transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25
                        border border-purple-500/50 backdrop-blur-sm"
            >
              <span className="relative z-10">Explore More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 
                            hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </div>
        
        {/* Enhanced animated shapes */}
        {windowSize.width > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 2 === 0 
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                    : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
                }`}
                style={{
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                }}
                initial={{
                  x: generateRandomPosition(windowSize.width),
                  y: generateRandomPosition(windowSize.height),
                }}
                animate={{
                  x: generateRandomPosition(windowSize.width),
                  y: generateRandomPosition(windowSize.height),
                  rotate: 360,
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}