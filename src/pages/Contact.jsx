import PageHero from '../components/PageHero'
import HospitalMap from '../components/HospitalMap'
import ContactSection from '../components/Contact'
import { hospitalInfo } from '../data/hospitalData'

export default function Contact() {
  return (
    <>
      <PageHero
        gifSrc="/contact.gif"
        eyebrow="Reach Us"
        title="Visit, Call or Write"
        subtitle={`${hospitalInfo.name} is open 24/7. We're here whenever you need us — in person, by phone, or online.`}
      />
      <HospitalMap />
      <ContactSection />
    </>
  )
}
