import '../styles/Skills.css';

const topSkills = [
  { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const bottomSkills = [
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'DSA', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'API', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const leftSkills = [
  { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

const rightSkills = [
  { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Postman', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Linux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

const specs = [
  {
    color: '#4f75ff',
    bgColor: 'rgba(79,117,255,0.12)',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <circle cx="20" cy="20" r="20" fill="#4f75ff" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">&lt;/&gt;</text>
      </svg>
    ),
    title: 'Full Stack Developer',
    desc: 'Building complete web applications from frontend to backend.',
  },
  {
    color: '#f97316',
    bgColor: 'rgba(249,115,22,0.12)',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <circle cx="20" cy="20" r="20" fill="#f97316" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18">📊</text>
      </svg>
    ),
    title: 'Presenter',
    desc: 'Designing impactful presentations that communicate ideas clearly.',
  },
  {
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.12)',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <circle cx="20" cy="20" r="20" fill="#8b5cf6" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18">🎬</text>
      </svg>
    ),
    title: 'Video Editor',
    desc: 'Creating engaging videos with smooth transitions and effects.',
  },
  {
    color: '#ef4444',
    bgColor: 'rgba(239,68,68,0.12)',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <circle cx="20" cy="20" r="20" fill="#ef4444" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18">☕</text>
      </svg>
    ),
    title: 'Java DSA',
    desc: 'Solving complex problems and building strong logic with Java.',
  },
];

function SkillBox({ name, img }) {
  return (
    <div className="sk-box">
      <img src={img} alt={name} onError={(e) => { e.target.style.display = 'none'; }} />
      <span>{name}</span>
    </div>
  );
}

function Arrow({ dir = 'right', color = '#4f75ff' }) {
  if (dir === 'right') return (
    <div className="sk-arrow sk-arrow-right">
      <svg width="32" height="12" viewBox="0 0 32 12">
        <line x1="0" y1="6" x2="26" y2="6" stroke={color} strokeWidth="1.5" />
        <polygon points="26,2 32,6 26,10" fill={color} />
      </svg>
    </div>
  );
  if (dir === 'left') return (
    <div className="sk-arrow sk-arrow-left">
      <svg width="32" height="12" viewBox="0 0 32 12">
        <line x1="32" y1="6" x2="6" y2="6" stroke={color} strokeWidth="1.5" />
        <polygon points="6,2 0,6 6,10" fill={color} />
      </svg>
    </div>
  );
  if (dir === 'down') return (
    <div className="sk-arrow sk-arrow-down">
      <svg width="12" height="28" viewBox="0 0 12 28">
        <line x1="6" y1="0" x2="6" y2="22" stroke={color} strokeWidth="1.5" />
        <polygon points="2,22 6,28 10,22" fill={color} />
      </svg>
    </div>
  );
  if (dir === 'up') return (
    <div className="sk-arrow sk-arrow-up">
      <svg width="12" height="28" viewBox="0 0 12 28">
        <line x1="6" y1="28" x2="6" y2="6" stroke={color} strokeWidth="1.5" />
        <polygon points="2,6 6,0 10,6" fill={color} />
      </svg>
    </div>
  );
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
        {/* TOP ROW */}
        <div className="sk-row sk-top-row">
          {topSkills.map((s, i) => (
            <div key={s.name} className="sk-row-item">
              <SkillBox {...s} />
              {i < topSkills.length - 1 && <Arrow dir="right" color="#4f75ff" />}
            </div>
          ))}
        </div>

        {/* MIDDLE ROW: left col + center card + right col */}
        <div className="sk-middle-row">
          {/* Left column */}
          <div className="sk-side-col sk-left-col">
            <div className="sk-corner-arrow sk-corner-tl">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M38 2 L38 38 L2 38" stroke="#4f75ff" strokeWidth="1.5" fill="none" />
                <polygon points="2,34 2,42 10,38" fill="#4f75ff" transform="rotate(90 6 38)" />
              </svg>
            </div>
            {leftSkills.map((s, i) => (
              <div key={s.name} className="sk-col-item">
                <SkillBox {...s} />
                {i < leftSkills.length - 1 && <Arrow dir="down" color="#4f75ff" />}
              </div>
            ))}
            <div className="sk-corner-arrow sk-corner-bl">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M2 2 L38 2 L38 38" stroke="#f97316" strokeWidth="1.5" fill="none" />
                <polygon points="34,38 42,38 38,30" fill="#f97316" />
              </svg>
            </div>
          </div>

          {/* Center card */}
          <div className="sk-center-card">
            <div className="sk-center-inner">
              {specs.map((spec) => (
                <div className="spec-item" key={spec.title}>
                  <div className="spec-icon-wrap" style={{ background: spec.bgColor }}>
                    {spec.icon}
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

          {/* Right column */}
          <div className="sk-side-col sk-right-col">
            <div className="sk-corner-arrow sk-corner-tr">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M2 2 L2 38 L38 38" stroke="#4f75ff" strokeWidth="1.5" fill="none" />
                <polygon points="38,30 46,38 38,46" fill="#f97316" transform="scale(0.5) translate(38,38)" />
              </svg>
            </div>
            {rightSkills.map((s, i) => (
              <div key={s.name} className="sk-col-item">
                <SkillBox {...s} />
                {i < rightSkills.length - 1 && <Arrow dir="down" color="#4f75ff" />}
              </div>
            ))}
            <div className="sk-corner-arrow sk-corner-br">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M38 38 L2 38 L2 2" stroke="#f97316" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="sk-row sk-bottom-row">
          {bottomSkills.map((s, i) => (
            <div key={s.name} className="sk-row-item">
              {i < bottomSkills.length - 1 && i > 0 && <Arrow dir="right" color="#f97316" />}
              {i === 0 && <Arrow dir="right" color="#f97316" />}
              <SkillBox {...s} />
              {i === bottomSkills.length - 1 && <Arrow dir="left" color="#f97316" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;