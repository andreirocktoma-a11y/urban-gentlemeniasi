import { useState } from "react";
import { X } from "lucide-react";
import { gallery } from "../data";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galerie" className="section gallery">
      <div className="container">
        <div className="gallery-head reveal">
          <span className="eyebrow">Galerie</span>
          <h2 className="gallery-title">Atmosfera &amp; detaliile</h2>
          <hr className="gold-line" />
          <p className="gallery-lead">
            Fotografii sugestive pentru atmosfera Urban Gentlemen's. Imaginile sunt
            illustrative și nu reprezintă neapărat interiorul real al locației.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              className="gallery-item reveal"
              data-delay={String((i % 3) * 90)}
              onClick={() => setActive(i)}
              aria-label={`Mărește imaginea: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              <span className="gallery-item-overlay" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Închide" onClick={() => setActive(null)}>
            <X size={26} />
          </button>
          <img
            src={gallery[active].src}
            alt={gallery[active].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
