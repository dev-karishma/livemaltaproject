
import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", subject: "", message: "", agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.agree) return alert("Please agree to the data protection policy.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="success-box">
            <div className="success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Our team will get back to you as soon as possible.</p>
            <button className="submit-btn" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-wrapper">
      <div className="contact-container">

        {/* ── HEADER ── */}
        <div className="contact-header">
          <div className="header-decor" />
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-desc">
            For any question related to our campus, our programmes or any other
            subject concerning Ascencia Malta, please fill in the form below.
            Our team will get back to you as soon as possible.
          </p>
        </div>

        {/* ── FORM ── */}
        <form className="contact-form" onSubmit={submit}>

          {/* Row 1 — First / Last Name */}
          <div className="form-row">
            <div className="field">
              <input
                type="text" name="firstName" placeholder="First Name*"
                value={form.firstName} onChange={handle} required
              />
            </div>
            <div className="field">
              <input
                type="text" name="lastName" placeholder="Last Name*"
                value={form.lastName} onChange={handle} required
              />
            </div>
          </div>

          {/* Row 2 — Email / Phone */}
          <div className="form-row">
            <div className="field">
              <input
                type="email" name="email" placeholder="E-mail*"
                value={form.email} onChange={handle} required
              />
            </div>
            <div className="field phone-field">
              <span className="flag">🇮🇳</span>
              <span className="flag-sep">▾</span>
              <input
                type="tel" name="phone" placeholder="Phone*"
                value={form.phone} onChange={handle}
              />
            </div>
          </div>

          {/* Row 3 — Subject + Message */}
          <div className="form-row row-split">
            <div className="field">
              <input
                type="text" name="subject" placeholder="Subject of your message*"
                value={form.subject} onChange={handle} required
              />
            </div>
            <div className="field">
              <textarea
                name="message" placeholder="Your message*"
                value={form.message} onChange={handle} required
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="checkbox-row">
            <input
              type="checkbox" id="agree" name="agree"
              checked={form.agree} onChange={handle}
            />
            <label htmlFor="agree">
              I agree that Ascencia Malta collects and uses the personal data
              I have just entered in this form in order to send me educational
              proposals adapted to my project, which I have agreed to receive,
              in accordance with our data protection policy.
            </label>
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>

        {/* ── MAP ── */}
        <div className="map-container">
          <iframe
            title="Ascencia Malta Map"
            src="https://www.google.com/maps?q=Ascencia+Malta&output=embed"
            width="100%" height="350"
            style={{ border: 0 }} allowFullScreen loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}