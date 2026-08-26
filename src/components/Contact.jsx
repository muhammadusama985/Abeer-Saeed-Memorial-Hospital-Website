import { useState } from 'react'
import Icon from './Icon'
import { hospitalInfo } from '../data/hospitalData'

const subjects = ['General Consultation', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Consultation', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', subject: 'General Consultation', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title">
            Book your appointment <span>today</span>.
          </h2>
          <p className="contact-lead">
            Whether it's a routine check-up or a specialist consultation, our
            team is here to guide you every step of the way.
          </p>

          <div className="contact-cards">
            <a href={`tel:${hospitalInfo.phone}`} className="contact-card">
              <span className="contact-card-icon"><Icon name="phone" size={22} /></span>
              <div>
                <div className="contact-card-label">Call us</div>
                <div className="contact-card-value">{hospitalInfo.phone}</div>
              </div>
            </a>

            <a href={`mailto:${hospitalInfo.email}`} className="contact-card">
              <span className="contact-card-icon"><Icon name="mail" size={22} /></span>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">{hospitalInfo.email}</div>
              </div>
            </a>

            <div className="contact-card">
              <span className="contact-card-icon"><Icon name="pin" size={22} /></span>
              <div>
                <div className="contact-card-label">Visit</div>
                <div className="contact-card-value">{hospitalInfo.address}</div>
              </div>
            </div>

            <div className="contact-card contact-card-emergency">
              <span className="contact-card-icon"><Icon name="ambulance" size={22} /></span>
              <div>
                <div className="contact-card-label">Emergency 24/7</div>
                <div className="contact-card-value contact-card-value-emergency">{hospitalInfo.emergency}</div>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-head">
            <h3 className="form-title">Send us a message</h3>
            <p className="form-sub">We typically reply within 2 hours.</p>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={update('name')}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={update('email')}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={form.phone}
                onChange={update('phone')}
              />
            </div>
            <div className="form-field">
              <label htmlFor="subject">Department</label>
              <select id="subject" value={form.subject} onChange={update('subject')}>
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell us briefly how we can help..."
              value={form.message}
              onChange={update('message')}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary form-submit">
            {sent ? (
              <>
                <Icon name="check" size={18} stroke />
                <span>Message sent — we'll be in touch</span>
              </>
            ) : (
              <>
                <span>Send message</span>
                <Icon name="arrow" size={18} stroke />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
