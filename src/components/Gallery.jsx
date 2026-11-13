import React, { useRef } from "react";
import bg1 from "../assets/bg1.jpg";

// Load all product images from assets/products
const imageFiles = import.meta.glob(
  "../assets/products/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// VALUE = exact cleaned filename from your folder
// procalys (2).jpeg -> cleaned = procalys2
// laxema (2).jpeg -> cleaned = laxema2
// calaminelotionip.jpg -> calaminelotionip
const IMAGE_ALIASES = {
  whitefield: ["whitefield", "benzoicacid", "compoundbenzoicacid"],
  calamine: ["calaminelotionip"],
  cloveoil: ["cloveoil"],
  eucalyptus: ["eucalyptus", "eucalyptusoil"],
  glycerin: ["glycerinip", "glycerol"],
  hydrogen: ["hydrogenperoxidesolution"],
  icthammol: ["icthammolglycerin"],
  laxema: ["laxema2"],
  liquidparaffin: ["liquidparaffin"],
  mandlis: ["mandlispaint"],
  merbromin: ["merbrominsolution"],
  pottasium: ["pottassiumpermangnate"],
  ringzolin: ["ringzolin"],
  salicyclic: ["salicyclic"],
  salicyclicacid: ["salicyclicacid"],
  tincture: ["tincture", "benzointincture", "compoundbenzointincture"],
  "procalys-g": ["procalysg"],
  procalys: ["procalys2"],
  cutisalointment: ["cutisalointment"],
  merbrominnf: ["merbrominnf"],
  procalsys2: ["procalsys2"],
  laxemaplus: ["laxemaplus"],
};

function cleanName(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getLocalImage(key) {
  if (!key) return "";
  const aliases = IMAGE_ALIASES[key] || [key];
  const entries = Object.entries(imageFiles);

  for (const alias of aliases) {
    const target = cleanName(alias);
    const found = entries.find(([path]) => {
      const filename = path.split("/").pop().replace(/\.[^.]+$/, "");
      return cleanName(filename) === target;
    });
    if (found) return found[1];
  }

  console.warn("Product image not found:", key);
  return "";
}

const PRODUCTS = [
  { name: "Compound Benzoic Acid Ointment I.P.", key: "whitefield" },
  { name: "Calamine Lotion I.P.", key: "calamine" },
  { name: "Clove Oil I.P.", key: "cloveoil" },
  { name: "Eucalyptus Oil", key: "eucalyptus" },
  { name: "Glycerin I.P. (Glycerol)", key: "glycerinip" },
  { name: "Hydrogen Peroxide Solution", key: "hydrogen" },
  { name: "Ichthammol Glycerin B.P.C.", key: "icthammol" },
  { name: "Laxema - Sodium Phosphates Enema BP", key: "laxema" },
  { name: "Liquid Paraffin I.P.", key: "liquidparaffin" },
  { name: "Mandl's Paint - Compound Iodine Paint B.P.C.", key: "mandlis" },
  { name: "Merbromin Solution I.P.", key: "merbromin" },
  { name: "Potassium Permanganate", key: "pottasiumpermangnate" },
  { name: "Salicylic Acid & Coal Tar Solution - RingzOlin", key: "salicyclicacid" },
  { name: "Salicylic Acid Ointment I.P. 6% w/w", key: "salicyclic" },
  { name: "Compound Benzoin Tincture I.P.", key: "tincture" },
  { name: "Procalys-G", key: "procalys-g" },
  { name: "Procalys", key: "procalys" },
  { name: "Cutisal Ointment", key: "cutisalointment" },
  { name: "Merbromin NF", key: "merbrominnf" },
  { name: "Procalys 2", key: "procalsys2" },
  { name: "Laxema Plus", key: "laxemaplus" },
];

function Gallery() {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" style={{ padding: "60px 0", backgroundImage: `url(${bg1})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(253,251,246,0.82)", zIndex: 0 }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: "12px", letterSpacing: "3px", fontWeight: "700", color: "#b07a4f", margin: 0 }}>OUR GALLERY</p>
        <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#1e1e1e", marginTop: "8px", marginBottom: 0 }}>A Closer Look at Everyday Care</h2>
        <p style={{ fontSize: "14px", color: "#888", marginTop: "8px" }}>Discover the little things that make every day better.</p>
      </div>
      <div style={{ position: "relative", marginTop: "32px", zIndex: 1 }}>
        <div ref={scrollRef} style={{ display: "flex", gap: "20px", overflowX: "auto", scrollbarWidth: "none", paddingLeft: "20px", paddingRight: "80px" }}>
          {PRODUCTS.map((p, i) => {
            const img = getLocalImage(p.key);
            return (
              <div key={p.key} style={{ minWidth: "300px", width: "300px", height: "380px", borderRadius: "20px", overflow: "hidden", background: "white", position: "relative", flexShrink: 0, border: "1px solid #f0f0f0" }}>
                <div style={{ height: "300px", background: "#fcfcfc", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                  {img ? (
                    <img src={img} alt={p.name} loading="lazy" style={{ maxHeight: "260px", maxWidth: "100%", objectFit: "contain" }} onError={(e) => { e.currentTarget.style.display = "none"; console.error("Failed to load:", p.name, img); }} />
                  ) : (
                    <span style={{ fontSize: "11px", color: "#aaa" }}>Image not found: {p.key}</span>
                  )}
                </div>
                <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ background: "rgba(0,0,0,0.7)", color: "white", width: "30px", height: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700" }}>{String(i + 1).padStart(2, "0")}</div>
                    <p style={{ fontSize: "12px", fontWeight: "600", color: "#333", margin: 0, maxWidth: "180px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</p>
                  </div>
                  <span style={{ fontSize: "16px" }}>→</span>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={() => scroll("right")} style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", background: "white", border: "none", width: "52px", height: "52px", borderRadius: "50%", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", cursor: "pointer", fontSize: "22px", zIndex: 2 }}>→</button>
        <button onClick={() => scroll("left")} style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", background: "white", border: "none", width: "52px", height: "52px", borderRadius: "50%", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", cursor: "pointer", fontSize: "22px", zIndex: 2, display: "none" }}>←</button>
      </div>
    </section>
  );
}

export default Gallery;