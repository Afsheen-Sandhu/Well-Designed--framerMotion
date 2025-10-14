"use client";
import { useState, useEffect } from "react";
import { animate } from "framer-motion";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
];

export const Navbar = () => {
  const [active, setActive] = useState("#home");

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

  // 🌀 Smooth scroll using Framer Motion
  const smoothScroll = (e: React.MouseEvent, id?: string, href?: string) => {
    if (!id) return; // Skip external links
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const targetY = el.offsetTop - 80; // adjust offset for navbar

    animate(window.scrollY, targetY, {
      duration: 0.8,
      ease: "easeInOut",
      onUpdate: (val) => window.scrollTo(0, val),
    });
  };

  return (
    <nav className="fixed top-0 p-6 z-50 w-full bg-transparent">
      <div className="relative flex items-center justify-center w-full min-h-[5rem]">
        {/* 🔸 Logo (left corner) */}
        <img
          src="/Logo.svg"
          alt="Logo"
          className="absolute left-5 top-1/2 -translate-y-1/2 w-56 h-auto"
        />

        {/* 🔸 Nav Links (centered) */}
        <ul className="font-manrope flex items-center gap-10 bg-neutral-900/60 rounded-2xl px-20 py-8 border border-neutral-700">
          {navLinks.map(({ label, id, href }) => {
            const linkTarget = id ? `#${id}` : href ?? "#";
            const isActive = active === `#${id}`;
            return (
              <li key={label}>
                <a
                  href={linkTarget}
                  onClick={(e) => smoothScroll(e, id, href)}
                  className={`px-10 py-4 rounded-xl text-sm uppercase text-white transition-colors duration-200 ${
                    isActive ? "bg-slate-800" : "hover:bg-slate-700"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
