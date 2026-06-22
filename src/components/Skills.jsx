import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython, FaCode, FaVideo, FaChalkboardTeacher } from 'react-icons/fa';

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiFigma,
  SiPostman,
  SiBootstrap,
  SiNextdotjs
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

import '../styles/Skills.css';

const topSkills = [
  { icon: <FaHtml5 />, name: 'HTML', color: '#e34f26' },
  { icon: <FaCss3Alt />, name: 'CSS', color: '#1572b6' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#f7df1e', bg: '#333' },
  { icon: <FaReact />, name: 'React', color: '#61dafb' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
  { icon: <SiExpress />, name: 'Express.js', color: '#000000' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
  { icon: <FaGitAlt />, name: 'Git', color: '#f05032' },
];

const bottomSkills = [
  { icon: <FaPython />, name: 'Python', color: '#3776ab' },
  { icon: <FaJava />, name: 'Java', color: '#f89820' },
  { icon: <FaCode />, name: 'DSA', color: '#8b5cf6' },
  { icon: <SiMysql />, name: 'MySQL', color: '#4479a1' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06b6d4' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
  { icon: <SiFigma />, name: 'Figma', color: '#f24e1e' },
];

const specializations = [
  {
    icon: <FaCode />,
    title: 'Full Stack Developer',
    desc: 'Building complete web applications from frontend to backend.',
    color: '#4f75ff'
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Presenter',
    desc: 'Designing impactful presentations that communicate ideas clearly.',
    color: '#f97316'
  },
  {
    icon: <FaVideo />,
    title: 'Video Editor',
    desc: 'Creating engaging videos with smooth transitions and effects.',
    color: '#8b5cf6'
  },
  {
    icon: <FaJava />,
    title: 'Java DSA',
    desc: 'Solving complex problems and building strong logic with Java.',
    color: '#ef4444'
  },
];

function SkillIcon({ icon, name, color }) {
  return (
    <div className="skill-icon-card">
      <div className="skill-icon" style={{ color }}>
        {icon}
      </div>
      <span>{name}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <div className="skills-title-row">
          <span className="skills-line blue-line"></span>
          <span className="skills-star blue">✦</span>
          <h2 className="skills-title">S K I L L S</h2>
          <span className="skills-star orange">✦</span>
          <span className="skills-line orange-line"></span>
        </div>

        <p className="skills-subtitle">
          Technologies | <span className="subtitle-accent">Work With</span>
        </p>
      </div>

      <div className="skills-layout">
        <div className="skills-top-row">
          {topSkills.map((s) => (
            <SkillIcon key={s.name} {...s} />
          ))}
        </div>

        <div className="skills-center-row">
          <div className="skills-side-col">
            {[
              { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06b6d4' },
              { icon: <SiBootstrap />, name: 'Bootstrap', color: '#7952b3' }
            ].map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>

          <div className="skills-center-card">
            {specializations.map((spec) => (
              <div className="spec-item" key={spec.title}>
                <div
                  className="spec-icon-wrap"
                  style={{ background: `${spec.color}20` }}
                >
                  <span style={{ color: spec.color }}>{spec.icon}</span>
                </div>

                <div>
                  <p
                    className="spec-title"
                    style={{ borderColor: spec.color }}
                  >
                    {spec.title}
                  </p>

                  <p className="spec-desc">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-side-col">
            {[
              { icon: <VscVscode />, name: 'VS Code', color: '#007acc' },
              { icon: <SiPostman />, name: 'Postman', color: '#ff6c37' }
            ].map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className="skills-bottom-row">
          {bottomSkills.map((s) => (
            <SkillIcon key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;