import { Award, Sparkles, HeartHandshake, Coffee } from "lucide-react";

const stats = [
  { value: "4,9", label: "Notă Google" },
  { value: "109", label: "Recenzii" },
  { value: "100%", label: "Tratament de domn" },
];

const pillars = [
  {
    icon: Award,
    title: "Pasiune pentru detalii",
    desc: "Fiecare linie, fiecare tăietură și fiecare finisaj sunt făcute cu atenție la cel mai mic detaliu.",
  },
  {
    icon: Sparkles,
    title: "Look de gentleman",
    desc: "Echipa noastră de hair-styliști îți oferă un stil deosebit, adaptat feței și personalității tale.",
  },
  {
    icon: HeartHandshake,
    title: "Răsfăț și relaxare",
    desc: "Te tratăm ca pe un adevărat domn — cu băuturi la discreție și o atmosferă în care te simți răsfățat.",
  },
  {
    icon: Coffee,
    title: "Prețuri corecte",
    desc: "Servicii premium la prețuri accesibile. Calitatea nu trebuie să fie un lux inaccesibil.",
  },
];

export default function About() {
  return (
    <section id="despre" className="section about">
      <div className="container">
        <div className="about-head reveal">
          <span className="eyebrow">Despre noi</span>
          <h2 className="about-title">
            Mai mult decât o frizerie —<br />
            <span className="text-gold">o experiență pentru domni</span>
          </h2>
          <hr className="gold-line" />
          <p className="about-lead">
            Urban Gentlemen's nu este o frizerie oarecare. Este locul în care pasiunea
            și atenția pentru detalii sunt duse la un alt nivel — singura locație din
            Iași unde ești tratat ca un adevărat domn, de la primul până la ultimul gest.
          </p>
        </div>

        <div className="about-stats reveal" data-delay="80">
          {stats.map((s) => (
            <div key={s.label} className="about-stat">
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="about-grid">
          {pillars.map((p, i) => (
            <article key={p.title} className="about-card reveal" data-delay={String(i * 90)}>
              <span className="about-card-icon">
                <p.icon size={22} />
              </span>
              <h3 className="about-card-title">{p.title}</h3>
              <p className="about-card-desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
