import React, { useState } from "react";

const imageFiles = import.meta.glob('../assets/products/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, query: '?url', import: 'default' });
function getLocalImage(key){
  const k = key.toLowerCase();
  const found = Object.entries(imageFiles).find(([p])=> p.toLowerCase().includes(k));
  return found ? found[1] : '';
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
];

export default function Products(){
  const [selected, setSelected] = useState(null);
  return (
    <>
    <section id="products" style={{ padding: '60px 20px', background: '#fafaf8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#1f3d2e' }}>Our Products</h2>
        <p style={{ fontSize: '14px', color: '#888', marginTop: '6px' }}>Names exactly as printed on packaging.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginTop: '32px' }}>
          {PRODUCTS.map((p,i)=>{
            const img=getLocalImage(p.key);
            return (
              <div key={i} style={{ background: 'white', borderRadius: '16px', border: '1px solid #eee', padding: '12px', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
                <div style={{ background: '#fcfcfc', borderRadius: '12px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box' }}>
                  {img ? <img src={img} alt={p.name} style={{ maxHeight: '180px', maxWidth: '100%', objectFit: 'contain', display: 'block' }} /> : null}
                </div>
                <div style={{ padding: '16px 8px 8px 8px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#222', lineHeight: '1.3', minHeight: '40px', margin: '0' }}>{p.name}</h3>
                  <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.4', marginTop: '8px', minHeight: '36px' }}>{p.desc}</p>
                  <button 
                    onClick={()=>setSelected({...p, img})}
                    style={{ width: '100%', marginTop: '16px', background: '#1f3d2e', color: 'white', fontSize: '14px', fontWeight: '600', padding: '12px', borderRadius: '999px', border: 'none', cursor: 'pointer', display: 'block' }}
                  >
                    View Product →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    {selected && (
      <div style={{ position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }} onClick={()=>setSelected(null)}>
        <div style={{ background: 'white', borderRadius: '16px', width: '100%', maxWidth: '360px', padding: '12px' }} onClick={e=>e.stopPropagation()}>
          <div style={{ background: '#fcfcfc', borderRadius: '12px', height: '230px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <img src={selected.img} alt={selected.name} style={{ maxHeight: '180px', objectFit: 'contain' }} />
          </div>
          <div style={{ padding: '12px' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '15px' }}>{selected.name}</h3>
            <p style={{ fontSize: '13px', color: '#888', marginTop: '6px' }}>{selected.desc}</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              <button onClick={()=>setSelected(null)} style={{ flex: 1, border: '1px solid #ddd', borderRadius: '999px', padding: '12px', background: 'white', cursor: 'pointer' }}>Close</button>
              <button onClick={()=>{setSelected(null); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} style={{ flex: 1, background: '#1f3d2e', color: 'white', borderRadius: '999px', padding: '12px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>Enquiry →</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}