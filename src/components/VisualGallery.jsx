
import React, { useState } from "react";
import "./VisualGallery.css";

const lifestyleImages = import.meta.glob(
  "../assets/lifestyle/*.{jpg,jpeg,png}",
  { eager: true, query: "?url", import: "default" }
);

const productImages = import.meta.glob(
  "../assets/products/*.{jpg,jpeg,png}",
  { eager: true, query: "?url", import: "default" }
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
    <section className="cl-gallery-section">
      <div className="cl-gallery-container">

        <div className="cl-gallery-heading">
          <span className="cl-gallery-eyebrow">OUR GALLERY</span>

          <h2 className="cl-gallery-title">
            A Closer Look at Everyday Care
          </h2>

          <p className="cl-gallery-description">
            Discover the little things that make every day better.
          </p>
        </div>

        <div className="cl-gallery-carousel">

          <button
            className="cl-gallery-arrow cl-gallery-arrow-left"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous image"
          >
            &#8592;
          </button>

          <div className="cl-gallery-viewport">
            <div
              className="cl-gallery-track"
              style={{
                transform: `translateX(-${current * 276}px)`,
              }}
            >
              {images.map((src, i) => (
                <div className="cl-gallery-card" key={src}>
                  <img
                    className="cl-gallery-image"
                    src={src}
                    alt={`Everyday care ${i + 1}`}
                    loading="lazy"
                  />

                  <span className="cl-gallery-image-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            className="cl-gallery-arrow cl-gallery-arrow-right"
            onClick={next}
            disabled={current >= images.length - 1}
            aria-label="Next image"
          >
            &#8594;
          </button>

        </div>

        <div className="cl-gallery-progress">
          <span className="cl-gallery-progress-current">
            {String(images.length ? current + 1 : 0).padStart(2, "0")}
          </span>

          <div className="cl-gallery-progress-track">
            <div
              className="cl-gallery-progress-fill"
              style={{
                width: `${
                  images.length
                    ? ((current + 1) / images.length) * 100
                    : 0
                }%`,
              }}
            />
          </div>

          <span className="cl-gallery-progress-total">
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}
