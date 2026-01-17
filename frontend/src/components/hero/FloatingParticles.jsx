import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  // Generate random particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 100 + 20, // 20px - 120px
    x: Math.random() * 100, // 0 - 100%
    y: Math.random() * 100, // 0 - 100%
    duration: Math.random() * 10 + 10, // 10s - 20s
    delay: Math.random() * 5,
    opacity: Math.random() * 0.1 + 0.02, // Low opacity
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white filter blur-xl"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
}
