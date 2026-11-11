import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { prefersReducedMotion } from '../../lib/animations';

/**
 * Scroll-reactive Three.js WebGL layer rendering:
 * - Royal-blue & ice-white neural particle cloud whose velocity responds to scroll speed
 * - Geodesic wireframe holo-cage orbiting around the FORGE Core sequence
 * - Fine dual orbital telemetry rings & dynamic Z-depth camera push synced to scrollProgressRef
 */
export default function ForgeCoreScene({ scrollProgressRef, className = '', intensity = 1 }) {
  const containerRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [webglReady, setWebglReady] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) {
      setWebglReady(false);
      return undefined;
    }

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglReady(false);
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 7.4;

    const getSize = () => ({
      w: Math.max(300, container.clientWidth || window.innerWidth),
      h: Math.max(300, container.clientHeight || window.innerHeight),
    });

    const initialSize = getSize();
    camera.aspect = initialSize.w / initialSize.h;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(initialSize.w, initialSize.h);
    renderer.domElement.className = 'forge-three-canvas';
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 220 additive Royal Blue & Ice White neural starfield nodes distributed in Z-space
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color('#2E29FF'),
      new THREE.Color('#5C88FF'),
      new THREE.Color('#93C5FD'),
      new THREE.Color('#FFFFFF'),
    ];

    for (let i = 0; i < particleCount; i += 1) {
      const angle = ((i * 137.5) * Math.PI) / 180;
      const radius = 2.15 + ((i * 29) % 100) * 0.042;
      const z = (((i * 47) % 100) / 100 - 0.5) * 5.2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = z;

      const c = palette[i % palette.length];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.54 * intensity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Subtle geodesic wireframe lattice subtly framing the scroll sequence
    const cageBase = new THREE.IcosahedronGeometry(2.58, 1);
    const cageEdges = new THREE.EdgesGeometry(cageBase);
    const cageMat = new THREE.LineBasicMaterial({
      color: 0x4f75ff,
      transparent: true,
      opacity: 0.14 * intensity,
    });
    const cageLines = new THREE.LineSegments(cageEdges, cageMat);
    group.add(cageLines);

    // Fine hairline holographic orbital rings framing perimeter
    const ringGeo1 = new THREE.TorusGeometry(2.98, 0.006, 8, 96);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x5c88ff,
      transparent: true,
      opacity: 0.24 * intensity,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.16;
    ring1.rotation.y = Math.PI * 0.08;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.52, 0.005, 8, 110);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x2e29ff,
      transparent: true,
      opacity: 0.19 * intensity,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI * 0.22;
    ring2.rotation.y = -Math.PI * 0.12;
    group.add(ring2);

    let isVisible = true;
    let rafId = null;

    const handleResize = () => {
      const { w, h } = getSize();
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(handleResize) : null;
    if (resizeObserver) resizeObserver.observe(container);

    const handlePointerMove = (e) => {
      const nx = (e.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
      const ny = (e.clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
      pointerRef.current.targetX = nx * 0.16;
      pointerRef.current.targetY = ny * 0.13;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    let time = 0;
    let smoothedProgress = scrollProgressRef?.current ?? 0;

    const animate = () => {
      if (!isVisible || document.hidden) {
        rafId = null;
        return;
      }
      time += 0.008;

      const rawProgress = Math.max(0, Math.min(1, scrollProgressRef?.current ?? 0));
      smoothedProgress += (rawProgress - smoothedProgress) * 0.1;
      const scrollVelocity = Math.min(1.6, Math.abs(rawProgress - smoothedProgress) * 26);

      const ptr = pointerRef.current;
      ptr.x += (ptr.targetX - ptr.x) * 0.05;
      ptr.y += (ptr.targetY - ptr.y) * 0.05;

      // Scroll-linked 3D camera push & lateral counter-parallax (extra pull on narrow portrait viewports)
      const portraitPull = camera.aspect < 0.9 ? (0.9 - Math.max(0.42, camera.aspect)) * 3.1 : 0;
      camera.position.z = 7.45 + portraitPull - Math.sin(smoothedProgress * Math.PI) * 1.35;
      camera.position.x = ptr.x * 0.45 + Math.sin(smoothedProgress * Math.PI * 3) * 0.28;
      camera.position.y = -ptr.y * 0.35 + Math.cos(smoothedProgress * Math.PI * 2) * 0.12;
      camera.lookAt(0, 0, 0);

      group.rotation.y = ptr.x + Math.sin(time * 0.4 + smoothedProgress * Math.PI) * 0.06;
      group.rotation.x = -ptr.y + Math.cos(time * 0.35 + smoothedProgress * Math.PI * 0.5) * 0.04;

      const cageScale = 1 + Math.sin(smoothedProgress * Math.PI * 4) * 0.05;
      cageLines.scale.set(cageScale, cageScale, cageScale);
      cageLines.rotation.y = time * 0.09 + smoothedProgress * Math.PI * 2.2;
      cageLines.rotation.x = Math.sin(smoothedProgress * Math.PI * 2) * 0.35;

      particles.rotation.z = time * 0.11 + smoothedProgress * Math.PI * 1.45;
      particles.rotation.y = Math.sin(smoothedProgress * Math.PI * 2) * 0.32;
      particleMaterial.opacity = Math.min(0.88, (0.5 + scrollVelocity * 0.24) * intensity);

      ring1.rotation.z = time * 0.16 + smoothedProgress * Math.PI * 2.1;
      ring1.rotation.x = Math.PI * 0.16 + Math.sin(smoothedProgress * Math.PI * 2) * 0.24;

      ring2.rotation.z = -time * 0.13 - smoothedProgress * Math.PI * 1.75;
      ring2.rotation.y = -Math.PI * 0.12 + Math.cos(smoothedProgress * Math.PI * 3) * 0.22;

      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(animate);
    };

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                isVisible = entry.isIntersecting;
                if (isVisible && rafId === null) {
                  rafId = window.requestAnimationFrame(animate);
                }
              });
            },
            { threshold: 0.02 }
          )
        : null;

    if (observer) observer.observe(container);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      particleGeometry.dispose();
      particleMaterial.dispose();
      cageBase.dispose();
      cageEdges.dispose();
      cageMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [intensity, scrollProgressRef]);

  return (
    <div
      ref={containerRef}
      className={`forge-three-layer ${!webglReady ? 'is-fallback' : ''} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
