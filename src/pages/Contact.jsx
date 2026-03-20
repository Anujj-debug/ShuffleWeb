import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoBody = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    const mailtoSubject = encodeURIComponent(subject || 'Message from Shuffle Rentals Website');
    window.location.href = `mailto:contact@shufflerentals.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper page-wrapper--static">
      <div className="static-page-hero">
        <motion.span className="section-label" variants={fadeUp} initial="hidden" animate="visible" custom={0}>Reach Out</motion.span>
        <motion.h1 className="static-page-title" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>Contact Us</motion.h1>
        <motion.p className="static-page-subtitle" variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
          Have a question, partnership idea, or want to join early access? We'd love to hear from you.
        </motion.p>
      </div>

      <div className="static-page-body">
        <div className="contact-page-grid">
          {/* Info panel */}
          <motion.div className="contact-info-panel" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="contact-info-item glass-card">
              <div className="contact-info-icon"><Mail size={20} /></div>
              <div>
                <h3>Email</h3>
                <a href="mailto:rentalsshuffle@gmail.com" className="contact-info-link">
                  rentalsshuffle@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-info-item glass-card">
              <div className="contact-info-icon"><Phone size={20} /></div>
              <div>
                <h3>Contact Number</h3>
                <a href="tel:+919026610975" className="contact-info-link">
                  +91 9026610975
                </a>
              </div>
            </div>
            <div className="contact-info-item glass-card">
              <div className="contact-info-icon"><MapPin size={20} /></div>
              <div>
                <h3>Location</h3>
                <p>Ghaziabad, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="contact-info-item glass-card">
              <div className="contact-info-icon"><Clock size={20} /></div>
              <div>
                <h3>Response Time</h3>
                <p>We typically respond within 24–48 hours on business days.</p>
              </div>
            </div>

            <div className="contact-direct-email glass-card">
              <p>You can also email us directly:</p>
              <a href="mailto:rentalsshuffle@gmail.com" className="btn btn-primary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                Send an Email
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="contact-form-panel glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}>
            {submitted ? (
              <div className="form-success">
                <h3>✓ Your email client should open now</h3>
                <p>If it didn't open, please email us directly at <a href="mailto:rentalsshuffle@gmail.com" className="contact-info-link">rentalsshuffle@gmail.com</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-new">
                <h2 style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=""
                    rows="5"
                  />
                </div>
                <button type="submit" className="submit-btn" style={{ fontWeight: 700 }}>
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
