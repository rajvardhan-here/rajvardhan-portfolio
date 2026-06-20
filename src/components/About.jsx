import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import heroImg from '../assets/hero.png';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-image-wrapper">
        <img src={heroImg} alt="Rajvardhan Singh Chouhan" className="about-image" />
      </div>

      <div className="about-content">
        <p className="section-tag">About Me</p>
        <h2 className="about-heading">Building Real Products, One Line Of Code At A Time.</h2>

        <p className="about-text">I'm a B.Tech CSE student at Medi-Caps University, Indore (2023–2027), building real-world full stack projects with React on the frontend and Java for backend logic and problem-solving.</p>
        <p className="about-text">I believe in building in public — shipping projects like MediCare and Habitfy while sharpening my fundamentals through daily Data Structures & Algorithms practice in Java.</p>

        <ul className="about-facts">
          <li><span>Education</span>B.Tech CSE, Medi-Caps University, Indore</li>
          <li><span>Focus</span>Full Stack Development + Java DSA</li>
          <li><span>Status</span>Open for internships & freelance full stack work</li>
        </ul>

        <div className="about-socials">
          <a href="https://github.com/rajvardhan-here" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/rajvardhann" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/X_rajvardhann" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="mailto:rajvardhansinghchouhan1@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
}

export default About;