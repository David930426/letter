"use client";

import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  spin: number;
  angle: number;
  alpha: number;
  color: string;
};

const COLORS = ["#EBB9C4", "#F2D2C6", "#C39B5F", "#E7A8B8"];

/** Hearts drifting down behind the whole page. */
export default function Petals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let petals: Petal[] = [];
    let frame = 0;

    const spawn = (startAbove: boolean): Petal => ({
      x: Math.random() * width,
      y: startAbove ? -20 - Math.random() * height : Math.random() * height,
      size: 5 + Math.random() * 9,
      speed: 0.25 + Math.random() * 0.65,
      drift: (Math.random() - 0.5) * 0.55,
      spin: (Math.random() - 0.5) * 0.02,
      angle: Math.random() * Math.PI * 2,
      alpha: 0.25 + Math.random() * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const build = () => {
      const count = Math.round(Math.min(46, Math.max(16, width / 26)));
      petals = Array.from({ length: count }, () => spawn(false));
    };

    const drawHeart = (p: Petal) => {
      const s = p.size;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(0, 0, -s * 0.5, 0, -s * 0.5, s * 0.3);
      ctx.bezierCurveTo(-s * 0.5, s * 0.65, 0, s * 0.85, 0, s * 1.1);
      ctx.bezierCurveTo(0, s * 0.85, s * 0.5, s * 0.65, s * 0.5, s * 0.3);
      ctx.bezierCurveTo(s * 0.5, 0, 0, 0, 0, s * 0.3);
      ctx.fill();
      ctx.restore();
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((p, i) => {
        p.y += p.speed;
        p.x += p.drift + Math.sin(p.y / 60) * 0.35;
        p.angle += p.spin;
        if (p.y > height + 30) petals[i] = spawn(true);
        drawHeart(petals[i]);
      });
      frame = requestAnimationFrame(step);
    };

    resize();
    build();
    step();

    let timer = 0;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        resize();
        build();
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="petals" aria-hidden="true" />;
}
