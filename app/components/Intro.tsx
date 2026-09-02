"use client";

import { useCallback, useEffect, useState } from "react";
import { content } from "@/content";

/** Jump straight to the top, ignoring the page's smooth scroll-behavior. */
function toTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

/** The sealed envelope shown over the page until she opens it. */
export default function Intro() {
  const [opened, setOpened] = useState(false);
  const [folded, setFolded] = useState(false);
  const [gone, setGone] = useState(false);
  const [removed, setRemoved] = useState(false);

  const open = useCallback(() => {
    // whatever the browser remembered, the letter opens onto the hero
    toTop();
    setOpened(true);
  }, []);

  // belt and braces for the scrollRestoration script in layout.tsx: if the
  // browser put her back down the page on refresh, undo it before she opens
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    toTop();
  }, []);

  useEffect(() => {
    if (!opened) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // "opened" lets the hero start rising while the overlay is still clearing
    document.body.classList.add("opened");

    // halfway through the 0.6s fold the flap is behind the envelope, so let it
    // drop below the paper before the paper starts sliding out at 0.28s
    const f = window.setTimeout(() => setFolded(true), reduced ? 0 : 260);

    // hold until the flap has folded and the paper has finished sliding out
    // (flap 0.6s, paper 0.28s delay + 0.85s), then clear the overlay
    const a = window.setTimeout(() => {
      setGone(true);
      document.body.classList.remove("locked");
    }, reduced ? 100 : 1150);

    const b = window.setTimeout(() => setRemoved(true), reduced ? 400 : 2600);

    return () => {
      window.clearTimeout(f);
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [opened]);

  // if the user never gets the JS, the noscript rule in layout.tsx hides this
  useEffect(() => {
    return () => document.body.classList.remove("locked");
  }, []);

  if (removed) return null;

  const { envelope } = content;

  return (
    <div className={`intro${gone ? " is-gone" : ""}`}>
      <div className="intro__inner">
        <p className="intro__small">{envelope.smallLine}</p>
        <h1 className="intro__name">{envelope.name}</h1>

        <button
          type="button"
          className={`envelope${opened ? " is-open" : ""}${folded ? " is-folded" : ""}`}
          onClick={open}
          aria-label="Open the letter"
        >
          <span className="envelope__back" />
          <span className="envelope__paper" />
          <span className="envelope__front" />
          <span className="envelope__flap" />
          <span className="envelope__seal">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s-7.5-4.6-9.6-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.6 12c-2.1 4.4-9.6 9-9.6 9z" />
            </svg>
          </span>
        </button>

        <p className="intro__hint">{envelope.hint}</p>
        <button type="button" className="btn btn--ghost intro__btn" onClick={open}>
          {envelope.buttonLabel}
        </button>
      </div>
    </div>
  );
}
