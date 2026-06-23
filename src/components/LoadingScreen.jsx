import { useEffect, useState } from 'react';
import '../styles/LoadingScreen.css';

function LoadingScreen() {
  // Phases: 'its', 'all', 'about', 'mindset', 'full-text', 'mirror', 'wave-split', 'curtain-up', 'done'
  const [phase, setPhase] = useState('its'); 

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timers = [];

    // Faster word flashes (220ms intervals for snappy pacing)
    timers.push(setTimeout(() => setPhase('all'), 220));
    timers.push(setTimeout(() => setPhase('about'), 440));
    timers.push(setTimeout(() => setPhase('mindset'), 660));
    
    // Assembled phrase
    timers.push(setTimeout(() => setPhase('full-text'), 880));

    // Mirror drop
    timers.push(setTimeout(() => setPhase('mirror'), 1250));

    // Wave Split: Left side flies left, Right side flies right smoothly
    timers.push(setTimeout(() => setPhase('wave-split'), 1750));

    // Curtain rolls straight up smoothly
    timers.push(setTimeout(() => setPhase('curtain-up'), 2250));

    // Cleanup and reveal webpage interaction
    timers.push(setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = 'auto';
    }, 3100));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`ls-overlay ${phase === 'curtain-up' ? 'ls-curtain-lift' : ''}`}>
      <div className="ls-text-container">
        
        {/* Step 1: Rapid Single Word Sequences */}
        {phase === 'its' && <h1 className="ls-text">Its</h1>}
        {phase === 'all' && <h1 className="ls-text">all</h1>}
        {phase === 'about' && <h1 className="ls-text">about</h1>}
        {phase === 'mindset' && <h1 className="ls-text">mindset</h1>}

        {/* Step 2: Full Combined Text */}
        {phase === 'full-text' && (
          <h1 className="ls-text">Its all about mindset</h1>
        )}

        {/* Step 3: Base Text + Mirror Active */}
        {phase === 'mirror' && (
          <div className="ls-mirror-wrapper">
            <h1 className="ls-text original">Its all about mindset</h1>
            <h1 className="ls-text reflection">Its all about mindset</h1>
          </div>
        )}

        {/* Step 4: Lag-free Split Phrase Wave (Hardware Accelerated) */}
        {(phase === 'wave-split' || phase === 'curtain-up') && (
          <div className="ls-wave-split-box">
            
            {/* Left Side Half */}
            <div className="ls-part left-part">
              <div className="ls-text-aligner-left">
                <h1 className="ls-text original">Its all about mindset</h1>
                <h1 className="ls-text reflection">Its all about mindset</h1>
              </div>
            </div>

            {/* Right Side Half */}
            <div className="ls-part right-part">
              <div className="ls-text-aligner-right">
                <h1 className="ls-text original">Its all about mindset</h1>
                <h1 className="ls-text reflection">Its all about mindset</h1>
              </div>
            </div>

          </div>
        )}
        
      </div>
    </div>
  );
}

export default LoadingScreen;