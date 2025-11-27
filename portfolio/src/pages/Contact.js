import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css'; // optional for extra styling

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  if (data.success) {
    alert("Message sent!");
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  } else {
    alert("Error: " + data.error);
  }
};


  return (
    <div className="contact-section py-5 px-3 px-md-5">
      <h2 className="fw-bold mb-4 text-center text-light" data-aos="fade-down">
        Get in Touch
      </h2>

      <div className="row g-5 align-items-start">
        {/* Contact Info */}
        <div className="col-md-5 text-light" data-aos="fade-right">
          <div className="mb-4">
            <h5><FaEnvelope className="me-2" />Email</h5>
            <p><a href="mailto:youremail@example.com" className="contact-link">hailolaa21@gmail.com</a></p>
          </div>

          <div className="mb-4">
            <h5><FaPhoneAlt className="me-2" />Phone</h5>
            <p><a href="tel:+1234567890" className="contact-link">+251963896086</a></p>
          </div>

          <div>
            <h5>Socials</h5>
            <p>
              <a href="https://github.com/hailolaa" target="_blank" rel="noreferrer" className="me-3 contact-link">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="me-3 contact-link">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="contact-link">
                <FaTwitter size={20} />
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7" data-aos="fade-left">
          <div className="glass-card p-4 shadow-lg rounded-4 bg-opacity-25">
            {submitted && (
              <div className="alert alert-success" role="alert">
                Thanks for reaching out! I’ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold text-light">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold text-light">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold text-light">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-control"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary px-4 mt-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
