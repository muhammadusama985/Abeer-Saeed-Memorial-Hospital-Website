import { useState } from 'react'
import Icon from './Icon'
import { doctors } from '../data/hospitalData'

const specialties = ['All', 'Cardiologist', 'Medical Specialist', 'Medical and Chest Specialist', 'Dietitian']

export default function Doctors() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? doctors : doctors.filter((d) => d.specialty === active)

  return (
    <section id="doctors" className="section doctors-section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our Specialists</span>
          <h2 className="section-title">
            Meet the doctors <span>who care</span> for you.
          </h2>
          <p className="section-subtitle">
            Board-certified, internationally trained and deeply committed to
            every patient they treat.
          </p>
        </div>

        <div className="doctor-filters">
          {specialties.map((sp) => (
            <button
              key={sp}
              className={`filter-chip ${active === sp ? 'is-active' : ''}`}
              onClick={() => setActive(sp)}
            >
              {sp}
            </button>
          ))}
        </div>

        <div className="doctors-grid">
          {filtered.map((d) => (
            <article className="doctor-card" key={d.name}>
              <div className="doctor-img-wrap">
                <img src={d.image} alt={d.name} className="doctor-img" />
              </div>
              <div className="doctor-body">
                <h3 className="doctor-name">{d.name}</h3>
                <div className="doctor-specialty">{d.specialty}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
