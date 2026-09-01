// Lightweight SVG icon set — keeps bundle small and visuals crisp
const icons = {
  heart: (
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  ),
  brain: (
    <>
      <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.5a3 3 0 0 0-3 3v1a3 3 0 0 0 1 2.2A3 3 0 0 0 4 13v1a3 3 0 0 0 3 3v.5A2.5 2.5 0 0 0 9.5 20a2.5 2.5 0 0 0 2.5-2.5V4.5A2.5 2.5 0 0 0 9.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.5a3 3 0 0 1 3 3v1a3 3 0 0 1-1 2.2 3 3 0 0 1 1 1.8v1a3 3 0 0 1-3 3v.5A2.5 2.5 0 0 1 14.5 20a2.5 2.5 0 0 1-2.5-2.5V4.5A2.5 2.5 0 0 1 14.5 2z" />
    </>
  ),
  bone: (
    <path d="M17 10c.7-.7 1-1.6 1-2.5a3.5 3.5 0 0 0-6-2.5L9 8 5.5 4.5A3.5 3.5 0 1 0 3 8L7 12l-4 4a3.5 3.5 0 0 0 2.5 6c.9 0 1.8-.4 2.5-1L12 17l4 4a3.5 3.5 0 0 0 5-5L17 12z" />
  ),
  baby: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 12h.01M15 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 22c-4 0-7-2-7-5 0-1.5 1-3 2-3.5" />
      <path d="M12 22c4 0 7-2 7-5 0-1.5-1-3-2-3.5" />
    </>
  ),
  tooth: (
    <path d="M12 2C8 2 5 4 5 8c0 3 1 4 1.5 7s.5 7 2.5 7 1.5-4 3-4 1 4 3 4 1-4 1.5-7S19 11 19 8c0-4-3-6-7-6z" />
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  scan: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 7v10M11 7v10M15 7v10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  ambulance: (
    <>
      <path d="M3 17V7a1 1 0 0 1 1-1h11v11H3z" />
      <path d="M15 9h4l2 3v5h-6V9z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M10 9h2M11 8v2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  star: (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  check: (
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  arrow: (
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  menu: (
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  ),
  close: (
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  ),
  plus: (
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  ),
  quote: (
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h2c0 4-1 6-3 6zm12 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h2c0 4-1 6-3 6z" />
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
}

export default function Icon({ name, size = 24, stroke = false, className = '', style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={stroke ? 'none' : 'currentColor'}
      stroke={stroke ? 'currentColor' : 'none'}
      strokeWidth={stroke ? 1.8 : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}
