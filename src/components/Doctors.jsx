import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <div className="doctor-rating">
                  <Icon name="star" size={14} />
                  <span>{d.rating}</span>
                </div>
              </div>
              <div className="doctor-body">
                <h3 className="doctor-name">{d.name}</h3>
                <div className="doctor-specialty">{d.specialty}</div>
                <p className="doctor-about">{d.about}</p>

                <div className="doctor-meta">
                  <span className="doctor-meta-item">
                    <Icon name="clock" size={15} stroke />
                    <span>{d.experience}</span>
                  </span>
                  <span className="doctor-meta-item">
                    <Icon name="heart" size={15} stroke />
                    <span>{d.patients} patients</span>
                  </span>
                </div>

                <div className="doctor-qualification">
                  <strong>{d.qualification}</strong>
                  <span>{d.education}</span>
                </div>

                <div className="doctor-hours">
                  <Icon name="clock" size={16} stroke />
                  <span>{d.hours}</span>
                </div>

                <div className="doctor-card-foot">
                  <Link to="/appointment" className="doctor-book">
                    <span>Book Appointment</span>
                    <Icon name="arrow" size={16} stroke />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
