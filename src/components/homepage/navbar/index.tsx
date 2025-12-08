"use client";
import { useState, useEffect } from "react";
import { animate } from "framer-motion";
import { Bell, Menu, X } from "lucide-react";
import NextImage from "next/image";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Hotels", id: "contact" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "footer" },
];

export const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🧭 Detect current active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;
      let current = "#home";

      navLinks.forEach(({ id }) => {
        if (!id) return;
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) current = `#${id}`;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-btn")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // 🌀 Smooth scroll using Framer Motion
  const smoothScroll = (e: React.MouseEvent, id?: string) => {
    if (!id) return;
    e.preventDefault();

    const el = document.getElementById(id);

    console.log("el", el);

    if (!el) return;

    const targetY = el.offsetTop - 100;

    animate(window.scrollY, targetY, {
      duration: 0.8,
      ease: "easeInOut",
      onUpdate: (val) => window.scrollTo(0, val),
    });

    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        {/* Desktop & Tablet Layout (lg and above) */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Logo */}
          <NextImage
            src="/Logo.svg"
            alt="Logo"
            width={160}
            height={40}
            className="w-40 xl:w-56 h-auto"
          />

          {/* Nav Links */}
          <ul className="font-manrope flex items-center gap-4 xl:gap-10 bg-neutral-900/80 backdrop-blur-sm rounded-2xl px-8 xl:px-20 py-4 xl:py-8 border border-neutral-700">
            {navLinks.map(({ label, id }) => {
              const linkTarget = `#${id}`;
              const isActive = active === `#${id}`;
              return (
                <li key={label}>
                  <a
                    href={linkTarget}
                    onClick={(e) => smoothScroll(e, id)}
                    className={`px-4 xl:px-10 py-2 xl:py-4 rounded-xl text-xs xl:text-sm uppercase text-white transition-colors duration-200 ${
                      isActive ? "bg-slate-800" : "hover:bg-slate-700"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Enquiry Button */}
          <a
            href="#footer"
            onClick={(e) => smoothScroll(e, "footer")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="font-manrope flex items-center gap-2 xl:gap-3 bg-neutral-900/80 backdrop-blur-sm rounded-2xl px-6 xl:px-9 py-4 xl:py-8 border border-neutral-700 hover:bg-slate-800 transition-colors duration-200"
          >
            <span
              className={`text-lg xl:text-2xl transition-colors duration-200 ${
                isHovered ? "text-blue-500" : "text-orange-500"
              }`}
            >
              <Bell />
            </span>
            <span className="text-xs xl:text-sm uppercase text-white">
              Enquiry
            </span>
          </a>
        </div>

        {/* Mobile & Tablet Layout (below lg) */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Logo */}
          <NextImage
            src="/Logo.svg"
            alt="Logo"
            width={128}
            height={32}
            className="w-32 sm:w-40 h-auto"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hamburger-btn p-2 bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-neutral-700 text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu lg:hidden absolute top-20 left-4 right-4 bg-neutral-900/95 backdrop-blur-sm rounded-2xl border border-neutral-700 shadow-2xl overflow-hidden animate-in slide-in-from-top duration-300">
            <ul className="font-manrope flex flex-col">
              {navLinks.map(({ label, id }, index) => {
                const linkTarget = `#${id}`;
                const isActive = active === `#${id}`;
                return (
                  <li key={label}>
                    <a
                      href={linkTarget}
                      onClick={(e) => smoothScroll(e, id)}
                      className={`block px-6 py-4 text-sm uppercase text-white transition-colors duration-200 ${
                        isActive ? "bg-slate-800" : "hover:bg-slate-700"
                      } ${
                        index !== navLinks.length - 1
                          ? "border-b border-neutral-700"
                          : ""
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}

              {/* Enquiry Button in Mobile Menu */}
              <li>
                <a
                  href="#footer"
                  onClick={(e) => smoothScroll(e, "footer")}
                  className="flex items-center justify-center gap-3 px-6 py-4 text-sm uppercase text-white bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
                >
                  <Bell className="text-orange-500" size={20} />
                  <span>Enquiry</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
