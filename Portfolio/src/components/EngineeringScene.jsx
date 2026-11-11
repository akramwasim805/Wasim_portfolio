import { useEffect, useRef, useState } from 'react'

export default function EngineeringScene() {
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
  return <aside className="engineering-note engineering-scene" aria-label="Engineering approach" data-active={active}>
    <div className="note-heading"><span className="mono">ENGINEER’S NOTES / IN 3D</span><span className="note-dots" aria-hidden="true">•••</span></div>
    <div className="scene-viewport" ref={stage} onPointerMove={tilt} onPointerLeave={resetTilt} aria-hidden="true">
      <div className="scene-floor" />
      <div className="scene-tilt"><div className="system-stack">
        <div className="system-plane plane-data"><span className="plane-label">03 / DATA</span><div className="plane-grid"><i /><i /><i /><i /><i /><i /></div></div>
        <div className="system-plane plane-events"><span className="plane-label">02 / EVENTS</span><div className="plane-connections"><i /><span /><i /><span /><i /></div></div>
        <div className="system-plane plane-api"><span className="plane-label">01 / API</span><span className="plane-code">{'{ / }'}</span></div>
      </div></div>
      <span className="scene-caption">A SYSTEM, LAYER BY LAYER</span>
    </div>
    <div className="note-code" aria-hidden="true"><p><span className="line-number">01</span><span className="code-muted">// Build with intention.</span></p><p><span className="line-number">02</span><span className="code-accent">const</span> approach = {'{'}</p><p><span className="line-number">03</span>  design: <span className="code-string">'for scale'</span>,</p><p><span className="line-number">04</span>  code: <span className="code-string">'with clarity'</span>,</p><p><span className="line-number">05</span>  teams: <span className="code-string">'grow together'</span></p><p><span className="line-number">06</span>{'};'}</p></div>
    <div className="note-footer"><span><span className="small-dot" /> Systems first. People always.</span><button className="scene-toggle" type="button" disabled={reduced} aria-pressed={playing && !reduced} onClick={() => setPlaying(!playing)}>{reduced ? 'Motion reduced' : playing ? 'Pause 3D' : 'Play 3D'}</button></div>
  </aside>
}
