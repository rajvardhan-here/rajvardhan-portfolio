import '../styles/Skills.css';

const skillsData = {
  Frontend: ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  'Programming Languages': ['Java', 'JavaScript'],
  'Tools & Technologies': ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render', 'Premiere Pro'],
  'Currently Learning': ['Node.js & Express', 'MongoDB / PostgreSQL', 'Python'],
};

function randomStyle(index) {
  const x = (Math.random() * 50 - 25).toFixed(0);
  const rot = (Math.random() * 24 - 12).toFixed(0);
  return {
    '--fall-x': `${x}px`,
    '--fall-rot': `${rot}deg`,
    animationDelay: `${index * 0.07}s`,
  };
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="section-tag">My Skills</p>
      <h2 className="skills-heading">Tools I Build With</h2>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>
            <div className="skill-tags">
              {items.map((item, i) => (
                <span className="skill-tag" key={item} style={randomStyle(i)}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;