'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Services from '../components/sections/Services';
import Footer from '../components/layout/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Services />
      </motion.div>
      <Footer />
    </main>
  );
} 