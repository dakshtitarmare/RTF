import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ScanFace, Cpu, Plane, Zap, Globe } from 'lucide-react';

const domains = [
  { 
    title: "Robotics", 
    icon: <Cpu size={80} />, 
    desc: "Building autonomous agents and mechanical marvels that interact with the physical world." 
  },
  { 
    title: "AI & Vision", 
    icon: <ScanFace size={80} />, 
    desc: "Implementing computer vision and machine learning for intelligent decision making." 
  },
  { 
    title: "Drones", 
    icon: <Plane size={80} />, 
    desc: "Aerial robotics systems for surveillance, delivery, and swarm intelligence." 
  },
  { 
    title: "IoT Systems", 
    icon: <Globe size={80} />, 
    desc: "Connecting devices to build smart ecosystems and remote monitoring solutions." 
  },
  { 
    title: "Embedded", 
    icon: <Zap size={80} />, 
    desc: "Designing efficient PCB layouts and firmware for high-performance control." 
  },
];

function DomainCard({ domain }) {
  return (
    <div className="group relative h-[450px] w-[350px] overflow-hidden bg-white/5 rounded-2xl border border-white/10 hover:border-rtf-blue/50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-rtf-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex h-full flex-col justify-between p-8 relative z-10">
        <div className="text-rtf-blue group-hover:scale-110 transition-transform duration-500 group-hover:text-white">
          {domain.icon}
        </div>
        
        <div>
          <h3 className="text-3xl font-bold uppercase tracking-tighter text-white mb-4 group-hover:text-rtf-blue transition-colors">
            {domain.title}
          </h3>
          <p className="text-gray-400 font-light leading-relaxed">
            {domain.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Domains() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-rtf-black">
      <div className="sticky top-0 flex h-screen items-center overflow-x-hidden">
        
        <div className="absolute top-10 left-4 md:left-10 z-20">
             <h2 className="text-3xl md:text-5xl font-bold text-white uppercase opacity-20">Our Domains</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 px-6 md:px-24">
          <div className="flex flex-col justify-center min-w-[80vw] md:min-w-[30vw] pr-4 md:pr-20">
             <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight">
               What <span className="text-transparent bg-clip-text bg-gradient-to-r from-rtf-blue to-rtf-purple">We Do</span>
             </h2>
             <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-md">
               We don't just learn technology; we build the future across five core robotics verticals.
             </p>
          </div>
          
          {domains.map((domain, index) => (
            <DomainCard key={index} domain={domain} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
