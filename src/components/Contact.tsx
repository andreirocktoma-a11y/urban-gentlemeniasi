import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { business } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="contact-title">Hai să stăm de vorbă</h2>
          <hr className="gold-line" />
          <p className="contact-lead">
            Sună-ne pentru o programare sau trece pe la noi — te așteptăm cu drag.
          </p>

          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-item-icon"><MapPin size={18} /></span>
              <div>
                <span className="contact-item-label">Adresă</span>
                <span className="contact-item-value">{business.address}</span>
                <span className="contact-item-sub">Plus code: {business.plusCode}</span>
              </div>
            </li>

            <li className="contact-item">
              <span className="contact-item-icon"><Phone size={18} /></span>
              <div>
                <span className="contact-item-label">Telefon</span>
                <a href={business.phoneHref} className="contact-item-value contact-item-link">
                  {business.phone}
                </a>
              </div>
            </li>

            <li className="contact-item">
              <span className="contact-item-icon"><Clock size={18} /></span>
              <div>
                <span className="contact-item-label">Program</span>
                <span className="contact-item-value">Luni – Sâmbătă: 10:00 – 20:00</span>
                <span className="contact-item-sub">Duminică: Închis</span>
              </div>
            </li>
          </ul>

          <div className="contact-actions">
            <a href={business.phoneHref} className="btn btn-gold">
              <Phone size={16} />
              Sună acum
            </a>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Navigation size={16} />
              Deschide în Google Maps
            </a>
          </div>
        </div>

        <div className="contact-map reveal" data-delay="120">
          <iframe
            title="Hartă Urban Gentlemen's"
            src={business.embedMap}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
