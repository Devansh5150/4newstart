'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AdvertisementBoard() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">

      {/* Warm Spotlight from Top */}
      <div className="absolute -top-10 w-48 h-32 bg-amber-glow blur-[50px] opacity-40 pointer-events-none rounded-full z-0" />

      {/* Frame Container */}
      <motion.div
        className="relative z-10 w-full aspect-[4/5] bg-walnut-600 texture-wood p-3 rounded-sm shadow-2xl border-t border-walnut-500"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Inner Paper Canvas */}
        <div className="w-full h-full bg-[#f4ebd8] texture-paper rounded-sm shadow-inner overflow-hidden relative flex flex-col items-center justify-between p-8 border border-[#d6c7af]">

          {/* Vintage Border Details */}
          <div className="absolute inset-2 border border-[#d6c7af] opacity-50 pointer-events-none" />
          <div className="absolute inset-3 border-2 border-[#8b7355] opacity-20 pointer-events-none" />

          {/* Paint/Wear Overlays (subtle) */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e6d8c3] rounded-full blur-[20px] opacity-60" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#d9cbb2] rounded-full blur-[20px] opacity-60" />

          {/* Top Text Content */}
          <div className="relative z-20 text-center mt-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-walnut-700 tracking-tight leading-none uppercase drop-shadow-sm">
              <span className="block text-xl md:text-2xl mb-2 text-terracotta-600 tracking-widest font-sans font-bold">Let&apos;s Build</span>
              Something<br />Amazing<br />Together
            </h2>

            {/* Vintage Divider */}
            <div className="flex items-center justify-center gap-2 mt-6 mb-4 opacity-70">
              <div className="w-12 h-[2px] bg-walnut-700" />
              <div className="w-2 h-2 rotate-45 bg-terracotta-600" />
              <div className="w-12 h-[2px] bg-walnut-700" />
            </div>

            <p className="font-serif italic text-stone-500 text-sm md:text-base mt-4">
              Open for creative collaborations and new opportunities.
            </p>
          </div>

          {/* Call to Action Button */}
          <motion.button
            className="relative z-20 mt-auto bg-walnut-700 text-cream-200 px-6 py-3 font-sans font-bold tracking-widest text-sm uppercase flex items-center gap-2 shadow-[0_4px_0_#32251d] hover:bg-walnut-600 transition-colors rounded-sm active:translate-y-1 active:shadow-[0_0_0_#32251d]"
            whileHover={{ y: -2 }}
          >
            Let&apos;s Connect
            <ArrowRight className="w-4 h-4" />
          </motion.button>

        </div>
      </motion.div>

      {/* Supporting Brackets */}
      <div className="w-full flex justify-between px-8 -mt-2 z-0">
        <div className="w-4 h-12 bg-iron-900 shadow-md translate-y-2 rounded-b-sm" />
        <div className="w-4 h-12 bg-iron-900 shadow-md translate-y-2 rounded-b-sm" />
      </div>

    </div>
  );
}
