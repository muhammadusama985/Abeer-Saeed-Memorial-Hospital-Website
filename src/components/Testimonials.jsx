import Icon from './Icon'
import { testimonials } from '../data/hospitalData'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Patient Stories</span>
          <h2 className="section-title">
            Real <span>stories</span>, real people.
          </h2>
          <p className="section-subtitle">
            Hear from the people whose lives we've had the privilege to be
            part of.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <span className="testimonial-quote-icon">
                <Icon name="quote" size={28} />
              </span>
              <blockquote className="testimonial-text">{t.quote}</blockquote>
              <figcaption className="testimonial-author">
                <div className="testimonial-author-info">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" size={14} />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
