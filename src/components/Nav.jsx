import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { devNav, profile } from "../data.js";
import { Icon } from "./Icons.jsx";
import { spring } from "../motion.js";
import { useMobileMenu } from "../useMobileMenu.js";
import BrandMark from "./BrandMark.jsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { open, setOpen, buttonRef, menuRef, closeMenu } = useMobileMenu(960);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0, rootMargin: "-20% 0px -65% 0px" }
    );
    const observe = () => {
      io.disconnect();
      devNav.forEach(([, id]) => { const section = document.getElementById(id); if (section) io.observe(section); });
    };
    observe();
    const changes = new MutationObserver(observe);
    changes.observe(document.querySelector("main"), { childList: true });
    return () => { io.disconnect(); changes.disconnect(); };
  }, []);

  return (
    <motion.header className={`nav ${scrolled ? "scrolled" : ""}`} initial={{ y: -80 }} animate={{ y: 0 }} transition={spring}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Netanel Marchum home">
          <BrandMark size="sm" />
        </a>

        <nav className="main-nav-wrap" aria-label="Primary">
          <ul className="nav-links">
            {devNav.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} className={active === id ? "active" : ""}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn nav-github" title="GitHub" aria-label="Visit GitHub profile">
            <Icon.github />
          </a>
          <a className="btn btn-primary" href={profile.resume} download><Icon.download /> Resume</a>
          <button className={`burger ${open ? "open" : ""}`} ref={buttonRef} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}><span /><span /><span /></button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" id="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Navigation"
            initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
            <ul>
              {devNav.map(([label, id]) => (
                <li key={id}><a href={`#${id}`} onClick={closeMenu}>{label}</a></li>
              ))}
              <li><a href={profile.resume} download onClick={closeMenu}>Resume ↓</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
