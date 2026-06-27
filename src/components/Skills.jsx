import { motion } from "framer-motion";
import { skills } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, stagger, viewport, spring } from "../motion.js";

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <motion.div
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">02 — Skills &amp; tools</span>
          <h2>The toolkit I build with.</h2>
          <p>Strongest in low-level and systems work, with the fundamentals to back it up.</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {skills.map((cat) => {
            const Glyph = Icon[cat.icon];
            return (
              <motion.article
                className="skill-card"
                key={cat.title}
                variants={reveal}
                whileHover={{ y: -6 }}
                transition={spring}
              >
                <div className="skill-icon">{Glyph && <Glyph />}</div>
                <h3>{cat.title}</h3>
                <div className="chips">
                  {cat.chips.map(([name, lead]) => (
                    <span className={`chip ${lead ? "lead" : ""}`} key={name}>{name}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
