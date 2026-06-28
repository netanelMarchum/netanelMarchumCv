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
          <span className="eyebrow"><span className="dash" /> 05 / Contact</span>
          <h2 className="contact-title">Let's work together</h2>
          <p className="contact-sub">
            I'm open to internships, junior software roles and interesting
            collaborations. The fastest way to reach me is email — I usually
            reply within a day.
          </p>

          <div className="contact-actions">
            <motion.a
              className="btn btn-primary btn-lg"
              href={`mailto:${profile.email}`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={spring}
            >
              <Icon.mail /> Email me
            </motion.a>
            <a className="btn btn-outline btn-lg" href={profile.resume} download>
              <Icon.download /> Résumé
            </a>
          </div>

          <p className="contact-email-line">{profile.email}</p>

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
