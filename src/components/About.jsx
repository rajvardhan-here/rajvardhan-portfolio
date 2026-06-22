import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaUsers, FaLightbulb } from 'react-icons/fa';
import aboutImg from '../assets/about-char.png';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <div className="about-label section-label">About Me</div>
        <h2 className="about-heading">Who I <span className="heading-blue">Am</span></h2>
        <div className="about-heading-line"></div>

        <p className="about-name">
          Rajvardhan <span className="name-orange">Singh Chouhan</span>
        </p>
        <p className="about-role">
          B.Tech CSE Student | <span className="role-blue">Full Stack Developer</span>
        </p>

        <p className="about-para">
          I'm a Computer Science student at Medi-Caps University with a strong interest in Full Stack Development and Java DSA.
        </p>
        <p className="about-para">
          I enjoy building real-world projects, improving problem-solving skills, and exploring modern technologies to create impactful digital experiences.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <FaUsers className="about-card-icon" />
            <div>
              <p className="about-card-title">Communication</p>
              <p className="about-card-sub">Public Speaking &amp; Team Collaboration</p>
            </div>
          </div>
          <div className="about-card">
            <FaLightbulb className="about-card-icon" />
            <div>
              <p className="about-card-title">Mindset</p>
              <p className="about-card-sub">1% Better Every Day</p>
            </div>
          </div>
        </div>

        <a href="#portfolio" className="btn-view-projects">View Projects ↗</a>

        <div className="about-info-bar">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <p className="info-label">Email</p>
              <p className="info-value">rajvardhansinghchouhan1@gmail.com</p>
            </div>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">Indore, India</p>
            </div>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <FaBriefcase className="info-icon" />
            <div>
              <p className="info-label">Experience</p>
              <p className="info-value">1+ Year</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="about-img-glow"></div>
        <img src={aboutImg} alt="About Rajvardhan" className="about-img" />
      </div>
    </section>
  );
}

export default About;