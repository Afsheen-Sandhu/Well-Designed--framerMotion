"use client";
import React from "react";

const cards = [
  {
    logo: "/3.png",
    title: "Explore the world's most beautiful places.",
    desc: "Experience breathtaking views and fresh air.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=60",
  },
  {
    logo: "/2.png",
    title: "Discover the hidden gems of nature.",
    desc: "Find the best urban spots for food and culture.",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=900&q=60",
  },
  {
    logo: "/1.png",
    desc: "Relax and unwind by the ocean.",
    title: "Unwind by the ocean.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",
  },
];

export default function ImageCards() {
  return (
    <section className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-10 py-2">
        
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden group shadow-lg hover:scale-[1.03] transition-transform duration-500"
          >
            {/* Image */}
            <img
              src={card.img}
              alt="Card background"
              className="w-full h-80 object-cover brightness-75 group-hover:brightness-50 transition-all duration-500 rounded-2xl"
            />

            {/* Logo overlay - always visible */}
            <div className="absolute inset-0 flex flex-col justify-center p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl">
              <img
                src={card.logo}
                alt="Logo"
                className="w-104 h-104 mb-3 object-contain opacity-100"
              />
            </div>

            {/* Text below the image */}
            <div className="p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h3 className="font-quattrocento text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          </div>
          
          
        ))}
        
      </div>
    </section>
  );
}
