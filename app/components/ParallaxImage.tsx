"use client";

import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** how far the photo drifts inside its frame, in pixels */
  strength?: number;
};

/**
 * A photo that drifts gently inside its frame as it passes through the
 * viewport. Transform only, driven by one rAF per scroll burst, so it stays on
 * the compositor and never triggers layout.
 */
export default function ParallaxImage({
  src,
  alt,
  strength = 26,
}: ParallaxImageProps) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const apply = () => {
      frame = 0;
      const box = node.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;

      // -1 when the frame sits at the bottom of the screen, +1 at the top
      const middle = box.top + box.height / 2;
      const progress = (window.innerHeight / 2 - middle) / (window.innerHeight / 2);
      const shift = Math.max(-1, Math.min(1, progress)) * strength;

      node.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0) scale(1.08)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return <img ref={ref} src={src} alt={alt} loading="lazy" />;
}
