import { useEffect, useState } from "react";
import { Menu, X, Phone, Scissors } from "lucide-react";
import { business } from "../data";

const links = [
  { href: "#acasă", label: "Acasă" },
  { href: "#despre", label: "Despre" },
  { href: "#servicii", label: "Servicii" },
  { href: "#galerie", label: "Galerie" },
  { href: "#recenzii", label: "Recenzii" },
  { href: "#program", label: "Program" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#acasă" className="nav-logo" onClick={close}>
          <Scissors size={20} className="nav-logo-icon" />
          <span className="nav-logo-text">
            Urban<span className="nav-logo-accent"> Gentlemen's</span>
          </span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href={business.phoneHref} className="btn btn-gold nav-cta">
          <Phone size={16} />
          Programează-te
        </a>

        <button
          className="nav-burger"
          aria-label="Meniu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-mobile-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <a href={business.phoneHref} className="btn btn-gold nav-mobile-cta" onClick={close}>
          <Phone size={16} />
          {business.phone}
        </a>
      </div>
    </header>
  );
}
