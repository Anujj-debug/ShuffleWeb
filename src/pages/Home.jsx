import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, RotateCcw, GraduationCap, User, Package, Zap, MapPin, RefreshCw, Users } from 'lucide-react';
import ParticlesBackground from '../ParticlesBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Fixed Background Gradient */}
      <div className="bg-gradient-overlay" />
      <ParticlesBackground />

      {/* ─── HERO ──────────────────────────────────────── */}
      <section className="hero-section-full">
        <div className="hero-content">
          <motion.div
            className="early-access-badge"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            ✦ Currently in Early Access
          </motion.div>

          <div className="headline-mask">
            <motion.h1
              className="hero-headline"
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Rent Anything You Need,
            </motion.h1>
          </div>
          <div className="headline-mask">
            <motion.h2
              className="hero-headline-accent"
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              From People Around You
            </motion.h2>
          </div>

          <motion.p
            className="hero-subheading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Shuffle Rentals is a hyperlocal platform that helps you borrow everyday items from people nearby - fast, affordable, and convenient.
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <Link to="/contact" className="btn btn-primary">Get Early Access</Link>
            <Link to="/contact" className="btn btn-secondary">List an Item</Link>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT IS SHUFFLE ───────────────────────────── */}
      <section className="content-section">
        <motion.div
          className="section-inner glass-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-label">The Concept</span>
          <h2 className="section-heading">What is Shuffle Rentals?</h2>
          <p className="section-para">
            Shuffle Rentals is a rental marketplace built for everyday life. Instead of buying items you only need once or twice, you can borrow them from someone in your neighbourhood - and if you have items sitting unused at home, you can rent them out and earn from them.
          </p>
          <p className="section-para">
            We focus on being hyperlocal, affordable, and simple. No complex logistics. No expensive subscriptions. Just people helping people in the same community.
          </p>
        </motion.div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────── */}
      <section className="content-section content-section--alt">
        <motion.div
          className="section-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <span className="section-label">The Process</span>
          <h2 className="section-heading">How It Works</h2>
          <div className="steps-grid">
            <motion.div className="step-card" custom={0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="step-icon-wrap"><Search size={28} /></div>
              <div className="step-number">01</div>
              <h3 className="step-title">Browse Items</h3>
              <p className="step-desc">Search for items available for rent near you. Find exactly what you need without committing to a purchase.</p>
            </motion.div>
            <motion.div className="step-card" custom={0.2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="step-icon-wrap"><MessageCircle size={28} /></div>
              <div className="step-number">02</div>
              <h3 className="step-title">Request &amp; Connect</h3>
              <p className="step-desc">Send a rental request to the owner. Agree on timing and pickup directly - keep it simple and local.</p>
            </motion.div>
            <motion.div className="step-card" custom={0.3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="step-icon-wrap"><RotateCcw size={28} /></div>
              <div className="step-number">03</div>
              <h3 className="step-title">Rent &amp; Return</h3>
              <p className="step-desc">Use the item for the period you need. Return it when you're done. Affordable, responsible, and hassle-free.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── WHO IT'S FOR ──────────────────────────────── */}
      <section className="content-section">
        <motion.div
          className="section-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <span className="section-label">Our Audience</span>
          <h2 className="section-heading">Who Is It For?</h2>
          <div className="audience-grid">
            <motion.div className="audience-card" custom={0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <GraduationCap size={32} className="audience-icon" />
              <h3>Students</h3>
              <p>Need something short-term for a project, event, or semester? Rent it instead of buying it.</p>
            </motion.div>
            <motion.div className="audience-card" custom={0.2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <User size={32} className="audience-icon" />
              <h3>Individuals</h3>
              <p>Don't want to own everything you use. Prefer renting over cluttering your space with rarely-used items.</p>
            </motion.div>
            <motion.div className="audience-card" custom={0.3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Package size={32} className="audience-icon" />
              <h3>Item Owners</h3>
              <p>Have items at home gathering dust? Put them to work and earn from what you already own.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── WHY SHUFFLE ───────────────────────────────── */}
      <section className="content-section content-section--alt">
        <motion.div
          className="section-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <span className="section-label">Our Advantages</span>
          <h2 className="section-heading">Why Shuffle?</h2>
          <div className="why-grid">
            <motion.div className="why-card" custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="why-icon"><Zap size={22} /></div>
              <h3>Affordable</h3>
              <p>Pay a fraction of the purchase price. Renting makes financial sense for short-term needs.</p>
            </motion.div>
            <motion.div className="why-card" custom={0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="why-icon"><MapPin size={22} /></div>
              <h3>Hyperlocal</h3>
              <p>Items available nearby - no long deliveries, no waiting. Just local, convenient access.</p>
            </motion.div>
            <motion.div className="why-card" custom={0.15} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="why-icon"><RefreshCw size={22} /></div>
              <h3>Simple Process</h3>
              <p>Browse, request, rent, return. No complex procedures or excessive documentation.</p>
            </motion.div>
            <motion.div className="why-card" custom={0.2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="why-icon"><Users size={22} /></div>
              <h3>Community-Driven</h3>
              <p>Built around trust and local relationships. Real people, real items, real communities.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── STATUS ────────────────────────────────────── */}
      <section className="content-section">
        <motion.div
          className="section-inner status-section glass-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="status-badge-wrap">
            <span className="status-dot" />
            <span className="status-badge-text">Live Now</span>
          </div>
          <h2 className="section-heading">Where We Are</h2>
          <p className="section-para">
            Shuffle Rentals is currently in early access and starting with select communities in Ghaziabad, Uttar Pradesh, India. We're onboarding our first wave of renters and item owners to build a trusted local network before we expand.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            Join Early Access
          </Link>
        </motion.div>
      </section>

      {/* ───CO-FOUNDERS ───────────────────────────────────── */}
      <section className="content-section content-section--alt">
        <motion.div
          className="section-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-label">Co-Founders</span>
          <h2 className="section-heading">The Builders Behind It</h2>
          <div className="founders-grid-home">

            {/* Co-Founder 1 */}
            <div className="founder-card-home">
              <div className="founder-image-home">
                <img src="Devansh.png" alt="Devansh Dev Singh" />
              </div>
              <div className="founder-info-home">
                <h3>Devansh Dev Singh</h3>
                <p>Co-Founder</p>
              </div>
            </div>

            {/* Co-Founder 2 */}
            <div className="founder-card-home">
              <div className="founder-image-home">
                <img src="Arman Maurya.png" alt="Arman Maurya" />
              </div>
              <div className="founder-info-home">
                <h3>Arman Maurya</h3>
                <p>Co-Founder</p>
              </div>
            </div>

            {/* Co-Founder 3 */}
            <div className="founder-card-home">
              <div className="founder-image-home">
                <img src="Apurv.png" alt="Apurv Verma" />
              </div>
              <div className="founder-info-home">
                <h3>Apurv Verma</h3>
                <p>Co-Founder</p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
