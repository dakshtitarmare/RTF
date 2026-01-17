import React, { Suspense } from 'react';
import { Cpu } from 'lucide-react';
import IntroVideo from '../components/hero/IntroVideo';
import HeroScene from '../components/hero/HeroScene';
import HeroText from '../components/hero/HeroText';
import Domains from '../components/domains/Domains';
import BuildCards from '../components/shared/BuildCards';
import CinematicTimeline from '../components/about/Timeline';
import Gallery3D from '../components/gallery/Gallery';

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-rtf-black text-rtf-blue">
       <Cpu className="animate-spin w-10 h-10" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <IntroVideo />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Suspense fallback={<Loader />}>
          <HeroScene />
        </Suspense>
        <HeroText />
      </section>

      {/* Domains Scroll Section */}
      <Domains />
      
      {/* What We Build */}
      <BuildCards />

      {/* 3D Gallery */}
      <Gallery3D />

      {/* About Section */}
      <CinematicTimeline />

      {/* Join CTA */}
      <section className="py-32 flex flex-col items-center justify-center text-center bg-gradient-to-t from-rtf-blue/10 to-transparent relative z-10">
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rtf-blue to-rtf-purple">BUILD THE FUTURE?</span>
        </h2>
        <button className="px-10 py-4 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer">
          JOIN RTF NOW
        </button>
      </section>
    </>
  );
}
