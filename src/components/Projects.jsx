import { motion } from "framer-motion";
import { projects } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, viewport } from "../motion.js";

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
          <span className="section-num">04 / Work</span>
          <h2>PROJECT</h2>
          <p>Production, academic and independent projects.</p>
        </motion.header>

        <motion.div
          className="carousel-wrapper"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="carousel">
            {projects.map((p) => (
              <motion.article
                className="carousel-card"
                key={p.title}
                variants={reveal}
              >
                <div className="carousel-image-wrapper">
                  <img src={p.image} alt={p.title} className="carousel-image" />
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
                  <p className="carousel-desc">{p.desc}</p>
                  <ul className="carousel-tech">
                    {p.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
