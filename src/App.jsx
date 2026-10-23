import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="products"><Products /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
      
      {/* ONLY NEW OPTIMIZED FOOTER - BOTTOM ONE */}
      <Footer />
    </div>
  );
}

export default App;