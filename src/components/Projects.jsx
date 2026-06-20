import '../styles/Projects.css';
import habitfyImg from '../assets/habitfy.png';

const projects = [
  {
    name: 'MediCare',
    description: 'A full-stack digital healthcare platform inspired by Practo — built collaboratively with React.js, FastAPI and PostgreSQL. Fully deployed and live.',
    tech: ['React', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/healthcare-project-team/healthcare-project',
    live: 'https://healthcare-backend-beige.vercel.app',
    image: null,
  },
  {
    name: 'Habitfy',
    description: 'All-in-one productivity app — habit tracking, finance manager and journal, built with React and Supabase.',
    tech: ['React', 'Vite', 'Supabase'],
    github: 'https://github.com/rajvardhan-here/habitfy',
    live: 'https://habitfy-teal.vercel.app',
    image: habitfyImg,
  },
];

function Projects() {
  return (
    <section id="portfolio" className="projects">
      <p className="section-tag">My Work</p>
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-rail"></div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="hang-wrapper" key={project.name} style={{ animationDelay: `${index * 0.3}s` }}>
            <div className="hang-strings">
              <span></span>
              <span></span>
            </div>
            <div className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  <div className="project-image-placeholder">{project.name}</div>
                )}
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;