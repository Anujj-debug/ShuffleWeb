import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const TermsAndConditions = () => (
  <div className="page-wrapper page-wrapper--static">
    <div className="static-page-hero">
      <motion.span className="section-label" variants={fadeUp} initial="hidden" animate="visible" custom={0}>Legal</motion.span>
      <motion.h1 className="static-page-title" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>Terms &amp; Conditions</motion.h1>
      <motion.p className="static-page-subtitle" variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
        Last updated: March 2026
      </motion.p>
    </div>

    <div className="static-page-body legal-page">
      <motion.div className="legal-intro glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p>
          Please read these Terms &amp; Conditions carefully before using the Shuffle Rentals platform (the "Service"). By accessing or using our Service, you agree to be bound by these terms. If you do not agree, you may not use the platform.
        </p>
      </motion.div>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>1. About the Platform</h2>
        <p>
          Shuffle Rentals is a peer-to-peer rental marketplace that connects individuals who wish to rent out items they own ("Owners") with individuals who wish to borrow those items ("Renters"). Shuffle Rentals acts solely as an intermediary platform and is not a party to any rental agreement entered into between Owners and Renters.
        </p>
        <p style={{ marginTop: '1rem' }}>
          We do not own, control, inspect, or guarantee the quality, safety, legality, or availability of any items listed on the platform. All transactions are conducted between users directly.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>2. Eligibility</h2>
        <p>To use Shuffle Rentals, you must:</p>
        <ul>
          <li>Be at least 18 years of age, or have parental/guardian consent if you are younger</li>
          <li>Provide accurate and complete registration information</li>
          <li>Have the legal capacity to enter into binding agreements</li>
          <li>Not be prohibited from using the platform under applicable law</li>
        </ul>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>3. Platform Usage Rules</h2>
        <p>When using Shuffle Rentals, you agree to:</p>
        <ul>
          <li>Use the platform only for lawful purposes and in accordance with these Terms</li>
          <li>Provide honest and accurate information in your listings, requests, and communications</li>
          <li>Not list items that are illegal, stolen, hazardous, or prohibited</li>
          <li>Not engage in any deceptive, fraudulent, or harmful behaviour</li>
          <li>Not attempt to circumvent the platform to conduct transactions outside of it</li>
          <li>Respect other users and maintain community standards of conduct</li>
          <li>Not use the platform to distribute spam, malware, or unsolicited commercial messages</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Violation of these rules may result in suspension or permanent removal from the platform without notice.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>4. User Responsibility</h2>
        <p>As a user of Shuffle Rentals, you are solely responsible for:</p>
        <ul>
          <li><strong>As an Owner:</strong> Ensuring items listed are accurately described, safe to use, in the condition stated, and that you have the right to rent them out.</li>
          <li><strong>As a Renter:</strong> Using rented items responsibly, returning them in the same condition received, and fulfilling any agreements made with the Owner.</li>
          <li><strong>Both parties:</strong> Conducting due diligence before engaging in any rental transaction. This includes verifying the identity of the other party and inspecting items before accepting them.</li>
          <li>Any dispute, damage, or loss arising from a rental transaction. Shuffle Rentals will provide reasonable assistance in dispute resolution but cannot guarantee outcomes.</li>
        </ul>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>5. Platform Role &amp; Limitation of Liability</h2>
        <p>
          Shuffle Rentals is a technology platform that facilitates connections between users. We are not a rental company, and we do not own or manage any items listed. Accordingly:
        </p>
        <ul>
          <li>We are not liable for the condition, legality, or safety of any items listed or rented through the platform.</li>
          <li>We are not responsible for any loss, injury, damage, or harm arising from a rental transaction between users.</li>
          <li>We do not guarantee the accuracy of user-provided listings or the behaviour of any user.</li>
          <li>Our total liability to you in connection with the platform shall not exceed the amount you have paid to us (if any) in the 12 months prior to the claim.</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Nothing in these terms limits liability for fraud, death, or personal injury caused by negligence, which cannot be excluded under applicable law.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>6. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and intellectual property associated with Shuffle Rentals are the property of Shuffle Rentals and its founders. You may not reproduce, distribute, or create derivative works from our content without prior written permission.
        </p>
        <p style={{ marginTop: '1rem' }}>
          By submitting content to the platform (such as item descriptions or photos), you grant Shuffle Rentals a non-exclusive, royalty-free licence to use that content for the purpose of operating and promoting the platform.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>7. Account Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the platform at any time, with or without notice, if we believe you have violated these Terms or engaged in harmful conduct. You may also delete your account at any time by contacting us.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>8. Governing Law</h2>
        <p>
          These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from the use of the platform shall be subject to the jurisdiction of courts located in Ghaziabad, Uttar Pradesh, India.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>9. Changes to These Terms</h2>
        <p>
          We may revise these Terms from time to time. Material changes will be communicated to registered users. Continued use of the platform after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </motion.section>

      <motion.section className="legal-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2>10. Contact</h2>
        <p>If you have questions about these Terms, please contact:</p>
        <div className="legal-contact-block">
          <p><strong>Shuffle Rentals</strong></p>
          <p>Ghaziabad, Uttar Pradesh, India</p>
          <p>Email: <a href="mailto:rentalsshuffle@gmail.com" className="contact-info-link">rentalsshuffle@gmail.com</a></p>
        </div>
      </motion.section>
    </div>
  </div>
);

export default TermsAndConditions;
