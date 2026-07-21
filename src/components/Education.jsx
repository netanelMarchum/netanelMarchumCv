import { useRef, useEffect } from "react";
import { education } from "../data.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const flowRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop: pin the section and build the timeline (line fills, cards rise in) over a
    // fixed scroll distance — so the effect reads even with only a couple of entries.
    mm.add("(min-width: 861px) and (prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray(flowRef.current.querySelectorAll(".tl-item"));
      gsap.set(items, { opacity: 0, y: 60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${items.length * 70 + 40}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(fillRef.current, { scaleY: 1, ease: "none" }, 0);
      items.forEach((el, i) => {
        tl.to(el, { opacity: 1, y: 0, ease: "power2.out" }, i * 0.6);
      });
    });

    // Mobile / reduced-motion: no pin — just reveal each card as it enters.
    mm.add("(max-width: 860px), (prefers-reduced-motion: reduce)", () => {
      gsap.utils.toArray(flowRef.current.querySelectorAll(".tl-item")).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="section section--alt" id="education" ref={sectionRef}>
      <div className="container edu-grid">
        <div className="edu-sticky">
          <div className="section-head">
            <span className="section-num">04 / Education</span>
            <h2>Education &amp; honors</h2>
          </div>
          <div className="edu-progress" aria-hidden="true">
            <span className="edu-progress-fill" ref={fillRef} />
          </div>
        </div>

        <div className="edu-flow" ref={flowRef}>
          <div className="timeline">
            {education.map((e) => (
              <div className="tl-item" key={e.title}>
                <span className="tl-dot" />
                <div className="tl-card">
                  <div className="tl-meta">
                    <span className="tl-date">{e.date}</span>
                    <span className="tl-badge">{e.badge}</span>
                  </div>
                  <h3>{e.title}</h3>
                  <p className="tl-org">{e.org}</p>
                  <p className="tl-detail">{e.detail}</p>
                  {e.grades && (
                    <ul className="grades">
                      {e.grades.map(([course, grade]) => (
                        <li key={course}><span>{course}</span><span className="grade">{grade}</span></li>
                      ))}
                    </ul>
                  )}
                  {e.chips && (
                    <div className="chips">
                      {e.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
