import { useRef } from 'react';
import '../styles/Skills.css';

const topSkills = [
  { name:'HTML', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name:'CSS', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name:'JavaScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name:'React', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name:'Node.js', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name:'Express.js', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name:'MongoDB', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name:'Git', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];
const bottomSkills = [
  { name:'Python', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name:'Java', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name:'DSA', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name:'MySQL', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name:'API', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name:'TypeScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name:'Next.js', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name:'Figma', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];
const leftSkills = [
  { name:'Tailwind', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name:'Bootstrap', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name:'Firebase', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];
const rightSkills = [
  { name:'VS Code', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name:'Postman', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name:'Linux', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];
const specs = [
  { color:'#4f75ff', bgColor:'rgba(79,117,255,0.12)', emoji:'</>', title:'Full Stack Developer', desc:'Building complete web applications from frontend to backend.' },
  { color:'#f97316', bgColor:'rgba(249,115,22,0.12)', emoji:'📊', title:'Presenter', desc:'Designing impactful presentations that communicate ideas clearly.' },
  { color:'#8b5cf6', bgColor:'rgba(139,92,246,0.12)', emoji:'🎬', title:'Video Editor', desc:'Creating engaging videos with smooth transitions and effects.' },
  { color:'#ef4444', bgColor:'rgba(239,68,68,0.12)', emoji:'☕', title:'Java DSA', desc:'Solving complex problems and building strong logic with Java.' },
];

function SkillBox({ name, img }) {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--gx', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--gy', `${e.clientY - rect.top}px`);
  };
  return (
    <div className="sk-box" ref={ref} onMouseMove={handleMouseMove}>
      <img src={img} alt={name} onError={(e) => { e.target.style.display='none'; }} />
      <span>{name}</span>
    </div>
  );
}

function Arrow({ dir='right', color='#4f75ff' }) {
  if (dir==='right') return <div className="sk-arrow sk-arrow-right"><svg width="28" height="12" viewBox="0 0 28 12"><line x1="0" y1="6" x2="22" y2="6" stroke={color} strokeWidth="1.5"/><polygon points="22,2 28,6 22,10" fill={color}/></svg></div>;
  if (dir==='left') return <div className="sk-arrow sk-arrow-left"><svg width="28" height="12" viewBox="0 0 28 12"><line x1="28" y1="6" x2="6" y2="6" stroke={color} strokeWidth="1.5"/><polygon points="6,2 0,6 6,10" fill={color}/></svg></div>;
  if (dir==='down') return <div className="sk-arrow sk-arrow-down"><svg width="12" height="24" viewBox="0 0 12 24"><line x1="6" y1="0" x2="6" y2="18" stroke={color} strokeWidth="1.5"/><polygon points="2,18 6,24 10,18" fill={color}/></svg></div>;
  return null;
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <div className="skills-title-row">
          <span className="sk-line sk-line-blue"></span>
          <span className="sk-star sk-star-blue">✦</span>
          <h2 className="skills-title">S K I L L S</h2>
          <span className="sk-star sk-star-orange">✦</span>
          <span className="sk-line sk-line-orange"></span>
        </div>
        <p className="skills-subtitle">Technologies | <span className="subtitle-accent">Work With</span></p>
      </div>

      <div className="skills-circuit">
        <div className="sk-row sk-top-row">
          {topSkills.map((s,i) => (
            <div key={s.name} className="sk-row-item">
              <SkillBox {...s} />
              {i < topSkills.length-1 && <Arrow dir="right" color="#4f75ff"/>}
            </div>
          ))}
        </div>

        <div className="sk-middle-row">
          <div className="sk-side-col sk-left-col">
            <div className="sk-corner-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M34 2 L34 34 L2 34" stroke="#4f75ff" strokeWidth="1.5" fill="none"/><polygon points="2,30 2,38 10,34" fill="#4f75ff" transform="rotate(90 6 34)"/></svg></div>
            {leftSkills.map((s,i) => <div key={s.name} className="sk-col-item"><SkillBox {...s}/>{i < leftSkills.length-1 && <Arrow dir="down" color="#4f75ff"/>}</div>)}
            <div className="sk-corner-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M2 2 L34 2 L34 34" stroke="#f97316" strokeWidth="1.5" fill="none"/><polygon points="30,34 38,34 34,26" fill="#f97316"/></svg></div>
          </div>

          <div className="sk-center-card">
            <div className="sk-center-inner">
              {specs.map((spec) => (
                <div className="spec-item" key={spec.title}>
                  <div className="spec-icon-wrap" style={{ background:spec.bgColor }}>
                    <span style={{ fontSize:'1.4rem' }}>{spec.emoji}</span>
                  </div>
                  <div className="spec-text">
                    <p className="spec-title" style={{ borderBottomColor:spec.color }}>{spec.title}</p>
                    <p className="spec-desc">{spec.desc}</p>
                  </div>
                </div>
              ))}
              <div className="center-star">✦</div>
            </div>
          </div>

          <div className="sk-side-col sk-right-col">
            <div className="sk-corner-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M2 2 L2 34 L34 34" stroke="#4f75ff" strokeWidth="1.5" fill="none"/></svg></div>
            {rightSkills.map((s,i) => <div key={s.name} className="sk-col-item"><SkillBox {...s}/>{i < rightSkills.length-1 && <Arrow dir="down" color="#4f75ff"/>}</div>)}
            <div className="sk-corner-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M34 34 L2 34 L2 2" stroke="#f97316" strokeWidth="1.5" fill="none"/></svg></div>
          </div>
        </div>

        <div className="sk-row sk-bottom-row">
          {bottomSkills.map((s,i) => (
            <div key={s.name} className="sk-row-item">
              {i===0 && <Arrow dir="right" color="#f97316"/>}
              {i>0 && i < bottomSkills.length-1 && <Arrow dir="right" color="#f97316"/>}
              <SkillBox {...s}/>
              {i===bottomSkills.length-1 && <Arrow dir="left" color="#f97316"/>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;