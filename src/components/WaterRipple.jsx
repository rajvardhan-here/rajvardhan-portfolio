import { useEffect, useRef } from 'react';
import '../styles/WaterRipple.css';

function WaterRipple() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, GW, GH;
    let buf1, buf2;
    let rafId, lastMove = 0;
    let offCanvas, offCtx;

    const init = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      GW = Math.floor(W / 5);
      GH = Math.floor(H / 5);
      buf1 = new Float32Array(GW * GH);
      buf2 = new Float32Array(GW * GH);
      offCanvas = document.createElement('canvas');
      offCanvas.width = GW;
      offCanvas.height = GH;
      offCtx = offCanvas.getContext('2d');
    };

    const disturb = (px, py) => {
      const gx = Math.floor(px / 5);
      const gy = Math.floor(py / 5);
      const r = 4;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (dx*dx + dy*dy <= r*r) {
            const nx = gx + dx, ny = gy + dy;
            if (nx > 1 && nx < GW-2 && ny > 1 && ny < GH-2) {
              buf1[ny * GW + nx] += 350 * (1 - Math.sqrt(dx*dx+dy*dy) / r);
            }
          }
        }
      }
    };

    const simulate = () => {
      for (let y = 1; y < GH-1; y++) {
        for (let x = 1; x < GW-1; x++) {
          const i = y * GW + x;
          buf2[i] = (buf1[i-1] + buf1[i+1] + buf1[i-GW] + buf1[i+GW]) * 0.5 - buf2[i];
          buf2[i] *= 0.982;
        }
      }
      const tmp = buf1; buf1 = buf2; buf2 = tmp;
    };

    const render = () => {
      const imageData = offCtx.createImageData(GW, GH);
      const d = imageData.data;
      for (let y = 1; y < GH-1; y++) {
        for (let x = 1; x < GW-1; x++) {
          const i = y * GW + x;
          const h = buf1[i];
          if (Math.abs(h) < 2) continue;
          const idx = i * 4;
          const alpha = Math.min(160, Math.abs(h) * 0.55);
          if (h > 0) {
            // Light crest - bright teal/white like sunlight through water
            d[idx]   = 200;
            d[idx+1] = 235;
            d[idx+2] = 255;
          } else {
            // Dark trough - deep ocean teal
            d[idx]   = 5;
            d[idx+1] = 80;
            d[idx+2] = 140;
          }
          d[idx+3] = alpha;
        }
      }
      offCtx.putImageData(imageData, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(offCanvas, 0, 0, W, H);
    };

    const loop = () => {
      simulate();
      render();
      rafId = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const now = Date.now();
      if (now - lastMove < 45) return;
      lastMove = now;
      disturb(e.clientX, e.clientY);
    };

    init();
    window.addEventListener('resize', init, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="water-canvas" />;
}

export default WaterRipple;