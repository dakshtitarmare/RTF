import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { Loader2 } from 'lucide-react';

// Components
import Navbar from './components/layout/Navbar';
import AnimatedPageWrapper from './components/layout/AnimatedPageWrapper';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const Login = lazy(() => import('./pages/Login'));

function PageLoader() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-rtf-black text-rtf-blue">
      <Loader2 className="animate-spin w-10 h-10" />
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <ReactLenis root>
      <div className="relative w-full min-h-screen bg-rtf-black font-sans selection:bg-rtf-blue selection:text-black">
        <Navbar />
        
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>

        {/* Footer could go here */}
      </div>
    </ReactLenis>
  );
}

export default App;
