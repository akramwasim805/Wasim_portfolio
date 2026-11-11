import BrandLogo from './BrandLogo'
import SocialLogo from './SocialLogo'
import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import { Arrow } from './Icons'

const links = [['home', 'Home'], ['about', 'About'], ['case-studies', 'Case Studies'], ['services', 'Services'], ['experience', 'Experience'], ['contact', 'Contact']]
export default function Navigation({ page = '/' }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    if (page !== '/') return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-15% 0px -55% 0px' })
    links.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [page])
  useEffect(() => {
    const close = event => { if (event.key === 'Escape') setOpen(false) }
    const closeMenu = () => setOpen(false)
    window.addEventListener('hashchange', closeMenu)
    window.addEventListener('keydown', close)
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('hashchange', closeMenu) }
  }, [])
  return <header className="site-header"><span className="reading-progress" aria-hidden="true" />
    <div className="page-shell nav-inner">
      <BrandLogo onClick={() => setOpen(false)} />
      <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
      <nav id="primary-navigation" aria-label="Main navigation" className={`navigation ${open ? 'is-open' : ''}`}>
        {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={(page === '/' ? active === id : page.startsWith('/case-studies/') ? id === 'case-studies' : page === `/${id}`) ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        <a href={profile.linkedin} className="nav-social" target="_blank" rel="noreferrer"><SocialLogo platform="linkedin" /> LinkedIn <Arrow diagonal /></a>
      </nav>
    </div>
  </header>
}
