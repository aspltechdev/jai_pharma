import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <nav className="hero-navbar">
        <a href="#home" className="hero-logo">
          <img src="/src/assets/logo.png" alt="Jai Pharmaceuticals Logo" />
        </a>

        <div className="hero-nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </div>

        <a href="#products" className="shop-button">
          Shop now
        </a>
      </nav>

      <div className="hero-content" id="home">
        <div className="hero-text">
          <p className="hero-eyebrow">Care • Quality • Wellbeing</p>

          <h1>
            Caring for Health.
            <span>Committed to</span>
            <span>Quality.</span>
          </h1>

          <p className="hero-description">
            Explore healthcare, skincare and personal care
            solutions with a focus on everyday health, comfort
            and wellbeing.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-button">
              Explore Products <span>→</span>
            </a>

            <a href="#about" className="secondary-button">
              Discover Our Story
            </a>
          </div>

          <div className="hero-benefits">
            <span><b>✓</b> Gentle everyday care</span>
            <span><b>✓</b> Simple routines</span>
            <span><b>✓</b> Skin-first approach</span>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/src/assets/hero image.png"
            alt="Healthcare and skincare products"
            className="hero-image"
          />

          <div className="hero-image-card">
            <h3>✚ Everyday care, thoughtfully presented</h3>
            <p>Healthcare &amp; personal care categories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;