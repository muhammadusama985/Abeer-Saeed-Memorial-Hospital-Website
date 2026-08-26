import Icon from './Icon'
import { services } from '../data/hospitalData'

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our Departments</span>
          <h2 className="section-title">
            Comprehensive care, <span>every specialty</span> under one roof.
          </h2>
          <p className="section-subtitle">
            From routine check-ups to complex surgeries, our 40+ departments
            deliver world-class care tailored to every stage of life.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article className="service-card" key={s.title} style={{ '--delay': `${i * 0.05}s` }}>
              <div className="service-icon">
                <Icon name={s.icon} size={26} />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
