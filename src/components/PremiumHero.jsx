import { motion } from "framer-motion";
import { profile } from "../data.js";
import { Icon } from "./Icons.jsx";
import { spring } from "../motion.js";

// Disney Animation: Stagger with anticipation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

// Disney Animation: Anticipation + Overlapping Action
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      mass: 1.2
    }
  }
};

// Disney Animation: Exaggeration + Squash & Stretch
const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 20 }
  }
};

// Disney Animation: Secondary Action - Icon rotation
const iconVariants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 10,
    transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.1 }
  }
};

// Disney Animation: Staging - Background blur
const backdropVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 0.6,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

export function PremiumHero() {
  return (
    <motion.div
      className="hero-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Disney: Staging - Backdrop blur effect */}
      <motion.div
        className="hero-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="show"
      />

      {/* Disney: Staggered text reveals */}
      <motion.div className="hero-text-group" variants={itemVariants}>
        <motion.h1 className="hero-title">
          Computer Science{" "}
          <motion.span
            className="hl"
            whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(142, 190, 255, 0.5)" }}
          >
            Student
          </motion.span>
          {" "}&amp;{" "}
          <motion.span
            className="hl"
            whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(142, 190, 255, 0.5)" }}
          >
            Graphic Designer
          </motion.span>
        </motion.h1>
      </motion.div>

      <motion.div className="hero-description" variants={itemVariants}>
        <p>Passionate about software engineering, cybersecurity and digital design.</p>
      </motion.div>

      {/* Disney: Secondary Action - Overlapping button animations */}
      <motion.div className="hero-buttons" variants={itemVariants}>
        <motion.button
          className="btn btn-primary"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span variants={iconVariants} initial="rest" whileHover="hover">
            See my work
          </motion.span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
          >
            <Icon.arrow />
          </motion.span>
        </motion.button>

        <motion.button
          className="btn btn-outline"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          transition={{ delay: 0.05 }}
        >
          <Icon.download /> Resume
        </motion.button>

        <motion.button
          className="btn btn-ghost"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          transition={{ delay: 0.1 }}
        >
          Get in touch
        </motion.button>
      </motion.div>

      {/* Disney: Staging - Social icons with staggered entrance */}
      <motion.div
        className="hero-socials"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {[
          { icon: Icon.github, href: profile.github, label: "GitHub" },
          { icon: Icon.linkedin, href: profile.linkedin, label: "LinkedIn" },
          { icon: Icon.mail, href: `mailto:${profile.email}`, label: "Email" }
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            className="icon-btn"
            aria-label={social.label}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
