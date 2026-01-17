import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Flag, Award, Zap, Globe, Rocket, CircuitBoard } from 'lucide-react';

const timelineData = [
  { year: '2016', title: 'Start Sequence', description: 'RTF initialized. Mission: Foster robotics culture.', icon: Flag },
  { year: '2018', title: 'National Recognition', description: 'Systems operational. Won 1st prize at National Robotics Championship.', icon: Award },
  { year: '2022', title: 'IIT Techfest', description: 'Deploying agents. Finalists among 500+ teams at IIT Bombay.', icon: CircuitBoard },
  { year: '2024', title: 'AI & Drone Era', description: 'System Upgrade. Expanded domains to AI, Swarm Drones, and IoT.', icon: Zap },
  { year: '2026', title: 'Future Horizons', description: 'Target acquired. Aiming for International Robotics domination.', icon: Rocket },
];

function TimelineCard({ item, index, isLeft }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100, rotateY: isLeft ? -10 : 10 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 50, damping: 20, delay: index * 0.1 }}
      className={`relative w-full md:w-[45%] mb-12 md:mb-24 ${isLeft ? 'md:mr-auto md:text-right md:pr-12 pl-12 md:pl-0' : 'md:ml-auto text-left pl-12'}`}
    >
      {/* Connector Line - Desktop */}
      <div className={`hidden md:block absolute top-6 w-12 h-[2px] bg-gradient-to-r from-rtf-blue to-transparent ${isLeft ? 'right-0 rotate-180' : 'left-0'}`}>
        <div className={`absolute w-2 h-2 rounded-full bg-rtf-blue shadow-[0_0_10px_#00f6ff] top-1/2 -translate-y-1/2 ${isLeft ? 'right-0' : 'left-0'}`} />
      </div>
      
      {/* Connector Line - Mobile */}
      <div className="md:hidden absolute top-8 left-0 w-4 h-[2px] bg-rtf-blue">
         <div className="absolute w-2 h-2 rounded-full bg-rtf-blue shadow-[0_0_10px_#00f6ff] top-1/2 -translate-y-1/2 left-0" />
      </div>

      {/* Card Content */}
      <div className="group relative p-6 md:p-8 glass-panel-strong rounded-xl border border-white/10 hover:border-rtf-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)] hover:-translate-y-2">
        {/* Tech Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-rtf-blue/30 rounded-tl-md group-hover:border-rtf-blue transition-colors"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-rtf-blue/30 rounded-tr-md group-hover:border-rtf-blue transition-colors"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-rtf-blue/30 rounded-bl-md group-hover:border-rtf-blue transition-colors"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-rtf-blue/30 rounded-br-md group-hover:border-rtf-blue transition-colors"></div>

        <div className={`flex flex-col ${isLeft ? 'md:items-end items-start' : 'items-start'}`}>
          <div className="p-3 bg-rtf-blue/10 rounded-lg mb-4 text-rtf-blue group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} className="md:w-8 md:h-8" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
            {item.year}
          </h3>
          
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-rtf-blue transition-colors">
            {item.title}
          </h4>
          
          <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Glossy Overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

export default function CinematicTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-20 md:py-32 relative bg-rtf-black min-h-screen">
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
            backgroundImage: 'linear-gradient(#00f6ff 1px, transparent 1px), linear-gradient(90deg, #00f6ff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-white uppercase tracking-tighter">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-rtf-blue to-rtf-purple">Timeline</span>
          </h2>
          <p className="text-rtf-blue font-mono tracking-widest uppercase text-xs md:text-sm">Initializing Historical Logs...</p>
        </motion.div>

        <div className="relative">
          {/* Central Line - Desktop (Center) / Mobile (Left) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-rtf-blue via-rtf-purple to-rtf-blue box-shadow-[0_0_20px_#00f6ff]"
            >
               {/* Traveling node */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"></div>
            </motion.div>
          </div>

          {/* Items */}
          <div className="relative py-10">
            {timelineData.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
