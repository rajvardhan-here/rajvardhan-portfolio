import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const links = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];

  return (
    <nav className="navbar">
      <div className="logo">
        Port<span>folio</span>
      </div>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className={activeLink === link ? 'active' : ''} onClick={() => setActiveLink(link)}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="theme-toggle">🌙</button>
        <a href="/resume.pdf" download className="download-btn">Download CV ⬇</a>
      </div>
    </nav>
  );
}

export default Navbar;