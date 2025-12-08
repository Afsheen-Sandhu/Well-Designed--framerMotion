import React from "react";
import Image from "next/image";

export const About = () => {
  const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
  ];
  return (
    <div className=" w-full h-screen py-30 bg-black">
      <div className=" flex items-center justify-center pb-4">
        <h1 className="font-quattrocento  text-white text-4xl font">
          Hotels Well Designed
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-4 px-30 py-20">
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/${image}`}
            alt={`Image ${index + 1}`}
            width={200}
            height={200}
            className={`w-full h-auto p-8 border-r-white border-r ${
              index < 6 ? "border-b-white border-b" : ""
            }`}
          />
        ))}
      </div>
      <div className=" font-manropetext-white text-center px-20 py-10 space-y-8">
        <h2 className="text-5xl">About</h2>
        <p className="text-4xl font-quattrocento px-60">
          Welcome to iframe hospitality, your premier destination for
          exceptional branding and web design tailored specifically for hotels
          and villas in the captivating landscapes of Greece.
        </p>
      </div>
    </div>
  );
};
