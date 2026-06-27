'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User } from 'lucide-react';

export default function Door() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[320px] mx-auto preserve-3d flex flex-col items-center">

      {/* Lantern Above Door */}
      <div className="relative mb-6 z-30 flex flex-col items-center">
        {/* Wall Hook */}
        <div className="w-2 h-4 bg-iron-900 rounded-t-full shadow-sm" />
        {/* Lantern Body */}
        <motion.div
          className="w-10 h-14 bg-iron-900 rounded-b-md rounded-t-sm flex items-center justify-center relative shadow-xl"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        >
          {/* Glowing Bulb */}
          <motion.div
            className="w-4 h-6 bg-yellow-200 rounded-full shadow-lantern"
            animate={{ opacity: [0.7, 1, 0.6, 0.9, 0.8] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Stone Arch and Door Frame Container */}
      <div className="relative w-full aspect-[1/2] preserve-3d">

        {/* Rounded Stone Arch Frame */}
        <div className="absolute inset-0 bg-stone-400 texture-stone p-4 rounded-t-full shadow-door transition-shadow duration-300">

          {/* Inner Doorway Opening */}
          <div className="relative w-full h-full bg-black rounded-t-full overflow-hidden shadow-inset-wood border-4 border-walnut-700 preserve-3d">

            {/* The Hidden "About & Contact" Room */}
            <div className="absolute inset-0 bg-black z-0">
              <div className="absolute inset-0 bg-amber-light opacity-30 z-10 pointer-events-none" />
              <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <User className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="font-serif text-2xl text-cream-200 mb-2">About Me</h3>
                <p className="text-stone-400 text-sm mb-6">A brief story of my journey.</p>

                <Mail className="w-10 h-10 text-amber-500 mb-2" />
                <h3 className="font-serif text-xl text-cream-200 mb-2">Contact</h3>
                <p className="text-stone-400 text-sm">hello@example.com</p>
              </div>
            </div>

            {/* The Physical Wooden Door */}
            <motion.div
              className="absolute inset-0 bg-walnut-500 texture-wood origin-left z-30 border-r-2 border-walnut-700 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-t-full cursor-pointer flex flex-col items-center justify-start pt-16"
              initial={false}
              animate={{ rotateY: isOpen ? -95 : 0 }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.01 }}
            >

              {/* Vertical Wood Panels */}
              <div className="absolute inset-x-2 inset-y-2 flex gap-1 opacity-70 pointer-events-none rounded-t-full overflow-hidden">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-full h-full bg-walnut-600 shadow-[inset_2px_0_4px_rgba(0,0,0,0.5)] border-x border-walnut-700" />
                ))}
              </div>

              {/* Door Sign */}
              <div className="relative z-10 bg-walnut-700 px-6 py-4 border-2 border-walnut-400 shadow-md rounded-sm mt-10">
                <div className="font-serif text-cream-300 font-bold tracking-widest text-lg text-center drop-shadow-md">
                  ABOUT
                  <br />
                  <span className="text-sm font-normal">&</span>
                  <br />
                  CONTACT
                </div>
              </div>

              {/* Iron Handle */}
              <div className="absolute right-4 top-1/2 w-4 h-16 bg-iron-900 rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <div className="w-2 h-10 bg-iron-900 shadow-inner rounded-sm translate-x-1" />
              </div>

              {/* Iron Hinges */}
              <div className="absolute left-0 top-32 w-8 h-3 bg-iron-900 rounded-r-sm shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
              <div className="absolute left-0 bottom-32 w-8 h-3 bg-iron-900 rounded-r-sm shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />

            </motion.div>

          </div>
        </div>

        {/* Stone Step */}
        <div className="absolute -bottom-6 left-[-10%] w-[120%] h-12 bg-stone-300 texture-stone rounded-sm shadow-xl border-t border-stone-200 z-40 flex items-center justify-center">
          <div className="w-[90%] h-8 bg-stone-400 border-t border-stone-300 shadow-inner" />
        </div>

      </div>
    </div>
  );
}
