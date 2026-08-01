"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

// High-quality luxury architecture images from Unsplash
const SEQUENCE_IMAGES = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=90&w=1920", // aerial city dusk
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=90&w=1920", // modern luxury house
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=90&w=1920", // glass tower
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=90&w=1920", // luxury interior lobby
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1920", // pool exterior
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=90&w=1920", // infinity pool sky view
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1920", // terrace view
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=90&w=1920", // rooftop night
];

function useSequenceImages(urls: string[]) {
  const images = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    urls.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      images.current[i] = img;
    });
  }, []);

  return { images: images.current };
}

export default function Hero({ use3D = false }: { use3D?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const loadPctRef = useRef<HTMLSpanElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { images } = useSequenceImages(SEQUENCE_IMAGES);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let currentProgress = 0;
    let displayProgress = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Preload tracking via polling
    const checkLoaded = setInterval(() => {
      const count = images.filter((img) => img && img.complete && img.naturalWidth > 0).length;
      const pct = Math.round((count / SEQUENCE_IMAGES.length) * 100);
      if (loadPctRef.current) loadPctRef.current.textContent = pct + "%";
      if (count >= SEQUENCE_IMAGES.length && loaderRef.current) {
        loaderRef.current.style.opacity = "0";
        loaderRef.current.style.pointerEvents = "none";
        clearInterval(checkLoaded);
      }
    }, 200);

    const drawFrame = (progress: number) => {
      if (!ctx || images.length === 0) return;
      canvas.width = canvas.width; // clear

      const totalImages = images.length;
      const rawIdx = progress * (totalImages - 1);
      const idxA = Math.floor(rawIdx);
      const idxB = Math.min(idxA + 1, totalImages - 1);
      const blend = rawIdx - idxA;

      const imgA = images[idxA];
      const imgB = images[idxB];

      const drawCover = (img: HTMLImageElement, alpha: number) => {
        if (!img || !img.complete || img.naturalWidth === 0) return;
        ctx.globalAlpha = alpha;
        const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
        const x = (canvas.width - img.naturalWidth * scale) / 2;
        const y = (canvas.height - img.naturalHeight * scale) / 2;
        ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
      };

      drawCover(imgA, 1);
      if (blend > 0) drawCover(imgB, blend);

      // Dark vignette overlay
      ctx.globalAlpha = 0.4;
      const grad = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, canvas.height * 0.2, canvas.width / 2, canvas.height / 2, canvas.height * 0.9);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(1, "rgba(0,0,0,0.7)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      displayProgress += (currentProgress - displayProgress) * 0.05;
      drawFrame(displayProgress);
      raf = requestAnimationFrame(loop);
    };

    drawFrame(0);
    raf = requestAnimationFrame(loop);

    // ScrollTrigger — pin the container, map scroll to frame
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        currentProgress = self.progress;
        progressRef.current = self.progress;
      },
    });

    // Overlay text fade
    gsap.to(textRef.current, {
      opacity: 0,
      y: -60,
      ease: "power2.in",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=60%",
        scrub: true,
      },
    });

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(checkLoaded);
      trigger.kill();
      window.removeEventListener("resize", resize);
    };
  }, [images]);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Loading overlay */}
      <div
        ref={loaderRef}
        className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-charcoal text-bone transition-opacity duration-700"
      >
        <div className="w-48 h-px bg-taupe/30 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold animate-pulse" />
        </div>
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-taupe">
          Loading <span ref={loadPctRef}>0%</span>
        </p>
      </div>

      {/* 2D Canvas View */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${use3D ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* 3D R3F View */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${use3D ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Hero3D parentRef={containerRef} />
      </div>

      {/* Overlay text */}
      <div
        ref={textRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none"
      >
        <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-taupe mb-6">
          A New Icon on the Skyline
        </p>
        <h1
          className="font-serif text-[14vw] md:text-[10vw] leading-none text-bone drop-shadow-2xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          AURA
        </h1>
        <p className="font-sans text-xs md:text-sm tracking-[0.35em] uppercase text-bone/60 mt-5">
          Residences of Distinction
        </p>
        {/* Scroll hint */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-bone/40">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-bone/20 relative overflow-hidden">
            <div className="absolute top-0 w-full bg-gold/60 animate-[slideDown_1.5s_ease-in-out_infinite]" style={{ height: "40%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
