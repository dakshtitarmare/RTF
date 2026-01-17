import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Login', path: '/login', isButton: true },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={twMerge(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled || mobileMenuOpen ? "bg-black/80 backdrop-blur-xl border-white/10 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
             <div className="w-8 h-8 bg-rtf-blue rounded-full relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                <span className="font-black text-black text-xs relative z-10">RTF</span>
             </div>
             <span className="font-bold text-white tracking-widest font-mono text-lg group-hover:text-rtf-blue transition-colors">
               ROBO-TECH
             </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => clsx(
                  "relative text-sm font-mono uppercase tracking-widest transition-all hover:text-rtf-blue",
                  isActive ? "text-rtf-blue font-bold text-shadow-glow" : "text-gray-400",
                  item.isButton && "px-6 py-2 bg-white/10 border border-white/20 rounded-full hover:bg-rtf-blue hover:text-black hover:border-rtf-blue active:scale-95"
                )}
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {!item.isButton && isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-rtf-blue shadow-[0_0_10px_#00f6ff]" 
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => clsx(
                    "text-3xl font-black uppercase tracking-tighter transition-colors",
                    isActive ? "text-rtf-blue" : "text-white/50"
                  )}
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item.name}
                  </motion.div>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
