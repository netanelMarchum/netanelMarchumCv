import { motion } from "framer-motion";
import { skills } from "../data.js";
import { reveal, viewport } from "../motion.js";

// Brand icons where we have them (self-hosted in public/icons).
const ICONS = {
  "C": "/icons/c.svg",
  "Python": "/icons/python.svg",
  "HTML / CSS": "/icons/html.svg",
  "Git": "/icons/git.svg",
  "GitHub": "/icons/github.svg",
  "Linux": "/icons/linux.svg",
  "Cisco Packet Tracer": "/icons/cisco.svg",
};
const SPEEDS = [26, 32, 38]; // per-row marquee duration (s), staggered feel

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
        </motion.div>
      </div>

      <div className="tick-rows">
        {skills.map((cat, r) => (
          <motion.div
            className="tick-row"
            key={cat.title}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="container">
              <h3 className="tick-cat"><i>/</i> {cat.title}</h3>
            </div>
            <div className="tick">
              <div className="tick-track" style={{ animationDuration: `${SPEEDS[r % SPEEDS.length]}s` }}>
                {[0, 1].map((half) => (
                  <span className="tick-set" key={half} aria-hidden={half === 1}>
                    {Array.from({ length: 3 }).flatMap((_, k) =>
                      cat.items.map((s) => (
                        <span className="tick-item" key={`${k}-${s}`}>
                          {ICONS[s] && <img src={ICONS[s]} alt="" loading="lazy" />}
                          {s}
                        </span>
                      ))
                    )}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
