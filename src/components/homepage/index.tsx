import React from "react";
import { Hero } from "./hero";

export const Homepage = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover "
        src="/well-designed-cover-1.jpg"
        alt="cover"
      />
      <div className="absolute inset-0 bg-neutral-900/50"></div>

      <Hero />
    </div>
  );
};
