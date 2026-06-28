import { motion } from "framer-motion";
import { education, languages, documents } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, stagger, viewport } from "../motion.js";

export default function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <motion.div
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">04 / Education</span>
          <h2>Education &amp; honors</h2>
        </motion.div>

        <motion.div
          className="timeline"
          variants={stagger(0, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {education.map((e) => (
            <motion.div className="tl-item" key={e.title} variants={reveal}>
              <span className="tl-dot" />
              <div className="tl-card">
                <div className="tl-meta">
                  <span className="tl-date">{e.date}</span>
                  <span className="tl-badge">{e.badge}</span>
                </div>
                <h3>{e.title}</h3>
                <p className="tl-org">{e.org}</p>
                <p className="tl-detail">{e.detail}</p>
                {e.grades && (
                  <ul className="grades">
                    {e.grades.map(([course, grade]) => (
                      <li key={course}><span>{course}</span><span className="grade">{grade}</span></li>
                    ))}
                  </ul>
                )}
                {e.chips && (
                  <div className="chips">
                    {e.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="extra-grid"
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div className="mini" variants={reveal}>
            <h3>Languages</h3>
            {languages.map((l) => (
              <div className="lang-row" key={l.name}>
                <span>{l.name}</span>
                <span className="lang-track">
                  <motion.span
                    className="lang-fill"
                    style={{ display: "block" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                <span className="lang-tag">{l.tag}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className="mini" variants={reveal}>
            <h3>Certificates &amp; documents</h3>
            <ul className="doc-links">
              {documents.map((d) => (
                <li key={d.label}>
                  <a href={d.href} target="_blank" rel="noopener">
                    {d.label} <Icon.arrowUpRight width="15" height="15" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
