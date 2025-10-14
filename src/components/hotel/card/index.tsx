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
    title: "Unwind by the ocean.",
    desc: "Relax and unwind by the ocean.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",
  },
    {
    logo: "/4.png",
    title: "Explore the world's most beautiful places.",
    desc: "Experience breathtaking views and fresh air.",
    img: "a.png",
  },
  {
    logo: "/5.png",
    title: "Discover the hidden gems of nature.",
    desc: "Find the best urban spots for food and culture.",
    img: "b.jpg",
  },
  {
    logo: "/6.png",
    title: "Unwind by the ocean.",
    desc: "Relax and unwind by the ocean.",
    img: "c.jpg",
  },
    {
    logo: "/7.png",
    title: "Explore the world's most beautiful places.",
    desc: "Experience breathtaking views and fresh air.",
    img: "d.jpg",
  },
  {
    logo: "/8.png",
    title: "Discover the hidden gems of nature.",
    desc: "Find the best urban spots for food and culture.",
    img: "e.jpg",
  },
  {
    logo: "/9.png",
    title: "Unwind by the ocean.",
    desc: "Relax and unwind by the ocean.",
    img: "f.jpg",
  },
];

export default function ImageCards() {
  return (
    <section className="bg-black text-white px-10 py-20">
      {/* Section Heading */}
      <div className="flex items-center justify-center py-10 mb-6">
        <h1 className="font-quattrocento text-white text-4xl">
          Hotels Concept Studies
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group shadow-lg hover:scale-[1.03] transition-transform duration-500"
          >
            <img
              src={card.img}
              alt="Card background"
              className="w-full h-80 object-cover brightness-75 group-hover:brightness-50 transition-all duration-500"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/30 to-transparent">
              <img
                src={card.logo}
                alt="Logo"
                className="w-100 h-100 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-6 bg-neutral-800 text-center">
              <h3 className="font-quattrocento text-xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-white">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
