import { Phone, MapPin, Star, Navigation, ChevronDown } from "lucide-react";
import { business } from "../data";

export default function Hero() {
  return (
    <section id="acasă" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">Frizerie premium · Iași</span>

          <h1 className="hero-title">
            Unde bărbații devin
            <span className="hero-title-accent"> gentlemeni</span>
          </h1>

          <p className="hero-sub">
            O experiență completă de îngrijire masculină în Valea Adâncă — tunsori
            moderne, atenție la detalii și tratament de adevărat domn.
          </p>

          <div className="hero-rating">
            <div className="hero-stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={18} className="star-filled" fill="currentColor" />
              ))}
            </div>
            <span className="hero-rating-text">
              <strong>{business.rating}</strong> · {business.reviewCount} recenzii Google
            </span>
          </div>

          <div className="hero-actions">
            <a href={business.phoneHref} className="btn btn-gold">
              <Phone size={16} />
              {business.phone}
            </a>
            <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Navigation size={16} />
              Cum ajung
            </a>
          </div>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <MapPin size={15} /> {business.addressShort}, {business.city}
            </span>
          </div>
        </div>
      </div>

      <a href="#despre" className="hero-scroll" aria-label="Derulează în jos">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
