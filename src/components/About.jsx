import { motion } from "framer-motion";
import { interests } from "../data.js";
import { reveal, stagger, viewport } from "../motion.js";

export default function About() {
  return (
    <section className="section" id="about">
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

        <motion.div
          className="about-body"
          variants={stagger()}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.p className="first" variants={reveal}>
            My name is Netanel Marchum, a B.Sc. Computer Science student with a
            growing interest in <b>Cybersecurity</b>. I'm passionate about
            understanding how software, networks and modern technologies work,
            and I enjoy turning ideas into practical, well-designed solutions.
          </motion.p>
          <motion.p variants={reveal}>
            My interests span software engineering, full-stack web development,
            networking, cloud technologies and cybersecurity. I continuously
            expand my skills through academic studies, independent learning and
            hands-on projects, with a strong focus on building reliable,
            scalable and user-centered applications.
          </motion.p>
          <motion.p variants={reveal}>
            Alongside my technical journey, I have experience in branding,
            digital marketing and product thinking. Combining engineering with
            design and business perspective allows me to create technology that
            is not only functional, but also intuitive and meaningful.
          </motion.p>

          <motion.div className="interests" variants={reveal}>
            <span className="interests-label">Areas of Interest</span>
            <div className="chips">
              {interests.map((i) => <span className="chip" key={i}>{i}</span>)}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
