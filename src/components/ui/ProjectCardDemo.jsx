import { ProjectCard } from "./ProjectCard";

export default function ProjectCardDemo() {
  const projects = [
    {
      title: "Aero Landing Page",
      description: "A comprehensive AI chatbot platform. This project focuses on the design and development of a user-friendly and visually appealing landing page.",
      imgSrc: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Dreamland App Concept",
      description: "A dreamy mobile app prototype designed for mindfulness and relaxation, featuring calming animations and a serene user interface.",
      imgSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      linkText: "Explore Concept"
    },
    {
      title: "Quantum Analytics Dashboard",
      description: "A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis.",
      imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", padding: "2rem" }}>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          imgSrc={project.imgSrc}
          link={project.link}
          linkText={project.linkText}
        />
      ))}
    </div>
  );
}
