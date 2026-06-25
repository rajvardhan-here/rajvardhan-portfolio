import { FaGithub, FaExternalLinkAlt, FaClock } from 'react-icons/fa';
import habitfyImg from '../assets/habitfy.png';
import medicareImg from '../assets/medicare.png';
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
    image:medicareImg, live:'https://healthcare-backend-beige.vercel.app', github:'https://github.com/healthcare-project-team/healthcare-project', status:'live',
  },
  {
    icon:'🚀', iconBg:'#8b5cf6', name:'Project 3', subtitle:'Coming Soon', subtitleColor:'#8b5cf6',
    desc:'Currently building the next project while continuously learning and improving development skills.',
    image:null, live:null, github:null, status:'inprogress',
  },
];

const wireHeights = [55, 40, 60];

function onMouseMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transition = 'none';
  card.style.transform = `perspective(900px) rotateX(${-y*16}deg) rotateY(${x*16}deg) translateY(-14px) scale(1.04)`;
  card.style.boxShadow = `${x*-28}px ${y*18}px 50px rgba(79,117,255,0.35), 0 0 40px rgba(249,115,22,0.22), 0 28px 55px rgba(0,0,0,0.14)`;
  card.style.filter = 'brightness(1.1)';
}

function onMouseLeave(e) {
  const card = e.currentTarget;
  card.style.transition = 'transform 0.7s cubic-bezier(0.23,1,0.32,1), box-shadow 0.6s ease, filter 0.5s ease';
  card.style.transform = '';
  card.style.boxShadow = '';
  card.style.filter = '';
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

      <div className="rope-wrap">
        <svg className="rope-svg" viewBox="0 0 1600 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50,44 C200,75 450,82 800,85 C1150,82 1400,75 1650,44" stroke="rgba(0,0,0,0.22)" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M-50,34 C200,65 450,72 800,75 C1150,72 1400,65 1650,34" stroke="#5C2E0A" strokeWidth="12" fill="none" strokeLinecap="round"/>
          <path d="M-50,32 C200,63 450,70 800,73 C1150,70 1400,63 1650,32" stroke="#8B4513" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="18 12"/>
          <path d="M-50,36 C200,67 450,74 800,77 C1150,74 1400,67 1650,36" stroke="#A0522D" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="18 12" strokeDashoffset="15"/>
          <path d="M-50,31 C200,62 450,69 800,72 C1150,69 1400,62 1650,31" stroke="rgba(220,160,100,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="7 18" strokeDashoffset="5"/>
          <path d="M-50,37 C200,68 450,75 800,78 C1150,75 1400,68 1650,37" stroke="rgba(40,15,5,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="9 16" strokeDashoffset="9"/>
        </svg>

        <div className="binder-clip" style={{ left:'16%', top:'28px' }}>
          <svg viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg" width="34" height="50">
            <rect x="10" y="6" width="20" height="24" rx="3" fill="#444"/>
            <rect x="14" y="2" width="12" height="7" rx="2" fill="#222"/>
            <path d="M10 22 Q8 38 15 43 Q20 47 25 43 Q32 38 30 22" fill="#555"/>
          </svg>
        </div>
        <div className="binder-clip" style={{ left:'49.5%', top:'38px' }}>
          <svg viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg" width="34" height="50">
            <rect x="10" y="6" width="20" height="24" rx="3" fill="#444"/>
            <rect x="14" y="2" width="12" height="7" rx="2" fill="#222"/>
            <path d="M10 22 Q8 38 15 43 Q20 47 25 43 Q32 38 30 22" fill="#555"/>
          </svg>
        </div>
        <div className="binder-clip" style={{ left:'83%', top:'30px' }}>
          <svg viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg" width="34" height="50">
            <rect x="10" y="6" width="20" height="24" rx="3" fill="#444"/>
            <rect x="14" y="2" width="12" height="7" rx="2" fill="#222"/>
            <path d="M10 22 Q8 38 15 43 Q20 47 25 43 Q32 38 30 22" fill="#555"/>
          </svg>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="card-hanger" key={proj.name}>
            <div className="hanger-wire" style={{ height: wireHeights[i] + 'px' }}></div>
            <div className="project-card" style={{ animationDelay:`${i*0.4}s` }}
              onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
              <div className="project-card-header">
                <div className="project-icon" style={{ background:`${proj.iconBg}22`, color:proj.iconBg }}>{proj.icon}</div>
                <div>
                  <h3 className="project-name">{proj.name}</h3>
                  <p className="project-subtitle" style={{ color:proj.subtitleColor }}>{proj.subtitle}</p>
                </div>
              </div>
              <div className="project-screenshot">
                {proj.image
                  ? <img src={proj.image} alt={proj.name}/>
                  : <div className="project-placeholder"><span>{proj.name}</span></div>
                }
              </div>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-btns">
                {proj.status==='live' ? (
                  <>
                    <a href={proj.live} target="_blank" rel="noreferrer" className="btn-live">Live Demo <FaExternalLinkAlt size={10}/></a>
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