import React, { useState } from "react";
import "./Products.css";
import labBg from "../assets/labbg.jpg";
// ✅ Only 1 glob needed - covers all images
const files = import.meta.glob('../assets/products/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
});

function getLocalImage(key) {
  if (!key) return '';

  const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const target = clean(key);

  // ✅ Alias map for mis-spelled keys - keeps output same
  const ALIAS = {
    icthammol: 'ichthammol',
    pottasium: 'potassium',
    salicyclic: 'salicylic',
    procalsys2: 'procalys2',
    mandlis: 'mandls',
  };

  const targets = [target, clean(ALIAS[key] || '')].filter(Boolean);
  const entries = Object.entries(files);

  for (const t of targets) {
    const exact = entries.find(([p]) => {
      const base = (p.split('/').pop() || '').split('.')[0];
      return clean(base) === t;
    });
    if (exact) return exact[1];
  }

  // Fallback: partial match
  const partial = entries.find(([p]) => targets.some(t => clean(p).includes(t)));
  return partial ? partial[1] : '';
}

const PRODUCTS = [
  { name: "Compound Benzoic Acid Ointment I.P.", key: "whitefield", desc: "Compound benzoic acid ointment for fungal skin infections and routine care." },
  { name: "Calamine Lotion I.P.", key: "calamine", desc: "Soothing lotion for itching, rashes and everyday skin protection." },
  { name: "Clove Oil I.P.", key: "cloveoil", desc: "Pure clove oil for dental care and topical application." },
  { name: "Eucalyptus Oil", key: "eucalyptus", desc: "Natural eucalyptus oil for cold relief and external use." },
  { name: "Glycerin I.P. (Glycerol)", key: "glycerin", desc: "Pure glycerol for skin moisturization and pharmaceutical use." },
  { name: "Hydrogen Peroxide Solution", key: "hydrogen", desc: "Antiseptic solution for wound cleaning and disinfection." },
  { name: "Ichthammol Glycerin B.P.C.", key: "icthammol", desc: "Traditional drawing ointment for boils and skin care." },
  { name: "Laxema - Sodium Phosphates Enema BP", key: "laxema", desc: "Sodium phosphates enema for bowel preparation and constipation relief." },
  { name: "Liquid Paraffin I.P.", key: "liquidparaffin", desc: "Light liquid paraffin for skin protection and laxative use." },
  { name: "Mandl's Paint - Compound Iodine Paint B.P.C.", key: "mandlis", desc: "Compound iodine paint for throat and oral cavity care." },
  { name: "Merbromin Solution I.P.", key: "merbromin", desc: "Topical antiseptic solution for minor cuts and wounds." },
  { name: "Potassium Permanganate", key: "pottasium", desc: "Antiseptic crystals for wound wash and skin disinfection." },
  { name: "Salicylic Acid & Coal Tar Solution - RingzOlin", key: "ringzolin", desc: "For ringworm, itch & eczema - antifungal solution." },
  { name: "Salicylic Acid Ointment I.P. 6% w/w", key: "salicyclic", desc: "Keratolytic ointment for warts, corns and skin care." },
  { name: "Compound Benzoin Tincture I.P.", key: "tincture", desc: "Essential antiseptic for first aid and wound care." },
  { name: "Procalys-G", key: "procalys-g", desc: "Calcium with Vitamin D3 and minerals for bone strength." },
  { name: "Procalys", key: "procalys", desc: "Calcium supplement for daily bone health support." },
  { name: "Cutisal Ointment", key: "cutisalointment", desc: "Antifungal ointment for skin infections and itching." },
  { name: "Merbromin NF", key: "merbrominnf", desc: "New formulation antiseptic solution for cuts and wounds." },
  { name: "Procalys 2", key: "procalsys2", desc: "Advanced calcium supplement formulation." },
  { name: "Laxema Plus", key: "laxemaplus", desc: "Enhanced sodium phosphates enema for quick relief." },
];

function Products() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section 
        className="jai-products-section" 
        id="products"
        style={{
          backgroundImage: `url(${labBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="jai-products-container">
          <div className="jai-products-heading">
            <span className="jai-products-label">QUALITY YOU CAN TRUST</span>
            <h2>Our <span>Products</span></h2>
            <p>Explore our pharmaceutical product range, developed with a commitment to quality, care and reliability.</p>
            <div className="jai-heading-decoration"><span></span><span></span><span></span></div>
          </div>

          <div className="jai-products-grid">
            {PRODUCTS.map((p, i) => {
              const img = getLocalImage(p.key);
              return (
                <article className="jai-product-card" key={i}>
                  <div className="jai-product-image">
                    <span className="jai-product-number">{String(i + 1).padStart(2, "0")}</span>
                    <div className="jai-product-image-inner">
                      {img ? <img src={img} alt={p.name} loading="lazy" /> : <span className="jai-image-missing">{p.key} not found</span>}
                    </div>
                  </div>
                  <div className="jai-product-content">
                    <div className="jai-product-category">PHARMACEUTICAL PRODUCT</div>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <button className="jai-product-button" onClick={() => setSelected({ ...p, img })}>
                      <span>View Product</span>
                      <span className="jai-product-arrow">↗</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="jai-products-footer">
            <span></span>
            <p>Committed to Quality. Dedicated to Care.</p>
            <span></span>
          </div>
        </div>
      </section>

      {selected && (
        <div className="jai-modal-overlay" onClick={() => setSelected(null)}>
          <div className="jai-product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="jai-modal-close" onClick={() => setSelected(null)} aria-label="Close product details">×</button>
            <div className="jai-modal-image">{selected.img && <img src={selected.img} alt={selected.name} />}</div>
            <div className="jai-modal-content">
              <span className="jai-modal-label">JAI PHARMA PRODUCT</span>
              <h3>{selected.name}</h3>
              <p>{selected.desc}</p>
              <div className="jai-modal-buttons">
                <button className="jai-modal-cancel" onClick={() => setSelected(null)}>Close</button>
                <button className="jai-modal-enquiry" onClick={() => { setSelected(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Enquiry →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;