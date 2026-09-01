import { useState } from 'react'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { doctors } from '../data/hospitalData'

const departments = [...new Set(doctors.map((d) => d.specialty))]

function toTimeString(hr) {
  const isPM = hr >= 12
  const h = hr % 12 === 0 ? 12 : Math.floor(hr % 12)
  const min = hr % 1 === 0 ? '00' : '30'
  return `${h}:${min} ${isPM ? 'PM' : 'AM'}`
}

function buildSlots(start, end, step = 30) {
  const slots = []
  for (let t = start; t < end + 1e-6; t += step / 60) {
    slots.push(toTimeString(t))
  }
  return slots
}

export default function Appointment() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    department: 'Cardiology',
    doctor: doctors[0].name,
    date: '',
    time: buildSlots(doctors[0].start, doctors[0].end)[0],
    message: '',
  })
  const [booked, setBooked] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const depDoctors = doctors.filter((d) => d.specialty === form.department)

  const selectedDoctor =
    doctors.find((d) => d.name === form.doctor) || depDoctors[0] || doctors[0]

  const timeSlots = buildSlots(selectedDoctor.start, selectedDoctor.end)

  const selectDoctor = (name) => {
    const next = doctors.find((d) => d.name === name) || selectedDoctor
    setForm((f) => ({
      ...f,
      doctor: next.name,
      department: next.specialty,
      time: buildSlots(next.start, next.end)[0],
    }))
  }

  const changeDepartment = (dep) => {
    const depList = doctors.filter((d) => d.specialty === dep)
    if (!depList.length) return
    const next = depList.includes(selectedDoctor)
      ? selectedDoctor
      : depList[0]
    setForm((f) => ({
      ...f,
      department: dep,
      doctor: next.name,
      time: buildSlots(next.start, next.end)[0],
    }))
  }

  const changeDoctor = (name) => {
    const next = doctors.find((d) => d.name === name)
    setForm((f) => ({
      ...f,
      doctor: next.name,
      time: buildSlots(next.start, next.end)[0],
    }))
  }

  const selectSlot = (t) => setForm((f) => ({ ...f, time: t }))

  const submit = (e) => {
    e.preventDefault()
    setBooked(true)
    setTimeout(() => setBooked(false), 5000)
    setForm({
      name: '',
      phone: '',
      department: 'Cardiology',
      doctor: doctors[0].name,
      date: '',
      time: buildSlots(doctors[0].start, doctors[0].end)[0],
      message: '',
    })
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      <PageHero
        gifSrc="/doctor.gif"
        eyebrow="Book an Appointment"
        title="Schedule Your Visit"
        subtitle="Enter your details, choose your doctor and pick a time that suits you — we'll confirm your appointment shortly."
      />

      <section className="section appointment-section">
        <div className="container">
          <div className="appointment-head">
            <span className="section-eyebrow">Online Booking</span>
            <h2 className="appointment-title">
              Book your <span>appointment</span> in 3 easy steps
            </h2>
            <p className="appointment-subtitle">
              Pick a doctor, select a free time slot within their working hours, and confirm your details.
            </p>
          </div>

          <div className="appointment-steps">
            <div className="appointment-step is-done">
              <span className="appointment-step-num">1</span>
              <span className="appointment-step-label">Choose doctor</span>
            </div>
            <span className="appointment-step-line" />
            <div className="appointment-step is-done">
              <span className="appointment-step-num">2</span>
              <span className="appointment-step-label">Pick time slot</span>
            </div>
            <span className="appointment-step-line" />
            <div className="appointment-step">
              <span className="appointment-step-num">3</span>
              <span className="appointment-step-label">Confirm details</span>
            </div>
          </div>

          <div className="appointment-layout">
            {/* Doctor selection panel */}
            <div className="appointment-panel">
              <div className="appointment-panel-head">
                <Icon name="heart" size={18} />
                <span>Select your doctor</span>
              </div>

              <div className="doctor-selector">
                {doctors.map((d) => {
                  const active = form.doctor === d.name
                  return (
                    <button
                      key={d.name}
                      type="button"
                      className={`doctor-selector-card ${active ? 'is-active' : ''}`}
                      onClick={() => selectDoctor(d.name)}
                    >
                      <span className="doctor-selector-img">
                        <img src={d.image} alt={d.name} />
                      </span>
                      <span className="doctor-selector-body">
                        <strong>{d.name}</strong>
                        <span className="doctor-selector-spec">{d.specialty}</span>
                        <span className="doctor-selector-hours">
                          <Icon name="clock" size={13} stroke />
                          {d.hours}
                        </span>
                      </span>
                      <span className="doctor-selector-check">
                        {active && <Icon name="check" size={14} stroke />}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="doctor-summary">
                <img src={selectedDoctor.image} alt={selectedDoctor.name} className="doctor-summary-img" />
                <div className="doctor-summary-body">
                  <strong>{selectedDoctor.name}</strong>
                  <span>{selectedDoctor.qualification}</span>
                  <span>{selectedDoctor.experience} experience · ⭐ {selectedDoctor.rating}</span>
                </div>
              </div>
            </div>

            {/* Booking form */}
            <form className="appointment-form" onSubmit={submit}>
              <div className="form-head">
                <h3 className="form-title">Appointment details</h3>
                <p className="form-sub">Fields marked * are required.</p>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="a-name">Full name *</label>
                  <input
                    id="a-name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={update('name')}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="a-phone">Phone *</label>
                  <input
                    id="a-phone"
                    type="tel"
                    placeholder="03XX-XXXXXXX"
                    value={form.phone}
                    onChange={update('phone')}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="a-department">Department *</label>
                <select
                  id="a-department"
                  value={form.department}
                  onChange={(e) => changeDepartment(e.target.value)}
                >
                  {departments.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="a-doctor">Doctor *</label>
                <select id="a-doctor" value={form.doctor} onChange={(e) => changeDoctor(e.target.value)}>
                  {depDoctors.map((d) => (
                    <option key={d.name} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="a-date">Preferred date *</label>
                <input
                  id="a-date"
                  type="date"
                  value={form.date}
                  onChange={update('date')}
                  min={today}
                  required
                />
              </div>

              <div className="form-field">
                <label>
                  Choose a time slot * <span className="slot-range">({selectedDoctor.hours})</span>
                </label>
                <div className="time-slot-grid">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`time-slot ${form.time === t ? 'is-active' : ''}`}
                      onClick={() => selectSlot(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="a-message">Message (optional)</label>
                <textarea
                  id="a-message"
                  rows="3"
                  placeholder="Any details you'd like the doctor to know..."
                  value={form.message}
                  onChange={update('message')}
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                {booked ? (
                  <>
                    <Icon name="check" size={18} stroke />
                    <span>Appointment Booked!</span>
                  </>
                ) : (
                  <>
                    <Icon name="calendar" size={18} />
                    <span>Book Appointment</span>
                  </>
                )}
              </button>

              {booked && (
                <div className="appointment-success">
                  <Icon name="check" size={22} stroke />
                  <div>
                    <strong>Appointment requested successfully!</strong>
                    <span>
                      {form.name ? `${form.name}, ` : ''}your visit with {selectedDoctor.name} has been requested.
                      We will call you shortly to confirm.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
