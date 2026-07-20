import React from "react";
import { motion } from "framer-motion";

export const AwardCard = React.forwardRef(
  ({ icon, title, description, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="award-card"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        <div className="award-card-icon">{icon}</div>
        <div className="award-card-content">
          <p className="award-card-title">{title}</p>
          <p className="award-card-description">{description}</p>
        </div>
      </motion.div>
    );
  }
);

AwardCard.displayName = "AwardCard";

export { AwardCard };
