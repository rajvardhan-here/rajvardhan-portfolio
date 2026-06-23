import { useEffect, useState } from 'react';
import '../styles/LoadingScreen.css';

const WORDS = ["It's", "All", "About", "Mindset"];

function LoadingScreen() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [phase, setPhase] = useState('words'); // words → full → explode → done

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timers = [];
    WORDS.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), 400 + i * 550));
    });

    // Full sentence glows
    timers.push(setTimeout(() => setPhase('full'), 400 + WORDS.length * 550 + 300));
    // Explosion
    timers.push(setTimeout(() => setPhase('explode'), 400 + WORDS.length * 550 + 1100));
    // Done
    timers.push(setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = 'auto';
    }, 400 + WORDS.length * 550 + 2000));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`ls-overlay ${phase === 'explode' ? 'ls-exploding' : ''}`}>
      <div className="ls-particles">
        {[...Array(20)].map((_, i) => <span key={i} className="ls-particle" style={{ '--i': i }}></span>)}
      </div>
      <div className={`ls-words-wrap ${phase === 'full' ? 'ls-full' : ''} ${phase === 'explode' ? 'ls-explode-text' : ''}`}>
        {WORDS.map((word, i) => (
          <span key={word} className={`ls-word ${i < visibleCount ? 'ls-word-visible' : ''} ${word === 'Mindset' ? 'ls-word-key' : ''}`}
            style={{ '--delay': `${i * 0.05}s` }}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;