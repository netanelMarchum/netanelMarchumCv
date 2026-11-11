import { useEffect, useRef, useState } from "react";

export function useMobileMenu(breakpoint) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const scrollY = window.scrollY;
    const previous = body.getAttribute("style");
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    Object.assign(body.style, { position: "fixed", top: `-${scrollY}px`, left: "0", right: "0", overflow: "hidden", paddingRight: `${scrollbar}px` });
    const background = [...document.querySelectorAll("main, footer, .studiox > section, .whatsapp-button")];
    const inert = background.map((el) => el.inert);
    background.forEach((el) => { el.inert = true; });
    menuRef.current?.querySelector("a")?.focus({ preventScroll: true });

    const onKey = (event) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); }
      if (event.key !== "Tab") return;
      const items = [buttonRef.current, ...menuRef.current.querySelectorAll("a, button")].filter(Boolean);
      const index = items.indexOf(document.activeElement);
      event.preventDefault();
      items[(index + (event.shiftKey ? -1 : 1) + items.length) % items.length]?.focus();
    };
    const media = window.matchMedia(`(min-width: ${breakpoint + 1}px)`);
    const onResize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
      if (previous === null) body.removeAttribute("style");
      else body.setAttribute("style", previous);
      background.forEach((el, i) => { el.inert = inert[i]; });
      window.scrollTo({ top: scrollY, behavior: "instant" });
      buttonRef.current?.focus({ preventScroll: true });
    };
  }, [open, breakpoint]);

  const closeMenu = (event) => {
    setOpen(false);
    const hash = event?.currentTarget.getAttribute("href");
    if (!hash?.startsWith("#")) return;
    event.preventDefault();
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      history.replaceState(null, "", hash);
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }));
  };
  return { open, setOpen, buttonRef, menuRef, closeMenu };
}
