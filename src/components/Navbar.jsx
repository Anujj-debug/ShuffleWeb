import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo-link">
          <img src="/Website Logo.png" alt="Shuffle Rentals Logo" className="navbar-logo-img" />
        </Link>

        {/* Desktop links */}
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`navbar-link ${location.pathname === link.to ? 'navbar-link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="navbar-cta">
          Get Early Access
        </Link>

        {/* Mobile hamburger */}
        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="navbar-mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-mobile-link ${location.pathname === link.to ? 'navbar-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="navbar-mobile-cta">
            Get Early Access
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
