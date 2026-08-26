import VideoPlayer from './VideoPlayer'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  icon,
  gifSrc,
  videoSrc,
  thumbnail,
  videoTitle,
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="container page-hero-inner">
        {gifSrc ? (
          <span className="page-hero-gif">
            <img src={gifSrc} alt="" aria-hidden="true" />
          </span>
        ) : icon ? (
          <span className="page-hero-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
            </svg>
          </span>
        ) : null}
        {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}

        {videoSrc && (
          <div className="page-hero-video">
            <VideoPlayer src={videoSrc} thumbnail={thumbnail} title={videoTitle} />
          </div>
        )}
      </div>
    </section>
  )
}
