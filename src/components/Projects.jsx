import { motion } from "framer-motion";
import { projects } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, stagger, viewport } from "../motion.js";

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
          <span className="section-num">03 / Selected work</span>
          <h2>Case studies</h2>
          <p>
            Professional, academic and personal projects — the problem, my
            approach, and the impact.
          </p>
        </motion.header>

        <motion.div
          className="cases"
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {projects.map((p) => (
            <motion.article className="case" key={p.title} variants={reveal}>
              <div className="case-head">
                <div>
                  <span className="case-context">{p.context}</span>
                  <h3 className="case-title">{p.title}</h3>
                  <p className="case-tagline">{p.tagline}</p>
                </div>
                <a className="case-link" href={p.link} target="_blank" rel="noopener">
                  {p.linkLabel} <Icon.arrowUpRight width="16" height="16" />
                </a>
              </div>

              <div className="case-grid">
                <div className="case-block">
                  <span className="case-label">Problem</span>
                  <p>{p.problem}</p>
                </div>
                <div className="case-block">
                  <span className="case-label">Approach</span>
                  <p>{p.approach}</p>
                </div>
                <div className="case-block">
                  <span className="case-label">Impact</span>
                  <p>{p.impact}</p>
                </div>
              </div>

              <ul className="tech">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
