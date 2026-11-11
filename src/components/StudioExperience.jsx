import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "./Icons.jsx";
import "./StudioExperience.css";

const experience = [
  {
    role: "Graphic Designer & Creative",
    company: "Cover Design Studio",
    href: "https://studiocoverdesign.com/index.html",
    dates: "Apr 2023 – Present",
    description: "Graphic design, visual identities, music artwork, branding, web design, and digital marketing.",
  },
  {
    role: "Web Designer & Digital Marketing",
    company: "Yalla Booth",
    href: "https://yallabooth.net",
    dates: "Aug 2025 – Present",
    description: "Website development, branding, social media content, digital campaigns, and lead-generation workflows.",
  },
  {
    role: "Freelance Graphic Designer",
    company: "Brainnu",
    dates: "Jun 2026 – Aug 2026",
    description: "Social media design, marketing visuals, and video content for digital campaigns.",
  },
  {
    role: "Social Media Manager",
    company: "Cubico",
    dates: "Jan 2025 – May 2025",
    description: "Social media management, photography, content creation, video editing, and Instagram and LinkedIn marketing.",
  },
];

export default function StudioExperience() {
  const reduce = useReducedMotion();
  return (
    <section className="sx-experience" id="experience" aria-labelledby="studio-experience-title">
      <span className="sx-num">/ Experience</span>
      <h2 className="sx-huge" id="studio-experience-title">Creative <em>experience</em></h2>
      <ol className="sx-experience-list">
        {experience.map(({ role, company, href, dates, description }, i) => (
          <motion.li className="sx-experience-row" key={company}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="sx-experience-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <div className="sx-experience-role">
              <h3>{role}</h3>
              <p className="sx-experience-company">{href ? <a href={href} target="_blank" rel="noopener noreferrer">{company}</a> : company}</p>
              <p className="sx-experience-dates">{dates}</p>
            </div>
            <p className="sx-experience-description">{description}</p>
          </motion.li>
        ))}
      </ol>
      <p className="sx-experience-certification">
        <a href="/certs/hubspot-digital-marketing.png" target="_blank" rel="noopener noreferrer" aria-label="Digital Marketing Certified — HubSpot Academy (opens certificate image in a new tab)">
          <span>Digital Marketing Certified · HubSpot Academy</span>
          <Icon.arrowUpRight width="16" height="16" aria-hidden="true" />
        </a>
      </p>
    </section>
  );
}
