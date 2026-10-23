import React from "react";

export default function Cta() {
  return (
    <footer style={{ 
      backgroundColor: '#0f2e2e', 
      color: 'white', 
      padding: '50px 20px',
      marginTop: '50px',
      display: 'block',
      width: '100%'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
        
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
              <path d="M50 5 L95 95 L5 95 Z" />
              <path d="M35 35 L65 35 L80 80 L15 85 Z" strokeWidth="2.5"/>
            </svg>
            JAI PHARMACEUTICALS
          </h3>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
            Caring for Health. Committed to Quality.<br/>
            Healthcare, skincare and personal care solutions focused on everyday wellbeing.
          </p>
        </div>

        <div>
          <h4 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '15px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '2' }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '15px' }}>Our Products</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '2' }}>
            <li>Daily Skin Care</li>
            <li>Gentle Personal Care</li>
            <li>Wellness & Health Basics</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '15px' }}>Contact</h4>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
            Thuthipattu, Gingee Taluk,<br/>
            Viluppuram, Tamil Nadu - 605201<br/><br/>
            📞 +91 97910 60803<br/>
            ✉️ jaipharmaceuticals@gmail.com
          </p>
        </div>

      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '40px auto 0 auto', fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>
        <p>© 2026 JAI PHARMACEUTICALS. All rights reserved.</p>
        <p>Care • Quality • Wellbeing</p>
      </div>
    </footer>
  );
}