'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import About from '../components/sections/About';
import Footer from '../components/layout/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>
      <Footer />
    </main>
  );
} 