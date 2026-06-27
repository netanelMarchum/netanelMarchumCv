import { Icon } from "./Icons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand-mark" style={{ width: 34, height: 34, fontSize: "0.9rem" }}>NM</span>
        <p>© {year} Netanel Marchum · Designed &amp; built with care.</p>
        <a className="to-top" href="#top"><Icon.up /> Back to top</a>
      </div>
    </footer>
  );
}
