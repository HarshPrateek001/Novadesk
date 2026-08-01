"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Amenities from "@/components/Amenities";
import Residences from "@/components/Residences";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Enquire from "@/components/Enquire";

export default function Home() {
  const [use3D, setUse3D] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar use3D={use3D} onToggle3D={() => setUse3D((v) => !v)} />

      {/* Hero — Canvas Sequence or 3D */}
      <Hero use3D={use3D} />

      {/* Sections */}
      <section id="story"><Story /></section>
      <section id="amenities"><Amenities /></section>
      <section id="residences"><Residences /></section>
      <section id="location"><Location /></section>
      <section id="gallery"><Gallery /></section>
      <section id="enquire"><Enquire /></section>

      {/* Footer */}
      <footer className="bg-charcoal py-12 px-6 md:px-24 border-t border-taupe/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-bone text-xl">AURA</p>
          <p className="text-xs text-taupe font-sans tracking-widest text-center">
            © {new Date().getFullYear()} Aura Residences. All Rights Reserved. | RERA Registered
          </p>
          <p className="text-xs text-taupe font-sans tracking-wider">Crafted with Excellence</p>
        </div>
      </footer>
    </main>
  );
}
