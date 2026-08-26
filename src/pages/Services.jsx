import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ServicesSection from '../components/Services'
import Icon from '../components/Icon'
import { services } from '../data/hospitalData'

const highlights = [
  {
    icon: 'ambulance',
    title: '24/7 Emergency',
    text: 'Round-the-clock emergency care with rapid-response teams and ambulance service.',
  },
  {
    icon: 'scan',
    title: 'Modern Diagnostics',
    text: 'On-site laboratory, digital X-ray, ultrasound and ECG — fast, accurate results.',
  },
  {
    icon: 'heart',
    title: 'Maternal & Child Care',
    text: 'Safe deliveries, neonatal support and pediatric specialists under one roof.',
  },
  {
    icon: 'check',
    title: 'Insurance Accepted',
    text: 'We work with major insurance providers and government health programs.',
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        gifSrc="/service.gif"
        eyebrow="Our Departments"
        title="Comprehensive Medical Services"
        subtitle="From emergency care to specialized surgery — ASMH provides complete healthcare for every member of your family."
      />
      <ServicesSection />

      <section className="section services-highlights">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Why Choose ASMH</span>
            <h2 className="section-title">
              Everything you need, <span>close to home</span>.
            </h2>
          </div>

          <div className="services-highlights-grid">
            {highlights.map((h) => (
              <div className="services-highlight-card" key={h.title}>
                <span className="services-highlight-icon">
                  <Icon name={h.icon} size={22} />
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <p>Not sure which department you need? Talk to our front desk.</p>
            <Link to="/contact" className="btn btn-primary">
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
