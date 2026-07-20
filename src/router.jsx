import { useEffect, useState } from "react";

// GitHub Pages deep-link support: 404.html redirects /studio -> /?/studio,
// restored here before React renders (CSP-safe: bundled, not inline).
(function restoreSpaPath() {
  const l = window.location;
  if (l.search && l.search[1] === "/") {
    const decoded = l.search.slice(1).split("&").map((s) => s.replace(/~and~/g, "&")).join("?");
    window.history.replaceState(null, "", l.pathname.slice(0, -1) + decoded + l.hash);
  }
})();

export function navigate(to) {
  if (to === window.location.pathname) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0 });
}

export function useRoute() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return path;
}

export function isStudio(path) {
  return path.replace(/\/+$/, "").toLowerCase().endsWith("/studio");
}
