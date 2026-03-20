import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0.001ZM17.082 19.77h1.832L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <img src="/Website Logo.png" alt="Shuffle Rentals" className="footer-logo" />
          <p className="footer-tagline">Rent anything. From people around you.</p>
        </div>

        {/* Links */}
        <div className="footer-links-group">
          <span className="footer-links-label">Pages</span>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <span className="footer-links-label">Legal</span>
          <ul className="footer-links">
            <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="footer-link">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social-group">
          <span className="footer-links-label">Follow Us</span>
          <div className="footer-social-icons">
            <a href="https://x.com/shufflerentals" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="X (Twitter)">
              <XIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/company/shufflerentals/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/shufflerentals?igsh=aDZvNzJmOWFhbjhv" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Shuffle Rentals. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="footer-bottom-link">Terms &amp; Conditions</Link>
          <Link to="/contact" className="footer-bottom-link">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
