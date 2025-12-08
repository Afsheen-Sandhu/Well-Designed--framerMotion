"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export const Last = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-screen pt-30 bg-black relative">
      <Image
        className="w-[90%] h-full mx-auto"
        src="/logo.svg"
        alt=""
        width={800}
        height={600}
      />
      <div className="absolute  bottom-10 left-6 text-white text-lg">
        © Well.Designed 2025 | Privacy Policy
      </div>
      <ArrowUp
        className="absolute border-2 border-white rounded-full  bottom-10 right-6 text-white cursor-pointer hover:opacity-75 transition-opacity hover:scale-105 hover:bg-white hover:text-black p-2"
        size={42}
        onClick={scrollToTop}
      />
    </div>
  );
};
