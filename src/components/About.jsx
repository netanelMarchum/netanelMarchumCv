import { motion } from "framer-motion";
import { aboutPoints, facts, stats } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, stagger, viewport } from "../motion.js";
import { useCountUp } from "../hooks.js";

function Stat({ value, suffix, label, plain }) {
  const [ref, display] = useCountUp(value, { plain });
  return (
    <motion.div className="stat" variants={reveal}>
      <div className="num" ref={ref}>{display}{suffix}</div>
      <div className="label">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">01 — About</span>
          <h2>A student who likes to understand things all the way down.</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-body"
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.p className="first" variants={reveal}>
              I'm a highly motivated Computer Science student with strong expertise in{" "}
              <b>Java</b> and <b>C</b>, focused on the parts of software that sit close
              to the metal.
            </motion.p>
            <motion.p variants={reveal}>
              I'm proficient in data structures, algorithms and system programming, and
              I'm passionate about solving complex problems and building efficient,
              dependable systems. From writing an assembler in C to designing smart-home
              tooling, I enjoy understanding how things work — all the way down.
            </motion.p>
            <motion.ul className="about-points" variants={stagger(0, 0.06)}>
              {aboutPoints.map((p) => (
                <motion.li key={p} variants={reveal}>
                  <span className="tick"><Icon.check /></span> {p}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.aside
            className="about-card"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <h3>At a glance</h3>
            <dl className="facts">
              {facts.map(([dt, dd, open]) => (
                <div key={dt}>
                  <dt>{dt}</dt>
                  <dd className={open ? "open" : ""}>{dd}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>

        <motion.div
          className="stats"
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
