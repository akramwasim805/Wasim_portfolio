import { education, experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return <section id="experience" className="section-block page-shell">
    <SectionHeading number="05" label="THE JOURNEY" title="Experience that adds up.">From storage infrastructure to agricultural trading, a career spent building and learning.</SectionHeading>
    <div className="experience-list">{experience.map((job, index) => <details className="experience-row" key={job.company} open={index === 0 ? true : undefined}><summary><span className="job-date">{job.date}</span><span className="job-main"><span className="job-role">{job.role}</span><span className="job-company">{job.company} {job.location && <span>· {job.location}</span>}</span></span><span className="expand-icon" aria-hidden="true">+</span></summary><div className="job-detail"><p>{job.detail}</p></div></details>)}</div>
    <div className="education"><p className="eyebrow">THE FOUNDATION</p><div className="grid grid-cols-1 gap-7 md:grid-cols-2">{education.map(item => <div key={item.school}><p className="education-degree">{item.degree} <span className="mono">/ {item.year}</span></p><p className="muted mt-2 text-sm">{item.school}</p></div>)}</div></div>
  </section>
}
