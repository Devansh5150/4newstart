'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MouseParallax } from './MouseParallax';

export default function House({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[120vh] flex justify-center items-start pt-10 pb-32 overflow-hidden bg-[#0a0806]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-light rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-light rounded-full blur-[100px] opacity-20 -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Main House Structure with Parallax */}
      <motion.main
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[95%] sm:w-[90%] max-w-[1400px] preserve-3d"
      >
        <MouseParallax>
        {/* Roof Structure */}
        <div className="relative w-full h-32 md:h-48 mb-[-2px] z-20 preserve-3d">
          <div className="absolute inset-0 bg-walnut-600 texture-wood shadow-2xl origin-bottom" style={{ transform: 'perspective(1200px) rotateX(45deg)' }}>
            {/* Wooden Shingles pattern placeholder */}
            <div className="w-full h-full opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.4) 40px, rgba(0,0,0,0.4) 42px), repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,0,0,0.4) 30px, rgba(0,0,0,0.4) 32px)' }} />
          </div>
          {/* Beams */}
          <div className="absolute bottom-0 left-0 w-full h-4 flex justify-between px-4 sm:px-8 bg-walnut-700 texture-wood shadow-lg z-30">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-4 sm:w-6 h-8 bg-walnut-700 texture-wood translate-y-2 rounded-b-sm shadow-md" />
            ))}
          </div>
        </div>

        {/* Front Wall */}
        <div className="relative w-full bg-cream-500 texture-plaster shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-b-sm min-h-[900px] px-4 sm:px-8 py-12 flex flex-col items-center border-x-8 border-b-8 border-walnut-700/50">

          {/* Name Board */}
          <div className="relative mb-16 flex flex-col items-center z-30">
            {/* Spotlight on sign */}
            <div className="absolute -top-12 w-64 h-32 bg-amber-glow blur-[40px] opacity-60 pointer-events-none rounded-full" />

            <div className="bg-walnut-500 texture-wood px-8 py-4 sm:px-12 sm:py-6 rounded-md shadow-2xl border-t border-walnut-400 relative overflow-hidden">
              <div className="absolute inset-0 border-[3px] border-walnut-700 opacity-40 m-2 rounded-sm pointer-events-none" />
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-200 tracking-widest uppercase font-bold text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Datta Niwas
              </h1>
            </div>
            <div className="mt-6 font-sans text-stone-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm drop-shadow-sm">
              Ideas to Impact
            </div>
          </div>

          {/* Children (Windows, Doors, etc) will be placed here */}
          <div className="w-full h-full relative z-20 flex-grow">
            {children}
          </div>

        </div>
        </MouseParallax>
      </motion.main>
    </div>
  );
}
