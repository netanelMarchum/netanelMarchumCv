import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { certificates } from "../data.js";
import { Icon } from "./Icons.jsx";
import { viewport } from "../motion.js";

export default function Certificates() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = certificates.length;

  // auto-rotate; pauses on hover and under reduced motion
  useEffect(() => {
    if (paused || reduce || n < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % n), 5000);
    return () => clearInterval(id);
  }, [paused, reduce, n]);

  const cert = certificates[i];

  return (
    <section className="section certs-section" id="certificates">
      <motion.div
        className="container certs"
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <span className="certs-eyebrow">Recognition</span>
        <h3 className="certs-title">Certificates</h3>

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
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={cert.img} alt={cert.title} loading="lazy" />
            <span className="cert-open"><Icon.arrowUpRight width="16" height="16" /></span>
          </motion.a>
        </AnimatePresence>
      </div>

      <p className="cert-cap">{cert.title}</p>

      <div className="cert-dots" role="tablist" aria-label="Certificates">
        {certificates.map((c, idx) => (
          <button
            key={c.title}
            role="tab"
            aria-selected={idx === i}
            className={`cert-dot ${idx === i ? "on" : ""}`}
            onClick={() => setI(idx)}
            aria-label={c.title}
          />
        ))}
        </div>
      </motion.div>
    </section>
  );
}
