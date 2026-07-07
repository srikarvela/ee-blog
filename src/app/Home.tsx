"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import PostList from "./PostList";
import Starfield from "./Starfield";

const FULL = "Srikar Velavarthipati — EE Blog";
const RED_START = FULL.indexOf("EE Blog");
const WARP_MS = 1900;

type Phase = "idle" | "warp" | "type" | "settle" | "reveal";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [typed, setTyped] = useState(0);
  const [centered, setCentered] = useState<string | null>(null);
  const [starfieldOn, setStarfieldOn] = useState(false);
  const [starVisible, setStarVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Decide once on mount: skip (reduced motion / already played) or play.
  useEffect(() => {
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    let played = false;
    try {
      played = sessionStorage.getItem("ee-intro-played") === "1";
    } catch {}

    if (reduce || played) {
      setTyped(FULL.length);
      setPhase("reveal");
      return;
    }

    // Measure the title's natural (header) rect, then build the transform
    // that lifts it to screen-center and scales it up for the typing phase.
    const el = titleRef.current;
    if (el) {
      const r = el.getBoundingClientRect();
      const dx = window.innerWidth / 2 - (r.left + r.width / 2);
      const dy = window.innerHeight / 2 - (r.top + r.height / 2);
      setCentered(`translate(${dx}px, ${dy}px) scale(2)`);
    }
    setStarfieldOn(true);
    setStarVisible(true);
    setPhase("warp");
  }, []);

  const handleWarpDone = useCallback(() => {
    setStarVisible(false); // fade the canvas out
    window.setTimeout(() => {
      setStarfieldOn(false);
      setPhase("type");
    }, 450);
  }, []);

  // Safety net: if RAF is throttled (background tab), force the warp to end.
  useEffect(() => {
    if (phase !== "warp") return;
    const id = window.setTimeout(handleWarpDone, WARP_MS + 1200);
    return () => window.clearTimeout(id);
  }, [phase, handleWarpDone]);

  // Typing phase.
  useEffect(() => {
    if (phase !== "type") return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(i);
      if (i >= FULL.length) {
        window.clearInterval(id);
        window.setTimeout(() => setPhase("settle"), 250);
      }
    }, 34);
    return () => window.clearInterval(id);
  }, [phase]);

  // Settle -> reveal, and remember we've played for this session.
  useEffect(() => {
    if (phase !== "settle") return;
    const id = window.setTimeout(() => {
      setPhase("reveal");
      try {
        sessionStorage.setItem("ee-intro-played", "1");
      } catch {}
    }, 650);
    return () => window.clearTimeout(id);
  }, [phase]);

  const titleShown = phase === "type" || phase === "settle" || phase === "reveal";

  const titleStyle: CSSProperties = {
    display: "inline-block",
    transformOrigin: "center center",
    willChange: "transform",
    transform: phase === "type" ? centered ?? undefined : undefined,
    transition: phase === "settle" ? "transform 650ms cubic-bezier(0.4,0,0.2,1)" : undefined,
    opacity: titleShown ? 1 : 0,
  };

  const titleNodes: ReactNode[] = [];
  const chars = FULL.split("");
  chars.forEach((ch, i) => {
    if (phase === "type" && i === typed) {
      titleNodes.push(
        <span key="caret" className="animate-pulse text-zinc-400">
          |
        </span>
      );
    }
    titleNodes.push(
      <span
        key={i}
        className={i >= RED_START ? "text-red-500" : undefined}
        style={{ opacity: i < typed ? 1 : 0 }}
      >
        {ch}
      </span>
    );
  });
  if (phase === "type" && typed >= chars.length) {
    titleNodes.push(
      <span key="caret-end" className="animate-pulse text-zinc-400">
        |
      </span>
    );
  }

  return (
    <>
      {starfieldOn && (
        <div
          className={`fixed inset-0 z-[60] bg-[#0a0a0a] transition-opacity duration-500 ${
            starVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Starfield durationMs={WARP_MS} onComplete={handleWarpDone} />
        </div>
      )}

      <main className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-12">
          <h1
            ref={titleRef}
            className="text-2xl font-semibold tracking-tight"
            style={titleStyle}
          >
            {titleNodes}
          </h1>
        </header>

        <div
          className="transition-opacity duration-700 ease-out"
          style={{ opacity: phase === "reveal" ? 1 : 0 }}
        >
          <PostList />
        </div>
      </main>
    </>
  );
}
