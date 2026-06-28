import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { certificates } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, viewport } from "../motion.js";

export default function Certificates() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = certificates.length;
  const go = (d) => setI((p) => (p + d + n) % n);

  // auto-rotate (pauses on hover / reduced-motion)
  useEffect(() => {
    if (paused || reduce || n < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % n), 4500);
    return () => clearInterval(id);
  }, [paused, reduce, n]);

  const cert = certificates[i];

  return (
    <motion.div
      className="certs"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="certs-head">
        <span className="core-label">Certificates</span>
        <div className="certs-nav">
          <button className="cert-btn" onClick={() => go(-1)} aria-label="Previous certificate"><Icon.arrow style={{ transform: "rotate(180deg)" }} /></button>
          <button className="cert-btn" onClick={() => go(1)} aria-label="Next certificate"><Icon.arrow /></button>
        </div>
      </div>

      <div className="cert-stage">
        <AnimatePresence mode="wait">
          <motion.a
            key={i}
            className="cert-slide"
            href={cert.href}
            target="_blank"
            rel="noopener"
            title="Open full certificate (PDF)"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={cert.img} alt={cert.title} loading="lazy" />
            <span className="cert-open"><Icon.arrowUpRight width="16" height="16" /></span>
          </motion.a>
        </AnimatePresence>
      </div>

      <div className="cert-foot">
        <span className="cert-cap">{cert.title}</span>
        <div className="cert-dots">
          {certificates.map((c, idx) => (
            <button
              key={c.title}
              className={`cert-dot ${idx === i ? "on" : ""}`}
              onClick={() => setI(idx)}
              aria-label={`Go to ${c.title}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
