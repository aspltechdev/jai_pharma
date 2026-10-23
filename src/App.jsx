import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Cta from "./components/Cta";

function App() {
  return (
    <div className="app">
      
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <Cta />
    </div>
  );
}

export default App;