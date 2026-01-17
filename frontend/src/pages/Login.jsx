import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
    const [focused, setFocused] = useState(null);

    return (
        <div className="min-h-screen bg-rtf-black flex items-center justify-center p-4 relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rtf-blue/20 rounded-full blur-[100px] animate-pulse-glow"></div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="w-full max-w-md bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 md:p-12 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
             >
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-wider">MEMBER ACCESS</h2>
                    <p className="text-rtf-blue/70 font-mono text-xs uppercase tracking-[0.2em]">Restricted Area</p>
                </div>

                <form className="space-y-6">
                    <div className="relative group">
                        <div className={`absolute inset-0 bg-rtf-blue/20 blur-md transition-opacity duration-300 ${focused === 'user' ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className="relative flex items-center bg-black/50 border border-white/10 rounded-lg overflow-hidden transition-colors focus-within:border-rtf-blue/50">
                            <div className="p-4 text-gray-400">
                                <User size={20} />
                            </div>
                            <input 
                                type="text" 
                                placeholder="USER_ID" 
                                className="w-full bg-transparent text-white p-4 pl-0 focus:outline-none font-mono text-sm placeholder:text-gray-600"
                                onFocus={() => setFocused('user')}
                                onBlur={() => setFocused(null)}
                            />
                        </div>
                    </div>

                    <div className="relative group">
                        <div className={`absolute inset-0 bg-rtf-blue/20 blur-md transition-opacity duration-300 ${focused === 'pass' ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className="relative flex items-center bg-black/50 border border-white/10 rounded-lg overflow-hidden transition-colors focus-within:border-rtf-blue/50">
                            <div className="p-4 text-gray-400">
                                <Lock size={20} />
                            </div>
                            <input 
                                type="password" 
                                placeholder="ACCESS_KEY" 
                                className="w-full bg-transparent text-white p-4 pl-0 focus:outline-none font-mono text-sm placeholder:text-gray-600"
                                onFocus={() => setFocused('pass')}
                                onBlur={() => setFocused(null)}
                            />
                        </div>
                    </div>

                    <button className="w-full group relative overflow-hidden bg-white text-black font-bold py-4 rounded-lg mt-8 hover:scale-[1.02] transition-transform">
                        <div className="absolute inset-0 bg-gradient-to-r from-rtf-blue via-white to-rtf-blue opacity-50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            AUTHENTICATE <ArrowRight size={18} />
                        </span>
                    </button>
                    
                    <div className="text-center mt-6">
                        <a href="#" className="text-gray-500 text-xs hover:text-rtf-blue transition-colors">FORGOT CREDENTIALS?</a>
                    </div>
                </form>
             </motion.div>
        </div>
    );
}
