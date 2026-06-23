import { FaGithub, FaExternalLinkAlt, FaClock } from 'react-icons/fa';
import habitfyImg from '../assets/habitfy.png';
import '../styles/Projects.css';

const projects = [
  {
    icon: '🌿', iconBg: '#22c55e', name: 'Habitify', subtitle: 'Habit Tracking App', subtitleColor: '#22c55e',
    desc: 'Build better habits, track daily consistency, and visualize personal growth through an intuitive habit tracking experience.',
    image: habitfyImg, live: 'https://habitfy-teal.vercel.app', github: 'https://github.com/rajvardhan-here/habitfy', status: 'live',
  },
  {
    icon: '➕', iconBg: '#3b82f6', name: 'Medicare', subtitle: 'Healthcare Platform', subtitleColor: '#3b82f6',
    desc: 'Smart healthcare platform for appointment booking, patient management, and secure medical report storage.',
    image: null, live: 'https://healthcare-backend-beige.vercel.app', github: 'https://github.com/healthcare-project-team/healthcare-project', status: 'live',
  },
  {
    icon: '🚀', iconBg: '#8b5cf6', name: 'Project 3', subtitle: 'Coming Soon', subtitleColor: '#8b5cf6',
    desc: 'Currently building the next project while continuously learning and improving development skills.',
    image: null, live: null, github: null, status: 'inprogress',
  },
];

const wireHeights = [42, 26, 36];

function handleMouseMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const rx = ((cy - y) / cy) * 10;
  const ry = ((x - cx) / cx) * 10;
  card.style.transition = 'transform 0.12s ease, box-shadow 0.12s ease';
  card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-10px) scale(1.02)`;
  card.style.boxShadow = `${ry * -2}px ${rx * 2}px 40px rgba(79,117,255,0.18), 0 24px 60px rgba(0,0,0,0.12)`;
  card.style.animationPlayState = 'paused';
}

function handleMouseLeave(e) {
  const card = e.currentTarget;
  card.style.transition = 'transform 0.65s cubic-bezier(0.23,1,0.32,1), box-shadow 0.65s ease';
  card.style.transform = '';
  card.style.boxShadow = '';
  setTimeout(() => {
    if (card) {
      card.style.animationPlayState = 'running';
      card.style.transition = '';
    }
  }, 650);
}

function Projects() {
  return (
    <section id="portfolio" className="projects">
      <div className="projects-header">
        <div className="projects-label section-label">Projects</div>
        <h2 className="projects-heading">
          Ideas Turned Into <span className="heading-blue">Real</span> <span className="heading-orange">Applications</span>
        </h2>
        <p className="projects-sub">A collection of projects focused on solving real-world problems through clean design, scalable architecture, and practical development.</p>
      </div>

      <div className="rope-main"></div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="card-hanger" key={proj.name}>
            <div className="hanger-wire" style={{ height: wireHeights[i] + 'px' }}>
              <div className="hanger-clip">
                <svg viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg" width="36" height="52">
                  <rect x="10" y="6" width="20" height="24" rx="3" fill="#555"/>
                  <rect x="14" y="2" width="12" height="7" rx="2" fill="#333"/>
                  <path d="M10 22 Q8 38 15 43 Q20 47 25 43 Q32 38 30 22" fill="#666"/>
                </svg>
              </div>
            </div>

            <div className="project-card" style={{ animationDelay: `${i * 0.5}s` }}
              onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>

              <div className="project-card-header">
                <div className="project-icon" style={{ background: `${proj.iconBg}20`, color: proj.iconBg }}>{proj.icon}</div>
                <div>
                  <h3 className="project-name">{proj.name}</h3>
                  <p className="project-subtitle" style={{ color: proj.subtitleColor }}>{proj.subtitle}</p>
                </div>
              </div>

              <div className="project-screenshot">
                {proj.image ? <img src={proj.image} alt={proj.name}/> : <div className="project-placeholder"><span>{proj.name}</span></div>}
              </div>

              <p className="project-desc">{proj.desc}</p>

              <div className="project-btns">
                {proj.status === 'live' ? (
                  <>
                    <a href={proj.live} target="_blank" rel="noreferrer" className="btn-live">Live Demo <FaExternalLinkAlt size={11}/></a>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="btn-github"><FaGithub/> GitHub</a>
                  </>
                ) : (
                  <span className="btn-inprogress"><FaClock/> In Progress</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;