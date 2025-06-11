'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Send, Download, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link'; // Import Link for internal navigation
import { useEffect, useState } from 'react';

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, color: '#6366f1' }, // Tailwind purple-500 equivalent
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-4 sm:p-8">
      {/* Background Sphere Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-lg md:text-xl text-gray-300 font-medium mb-4"
          variants={itemVariants}
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          variants={itemVariants}
        >
          Muziqal Kuts
        </motion.h1>
        <motion.div
          className="text-2xl md:text-4xl font-semibold text-gray-200 mb-8 h-[60px] md:h-[80px] flex items-center justify-center"
          variants={itemVariants}
        >
          <TypeAnimation
            sequence={[
              "I build beautiful UIs.",
              1500,
              "I develop robust backends.",
              1500,
              "I create scalable web apps.",
              1500,
              "I offer technical consultation.",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400"
          />
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          I&apos;m a passionate Full-Stack Developer blending creativity with code to deliver exceptional digital experiences. Let&apos;s build something great together.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
          variants={itemVariants}
        >
          <Link href="#contact" passHref>
            <motion.button
              className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
              Let&apos;s Talk
            </motion.button>
          </Link>
          <a
            href="/Muziqal_Kuts_Resume.pdf" // Ensure this path is correct
            download
            className="flex items-center gap-3 px-8 py-3 border-2 border-gray-600 text-gray-200 rounded-full text-lg font-semibold shadow-md hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
          >
            <Download size={20} />
            My Resume
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center items-center gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/mjkut"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={isMobile ? 32 : 40} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/muziqalkuts"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={isMobile ? 32 : 40} />
          </motion.a>
          <motion.a
            href="mailto:muziqalkuts@example.com"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            aria-label="Email Me"
          >
            <Mail size={isMobile ? 32 : 40} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Main;