"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type MouseContextType = {
  isNavbarHovered: boolean;
  setIsNavbarHovered: (hovered: boolean) => void;
  position: Position;
  setPosition: (position: Position) => void;
};

const MouseContext = createContext<MouseContextType | undefined>(undefined);

export const MouseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <MouseContext.Provider value={{ isNavbarHovered, setIsNavbarHovered, position, setPosition }}>
      {children}
    </MouseContext.Provider>
  );
};

export const useMouseContext = () => {
  const context = useContext(MouseContext);
  if (!context) {
    throw new Error('useMouseContext must be used within a MouseProvider');
  }
  return context;
};
