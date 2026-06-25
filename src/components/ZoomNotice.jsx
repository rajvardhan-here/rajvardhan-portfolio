import { useEffect, useState } from 'react';
import '../styles/ZoomNotice.css';

function ZoomNotice() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Show after tiny delay so it slides in after page loads
    const showTimer = setTimeout(() => setVisible(true), 600);

    // Start hide animation at 3.5s
    const hideTimer = setTimeout(() => setHiding(true), 3500);

    // Remove from DOM at 4.2s
    const removeTimer = setTimeout(() => setVisible(false), 4200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`zoom-notice ${hiding ? 'zoom-notice-hide' : ''}`}>
      <span className="zoom-notice-icon">🔍</span>
      <div className="zoom-notice-text">
        <strong>Pro Tip</strong>
        <span>Zoom out to <b>100%</b> for the best experience</span>
      </div>
      <button className="zoom-notice-close" onClick={() => setHiding(true)}>✕</button>
    </div>
  );
}

export default ZoomNotice;