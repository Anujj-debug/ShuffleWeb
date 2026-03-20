import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const PrivacyPolicy = () => (
  <div className="page-wrapper page-wrapper--static">
    <div className="static-page-hero">
      <motion.span className="section-label" variants={fadeUp} initial="hidden" animate="visible" custom={0}>Legal</motion.span>
      <motion.h1 className="static-page-title" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>Privacy Policy</motion.h1>
      <motion.p className="static-page-subtitle" variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
        Last updated: March 2026
      </motion.p>
    </div>

    <div className="static-page-body legal-page">
      <motion.div className="legal-intro glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p>
          Shuffle Rentals ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices available to you. By using our platform, you agree to the practices described in this policy.
        </p>
      </motion.div>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>1. Information We Collect</h2>
        <p>When you use Shuffle Rentals, we may collect the following types of information:</p>
        <ul>
          <li><strong>Account Information:</strong> Your name, email address, and phone number when you sign up or contact us.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited, items browsed, and search queries.</li>
          <li><strong>Device Information:</strong> Browser type, operating system, device identifiers, and IP address, collected automatically for security and performance purposes.</li>
          <li><strong>Communications:</strong> Messages you send through the platform or directly to us via email.</li>
          <li><strong>Location Information:</strong> General location (city or region) to enable hyperlocal matching. We do not collect precise GPS coordinates without your explicit permission.</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>We collect only the information necessary to provide our service. We do not collect payment information directly — any payments are processed by third-party providers who are bound by their own privacy policies.</p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Create and manage your account on the platform</li>
          <li>Connect renters with item owners in their area</li>
          <li>Communicate with you about your account, requests, and platform updates</li>
          <li>Improve and optimise the platform experience</li>
          <li>Prevent fraud, abuse, and other harmful activity</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>We do not sell your personal information to third parties. We do not use your data for any purpose unrelated to providing our service.</p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>3. Sharing Your Information</h2>
        <p>We may share your information in the following limited circumstances:</p>
        <ul>
          <li><strong>With other users:</strong> To facilitate rentals, your name and general location may be visible to other users involved in a transaction.</li>
          <li><strong>Service providers:</strong> We may use trusted third-party services (e.g., hosting, analytics) who process data on our behalf under strict confidentiality agreements.</li>
          <li><strong>Legal requirements:</strong> We may disclose information when required to do so by law, or to protect the rights and safety of our users and the public.</li>
        </ul>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>4. Data Protection</h2>
        <p>
          We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These include:
        </p>
        <ul>
          <li>HTTPS encryption for all data transmitted to and from our platform</li>
          <li>Access controls limiting which team members can access personal data</li>
          <li>Regular review of our data handling and security practices</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          While we take reasonable precautions, no system is completely secure. We encourage you to use a strong password and to notify us immediately if you suspect any unauthorised use of your account.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is active or as needed to provide our services. You may request deletion of your account and associated data by contacting us. We will delete or anonymise your data within a reasonable period, except where we are required to retain it for legal compliance.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your account and associated data</li>
          <li>Opt out of non-essential communications at any time</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>To exercise any of these rights, please contact us at the email address below.</p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>7. Cookies</h2>
        <p>
          Our platform may use cookies and similar technologies to remember your preferences and improve your experience. You can control cookie behaviour through your browser settings. Disabling cookies may limit some features of the platform.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make significant changes, we will notify registered users by email or through a prominent notice on the platform. Continued use of Shuffle Rentals after any changes constitutes acceptance of the updated policy.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
        <div className="legal-contact-block">
          <p><strong>Shuffle Rentals</strong></p>
          <p>Ghaziabad, Uttar Pradesh, India</p>
          <p>Email: <a href="mailto:rentalsshuffle@gmail.com" className="contact-info-link">rentalsshuffle@gmail.com</a></p>
        </div>
      </motion.section>
    </div>
  </div>
);

export default PrivacyPolicy;
