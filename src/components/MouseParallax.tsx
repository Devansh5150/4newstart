'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function MouseParallax({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    springX.set(mousePosition.x * -10); // Rotate against mouse slightly
    springY.set(mousePosition.y * 10);
  }, [mousePosition, springX, springY]);

  return (
    <motion.div
      style={{
        rotateX: springY,
        rotateY: springX,
        transformStyle: "preserve-3d"
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
