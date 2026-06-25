import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-water-bg">
        <div className="fw-wave fw-wave-1">
          <svg viewBox="0 11 1440 100 " preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C200,20 400,80 600,50 C800,20 1000,80 1200,50 C1320,35 1400,55 1440,50 L1440,100 L0,100 Z"/>
          </svg>
        </div>
        <div className="fw-wave fw-wave-2">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C300,30 600,80 900,55 C1100,40 1300,70 1440,60 L1440,100 L0,100 Z"/>
          </svg>
        </div>
        <div className="fw-wave fw-wave-3">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,70 C250,45 550,85 850,65 C1100,50 1300,75 1440,70 L1440,100 L0,100 Z"/>
          </svg>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-name-block">
          <span className="footer-name">Khmma Ghani </span>
          <span className="footer-comma">&</span>
          <span className="footer-thankyou">Thank You For Visiting</span>
        </div>
          </div>
    </footer>
  );
}

export default Footer;