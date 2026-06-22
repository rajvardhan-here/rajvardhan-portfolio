import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Hero.css';

const roles = ['Full Stack Developer', 'React Developer', 'Java DSA Learner', 'Building in Public'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let timer;
    if (typing) {
      if (displayed.length < role.length) {
        timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        timer = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-avatar-wrapper">
        <div className="hero-avatar-glow"></div>
        <svg className="hero-avatar-svg" viewBox="0 0 500 560" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="wc1" x="-40%" y="-40%" width="180%" height="180%">
              <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="2" />
              <feDisplacementMap in="SourceGraphic" scale="28" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="wc2" x="-40%" y="-40%" width="180%" height="180%">
              <feTurbulence type="fractalNoise" baseFrequency="0.042" numOctaves="3" seed="9" />
              <feDisplacementMap in="SourceGraphic" scale="22" xChannelSelector="G" yChannelSelector="B" />
            </filter>
            <filter id="wc3" x="-40%" y="-40%" width="180%" height="180%">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="17" />
              <feDisplacementMap in="SourceGraphic" scale="18" xChannelSelector="R" yChannelSelector="B" />
            </filter>
          </defs>
          <ellipse cx="230" cy="270" rx="175" ry="215" fill="#4C9DB0" opacity="0.32" filter="url(#wc1)" />
          <ellipse cx="320" cy="185" rx="115" ry="135" fill="#7b5ea7" opacity="0.28" filter="url(#wc2)" />
          <ellipse cx="170" cy="390" rx="95" ry="115" fill="#e67e22" opacity="0.18" filter="url(#wc3)" />
          <ellipse cx="330" cy="360" rx="85" ry="95" fill="#27ae60" opacity="0.18" filter="url(#wc2)" />
          <ellipse cx="190" cy="145" rx="75" ry="85" fill="#FFEBAF" opacity="0.22" filter="url(#wc1)" />
          <ellipse cx="155" cy="510" rx="20" ry="38" fill="#4C9DB0" opacity="0.45" />
          <ellipse cx="235" cy="532" rx="13" ry="30" fill="#7b5ea7" opacity="0.38" />
          <ellipse cx="318" cy="518" rx="16" ry="34" fill="#4C9DB0" opacity="0.32" />
          <ellipse cx="378" cy="528" rx="11" ry="24" fill="#FFEBAF" opacity="0.32" />
          <ellipse cx="250" cy="460" rx="110" ry="75" fill="#0d1628" opacity="0.95" />
          <ellipse cx="250" cy="415" rx="90" ry="68" fill="#1a2240" />
          <rect x="228" y="328" width="44" height="55" rx="14" fill="#e8b08a" />
          <circle cx="250" cy="255" r="105" fill="#e8b08a" />
          <path d="M146 238 Q142 122 250 110 Q358 122 354 238 Q345 178 312 165 Q322 200 298 192 Q288 155 268 167 Q260 135 250 148 Q240 135 232 167 Q212 192 202 165 Q178 200 156 192 Z" fill="#1a1a2e" />
          <ellipse cx="146" cy="262" rx="14" ry="19" fill="#e8b08a" />
          <ellipse cx="354" cy="262" rx="14" ry="19" fill="#e8b08a" />
          <circle cx="213" cy="255" r="12" fill="#1a1a2e" />
          <circle cx="287" cy="255" r="12" fill="#1a1a2e" />
          <circle cx="216" cy="251" r="4.5" fill="white" />
          <circle cx="290" cy="251" r="4.5" fill="white" />
          <rect x="192" y="240" width="46" height="29" rx="10" fill="none" stroke="#4C9DB0" strokeWidth="3.5" />
          <rect x="262" y="240" width="46" height="29" rx="10" fill="none" stroke="#4C9DB0" strokeWidth="3.5" />
          <line x1="238" y1="255" x2="262" y2="255" stroke="#4C9DB0" strokeWidth="3.5" />
          <line x1="144" y1="252" x2="192" y2="253" stroke="#4C9DB0" strokeWidth="2.5" />
          <line x1="308" y1="253" x2="356" y2="252" stroke="#4C9DB0" strokeWidth="2.5" />
          <path d="M195 233 Q213 224 231 233" stroke="#1a1a2e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M269 233 Q287 224 305 233" stroke="#1a1a2e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M220 300 Q250 324 280 300" stroke="#1a1a2e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Rajvardhan Singh Chouhan</h1>
        <p className="hero-tagline">
          I am a <span className="hero-role-text">{displayed}<span className="hero-cursor">|</span></span>
        </p>
        <h2 className="hero-heading">Turning Vision Into Reality With Code And Design.</h2>
        <p className="hero-desc">As a dedicated full stack developer, I turn ideas into real web applications. Explore my projects below, showcasing my work in React and full stack development.</p>

        <div className="hero-socials">
          <a href="https://github.com/rajvardhan-here" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/rajvardhann" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/X_rajvardhann" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>

        <div className="hero-buttons">
          <a href="/resume.pdf" download className="btn-resume">Resume ↗</a>
          <a href="#contact" className="btn-contact">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;