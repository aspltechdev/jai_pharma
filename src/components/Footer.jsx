import React from "react";
const Footer = () => {
  return (
    <footer style={{ background: "#0b2f2f", color: "#c2d6d3", padding: "60px 5% 20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div><h3 style={{ color: "#fff", fontWeight: "800" }}>JAI PHARMACEUTICALS</h3><p style={{ marginTop: "12px", fontSize: "14px", color: "#8fb0ad" }}>Caring for Health. Committed to Quality.</p></div>
        <div>
          <h4 style={{ color: "#fff", marginBottom: "16px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              ["Home","#home"],["About Us","#about"],["Products","#products"],["Gallery","#gallery"],["Contact Us","#contact"]
            ].map(([label, link]) => (
              <li key={label} style={{ marginBottom: "12px" }}>
                <a href={link} style={{ color: "#8fb0ad", textDecoration: "none", transition: "0.3s" }} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="#8fb0ad"}>→ {label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div><h4 style={{ color: "#fff", marginBottom: "16px" }}>Contact</h4><p style={{ fontSize: "14px", color: "#8fb0ad" }}>Bangalore, Karnataka<br/>info@jaipharma.com<br/>+91 98765 43210</p></div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "40px", paddingTop: "16px", textAlign: "center", fontSize: "13px", color: "#6b8a8a" }}>© 2026 Jai Pharmaceuticals. All Rights Reserved.</div>
    </footer>
  );
};
export default Footer;