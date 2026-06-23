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
  { name:'Tailwind', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name:'Bootstrap', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
];

const bottomSkills = [
  { name:'Python', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name:'Java', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name:'MySQL', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name:'TypeScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name:'Next.js', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name:'Figma', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name:'VS Code', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name:'Postman', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name:'Firebase', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name:'Linux', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

const specs = [
  { color:'#0891b2', bgColor:'rgba(8,145,178,0.12)', emoji:'</>', title:'Full Stack Developer', desc:'Building complete web applications from frontend to backend.' },
  { color:'#f97316', bgColor:'rgba(249,115,22,0.12)', emoji:'📊', title:'Presenter', desc:'Designing impactful presentations that communicate ideas clearly.' },
  { color:'#8b5cf6', bgColor:'rgba(139,92,246,0.12)', emoji:'🎬', title:'Video Editor', desc:'Creating engaging videos with smooth transitions and effects.' },
  { color:'#ef4444', bgColor:'rgba(239,68,68,0.12)', emoji:'☕', title:'Java DSA', desc:'Solving complex problems and building strong logic with Java.' },
];

function SkillChip({ name, img }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--gx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--gy', `${e.clientY - r.top}px`);
  };
  return (
    <div className="sk-chip" ref={ref} onMouseMove={onMove}>
      <img src={img} alt={name} onError={e => { e.target.style.display='none'; }}/>
      <span>{name}</span>
    </div>
  );
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

      {/* TOP MARQUEE */}
      <div className="sk-marquee-wrap">
        <div className="sk-marquee">
          {[...topSkills, ...topSkills].map((s, i) => <SkillChip key={i} {...s}/>)}
        </div>
      </div>

      {/* CENTER CARD */}
      <div className="sk-center-card">
        <div className="sk-center-inner">
          {specs.map(spec => (
            <div className="spec-item" key={spec.title}>
              <div className="spec-icon-wrap" style={{ background: spec.bgColor }}>
                <span style={{ fontSize: '1.4rem' }}>{spec.emoji}</span>
              </div>
              <div className="spec-text">
                <p className="spec-title" style={{ borderBottomColor: spec.color }}>{spec.title}</p>
                <p className="spec-desc">{spec.desc}</p>
              </div>
            </div>
          ))}
          <div className="center-star">✦</div>
        </div>
      </div>

      {/* BOTTOM MARQUEE (reverse) */}
      <div className="sk-marquee-wrap">
        <div className="sk-marquee sk-marquee-reverse">
          {[...bottomSkills, ...bottomSkills].map((s, i) => <SkillChip key={i} {...s}/>)}
        </div>
      </div>
    </section>
  );
}

export default Skills;