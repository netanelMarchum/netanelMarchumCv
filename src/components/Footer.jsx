import { Icon } from "./Icons.jsx";
import BrandMark from "./BrandMark.jsx";
import { navigate } from "../router.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-sig"><BrandMark size="sm" /></span>
        <p>© {year} Netanel Marchum</p>
        <div className="footer-links">
          <a href="/studio" onClick={(e) => { e.preventDefault(); navigate("/studio"); }}>Creative Studio ↗</a>
          <a className="to-top" href="#top"><Icon.up /> Back to top</a>
        </div>
      </div>
    </footer>
  );
}
