import { useEffect, useId, useRef } from "react";

// Original vector artwork: the labels describe existing skills, not a live product UI.
export default function HomeSystemGraphic() {
  const id = useId().replaceAll(":", "");
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!("IntersectionObserver" in window)) return;
    let visible = false;
    const update = () => element.style.setProperty("--hp-play-state", visible && !document.hidden ? "running" : "paused");
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  return <figure className="hp-system" ref={ref}>
    <svg viewBox="0 0 520 560" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>Code, systems, and the web — connected</title>
      <desc id={`${id}-desc`}>An abstract illustration connecting programming, networking, and web development. It represents Netanel’s technical interests, not a dashboard or project architecture.</desc>
      <defs>
        <linearGradient id={`${id}-paper`} x2=".8" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#eef4ff" /></linearGradient>
        <linearGradient id={`${id}-blue`} x2="1" y2="1"><stop stopColor="#2348d5" /><stop offset="1" stopColor="#0b174f" /></linearGradient>
        <radialGradient id={`${id}-light`}><stop stopColor="#8ebeff" stopOpacity=".36" /><stop offset="1" stopColor="#8ebeff" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="280" cy="280" r="240" fill={`url(#${id}-light)`} />
      <g fill="none" stroke="#dbe5f5" strokeWidth="1">
        <ellipse cx="260" cy="450" rx="216" ry="64" />
        <ellipse cx="260" cy="450" rx="162" ry="48" />
        <path d="M44 450h432M260 386v128M108 405l304 90M108 495l304-90" />
      </g>
      <path d="M359 177v38q0 24-24 24h-80q-24 0-24 24v28M389 320v38q0 24-24 24h-82q-24 0-24 24v30" fill="none" stroke="#b9cef5" strokeWidth="6" />
      <path d="M359 177v38q0 24-24 24h-80q-24 0-24 24v28M389 320v38q0 24-24 24h-82q-24 0-24 24v30" fill="none" stroke="#2348d5" strokeWidth="1.5" />
      <g className="hp-system-code">
        <g transform="translate(132 58) rotate(-8 160 70)">
          <rect x="8" y="14" width="316" height="142" rx="16" fill="#c8d8f0" opacity=".36" />
          <rect width="316" height="142" rx="16" fill={`url(#${id}-paper)`} stroke="#c6d6f0" />
          <path d="M0 42h316" stroke="#dce6f5" />
          <circle cx="24" cy="22" r="4" fill="#2348d5" /><path d="M36 22h28" stroke="#b6c9eb" />
          <text x="82" y="27" className="hp-system-micro">01 / PROGRAMMING</text>
          <path d="m42 70-14 12 14 12m34-24 14 12-14 12m-13-28-11 32" fill="none" stroke="#2348d5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="112" y="86" className="hp-system-title">Code</text>
          <text x="112" y="112" className="hp-system-detail">C · Python · Assembly</text>
          <circle cx="276" cy="142" r="6" fill="#2348d5" stroke="white" strokeWidth="3" />
        </g>
      </g>
      <g className="hp-system-network">
        <g transform="translate(42 229) rotate(-8 178 78)">
          <rect x="8" y="14" width="354" height="158" rx="16" fill="#162d71" opacity=".12" />
          <rect width="354" height="158" rx="16" fill={`url(#${id}-blue)`} stroke="#466de3" />
          <path d="M0 44h354" stroke="#fff" strokeOpacity=".16" />
          <circle cx="24" cy="23" r="4" fill="#8ebeff" /><path d="M36 23h28" stroke="#8ebeff" strokeOpacity=".6" />
          <text x="82" y="28" className="hp-system-micro" fill="#d8e6ff">02 / NETWORKING</text>
          <g fill="none" stroke="#8ebeff" strokeWidth="2"><rect x="28" y="70" width="34" height="20" rx="4" /><path d="M45 90v16m-17 0h34m-34 0v12m34-12v12" /><rect x="20" y="118" width="16" height="12" rx="2" /><rect x="54" y="118" width="16" height="12" rx="2" /></g>
          <text x="106" y="91" className="hp-system-title" fill="white">Systems</text>
          <text x="106" y="120" className="hp-system-detail" fill="#d8e6ff">Networks · Security</text>
          <circle cx="190" cy="0" r="6" fill="#8ebeff" stroke="#2348d5" strokeWidth="3" />
          <circle cx="354" cy="100" r="6" fill="#8ebeff" stroke="#2348d5" strokeWidth="3" />
        </g>
      </g>
      <g className="hp-system-web">
        <g transform="translate(177 408) rotate(-8 142 52)">
          <rect x="6" y="10" width="282" height="104" rx="14" fill="#c8d8f0" opacity=".36" />
          <rect width="282" height="104" rx="14" fill={`url(#${id}-paper)`} stroke="#bdcfee" />
          <circle cx="38" cy="48" r="17" fill="none" stroke="#2348d5" strokeWidth="2" />
          <ellipse cx="38" cy="48" rx="7" ry="17" fill="none" stroke="#2348d5" strokeWidth="1.5" /><path d="M21 48h34" stroke="#2348d5" />
          <text x="80" y="36" className="hp-system-micro">03 / WEB DEVELOPMENT</text>
          <text x="80" y="64" className="hp-system-title">Web</text>
          <text x="80" y="87" className="hp-system-detail">HTML · CSS · WordPress</text>
          <circle cx="84" cy="0" r="6" fill="#2348d5" stroke="white" strokeWidth="3" />
        </g>
      </g>
    </svg>
    <figcaption><span aria-hidden="true" /> Connected disciplines. Real projects.</figcaption>
  </figure>;
}
