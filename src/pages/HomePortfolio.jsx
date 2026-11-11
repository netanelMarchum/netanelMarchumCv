import { useEffect, useRef } from "react";
import { profile, projects, skills, education, certificates, languages, interests } from "../data.js";
import { navigate } from "../router.jsx";
import { useMobileMenu } from "../useMobileMenu.js";
import "./HomePortfolio.css";

const nav = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Education", "education"], ["Contact", "contact"]];
const work = [projects[1], projects[2], projects[3], projects[0], projects[4]];
const experience = [
  ["Graphic Designer & Creative", "Cover Design Studio", "Apr 2023 – Present", "Graphic design, visual identities, music artwork, branding, web design, and digital marketing."],
  ["Web Designer & Digital Marketing", "Yalla Booth", "Aug 2025 – Present", "Website development, branding, social media content, digital campaigns, and lead-generation workflows."],
  ["Freelance Graphic Designer", "Brainnu", "Jun 2026 – Aug 2026", "Social media design, marketing visuals, and video content for digital campaigns."],
  ["Social Media Manager", "Cubico", "Jan 2025 – May 2025", "Social media management, photography, content creation, video editing, and Instagram and LinkedIn marketing."],
];

function Arrow({ down = false }) {
  return <svg className={`hp-arrow ${down ? "hp-arrow-down" : ""}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={down ? "M12 4v15m-6-6 6 6 6-6" : "M5 12h14m-6-6 6 6-6 6"} /></svg>;
}
function SectionHead({ number, label, title, children }) {
  return <header className="hp-section-head" data-hp-reveal><div className="hp-eyebrow"><span>{number}</span>{label}</div><div><h2>{title}</h2>{children && <p>{children}</p>}</div></header>;
}

export default function HomePortfolio() {
  const root = useRef(null);
  const { open, setOpen, buttonRef, menuRef, closeMenu } = useMobileMenu(960);

  useEffect(() => {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]');
    const originalDescription = description?.content;
    document.title = "Netanel Marchum | Computer Science & Software Development";
    if (description) description.content = "Netanel Marchum — Computer Science student focused on software development, cybersecurity, and networking. Explore technical projects, skills, and education.";
    return () => { document.title = title; if (description) description.content = originalDescription; };
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver || !Element.prototype.animate) return;
    const active = new Set();
    const observer = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      observer.unobserve(target);
      if (preference.matches) return;
      try {
        const animation = target.animate([{ opacity: 0.75, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }], { duration: 450, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
        active.add(animation); animation.onfinish = () => active.delete(animation);
      } catch { /* Content remains visible without animation. */ }
    }), { threshold: 0.08 });
    root.current.querySelectorAll("[data-hp-reveal]").forEach((el) => observer.observe(el));
    const stopMotion = () => { if (preference.matches) active.forEach((animation) => animation.cancel()); };
    preference.addEventListener("change", stopMotion);
    return () => { observer.disconnect(); active.forEach((animation) => animation.cancel()); preference.removeEventListener("change", stopMotion); };
  }, []);

  return (
    <div className="home-portfolio" ref={root}>
      <a className="hp-skip" href="#main-content">Skip to content</a>
      <header className="hp-header">
        <div className="hp-wrap hp-header-inner">
          <a className="hp-wordmark" href="#top" aria-label="Netanel Marchum home"><span>N/M</span> Netanel Marchum</a>
          <nav className="hp-nav" aria-label="Primary navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          <a className="hp-resume" href={profile.resume} download>Resume <Arrow down /></a>
          <button className="hp-toggle" ref={buttonRef} aria-expanded={open} aria-controls="hp-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={open ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} /></svg>
          </button>
        </div>
        {open && <div className="hp-menu" ref={menuRef} id="hp-menu" role="dialog" aria-modal="true" aria-label="Navigation"><nav className="hp-wrap" aria-label="Mobile navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<Arrow /></a>)}<a href={profile.resume} download onClick={closeMenu}>Download resume<Arrow down /></a></nav></div>}
      </header>

      <main id="main-content" tabIndex="-1">
        <section className="hp-hero hp-wrap" id="top">
          <div className="hp-hero-copy">
            <p className="hp-eyebrow">Computer Science student <span className="hp-slash">/</span> Cybersecurity track</p>
            <h1>Netanel<br />Marchum<span>.</span></h1>
            <p className="hp-hero-focus">Software. Systems.<br /><span>A curiosity for how things work.</span></p>
            <p className="hp-hero-intro">I study Computer Science and build projects across software development, networking, and applied machine learning. My creative background brings a strong eye for detail to the way I work.</p>
            <div className="hp-actions"><a className="hp-button" href="#projects">Explore my projects <Arrow /></a><a className="hp-text-link" href={profile.resume} download>Download resume <Arrow down /></a></div>
            <div className="hp-hero-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href={`mailto:${profile.email}`}>Email <Arrow /></a></div>
          </div>
          <figure className="hp-portrait">
            <div className="hp-portrait-image"><img src={profile.photo} alt="Netanel Marchum" width="720" height="720" fetchPriority="high" decoding="async" /></div>
            <figcaption><span>{profile.location}</span><span>B.Sc. in progress<br />The Open University of Israel</span></figcaption>
          </figure>
        </section>

        <section className="hp-section hp-wrap" id="about">
          <SectionHead number="01" label="Background" title="Engineering curiosity. A creative perspective." />
          <div className="hp-about-grid" data-hp-reveal>
            <p className="hp-about-lead">I’m a Computer Science student with a growing interest in software engineering and cybersecurity — and a background in design, web development, and digital marketing.</p>
            <div className="hp-prose"><p>I’m pursuing a B.Sc. in Computer Science at The Open University of Israel, with a focus on cybersecurity. I enjoy understanding how software, networks, and systems fit together, then putting those ideas into practice through academic and personal projects.</p><p>My interests include full-stack development, networking, cloud technologies, and AI. Working in creative and digital roles has also shaped how I think about clarity, usability, and the details that make a product useful.</p><p className="hp-languages">{languages.map((language) => <span key={language.name}>{language.name} <b>{language.tag}</b></span>)}</p></div>
          </div>
          <p className="hp-interests"><span>Areas of interest</span>{interests.join(" · ")}</p>
        </section>

        <section className="hp-section hp-wrap" id="skills">
          <SectionHead number="02" label="Technical toolkit" title="The foundations I work with.">A mix of programming, networking, and core computer science, developed through study and hands-on projects.</SectionHead>
          <div className="hp-skills-grid">{skills.map((group, i) => <div className="hp-skill-group" key={group.title} data-hp-reveal><span className="hp-small-index">0{i + 1}</span><h3>{group.title === "Network" ? "Networking & security" : group.title}</h3><ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
        </section>

        <section className="hp-section hp-wrap" id="projects">
          <SectionHead number="03" label="Selected projects" title="Ideas, put into practice.">Academic work, personal experiments, and production websites. Each project explores a different part of the technical stack.</SectionHead>
          <div className="hp-project-grid">{work.map((project, i) => <article className={`hp-project ${i === 0 ? "hp-project-featured" : ""}`} key={project.title} data-hp-reveal>
            <div className={`hp-project-image hp-project-image-${project.type}`}><img src={project.image} alt={`${project.title} project screenshot`} loading="lazy" decoding="async" /></div>
            <div className="hp-project-body"><p className="hp-project-context">{project.context.replace(" - ", " / ")}</p><h3>{project.title}</h3><p className="hp-project-description">{project.desc}</p><ul className="hp-project-tech" aria-label="Technologies">{project.tech.map((technology) => <li key={technology}>{technology}</li>)}</ul><div className="hp-project-actions">{project.links.map((link) => <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label} <Arrow /></a>)}</div></div>
          </article>)}</div>
        </section>

        <section className="hp-section hp-wrap" id="experience">
          <SectionHead number="04" label="Professional experience" title="Work beyond the classroom.">Alongside my studies, I’ve worked in graphic design, website development, and digital content. These are creative and digital roles, complementary to my technical work.</SectionHead>
          <div className="hp-experience-list">{experience.map(([role, company, dates, description]) => <article className="hp-experience-row" key={company} data-hp-reveal><p className="hp-experience-date">{dates}</p><div><h3>{role}</h3><p className="hp-experience-company">{company}</p></div><p>{description}</p></article>)}</div>
        </section>

        <section className="hp-section hp-wrap" id="education">
          <SectionHead number="05" label="Education & recognition" title="Building a solid foundation." />
          <div className="hp-education-grid"><div>{education.map((item) => <article className="hp-education-row" key={item.title} data-hp-reveal><p className="hp-experience-date">{item.date}</p><h3>{item.title}</h3><p className="hp-institution">{item.org}</p><p>{item.detail}</p><p className="hp-honor">{item.badge}</p>{item.chips && <p className="hp-coursework">{item.chips.join(" · ")}</p>}{item.grades && <ul>{item.grades.map(([name, grade]) => <li key={name}>{name}: {grade}</li>)}</ul>}</article>)}</div><aside className="hp-certificates" id="certificates" aria-labelledby="hp-certificates-title"><h3 id="hp-certificates-title">Certificates</h3><p>Original documents, available to view.</p>{certificates.map((certificate) => <a className="hp-certificate" key={certificate.title} href={certificate.href} target="_blank" rel="noopener noreferrer"><img src={certificate.img} alt={certificate.title} width="1100" height={certificate.img.includes('my-cer') ? 1556 : 1598} loading="lazy" decoding="async" /><span>{certificate.title}<small>View certificate <Arrow /></small></span></a>)}</aside></div>
        </section>

        <section className="hp-contact" id="contact"><div className="hp-wrap"><div className="hp-eyebrow"><span>06</span> Get in touch</div><div className="hp-contact-grid" data-hp-reveal><h2>Let’s talk about<br /><span>what’s next.</span></h2><div><p>I’m interested in internships and junior engineering opportunities, and available for freelance web and design work. For a project or a conversation, email is the best place to start.</p><a className="hp-contact-email" href={`mailto:${profile.email}`}>{profile.email}<Arrow /></a><div className="hp-contact-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="tel:0552574171">{profile.phone}</a><a href="https://wa.me/13472184991" target="_blank" rel="noopener noreferrer">WhatsApp <Arrow /></a></div><a className="hp-text-link" href={profile.resume} download>Download resume <Arrow down /></a></div></div></div></section>
      </main>

      <footer className="hp-footer hp-wrap"><a className="hp-wordmark" href="#top">Netanel Marchum<span>.</span></a><p>© {new Date().getFullYear()} · {profile.location}</p><a href="/studio" onClick={(event) => { if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); navigate("/studio"); }}>Creative Studio <Arrow /></a><a href="#top">Back to top <Arrow /></a></footer>
    </div>
  );
}
