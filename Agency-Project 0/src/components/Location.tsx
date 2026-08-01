"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { name: "Business District", x: 62, y: 38, desc: "5 min walk" },
  { name: "Central Park", x: 32, y: 30, desc: "Across the avenue" },
  { name: "Fine Dining", x: 72, y: 58, desc: "Curated selection" },
  { name: "Metro Station", x: 44, y: 72, desc: "3 min walk" },
];

export default function Location() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    highlights.forEach((h, i) => {
      // Pin Animation
      const pin = pinsRef.current[i];
      if (pin) {
        gsap.fromTo(
          pin,
          { opacity: 0, scale: 0, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.2 + 0.3,
          }
        );
      }

      // Line animation
      const line = linesRef.current[i];
      if (line) {
        const dx = h.x - 50;
        const dy = h.y - 50;
        const length = Math.sqrt(dx * dx + dy * dy);

        gsap.fromTo(
          line,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.2,
          }
        );
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-[#0e0e0e] text-bone relative overflow-hidden">
      {/* Subtle gold gradient glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-24 max-w-6xl mx-auto mb-16 relative z-10">
        <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gold mb-4">Location</h2>
        <h3 className="text-4xl md:text-5xl font-serif tracking-tight text-balance">
          Perfect Connection
        </h3>
      </div>

      {/* Styled vector map container */}
      <div className="relative mx-6 md:mx-24 h-[65vh] bg-[#121212] border border-gold/10 overflow-hidden rounded-sm shadow-2xl">
        {/* Background Vector Map Layer */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none opacity-40 select-none">
          {/* Grid lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`x-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#ffffff" strokeWidth="0.03" opacity="0.15" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`y-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#ffffff" strokeWidth="0.03" opacity="0.15" />
          ))}

          {/* Styled River / Coastal curve */}
          <path d="M-10,35 C 20,30 35,45 50,65 T 110,85" fill="none" stroke="#1d2226" strokeWidth="12" />
          <path d="M-10,35 C 20,30 35,45 50,65 T 110,85" fill="none" stroke="#1c2b33" strokeWidth="1" opacity="0.3" />

          {/* Major Avenues */}
          <line x1="0" y1="50" x2="100" y2="50" stroke="#252525" strokeWidth="0.6" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#252525" strokeWidth="0.6" />
          <path d="M 10,0 L 90,100" stroke="#1e1e1e" strokeWidth="0.4" />

          {/* Drawing Connector Lines from Central site AURA (50,50) */}
          {highlights.map((h, i) => (
            <line
              key={`line-${i}`}
              ref={(el) => { linesRef.current[i] = el; }}
              x1="50"
              y1="50"
              x2={h.x}
              y2={h.y}
              stroke="#C4A265"
              strokeWidth="0.18"
              strokeDasharray="2"
              opacity="0.85"
            />
          ))}
        </svg>

        {/* Central AURA Pin */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          <div className="relative flex items-center justify-center">
            {/* Pulsing visual glow effect */}
            <div className="w-8 h-8 rounded-full bg-gold/10 absolute animate-[ping_2s_infinite]" />
            <div className="w-4 h-4 rounded-full bg-gold border border-bone relative z-10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-bone" />
            </div>
            {/* Elegant label tag */}
            <div className="absolute top-6 bg-[#1a1a1a] border border-gold/45 px-3 py-1 text-[11px] font-serif text-bone tracking-widest uppercase shadow-xl whitespace-nowrap">
              AURA SITE
            </div>
          </div>
        </div>

        {/* Neighborhood Pins */}
        {highlights.map((h, i) => (
          <div
            key={h.name}
            ref={(el) => { pinsRef.current[i] = el; }}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          >
            <div className="flex items-center gap-3 group cursor-pointer select-none">
              {/* Glowing Pin Head */}
              <div className="relative flex items-center justify-center flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-bone/0 group-hover:bg-gold/10 transition-colors duration-500 absolute" />
                <div className="w-2.5 h-2.5 rounded-full bg-bone border border-charcoal group-hover:bg-gold transition-colors duration-300 relative z-10" />
              </div>

              {/* Tag box */}
              <div className="bg-[#161616]/95 backdrop-blur-sm border border-white/5 group-hover:border-gold/30 px-3.5 py-1.5 rounded-sm transition-all duration-300 shadow-md">
                <p className="font-serif text-[12px] text-bone tracking-wide group-hover:text-gold transition-colors duration-300">
                  {h.name}
                </p>
                <p className="font-sans text-taupe text-[9px] tracking-wider mt-0.5">{h.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Map style indicator info */}
        <p className="absolute bottom-4 right-4 text-[9px] text-taupe/30 font-sans tracking-[0.25em] uppercase select-none">
          experience centre map
        </p>
      </div>
    </section>
  );
}
