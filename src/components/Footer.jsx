import { Icon } from "./Icons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand-sig footer-sig">Netanel Marchum</span>
        <p>© {year} Netanel Marchum</p>
        <a className="to-top" href="#top"><Icon.up /> Back to top</a>
      </div>
    </footer>
  );
}
