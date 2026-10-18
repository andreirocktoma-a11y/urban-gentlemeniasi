import { Star, Quote } from "lucide-react";
import { reviews, business } from "../data";

export default function Reviews() {
  return (
    <section id="recenzii" className="section reviews">
      <div className="container">
        <div className="reviews-head reveal">
          <span className="eyebrow">Recenzii Google</span>
          <h2 className="reviews-title">Ce spun clienții noștri</h2>
          <hr className="gold-line" />
          <div className="reviews-summary reveal">
            <div className="reviews-summary-stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={20} className="star-filled" fill="currentColor" />
              ))}
            </div>
            <span className="reviews-summary-text">
              <strong>{business.rating}</strong> din 5 · {business.reviewCount} recenzii pe Google
            </span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <article key={r.author} className="review-card reveal" data-delay={String(i * 120)}>
              <Quote size={28} className="review-quote" />
              <div className="review-stars">
                {[0, 1, 2, 3, 4].map((j) => (
                  <Star key={j} size={15} className="star-filled" fill="currentColor" />
                ))}
              </div>
              <p className="review-text">„{r.text}"</p>
              <div className="review-author">
                <span className="review-author-name">{r.author}</span>
                <span className="review-author-badge">{r.badge}</span>
                <span className="review-author-time">{r.time}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews-cta reveal">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold"
          >
            Vezi toate recenziile pe Google
          </a>
        </div>
      </div>
    </section>
  );
}
