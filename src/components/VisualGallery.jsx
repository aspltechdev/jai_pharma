// import React, { useState } from "react";

// const lifestyleImages = import.meta.glob('../assets/lifestyle/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
// const productImages = import.meta.glob('../assets/products/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });

// export default function CloserLook(){
//   const images = [...Object.values(lifestyleImages), ...Object.values(productImages)].filter(Boolean);
//   const [current, setCurrent] = useState(0);

//   const prev = () => setCurrent(c => c > 0 ? c - 1 : 0);
//   const next = () => setCurrent(c => c < images.length - 3 ? c + 1 : c);

//   return (
//     <section style={{ padding: '40px 20px', background: '#fefaf6', width: '100vw', maxWidth: '100%', overflow: 'hidden' }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <h2 style={{ fontSize: '22px', fontWeight: '700' }}>A Closer Look at Everyday Care</h2>
//           <div style={{ display: 'flex', gap: '8px' }}>
//             <button onClick={prev} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}>‹</button>
//             <button onClick={next} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}>›</button>
//           </div>
//         </div>

//         <div style={{ overflow: 'hidden', marginTop: '20px', width: '100%' }}>
//           <div style={{ display: 'flex', gap: '16px', transform: `translateX(-${current * 272}px)`, transition: '0.4s ease', width: 'max-content' }}>
//             {images.map((src, i) => (
//               <img key={i} src={src} alt="" style={{ width: '256px', height: '180px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useState } from "react";
// import "./VisualGallery.css";

// const lifestyleImages = import.meta.glob(
//   "../assets/lifestyle/*.{jpg,jpeg,png}",
//   { eager: true, query: "?url", import: "default" }
// );

// const productImages = import.meta.glob(
//   "../assets/products/*.{jpg,jpeg,png}",
//   { eager: true, query: "?url", import: "default" }
// );

// export default function CloserLook() {
//   const images = [
//     ...Object.values(lifestyleImages),
//     ...Object.values(productImages),
//   ].filter(Boolean);

//   const [current, setCurrent] = useState(0);

//   const prev = () => {
//     setCurrent((c) => Math.max(c - 1, 0));
//   };

//   const next = () => {
//     setCurrent((c) => Math.min(c + 1, Math.max(0, images.length - 1)));
//   };

//   return (
//     <section className="closer-look">
//       <div className="closer-container">
//         <div className="closer-header">
//           <div>
//             <span className="closer-tag">OUR GALLERY</span>
//             <h2>A Closer Look at Everyday Care</h2>
//             <p>Discover the little things that make every day better.</p>
//           </div>

//           <div className="carousel-buttons">
//             <button
//               onClick={prev}
//               disabled={current === 0}
//               aria-label="Previous images"
//               className="carousel-btn"
//             >
//               &#8592;
//             </button>

//             <button
//               onClick={next}
//               disabled={current >= images.length - 1}
//               aria-label="Next images"
//               className="carousel-btn"
//             >
//               &#8594;
//             </button>
//           </div>
//         </div>

//         <div className="carousel-viewport">
//           <div
//             className="carousel-track"
//             style={{
//               transform: `translateX(-${current * 276}px)`,
//             }}
//           >
//             {images.map((src, i) => (
//               <div className="gallery-card" key={src}>
//                 <img
//                   src={src}
//                   alt={`Everyday care gallery ${i + 1}`}
//                   loading="lazy"
//                 />
//                 <span className="image-number">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="carousel-progress">
//           <span>
//             {images.length ? String(current + 1).padStart(2, "0") : "00"}
//           </span>
//           <div className="progress-line">
//             <div
//               className="progress-fill"
//               style={{
//                 width: `${
//                   images.length > 1
//                     ? ((current + 1) / images.length) * 100
//                     : images.length ? 100 : 0
//                 }%`,
//               }}
//             />
//           </div>
//           <span>{String(images.length).padStart(2, "0")}</span>
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useState } from "react";
import "./VisualGallery.css";

const lifestyleImages = import.meta.glob(
  "../assets/lifestyle/*.{jpg,jpeg,png}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const productImages = import.meta.glob(
  "../assets/products/*.{jpg,jpeg,png}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export default function CloserLook() {
  const images = [
    ...Object.values(lifestyleImages),
    ...Object.values(productImages),
  ].filter(Boolean);

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const next = () => {
    setCurrent((c) =>
      Math.min(c + 1, Math.max(0, images.length - 1))
    );
  };

  return (
    <section className="closer-look">
      <div className="closer-container">

        {/* Heading */}
        <div className="closer-header">
          <div>
            <span className="closer-tag">OUR GALLERY</span>

            <h2>A Closer Look at Everyday Care</h2>

            <p>
              Discover the little things that make every day better.
            </p>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="carousel-wrapper">

          {/* Left Arrow */}
          <button
            className="carousel-btn carousel-btn-left"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous image"
          >
            &#8592;
          </button>

          {/* Images Frame */}
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${current * 276}px)`,
              }}
            >
              {images.map((src, i) => (
                <div className="gallery-card" key={src}>
                  <img
                    src={src}
                    alt={`Everyday care ${i + 1}`}
                    loading="lazy"
                  />

                  <span className="image-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="carousel-btn carousel-btn-right"
            onClick={next}
            disabled={current >= images.length - 1}
            aria-label="Next image"
          >
            &#8594;
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="carousel-progress">
          <span>
            {String(images.length ? current + 1 : 0).padStart(2, "0")}
          </span>

          <div className="progress-line">
            <div
              className="progress-fill"
              style={{
                width: `${
                  images.length > 0
                    ? ((current + 1) / images.length) * 100
                    : 0
                }%`,
              }}
            />
          </div>

          <span>
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}
