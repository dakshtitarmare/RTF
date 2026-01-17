import React from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

// Letter-by-letter animation variant
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  }),
};

export default function HeroText() {
  const title = "RTF";
  const subtitle = "ROBO-TECH FORUM";

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
      <FloatingParticles />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-center relative z-20"
      >
        {/* Top Label with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-block mb-6 px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
        >
          <h2 className="text-rtf-blue text-xs md:text-sm tracking-[0.3em] font-mono font-bold uppercase">
            Government College of Engineering, Amravati
          </h2>
        </motion.div>
        
        {/* Main Title with Letter Animation */}
        <div className="relative mb-4 md:mb-4">
          <h1 className="text-[5rem] md:text-[12rem] lg:text-[16rem] font-black tracking-tighter text-white relative leading-none">
            <div className="flex justify-center">
              {title.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className="relative inline-block text-glow"
                  whileHover={{ 
                    scale: 1.1, 
                    color: '#00f6ff',
                    transition: { duration: 0.2 } 
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </h1>
          
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(0,246,255,0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 60% 40%, rgba(124,124,255,0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 40% 60%, rgba(0,246,255,0.1) 0%, transparent 70%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        {/* Subtitle with stagger effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-8 md:mb-12 max-w-[90vw]"
        >
          <p className="text-gray-400 text-lg md:text-3xl font-light tracking-[0.2em] md:tracking-[0.5em] font-mono whitespace-nowrap overflow-hidden text-ellipsis">
            {subtitle.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.03, duration: 0.3 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Action Pills with Enhanced Glassmorphism */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center font-mono text-xs md:text-sm items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {['INNOVATE', 'BUILD', 'COMPETE'].map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
              }}
              className="group relative px-6 py-3 w-40 md:w-auto text-center bg-white/5 backdrop-blur-xl border border-rtf-blue/30 rounded-full overflow-hidden cursor-default"
            >
              {/* Animated gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rtf-blue/20 to-rtf-purple/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10 text-rtf-blue font-bold tracking-wider text-glow">
                [ {text} ]
              </span>
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with Enhanced Animation */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-rtf-blue/50 rounded-full flex justify-center p-1 backdrop-blur-sm bg-white/5"
        >
          <motion.div
            className="w-1.5 h-2 bg-rtf-blue rounded-full"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
        
        <motion.p
          className="text-rtf-blue/70 font-mono text-xs uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </div>
  );
}
