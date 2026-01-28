import projects from '../data/projects.json'
import './ProjectGrid.css'

/*
Example
{
    "id": 1,
    "title": "AI Chat Assistant",
    "description": "An intelligent chatbot powered by natural language processing for customer support",
    "fullDescription": "A sophisticated chat assistant that leverages advanced NLP models to provide intelligent customer support. The system can understand context, maintain conversation history, and provide personalized responses.",
    "image": "https://via.placeholder.com/600x400/667eea/ffffff?text=AI+Chat+Assistant",
    "technologies": ["React", "Node.js", "OpenAI API", "MongoDB"],
    "aiImplementation": "Integrated GPT-4 for natural language understanding and response generation. Implemented context-aware conversations with memory management and sentiment analysis.",
    "features": [
      "Natural language processing",
      "Context-aware conversations",
      "Multi-language support",
      "Sentiment analysis",
      "Integration with CRM systems"
    ],
    "demoUrl": "https://example.com/demo"
  }
*/

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
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGrid