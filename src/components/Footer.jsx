import React from "react";

export default function Footer(){
  return (
    <footer id="contact" className="bg-[#173430] text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold">JAI PHARMACEUTICALS</h3>
            <p className="text-[11px] mt-1 tracking-[0.2em] text-[#a3c4c0]">PHARMACEUTICAL PRODUCTS</p>
            <p className="text-[12px] mt-4 text-[#cbdcd8] leading-6">
              No 327/2, Melai Village, Kallapuliyur Road,<br/>
              Gingee Taluk, Villupuram Dist,<br/>
              Tamil Nadu - 604 153
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[13px]">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-[12px] text-[#cbdcd8]">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#products" className="hover:text-white">Our Products</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[13px]">Contact</h4>
            <p className="text-[12px] mt-3 text-[#cbdcd8]">Phone: +91 94430 12345</p>
            <p className="text-[12px] mt-1 text-[#cbdcd8]">Email: jaipharmaceuticals@gmail.com</p>
            <button 
              onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}
              className="mt-4 bg-white text-[#173430] px-5 py-2 rounded-full text-[12px] font-bold"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        <div className="border-t border-[#2a4a45] mt-10 pt-4 text-center text-[11px] text-[#8ab0aa]">
          © 2026 JAI PHARMACEUTICALS - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}