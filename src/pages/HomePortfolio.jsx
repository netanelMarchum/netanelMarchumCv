import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { profile, projects, education, certificates, languages } from "../data.js";
import { navigate } from "../router.jsx";
import { useMobileMenu } from "../useMobileMenu.js";
import { House, Code2, FolderCode, BriefcaseBusiness, GraduationCap, Mail } from "lucide-react";
import "./HomePortfolio.css";

const nav = [["Home", "about"], ["Projects", "projects"], ["Skills", "skills"], ["Experience", "experience"], ["Education", "education"], ["Contact", "contact"]];
const navIcons = { about: House, skills: Code2, projects: FolderCode, experience: BriefcaseBusiness, education: GraduationCap, contact: Mail };
const technicalProjects = [projects[1], projects[2], projects[3]];
const creativeProjects = [projects[0], projects[4]];
const skillGroups = [
  ["Programming", ["C", "Python", "Assembly"]],
  ["Networking & Security", ["Network Security", "VLANs", "OSPF", "Hardening", "Cisco Packet Tracer"]],
  ["Web Development", ["HTML / CSS", "WordPress", "Automation"]],
  ["Tools & Technologies", ["Git", "GitHub", "Linux"]],
];
const projectIds = ["project-network", "project-ml", "project-game"];
const projectSubjects = ["Networks & security", "Machine learning", "Interactive development"];
let introductionSeen = false;
const cleanText = (value) => value.replace(/\s+[—–]\s+|\s+--\s+/g, ", ");
const experience = [
  ["Graphic Designer & Creative", "Cover Design Studio", "Apr 2023 – Present", "Visual identities, music artwork, branding, websites, and digital marketing."],
  ["Web Designer & Digital Marketing", "Yalla Booth", "Aug 2025 – Present", "Websites, social content, campaigns, and automated lead-generation workflows."],
  ["Freelance Graphic Designer", "Brainnu", "Jun 2026 – Aug 2026", "Social media visuals and video content for digital campaigns."],
  ["Social Media Manager", "Cubico", "Jan 2025 – May 2025", "Social media, photography, video editing, and Instagram and LinkedIn content."],
];
function Arrow({ down = false }) {
  return <svg className={`hp-arrow ${down ? "hp-arrow-down" : ""}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={down ? "M12 4v15m-6-6 6 6 6-6" : "M5 12h14m-6-6 6 6-6 6"} /></svg>;
}
function Github() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" /></svg>;
}
function Linkedin() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 7.8H1.8V22h3.6ZM3.6 1.8a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM22.2 13.9c0-4.3-2.3-6.3-5.3-6.3a4.6 4.6 0 0 0-4.1 2.2v-2H9.2V22h3.6v-7.9c0-2.1.4-4.1 3-4.1s2.8 2.4 2.8 4.2V22h3.6Z" /></svg>;
}
function SocialLinks({ onClick }) {
  return <><a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={onClick}><Github size={17} aria-hidden="true" />GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={onClick}><Linkedin size={17} aria-hidden="true" />LinkedIn</a></>;
}
function ProjectActions({ project }) {
  return <div className="hp-project-actions">{project.links.map((link) => <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{project.type === "network" ? "Project details" : link.label} <Arrow /></a>)}</div>;
}
function HomeIntroduction() {
  const [visible, setVisible] = useState(() => {
    let alreadySeen = introductionSeen;
    try { alreadySeen ||= sessionStorage.getItem("nm-home-introduction") === "seen"; } catch { /* Storage is optional. */ }
    return !alreadySeen && !matchMedia("(prefers-reduced-motion: reduce)").matches && !location.hash && window.scrollY === 0;
  });
  const skipRef = useRef(null);
  useLayoutEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    if (!visible) return;
    introductionSeen = true;
    try { sessionStorage.setItem("nm-home-introduction", "seen"); } catch { /* Private browsing still has the in-memory guard. */ }
    const animations = [];
    document.querySelectorAll(".home-portfolio .hp-name-line, .home-portfolio .hp-hero-role, .home-portfolio .hp-hero-intro, .home-portfolio .hp-hero-links, .home-portfolio .hp-project-index").forEach((element, index) => {
      if (element.animate) animations.push(element.animate([
        { transform: "translateY(20px)", opacity: .15, clipPath: "inset(0 0 25% 0)" },
        { transform: "none", opacity: 1, clipPath: "inset(0 0 0% 0)" },
      ], { duration: 620, delay: 120 + index * 55, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" }));
    });
    const dismiss = () => { setVisible(false); animations.forEach((animation) => animation.cancel()); };
    skipRef.current = dismiss;
    const onKey = (event) => { if (["Tab", "Escape", "Enter", " "].includes(event.key)) dismiss(); };
    const timer = setTimeout(() => setVisible(false), 760);
    window.addEventListener("keydown", onKey, true);
    window.addEventListener("pointerdown", dismiss, { once: true });
    window.addEventListener("wheel", dismiss, { passive: true, once: true });
    window.addEventListener("touchstart", dismiss, { passive: true, once: true });
    motion.addEventListener("change", dismiss);
    return () => {
      clearTimeout(timer);
      animations.forEach((animation) => animation.cancel());
      window.removeEventListener("keydown", onKey, true);
      window.removeEventListener("pointerdown", dismiss);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchstart", dismiss);
      motion.removeEventListener("change", dismiss);
    };
  }, []);
  return visible ? <div className="hp-introduction"><div className="hp-intro-wordmark" aria-hidden="true">Netanel<span>Marchum.</span></div><button onClick={() => skipRef.current?.()}>Skip intro <Arrow /></button></div> : null;
}
export default function HomePortfolio() {
  const { open, setOpen, buttonRef, menuRef, closeMenu } = useMobileMenu(960);
  const selectSection = (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = event.currentTarget.getAttribute("href");
    if (!hash?.startsWith("#")) return closeMenu(event);
    event.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      if (location.hash !== hash) history.pushState(null, "", hash);
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }));
  };
  const [active, setActive] = useState("about");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      if (document.getElementById("top")?.getBoundingClientRect().bottom > innerHeight * .35) { setActive("about"); return; }
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id === "top" ? "about" : entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px" });
    document.querySelectorAll(".home-portfolio main > section").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]');
    const originalDescription = description?.content;
    document.title = "Netanel Marchum | Computer Science & Software Development";
    if (description) description.content = "Netanel Marchum, Computer Science student and aspiring software developer. Programming, networking, and web projects, technical skills, experience, and education.";
    return () => { document.title = title; if (description) description.content = originalDescription; };
  }, []);

  return (
    <div className="home-portfolio">
      <HomeIntroduction />
      <a className="hp-skip" href="#main-content">Skip to content</a>
      <header className="hp-header">
        <div className="hp-wrap hp-header-inner">
          <img className="hp-sidebar-portrait" src="/netanel-developer-480.webp" alt="" width="720" height="720" decoding="async" />
          <a className="hp-wordmark" href="#top" onClick={selectSection}>Netanel Marchum<span>.</span></a>
          <nav className="hp-nav" aria-label="Primary navigation">{nav.map(([label, id]) => { const Icon = navIcons[id]; return <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={(event) => { setActive(id); selectSection(event); }}><Icon size={19} strokeWidth={1.6} aria-hidden="true" />{label}</a>; })}</nav>
          <div className="hp-nav-social"><SocialLinks /><a href={profile.resume} download>Resume <Arrow down /></a><a href={`mailto:${profile.email}`}>Email <Mail size={16} strokeWidth={1.6} aria-hidden="true" /></a></div>
          <button className="hp-toggle" ref={buttonRef} aria-expanded={open} aria-controls="hp-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={open ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} /></svg>
          </button>
        </div>
        {open && <div className="hp-menu" ref={menuRef} id="hp-menu" role="dialog" aria-modal="true" aria-label="Navigation"><nav className="hp-wrap" aria-label="Mobile navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={selectSection}>{label}<Arrow /></a>)}<div className="hp-menu-utilities"><SocialLinks onClick={closeMenu} /><a href={profile.resume} download onClick={closeMenu}>Resume <Arrow down /></a></div></nav></div>}
      </header>

      <main id="main-content" tabIndex="-1">
        <section className="hp-hero hp-wrap" id="top">
          <div className="hp-hero-copy" id="about">
            <h1><span className="hp-name-line">Netanel</span><span className="hp-name-line hp-name-accent">Marchum<span className="hp-name-period">.</span></span></h1>
            <p className="hp-hero-role">Aspiring software developer.<br /><span>A creative approach to code.</span></p>
            <p className="hp-hero-intro">Computer Science student focused on cybersecurity, programming, and networks. A background in design.</p>
            <div className="hp-hero-links"><a className="hp-button" href="#projects" onClick={selectSection}>View Projects <Arrow /></a><div className="hp-hero-social"><SocialLinks /></div></div>
          </div>
          <aside className="hp-project-index" aria-label="Explore my projects">
            {technicalProjects.map((project, index) => <a className="hp-index-project" href={`#${projectIds[index]}`} onClick={selectSection} key={project.title}>
              <span className="hp-index-image"><img src={project.image} alt="" width="160" height="100" decoding="async" /></span>
              <span className="hp-index-copy"><span>{projectSubjects[index]}</span><strong>{project.title}</strong></span><Arrow />
            </a>)}
          </aside>
          <div className="hp-hero-bottom"><p>B.Sc. in progress<br /><span>The Open University of Israel</span></p><a href={profile.resume} download>Download resume <Arrow down /></a></div>
        </section>

        <section className="hp-section hp-wrap" id="projects">
          <div className="hp-section-heading"><h2>Selected<br /><span>projects.</span></h2><p>Networks, machine learning, and interactive development.<br />A closer look at what I build.</p></div>
          <div className="hp-project-grid">
            {technicalProjects.map((project, index) => <article className="hp-project" id={projectIds[index]} key={project.title}>
              <div className={`hp-project-image hp-project-image-${project.type}`}><img src={project.image} alt={`${project.title} project screenshot`} width="1600" height="1000" loading="lazy" decoding="async" /></div>
              <div className="hp-project-copy"><h3>{project.title}</h3><p className="hp-project-description">{cleanText(project.desc)}</p>
              <ul className="hp-project-tech" aria-label="Technologies">{project.tech.map((technology) => <li key={technology}>{technology}</li>)}</ul>
              <ProjectActions project={project} /></div>
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
          <h2>Technical skills</h2>
          <div className="hp-skills-grid">{skillGroups.map(([title, items]) => <div className="hp-skill-group" key={title}><h3>{title}</h3><p>{items.join(" · ")}</p></div>)}</div>
          <p className="hp-foundations"><strong>CS foundations:</strong> Data Structures · Algorithms · Operating Systems · Machine Learning</p>
        </section>

        <section className="hp-section hp-wrap" id="experience">
          <h2>Experience</h2>
          <div className="hp-experience-list">{experience.map(([role, company, dates, description]) => <article className="hp-experience-row" key={company}>
            <div><h3>{role}</h3><p className="hp-experience-company">{company}</p></div><p className="hp-experience-date">{dates.replace(" – ", " to ")}</p><p className="hp-experience-description">{description}</p>
          </article>)}</div>
        </section>

        <section className="hp-section hp-wrap" id="education">
          <h2>Education &<br /> credentials</h2>
          <div className="hp-education-grid"><div>{education.map((item, i) => <article className="hp-education-row" key={item.title}><h3>{item.title}{i === 0 && <span className="hp-education-status">In progress</span>}</h3><p className="hp-institution">{item.org}</p><p className="hp-experience-date">{cleanText(item.date.replace(" - ", " to "))}</p><p className="hp-honor">{item.badge.replace(" - ", ", ")}</p></article>)}<p className="hp-languages">{languages.map((language) => `${language.name}: ${language.tag}`).join(" · ")}</p></div>
            <aside className="hp-certificates" id="certificates" aria-label="Verified certificates">{certificates.map((certificate) => <a className="hp-certificate" key={certificate.title} href={certificate.href} target="_blank" rel="noopener noreferrer"><span className="hp-certificate-preview"><img src={certificate.img} alt={certificate.title.replace(" - ", ", ")} width="1100" height={certificate.img.includes("my-cer") ? 1556 : 1598} loading="lazy" decoding="async" /></span><span>{certificate.title.replace(" - ", ", ")}<small>View certificate <Arrow /></small></span></a>)}</aside>
          </div>
        </section>

        <section className="hp-contact" id="contact"><div className="hp-wrap hp-contact-grid"><div><h2>Let’s talk<span>.</span></h2><p>Open to internships, junior developer roles, and freelance projects.</p><a className="hp-contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a></div><div className="hp-contact-links"><SocialLinks /><a className="hp-text-link" href={profile.resume} download>Download Resume <Arrow down /></a><a href="https://wa.me/13472184991" target="_blank" rel="noopener noreferrer">WhatsApp <Arrow /></a></div></div></section>
      </main>
      <footer className="hp-footer hp-wrap"><p>© {new Date().getFullYear()} Netanel Marchum</p><a href="/studio" onClick={(event) => { if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); navigate("/studio"); }}>Creative Studio <Arrow /></a></footer>
    </div>
  );
}
