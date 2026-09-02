"use client";

import { useEffect, useState } from "react";
import { content } from "@/content";
import Reveal from "./Reveal";

type Elapsed = {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO: Elapsed = { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function elapsedSince(startDate: string): Elapsed {
  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) return ZERO;

  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();

  // step back to the most recent anniversary, then measure the remainder
  const anniversary = new Date(start.getTime());
  anniversary.setFullYear(start.getFullYear() + years);
  if (anniversary > now) {
    years -= 1;
    anniversary.setFullYear(start.getFullYear() + years);
  }

  const rest = Math.max(0, now.getTime() - anniversary.getTime());

  return {
    years: Math.max(0, years),
    days: Math.floor(rest / DAY),
    hours: Math.floor((rest % DAY) / HOUR),
    minutes: Math.floor((rest % HOUR) / MINUTE),
    seconds: Math.floor((rest % MINUTE) / SECOND),
  };
}

export default function Counter() {
  const { counter } = content;
  // starts at zeros so the server and the first client render agree
  const [time, setTime] = useState<Elapsed>(ZERO);

  useEffect(() => {
    const update = () => setTime(elapsedSince(counter.startDate));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [counter.startDate]);

  const units = [
    ["years", counter.labels.years],
    ["days", counter.labels.days],
    ["hours", counter.labels.hours],
    ["minutes", counter.labels.minutes],
    ["seconds", counter.labels.seconds],
  ] as const;

  return (
    <Reveal as="section" className="counter" id="counter">
      <h2 className="counter__title">{counter.title}</h2>

      <div className="counter__grid">
        {units.map(([key, label]) => (
          <div className="tick" key={key}>
            <span className="tick__num">{time[key]}</span>
            <span className="tick__label">{label}</span>
          </div>
        ))}
      </div>

      <p className="counter__note">{counter.footnote}</p>
    </Reveal>
  );
}
