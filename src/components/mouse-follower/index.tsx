"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/app/utils/UseMousePositon';

export const MouseFollower = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      // Scale up on navbar or hero hover
      if (
        (e.target as HTMLElement).closest('.navbar-tab') ||
        (e.target as HTMLElement).closest('.hero-hover-area')
      ) {
        setIsHovered(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).closest('.navbar-tab') ||
        (e.target as HTMLElement).closest('.hero-hover-area')
      ) {
        setIsHovered(false);
      }
    };
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Removed global cursor: none. Only hide cursor for follower */
      `}</style>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: x - 6,
          y: y - 6,
          scale: isHovered ? 10 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.2,
        }}
      >
        <div className="w-3 h-3 rounded-full bg-white" />
      </motion.div>
    </>
  );
};