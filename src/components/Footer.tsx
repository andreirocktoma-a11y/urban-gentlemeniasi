import { Scissors, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { business } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <Scissors size={20} />
            <span>Urban<span className="text-gold"> Gentlemen's</span></span>
          </div>
          <p className="footer-tagline">
            Frizerie premium în Valea Adâncă, Iași. Unde bărbații devin gentlemeni.
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <MapPin size={15} />
              <span>{business.address}</span>
            </li>
            <li>
              <Phone size={15} />
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#acasă">Acasă</a></li>
            <li><a href="#despre">Despre</a></li>
            <li><a href="#servicii">Servicii</a></li>
            <li><a href="#galerie">Galerie</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Urmărește-ne</h4>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="footer-social">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="footer-social">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Urban Gentlemen's. Toate drepturile rezervate.</span>
          <span className="footer-bottom-meta">Valea Adâncă, Iași</span>
        </div>
      </div>
    </footer>
  );
}
