import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-logo">Port<span>folio</span></div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className={active === link.id ? 'active' : ''} onClick={() => setActive(link.id)}>
              {link.label}
              {active === link.id && <span className="nav-underline"></span>}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button className="theme-btn" onClick={() => setIsDark(!isDark)}>
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
        <a href="/resume.pdf" download className="btn-view-resume">
          View Resume <FaExternalLinkAlt size={11} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;