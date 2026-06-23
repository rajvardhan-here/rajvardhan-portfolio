import { useEffect } from 'react';
import '../styles/WaterRipple.css';

function WaterRipple() {
  useEffect(() => {
    // Just return - no effects needed
    return () => {};
  }, []);

  return <div className="glass-effect" />;
}

export default WaterRipple;