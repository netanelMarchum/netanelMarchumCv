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
      <div className="container">
        <div className="hero-inner">
          <motion.div
            className="hero-text"
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className="hero-h1" variants={reveal}>
              Computer Science <span className="hl">Student</span> &amp;{" "}
              <span className="hl">Graphic Designer</span>.
            </motion.h1>

            <motion.p className="hero-sub" variants={reveal}>
              Passionate about software engineering, cybersecurity and digital
              design. I combine technical knowledge with creative thinking to
              build modern web experiences, develop software projects and create
              visual identities that are both functional and engaging.
            </motion.p>

            <motion.p className="hero-meta" variants={reveal}>
              Currently pursuing a B.Sc. in Computer Science (Cybersecurity) at
              The Open University of Israel, while continuously expanding my
              skills through personal projects, hands-on development and
              creative work.
            </motion.p>

            <motion.div className="hero-actions" variants={reveal}>
              <motion.a href="#projects" className="btn btn-primary" whileHover={{ y: -2 }} whileTap={{ y: 0 }} transition={spring}>
                See my work <Icon.arrow />
              </motion.a>
              <a href={profile.resume} className="btn btn-outline" download>
                <Icon.download /> Resume
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
              <img src={profile.photo} alt="Netanel Marchum" width="720" height="900" fetchpriority="high" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
