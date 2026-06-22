import { useEffect, useState } from 'react';
import '../styles/LoadingScreen.css';

const flashes = [
  { top: '50%', left: '10%', delay: '0s' },
  { top: '30%', left: '25%', delay: '0.2s' },
  { top: '60%', left: '40%', delay: '0.4s' },
  { top: '25%', left: '55%', delay: '0.6s' },
  { top: '55%', left: '70%', delay: '0.8s' },
  { top: '35%', left: '85%', delay: '1s' },
];

function LoadingScreen() {
  const [phase, setPhase] = useState('active');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t1 = setTimeout(() => setPhase('fadeout'), 2400);
    const t2 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = 'auto';
    }, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`loading-screen ${phase === 'fadeout' ? 'loading-fadeout' : ''}`}>
      <div className="loading-star">⭐</div>
      {flashes.map((f, i) => (
        <div key={i} className="loading-flash" style={{ top: f.top, left: f.left, animationDelay: f.delay }} />
      ))}
      <div className="loading-ring"></div>
      <p className="loading-text">Loading<span>.</span><span>.</span><span>.</span></p>
    </div>
  );
}

export default LoadingScreen;