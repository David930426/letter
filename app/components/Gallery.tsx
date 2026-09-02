"use client";

import { useCallback, useEffect, useState } from "react";
import { content } from "@/content";
import Reveal from "./Reveal";

export default function Gallery() {
  const { gallery } = content;
  const photos = gallery.photos;
  const [openAt, setOpenAt] = useState<number | null>(null);
  // kept separate from openAt so the overlay can fade out before it unmounts
  const [visible, setVisible] = useState(false);

  const close = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => setOpenAt(null), 350);
  }, []);

  const move = useCallback(
    (step: number) =>
      setOpenAt((current) =>
        current === null ? current : (current + step + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    // nothing to do while it is closed — and importantly, do not touch the
    // body lock here, or we would unlock the page behind the intro envelope
    if (openAt === null) return;

    document.body.classList.add("locked");

    // next frame, so the browser has a chance to paint the closed state first
    // and actually animate into the open one
    const frame = requestAnimationFrame(() => setVisible(true));

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("locked");
    };
  }, [openAt, close, move]);

  const current = openAt === null ? null : photos[openAt];

  return (
    <section className="section gallery" id="gallery">
      <Reveal className="section__head reveal--group">
        <p className="eyebrow">{gallery.kicker}</p>
        <h2 className="h2">{gallery.title}</h2>
        <p className="lead">{gallery.subtitle}</p>
      </Reveal>

      <div className="masonry">
        {photos.map((photo, i) => (
          <Reveal
            as="button"
            type="button"
            className="shot"
            delay={Math.min(i, 6) * 70}
            onClick={() => setOpenAt(i)}
            aria-label={photo.caption || "Open photo"}
            key={photo.src + i}
          >
            {/* plain img: these are your own photos at unknown sizes */}
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            {photo.caption ? (
              <span className="shot__cap">{photo.caption}</span>
            ) : null}
          </Reveal>
        ))}
      </div>

      {current ? (
        <div
          className={`lightbox${visible ? " is-open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption || "Photo"}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={close}
            aria-label="Close"
            autoFocus
          >
            &times;
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => move(-1)}
            aria-label="Previous photo"
          >
            &#8249;
          </button>

          <figure className="lightbox__figure">
            <img src={current.src} alt={current.caption} />
            <figcaption>{current.caption}</figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={() => move(1)}
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </div>
      ) : null}
    </section>
  );
}
