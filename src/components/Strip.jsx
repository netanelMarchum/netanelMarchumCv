import { motion, useReducedMotion } from "framer-motion";

const WORDS = ["Java", "C", "Data Structures", "Algorithms", "Linux", "Systems Programming", "Problem Solving"];

export default function Strip() {
  const reduce = useReducedMotion();
  const items = [...WORDS, ...WORDS]; // duplicate for seamless loop

  return (
    <div className="strip" aria-hidden="true">
      <motion.div
        className="strip-track"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {items.map((w, i) => (
          <span className="strip-item" key={i}>
            {w} <span className="dot" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
