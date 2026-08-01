"use client";

import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function Building() {
  return (
    <group>
      {/* Dynamic luxury tower base with multiple blocks for a modern architectural structure */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[1.5, 5, 1.5]} />
        <meshStandardMaterial color="#C4A265" roughness={0.1} metalness={0.8} />
      </mesh>
      
      {/* Outer glass wrap */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[1.7, 4.8, 1.7]} />
        <meshStandardMaterial color="#C7BEB2" opacity={0.3} transparent roughness={0.0} />
      </mesh>

      {/* Floating accent balconies */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[0, i * 0.9 - 0.5, 0]} rotation={[0, i * 0.2, 0]}>
          <boxGeometry args={[2.0, 0.08, 2.0]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.4} />
        </mesh>
      ))}

      {/* Surrounding landscape grid */}
      <mesh position={[0, -1.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#0e0e0e" roughness={0.8} />
      </mesh>

      {/* Luxury reflective pool */}
      <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 8, 32]} />
        <meshStandardMaterial color="#121a1e" roughness={0.05} metalness={0.9} />
      </mesh>
    </group>
  );
}

function Scene({ parentRef }: { parentRef: React.RefObject<HTMLDivElement> }) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current || !parentRef.current) return;

    // Scroll trigger tied to the parent pinned container
    const trigger = ScrollTrigger.create({
      trigger: parentRef.current,
      start: "top top",
      end: "+=300%",
      scrub: 1,
      onUpdate: (self) => {
        if (groupRef.current) {
          groupRef.current.rotation.y = self.progress * Math.PI * 2.5; // Orbit
          groupRef.current.position.y = -self.progress * 1.5; // Slight drop down
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [parentRef]);

  return (
    <group ref={groupRef}>
      <Building />
    </group>
  );
}

export default function Hero3D({ parentRef }: { parentRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [6, 4, 10], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
        <Environment preset="city" />
        <Scene parentRef={parentRef} />
      </Canvas>
    </div>
  );
}
