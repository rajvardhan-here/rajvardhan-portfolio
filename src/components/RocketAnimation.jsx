import { useEffect, useState } from 'react';
import '../styles/RocketAnimation.css';

function RocketAnimation() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const spawn = () => {
      const id = Date.now() + Math.random();
      const fromTop = Math.random() > 0.5;
      const yPos = Math.random() * 70 + 10;
      const diagonal = Math.random() > 0.6;
      setRockets(prev => [...prev, { id, yPos, fromTop, diagonal }]);
      setTimeout(() => setRockets(prev => prev.filter(r => r.id !== id)), 9000);
    };

    const t1 = setTimeout(spawn, 1500);
    const interval = setInterval(spawn, 14000);
    return () => { clearTimeout(t1); clearInterval(interval); };
  }, []);

  return (
    <div className="rocket-layer" aria-hidden="true">
      {rockets.map(r => (
        <div key={r.id} className={`rocket-item ${r.diagonal ? 'diagonal' : 'straight'}`}
          style={{ top: `${r.yPos}%` }}>
          <div className="rocket-emoji">🚀</div>
          <div className="rocket-trail">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RocketAnimation;