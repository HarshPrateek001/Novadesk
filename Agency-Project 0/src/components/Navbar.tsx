"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({ use3D, onToggle3D }: { use3D: boolean; onToggle3D: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-bone/90 backdrop-blur-md border-b border-taupe/20" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className={`font-serif text-2xl tracking-wider transition-colors duration-500 ${scrolled ? "text-charcoal" : "text-bone"}`}>
          AURA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Story", "Amenities", "Residences", "Gallery", "Enquire"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs tracking-widest uppercase font-sans transition-colors duration-500 ${
                scrolled ? "text-charcoal hover:text-gold" : "text-bone/80 hover:text-bone"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={onToggle3D}
          className={`text-xs tracking-widest uppercase font-sans border px-4 py-2 transition-all duration-500 ${
            use3D
              ? "border-gold text-gold bg-gold/10"
              : scrolled
              ? "border-charcoal/40 text-charcoal hover:border-gold hover:text-gold"
              : "border-bone/50 text-bone/70 hover:border-bone hover:text-bone"
          }`}
        >
          {use3D ? "2D View" : "3D View"}
        </button>
      </div>
    </nav>
  );
}
