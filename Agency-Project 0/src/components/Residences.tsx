"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const plans = [
  {
    id: "1br",
    label: "1 Bedroom",
    area: "780 sq ft",
    beds: 1,
    baths: 1,
    price: "₹ 2.1 Cr",
    svgPath: `
      <rect x="10" y="10" width="180" height="130" rx="2" stroke="currentColor" stroke-width="1" fill="none"/>
      <rect x="10" y="10" width="90" height="80" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="110" y="10" width="80" height="50" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="110" y="70" width="80" height="70" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <text x="55" y="55" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Bedroom</text>
      <text x="150" y="30" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Bath</text>
      <text x="150" y="108" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Living</text>
    `,
  },
  {
    id: "2br",
    label: "2 Bedroom",
    area: "1,240 sq ft",
    beds: 2,
    baths: 2,
    price: "₹ 3.5 Cr",
    svgPath: `
      <rect x="10" y="10" width="230" height="160" rx="2" stroke="currentColor" stroke-width="1" fill="none"/>
      <rect x="10" y="10" width="100" height="90" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="120" y="10" width="120" height="90" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="10" y="110" width="230" height="60" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <text x="60" y="58" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Bed 1</text>
      <text x="180" y="58" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Bed 2</text>
      <text x="120" y="143" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Living & Dining</text>
    `,
  },
  {
    id: "3br",
    label: "3 Bedroom",
    area: "1,890 sq ft",
    beds: 3,
    baths: 3,
    price: "₹ 5.2 Cr",
    svgPath: `
      <rect x="10" y="10" width="280" height="180" rx="2" stroke="currentColor" stroke-width="1" fill="none"/>
      <rect x="10" y="10" width="90" height="90" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="110" y="10" width="90" height="90" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="210" y="10" width="80" height="90" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="10" y="110" width="280" height="80" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <text x="55" y="58" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Bed 1</text>
      <text x="155" y="58" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Bed 2</text>
      <text x="250" y="58" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Bed 3</text>
      <text x="150" y="153" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Living & Dining</text>
    `,
  },
  {
    id: "ph",
    label: "Penthouse",
    area: "4,200 sq ft",
    beds: 4,
    baths: 5,
    price: "₹ 18 Cr",
    svgPath: `
      <rect x="10" y="10" width="280" height="220" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <rect x="10" y="10" width="130" height="100" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="150" y="10" width="140" height="100" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="10" y="120" width="130" height="110" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="150" y="120" width="80" height="55" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="240" y="120" width="50" height="55" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <rect x="150" y="185" width="140" height="45" rx="1" stroke="currentColor" stroke-width="0.5" fill="none"/>
      <text x="75" y="63" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Master Suite</text>
      <text x="220" y="63" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Bed 2 / 3</text>
      <text x="75" y="178" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Grand Living</text>
      <text x="190" y="150" font-size="7" text-anchor="middle" fill="currentColor" font-family="serif">Bed 4</text>
      <text x="265" y="150" font-size="7" text-anchor="middle" fill="currentColor" font-family="serif">Study</text>
      <text x="220" y="210" font-size="8" text-anchor="middle" fill="currentColor" font-family="serif">Terrace</text>
    `,
  },
];

export default function Residences() {
  const [active, setActive] = useState("1br");
  const svgRef = useRef<SVGSVGElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  const currentPlan = plans.find((p) => p.id === active) || plans[0];

  useEffect(() => {
    if (!svgRef.current || !specsRef.current) return;
    gsap.fromTo(svgRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" });
    gsap.fromTo(
      specsRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power3.out" }
    );
  }, [active]);

  return (
    <section className="py-24 md:py-40 px-6 md:px-24 bg-bone">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gold mb-4">Residences</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-16">Floor Plans</h3>

        {/* Tabs */}
        <div className="flex gap-1 mb-16 border-b border-taupe/40">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActive(plan.id)}
              className={`px-6 py-3 text-sm tracking-widest uppercase font-sans transition-all duration-300 border-b-2 -mb-[1px] ${
                active === plan.id
                  ? "border-gold text-charcoal"
                  : "border-transparent text-taupe hover:text-charcoal"
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* SVG Floor Plan */}
          <div className="bg-taupe/10 rounded-sm p-8 flex items-center justify-center min-h-[400px]">
            <svg
              ref={svgRef}
              viewBox="0 0 300 240"
              className="w-full max-w-md text-charcoal"
              xmlns="http://www.w3.org/2000/svg"
              dangerouslySetInnerHTML={{ __html: currentPlan.svgPath }}
            />
          </div>

          {/* Specs */}
          <div ref={specsRef} className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-taupe font-sans mb-2">Area</p>
              <p className="text-4xl font-serif text-charcoal">{currentPlan.area}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-taupe/30 pt-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-taupe font-sans mb-2">Bedrooms</p>
                <p className="text-3xl font-serif">{currentPlan.beds}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-taupe font-sans mb-2">Bathrooms</p>
                <p className="text-3xl font-serif">{currentPlan.baths}</p>
              </div>
            </div>
            <div className="border-t border-taupe/30 pt-8">
              <p className="text-sm uppercase tracking-widest text-taupe font-sans mb-2">Price From</p>
              <p className="text-4xl font-serif text-gold">{currentPlan.price}</p>
            </div>
            <a
              href="#enquire"
              className="inline-block mt-4 border border-gold text-gold hover:bg-gold hover:text-bone transition-all duration-500 px-10 py-4 text-sm tracking-widest uppercase font-sans"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
