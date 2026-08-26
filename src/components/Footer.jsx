import { Link } from 'react-router-dom'
import Icon from './Icon'
import { hospitalInfo } from '../data/hospitalData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light">
            <span className="brand-text">
              <span className="brand-name">Abeer Saeed</span>
              <span className="brand-sub">Memorial Hospital</span>
            </span>
          </Link>
          <p className="footer-about">
            Compassionate, world-class healthcare for our community — every
            day, every patient.
          </p>
          <div className="footer-socials">
            {['f', 'in', 'ig', 'tw'].map((s) => (
              <a key={s} href="#" className="footer-social" aria-label={s}>
                <span>{s.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Hospital</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/doctors">Our Doctors</Link></li>
            <li><Link to="/services">Departments</Link></li>
            <li><Link to="/stories">Patient Stories</Link></li>
            <li><Link to="/contact">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Patients</h4>
          <ul>
            <li><Link to="/contact">Book Appointment</Link></li>
            <li><Link to="/contact">Insurance</Link></li>
            <li><Link to="/contact">Visitor Information</Link></li>
            <li><Link to="/contact">Patient Portal</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <Icon name="pin" size={16} />
              <span>{hospitalInfo.address}</span>
            </li>
            <li>
              <Icon name="phone" size={16} />
              <span>{hospitalInfo.phone}</span>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <span>{hospitalInfo.email}</span>
            </li>
            <li>
              <Icon name="clock" size={16} />
              <span>24/7 Emergency Care</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} {hospitalInfo.name}. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
