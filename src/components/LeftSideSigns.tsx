'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LeftSideSigns() {
  return (
    <div className="relative h-full flex flex-col justify-start items-center pt-10 pb-20">

      {/* Hanging Vertical Sign */}
      <motion.div
        className="relative flex flex-col items-center origin-top z-10"
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Iron chains/hooks */}
        <div className="flex justify-center gap-12 w-full">
          <div className="w-1 h-12 bg-iron-900 shadow-sm" />
          <div className="w-1 h-12 bg-iron-900 shadow-sm" />
        </div>

        {/* The Wooden Signboard */}
        <div className="bg-walnut-700 texture-wood border-4 border-walnut-600 shadow-2xl px-6 py-12 rounded-sm flex flex-col items-center relative overflow-hidden w-48">
          <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
          <h2 className="font-sans font-black text-2xl text-cream-200 tracking-[0.2em] uppercase text-center [writing-mode:vertical-rl] rotate-180 drop-shadow-md mb-8">
            Devansh Datta
          </h2>
          <div className="w-8 h-[2px] bg-terracotta-500 mb-6" />
          <p className="font-serif italic text-stone-300 text-sm text-center">
            Ideas to Impact
          </p>
        </div>
      </motion.div>

      {/* Stacked Wooden Boards (Lower Down) */}
      <div className="mt-32 relative z-10 flex flex-col items-center space-y-4">
        {['CODE', 'BUILD', 'LEARN', 'REPEAT'].map((text, i) => (
          <motion.div
            key={text}
            className="bg-[#6b5545] texture-wood px-6 py-2 shadow-lg border-y border-[#7d6554] w-36 text-center transform origin-left"
            initial={{ rotate: i % 2 === 0 ? -2 : 2, x: i % 2 === 0 ? -10 : 10 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Nail dots */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-iron-900 rounded-full shadow-inner opacity-80" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-iron-900 rounded-full shadow-inner opacity-80" />

            <span className="font-sans font-bold text-cream-300 tracking-widest text-sm drop-shadow-sm">
              {text}
            </span>
          </motion.div>
        ))}
        {/* Wooden post supporting the signs */}
        <div className="absolute top-0 bottom-[-50px] w-4 bg-walnut-700 texture-wood -z-10 shadow-md" />
      </div>

    </div>
  );
}
