import React, { useState, useEffect } from "react";
import "./Contact.css";

const WHATSAPP_NUMBER = "919791060803";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "General Enquiry",
    message: "",
  });

  // Auto-fill when Enquiry clicked from Products
  useEffect(() => {
    const handleProductEnquiry = (event) => {
      const productName = event.detail;
      setFormData((prev) => ({
        ...prev,
        enquiryType: productName,
        message: `Hello, I want to enquire about: ${productName}\n\nPlease share details like price, availability and packing.`,
      }));
    };

    window.addEventListener('productEnquiry', handleProductEnquiry);

    // Also check if product saved in localStorage (backup)
    const savedProduct = localStorage.getItem('enquiryProduct');
    if (savedProduct) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: savedProduct,
        message: `Hello, I want to enquire about: ${savedProduct}\n\nPlease share details like price, availability and packing.`,
      }));
      localStorage.removeItem('enquiryProduct');
    }

    return () => {
      window.removeEventListener('productEnquiry', handleProductEnquiry);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = [
      "Hello JAI PHARMACEUTICALS!",
      "",
      "New Website Enquiry",
      "--------------------",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Enquiry Type: ${formData.enquiryType}`,
      `Message: ${formData.message}`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-eyebrow">Contact Us</p>
          <h2>Let’s Connect</h2>
          <p className="contact-intro">
            Have a product or business enquiry? Use the form below
            to send us your message.
          </p>

          <div className="contact-info-card">
            <div className="contact-info-block">
              <h3>JAI PHARMACEUTICALS</h3>
              <p>
                We Welcome Questions About Product Availability,
                Categories And Business Enquiries.
              </p>
            </div>

            <div className="contact-info-block contact-location">
              <h3>Location</h3>
              <p>
                Thuthipattu, Gingee Taluk, Viluppuram,
                Tamil Nadu – 605201
              </p>
            </div>

            <div className="contact-info-block contact-location">
              <h3>WhatsApp Enquiries</h3>
              <p>+91 97910 60803</p>
              <a
                className="contact-whatsapp-link"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send An Enquiry</h3>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="You@Example.Com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-type">Enquiry Type / Product</label>
              <input
                type="text"
                id="contact-type"
                name="enquiryType"
                placeholder="General Enquiry"
                value={formData.enquiryType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your enquiry here..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit-button"
            >
              Submit Enquiry via WhatsApp
            </button>

            <p className="contact-form-note">
              Clicking submit opens WhatsApp with your enquiry
              details. Please press Send in WhatsApp to deliver it.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;