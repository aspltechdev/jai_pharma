import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CloserLook from "./components/VisualGallery";

const FloatingWhatsApp = () => {
  const phoneNumber = "919876543210"; // CHANGE TO YOUR NUMBER
  const message = "Hello JAI PHARMACEUTICALS, I need more info";
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        textDecoration: 'none'
      }}
    >
      <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
        <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.74.46 3.45 1.32 4.95L2 22l5.33-1.4a9.85 9.85 0 0 0 4.71 1.2h.01c5.46 0 9.88-4.42 9.88-9.88C21.93 6.42 17.5 2 12.04 2zm5.01 14.82c-.22.62-1.26 1.17-1.76 1.24-.48.07-.93.22-3.12-.66-2.65-1.06-4.34-3.8-4.47-3.97-.13-.18-1.06-1.41-1.06-2.69s.67-1.91.91-2.17c.24-.26.48-.32.64-.32h.46c.15 0 .35-.05.53.4.18.46.63 1.6.69 1.71.06.11.1.24.02.38-.08.14-.12.24-.24.37-.12.13-.25.27-.36.36-.11.11-.23.23-.1.45.13.22.58.96 1.24 1.55.86.77 1.58 1.01 1.8 1.12.22.11.35.09.48-.06.13-.14.55-.64.7-.86.15-.22.3-.18.51-.11.21.07 1.33.63 1.56.74.23.11.38.17.44.26.06.1.06.57-.16 1.19z" />
      </svg>
    </a>
  );
};

function App() {
  return (
    <div className="app">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="products"><Products /></section>
      <section id="gallery"><CloserLook /></section>
      <section id="contact"><Contact /></section>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;