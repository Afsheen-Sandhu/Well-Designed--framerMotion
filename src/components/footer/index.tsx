"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{ fontFamily: "Quattrocento, serif" }}
    >
      {/* Background Image */}
      <div className="absolute inset-10 rounded-xl overflow-hidden ">
        <Image
          className="w-full h-full object-cover opacity-50"
          src="/footer.png"
          alt=""
          fill
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full flex flex-col md:flex-row gap-18 px-8 md:px-16 pb-16 pt-8">
          {/* Contact Information */}
          <div className="w-full md:w-[35%] space-y-6">
            <div>
              <h2 className="text-white text-3xl font-bold mb-2 tracking-tight font-manrope">
                Contact Us
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed  mt-4">
                Let us be your creative partners on this journey, helping you
                create an indelible mark on Greece&apos;s hospitality landscape.{" "}
              </p>
            </div>
            {/* Contact Details */}
            <h2 className="text-white pt-5 text-3xl font-bold mb-4 tracking-tight font-manrope">
              Contact Details
            </h2>
            <ul className="space-y-5 text-gray-200 mt-8">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">📧</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-white text-base">info@example.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">📞</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-white text-base">+1 (123) 456-7890</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">📍</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="text-white text-base">
                    123 Main St, City, State 12345
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Enquiry Form */}
          <div className="w-full md:w-[65%] space-y-4">
            <div>
              <h2
                className="text-white text-3xl font-bold mb-2 tracking-tight"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Enquiry Form
              </h2>
              <p className="text-gray-300 text-xl pr-100 leading-relaxed mt-4">
                Let us be your creative partners on this journey, helping you
                create an indelible mark on Greece&apos;s hospitality landscape.{" "}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-500 text-white placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors text-lg font-manrope"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Whats your email address?"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors text-lg font-manrope"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-500 text-white  placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors text-lg font-manrope"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black font-manrope font-semibold py-3 space-x-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
