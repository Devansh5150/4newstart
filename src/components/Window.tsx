'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WindowProps {
  title: string;
  children: React.ReactNode;
}

export default function Window({ title, children }: WindowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-sm mx-auto preserve-3d">

      {/* Label above window */}
      <div className="absolute -top-10 left-0 right-0 text-center font-serif text-stone-500 font-bold tracking-[0.15em] text-sm md:text-base z-10 drop-shadow-sm uppercase">
        {title}
      </div>

      {/* Main Window Frame Container */}
      <motion.div
        className="relative w-full aspect-[3/4] cursor-pointer preserve-3d group"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.3 }}
      >

        {/* Outer Stone Frame */}
        <div className="absolute inset-0 bg-stone-400 texture-stone p-3 sm:p-4 rounded-sm shadow-window group-hover:shadow-window-hover transition-shadow duration-300">

          {/* Inner Dark Frame */}
          <div className="relative w-full h-full bg-walnut-700 shadow-inset-wood overflow-hidden border-4 border-walnut-600 rounded-sm">

            {/* The Hidden Room Content (behind the shutters) */}
            <div className="absolute inset-0 bg-black z-0">
              {/* Room Lighting Ambient */}
              <div className="absolute inset-0 bg-amber-light opacity-50 z-10 pointer-events-none" />
              <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-4">
                {children}
              </div>
            </div>

            {/* Left Shutter */}
            <motion.div
              className="absolute top-0 left-0 w-[51%] h-full bg-walnut-500 texture-wood origin-left z-30 border-r border-walnut-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
              initial={false}
              animate={{ rotateY: isOpen ? -105 : 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              style={{ transformOrigin: 'left' }}
            >
              {/* Horizontal Slats */}
              <div className="absolute inset-x-2 inset-y-4 flex flex-col gap-2 opacity-80">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-full h-3 bg-walnut-600 shadow-[0_2px_2px_rgba(0,0,0,0.4)] rounded-sm" />
                ))}
              </div>
              {/* Black Hinges */}
              <div className="absolute top-8 -left-1 w-6 h-2 bg-iron-900 rounded-sm" />
              <div className="absolute bottom-8 -left-1 w-6 h-2 bg-iron-900 rounded-sm" />
            </motion.div>

            {/* Right Shutter */}
            <motion.div
              className="absolute top-0 right-0 w-[51%] h-full bg-walnut-500 texture-wood origin-right z-30 border-l border-walnut-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
              initial={false}
              animate={{ rotateY: isOpen ? 105 : 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              style={{ transformOrigin: 'right' }}
            >
              {/* Horizontal Slats */}
              <div className="absolute inset-x-2 inset-y-4 flex flex-col gap-2 opacity-80">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-full h-3 bg-walnut-600 shadow-[0_2px_2px_rgba(0,0,0,0.4)] rounded-sm" />
                ))}
              </div>
              {/* Black Hinges */}
              <div className="absolute top-8 -right-1 w-6 h-2 bg-iron-900 rounded-sm" />
              <div className="absolute bottom-8 -right-1 w-6 h-2 bg-iron-900 rounded-sm" />
            </motion.div>

          </div>
        </div>

        {/* Stone Sill */}
        <div className="absolute -bottom-4 left-[-5%] w-[110%] h-8 bg-stone-300 texture-stone rounded-sm shadow-xl border-t border-stone-200 z-40" />

        {/* Flower Box */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-terracotta-500 texture-plaster shadow-xl border-t border-terracotta-400 z-50 flex justify-center items-end px-2">
           {/* Simple CSS Plants */}
           <div className="flex gap-2 mb-2">
             {Array.from({ length: 5 }).map((_, i) => (
               <div key={i} className="w-4 h-8 bg-[#4a5d23] rounded-t-full shadow-inner transform origin-bottom" style={{ transform: `rotate(${(i-2)*15}deg)` }} />
             ))}
           </div>
        </div>

      </motion.div>
    </div>
  );
}
