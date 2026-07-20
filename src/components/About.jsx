import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { interests } from "../data.js";
import { reveal, viewport } from "../motion.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const slidesRef = useRef(null);
  const slideEls = useRef([]);

  useEffect(() => {
    if (reduce) return;
    const slides = slideEls.current.filter(Boolean);
    if (slides.length < 2 || !sectionRef.current) return;

    // Switch from normal flow to stacked "slides" and pin the section full-page.
    slidesRef.current.classList.add("pinned");
    gsap.set(slides, { autoAlpha: 0, y: 60 });
    gsap.set(slides[0], { autoAlpha: 1, y: 0 });

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

    slides.forEach((slide, i) => {
      if (i === 0) return;
      tl.to(slides[i - 1], { autoAlpha: 0, y: -60, duration: 0.5 })
        .fromTo(slide, { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "<0.15");
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
          <div className="about-slide" ref={setSlide(0)}>
            <p className="first">
              My name is Netanel Marchum, a B.Sc. Computer Science student with a
              growing interest in <b>Cybersecurity</b>. I'm passionate about
              understanding how software, networks and modern technologies work,
              and I enjoy turning ideas into practical, well-designed solutions.
            </p>
          </div>

          <div className="about-slide" ref={setSlide(1)}>
            <p>
              My interests span software engineering, full-stack web development,
              networking, cloud technologies and cybersecurity. I continuously
              expand my skills through academic studies, independent learning and
              hands-on projects, with a strong focus on building reliable,
              scalable and user-centered applications.
            </p>
          </div>

          <div className="about-slide" ref={setSlide(2)}>
            <p>
              Alongside my technical journey, I have experience in branding,
              digital marketing and product thinking. Combining engineering with
              design and business perspective allows me to create technology that
              is not only functional, but also intuitive and meaningful.
            </p>
            <div className="interests">
              <span className="interests-label">Areas of Interest</span>
              <div className="chips">
                {interests.map((i) => <span className="chip" key={i}>{i}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
