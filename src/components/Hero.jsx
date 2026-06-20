import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import heroImg from '../assets/hero.png';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <img src={heroImg} alt="Rajvardhan" className="hero-image" />
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Rajvardhan</h1>
        <h2 className="hero-role">And I'm a <span>Full Stack Developer</span></h2>
        <p className="hero-desc">B.Tech CSE student building full stack web apps with React and growing backend skills. Currently deep into Java DSA and shipping real projects.</p>

        <div className="hero-socials">
          <a href="https://github.com/rajvardhan-here" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
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