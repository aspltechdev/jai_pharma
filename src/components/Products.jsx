import React, { useState } from "react";

// Fix: Load from both 'assets' and 'assests' spelling + handle all extensions
const files1 = import.meta.glob('../assets/products/*', { eager: true, as: 'url' });
const files2 = import.meta.glob('../assests/products/*', { eager: true, as: 'url' });
const imageFiles = { ...files1, ...files2 };

function getLocalImage(key){
  if(!key) return '';
  const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const target = clean(key);
  const entries = Object.entries(imageFiles);
  
  // 1. exact filename match (procalys-g == procalys-g)
  let found = entries.find(([p])=>{
    const base = (p.split('/').pop()||'').split('.')[0];
    return clean(base) === target;
  });
  
  // 2. includes match (cutisalointment includes cutisal)
  if(!found){
    const candidates = entries.filter(([p])=> clean(p).includes(target));
    if(candidates.length){
      candidates.sort((a,b)=> clean(a[0]).length - clean(b[0]).length);
      found = candidates[0];
    }
  }
  
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
  // --- NEW 6 PRODUCTS (keys match your dist files) ---
  { name: "Procalys-G", key: "procalys-g", desc: "Calcium with Vitamin D3 and minerals for bone strength." },
  { name: "Procalys", key: "procalys", desc: "Calcium supplement for daily bone health support." },
  { name: "Cutisal Ointment", key: "cutisalointment", desc: "Antifungal ointment for skin infections and itching." },
  { name: "Merbromin NF", key: "merbrominnf", desc: "New formulation antiseptic solution for cuts and wounds." },
  { name: "Procalys 2", key: "procalsys2", desc: "Advanced calcium supplement formulation." },
  { name: "Laxema Plus", key: "laxemaplus", desc: "Enhanced sodium phosphates enema for quick relief." },
];

function Products(){
  const [selected, setSelected] = useState(null);
  return (
    <>
    <section id="products" style={{ padding: '60px 20px', background: '#fafaf8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#1f3d2e' }}>Our Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginTop: '32px' }}>
          {PRODUCTS.map((p,i)=>{
            const img=getLocalImage(p.key);
            return (
              <div key={i} style={{ background: 'white', borderRadius: '16px', border: '1px solid #eee', padding: '12px' }}>
                <div style={{ background: '#fcfcfc', borderRadius: '12px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                  {img ? <img src={img} alt={p.name} style={{ maxHeight: '180px', maxWidth: '100%', objectFit: 'contain' }} /> : <span style={{fontSize:'11px', color:'#aaa'}}>{p.key} not found</span>}
                </div>
                <div style={{ padding: '16px 8px 8px 8px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#222', minHeight: '40px', margin: '0' }}>{p.name}</h3>
                  <p style={{ fontSize: '13px', color: '#888', marginTop: '8px', minHeight: '36px' }}>{p.desc}</p>
                  <button onClick={()=>setSelected({...p, img})} style={{ width: '100%', marginTop: '16px', background: '#1f3d2e', color: 'white', fontSize: '14px', fontWeight: '600', padding: '12px', borderRadius: '999px', border: 'none', cursor: 'pointer' }}>View Product →</button>
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
            {selected.img && <img src={selected.img} alt={selected.name} style={{ maxHeight: '180px', objectFit: 'contain' }} />}
          </div>
          <div style={{ padding: '12px' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '15px' }}>{selected.name}</h3>
            <p style={{ fontSize: '13px', color: '#888', marginTop: '6px' }}>{selected.desc}</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              <button onClick={()=>setSelected(null)} style={{ flex: 1, border: '1px solid #ddd', borderRadius: '999px', padding: '12px', background: 'white' }}>Close</button>
              <button onClick={()=>{setSelected(null); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} style={{ flex: 1, background: '#1f3d2e', color: 'white', borderRadius: '999px', padding: '12px', border: 'none', fontWeight: '600' }}>Enquiry →</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
export default Products;