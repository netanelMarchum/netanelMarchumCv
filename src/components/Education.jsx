import { motion } from "framer-motion";
import { education } from "../data.js";
import { reveal, stagger, viewport } from "../motion.js";
import Certificates from "./Certificates.jsx";

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
          <span className="section-num">05 / Education</span>
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

        <Certificates />
      </div>
    </section>
  );
}
