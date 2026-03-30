import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "./components/Footer";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-navy">Get In Touch</h1>
          <div className="underline mx-auto"></div>
          <p className="mt-3 text-secondary">
            Have a project in mind or just want to say hi? Feel free to message me!
          </p>
        </div>
      </section>

      <section className="container my-5">
        <div className="row g-5">
          {/* Contact Info Cards */}
          <div className="col-lg-4">
            <div className="contact-info-wrapper">
              <div className="info-card">
                <div className="icon-circle"><Mail size={24} /></div>
                <div>
                  <h5>Email Me</h5>
                  <p>wadeed125@gmail.com</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="icon-circle"><Phone size={24} /></div>
                <div>
                  <h5>Call Me</h5>
                  <p>+92 3XX XXXXXXX</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-circle"><MapPin size={24} /></div>
                <div>
                  <h5>Location</h5>
                  <p>Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="form-container shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-control custom-input" 
                      placeholder="Your Name" 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control custom-input" 
                      placeholder="Your Email" 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    className="form-control custom-input" 
                    placeholder="Project Inquiry" 
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea 
                    name="message"
                    className="form-control custom-input" 
                    rows="5" 
                    placeholder="Tell me about your project..." 
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-send">
                  Send Message <Send size={18} className="ms-2" />
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </section>

      <style>{`
        .contact-page {
          background-color: #f8f9fa;
          padding-bottom: 80px;
          padding-top: 100px; /* Space for your fixed header */
        }

        .text-navy { color: #1d3557; }
        
        .underline {
          width: 60px;
          height: 4px;
          background-color: #e63946;
          border-radius: 2px;
        }

        /* Info Cards Styling */
        .info-card {
          display: flex;
          align-items: center;
          background: white;
          padding: 25px;
          border-radius: 12px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateX(10px);
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          background: rgba(230, 57, 70, 0.1);
          color: #e63946;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
        }

        /* Form Styling */
        .form-container {
          background: white;
          padding: 40px;
          border-radius: 15px;
          border-top: 5px solid #1d3557;
        }

        .custom-input {
          border: 1px solid #dee2e6;
          padding: 12px;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .custom-input:focus {
          border-color: #e63946;
          box-shadow: 0 0 0 0.25 margin rgba(230, 57, 70, 0.25);
          outline: none;
        }

        .btn-send {
          background-color: #e63946;
          color: white;
          border: none;
          padding: 12px 35px;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          transition: background 0.3s, transform 0.2s;
        }

        .btn-send:hover {
          background-color: #1d3557;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .form-container { padding: 25px; }
        }
      `}</style>
    </div>
  );
}