import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingElement = ({ char, delay }) => (
  <motion.div
    className="floating-element"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.6, y: 0, x: Math.sin(delay) * 40 }}
    transition={{
      duration: 0.8,
      delay,
      repeatType: "reverse",
      repeat: Infinity,
      repeatDelay: 3,
    }}
  >
    {char}
  </motion.div>
);

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        return next > 100 ? 100 : next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(onComplete, 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  const elements = ["<", ">", "{", "}", "/", "()"];

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="loading-bg" />

      <div className="loading-container">
        <div className="loading-elements">
          {elements.map((char, i) => (
            <FloatingElement key={i} char={char} delay={i * 0.15} />
          ))}
        </div>

        <div className="loading-content">
          <motion.h1
            className="loading-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Netanel Marchum Resume
          </motion.h1>

          <motion.p
            className="loading-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Loading Experience...
          </motion.p>

          <div className="loading-progress-container">
            <motion.div
              className="loading-progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </div>

          <motion.p
            className="loading-percent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
