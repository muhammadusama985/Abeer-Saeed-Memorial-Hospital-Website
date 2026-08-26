import Icon from './Icon'
import { hospitalInfo, stats } from '../data/hospitalData'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Real background image from /public/hero-bg.png — visible on the right side */}
      <div className="hero-bg-image" aria-hidden="true" />

      {/* Soft gradient fade between left (clean) and right (image) */}
      <div className="hero-fade" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-text fade-up">
          <h1 className="hero-title">
            Compassionate <span className="hero-accent">Healthcare</span>,
            <br />
            Advanced <em>Medicine</em>.
          </h1>

          <p className="hero-lead">
            At {hospitalInfo.name}, world-class doctors, modern technology and a
            human touch come together — so every patient feels seen, heard and
            healed.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="container">
        <div className="stats-strip">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
