import { useEffect, useRef, useState } from 'react'

export default function VideoPlayer({ src, thumbnail, title = 'Hospital video' }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const onTime = () => {
      setCurrentTime(v.currentTime)
      setProgress((v.currentTime / (v.duration || 1)) * 100)
    }
    const onLoaded = () => setDuration(v.duration)
    const onEnd = () => {
      setPlaying(false)
      setStarted(false)
      v.currentTime = 0
    }

    v.addEventListener('timeupdate', onTime)
    v.addEventListener('loadedmetadata', onLoaded)
    v.addEventListener('ended', onEnd)
    return () => {
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('loadedmetadata', onLoaded)
      v.removeEventListener('ended', onEnd)
    }
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
      setStarted(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const seek = (seconds) => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + seconds))
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const onProgressClick = (e) => {
    const v = videoRef.current
    if (!v || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    v.currentTime = ratio * duration
  }

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  return (
    <div className={`video-player ${playing ? 'is-playing' : ''}`}>
      <div className="video-stage">
        <video
          ref={videoRef}
          src={src}
          poster={thumbnail}
          muted={muted}
          playsInline
          preload="metadata"
          onClick={togglePlay}
        />

        {!started && (
          <button className="video-play-overlay" onClick={togglePlay} aria-label="Play video">
            <span className="video-play-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="video-play-text">Play video</span>
          </button>
        )}
      </div>

      <div className="video-controls">
        <div className="video-progress" onClick={onProgressClick}>
          <div className="video-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="video-controls-row">
          <div className="video-controls-left">
            <button className="video-btn" onClick={() => seek(-10)} aria-label="Backward 10 seconds">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 17l-5-5 5-5" />
                <path d="M18 17l-5-5 5-5" />
              </svg>
              <span className="video-btn-label">10s</span>
            </button>

            <button className="video-btn video-btn-play" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button className="video-btn" onClick={() => seek(10)} aria-label="Forward 10 seconds">
              <span className="video-btn-label">10s</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 17l5-5-5-5" />
                <path d="M6 17l5-5-5-5" />
              </svg>
            </button>
          </div>

          <div className="video-controls-center">
            <span className="video-time">{fmt(currentTime)} / {fmt(duration)}</span>
          </div>

          <div className="video-controls-right">
            <button className="video-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
