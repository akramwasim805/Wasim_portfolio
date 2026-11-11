import { inquiryTypes, profile, services } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { Arrow } from './Icons'

export default function Services({ standalone = false }) {
  return <section id="services" className={`section-block page-shell services-section ${standalone ? 'standalone-section' : ''}`}>
    {standalone && <a href="#home" className="text-link back-link">← Back to home</a>}
    {standalone ? <div className="section-heading"><p className="eyebrow">SERVICES</p><h1>Work with me and<br /><span>my engineering team.</span></h1><p className="section-intro">From the first product decision to launch and beyond, let’s scope the work around what your business needs.</p></div> : <SectionHeading number="03" label="SERVICES" title="Work with me and my engineering team.">Practical delivery for new products, existing systems and the workflows in between.</SectionHeading>}
    <div className="services-grid">{services.map((service, index) => <article key={service.title} className="service-card"><span className="mono service-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><a href={`#/contact?type=${service.type}`} className="text-link" aria-label={`Discuss ${service.title}`}>Discuss your project <Arrow diagonal /></a></article>)}</div>
    {profile.teamPhoto && <figure className="team-photo"><img src={profile.teamPhoto} alt="Wasim and his engineering team" loading="lazy" decoding="async" width="1160" height="650" /></figure>}
    <div className="inquiry-paths"><p className="eyebrow">WHERE WOULD YOU LIKE TO START?</p><div>{inquiryTypes.map(type => <a key={type.value} href={`#/contact?type=${type.value}`}><span><strong>{type.label}</strong><span>{type.description}</span></span><Arrow diagonal /></a>)}</div></div>
    {!standalone && <a href="#/services" className="text-link services-page-link">Explore services <Arrow /></a>}
  </section>
}
