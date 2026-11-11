import { lazy, Suspense } from "react";
import StudioX from "./pages/StudioX.jsx";
import { useRoute, isStudio } from "./router.jsx";

const HomePortfolio = lazy(() => import("./pages/HomePortfolio.jsx"));

export default function App() {
  const path = useRoute();
  if (isStudio(path)) return <StudioX />;
  return <Suspense fallback={<div style={{ minHeight: "100svh", background: "#f7f8fa" }} aria-busy="true" aria-label="Loading portfolio" />}><HomePortfolio /></Suspense>;
}
