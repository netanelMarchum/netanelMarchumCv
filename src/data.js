// Single source of truth for site content.
// Edit here to update the site — components read from this file.

import yallaBooth from './assets/work/PROJECT/yalla-booth.png';
import cisco from './assets/work/PROJECT/cisco.png';
import medicalCost from './assets/work/PROJECT/medical-cost.png';
import carRace from './assets/work/PROJECT/car-race.jpg';
import coverDesign from './assets/work/PROJECT/cover-design-studio.png';

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
    desc: "Live production website with automated lead-generation workflows for customer acquisition.",
    type: "web",
    tech: ["WordPress", "Automation", "HTML / CSS"],
    image: yallaBooth,
    links: [{ label: "Visit site", href: "https://yallabooth.net" }],
  },
  {
    title: "Project Tikshuv",
    context: "Academic - Network & Security",
    desc: "Enterprise 3-branch network with OSPF routing, VLAN segmentation, and hardening.",
    type: "network",
    tech: ["Cisco Packet Tracer", "OSPF", "VLANs"],
    image: cisco,
    links: [{ label: "Details", href: "https://www.linkedin.com/in/netanel-marchum/details/projects/" }],
  },
  {
    title: "Medical Cost Prediction",
    context: "Academic - Machine Learning",
    desc: "K-Nearest-Neighbors model predicting insurance costs with feature scaling and evaluation.",
    type: "ml",
    tech: ["Python", "scikit-learn", "KNN"],
    image: medicalCost,
    links: [{ label: "Google Colab", href: "https://colab.research.google.com/drive/13wQ2kYXzx-4ppXbn-iesHoXLxtQKYHIE?usp=share_link" }],
  },
  {
    title: "CarRace",
    context: "Personal Project - Game Development",
    desc: "Interactive arcade game with reverse-narrative mechanic and custom game logic.",
    type: "game",
    tech: ["Game Development", "Programming"],
    image: carRace,
    links: [{ label: "View Project", href: "https://drive.google.com/drive/u/1/folders/1dPoy_lZa2VCucJttlYFJCQoK2cQSKFtz" }],
  },
  {
    title: "Studio Cover Design",
    context: "Professional - Design",
    desc: "Professional cover design studio for publications, albums, and creative projects.",
    type: "design",
    tech: ["Design", "Adobe Suite"],
    image: coverDesign,
    links: [{ label: "Visit Studio", href: "http://studiocoverdesign.com/" }],
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
