// Single source of truth for site content.
// Edit here to update the site — components read from this file.

export const profile = {
  name: "Netanel Marchum",
  firstName: "Netanel",
  title: "Computer Science Student & Graphic Designer",
  email: "n040846@gmail.com",
  phone: "055-257-4171",
  github: "https://github.com/netanelMarchum",
  linkedin: "https://www.linkedin.com/in/netanel-marchum/",
  site: "https://netanel.online/",
  siteLabel: "netanel.online",
  resume: "/resume.pdf",
  photo: "/profile-opt.jpg",
  location: "Afula, Israel",
};

export const interests = [
  "Software Engineering",
  "Cybersecurity",
  "Networking",
  "Full-Stack Web Development",
  "Cloud Technologies",
  "AI & Automation",
  "Digital Product Development",
];

// Skills grouped into professional categories.
export const skills = [
  { title: "Development", items: ["C", "Python", "HTML / CSS", "Git", "GitHub", "Linux"] },
  { title: "Network", items: ["Network Security", "VLANs", "OSPF", "Hardening", "Cisco Packet Tracer"] },
  { title: "Computer Science", items: ["Data Structures", "Algorithms", "Operating Systems", "Assembly", "Machine Learning"] },
];

// Projects: one short line each, then a link.
export const projects = [
  {
    title: "Yalla Booth",
    context: "Production - Web",
    desc: "Built and deployed a live production website with automated lead-generation workflows, actively used for customer acquisition across NJ and NYC.",
    tech: ["WordPress", "Automation", "HTML / CSS"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80&fit=crop&crop=entropy",
    links: [{ label: "Visit site", href: "https://yallabooth.net" }],
  },
  {
    title: "Project Tikshuv",
    context: "Academic - Network & Security",
    desc: "Designed and hardened a 3-branch enterprise network · OSPF routing, VLAN segmentation, Port Security and full services per branch.",
    tech: ["Cisco Packet Tracer", "OSPF", "VLANs", "Hardening"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop&crop=entropy",
    links: [{ label: "Details", href: "https://www.linkedin.com/in/netanel-marchum/details/projects/" }],
  },
  {
    title: "Medical Cost Prediction",
    context: "Academic - Machine Learning",
    desc: "A K-Nearest-Neighbors model predicting medical insurance costs, with preprocessing, feature scaling and model evaluation.",
    tech: ["Python", "scikit-learn", "KNN"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop&crop=entropy",
    links: [{ label: "Google Colab", href: "https://colab.research.google.com/drive/13wQ2kYXzx-4ppXbn-iesHoXLxtQKYHIE?usp=share_link" }],
  },
  {
    title: "CarRace",
    context: "Personal Project - Game Development",
    desc: "Conceptualized and developed an interactive arcade game at age 15. Designed a reverse-narrative mechanic where the player acts as the virus collecting face masks, demonstrating early proficiency in game logic, creative problem-solving, and out-of-the-box digital design.",
    tech: ["Game Development", "Programming"],
    image: "https://images.unsplash.com/photo-1535869452e2-d9bce5a721d7?w=600&q=80&fit=crop&crop=entropy",
    links: [{ label: "View Project", href: "https://drive.google.com/drive/u/1/folders/1dPoy_lZa2VCucJttlYFJCQoK2cQSKFtz" }],
  },
  {
    title: "Studio Cover Design",
    context: "Professional - Design",
    desc: "A comprehensive cover design studio providing professional design services for publications, albums, and creative projects.",
    tech: ["Design", "Adobe Suite", "Creative Services"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&fit=crop&crop=entropy",
    links: [{ label: "Visit Studio", href: "http://studiocoverdesign.com/" }],
  },
  {
    title: "Assembler in C",
    context: "Academic - Low-level",
    desc: "A fully functional two-pass assembler translating custom assembly to machine code, with symbol tables and careful memory management.",
    tech: ["C", "Assembly", "Linux", "Makefile"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80&fit=crop&crop=entropy",
    links: [{ label: "GitHub", href: "https://github.com/netanelMarchum/project_assembly" }],
  },
];

export const education = [
  {
    date: "Oct 2022 - Expected early 2027",
    badge: "Cybersecurity Track",
    title: "B.Sc. Computer Science",
    org: "The Open University of Israel",
    detail: "Focused on networks, security, systems and algorithms.",
    chips: ["Networks", "Security", "Systems", "Algorithms"],
  },
  {
    date: "2019 - 2022",
    badge: "Excellence - 114/120",
    title: "Technological Diploma",
    org: "Sitrin Technological College",
    detail: "Graduated with Honors - Ministry of Education Excellence Award.",
    chips: ["Mathematics - 5u", "English - 5u", "Computer Science - 5u", "Computer Networks - 10u"],
  },
];

export const languages = [
  { name: "Hebrew", level: 100, tag: "Native" },
  { name: "English", level: 90, tag: "Fluent" },
];

// Certificates shown as a rotating gallery (click opens the PDF).
export const certificates = [
  { title: "Excellence - Israel Ministry of Education", img: "/certs/my-cer.jpg", href: "/MY-cer.pdf" },
  { title: "Dean's List - 2023", img: "/certs/deans-list-2023.jpg", href: "/deans-list-2023.pdf" },
];

// Section nav.
export const devNav = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Work", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];
