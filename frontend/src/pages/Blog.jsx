import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="min-h-screen bg-rtf-black pt-32 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
         <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Transmission <span className="text-rtf-blue">Logs</span></h1>
         <p className="text-gray-400 font-mono">Knowledge sharing from the frontline.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-rtf-blue/30 transition-all hover:-translate-y-2 cursor-pointer group">
             <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center text-gray-500 overflow-hidden relative">
               <div className="absolute inset-0 bg-rtf-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <span className="font-mono text-xs">IMG_PLACEHOLDER_{i}</span>
             </div>
             <div className="text-rtf-blue text-xs font-mono mb-2">SYSTEM • 2 DAYS AGO</div>
             <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rtf-blue transition-colors">Understanding PID Controllers</h3>
             <p className="text-gray-400 text-sm leading-relaxed mb-4">
               A deep dive into proportional-integral-derivative controllers and how we use them in our line followers.
             </p>
             <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
               READ_LOG <span className="ml-2 text-rtf-blue">→</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
