import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* Typewriter that cycles through phrases. Respects reduced motion. */
export function useTypewriter(words, { type = 90, del = 45, hold = 1600 } = {}) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(reduce ? words[0] : "");

  useEffect(() => {
    if (reduce) return;
    let w = 0, c = 0, deleting = false, timer;
    const tick = () => {
      const word = words[w];
      c += deleting ? -1 : 1;
      setText(word.slice(0, c));
      let delay = deleting ? del : type;
      if (!deleting && c === word.length) {
        delay = hold;
        deleting = true;
      } else if (deleting && c === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, type);
    return () => clearTimeout(timer);
  }, [reduce]); // eslint-disable-line

  return text;
}

/* Animated count-up triggered when element enters the viewport. */
export function useCountUp(target, { duration = 1500, plain = false } = {}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduce) { setVal(target); return; }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [target, duration, reduce]);

  const display = plain ? String(val) : val.toLocaleString();
  return [ref, display];
}
