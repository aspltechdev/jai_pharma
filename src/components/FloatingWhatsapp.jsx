import React from "react";
import "./FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  // REPLACE WITH YOUR NUMBER - no + or spaces
  const phoneNumber = "919876543210"; 
  const message = "Hello JAI PHARMACEUTICALS, I need more info";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="whatsapp-icon">
        <path
          fill="white"
          d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-1.882-.75-3.556-2.49-4.617-4.617a.63.63 0 0 1-.1-.315c0-.43 1.39-1.146 1.39-1.518a.62.62 0 0 0-.22-.47l-1.9-1.9a.6.6 0 0 0-.84 0l-.85.85a2.5 2.5 0 0 0-.7 1.95c.3 2.25 1.9 4.8 4.1 6.1 1.2.7 2.5 1.1 3.9 1.1.7 0 1.4-.2 1.95-.7l.85-.85a.6.6 0 0 0 0-.84l-1.9-1.9a.62.62 0 0 0-.47-.22zM12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.74.46 3.45 1.32 4.95L2 22l5.33-1.4a9.85 9.85 0 0 0 4.71 1.2h.01c5.46 0 9.88-4.42 9.88-9.88C21.93 6.42 17.5 2 12.04 2z"
        />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;