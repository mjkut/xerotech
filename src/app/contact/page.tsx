'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
// This file is the main entry point for the Contact page

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
      <Footer />
    </main>
  );
} 