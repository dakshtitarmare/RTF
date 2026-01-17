import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';

// Components
import Navbar from './components/layout/Navbar';
import AnimatedPageWrapper from './components/layout/AnimatedPageWrapper';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import GalleryPage from './pages/Gallery';
import Login from './pages/Login';

function App() {
  const location = useLocation();

  return (
    <ReactLenis root>
      <div className="relative w-full min-h-screen bg-rtf-black font-sans selection:bg-rtf-blue selection:text-black">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <AnimatedPageWrapper><Home /></AnimatedPageWrapper>
            } />
            <Route path="/about" element={
              <AnimatedPageWrapper><About /></AnimatedPageWrapper>
            } />
             <Route path="/blog" element={
              <AnimatedPageWrapper><Blog /></AnimatedPageWrapper>
            } />
             <Route path="/gallery" element={
              <AnimatedPageWrapper><GalleryPage /></AnimatedPageWrapper>
            } />
             <Route path="/login" element={
              <AnimatedPageWrapper><Login /></AnimatedPageWrapper>
            } />
          </Routes>
        </AnimatePresence>

        {/* Footer could go here */}
      </div>
    </ReactLenis>
  );
}

export default App;
