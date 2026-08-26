import { Link } from 'react-router-dom'
import Icon from './Icon'
import { hospitalInfo } from '../data/hospitalData'

const features = [
  'Round-the-clock emergency & trauma response',
  'Board-certified specialists across 12+ fields',
  'Modern diagnostics — lab, X-ray, ultrasound & ECG on-site',
  'Affordable care with insurance & Sehat Sahulat support',
]

export default function AboutDetail() {
  return (
    <section className="section about-section">
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
            Rooted in <span>Chakdara</span>, serving all of <span>Lower Dir</span>.
          </h2>
          <p className="about-lead">
            Tucked in the heart of Bazar, Chakdara, {hospitalInfo.name} is the
            region's most trusted healthcare destination — bringing specialist
            care, emergency services and advanced diagnostics to the people of
            Lower Dir and the surrounding valleys. We believe world-class
            healthcare should never require a journey across the country.
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
