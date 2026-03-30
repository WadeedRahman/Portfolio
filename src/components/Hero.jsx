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
import "../index.css";
import { fireConfetti } from "../Confetti";

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
    <div className="hero-wrapper">
      <section className="hero-modern">
        {/* Animated Background Blobs */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>

        <div className="container hero-content d-flex align-items-center">
          <div className="hero-text-block">
            <div className="badge-modern mb-3">
              <span className="dot"></span> AVAILABLE FOR PROJECTS
            </div>
            <h1 className="hero-title">
              Crafting <span className="text-gradient">Digital</span> <br />
              Architectures.
            </h1>
            <p className="hero-description">
              I’m <strong>Wadeed</strong>—a developer turning complex logic into 
              seamless, high-performance web experiences. No Dickensian ghosts here, 
              just future-proof code.
            </p>

            <div className="hero-actions">
              <button className="btn-main" onClick={() => setShowForm(true)}>
                Start a Conversation
              </button>
              <div className="trust-badges mt-4 d-flex gap-4">
                <div className="stat"><strong>50+</strong> Projects</div>
                <div className="stat"><strong>100%</strong> Success Rate</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-frame">
              <img src="you.png" alt="Wadeed" className="hero-img" />
              {/* Floating Tech Cards */}
              <div className="floating-card card-1">🚀 React 19</div>
              <div className="floating-card card-2">⚡ Shopify</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TECH STACK RIBBON */}
      <div className="tech-ribbon">
        <div className="ribbon-track">
          <span>REACT</span> • <span>NODE.JS</span> • <span>TYPESCRIPT</span> • 
          <span>SHOPIFY</span> • <span>AWS</span> • <span>NEXT.JS</span> • 
          <span>UI/UX</span> • <span>REACT</span> • <span>NODE.JS</span>
        </div>
      </div>

      {/* SECTION 2: THE "VALUE" GRID */}
      <section className="value-grid container">
        <div className="row g-4 text-center">
            <div className="col-md-4">
                <div className="value-card">
                    <i className="bi bi-lightning-charge"></i>
                    <h4>Performance</h4>
                    <p>Websites optimized for speed and SEO rankings.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="value-card">
                    <i className="bi bi-phone"></i>
                    <h4>Responsive</h4>
                    <p>Flawless experiences across mobile, tablet, and desktop.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="value-card">
                    <i className="bi bi-shield-check"></i>
                    <h4>Scalable</h4>
                    <p>Clean code that grows with your business needs.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Contact Form Popup (Keep your existing logic) */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-container-modern">
            <button className="close-btn" onClick={() => setShowForm(false)}>✖</button>
            <h2>Let's build something.</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Tell me about your project" required></textarea>
              <button type="submit" className="btn-main w-100">Send Inquiry</button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .hero-wrapper { background: #0b132b; color: white; overflow: hidden; }
        .hero-modern { position: relative; padding: 120px 0; min-height: 85vh; display: flex; align-items: center; }
        
        /* Typography */
        .hero-title { font-size: clamp(3rem, 8vw, 5.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 25px; }
        .text-gradient { background: linear-gradient(90deg, #e63946, #fca311); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-description { font-size: 1.2rem; color: #a0aec0; max-width: 500px; margin-bottom: 40px; line-height: 1.7; }

        /* Buttons & Badges */
        .btn-main { background: #e63946; color: white; border: none; padding: 15px 40px; border-radius: 50px; font-weight: 700; transition: 0.3s; }
        .btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(230, 57, 70, 0.3); }
        .badge-modern { display: inline-flex; align-items: center; background: rgba(255,255,255,0.05); padding: 8px 15px; border-radius: 20px; font-size: 0.8rem; letter-spacing: 1px; color: #e63946; border: 1px solid rgba(230,57,70,0.3); }
        .dot { width: 8px; height: 8px; background: #e63946; border-radius: 50%; margin-right: 10px; animation: pulse 2s infinite; }

        /* Visuals */
        .hero-visual { position: relative; flex: 1; display: flex; justify-content: center; }
        .glass-frame { position: relative; background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 30px; padding: 20px; }
        .hero-img { width: 350px; height: auto; border-radius: 20px; filter: grayscale(20%); transition: 0.5s; }
        .hero-img:hover { filter: grayscale(0%); transform: scale(1.02); }

        /* Floating Elements */
        .floating-card { position: absolute; background: white; color: #0b132b; padding: 12px 20px; border-radius: 15px; font-weight: 700; box-shadow: 0 15px 35px rgba(0,0,0,0.2); animation: float 4s ease-in-out infinite; }
        .card-1 { top: -20px; right: -20px; }
        .card-2 { bottom: 40px; left: -40px; animation-delay: 2s; }

        /* Tech Ribbon */
        .tech-ribbon { background: #e63946; padding: 20px 0; transform: rotate(-2deg); width: 110%; margin-left: -5%; margin-top: -30px; border-top: 2px solid white; border-bottom: 2px solid white; }
        .ribbon-track { white-space: nowrap; font-weight: 900; font-size: 1.5rem; letter-spacing: 4px; animation: scroll 20s linear infinite; }

        /* Value Grid */
        .value-grid { padding: 100px 0; }
        .value-card { background: rgba(255,255,255,0.03); padding: 40px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); transition: 0.3s; }
        .value-card:hover { background: rgba(255,255,255,0.07); transform: translateY(-10px); }
        .value-card i { font-size: 2.5rem; color: #e63946; margin-bottom: 20px; display: block; }

        /* Animations */
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        @media (max-width: 992px) {
          .hero-content { flex-direction: column; text-align: center; }
          .hero-description { margin: 0 auto 40px; }
          .hero-visual { margin-top: 80px; }
          .floating-card { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Hero;