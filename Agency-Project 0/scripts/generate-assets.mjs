import fs from 'fs';
import path from 'path';

const PUBLIC_SEQ_DIR = path.join(process.cwd(), 'public/seq');

if (!fs.existsSync(PUBLIC_SEQ_DIR)) {
  fs.mkdirSync(PUBLIC_SEQ_DIR, { recursive: true });
}

// We will generate 120 SVG files but name them .webp. Wait, Canvas `drawImage` can draw data URIs or SVG images.
// Let's generate basic SVGs and we will fetch them as Image objects. To strictly stick to the plan of .webp, we can just use .jpg or .webp if we use `canvas` node package, but that requires node-canvas.
// Let's just generate SVGs and name them .svg, and we'll adjust the hook to fetch .svg.
// This is just a placeholder until the user provides the actual sequence.

for (let i = 1; i <= 120; i++) {
  const num = i.toString().padStart(4, '0');
  const color = `hsl(${(i * 3) % 360}, 40%, 20%)`; // Dark luxury colors
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
    <rect width="100%" height="100%" fill="${color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="120" fill="white" font-family="sans-serif">
      FRAME ${num}
    </text>
  </svg>`;
  
  fs.writeFileSync(path.join(PUBLIC_SEQ_DIR, `tower_${num}.svg`), svg);
}

console.log('Generated 120 SVG frames in public/seq');
