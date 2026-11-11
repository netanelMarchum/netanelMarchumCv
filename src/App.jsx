import { motion, useScroll, useSpring, AnimatePresence, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import StudioX from "./pages/StudioX.jsx";
import { useRoute, isStudio } from "./router.jsx";

const Developer = lazy(() => import("./pages/Developer.jsx"));

export default function App() {
  const path = useRoute();
  const reduce = useReducedMotion();
  const [showLoading, setShowLoading] = useState(() => !isStudio(path) && !reduce);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // The Studio is a fully self-contained premium experience (own chrome + theme).
  if (isStudio(path)) return <StudioX />;

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {showLoading && !reduce && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      </AnimatePresence>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Nav />
      <main>
        <Suspense fallback={<div className="route-loading" aria-busy="true" />}><Developer /></Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
