import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="water-footer">
        <div className="water-fill">
          <div className="water-surface">
            <div className="wave-svg wave-svg-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
                <path d="M0,40 C180,10 360,70 540,40 C720,10 900,70 1080,40 C1260,10 1380,60 1440,40 L1440,80 L0,80 Z" fill="rgba(79,117,255,0.35)"/>
              </svg>
            </div>
            <div className="wave-svg wave-svg-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
                <path d="M0,50 C240,20 480,65 720,45 C960,25 1200,65 1440,50 L1440,80 L0,80 Z" fill="rgba(79,117,255,0.25)"/>
              </svg>
            </div>
          </div>
          <div className="water-body"></div>
        </div>

        <div className="footer-content">
          <p className="footer-logo">Port<span>folio</span></p>
          <div className="footer-water-text">
            <h3 className="water-name">Rajvardhan Singh</h3>
            <p className="water-thankyou">Thank You For Visiting</p>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Rajvardhan Singh Chouhan. Built with React + Vite.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;