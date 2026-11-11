import { useEffect, useRef, useState } from 'react'

export default function IITRoorkeeScene() {
  const stage = useRef(null)
  const frame = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [visible, setVisible] = useState(false)
  const [pageVisible, setPageVisible] = useState(() => !document.hidden)
  const active = playing && !reduced && visible && pageVisible

  function resetTilt() {
    window.cancelAnimationFrame(frame.current)
    stage.current?.style.removeProperty('--tilt-x')
    stage.current?.style.removeProperty('--tilt-y')
  }
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    const visibility = () => setPageVisible(!document.hidden)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(stage.current)
    media.addEventListener('change', update)
    document.addEventListener('visibilitychange', visibility)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', visibility)
      window.cancelAnimationFrame(frame.current)
    }
  }, [])
  useEffect(() => {
    if (!active) resetTilt()
  }, [active])
  function tilt(event) {
    if (!active || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2))
    const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2))
    window.cancelAnimationFrame(frame.current)
    frame.current = window.requestAnimationFrame(() => {
      stage.current?.style.setProperty('--tilt-x', `${-y * 6}deg`)
      stage.current?.style.setProperty('--tilt-y', `${x * 8}deg`)
    })
  }
  return <aside className="iit-scene" aria-label="IIT Roorkee education" data-active={active}>
    <div className="iit-scene-top"><span className="mono">THE FOUNDATION</span><span className="iit-scene-index">01 / EDUCATION</span></div>
    <div className="iit-viewport" ref={stage} onPointerMove={tilt} onPointerLeave={resetTilt}>
      <div className="iit-glow" aria-hidden="true" />
      <div className="iit-orbit" aria-hidden="true"><span /></div>
      <div className="iit-tilt">
        <div className="iit-float">
          <div className="iit-card-layer iit-layer-back" aria-hidden="true" />
          <div className="iit-card-layer iit-layer-mid" aria-hidden="true" />
          <div className="iit-card">
            <div className="iit-card-top"><span className="iit-alumni-label">PROUD ALUMNUS</span><span className="iit-star" aria-hidden="true">✧</span></div>
            <svg className="iit-campus" viewBox="0 0 360 150" fill="none" aria-hidden="true">
              <ellipse cx="180" cy="137" rx="153" ry="7" fill="currentColor" opacity=".06" />
              <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
                <path d="M25 131h310M34 126h292M44 119h272M45 119V75h104m62 0h104v44M40 75h109m62 0h109M47 70h102m62 0h102M149 119V66h62v53M141 66h78l-39-23-39 23ZM147 61h66M174 43V27h12v16M168 27h24M171 23h18M174 23c0-10 12-10 12 0M180 14V8M166 119V91a14 14 0 0 1 28 0v28M159 119v-9m42 9v-9M150 84h60M150 71h60" />
                {[59, 83, 107, 231, 255, 279].map(x => <g key={x}><path d={`M${x} 115V96a6 6 0 0 1 12 0v19M${x - 2} 115h16M${x} 82h12`} /><path d={`M${x + 6} 96v19`} opacity=".4" /></g>)}
                <path d="M152 126h56M155 122h50M34 118V93m292 25V93M29 93h10m282 0h10" opacity=".5" />
              </g>
              <circle cx="180" cy="58" r="3" stroke="currentColor" />
            </svg>
            <div className="iit-card-title"><span>Indian Institute of Technology</span><strong>IIT Roorkee</strong></div>
            <div className="iit-card-rule" />
            <div className="iit-degree"><span>Master of Computer<br />Applications</span><span className="iit-year"><small>CLASS OF</small>2012</span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="iit-scene-footer"><span><i aria-hidden="true" /> A foundation for everything I build.</span><button className="scene-toggle" type="button" disabled={reduced} aria-pressed={playing && !reduced} aria-label={reduced ? 'Reduced motion enabled' : playing ? 'Pause IIT Roorkee animation' : 'Play IIT Roorkee animation'} onClick={() => setPlaying(!playing)}>{reduced ? 'Motion reduced' : playing ? 'Pause 3D' : 'Play 3D'}</button></div>
  </aside>
}
