import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, profile } from "../data.js";
import { Icon } from "./Icons.jsx";
import { spring } from "../motion.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll spy
  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4, rootMargin: "-20% 0px -65% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={spring}
    >
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Netanel Marchum — home">
          <span className="brand-sig">Netanel Marchum</span>
        </a>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {navItems.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "active" : ""}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a className="btn btn-primary" href={profile.resume} download>
            <Icon.download /> Resume
          </a>
          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {navItems.map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
                </li>
              ))}
              <li>
                <a href={profile.resume} download onClick={() => setOpen(false)}>
                  Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
