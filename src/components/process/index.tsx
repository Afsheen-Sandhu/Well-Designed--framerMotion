"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      title: "Planning",
      subtitle: "Laying the foundation",
      content:
        "This is the first step in our process. We plan everything carefully — defining goals, timelines, and deliverables before execution begins.",
    },
    {
      title: "Design",
      subtitle: "Turning ideas into visuals",
      content:
        "In this step, we create the design based on the plan — focusing on aesthetics, usability, and seamless user experience.",
    },
    {
      title: "Development",
      subtitle: "Building with precision",
      content:
        "Here, we develop the product using the latest technologies, ensuring performance, scalability, and maintainability.",
    },
    {
      title: "Testing",
      subtitle: "Ensuring quality",
      content:
        "We thoroughly test the product to ensure everything works perfectly and meets our high-quality standards.",
    },
    {
      title: "Website Launch",
      subtitle: "Laying the foundation",
      content:
        "This is the first step in our process. We plan everything carefully — defining goals, timelines, and deliverables before execution begins.",
    },
    {
      title: "Strategy",
      subtitle: "Turning ideas into visuals",
      content:
        "In this step, we create the design based on the plan — focusing on aesthetics, usability, and seamless user experience.",
    },
    {
      title: "Identity Design",
      subtitle: "Building with precision",
      content:
        "Here, we develop the product using the latest technologies, ensuring performance, scalability, and maintainability.",
    },
    {
      title: "Collateral Creation",
      subtitle: "Ensuring quality",
      content:
        "We thoroughly test the product to ensure everything works perfectly and meets our high-quality standards.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  // Measure heights for smooth transitions
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setContentHeights(refs.current.map((el) => el?.scrollHeight || 0));
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="process" className="w-full min-h-screen bg-black text-white px-10 py-20 font-quattrocento">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-semibold tracking-wide">The Process</h1>
        <p className="text-gray-400 mt-3">
          Our approach — from concept to creation.
        </p>
      </div>

      {/* Full-width accordion */}
      <div className="w-full">
        {steps.map((step, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-gray-100 py-8 cursor-pointer w-full"
              onClick={() => toggle(index)}
            >
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-5xl ">{step.title}</h2>
                </div>

                {/* Plus Icon */}
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white"
                >
                  <Plus size={38} />
                </motion.div>
              </div>

              {/* Animated Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: contentHeights[index] || "auto",
                      opacity: 1,
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1], // smoother cubic easing
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      ref={(el) => (refs.current[index] = el)}
                      className="mt-4"
                    >
                      <p className="text-gray-300 leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
