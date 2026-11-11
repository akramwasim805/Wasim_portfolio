export default function ProjectVisual({ project, detailed = false }) {
  return <figure className={`project-visual ${detailed ? 'is-detailed' : ''}`}>
    <div className="project-art" aria-hidden="true">
      <div className="art-topline"><span>{project.company.toUpperCase()} / {project.id === 'enam' ? 'ILLUSTRATIVE WORKFLOW' : 'ILLUSTRATIVE OVERVIEW'}</span><span>{project.number}</span></div>
      <div className="system-flow">{project.diagram.map((node, index) => <div className="flow-part" key={node}><div className={`flow-node ${index === 1 ? 'flow-primary' : ''}`}><span className="node-dot" />{node}</div>{index < project.diagram.length - 1 && <span className="flow-line" />}</div>)}</div>
      {project.metrics.length > 0 && <div className="visual-metrics">{project.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
      <div className="art-bottomline"><span>{project.category}</span><span className="diagram-label">{project.id === 'enam' ? 'Illustrative workflow' : 'Conceptual architecture'}</span></div>
    </div>
    {detailed && <figcaption>{project.caption}</figcaption>}
  </figure>
}
