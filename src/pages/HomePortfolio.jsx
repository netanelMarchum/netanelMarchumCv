import { useEffect } from "react";
import { profile, projects, education, certificates, languages } from "../data.js";
import { navigate } from "../router.jsx";
import { useMobileMenu } from "../useMobileMenu.js";
import "./HomePortfolio.css";

const nav = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Education", "education"], ["Contact", "contact"]];
const technicalProjects = [projects[1], projects[2], projects[3]];
const creativeProjects = [projects[0], projects[4]];
const skillGroups = [
  ["Programming", ["C", "Python", "Assembly"]],
  ["Networking & Security", ["Network Security", "VLANs", "OSPF", "Hardening", "Cisco Packet Tracer"]],
  ["Web Development", ["HTML / CSS", "WordPress", "Automation"]],
  ["Tools & Technologies", ["Git", "GitHub", "Linux"]],
];
const experience = [
  ["Graphic Designer & Creative", "Cover Design Studio", "Apr 2023 – Present", "Visual identities, music artwork, branding, websites, and digital marketing."],
  ["Web Designer & Digital Marketing", "Yalla Booth", "Aug 2025 – Present", "Websites, social content, campaigns, and automated lead-generation workflows."],
  ["Freelance Graphic Designer", "Brainnu", "Jun 2026 – Aug 2026", "Social media visuals and video content for digital campaigns."],
  ["Social Media Manager", "Cubico", "Jan 2025 – May 2025", "Social media, photography, video editing, and Instagram and LinkedIn content."],
];
function Arrow({ down = false }) {
  return <svg className={`hp-arrow ${down ? "hp-arrow-down" : ""}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={down ? "M12 4v15m-6-6 6 6 6-6" : "M5 12h14m-6-6 6 6-6 6"} /></svg>;
}
function SocialLinks({ onClick }) {
  return <><a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={onClick}>GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={onClick}>LinkedIn</a></>;
}
function ProjectActions({ project }) {
  return <div className="hp-project-actions">{project.links.map((link) => <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label} <Arrow /></a>)}</div>;
}
export default function HomePortfolio() {
  const { open, setOpen, buttonRef, menuRef, closeMenu } = useMobileMenu(960);
  useEffect(() => {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]');
    const originalDescription = description?.content;
    document.title = "Netanel Marchum | Computer Science & Software Development";
    if (description) description.content = "Netanel Marchum — Computer Science student and aspiring software developer. Programming, networking, and web projects, technical skills, experience, and education.";
    return () => { document.title = title; if (description) description.content = originalDescription; };
  }, []);

  return (
    <div className="home-portfolio">
      <a className="hp-skip" href="#main-content">Skip to content</a>
      <header className="hp-header">
        <div className="hp-wrap hp-header-inner">
          <a className="hp-wordmark" href="#top">Netanel Marchum<span>.</span></a>
          <nav className="hp-nav" aria-label="Primary navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          <div className="hp-nav-social"><SocialLinks /></div>
          <button className="hp-toggle" ref={buttonRef} aria-expanded={open} aria-controls="hp-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={open ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} /></svg>
          </button>
        </div>
        {open && <div className="hp-menu" ref={menuRef} id="hp-menu" role="dialog" aria-modal="true" aria-label="Navigation"><nav className="hp-wrap" aria-label="Mobile navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<Arrow /></a>)}<SocialLinks onClick={closeMenu} /><a href={profile.resume} download onClick={closeMenu}>Resume <Arrow down /></a></nav></div>}
      </header>

      <main id="main-content" tabIndex="-1">
        <section className="hp-hero hp-wrap" id="top">
          <div className="hp-hero-copy" id="about">
            <h1>Hi, I’m Netanel<span>.</span></h1>
            <p className="hp-hero-role">Computer Science Student<br /><span>& Aspiring Software Developer</span></p>
            <p className="hp-hero-intro">I build software and work on projects involving programming, networking, and web technologies.</p>
            <div className="hp-actions"><a className="hp-button" href="#projects">View Projects <Arrow /></a><SocialLinks /></div>
            <p className="hp-study-note">B.Sc. in progress · The Open University of Israel · Cybersecurity track</p>
          </div>
          <figure className="hp-portrait"><img src={profile.photo} alt="Netanel Marchum" width="720" height="720" fetchPriority="high" decoding="async" /></figure>
        </section>

        <section className="hp-section hp-wrap" id="projects">
          <h2>Selected Projects</h2>
          <div className="hp-project-grid">
            {technicalProjects.map((project) => <article className="hp-project" key={project.title}>
              <div className={`hp-project-image hp-project-image-${project.type}`}><img src={project.image} alt={`${project.title} project screenshot`} loading="lazy" decoding="async" /></div>
              <h3>{project.title}</h3><p className="hp-project-description">{project.desc}</p>
              {project.type !== "game" && <ul className="hp-project-tech" aria-label="Technologies">{project.tech.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
              <ProjectActions project={project} />
            </article>)}
            <aside className="hp-creative-work" aria-labelledby="hp-creative-title">
              <h3 id="hp-creative-title">Web & Creative Work</h3>
              {creativeProjects.map((project) => <article className="hp-creative-project" key={project.title}>
                <img src={project.image} alt={`${project.title} website preview`} loading="lazy" decoding="async" />
                <div><h4>{project.title}</h4><p>{project.type === "web" ? "Production website with automated lead-generation workflows." : "Cover design for publications and albums."}</p><ProjectActions project={project} /></div>
              </article>)}
            </aside>
          </div>
        </section>

        <section className="hp-section hp-wrap" id="skills">
          <h2>Technical Skills</h2>
          <div className="hp-skills-grid">{skillGroups.map(([title, items]) => <div className="hp-skill-group" key={title}><h3>{title}</h3><p>{items.join(" · ")}</p></div>)}</div>
          <p className="hp-foundations"><strong>CS foundations:</strong> Data Structures · Algorithms · Operating Systems · Machine Learning</p>
        </section>

        <section className="hp-section hp-wrap" id="experience">
          <h2>Experience</h2>
          <div className="hp-experience-list">{experience.map(([role, company, dates, description]) => <article className="hp-experience-row" key={company}>
            <div><h3>{role}</h3><p className="hp-experience-company">{company}</p></div><p className="hp-experience-date">{dates}</p><p className="hp-experience-description">{description}</p>
          </article>)}</div>
        </section>

        <section className="hp-section hp-wrap" id="education">
          <h2>Education & Certifications</h2>
          <div className="hp-education-grid"><div>{education.map((item, i) => <article className="hp-education-row" key={item.title}><h3>{item.title}{i === 0 && " — in progress"}</h3><p className="hp-institution">{item.org}</p><p className="hp-experience-date">{item.date}</p><p className="hp-honor">{item.badge}</p></article>)}<p className="hp-languages">{languages.map((language) => `${language.name}: ${language.tag}`).join(" · ")}</p></div>
            <aside className="hp-certificates" id="certificates" aria-label="Verified certificates">{certificates.map((certificate) => <a className="hp-certificate" key={certificate.title} href={certificate.href} target="_blank" rel="noopener noreferrer"><img src={certificate.img} alt={certificate.title} width="1100" height={certificate.img.includes("my-cer") ? 1556 : 1598} loading="lazy" decoding="async" /><span>{certificate.title}<small>View certificate <Arrow /></small></span></a>)}</aside>
          </div>
        </section>

        <section className="hp-contact" id="contact"><div className="hp-wrap hp-contact-grid"><div><h2>Contact</h2><p>Open to internships, junior developer roles, and freelance projects.</p><a className="hp-contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a><p className="hp-location">{profile.location}</p></div><div className="hp-contact-links"><SocialLinks /><a className="hp-text-link" href={profile.resume} download>Download Resume <Arrow down /></a><a href="tel:0552574171">{profile.phone}</a><a href="https://wa.me/13472184991" target="_blank" rel="noopener noreferrer">WhatsApp <Arrow /></a></div></div></section>
      </main>
      <footer className="hp-footer hp-wrap"><p>© {new Date().getFullYear()} Netanel Marchum</p><a href="/studio" onClick={(event) => { if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); navigate("/studio"); }}>Creative Studio <Arrow /></a></footer>
    </div>
  );
}
