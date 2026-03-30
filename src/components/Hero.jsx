/*
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

      
        <button className="btn" onClick={() => setShowForm(true)}>
          LET'S WORK TOGETHER
        </button>
      </div>

      <div className="hero-image">
        <div className="image-frame">
          <img src="you.png" alt="hero" />
        </div>
      </div>

      
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

           
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <FaLinkedin size={30} />
            </a>

            
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    
    </section>
  );
};

export default Hero;*/




import React, { useEffect, useState } from "react";
// ... (keep your other imports)

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // After 3 seconds, close the form and reset
    setTimeout(() => {
      setShowForm(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="portfolio-main">
      {/* ... (keep Hero, About, and Education sections) */}

      {/* --- MODERN CONTACT MODAL --- */}
      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <div className="form-container-glass" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setShowForm(false)}>×</button>
            
            {!isSubmitted ? (
              <>
                <div className="form-header">
                  <h2>Let's <span className="text-gradient">Connect</span></h2>
                  <p>Have an idea? Let's turn it into reality.</p>
                </div>

                <form onSubmit={handleSubmit} className="modern-form">
                  <div className="input-group-modern">
                    <input type="text" id="name" required placeholder=" " />
                    <label htmlFor="name">Full Name</label>
                  </div>

                  <div className="input-group-modern">
                    <input type="email" id="email" required placeholder=" " />
                    <label htmlFor="email">Email Address</label>
                  </div>

                  <div className="input-group-modern">
                    <textarea id="message" required placeholder=" " rows="4"></textarea>
                    <label htmlFor="message">Tell me about your project...</label>
                  </div>

                  <button type="submit" className="btn-send">
                    <span>Send Message</span>
                    <i className="bi bi-send-fill ms-2"></i>
                  </button>
                </form>
              </>
            ) : (
              <div className="success-state text-center">
                <div className="success-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out, Wadeed will get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        /* Form Overlay */
        .form-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(11, 19, 43, 0.85); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center; z-index: 9999;
          animation: fadeIn 0.3s ease;
        }

        /* Glass Container */
        .form-container-glass {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 50px; border-radius: 30px; width: 100%; max-width: 500px;
          position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .close-x {
          position: absolute; top: 20px; right: 25px; background: none;
          border: none; color: white; font-size: 2rem; cursor: pointer; opacity: 0.5;
        }
        .close-x:hover { opacity: 1; color: #e63946; }

        .form-header h2 { font-weight: 800; margin-bottom: 10px; }
        .form-header p { color: #a0aec0; margin-bottom: 30px; }

        /* Modern Input Styling (Floating Labels) */
        .input-group-modern { position: relative; margin-bottom: 30px; }
        
        .input-group-modern input, 
        .input-group-modern textarea {
          width: 100%; padding: 15px; background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
          color: white; outline: none; transition: 0.3s;
        }

        .input-group-modern label {
          position: absolute; left: 15px; top: 15px; color: #718096;
          pointer-events: none; transition: 0.3s;
        }

        /* Logic for floating labels */
        .input-group-modern input:focus ~ label,
        .input-group-modern input:not(:placeholder-shown) ~ label,
        .input-group-modern textarea:focus ~ label,
        .input-group-modern textarea:not(:placeholder-shown) ~ label {
          top: -25px; left: 5px; font-size: 0.85rem; color: #e63946; font-weight: 600;
        }

        .input-group-modern input:focus, 
        .input-group-modern textarea:focus { border-color: #e63946; background: rgba(255,255,255,0.06); }

        .btn-send {
          width: 100%; padding: 15px; background: #e63946; color: white;
          border: none; border-radius: 12px; font-weight: 700; transition: 0.3s;
        }
        .btn-send:hover { background: #c12a36; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(230, 57, 70, 0.3); }

        /* Success State Animation */
        .success-icon { font-size: 4rem; color: #4ade80; margin-bottom: 20px; animation: scaleUp 0.4s ease; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0); } to { transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default Hero;