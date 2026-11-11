import { projects } from '../data/portfolio'
import ProjectVisual from './ProjectVisual'
import { Arrow } from './Icons'

export default function CaseStudy({ project }) {
  const next = projects[(projects.findIndex(item => item.id === project.id) + 1) % projects.length]
  return <article className="case-study-page page-shell">
    <a href="#case-studies" className="text-link back-link">← All case studies</a>
    <header className="case-study-header"><p className="eyebrow">{project.company} / EMPLOYMENT PROJECT</p><h1>{project.title}</h1><p className="case-study-summary">{project.summary}</p><div className="flex flex-wrap gap-2">{project.technologies.map(tech => <span className="tag" key={tech}>{tech}</span>)}</div></header>
    <ProjectVisual project={project} detailed />
    <div className="case-study-body"><div><p className="eyebrow">THE CONTEXT</p><h2>Challenge</h2><p>{project.challenge}</p></div><div><p className="eyebrow">MY CONTRIBUTION</p><h2>My role</h2><p>{project.role}</p></div><div><p className="eyebrow">THE WORK</p><h2>What I did</h2><ul>{project.actions.map(action => <li key={action}>{action}</li>)}</ul></div><div className="case-study-result"><p className="eyebrow">THE OUTCOME</p><h2>Result</h2><p>{project.result}</p></div></div>
    <div className="case-study-bottom"><a className="text-link" href={`#/case-studies/${next.id}`}>Next: {next.company} <Arrow /></a><a className="button button-primary" href="#/contact">Discuss a similar challenge <Arrow diagonal /></a></div>
  </article>
}
