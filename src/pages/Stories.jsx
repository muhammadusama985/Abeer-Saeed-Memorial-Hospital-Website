import PageHero from '../components/PageHero'
import TestimonialsSection from '../components/Testimonials'

const stories = [
  {
    quote: 'When my father had a heart attack at 2 AM, the ASMH team was ready. Their quick response saved his life. We owe everything to them.',
    name: 'Imran Khan',
    role: 'Timergara, Lower Dir',
  },
  {
    quote: 'I delivered both my children at ASMH. The staff treated me like family. Clean rooms, kind nurses, excellent doctors.',
    name: 'Safia Bibi',
    role: 'Chakdara',
  },
  {
    quote: 'My son had a complex fracture after a fall. The orthopedic team did a perfect surgery and he was playing again within months.',
    name: 'Zahir Shah',
    role: 'Dir Bala',
  },
]

export default function Stories() {
  return (
    <>
      <PageHero
        gifSrc="/stories.gif"
        eyebrow="Real Stories"
        title="Patients & Their Journeys"
        subtitle="Every recovery is a story of courage, family and the team that stood beside them. Here are some of those stories."
      />
      <TestimonialsSection />

      <section className="section stories-extra">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Community Voices</span>
            <h2 className="section-title">
              More stories from <span>our community</span>.
            </h2>
          </div>
          <div className="stories-grid-extra">
            {stories.map((s) => (
              <figure className="story-extra-card" key={s.name}>
                <blockquote>“{s.quote}”</blockquote>
                <figcaption>
                  <strong>{s.name}</strong>
                  <span>{s.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
