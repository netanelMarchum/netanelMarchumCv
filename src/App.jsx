import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Developer from "./pages/Developer.jsx";
import StudioX from "./pages/StudioX.jsx";
import { useRoute, isStudio } from "./router.jsx";

export default function App() {
  const [showLoading, setShowLoading] = useState(true);
  const path = useRoute();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, smoothTouch: false });
    // Drive Lenis from GSAP's ticker and keep ScrollTrigger in sync so pins/scrubs track smooth scroll.
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // The Studio is a fully self-contained premium experience (own chrome + theme).
  if (isStudio(path)) return <StudioX />;

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      </AnimatePresence>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Nav />
      <main>
        <Developer />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
