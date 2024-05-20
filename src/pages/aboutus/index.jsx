import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
const AboutUs = ({ setSelectedPage }) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage("aboutus")}
      id="aboutus"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <section className="about">
        <div className="container">
          <h2 className="lg-heading text-black">About Us</h2>
          <p className="text-gray">
            Welcome to Fitopedia, your ultimate destination for all things
            fitness and nutrition! We're thrilled to have you here on your
            journey towards a healthier, happier you.
          </p>
          <div className="about-wrapper">
            <div className="left">
              <ul>
                <li>Personalized Guidance</li>
                <li>Expert Insights</li>
                <li>Comprehensive Resources</li>
                <li>Community Connection</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>Cutting-Edge Technology</li>
                <li>User-Centric Design</li>
                <li>Global Perspective</li>
                <li>Data-driven Strategies</li>
              </ul>
            </div>
          </div>
          <div className="counts">
            <div className="count-item count-item1">
              <span className="text-red md-heading">2500</span>
              <p className="text-gray">Customers</p>
            </div>
            <div className="count-item count-item2">
              <span className="text-red md-heading">500</span>
              <p className="text-gray">Community</p>
            </div>
            <div className="count-item count-item3">
              <span className="text-red md-heading">200</span>
              <p className="text-gray">Employees</p>
            </div>
            <div className="count-item count-item4">
              <span className="text-red md-heading">20</span>
              <p className="text-gray">Trainers</p>
            </div>
          </div>

          <div className="cta-banner">
            <div className="cta-banner-left">
              <p className="cta-line">Excited to join us?</p>
            </div>
            <div className="cta-banner-right">
              <AnchorLink href="#contactus" className="btn-cta">
                Contact Us
              </AnchorLink>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const AboutUs1 = () => {
  return (
    <div id="about">
      <div className="container">
        <h1 className="sub-title">About Us</h1>
        <p>
          Welcome to Fitopedia, your ultimate destination for all things fitness
          and nutrition! We're thrilled to have you here on your journey towards
          a healthier, happier you.
        </p>
        <div id="offer">
          <div className="container">
            <h2>What We Offer</h2>
            <ul>
              <li>
                <h3>Personalized Guidance</h3>
              </li>
              <li>
                <h3>Expert Insights</h3>
              </li>
              <li>
                <h3>Comprehensive Resources</h3>
              </li>
              <li>
                <h3>Community Connection</h3>
              </li>
              <li>
                <h3>Cutting-Edge Technology</h3>
              </li>
            </ul>
          </div>
        </div>
        <h2>Our Commitment</h2>
        <p>
          At Fitopedia, we're committed to your success. We're constantly
          striving to improve and innovate, incorporating user feedback,
          industry trends, and the latest scientific research to provide you
          with the most effective resources for achieving your health and
          fitness goals.
        </p>
        <h2>Get Started Today!</h2>
        <p>
          Ready to take the first step towards a healthier lifestyle? Join the
          Fitopedia community today and embark on your journey towards better
          health and well-being. Let's make every day a step closer to your best
          self!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
