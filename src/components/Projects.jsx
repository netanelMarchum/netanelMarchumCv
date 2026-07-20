import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, viewport } from "../motion.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: idx * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 50%",
          scrub: 0.5,
          once: true
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.header
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">04 / Work</span>
          <h2>PROJECT</h2>
          <p>Production, academic and independent projects.</p>
        </motion.header>

        <motion.div
          className="carousel-wrapper"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="carousel">
            {projects.map((p, idx) => (
              <motion.article
                ref={(el) => (cardsRef.current[idx] = el)}
                className="carousel-card"
                key={p.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <div className="carousel-image-wrapper">
                  <img src={p.image} alt={p.title} className="carousel-image" />
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
                  <p className="carousel-desc">{p.desc}</p>
                  <ul className="carousel-tech">
                    {p.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
