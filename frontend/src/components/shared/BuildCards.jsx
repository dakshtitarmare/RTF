import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ title, subtitle, bgImage }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative h-96 w-full rounded-xl bg-rtf-card border border-white/5 overflow-hidden group cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-rtf-blue text-sm uppercase tracking-widest translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

const projects = [
  { title: "Autonomous Rover", subtitle: "Navigation System", image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1000&auto=format&fit=crop" },
  { title: "Smart City Drone", subtitle: "Aerial Surveillance", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop" },
  { title: "Prosthetic Arm", subtitle: "Biomedical Robotics", image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=1000&auto=format&fit=crop" },
];

export default function BuildCards() {
  return (
    <section className="py-32 px-4 bg-rtf-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We <span className="text-rtf-blue">Build</span></h2>
           <p className="text-gray-400 max-w-2xl mx-auto">Cutting-edge projects developed by our student teams.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, i) => (
             <TiltCard key={i} title={proj.title} subtitle={proj.subtitle} bgImage={proj.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
