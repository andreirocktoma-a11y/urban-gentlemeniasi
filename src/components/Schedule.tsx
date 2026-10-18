import { Clock, Calendar, CreditCard, Wine, ParkingCircle, Accessibility, Baby, Phone, Navigation } from "lucide-react";
import { schedule, features, business } from "../data";

const featureIcons: Record<string, React.ElementType> = {
  calendar: Calendar,
  card: CreditCard,
  drink: Wine,
  parking: ParkingCircle,
  accessibility: Accessibility,
  kids: Baby,
};

// Indexul zilei curente (0 = Duminică în JS, dar afișăm Luni prima)
function todayIndex(): number {
  const js = new Date().getDay(); // 0 = Duminică
  // mapăm Luni=0 ... Duminică=6
  return js === 0 ? 6 : js - 1;
}

export default function Schedule() {
  const today = todayIndex();

  return (
    <section id="program" className="section schedule">
      <div className="container schedule-grid">
        <div className="schedule-left reveal">
          <span className="eyebrow">Program &amp; dotări</span>
          <h2 className="schedule-title">Când ne găsești</h2>
          <hr className="gold-line" />
          <p className="schedule-lead">
            Te așteptăm de luni până sâmbătă. Se recomandă programarea în avans, dar
            acceptăm și vizite fără programare, în funcție de disponibilitate.
          </p>

          <ul className="schedule-list">
            {schedule.map((s, i) => (
              <li key={s.day} className={`schedule-row ${i === today ? "is-today" : ""}`}>
                <span className="schedule-day">
                  {s.day}
                  {i === today && <span className="schedule-today-badge">Astăzi</span>}
                </span>
                <span className="schedule-dots" />
                <span className="schedule-hours">{s.hours}</span>
              </li>
            ))}
          </ul>

          <div className="schedule-contact">
            <a href={business.phoneHref} className="btn btn-gold">
              <Phone size={16} />
              {business.phone}
            </a>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Navigation size={16} />
              Indicații
            </a>
          </div>
        </div>

        <div className="schedule-right reveal" data-delay="100">
          <div className="schedule-features">
            <span className="schedule-features-label">Ce punem la dispoziție</span>
            <div className="schedule-features-grid">
              {features.map((f) => {
                const Icon = featureIcons[f.icon] ?? Clock;
                return (
                  <div key={f.label} className="feature-chip">
                    <Icon size={18} className="feature-chip-icon" />
                    <span>{f.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
