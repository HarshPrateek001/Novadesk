"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    alt: "Luxury lobby",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200",
    alt: "Master bedroom",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200",
    alt: "Skyline view",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    alt: "Living room",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern kitchen",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
    alt: "Spa & Wellness",
    tall: false,
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { clipPath: "inset(100% 0% 0% 0%)", y: 40, opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: (i % 3) * 0.15,
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-24 bg-bone">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gold mb-4">Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-16">Life at Aura</h3>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className={`relative w-full break-inside-avoid overflow-hidden ${img.tall ? "h-[55vh]" : "h-[35vh]"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
