'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Projects from '../components/sections/Projects';
import Footer from '../components/layout/Footer';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
      </motion.div>
      <Footer />
    </main>
  );
} 
