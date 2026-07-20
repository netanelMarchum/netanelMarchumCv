import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProjectCard = React.forwardRef(
  ({ imgSrc, title, description, link, linkText = "View Project", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="project-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        {...props}
      >
        <div className="project-card-image">
          <img src={imgSrc} alt={title} loading="lazy" />
        </div>

        <div className="project-card-content">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>

          <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
            {linkText}
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
