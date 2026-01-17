import React from 'react';
import CinematicTimeline from '../components/about/Timeline';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-rtf-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
          Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-rtf-blue to-rtf-purple">We Are</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          The Robo-Tech Forum is more than just a club. It is a breeding ground for innovation, 
          where engineering theory meets practical application.
        </p>
      </motion.div>

      <CinematicTimeline />
    </div>
  );
}
