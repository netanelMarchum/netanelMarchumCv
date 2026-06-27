import { motion } from "framer-motion";
import { projects } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, stagger, viewport } from "../motion.js";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">03 — Selected work</span>
          <h2>Things I've built.</h2>
          <p>A mix of professional, academic and personal projects.</p>
        </motion.div>

        <motion.div
          className="projects-list"
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {projects.map((p, i) => (
            <motion.a
              className="project"
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener"
              variants={reveal}
            >
              <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="project-main">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tech">
                  {p.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <span className="project-arrow"><Icon.arrowUpRight /></span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
