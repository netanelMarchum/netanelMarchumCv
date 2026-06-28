import { motion } from "framer-motion";
import { tools, coreCS } from "../data.js";
import { reveal, stagger, viewport, spring } from "../motion.js";

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <motion.div
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">02 / Skills</span>
          <h2>What I work with</h2>
          <p>Strongest in low-level and systems work, with the computer-science fundamentals to back it up.</p>
        </motion.div>

        <motion.div
          className="tools-grid"
          variants={stagger(0, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {tools.map((t) => (
            <motion.div className="tool" key={t.name} variants={reveal} whileHover={{ y: -4 }} transition={spring}>
              <div className="tool-ic">
                <img src={t.icon} alt={`${t.name} logo`} width="40" height="40" loading="lazy" />
              </div>
              <span>{t.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="core-cs"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="core-label">Core CS</span>
          <div className="chips">
            {coreCS.map((c) => <span className="chip" key={c}>{c}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
