import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-avatar-wrapper">
        <div className="hero-avatar-glow"></div>
        <div className="hero-avatar-drip"></div>
        <svg className="hero-avatar-svg" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 500 Q80 320 200 300 Q320 320 320 500 Z" fill="#1f2740" />
          <path d="M140 320 Q200 285 260 320 L258 365 Q200 345 142 365 Z" fill="#16203a" />
          <rect x="170" y="258" width="60" height="55" rx="22" fill="#e8b08a" />
          <circle cx="200" cy="195" r="92" fill="#e8b08a" />
          <path d="M108 175 Q98 82 200 72 Q302 82 292 175 Q292 132 250 122 Q262 154 230 144 Q220 112 200 122 Q190 144 168 138 Q174 160 148 154 Q138 170 108 175 Z" fill="#262b38" />
          <circle cx="110" cy="200" r="14" fill="#e8b08a" />
          <circle cx="290" cy="200" r="14" fill="#e8b08a" />
          <circle cx="165" cy="195" r="7" fill="#161616" />
          <circle cx="235" cy="195" r="7" fill="#161616" />
          <path d="M148 173 Q165 165 182 173" stroke="#262b38" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M218 173 Q235 165 252 173" stroke="#262b38" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M168 232 Q200 254 232 232" stroke="#161616" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M200 320 L200 480" stroke="#4C9DB0" strokeWidth="5" strokeDasharray="2 7" />
          <rect x="128" y="426" width="144" height="9" rx="3" fill="#4C9DB0" />
          <path d="M150 426 L160 376 L240 376 L250 426 Z" fill="#0a0e1a" stroke="#4C9DB0" strokeWidth="3" />
        </svg>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Rajvardhan</h1>
        <h2 className="hero-role">And I'm a <span>Full Stack Developer</span></h2>
        <p className="hero-desc">B.Tech CSE student building full stack web apps with React and growing backend skills. Currently deep into Java DSA and shipping real projects.</p>

        <div className="hero-socials">
          <a href="https://github.com/rajvardhan-here" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/rajvardhann" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/X_rajvardhann" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary">Hire Me</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;