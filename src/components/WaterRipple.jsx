import { useEffect, useRef } from 'react';
import '../styles/WaterRipple.css';

function WaterRipple() {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let lastTime = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const addRipple = (x, y) => {
      ripplesRef.current.push({ x, y, r: 0, opacity: 0.7, age: 0 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripplesRef.current = ripplesRef.current.filter(r => r.opacity > 0);

      ripplesRef.current.forEach(r => {
        r.r += 2.8;
        r.opacity -= 0.013;
        r.age++;

        for (let ring = 0; ring < 4; ring++) {
          const rr = r.r - ring * 12;
          if (rr <= 0) continue;
          const alpha = r.opacity * (1 - ring * 0.22);
          ctx.beginPath();
          ctx.arc(r.x, r.y, rr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(79,117,255,${alpha.toFixed(2)})`;
          ctx.lineWidth = Math.max(0.5, 1.8 - ring * 0.4);
          ctx.stroke();
        }

        // Center glow
        if (r.age < 8) {
          const grd = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, 12);
          grd.addColorStop(0, `rgba(249,115,22,${(r.opacity * 0.4).toFixed(2)})`);
          grd.addColorStop(1, 'rgba(249,115,22,0)');
          ctx.beginPath();
          ctx.arc(r.x, r.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 55) return;
      lastTime = now;
      addRipple(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="water-canvas" />;
}

export default WaterRipple;