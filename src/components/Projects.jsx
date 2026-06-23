import { FaGithub, FaExternalLinkAlt, FaClock } from 'react-icons/fa';
import habitfyImg from '../assets/habitfy.png';
import '../styles/Projects.css';

const projects = [
  {
    icon:'🌿', iconBg:'#22c55e', name:'Habitify', subtitle:'Habit Tracking App', subtitleColor:'#22c55e',
    desc:'Build better habits, track daily consistency, and visualize personal growth through an intuitive habit tracking experience.',
    image:habitfyImg, live:'https://habitfy-teal.vercel.app', github:'https://github.com/rajvardhan-here/habitfy', status:'live',
  },
  {
    icon:'➕', iconBg:'#3b82f6', name:'Medicare', subtitle:'Healthcare Platform', subtitleColor:'#3b82f6',
    desc:'Smart healthcare platform for appointment booking, patient management, and secure medical report storage.',
    image:null, live:'https://healthcare-backend-beige.vercel.app', github:'https://github.com/healthcare-project-team/healthcare-project', status:'live',
  },
  {
    icon:'🚀', iconBg:'#8b5cf6', name:'Project 3', subtitle:'Coming Soon', subtitleColor:'#8b5cf6',
    desc:'Currently building the next project while continuously learning and improving development skills.',
    image:null, live:null, github:null, status:'inprogress',
  },
];

// Staggered offsets: left card slightly lower, middle highest, right middle
const hangOffsets = [18, 0, 12]; // margin-top from rope
const clipPositions = ['17%','50%','83%'];

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

      <div className="rope-container">
        <div className="rope"></div>
        {clipPositions.map((pos,i) => (
          <div key={i} className="binder-clip" style={{ left:pos }}>
            <svg viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg" width="40" height="52">
              <rect x="10" y="6" width="20" height="24" rx="3" fill="#555"/>
              <rect x="14" y="2" width="12" height="7" rx="2" fill="#333"/>
              <path d="M10 22 Q8 38 15 43 Q20 47 25 43 Q32 38 30 22" fill="#666"/>
            </svg>
          </div>
        ))}
      </div>

      <div className="projects-grid">
        {projects.map((proj,i) => (
          <div className="project-card" key={proj.name} style={{ marginTop:`${hangOffsets[i]}px`, animationDelay:`${i*0.9}s` }}>
            <div className="project-card-header">
              <div className="project-icon" style={{ background:`${proj.iconBg}20`, color:proj.iconBg }}>{proj.icon}</div>
              <div>
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-subtitle" style={{ color:proj.subtitleColor }}>{proj.subtitle}</p>
              </div>
            </div>
            <div className="project-screenshot">
              {proj.image ? <img src={proj.image} alt={proj.name}/> : <div className="project-placeholder"><span>{proj.name}</span></div>}
            </div>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-btns">
              {proj.status==='live' ? (
                <>
                  <a href={proj.live} target="_blank" rel="noreferrer" className="btn-live">Live Demo <FaExternalLinkAlt size={11}/></a>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn-github"><FaGithub/> GitHub</a>
                </>
              ) : (
                <span className="btn-inprogress"><FaClock/> In Progress</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;