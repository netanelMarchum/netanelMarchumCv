import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const reduce = useReducedMotion();
  const cursorRef = useRef(null);
  const [finePointer, setFinePointer] = useState(() => window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  const [isHovering, setIsHovering] = useState(false);
  const enabled = finePointer && !reduce;

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = cursorRef.current;
    let x = -40, y = -40, tx = x, ty = y, raf = null;
    const animate = () => {
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.1 ? requestAnimationFrame(animate) : null;
    };
    const move = (event) => {
      if (event.pointerType === "touch") return;
      tx = event.clientX; ty = event.clientY;
      el.style.opacity = "1";
      document.documentElement.classList.add("has-custom-cursor");
      if (raf === null) raf = requestAnimationFrame(animate);
    };
    const over = (event) => setIsHovering(!!event.target.closest("a, button, [data-cursor], .interactive"));
    const hide = () => {
      el.style.opacity = "0";
      document.documentElement.classList.remove("has-custom-cursor");
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
    };
    const visibility = () => { if (document.hidden) hide(); };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      hide();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [enabled]);

  return enabled ? <div ref={cursorRef} className={`custom-cursor ${isHovering ? "hovering" : ""}`} style={{ opacity: 0 }} aria-hidden="true" /> : null;
}
