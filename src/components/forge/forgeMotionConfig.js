/**
 * Shared Framer Motion animation variants for FORGE 3D storytelling chapters.
 * Ensures strictly one chapter occupies desktop viewport at a time with direction-aware
 * vertical glide and snappy staggered inner card reveals.
 */
export const DESKTOP_CHAPTER_VARIANTS = {
  initial: (direction = 1) => ({
    opacity: 0,
    y: direction >= 0 ? 30 : -30,
    scale: 0.985,
  }),
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction = 1) => ({
    opacity: 0,
    y: direction >= 0 ? -24 : 24,
    scale: 0.99,
    transition: {
      duration: 0.16,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

export const CHAPTER_GRID_VARIANTS = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
  exit: {},
};

export const CHAPTER_ITEM_VARIANTS = {
  initial: { opacity: 0, y: 12, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.26,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
};
