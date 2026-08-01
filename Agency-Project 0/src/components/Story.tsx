"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyText = "An architectural masterpiece rising above the skyline, redefining luxury living with unparalleled views, exquisite finishes, and bespoke amenities.";

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    // Split text into words
    const words = storyText.split(" ");
    textRef.current.innerHTML = "";
    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerText = word;
      span.className = "inline-block opacity-20 translate-y-[20px]";
      textRef.current?.appendChild(span);
      textRef.current?.appendChild(document.createTextNode(" "));
    });

    const spans = textRef.current.children;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      scrub: true,
      animation: gsap.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2.out",
      }),
    });
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-64 px-6 md:px-24 bg-bone text-charcoal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-sans tracking-[0.2em] uppercase mb-12 text-gold">The Vision</h2>
        <p ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance">
          {storyText}
        </p>
      </div>
    </section>
  );
}
