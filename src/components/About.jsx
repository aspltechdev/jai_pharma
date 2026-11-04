import './About.css'
import aboutImage from '../assets/aboutimage.png'

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* LEFT - IMAGE */}
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="Jai Pharmaceuticals Lab" className="about-image" />
          
          <div className="about-float-card">
            <span>15+</span>
            <p>Years of Trusted<br/>Healthcare</p>
          </div>

          <div className="about-float-badge">✓ GMP Certified Quality</div>
        </div>

        {/* RIGHT - TEXT */}
        <div className="about-content">
          <span className="about-eyebrow">— ABOUT US</span>
          <h2>Dedicated to Better Health &<br/><span>Everyday Care</span></h2>
          
          <p className="about-desc">
            At JAI PHARMACEUTICALS, our vision is to make quality-focused
            healthcare and personal care solutions more accessible. We believe in
            building trust through responsible practices, clear information and attention
            to customer needs.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>Support healthier communities with accessible, quality-focused care solutions.</p>
            </div>
            <div className="about-card gold">
              <div className="about-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>Build a trusted name through continuous improvement and customer-focused service.</p>
            </div>
          </div>

          <div className="about-stats">
            <div><b>500+</b><span>Products</span></div>
            <div><b>10k+</b><span>Happy Customers</span></div>
            <div><b>100%</b><span>Quality Checked</span></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About