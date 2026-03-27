/*import React, { useEffect } from "react";
import "../index.css";
import confetti from "canvas-confetti";
import { fireConfetti } from "../Confetti";

const Hero = () => {
useEffect(() => {
  fireConfetti();
}, []);


  return (
    <section className="hero">
      <div className="hero-text">
        <p className="subtitle">THIS IS ME</p>
        <h1>Wadeed Ur Rahman</h1>
        <p className="description">
          You will begin to realise why this exercise is called the Dickens
          Pattern with reference to the ghost showing Scrooge some different
          futures.
        </p>
        <button className="btn">DISCOVER NOW</button>
      </div>

      <div className="hero-image">
        <div className="image-frame">
          <img
            src="my.png"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
  };

export default Hero;*/




import React, { useEffect, useState } from "react";
import "../index.css";
import { fireConfetti } from "../Confetti";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fireConfetti();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="subtitle">THIS IS ME</p>
        <h1>Wadeed Ur Rahman</h1>
        <p className="description">
          You will begin to realise why this exercise is called the Dickens
          Pattern with reference to the ghost showing Scrooge some different
          futures.
        </p>

        {/* Updated Button */}
        <button className="btn" onClick={() => setShowForm(true)}>
          LET'S WORK TOGETHER
        </button>
      </div>

      <div className="hero-image">
        <div className="image-frame">
          <img src="my.png" alt="hero" />
        </div>
      </div>

      {/* Contact Form Popup */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input type="text" placeholder="Your Name" required />
              <label>Your Email</label>
              <input type="email" placeholder="Your Email" required />
              <label>Your Message</label>
              <textarea placeholder="Your Message" required></textarea>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <FaLinkedin size={30} />
            </a>

            {/* Close Button */}
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;