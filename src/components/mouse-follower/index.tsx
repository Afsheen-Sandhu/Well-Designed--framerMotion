"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useMousePosition } from "@/utils/UseMousePositon";

export const MouseFollower = () => {
  const { x, y } = useMousePosition(); // expects numbers,  e.g. { x: number, y: number }
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);

    const enter = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest?.(".navbar-tab") || t.closest?.(".hero-hover-area")) {
        setIsHovered(true);
      }
    };
    const leave = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest?.(".navbar-tab") || t.closest?.(".hero-hover-area")) {
        setIsHovered(false);
      }
    };

    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    return () => {
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      animate={{
        x: x,
        y: y,
        scale: isHovered ? 5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 18,
        mass: 0.25,
      }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 2147483647, // extreme z-index to be sure
        mixBlendMode: "difference",
        willChange: "transform",
      }}
    >
      {/* Filled white circle blends correctly with difference */}
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 9999,
          background: "#ffffff",
          transform: "translate(-50%, -50%)", // center the circle at (x,y)
          boxShadow: "0 6px 18px rgba(255,255,255,0.06)",
        }}
      />
    </motion.div>,
    document.body
  );
};
