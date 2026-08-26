import Icon from './Icon'
import { hospitalInfo } from '../data/hospitalData'

const mapSrc =
  'https://maps.google.com/maps?q=abeer%20saeed%20memorial%20hospital&t=m&z=10&output=embed&iwloc=near'

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Abeer+Saeed+Memorial+Hospital'

export default function HospitalMap() {
  return (
    <section id="location" className="section map-section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Find Us</span>
          <h2 className="section-title">
            Visit us at the <span>heart</span> of the city.
          </h2>
          <p className="section-subtitle">
            Centrally located and easily accessible by car, public transit and
            on foot. Free parking available on-site.
          </p>
        </div>

        <div className="map-wrapper">
          {/* Sidebar */}
          <aside className="map-sidebar">
            <div className="map-side-card">
              <div className="map-side-icon">
                <Icon name="pin" size={20} />
              </div>
              <div>
                <div className="map-side-label">Address</div>
                <div className="map-side-value">{hospitalInfo.address}</div>
              </div>
            </div>

            <div className="map-side-card">
              <div className="map-side-icon">
                <Icon name="phone" size={20} />
              </div>
              <div>
                <div className="map-side-label">Reception</div>
                <div className="map-side-value">{hospitalInfo.phone}</div>
              </div>
            </div>

            <div className="map-side-card">
              <div className="map-side-icon map-side-icon-emergency">
                <Icon name="ambulance" size={20} />
              </div>
              <div>
                <div className="map-side-label">Emergency</div>
                <div className="map-side-value map-side-value-emergency">{hospitalInfo.emergency}</div>
              </div>
            </div>

            <div className="map-side-card">
              <div className="map-side-icon">
                <Icon name="clock" size={20} />
              </div>
              <div>
                <div className="map-side-label">Open Hours</div>
                <div className="map-side-value">24/7 · 365 days a year</div>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary map-directions"
            >
              <Icon name="arrow" size={18} stroke />
              <span>Get Directions</span>
            </a>
          </aside>

          {/* Google Maps embed */}
          <div className="map-canvas">
            <iframe
              className="map-iframe"
              src={mapSrc}
              title={`${hospitalInfo.name} location on Google Maps`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
