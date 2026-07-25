import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[500px] w-[500px] rounded-full blur-[80px] lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(16,185,129,0.18), rgba(34,211,238,0.08) 45%, transparent 70%)",
        transform: "translate3d(50vw, 50vh, 0) translate(-50%, -50%)",
        willChange: "transform",
      }}
    />
  );
}
