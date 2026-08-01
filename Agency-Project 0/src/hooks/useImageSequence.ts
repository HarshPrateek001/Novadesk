"use client";

import { useEffect, useState } from "react";

export function useImageSequence(frameCount: number, pathPrefix: string, pathSuffix: string) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const num = i.toString().padStart(4, "0");
      img.src = `${pathPrefix}${num}${pathSuffix}`;

      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
        setProgress((loadedCount / frameCount) * 100);
      };

      imgArray.push(img);
    }

    setImages(imgArray);
  }, [frameCount, pathPrefix, pathSuffix]);

  return { images, loaded, progress, isReady: loaded === frameCount };
}
