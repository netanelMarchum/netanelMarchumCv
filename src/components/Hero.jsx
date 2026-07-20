import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { profile } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, stagger, spring, viewport } from "../motion.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const portraitRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  useEffect(() => {
    if (reduce || !portraitRef.current) return;

    // Parallax depth effect on portrait
    gsap.to(portraitRef.current, {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [reduce]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-h1">
              Computer Science <span className="hl">Student</span> &amp;{" "}
              <span className="hl">Graphic Designer</span>.
            </h1>

            <p className="hero-sub">
              Passionate about software engineering, cybersecurity and digital
              design. I combine technical knowledge with creative thinking to
              build modern web experiences, develop software projects and create
              visual identities that are both functional and engaging.
            </p>

            <p className="hero-meta">
              Currently pursuing a B.Sc. in Computer Science (Cybersecurity) at
              The Open University of Israel, while continuously expanding my
              skills through personal projects, hands-on development and
              creative work.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                See my work <Icon.arrow />
              </a>
              <a href={profile.resume} className="btn btn-outline" download>
                <Icon.download /> Resume
              </a>
              <a href="#contact" className="btn btn-ghost">Get in touch</a>
            </div>

            <div className="hero-socials">
              <a className="icon-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon.github /></a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.linkedin /></a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Icon.mail /></a>
            </div>
          </div>

          <motion.div
            ref={portraitRef}
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
