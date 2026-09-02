"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType, ElementType, ReactNode } from "react";

type RevealProps = {
  /** which tag to render — "section", "article", "button"… defaults to a div */
  as?: ElementType;
  className?: string;
  /** stagger, in milliseconds */
  delay?: number;
  children: ReactNode;
  /** anything else (onClick, type, aria-*) is forwarded to that element */
  [prop: string]: unknown;
};

/**
 * Fades its children up when they scroll into view.
 * It renders the real element rather than an extra wrapper div, so it can be
 * dropped straight into a grid or a masonry column without breaking layout.
 */
export default function Reveal({
  as = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const hasObserver = "IntersectionObserver" in window;
    let observer: IntersectionObserver | undefined;

    if (hasObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setShown(true);
            observer?.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      observer.observe(node);
    }

    // Safety net: reveal anything that is on screen but still hidden a moment
    // later (throttled tab, observer that never fired) — and reveal everything
    // straight away in a browser too old to have IntersectionObserver.
    // Nothing on this page is ever allowed to stay invisible.
    const rescue = window.setTimeout(
      () => {
        const box = node.getBoundingClientRect();
        const onScreen = box.top < window.innerHeight && box.bottom > 0;
        if (!hasObserver || onScreen) setShown(true);
      },
      hasObserver ? 2500 : 0,
    );

    return () => {
      observer?.disconnect();
      window.clearTimeout(rescue);
    };
  }, []);

  // `as` is a plain tag name; this cast just lets us spread arbitrary props
  const Tag = as as ComponentType<Record<string, unknown>>;

  return (
    <Tag
      {...rest}
      ref={ref}
      className={[
        "reveal",
        shown ? "is-in" : "",
        settled ? "is-settled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      // once it has arrived, drop the will-change hint again
      onTransitionEnd={() => setSettled(true)}
    >
      {children}
    </Tag>
  );
}
