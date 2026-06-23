import { useEffect } from 'react';
import '../styles/WaterRipple.css';

function WaterRipple() {
  useEffect(() => {
    let lastTime = 0;
    const THROTTLE = 60;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < THROTTLE) return;
      lastTime = now;

      const dot = document.createElement('span');
      dot.className = 'ripple-dot';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      document.body.appendChild(dot);

      setTimeout(() => { if (dot.parentNode) dot.parentNode.removeChild(dot); }, 900);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

export default WaterRipple;