import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const About = () => (
  <div className="page-wrapper page-wrapper--static">
    <div className="static-page-hero">
      <motion.span className="section-label" variants={fadeUp} initial="hidden" animate="visible" custom={0}>Our Story</motion.span>
      <motion.h1 className="static-page-title" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>About Shuffle Rentals</motion.h1>
      <motion.p className="static-page-subtitle" variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
        A platform built on a simple idea - sharing makes more sense than owning everything.
      </motion.p>
    </div>

    <div className="static-page-body">
      {/* Mission */}
      <motion.section className="static-section glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="static-section-heading">Our Mission</h2>
        <p>
          At Shuffle Rentals, our mission is to reduce unnecessary purchases by enabling communities to share everyday items with one another. We believe that most items people buy are used only a handful of times - which means there's an enormous opportunity to let those items serve more people before they end up stored away or discarded.
        </p>
        <p style={{ marginTop: '1rem' }}>
          We're building a hyperlocal ecosystem where renting feels as natural as buying - and where people in the same neighbourhood can trust each other to share, borrow, and earn together.
        </p>
      </motion.section>

      {/* Location */}
      <motion.section className="static-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="static-section-heading">Where We're Based</h2>
        <p>
          Shuffle Rentals is headquartered in <strong>Ghaziabad, Uttar Pradesh, India</strong>. We're starting with select communities in Ghaziabad and the surrounding NCR region before expanding to other cities.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Our early focus is on dense residential areas, student communities, and apartment complexes - places where a large number of people live close together and stand to benefit the most from local item sharing.
        </p>
      </motion.section>

      {/* What we do */}
      <motion.section className="static-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="static-section-heading">What We Do</h2>
        <p>
          We connect people who need short-term access to everyday items with people who own those items and are happy to rent them out. The platform handles discovery and connection - the rest happens locally, between real people in the same community.
        </p>
        <ul className="about-list">
          <li>No minimum subscription - rent only what you need, when you need it</li>
          <li>Peer-to-peer pricing - set by the item owners, kept affordable</li>
          <li>Local-first matching - prioritising proximity for ease and trust</li>
          <li>Community accountability - ratings and reviews keep the ecosystem honest</li>
        </ul>
      </motion.section>

      <motion.section className="static-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="static-section-heading">The Co-Founders</h2>
        <div className="founders-grid" style={{ marginTop: '1.5rem' }}>

          {/* Co-Founder 1 */}
          <div className="founder-card glass-card">
            <div className="founder-avatar">
              <img src="/Devansh.png" alt="Devansh Dev Singh" />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Devansh Dev Singh</h3>
              <p className="founder-role">Co-Founder</p>
              <p className="founder-bio">
                I drive business strategy, financial planning, and operations at Shuffle, focusing on revenue optimization, partnerships, and building a scalable, unit economics driven rental marketplace.
              </p>
              <div className="founder-links">
                <a href="https://www.linkedin.com/in/devansh-dev-singh/" target="_blank" rel="noopener noreferrer" className="founder-link">
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>

          {/* Co-Founder 2 */}
          <div className="founder-card glass-card">
            <div className="founder-avatar">
              <img src="/Arman Maurya.png" alt="Arman Maurya" />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Arman Maurya</h3>
              <p className="founder-role">Co-Founder</p>
              <p className="founder-bio">
                The one handling development and tech infrastructure at Shuffle, ensuring the platform runs smoothly and scales efficiently.
              </p>
              <div className="founder-links">
                <a href="https://www.linkedin.com/in/arman-maurya-2391aa263/" target="_blank" rel="noopener noreferrer" className="founder-link">
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>

          {/* Co-Founder 3 */}
          <div className="founder-card glass-card">
            <div className="founder-avatar">
              <img src="/Apurv.png" alt="Apurv Verma" />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Apurv Verma</h3>
              <p className="founder-role">Co-Founder</p>
              <p className="founder-bio">
                A guy managing product design, branding, and marketing at Shuffle, focused on building smooth user experiences and a strong brand.
              </p>
              <div className="founder-links">
                <a href="https://www.linkedin.com/in/apurv404/" target="_blank" rel="noopener noreferrer" className="founder-link">
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* CTA */}
      <motion.div className="about-cta" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p>Interested in joining Shuffle Rentals during early access?</p>
        <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
      </motion.div>
    </div>
  </div>
);

export default About;
