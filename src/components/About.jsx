import { Link } from 'react-router-dom'
import Icon from './Icon'
import { hospitalInfo } from '../data/hospitalData'

const features = [
  'Internationally accredited medical staff',
  'Latest diagnostic & surgical technology',
  'Personalized treatment plans for every patient',
  'Compassionate, multilingual care teams',
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-images about-images-single">
          <div className="about-img-main">
            <img
              src="/main.jpg"
              alt={`${hospitalInfo.name} — main building`}
            />
          </div>
          <div className="about-experience about-experience-card">
            <div className="about-experience-num">25+</div>
            <div className="about-experience-text">
              Years of trusted
              <br />
              healthcare excellence
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-title">
            A legacy of <span>healing</span>, a future of <span>innovation</span>.
          </h2>
          <p className="about-lead">
            For over two decades, {hospitalInfo.name} has been a beacon of
            hope for our community in {hospitalInfo.address} — combining
            cutting-edge medical technology with the timeless values of empathy,
            dignity and respect.
          </p>

          <ul className="about-features">
            {features.map((f) => (
              <li key={f}>
                <span className="about-check">
                  <Icon name="check" size={14} stroke />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="about-cta">
            <Link to="/doctors" className="btn btn-primary">
              <span>Meet Our Doctors</span>
              <Icon name="arrow" size={18} stroke />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              <Icon name="phone" size={18} />
              <span>{hospitalInfo.phone}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
