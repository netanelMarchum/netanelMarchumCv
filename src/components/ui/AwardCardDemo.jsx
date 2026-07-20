import { AwardCard } from "./AwardCard";
import { motion } from "framer-motion";

const awardsData = [
  {
    icon: (
      <img
        src="https://svgl.app/library/clerk-light.svg"
        alt="Clerk"
        className="h-8 w-8 object-contain dark:invert"
      />
    ),
    title: "1st Place",
    description: "Clerk Hackathon",
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/github.svg"
        alt="GitHub"
        className="h-8 w-8 object-contain dark:invert"
      />
    ),
    title: "Top Contributor",
    description: "Open Source 2024",
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/microsoft.svg"
        alt="Microsoft"
        className="h-8 w-8 object-contain"
      />
    ),
    title: "Recognized",
    description: "Microsoft for Startups",
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/producthunt.svg"
        alt="Product Hunt"
        className="h-8 w-8 object-contain"
      />
    ),
    title: "Featured",
    description: "Product Hunt",
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/kubernetes.svg"
        alt="Kubernetes"
        className="h-8 w-8 object-contain dark:invert"
      />
    ),
    title: "Certification",
    description: "CKA Certified",
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/docker.svg"
        alt="Docker"
        className="h-8 w-8 object-contain"
      />
    ),
    title: "Proficiency",
    description: "Docker Certified",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AwardCardGridDemo() {
  return (
    <div className="award-grid-container">
      <motion.div
        className="award-grid"
        role="list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      >
        {awardsData.map((award, index) => (
          <motion.div key={index} variants={itemVariants} role="listitem">
            <AwardCard
              icon={award.icon}
              title={award.title}
              description={award.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
