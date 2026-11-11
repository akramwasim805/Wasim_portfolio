import { useState } from 'react'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const [query, setQuery] = useState('')
  const filtered = skills.map(group => ({ ...group, items: group.items.filter(item => `${group.name} ${item}`.toLowerCase().includes(query.trim().toLowerCase())) })).filter(group => group.items.length)
  return <section className="section-block page-shell" aria-labelledby="skills-title">
    <div className="section-top"><div id="skills-title"><SectionHeading number="04" label="TOOLKIT" title="The right tool for the problem.">From frontend and backend systems to cloud, AI and automation — a toolkit for building and improving products.</SectionHeading></div><div className="skill-search"><label htmlFor="skill-search">Find a skill</label><input id="skill-search" type="search" placeholder="Try React, RAG or GCP…" value={query} onChange={event => setQuery(event.target.value)} /></div></div>
    <div className="skills-grid">{filtered.map(group => <div className="skill-group" key={group.name}><span className="mono muted text-xs">{String(skills.findIndex(item => item.name === group.name) + 1).padStart(2, '0')}</span><h3>{group.name}</h3><div className="flex flex-wrap gap-2">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div>
    <p className={filtered.length ? 'sr-only' : 'empty-state'} role="status">{filtered.length ? `${filtered.reduce((count, group) => count + group.items.length, 0)} matching skills` : `No skills match “${query}”. Try another search.`}</p>
  </section>
}
