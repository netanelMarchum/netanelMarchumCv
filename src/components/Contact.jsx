import { motion } from "framer-motion";
import { profile } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, viewport, spring } from "../motion.js";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="contact-panel"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow"><span className="dash" /> 05 — Contact</span>
          <h2>Let's build <em>something</em>.</h2>
          <p className="contact-sub">
            I'm open to internships, junior software roles and interesting
            collaborations. The fastest way to reach me is email — I usually reply
            within a day.
          </p>

          <motion.a
            className="contact-email"
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={spring}
          >
            <Icon.mail width="22" height="22" /> {profile.email}
          </motion.a>

          <div className="contact-socials">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon.github /></a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.linkedin /></a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Icon.mail /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
