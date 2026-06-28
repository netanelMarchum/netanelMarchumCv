// Single source of truth for portfolio content.
// Edit here to update the site — components read from this file.

export const profile = {
  name: "Netanel Marchum",
  firstName: "Netanel",
  title: "Software Engineer & Computer Science Student",
  email: "N040846@gmail.com",
  github: "https://github.com/netanelMarchum",
  linkedin: "https://www.linkedin.com/in/netanel-marchum/",
  resume: "/resume.pdf",
  photo: "/profile-opt.jpg",
  location: "Israel",
};

export const stats = [
  { value: 85, suffix: "", label: "GPA average" },
  { value: 3, suffix: "+", label: "Projects shipped" },
  { value: 114, suffix: "", label: "HS excellence score" },
  { value: 2027, suffix: "", label: "Graduating", plain: true },
];

export const facts = [
  ["Role", "SW Engineer / CS Student"],
  ["Degree", "B.Sc. Computer Science"],
  ["University", "The Open University of Israel"],
  ["Focus", "Systems · Algorithms"],
  ["Location", "Israel"],
  ["Status", "Open to opportunities", true],
];

export const aboutPoints = [
  "Strong foundations in data structures & algorithms",
  "Low-level & systems programming in C",
  "Comfortable across Linux & Windows",
  "Bilingual: Hebrew (native) & English (fluent)",
];

// Tools & tech shown as brand-logo icons (self-hosted in public/icons).
export const tools = [
  { name: "Java", icon: "/icons/java.svg" },
  { name: "C", icon: "/icons/c.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Linux", icon: "/icons/linux.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "Photoshop", icon: "/icons/photoshop.svg" },
  { name: "After Effects", icon: "/icons/aftereffects.svg" },
  { name: "Premiere Pro", icon: "/icons/premiere.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
  { name: "Jira", icon: "/icons/jira.svg" },
];

// Certificates shown as a rotating gallery (images render full cert; click opens PDF).
export const certificates = [
  { title: "Excellence — Israel Ministry of Education", img: "/certs/my-cer.jpg", href: "/MY-cer.pdf" },
  { title: "Dean's List — 2023", img: "/certs/deans-list-2023.jpg", href: "/deans-list-2023.pdf" },
];

// Conceptual skills (no brand logo) shown as chips.
export const coreCS = [
  "Data Structures", "Algorithms", "OOP", "Networking", "Memory mgmt", "Makefile", "Unit Testing",
];

// Projects as compact case studies: context + problem / approach / impact.
export const projects = [
  {
    title: "Project Tikshuv",
    context: "Professional · Check Point",
    tagline: "Security & checkpoint management tooling.",
    problem: "Security checkpoints needed dependable management tooling fit for real-world deployment.",
    approach: "Built and maintained checkpoint-management functionality as part of the team at Check Point.",
    impact: "Hands-on experience shipping security software in a production environment.",
    tech: ["Security", "Networking", "Check Point"],
    link: "https://www.linkedin.com/in/netanel-marchum/details/projects/",
    linkLabel: "View on LinkedIn",
  },
  {
    title: "Homy",
    context: "Personal project",
    tagline: "A smart-home control experience.",
    problem: "Home automation is fragmented and hard for non-technical users to control.",
    approach: "Designed a smart-home management solution centred on a simple, dependable user experience.",
    impact: "One approachable interface that streamlines everyday home control.",
    tech: ["Smart Home", "Automation", "UX"],
    link: "https://github.com/netanelMarchum",
    linkLabel: "View on GitHub",
  },
  {
    title: "Assembler for Linux",
    context: "Academic · C",
    tagline: "A complete two-pass assembler in C.",
    problem: "Translate two-pass assembly source into machine code on Linux.",
    approach: "Implemented parsing, symbol tables, memory management and system calls — built with a Makefile and unit tests.",
    impact: "A complete, tested assembler that demonstrates low-level systems mastery.",
    tech: ["C", "Linux", "Makefile", "Unit Testing"],
    link: "https://github.com/netanelMarchum",
    linkLabel: "View on GitHub",
  },
];

export const education = [
  {
    date: "2023 — 2027 (expected)",
    badge: "Dean's List 2023",
    title: "B.Sc. in Computer Science",
    org: "The Open University of Israel",
    detail: "GPA: 85 · Strong focus on systems, algorithms and data structures.",
    grades: [
      ["Introduction to Computer Science", "90"],
      ["C Lab — Linux", "93"],
      ["Data Structures", "89"],
    ],
  },
  {
    date: "Feb 2019 — Jul 2022",
    badge: "Excellence: 114",
    title: "High School Diploma — Technological Track",
    org: "Technological Yeshiva College (Zvi Sitrin)",
    detail: "Computer Science specialization.",
    chips: ["Mathematics · 5u", "English · 5u", "Computer Science · 5u", "Networking & Systems · 10u"],
  },
];

export const languages = [
  { name: "Hebrew", level: 100, tag: "Native" },
  { name: "English", level: 90, tag: "Fluent" },
];

export const documents = [
  { label: "Dean's List Certificate — 2023", href: "/deans-list-2023.pdf" },
  { label: "Certificate", href: "/MY-cer.pdf" },
  { label: "Full Résumé", href: "/resume.pdf" },
];

export const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Work", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];
