"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { content } from "@/content";
import Reveal from "./Reveal";

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  spin: number;
  color: string;
  life: number;
};

const COLORS = ["#C25E76", "#EBB9C4", "#C39B5F", "#FFF3EC", "#8E3A55"];

export default function Wish() {
  const { wish } = content;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const piecesRef = useRef<Piece[]>([]);
  const runningRef = useRef(false);
  const [blown, setBlown] = useState(false);
  const afterRef = useRef<HTMLDivElement>(null);

  /* ------------------------------------------------------------ confetti */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const burst = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    for (let i = 0; i < 160; i++) {
      piecesRef.current.push({
        x: width / 2 + (Math.random() - 0.5) * width * 0.35,
        y: height * 0.62,
        vx: (Math.random() - 0.5) * 11,
        vy: -9 - Math.random() * 11,
        size: 5 + Math.random() * 8,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.24,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 1,
      });
    }

    if (runningRef.current) return;
    runningRef.current = true;

    const step = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const pieces = piecesRef.current;
      for (let i = pieces.length - 1; i >= 0; i--) {
        const p = pieces[i];
        p.vy += 0.28;
        p.vx *= 0.995;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.spin;
        if (p.y > h * 0.72) p.life -= 0.012;

        if (p.life <= 0 || p.y > h + 60) {
          pieces.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }

      if (pieces.length) {
        requestAnimationFrame(step);
      } else {
        runningRef.current = false;
        ctx.clearRect(0, 0, w, h);
      }
    };

    requestAnimationFrame(step);
  }, []);

  /* ---------------------------------------------------------- the button */
  const makeWish = () => {
    setBlown(true);
    burst();
  };

  useEffect(() => {
    if (!blown) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setTimeout(() => {
      afterRef.current?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "center",
      });
    }, 300);
    return () => window.clearTimeout(id);
  }, [blown]);

  return (
    <section className="section wish" id="wish">
      <canvas ref={canvasRef} className="confetti" aria-hidden="true" />

      <Reveal className="wish__inner">
        <div className={`cake${blown ? " is-out" : ""}`} aria-hidden="true">
          <span className="cake__flame" />
          <span className="cake__candle" />
          <span className="cake__top" />
          <span className="cake__base" />
        </div>

        <p className="eyebrow">{wish.kicker}</p>
        <h2 className="h2">{wish.title}</h2>
        <p className="lead">{wish.text}</p>

        <button type="button" className="btn" onClick={makeWish} disabled={blown}>
          {wish.buttonLabel}
        </button>

        {blown ? (
          <div className="wish__after" ref={afterRef}>
            <h3 className="wish__afterTitle">{wish.afterTitle}</h3>
            <p className="lead">{wish.afterText}</p>
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}
