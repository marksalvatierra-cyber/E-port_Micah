import { useEffect, useRef } from "react";

/**
 * Subtle ambient particle background.
 * - Tiny neutral dots, very low opacity
 * - Slow ambient drift
 * - Gentle parallax following mouse
 * - Disabled on mobile / reduced-motion for performance
 */
export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let animationId: number;

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      baseAlpha: number;
      phase: number;
    };

    let particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = isMobile ? 0.00006 : 0.00012;
      const count = Math.max(20, Math.floor(width * height * density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.4 + 0.4,
        baseAlpha: Math.random() * 0.18 + 0.06,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const onMouse = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 18;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 18;
    };

    let t = 0;
    const tick = () => {
      t += 0.008;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const fade = (Math.sin(t + p.phase) + 1) / 2; // 0..1
        const alpha = p.baseAlpha * (0.4 + 0.6 * fade);
        ctx.beginPath();
        ctx.arc(p.x + mouse.x, p.y + mouse.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(215, 18%, 35%, ${alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    if (!isMobile) window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
};
