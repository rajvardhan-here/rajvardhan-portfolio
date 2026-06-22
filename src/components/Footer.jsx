import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-logo">Port<span>folio</span></p>
        <p className="footer-copy">© {new Date().getFullYear()} Rajvardhan Singh Chouhan. Built with React + Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;