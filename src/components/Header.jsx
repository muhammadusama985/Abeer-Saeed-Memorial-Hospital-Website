import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'
import { hospitalInfo } from '../data/hospitalData'

const tickerItems = [
  { icon: 'phone', text: `Emergency: ${hospitalInfo.emergency}` },
  { icon: 'clock', text: 'Open 24/7 · Including Holidays' },
  { icon: 'mail', text: hospitalInfo.email },
  { icon: 'pin', text: hospitalInfo.address },
  { icon: 'heart', text: 'Trusted by 150,000+ patients worldwide' },
  { icon: 'check', text: 'JCI Accredited Hospital' },
  { icon: 'ambulance', text: '24/7 Emergency Care Available' },
  { icon: 'phone', text: 'Reception: ' + hospitalInfo.phone },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/doctors', label: 'Doctors' },
    { to: '/stories', label: 'Stories' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* News-style scrolling ticker */}
      <div className="top-bar">
        <div className="ticker">
          <div className="ticker-label">
            <span className="ticker-pulse" />
            <span>LIVE</span>
          </div>
          <div className="ticker-viewport">
            <div className="ticker-track">
              {tickerItems.concat(tickerItems).map((item, i) => (
                <span className="ticker-item" key={i}>
                  <span className="ticker-icon">
                    <Icon name={item.icon} size={13} />
                  </span>
                  <span className="ticker-text">{item.text}</span>
                  <span className="ticker-dot" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="brand">
            <img src="/logo.png" alt="Abeer Saeed Memorial Hospital" className="brand-logo" />
          </Link>

          <nav className={`site-nav ${open ? 'is-open' : ''}`}>
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={location.pathname === l.to ? 'is-active' : ''}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="btn btn-primary header-cta">
              <Icon name="phone" size={16} />
              <span>Book Appointment</span>
            </Link>
            <button
              className="menu-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
            >
              <Icon name={open ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
