import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data.js";
import { navigate } from "../router.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import "../studiox.css";

// Auto-import every image dropped into src/assets/work/ (masonry gallery).
const modules = import.meta.glob("../assets/work/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });
const IMAGES = Object.keys(modules).sort().map((k) => modules[k]);

function useCursor(enabled) {
  const ring = useRef(null);
  useEffect(() => {
    if (!enabled) return;
    const el = ring.current;
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const over = (e) => { if (e.target.closest("a,button,[data-cursor]")) el.classList.add("big"); };
    const out = (e) => { if (e.target.closest("a,button,[data-cursor]")) el.classList.remove("big"); };
    const loop = () => { x += (tx - x) * 0.18; y += (ty - y) * 0.18; el.style.transform = `translate(${x}px, ${y}px)`; raf = requestAnimationFrame(loop); };
    loop();
    addEventListener("mousemove", move); addEventListener("mouseover", over); addEventListener("mouseout", out);
    return () => { cancelAnimationFrame(raf); removeEventListener("mousemove", move); removeEventListener("mouseover", over); removeEventListener("mouseout", out); };
  }, [enabled]);
  return ring;
}

function Magnetic({ children }) {
  const ref = useRef(null);
  const onMove = (e) => { const r = ref.current.getBoundingClientRect(); ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`; };
  const reset = () => { ref.current.style.transform = "translate(0,0)"; };
  return <span ref={ref} className="sx-magnetic" onMouseMove={onMove} onMouseLeave={reset}>{children}</span>;
}

const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

export default function StudioX() {
  const reduce = useReducedMotion();
  const desktop = typeof window !== "undefined" && window.matchMedia("(pointer:fine)").matches;
  const cursorOn = desktop && !reduce;
  const ring = useCursor(cursorOn);
  const [loaded, setLoaded] = useState(reduce);
  const year = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.classList.add("sx-root");
    const t = setTimeout(() => setLoaded(true), reduce ? 0 : 1300);

    const preventImageDownload = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    const preventImageDrag = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventImageDownload);
    document.addEventListener("dragstart", preventImageDrag);

    return () => {
      document.documentElement.classList.remove("sx-root");
      clearTimeout(t);
      document.removeEventListener("contextmenu", preventImageDownload);
      document.removeEventListener("dragstart", preventImageDrag);
    };
  }, [reduce]);

  return (
    <div className={`studiox ${cursorOn ? "has-cursor" : ""}`}>
      {cursorOn && <div className="sx-cursor" ref={ring} aria-hidden="true" />}

      {!reduce && (
        <motion.div className="sx-loader" initial={{ y: 0 }} animate={loaded ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}>
          <span className="sx-loader-word">STUDIO</span>
        </motion.div>
      )}

      <header className="sx-head">
        <a className="sx-logo" href="/studio" onClick={(e) => { e.preventDefault(); navigate("/studio"); }}>Netanel Marchum<span>&nbsp;Studio</span></a>
        <nav className="sx-nav"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      </header>

      {/* Intro */}
      <section className="sx-intro" id="top">
        <p className="sx-kicker">Selected Work · Netanel Marchum</p>
        <h1 className="sx-intro-title">Graphic <em>design</em><br />studio<span className="sx-accent">.</span></h1>
      </section>

      {/* Works gallery (auto masonry by image size) */}
      <section className="sx-gallery" id="work">
        {IMAGES.length === 0 ? (
          <p className="sx-empty">Add images to <code>src/assets/work/</code>. They appear here automatically.</p>
        ) : (
          IMAGES.map((src, i) => (
            <motion.figure className="sx-tile" key={i} data-cursor
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -6% 0px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <img src={src} alt={`Selected work ${i + 1}`} loading="lazy" />
              <span className="sx-tile-n">{String(i + 1).padStart(2, "0")}</span>
            </motion.figure>
          ))
        )}
      </section>

      {/* About */}
      <section className="sx-about2" id="about">
        <span className="sx-num">/ About</span>
        <div className="sx-about2-grid">
          <motion.figure className="sx-portrait"
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <img src={profile.photo} alt="Netanel Marchum, graphic designer" />
            <figcaption>Netanel Marchum<span>Graphic Designer · Social Media · Branding</span></figcaption>
          </motion.figure>

          <motion.div className="sx-about2-copy" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <h2 className="sx-huge">Who <em>I&nbsp;am</em></h2>
            <p className="sx-lead">I never wanted to create ordinary design. For me, every project starts with an idea and the emotion behind it, long before opening any design software.</p>
            <p>Over the years, I've worked with artists, businesses, and growing brands to transform ideas into visuals that connect with people. From brand identities and cover art to social media content and digital experiences, my goal is always the same: create work that's memorable and meaningful.</p>
            <p className="sx-strong">To me, design isn't decoration. It's communication with purpose.</p>
            <ul className="sx-expertise">
              <li>Brand Identity</li><li>Cover Art</li><li>Social Media Design</li><li>Content Creation</li><li>Web Design</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Software marquee */}
      <div className="sx-tools" aria-label="Software I work with">
        <div className="sx-tools-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span className="sx-tools-set" key={k} aria-hidden={k === 1}>
              {[
                ["Figma", "/icons/figma.svg"],
                ["Photoshop", "/icons/photoshop.svg"],
                ["Illustrator", "/icons/illustrator.svg"],
                ["After Effects", "/icons/aftereffects.svg"],
                ["Premiere Pro", "/icons/premiere.svg"],
                ["WordPress", "/icons/wordpress.svg"],
              ].map(([name, src]) => (
                <span className="sx-tool" key={name} data-cursor>
                  <img src={src} alt={name} loading="lazy" />
                  <b>{name}</b>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <section className="sx-contact2" id="contact">
        <span className="sx-num">/ Contact</span>
        <motion.h2 className="sx-huge sx-contact2-title" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          Let's build a brand<br />people <em>remember<span className="sx-accent">.</span></em>
        </motion.h2>

        <div className="sx-contact2-grid">
          <div className="sx-contact2-col">
            <span className="sx-contact2-lbl">Get in touch</span>
            <a className="sx-contact2-mail" href={`mailto:${profile.email}`} data-cursor>{profile.email}</a>
            <Magnetic><a className="sx-cta" href={`mailto:${profile.email}`} data-cursor>Start a project</a></Magnetic>
          </div>
          <div className="sx-contact2-col">
            <span className="sx-contact2-lbl">Elsewhere</span>
            <nav className="sx-contact2-social">
              <a href={profile.linkedin} target="_blank" rel="noopener" data-cursor>LinkedIn <i>↗</i></a>
              <a href={profile.instagram || "https://www.instagram.com/"} target="_blank" rel="noopener" data-cursor>Instagram <i>↗</i></a>
            </nav>
          </div>
        </div>
      </section>

      <footer className="sx-foot">
        <span>{year} © Netanel Marchum · Crafting Brands That Get Remembered.</span>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
