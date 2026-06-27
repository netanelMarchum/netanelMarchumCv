import { motion, useScroll, useSpring } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Strip from "./components/Strip.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Nav />
      <main>
        <Hero />
        <Strip />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
