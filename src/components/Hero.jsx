import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { profile } from "../data.js";
import { Icon } from "./Icons.jsx";
import { useTypewriter } from "../hooks.js";
import { reveal, stagger, spring } from "../motion.js";

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax: portrait and text move at different rates (overlapping action),
  // and the portrait drifts slightly sideways as you scroll down so it travels
  // on a gentle arc rather than a straight vertical line.
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const xPortrait = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -16]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          style={{ y: yText }}
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow" variants={reveal}>
            <span className="dash" /> Available for internships &amp; junior roles
          </motion.span>

          <motion.h1 variants={reveal}>
            Hi, I'm <span className="accent">Netanel Marchum</span>
          </motion.h1>

          <motion.p className="hero-role" variants={reveal}>
            {role}
            <span className="cursor">▍</span>
          </motion.p>

          <motion.p className="hero-lead" variants={reveal}>
            Computer Science student building efficient, low-level systems in{" "}
            <b>Java</b> and <b>C</b>. I care about clean algorithms, solid data
            structures, and turning complex problems into reliable software.
          </motion.p>

          <motion.div className="hero-actions" variants={reveal}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              View my work <Icon.arrow />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              Get in touch
            </motion.a>
          </motion.div>

          <motion.div className="hero-socials" variants={reveal}>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon.github /></a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.linkedin /></a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Icon.mail /></a>
          </motion.div>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          style={{ y: yPortrait, x: xPortrait }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.15 }}
        >
          <motion.div
            className="portrait-blob"
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <img className="portrait" src={profile.photo} alt="Portrait of Netanel Marchum" width="720" height="720" fetchpriority="high" />

          <motion.div
            className="float-card fc-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ...spring }}
          >
            <span className="fc-emoji">🏆</span>
            <span>Dean's List <span className="fc-sub">2023</span></span>
          </motion.div>

          <motion.div
            className="float-card fc-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, ...spring }}
          >
            <span className="mono" style={{ color: "var(--clay-deep)" }}>{"{ }"}</span>
            <span>Systems &amp; <span className="fc-sub">Algorithms</span></span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
