"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/app/utils/UseMousePositon';

export const MouseFollower = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over navbar logo or heading
      const isLogo = target.tagName === 'IMG' && target.src?.includes('Logo.svg');
      const isHeading = target.tagName === 'H1' || target.classList.contains('font-dahlia');
      const isNavbarTab = target.closest('li') && target.closest('ul');
      
      // More specific check for navbar tabs
      const isNavbarLi = target.tagName === 'LI' && target.classList.contains('cursor-pointer');
      
      if (isLogo || isHeading || isNavbarTab || isNavbarLi) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if leaving navbar logo or heading
      const isLogo = target.tagName === 'IMG' && target.src?.includes('Logo.svg');
      const isHeading = target.tagName === 'H1' || target.classList.contains('font-dahlia');
      const isNavbarTab = target.closest('li') && target.closest('ul');
      
      // More specific check for navbar tabs
      const isNavbarLi = target.tagName === 'LI' && target.classList.contains('cursor-pointer');
      
      if (isLogo || isHeading || isNavbarTab || isNavbarLi) {
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
        * {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: x - 6,
          top: y - 6,
        }}
        animate={{
          scale: isHovered ? 8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          mass: 0.5,
        }}
      >
        <div 
          className="w-3 h-3 rounded-full bg-white"
        />
      </motion.div>
    </>
  );
};
