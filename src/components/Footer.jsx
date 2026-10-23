import React from "react";

const Footer = () => {
  return (
    <footer style={{ background: "#0a2e2e", color: "white", padding: "50px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>JAI PHARMACEUTICALS</h3>
          <p style={{ color: "#a7c4bc" }}>Caring for Health. Committed to Quality.</p>
        </div>

        <div style={{ flex: "1", minWidth: "200px" }}>
          <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>
          <p style={{ color: "#a7c4bc" }}>→ Home</p>
          <p style={{ color: "#a7c4bc" }}>→ About Us</p>
          <p style={{ color: "#a7c4bc" }}>→ Products</p>
          <p style={{ color: "#a7c4bc" }}>→ Gallery</p>
          <p style={{ color: "#a7c4bc" }}>→ Contact Us</p>
        </div>

        <div style={{ flex: "1", minWidth: "250px" }}>
          <h4 style={{ marginBottom: "15px" }}>Contact</h4>
          <p style={{ color: "#a7c4bc", lineHeight: "1.6" }}>
            Thuthipattu, Gingee Taluk,<br />
            Viluppuram, Tamil Nadu – 605201
          </p>
          <p style={{ color: "#a7c4bc", marginTop: "10px" }}>WhatsApp: +91 97910 60803</p>
          <a 
            href="https://wa.me/919791060803" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#5eead4", textDecoration: "none", fontWeight: "bold", marginTop: "5px", display: "inline-block" }}
          >
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;