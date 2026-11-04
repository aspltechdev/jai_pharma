
import React, { useState, useEffect } from "react";
import "./Contact.css";

const WEB3FORMS_ACCESS_KEY = "56e71f42-e185-455c-90c0-1fa42f0949f2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "General Enquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

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

    window.addEventListener("productEnquiry", handleProductEnquiry);

    const savedProduct = localStorage.getItem("enquiryProduct");

    if (savedProduct) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: savedProduct,
        message: `Hello, I want to enquire about: ${savedProduct}\n\nPlease share details like price, availability and packing.`,
      }));

      localStorage.removeItem("enquiryProduct");
    }

    return () => {
      window.removeEventListener("productEnquiry", handleProductEnquiry);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit using Web3Forms
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Enquiry - ${formData.enquiryType}`,
          from_name: "JAI PHARMACEUTICALS Website",
          name: formData.name,
          email: formData.email,
          enquiry_type: formData.enquiryType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          enquiryType: "General Enquiry",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
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

              <div className="contact-map-wrap">
                <iframe
                  title="Jai Pharmaceuticals Location"
                  src="https://maps.google.com/maps?q=12.1827,79.3245&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="contact-map-badge">
                  📍 JAI PHARMACEUTICALS
                </div>
              </div>

              <a
                className="contact-map-link"
                href="https://www.google.com/maps/search/?api=1&query=12.1827,79.3245"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps ↗
              </a>
            </div>

            <div className="contact-info-block">
              <h3>WhatsApp Enquiries</h3>
              <p>+91 97910 60803</p>

              <a
                className="contact-whatsapp-link"
                href="https://wa.me/919791060803"
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
              <label htmlFor="contact-type">
                Enquiry Type / Product
              </label>

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
              disabled={loading}
            >
              {loading ? "Sending Enquiry..." : "Submit Enquiry"}
            </button>

            {status === "success" && (
              <p className="contact-success-message" role="status">
                ✓ Your enquiry has been submitted successfully!
              </p>
            )}

            {status === "error" && (
              <p className="contact-error-message" role="alert">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="contact-form-note">
              Your enquiry will be sent directly to our email.
              Our team will contact you soon.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
