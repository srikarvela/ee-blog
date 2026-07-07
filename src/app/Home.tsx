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
  const [flip, setFlip] = useState<string | null>(null);
  const [starfieldOn, setStarfieldOn] = useState(false);
  const [starVisible, setStarVisible] = useState(false);
  const overlayRef = useRef<HTMLHeadingElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  // Decide once: skip (reduced motion / already played this session) or play.
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

  // Safety net for throttled RAF (background tab).
  useEffect(() => {
    if (phase !== "warp") return;
    const id = window.setTimeout(handleWarpDone, WARP_MS + 1200);
    return () => window.clearTimeout(id);
  }, [phase, handleWarpDone]);

  // Typing phase — crisp, at a real large font size.
  useEffect(() => {
    if (phase !== "type") return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(i);
      if (i >= FULL.length) {
        window.clearInterval(id);
        window.setTimeout(() => setPhase("settle"), 300);
      }
    }, 34);
    return () => window.clearInterval(id);
  }, [phase]);

  // Settle — measure the big centered title and the real header, then fly the
  // overlay into the header slot (transform only during motion). Hand off to
  // the real header (rendered crisp at text-2xl) once it lands.
  useEffect(() => {
    if (phase !== "settle") return;
    const o = overlayRef.current;
    const hdr = headerRef.current;
    if (o && hdr) {
      const or = o.getBoundingClientRect();
      const hr = hdr.getBoundingClientRect();
      const s = hr.width / or.width;
      const dx = hr.left + hr.width / 2 - (or.left + or.width / 2);
      const dy = hr.top + hr.height / 2 - (or.top + or.height / 2);
      setFlip(`translate(${dx}px, ${dy}px) scale(${s})`);
    }
    const id = window.setTimeout(() => {
      setPhase("reveal");
      try {
        sessionStorage.setItem("ee-intro-played", "1");
      } catch {}
    }, 700);
    return () => window.clearTimeout(id);
  }, [phase]);

  const overlayActive =
    phase === "type" || phase === "settle" || phase === "reveal";
  const overlayVisible = phase === "type" || phase === "settle";

  const overlayStyle: CSSProperties = {
    transformOrigin: "center center",
    willChange: "transform",
    transform: phase === "settle" || phase === "reveal" ? flip ?? "none" : "none",
    transition:
      phase === "settle" ? "transform 700ms cubic-bezier(0.4,0,0.2,1)" : undefined,
  };

  const chars = FULL.split("");
  const nodes: ReactNode[] = [];
  chars.forEach((ch, i) => {
    if (i === typed && phase === "type") {
      nodes.push(
        <span key="caret" className="animate-pulse text-zinc-400">
          |
        </span>
      );
    }
    nodes.push(
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
    nodes.push(
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

      {overlayActive && (
        <div
          className="pointer-events-none fixed inset-0 z-[55] flex items-center justify-center overflow-hidden px-6 transition-opacity duration-300"
          style={{ opacity: overlayVisible ? 1 : 0 }}
          aria-hidden="true"
        >
          <h1
            ref={overlayRef}
            className="whitespace-nowrap text-3xl font-semibold tracking-tight sm:text-5xl"
            style={overlayStyle}
          >
            {nodes}
          </h1>
        </div>
      )}

      <main className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-12">
          <h1
            ref={headerRef}
            className="text-2xl font-semibold tracking-tight"
            style={{
              opacity: phase === "reveal" ? 1 : 0,
              transition: "opacity 500ms ease",
            }}
          >
            Srikar Velavarthipati —{" "}
            <span className="saber text-red-500">EE Blog</span>
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
