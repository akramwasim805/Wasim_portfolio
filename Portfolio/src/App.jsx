import EngineeringScene from './components/EngineeringScene'
import useScrollReveal from './hooks/useScrollReveal'
import BrandLogo from './components/BrandLogo'
import { useEffect, useRef, useState } from 'react'
import Navigation from './components/Navigation'
import SectionHeading from './components/SectionHeading'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import CaseStudy from './components/CaseStudy'
import SocialLinks from './components/SocialLinks'
import { Arrow, Download } from './components/Icons'
import { profile, projects, proofPoints } from './data/portfolio'
import './App.css'

function Hero() {
  return <section id="home" className="hero page-shell">
    <div className="hero-top"><p className="eyebrow"><span className="accent-line" /> BACKEND ENGINEERING & DISTRIBUTED SYSTEMS</p><span className="hero-location">{profile.location}</span></div>
    <div className="hero-layout"><div className="hero-copy"><p className="hero-name">Wasim Akram / Technical Lead</p><h1>Reliable systems.<br /><span>From idea to impact.</span></h1><p className="hero-introduction">{profile.introduction}</p><div className="hero-actions"><a href="#case-studies" className="button button-primary">View case studies <Arrow /></a><a href="#/contact" className="button button-secondary">Discuss a project <Arrow diagonal /></a></div><SocialLinks /></div>
    <EngineeringScene /></div>
    <div className="hero-bottom proof-points">{proofPoints.map(point => <div className="hero-stat" key={point.value}><strong>{point.value}</strong><span>{point.caption}</span></div>)}</div>
  </section>
}

function About() {
  return <section id="about" className="section-block page-shell about-layout"><SectionHeading number="01" label="ABOUT ME" title={<>Close to the code.<br />Focused on the team.</>} /><div className="about-copy"><p className="about-lead">I’m a technical lead who stays close to the code.</p><p>My work includes designing APIs and event-driven systems, improving delivery pipelines, investigating production issues and helping engineers make architectural decisions.</p><p>At Akalinfo, I lead technical delivery across core eNAM agricultural trading workflows, including weighment, trade agreements, sale bills, payment status and transit permits. Previously, I worked on travel operations at Agoda, patient services at HealthPlix, platform modernization at Flyhomes, campaign automation at MoEngage and driver-facing services at Ola.</p><p>I hold a Master of Computer Applications from IIT Roorkee. I’m available to discuss technical leadership, backend modernization and software projects that my team can deliver from development through launch.</p><a className="text-link resume-link" href={profile.resume} download>Download résumé <Download /></a></div></section>
}

function Homepage() {
  return <><Hero /><div className="company-strip"><div className="page-shell company-inner"><p className="eyebrow">WHERE I’VE BUILT</p><div className="company-names"><span>Akalinfo</span><span>Agoda</span><span>HealthPlix</span><span>flyhomes</span><span>MoEngage</span><span className="ola-wordmark">OLA</span><span>Veritas</span></div></div></div><About /><Projects /><Services /><Skills /><Experience /><Contact /></>
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const main = useRef(null)
  const path = hash.startsWith('#/') ? hash.slice(1).split('?')[0] : '/'
  const routeKey = path === '/contact' ? hash : path
  useScrollReveal(main, routeKey)
  const previousRoute = useRef(routeKey)
  const project = path.startsWith('/case-studies/') ? projects.find(item => item.id === path.slice('/case-studies/'.length)) : null
  const title = project ? `${project.company} Case Study — Wasim Akram` : path === '/services' ? 'Engineering Services — Wasim Akram' : path === '/contact' ? 'Discuss a Project — Wasim Akram' : 'Wasim Akram — Technical Lead & Backend Engineering'
  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => {
    document.title = title
    const description = project?.summary || 'Technical lead with 13+ years of experience. Backend engineering, distributed systems, modernization and product delivery with my engineering team.'
    document.querySelector('meta[name="description"]').setAttribute('content', description)
    document.querySelector('meta[property="og:title"]').setAttribute('content', title)
    document.querySelector('meta[property="og:description"]').setAttribute('content', description)
  }, [title, project])
  useEffect(() => {
    if (previousRoute.current !== routeKey) {
      main.current?.focus({ preventScroll: true })
      if (path === '/') {
        const target = document.getElementById(window.location.hash.slice(1))
        if (target) target.scrollIntoView({ behavior: 'instant' })
        else window.scrollTo(0, 0)
      } else window.scrollTo(0, 0)
      previousRoute.current = routeKey
    }
  }, [routeKey, path])
  let content
  if (path === '/') content = <Homepage />
  else if (project) content = <CaseStudy project={project} />
  else if (path === '/services') content = <Services standalone />
  else if (path === '/contact') content = <Contact key={hash} standalone initialType={new URLSearchParams(hash.split('?')[1] || '').get('type') || ''} />
  else content = <section className="page-shell section-block not-found"><p className="eyebrow">PAGE NOT FOUND</p><h1>Let’s get you back.</h1><a href="#home" className="button button-primary">Back to home <Arrow /></a></section>
  return <><a href="#main" className="skip-link" onClick={event => { event.preventDefault(); main.current?.focus(); main.current?.scrollIntoView() }}>Skip to content</a><Navigation page={path} /><main id="main" tabIndex={-1} ref={main}><div key={routeKey} className="page-transition">{content}</div></main><footer className="page-shell footer"><BrandLogo /><p>© {new Date().getFullYear()} {profile.name}</p><div className="footer-right"><SocialLinks /><a className="back-to-top" onClick={event => { if (path !== '/') { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } }} href={path === '/' ? '#home' : '#main'} aria-label="Back to top">↑</a></div></footer></>
}
