import { motion } from "framer-motion";
import { profile } from "../data.js";
import { Icon } from "./Icons.jsx";
import { reveal, stagger, viewport, spring } from "../motion.js";
import BrandMark from "./BrandMark.jsx";

export default function Contact() {
  return (
    <section className="contact-full" id="contact">
      <motion.div
        className="container contact-inner"
        variants={stagger(0, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.span className="eyebrow" variants={reveal}>
          <span className="dash" /> Contact
        </motion.span>

        <motion.h2 className="contact-big" variants={reveal}>
          Let's build <span className="hl">something</span>.
        </motion.h2>

        <motion.p className="contact-sub" variants={reveal}>
          I'm open to <b>internships</b>, <b>junior engineering roles</b> and{" "}
          <b>freelance work</b>. The fastest way to reach me is email.
          I usually reply <b>within a day</b>.
        </motion.p>

        <motion.a className="contact-bigmail" variants={reveal} href={`mailto:${profile.email}`}>
          {profile.email}
        </motion.a>

        <motion.div className="contact-actions" variants={reveal}>
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
            <Icon.download /> Resume
          </a>
        </motion.div>

        <motion.p className="contact-meta" variants={reveal}>
          {profile.phone}
          <span className="dotsep">·</span>
          <a href={profile.site} target="_blank" rel="noopener">{profile.siteLabel}</a>
        </motion.p>

        <motion.div className="contact-socials" variants={reveal}>
          <a className="icon-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon.github /></a>
          <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.linkedin /></a>
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Icon.mail /></a>
        </motion.div>

        <motion.div className="contact-sig" variants={reveal}>
          <BrandMark size="md" />
        </motion.div>
      </motion.div>
    </section>
  );
}
