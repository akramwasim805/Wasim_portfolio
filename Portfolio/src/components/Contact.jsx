import SocialLogo from './SocialLogo'
import { useState } from 'react'
import { inquiryTypes, profile } from '../data/portfolio'
import SocialLinks from './SocialLinks'
import { Arrow, Download } from './Icons'

export default function Contact({ standalone = false, initialType = '' }) {
  const [type, setType] = useState(inquiryTypes.some(item => item.value === initialType) ? initialType : '')
  const [draft, setDraft] = useState('')
  function prepareEmail(event) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const typeLabel = inquiryTypes.find(item => item.value === type)?.label || 'Project inquiry'
    const body = `Name: ${fields.get('name')}\nWork email: ${fields.get('email')}\nProject type: ${typeLabel}\nDesired timeline: ${fields.get('timeline')}\n\nProject description:\n${fields.get('description')}`
    setDraft(`mailto:${profile.email}?subject=${encodeURIComponent(`${typeLabel} — ${fields.get('name')}`)}&body=${encodeURIComponent(body)}`)
  }
  return <section id="contact" className={`contact-section ${standalone ? 'standalone-contact' : ''}`}><div className="page-shell">
    {standalone && <a href="#home" className="text-link back-link">← Back to home</a>}
    <p className="eyebrow"><span>{standalone ? 'CONTACT' : '06'}</span> / LET’S CONNECT</p>
    <div className="contact-form-layout"><div className="contact-copy">{standalone ? <h1>Have a product to build<br />or a system to <span>improve?</span></h1> : <h2>Have a product to build<br />or a system to <span>improve?</span></h2>}<p>Tell me what you’re working on, where you need help and when you’d like to start. I’m open to technical consulting and projects delivered with my engineering team.</p><div className="contact-actions"><a href={`mailto:${profile.email}`} className="email-link"><span className="email-identity"><SocialLogo platform="email" /><span>{profile.email}</span></span><Arrow diagonal /></a>{profile.whatsapp && <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`} className="email-link whatsapp-link" target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp at ${profile.whatsapp} (opens in a new tab)`}><span className="whatsapp-identity"><SocialLogo platform="whatsapp" /><span>WhatsApp <span className="whatsapp-number">{profile.whatsapp}</span></span></span><Arrow diagonal /></a>}<a href={profile.resume} download className="text-link contact-resume">Download résumé <Download /></a><SocialLinks /></div></div>
    <form className="inquiry-form" onSubmit={prepareEmail} onChange={() => setDraft('')}>
      <div className="form-row"><div><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></div><div><label htmlFor="contact-email">Work email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={150} placeholder="you@company.com" /></div></div>
      <div><label htmlFor="project-type">Project type</label><select id="project-type" name="type" value={type} onChange={event => setType(event.target.value)} required><option value="" disabled>Select a project type</option>{inquiryTypes.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}</select></div>
      <div><label htmlFor="project-description">Project description</label><textarea id="project-description" name="description" rows={4} maxLength={2000} required placeholder="What are you working on, and where do you need help?" /></div>
      <div><label htmlFor="project-timeline">Desired timeline</label><select id="project-timeline" name="timeline" required defaultValue=""><option value="" disabled>When would you like to start?</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just exploring</option></select></div>
      <p className="form-note" id="email-draft-note">This form prepares an email draft. Review and send it in your email app; nothing is submitted here.</p>
      <button className="button button-primary" type="submit" aria-describedby="email-draft-note">Prepare email <Arrow /></button>
      <div className="draft-status" aria-live="polite">{draft && <><p>Your email draft is ready. Open your email app to review and send it.</p><a href={draft} className="text-link">Open email app <Arrow diagonal /></a></>}</div>
    </form></div>
  </div></section>
}
