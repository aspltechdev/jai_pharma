import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src="/src/assets/about image.png"
            alt="Pharmaceutical manufacturing and quality testing"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <p className="about-label">ABOUT US</p>

          <h2>
            Dedicated to Better Health &amp;
            <br className="desktop-break" /> Everyday Care
          </h2>

          <p className="about-description">
            At JAI PHARMACEUTICALS, our proposed vision is to make
            quality-focused healthcare and personal care solutions
            more accessible. We believe in building trust through
            responsible practices, clear information and attention
            to customer needs.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                Support healthier communities with accessible,
                quality-focused care solutions.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                Build a trusted name through continuous improvement
                and customer-focused service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;