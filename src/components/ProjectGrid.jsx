import projects from '../data/projects.json'
import './ProjectGrid.css'

const ProjectGrid = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.length === 0 && (
            <div className="text-center">
              No projects yet
            </div>
          )}

          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGrid