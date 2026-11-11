import { useState } from 'react'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import ProjectVisual from './ProjectVisual'
import { Arrow } from './Icons'

function ProjectCard({ project }) {
  return <article className="project-card">
    <ProjectVisual project={project} />
    <div className="project-content"><p className="project-company">{project.company} <span> / Employment project</span></p><h3><a href={`#/case-studies/${project.id}`}>{project.title}</a></h3><p className="muted">{project.summary}</p><p className="project-impact">{project.impact}</p>
      <div className="flex flex-wrap gap-2">{project.technologies.map(tech => <span className="tag" key={tech}>{tech}</span>)}</div>
      <a className="case-study-link text-link" href={`#/case-studies/${project.id}`} aria-label={`Read ${project.company} case study`}>Read case study <Arrow diagonal /></a>
      {project.demo && <div className="flex flex-wrap gap-5 pt-5"><a href={project.demo} target="_blank" rel="noreferrer" className="text-link">Live demo <Arrow diagonal /></a></div>}
    </div>
  </article>
}
export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [filter, setFilter] = useState('All work')
  const filters = ['All work', ...new Set(projects.map(project => project.category))]
  const visible = projects.filter(project => (showAll || filter !== 'All work' || project.featured) && (filter === 'All work' || project.category === filter))
  return <section id="case-studies" className="section-block page-shell">
    <div className="section-top"><SectionHeading number="02" label="CASE STUDIES" title="Different challenges. Tangible outcomes.">Performance, technical ownership and scale: a closer look at work completed during employment.</SectionHeading><span className="side-note">SELECTED ENGINEERING WORK</span></div>
    <div className="project-filters" role="group" aria-label="Filter case studies">{filters.map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
    <p className="sr-only" role="status">Showing {visible.length} case studies</p>
    <div className="case-study-grid">{visible.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    {filter === 'All work' && <button className="button button-secondary more-work" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show featured studies' : 'View all case studies'} <span aria-hidden="true">{showAll ? '−' : '+'}</span></button>}
    <p className="project-note">Work completed during employment at the named companies. Visuals are illustrative.</p>
  </section>
}
