import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import heroImg from '../assets/hero.png';
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
        timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75);
      } else {
        timer = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <div className="hero-paint-bg">
          <svg className="paint-svg" viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 150 Q160 100 320 160 Q400 185 450 150" stroke="#cbd5e1" strokeWidth="60" fill="none" strokeLinecap="round" opacity="0.75" />
            <path d="M30 290 Q140 230 310 285 Q400 310 470 265" stroke="#3b82f6" strokeWidth="70" fill="none" strokeLinecap="round" opacity="0.7" />
            <path d="M80 420 Q200 380 350 425 Q420 445 480 410" stroke="#f97316" strokeWidth="50" fill="none" strokeLinecap="round" opacity="0.65" />
            <path d="M180 510 Q260 490 340 515" stroke="#ef4444" strokeWidth="28" fill="none" strokeLinecap="round" opacity="0.75" />
            <ellipse cx="195" cy="555" rx="7" ry="22" fill="#3b82f6" opacity="0.5" />
            <ellipse cx="258" cy="570" rx="5" ry="18" fill="#f97316" opacity="0.45" />
            <ellipse cx="322" cy="558" rx="6" ry="20" fill="#ef4444" opacity="0.45" />
            <circle cx="78" cy="230" r="9" fill="#f97316" opacity="0.8" />
            <circle cx="55" cy="248" r="6" fill="#f97316" opacity="0.55" />
            <circle cx="445" cy="360" r="8" fill="#3b82f6" opacity="0.7" />
            <circle cx="465" cy="345" r="5" fill="#3b82f6" opacity="0.5" />
            <circle cx="360" cy="510" r="7" fill="#22c55e" opacity="0.65" />
          </svg>
        </div>
        <img src={heroImg} alt="Rajvardhan Singh Chouhan" className="hero-photo" />
      </div>

      <div className="hero-right">
        <div className="hero-this-is">
          This is <span className="this-is-line"></span>
        </div>
        <h1 className="hero-name">
          Rajvardhan <span className="name-blue">Singh Chouhan</span>
        </h1>
        <div className="hero-name-underline"></div>
        <p className="hero-subtitle">
          {displayed}<span className="hero-cursor">|</span>
        </p>
        <div className="hero-divider"></div>
        <p className="hero-desc">
          I build fast, scalable and user-friendly web applications with clean code and modern technologies. Turning ideas into impactful digital experiences.
        </p>

        <div className="hero-actions">
          <a href="#portfolio" className="btn-view-project">View Project ↗</a>
          <a href="#contact" className="btn-lets-connect">Let's Connect</a>
          <div className="hero-socials">
            <a href="https://github.com/rajvardhan-here" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/rajvardhann" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/X_rajvardhann" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="mailto:rajvardhansinghchouhan1@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="hero-tagline">
          <span className="tagline-line"></span>
          <span className="tagline-star">✦</span>
          <span className="tagline-text">It's All about <span className="tagline-accent">Mindset</span></span>
          <span className="tagline-star">✦</span>
          <span className="tagline-line"></span>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-mouse"></div>
          <div className="scroll-arrows">
            <span></span><span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;