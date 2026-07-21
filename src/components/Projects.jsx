import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, viewport } from "../motion.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (reduce || !sectionRef.current || !trackRef.current) return;

    // Pin the section and translate the track sideways as the user scrolls,
    // so each project passes through center to be seen and read.
    const track = trackRef.current;
    const distance = () => track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduce]);

  return (
    <section className="section projects-scroll" id="projects" ref={sectionRef}>
      <div className="container">
        <motion.header
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">03 / Work</span>
          <h2>PROJECT</h2>
          <p>Explore premium works across production, academia, and personal projects.</p>
        </motion.header>
      </div>

      <div className="carousel-wrapper">
        <div className="projects-track" ref={trackRef}>
          {projects.map((p) => (
            <article className="carousel-card" key={p.title}>
              <div className="carousel-image-wrapper">
                <img src={p.image} alt={p.title} className="carousel-image" loading="lazy" />
                <div className="carousel-overlay">
                  <div className="carousel-info">
                    <span className="carousel-context">{p.context}</span>
                    <h3 className="carousel-title">{p.title}</h3>
                  </div>
                  <div className="carousel-links">
                    {p.links.map((l) => (
                      <a className="carousel-link" key={l.href} href={l.href} target="_blank" rel="noopener">
                        {l.label} <Icon.arrowUpRight width="16" height="16" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="carousel-content">
                <div>
                  <span className="carousel-context">
                    <Icon.monitor /> {p.context}
                  </span>
                  <h3 className="carousel-title">{p.title}</h3>
                  <p className="carousel-desc">{p.desc}</p>
                </div>
                <ul className="carousel-tech">
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
