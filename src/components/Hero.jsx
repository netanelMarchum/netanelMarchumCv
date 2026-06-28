import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { profile } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, stagger, spring, viewport } from "../motion.js";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          variants={stagger(0.05, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.span className="pill" variants={reveal}>
            <span className="dot-live" /> Available for internships &amp; junior roles
          </motion.span>

          <motion.p className="hero-kicker" variants={reveal}>
            {profile.name} · Software Engineer
          </motion.p>

          <motion.h1 className="hero-h1" variants={reveal}>
            I build efficient, low-level software in{" "}
            <span className="hl">Java</span> &amp; <span className="hl">C</span>.
          </motion.h1>

          <motion.p className="hero-sub" variants={reveal}>
            Computer Science student focused on data structures, algorithms and
            systems programming — turning complex problems into reliable,
            well-tested software.
          </motion.p>

          <motion.p className="hero-meta" variants={reveal}>
            B.Sc. Computer Science · The Open University of Israel · Based in Israel
          </motion.p>

          <motion.div className="hero-actions" variants={reveal}>
            <motion.a href="#projects" className="btn btn-primary" whileHover={{ y: -2 }} whileTap={{ y: 0 }} transition={spring}>
              View my work <Icon.arrow />
            </motion.a>
            <a href={profile.resume} className="btn btn-outline" download>
              <Icon.download /> Résumé
            </a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </motion.div>

          <motion.div className="hero-socials" variants={reveal}>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon.github /></a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.linkedin /></a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Icon.mail /></a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          style={{ y: yPortrait }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-frame">
            <img src={profile.photo} alt="Portrait of Netanel Marchum" width="720" height="900" fetchpriority="high" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
