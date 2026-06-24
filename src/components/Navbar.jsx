import { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

const SECTIONS = ['home', 'about', 'skills', 'portfolio', 'contact'];

function Navbar() {
  const [active, setActive] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navLinksRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update pill position when active changes
  useEffect(() => {
    const el = itemRefs.current[active];
    const container = navLinksRef.current;

    if (!el || !container) return;

    const eRect = el.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();

    setPillStyle({
      left: eRect.left - cRect.left,
      width: eRect.width,
      opacity: 1,
    });
  }, [active]);

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id);

      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px',
        }
      );

      observer.observe(el);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
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
      <ul className="nav-links" ref={navLinksRef}>
        <div
          className="nav-pill"
          style={{
            left: `${pillStyle.left}px`,
            width: `${pillStyle.width}px`,
            opacity: pillStyle.opacity,
          }}
        />

        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              ref={(el) => (itemRefs.current[link.id] = el)}
              className={active === link.id ? 'active' : ''}
              onClick={() => setActive(link.id)}
            >
              {link.label}
              {active === link.id && (
                <span className="nav-underline"></span>
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          className="theme-btn"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn-view-resume"
        >
          View Resume <FaExternalLinkAlt size={11} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;