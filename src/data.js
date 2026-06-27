// Single source of truth for portfolio content.
// Edit here to update the site — components read from this file.

export const profile = {
  name: "Netanel Marchum",
  firstName: "Netanel",
  roles: [
    "Software Engineer",
    "Computer Science Student",
    "Systems Programmer",
    "Java & C Developer",
  ],
  email: "netanelmarchum@gmail.com",
  github: "https://github.com/netanelMarchum",
  linkedin: "https://www.linkedin.com/in/netanel-marchum/",
  resume: "/resume.pdf",
  photo: "/profile-opt.jpg",
};

export const stats = [
  { value: 85, suffix: "", label: "GPA Average" },
  { value: 3, suffix: "+", label: "Shipped Projects" },
  { value: 114, suffix: "", label: "HS Excellence Score" },
  { value: 2027, suffix: "", label: "Graduation Year", plain: true },
];

export const facts = [
  ["Role", "CS Student / SW Engineer"],
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

export const skills = [
  { title: "Languages", icon: "code", chips: [["Java", true], ["C", true], ["Python", false]] },
  { title: "Systems & OS", icon: "terminal", chips: [["Linux"], ["Windows"], ["System calls"], ["Memory mgmt"]] },
  { title: "Core CS", icon: "cpu", chips: [["Data Structures"], ["Algorithms"], ["OOP"], ["Networking"]] },
  { title: "Workflow", icon: "tool", chips: [["Makefile"], ["Unit Testing"], ["Git"], ["Debugging"]] },
];

export const projects = [
  {
    title: "Project Tikshuv — Check Point",
    desc: "Security and checkpoint management project developed as part of professional experience at Check Point, focused on robust, real-world security tooling.",
    tech: ["Security", "Networking", "Check Point"],
    link: "https://www.linkedin.com/in/netanel-marchum/details/projects/",
  },
  {
    title: "Homy",
    desc: "A smart-home management solution designed to streamline home automation and control, with a focus on a simple, dependable user experience.",
    tech: ["Smart Home", "Automation", "UX"],
    link: "https://github.com/netanelMarchum",
  },
  {
    title: "Assembler for Linux",
    desc: "A complete assembler written in C that parses, processes and translates assembly code — working with symbol tables, memory management and Linux system calls, built with Makefiles and unit testing.",
    tech: ["C", "Linux", "Makefile", "Unit Testing"],
    link: "https://github.com/netanelMarchum",
  },
];

export const education = [
  {
    date: "2023 — 2027 (expected)",
    badge: "🏆 Dean's List 2023",
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
  { label: "Dean's List Certificate — 2023", href: "/deans-list-2023.pdf", emoji: "🏅" },
  { label: "Certificate", href: "/MY-cer.pdf", emoji: "📜" },
  { label: "Full Resume", href: "/resume.pdf", emoji: "📄" },
];

export const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];
