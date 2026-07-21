import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { interests } from "../data.js";
import { reveal, viewport } from "../motion.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MUTED = "#8b94a5";
const INK = "#f3f5f9";
const ACCENT = "#9fb8c9";

// Words that get the accent-colour highlight as they scroll into focus.
const KEYWORDS = new Set([
  "cybersecurity", "software", "networks", "networking", "cloud", "engineering",
  "full-stack", "technologies", "reliable", "scalable", "user-centered",
  "branding", "design", "product", "marketing", "development",
]);

const SLIDES = [
  "My name is Netanel Marchum, a B.Sc. Computer Science student with a growing interest in Cybersecurity. I'm passionate about understanding how software, networks and modern technologies work, and I enjoy turning ideas into practical, well-designed solutions.",
  "My interests span software engineering, full-stack web development, networking, cloud technologies and cybersecurity. I continuously expand my skills through academic studies, independent learning and hands-on projects, with a strong focus on building reliable, scalable and user-centered applications.",
  "Alongside my technical journey, I have experience in branding, digital marketing and product thinking. Combining engineering with design and business perspective allows me to create technology that is not only functional, but also intuitive and meaningful.",
];

const isKey = (w) => KEYWORDS.has(w.replace(/[^a-zA-Z-]/g, "").toLowerCase());

export default function About() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const slidesRef = useRef(null);
  const slideEls = useRef([]);

  useEffect(() => {
    if (reduce) return;
    const slides = slideEls.current.filter(Boolean);
    if (slides.length < 2 || !sectionRef.current) return;

    const words = (i) => slides[i].querySelectorAll(".hl-word");

    // Switch from normal flow to stacked "slides" and pin the section full-page.
    slidesRef.current.classList.add("pinned");
    gsap.set(slides, { autoAlpha: 0, y: 60, scale: 0.9 });
    gsap.set(slides[0], { autoAlpha: 1, y: 0, scale: 1 });
    gsap.set(slidesRef.current.querySelectorAll(".hl-word"), { color: MUTED });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${slides.length * 100}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Highlight the first slide's words as the pin engages.
    tl.to(words(0), { color: (i, t) => (t.classList.contains("hl-key") ? ACCENT : INK), stagger: 0.04, ease: "none" }, 0);

    slides.forEach((slide, i) => {
      if (i === 0) return;
      const label = `s${i}`;
      tl.addLabel(label)
        .to(slides[i - 1], { autoAlpha: 0, y: -60, scale: 0.9, duration: 0.5 }, label)
        .fromTo(slide, { autoAlpha: 0, y: 60, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 }, `${label}+=0.15`)
        // Sweep colour across the words as the slide reads in.
        .to(words(i), { color: (idx, t) => (t.classList.contains("hl-key") ? ACCENT : INK), stagger: 0.04, ease: "none" }, `${label}+=0.3`);
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      slidesRef.current?.classList.remove("pinned");
    };
  }, [reduce]);

  const setSlide = (i) => (el) => (slideEls.current[i] = el);

  return (
    <section className="section about-sticky" id="about" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-head"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="section-num">01 / Software Engineering &amp; Cybersecurity</span>
          <h2>Driven by curiosity. Focused on building technology.</h2>
        </motion.div>

        <div className="about-slides" ref={slidesRef}>
          {SLIDES.map((text, si) => (
            <div className={`about-slide${si === 0 ? " first-slide" : ""}`} ref={setSlide(si)} key={si}>
              <p className={si === 0 ? "first" : ""}>
                {text.split(" ").map((w, wi) => (
                  <span className={`hl-word${isKey(w) ? " hl-key" : ""}`} key={wi}>{w} </span>
                ))}
              </p>
              {si === 2 && (
                <div className="interests">
                  <span className="interests-label">Areas of Interest</span>
                  <div className="chips">
                    {interests.map((i) => <span className="chip" key={i}>{i}</span>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
