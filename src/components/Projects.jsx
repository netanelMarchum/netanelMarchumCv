import { motion } from "framer-motion";
import { projects } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, viewport } from "../motion.js";

// Duplicated once so the CSS marquee can loop seamlessly at -50%.
const ticker = [...projects, ...projects];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.header
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">03 / Work</span>
          <h2>PROJECT</h2>
          <p>Explore premium works across production, academia, and personal projects.</p>
        </motion.header>
      </div>

      <div className="carousel-wrapper">
        <div className="ticker-track">
          {ticker.map((p, idx) => (
            <article className="carousel-card" key={`${p.title}-${idx}`} aria-hidden={idx >= projects.length}>
              <div className="carousel-image-wrapper">
                <img src={p.image} alt={p.title} className="carousel-image" loading="lazy" />
                <div className="carousel-overlay">
                  <div className="carousel-info">
                    <span className="carousel-context">{p.context}</span>
                    <h3 className="carousel-title">{p.title}</h3>
                  </div>
                  <div className="carousel-links">
                    {p.links.map((l) => (
                      <a className="carousel-link" key={l.href} href={l.href} target="_blank" rel="noopener">
                        {l.label} <Icon.arrowUpRight width="16" height="16" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="carousel-content">
                <div>
                  <span className="carousel-context">
                    <Icon.monitor /> {p.context}
                  </span>
                  <h3 className="carousel-title">{p.title}</h3>
                  <p className="carousel-desc">{p.desc}</p>
                </div>
                <ul className="carousel-tech">
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
