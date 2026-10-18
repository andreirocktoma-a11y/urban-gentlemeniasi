import { Scissors, Sparkles, Wind, Eye } from "lucide-react";
import { services, business } from "../data";
import { Phone } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  scissors: Scissors,
  sparkles: Sparkles,
  razor: Wind,
  mirror: Eye,
};

export default function Services() {
  return (
    <section id="servicii" className="section services">
      <div className="container">
        <div className="services-head reveal">
          <span className="eyebrow">Servicii</span>
          <h2 className="services-title">
            Ce facem pentru tine
          </h2>
          <hr className="gold-line" />
          <p className="services-lead">
            De la o tunsoare precisă la o transformare completă — ne ocupăm de fiecare
            detaliu al imaginii tale.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Scissors;
            return (
              <article key={s.title} className="service-card reveal" data-delay={String(i * 90)}>
                <div className="service-card-top">
                  <span className="service-card-num">0{i + 1}</span>
                  <span className="service-card-icon">
                    <Icon size={22} />
                  </span>
                </div>
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="services-cta reveal" data-delay="120">
          <p className="services-cta-text">
            Nu ești sigur ce ți se potrivește? Vino pentru o consultație.
          </p>
          <a href={business.phoneHref} className="btn btn-gold">
            <Phone size={16} />
            Sună pentru programare
          </a>
        </div>
      </div>
    </section>
  );
}
