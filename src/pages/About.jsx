import PageHero from '../components/PageHero'
import AboutDetail from '../components/AboutDetail'
import VideoPlayer from '../components/VideoPlayer'
import { hospitalInfo } from '../data/hospitalData'

export default function About() {
  return (
    <>
      <PageHero
        gifSrc="/about.gif"
        eyebrow="Who We Are"
        title={`About ${hospitalInfo.name}`}
        subtitle="A trusted name in healthcare for the people of Lower Dir and beyond — built on compassion, powered by modern medicine."
      />
      <AboutDetail />

      <section className="section about-video-section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Take a Tour</span>
            <h2 className="section-title">
              See our hospital <span>in motion</span>.
            </h2>
            <p className="section-subtitle">
              Watch a short walkthrough of {hospitalInfo.name} — our facilities,
              our team and the care we deliver every day.
            </p>
          </div>
          <VideoPlayer
            src="/video.mp4"
            thumbnail="/thumbnail.jpg"
            title="Abeer Saeed Memorial Hospital tour"
          />
        </div>
      </section>

      <section className="section about-extra">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title">
              Care that <span>reaches</span> every home.
            </h2>
            <p className="section-subtitle">
              ASMH is more than a hospital — we're a partner in the health of our community.
            </p>
          </div>

          <div className="about-extra-grid">
            <div className="about-extra-card">
              <div className="about-extra-num">01</div>
              <h3>Compassionate Care</h3>
              <p>
                Every patient is treated like family. Our doctors and nurses take
                time to listen, explain and support — in Pashto, Urdu and English.
              </p>
            </div>
            <div className="about-extra-card">
              <div className="about-extra-num">02</div>
              <h3>Modern Medicine</h3>
              <p>
                Equipped with up-to-date diagnostic and surgical technology, so
                the people of Dir don't need to travel far for advanced treatment.
              </p>
            </div>
            <div className="about-extra-card">
              <div className="about-extra-num">03</div>
              <h3>Community First</h3>
              <p>
                From free health camps to 24/7 emergency response, ASMH is woven
                into the fabric of Chakdara and the surrounding valleys.
              </p>
            </div>
            <div className="about-extra-card">
              <div className="about-extra-num">04</div>
              <h3>Affordable Access</h3>
              <p>
                Quality healthcare shouldn't be a privilege. We offer transparent
                pricing, insurance support and assistance programs for those in need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
