import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import heroImg from '../assets/hero.png';
import '../styles/Hero.css';

const roles = ['Full Stack Developer','React Developer','Java DSA Learner','Building in Public'];

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
      } else { timer = setTimeout(() => setTyping(false), 2000); }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0,-1)), 40);
      } else { setRoleIndex((i) => (i+1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-main">
        <div className="hero-left">
          <div className="hero-paint-bg">
            <svg className="paint-svg" viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 180 Q150 110 340 175 Q430 198 490 162" stroke="#cbd5e1" strokeWidth="72" fill="none" strokeLinecap="round" opacity="0.7"/>
              <path d="M10 300 Q130 235 320 295 Q415 318 488 272" stroke="#3b82f6" strokeWidth="78" fill="none" strokeLinecap="round" opacity="0.65"/>
              <path d="M60 430 Q195 385 360 432 Q438 452 492 418" stroke="#f97316" strokeWidth="55" fill="none" strokeLinecap="round" opacity="0.6"/>
              <path d="M170 520 Q255 498 345 522" stroke="#ef4444" strokeWidth="32" fill="none" strokeLinecap="round" opacity="0.72"/>
              <ellipse cx="190" cy="565" rx="8" ry="26" fill="#3b82f6" opacity="0.48"/>
              <ellipse cx="252" cy="578" rx="6" ry="20" fill="#f97316" opacity="0.42"/>
              <ellipse cx="318" cy="566" rx="7" ry="23" fill="#ef4444" opacity="0.42"/>
              <circle cx="62" cy="238" r="10" fill="#f97316" opacity="0.78"/>
              <circle cx="38" cy="258" r="6" fill="#f97316" opacity="0.52"/>
              <circle cx="452" cy="368" r="9" fill="#3b82f6" opacity="0.68"/>
            </svg>
          </div>
          <img src={heroImg} alt="Rajvardhan Singh Chouhan" className="hero-photo" />
        </div>

        <div className="hero-right">
          <div className="hero-this-is">This is <span className="this-is-line"></span></div>
          <h1 className="hero-name">Rajvardhan <span className="name-blue">Singh Chouhan</span></h1>
          <div className="hero-name-underline"></div>
          <p className="hero-subtitle">{displayed}<span className="hero-cursor">|</span></p>
          <div className="hero-divider"></div>
          <p className="hero-desc">I build fast, scalable and user-friendly web applications with clean code and modern technologies. Turning ideas into impactful digital experiences.</p>
          <div className="hero-actions">
            <div className="hero-cta-row">
              <a href="#portfolio" className="btn-view-project">View Project ↗</a>
              <a href="#contact" className="btn-lets-connect">Let's Connect</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/rajvardhan-here" target="_blank" rel="noreferrer" className="social-btn social-github"><FaGithub /></a>
              <a href="https://linkedin.com/in/rajvardhann" target="_blank" rel="noreferrer" className="social-btn social-linkedin"><FaLinkedin /></a>
              <a href="https://x.com/X_rajvardhann" target="_blank" rel="noreferrer" className="social-btn social-twitter"><FaTwitter /></a>
              <a href="mailto:rajvardhansinghchouhan1@gmail.com" className="social-btn social-email"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-bar">
        <div className="hero-mindset">
          <span className="mindset-line"></span>
          <span className="mindset-star">✦</span>
          <span className="mindset-text">It's All about <span className="mindset-accent">Mindset</span></span>
          <span className="mindset-star">✦</span>
          <span className="mindset-line"></span>
        </div>
        <div className="hero-scroll-corner">
          <div className="scroll-mouse"><div className="scroll-dot"></div></div>
          <div className="scroll-arrows"><span></span><span></span></div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" className="wave-path-1"/>
          <path d="M0,50 C360,20 720,65 1080,40 C1260,30 1380,55 1440,50 L1440,70 L0,70 Z" className="wave-path-2"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;