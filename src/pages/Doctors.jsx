import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import DoctorsSection from '../components/Doctors'

export default function Doctors() {
  return (
    <>
      <PageHero
        gifSrc="/doctor.gif"
        eyebrow="Our Specialists"
        title="Meet the Doctors of ASMH"
        subtitle="Board-certified, experienced and committed to the people of Lower Dir — our team is here to provide the highest standard of care."
      />
      <DoctorsSection />

      <section className="section doctors-extra">
        <div className="container doctors-extra-inner">
          <div>
            <span className="section-eyebrow">Become a Patient</span>
            <h2 className="section-title">
              Book an appointment in <span>minutes</span>.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: 520, marginBottom: '1.5rem' }}>
              Choose your doctor, pick a time that suits you, and our team will
              confirm your visit. Walk-ins are welcome for emergencies.
            </p>
            <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
              <Link to="/appointment" className="btn btn-primary">
                <span>Book Online</span>
              </Link>
              <a href="tel:03365554447" className="btn btn-outline">
                <span>Call Reception</span>
              </a>
            </div>
          </div>

          <div className="doctors-faq">
            <h3 className="doctors-faq-title">Visiting Hours</h3>
            <ul>
              <li>
                <span>OPD</span>
                <span>Mon – Sat · 9:00 AM – 8:00 PM</span>
              </li>
              <li>
                <span>Emergency</span>
                <span>24 / 7 · 365 days</span>
              </li>
              <li>
                <span>Pharmacy</span>
                <span>Mon – Sun · 8:00 AM – 11:00 PM</span>
              </li>
              <li>
                <span>Lab</span>
                <span>Mon – Sat · 8:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
