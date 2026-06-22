import { useEffect, useState } from 'react';
import '../styles/IntroReveal.css';

function IntroReveal() {
  const [animate, setAnimate] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const startTimer = setTimeout(() => setAnimate(true), 600);
    const hideTimer = setTimeout(() => {
      setHide(true);
      document.body.style.overflow = 'auto';
    }, 2000);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;

  return (
    <div className={`intro-overlay ${animate ? 'intro-lift' : ''}`}>
      <div className="intro-hand">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="58" rx="27" ry="30" fill="#e8b08a" />
          <ellipse cx="29" cy="42" rx="9" ry="21" fill="#e8b08a" transform="rotate(-16 29 42)" />
          <ellipse cx="44" cy="30" rx="9" ry="23" fill="#e8b08a" transform="rotate(-5 44 30)" />
          <ellipse cx="60" cy="29" rx="9" ry="23" fill="#e8b08a" transform="rotate(5 60 29)" />
          <ellipse cx="74" cy="38" rx="8" ry="20" fill="#e8b08a" transform="rotate(16 74 38)" />
        </svg>
      </div>
    </div>
  );
}

export default IntroReveal;