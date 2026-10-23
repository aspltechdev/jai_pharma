import React from "react";

const imageFiles = import.meta.glob('../assets/products/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, query: '?url', import: 'default' });

function getLocalImage(key){
  const k = key.toLowerCase();
  const found = Object.entries(imageFiles).find(([p])=> p.toLowerCase().includes(k));
  return found ? found[1] : '';
}

const GALLERY = [
  { key: "whitefield", title: "Compound Benzoic Acid Ointment I.P." },
  { key: "calamine", title: "Calamine Lotion I.P." },
  { key: "cloveoil", title: "Clove Oil I.P." },
  { key: "eucalyptus", title: "Eucalyptus Oil" },
  { key: "glycerin", title: "Glycerin I.P." },
  { key: "hydrogen", title: "Hydrogen Peroxide" },
  { key: "icthammol", title: "Ichthammol Glycerin" },
  { key: "laxema", title: "Laxema Enema" },
];

export default function Gallery(){
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[28px] font-bold text-[#5a5e4a]">Visual Gallery</h2>
        <p className="text-[14px] text-gray-500 mt-1">Real products from JAI PHARMACEUTICALS</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {GALLERY.map((g,i)=>{
            const img = getLocalImage(g.key);
            return (
              <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden h-[200px] flex items-center justify-center p-4">
                {img && <img src={img} alt={g.title} className="max-h-[160px] max-w-full object-contain" />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}