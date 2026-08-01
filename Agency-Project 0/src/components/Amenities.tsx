"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { id: 1, title: "Infinity Pool", img: "https://images.unsplash.com/photo-1576013551627-11dc5fdb6547?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, title: "Private Cinema", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200" },
  { id: 3, title: "Wellness Spa", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200" },
  { id: 4, title: "Sky Lounge", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" },
];

export default function Amenities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const sections = gsap.utils.toArray(".amenity-card");
    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    // Horizontal scroll
    const scrollTween = gsap.to(sections, {
      x: -(containerWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerWidth,
      }
    });

    // Image Parallax within the horizontal scroll
    imagesRef.current.forEach((img) => {
      if (!img) return;
      gsap.to(img, {
        x: 100, // Move image to right while container moves left
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + containerWidth,
          scrub: true,
        }
      });
    });

    return () => {
      scrollTween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex items-center bg-charcoal text-bone overflow-hidden">
      <div className="absolute top-24 left-6 md:left-24 z-10">
        <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gold mb-2">Lifestyle</h2>
        <h3 className="text-4xl font-serif">Curated Amenities</h3>
      </div>

      <div ref={containerRef} className="flex gap-16 px-6 md:px-24 mt-24">
        {amenities.map((amenity, i) => (
          <div 
            key={amenity.id} 
            className="amenity-card relative w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] flex-shrink-0 overflow-hidden"
          >
            <div
              ref={el => { imagesRef.current[i] = el; }}
              className="absolute inset-0 -mx-[100px] overflow-hidden"
            >
              <Image
                src={amenity.img}
                alt={amenity.title}
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/20" />
            <h4 className="absolute bottom-8 left-8 text-3xl font-serif text-white z-10">{amenity.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
