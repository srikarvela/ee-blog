"use client";

import { useEffect, useRef } from "react";

// Original warp-speed starfield drawn from scratch on a canvas.
// Stars fly toward the viewer, streaking as speed ramps up, then a
// bright "arrival" bloom. Calls onComplete once when the run finishes.
export default function Starfield({
  durationMs = 1900,
  onComplete,
}: {
  durationMs?: number;
  onComplete?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 340;
    const MAX_Z = 1000;
    const PROJ = 128;
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    type Star = { x: number; y: number; z: number; pz: number };
    const stars: Star[] = Array.from({ length: COUNT }, () => {
      const z = rand(1, MAX_Z);
      return { x: rand(-w, w), y: rand(-h, h), z, pz: z };
    });

    const start = performance.now();
    let raf = 0;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      onCompleteRef.current?.();
    };

    const frame = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);

      // acceleration: slow start, hard surge toward the end
      const speed = 4 + Math.pow(t, 2.2) * 70;

      // motion-blur trail: paint the background semi-opaque each frame
      ctx.fillStyle = "rgba(10,10,10,0.30)";
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "#ffffff";
      ctx.lineCap = "round";
      for (const s of stars) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z < 1) {
          s.x = rand(-w, w);
          s.y = rand(-h, h);
          s.z = MAX_Z;
          s.pz = s.z;
          continue;
        }
        const sx = cx + (s.x / s.z) * PROJ;
        const sy = cy + (s.y / s.z) * PROJ;
        const px = cx + (s.x / s.pz) * PROJ;
        const py = cy + (s.y / s.pz) * PROJ;
        const depth = 1 - s.z / MAX_Z;
        ctx.lineWidth = Math.max(0.4, depth * 2.4);
        ctx.globalAlpha = Math.min(1, depth + 0.2);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // arrival bloom over the final stretch
      if (t > 0.8) {
        const b = (t - 0.8) / 0.2;
        ctx.fillStyle = `rgba(255,255,255,${b * 0.9})`;
        ctx.fillRect(0, 0, w, h);
      }

      if (t >= 1) {
        finish();
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [durationMs]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
