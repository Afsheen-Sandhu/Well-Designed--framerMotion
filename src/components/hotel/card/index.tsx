import React from "react";

// Reusable Card Component

type CardProps = {
  logo: string;
  title: string;
  desc: string;
  img: string;
};
export const HotelCard = ({ logo, title, desc, img }: CardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group shadow-lg hover:scale-[1.03] transition-transform duration-500">
      <img
        src={img}
        alt="Card background"
        className="w-full h-80 object-cover brightness-75 group-hover:brightness-50 transition-all duration-500"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/30 to-transparent">
        <img
          src={logo}
          alt="Logo"
          className="w-100 h-100 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-6 bg-neutral-800 text-center">
        <h3 className="font-quattrocento text-xl font-semibold mb-2 text-white">
          {title}
        </h3>
        <p className="text-sm text-white">{desc}</p>
      </div>
    </div>
  );
};