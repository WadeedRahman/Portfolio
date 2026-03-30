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
//import "../index.css";
import { fireConfetti } from "../Confetti";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fireConfetti();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Wadeed will contact you soon.");
    setShowForm(false);
  };

  return (
    <div className="hero-wrapper">
      {/* --- HERO SECTION --- */}
      <section className="hero-modern">
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
              seamless, high-performance web experiences.
            </p>

            <div className="hero-actions">
              <button className="btn-main" onClick={() => setShowForm(true)}>
                Start a Conversation
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-frame">
              <img src="you.png" alt="Wadeed" className="hero-img" />
              <div className="floating-card card-1">🚀 React 19</div>
              <div className="floating-card card-2">⚡ Shopify</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT ME BLOCK --- */}
      <section className="about-block container my-5">
        <div className="row align-items-center glass-card p-5">
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
             <div className="exp-circle">
                <h2 className="text-gradient mb-0">2+</h2>
                <span>Years Exp.</span>
             </div>
          </div>
          <div className="col-lg-8">
            <h6 className="text-crimson fw-bold mb-2">ABOUT ME</h6>
            <h2 className="mb-3">Passionate about <span className="text-gradient">Problem Solving</span></h2>
            <p className="text-light-muted">
              I specialize in building scalable web applications. My approach is simple: 
              Write clean code, focus on the user experience, and always keep learning. 
              Whether it's a React frontend or a complex Node backend, I'm ready to build it.
            </p>
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section className="education-grid container py-5">
        <h2 className="text-center mb-5">Academic <span className="text-gradient">Journey</span></h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="edu-card">
              <span className="edu-date">2021 - 2025</span>
              <h4>Bachelor of Computer Science</h4>
              <p className="text-crimson">University Name Here</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="edu-card">
              <span className="edu-date">2019 - 2021</span>
              <h4>Intermediate in Computer Science</h4>
              <p className="text-crimson">College Name Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- REPAIRING THE FORM (STRICT CSS) --- */}
      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <div className="form-container-glass" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setShowForm(false)}>×</button>
            <div className="form-header text-center mb-4">
              <h2 className="text-white">Let's <span className="text-gradient">Work</span></h2>
              <p className="text-light-muted">Send me a message and I'll respond within 24 hours.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group-modern mb-3">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="input-group-modern mb-3">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="input-group-modern mb-3">
                <textarea placeholder="Tell me about your project..." rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-main w-100">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {/* --- TECH RIBBON --- */}
      <div className="tech-ribbon mt-5">
        <div className="ribbon-track">
          <span>REACT</span> • <span>NODE.JS</span> • <span>SHOPIFY</span> • <span>NEXT.JS</span> • <span>UI/UX</span> • <span>REACT</span> • <span>NODE.JS</span>
        </div>
      </div>

      <style>{`
        .hero-wrapper { background: #0b132b; color: white; overflow: hidden; padding-bottom: 50px; }
        .text-gradient { background: linear-gradient(90deg, #e63946, #fca311); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-crimson { color: #e63946; }
        .text-light-muted { color: #a0aec0; }

        /* Form Overlay Fix */
        .form-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(11, 19, 43, 0.9); backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center; z-index: 10000;
        }
        .form-container-glass {
          background: #162447; border: 1px solid rgba(255,255,255,0.1);
          padding: 40px; border-radius: 25px; width: 90%; max-width: 500px;
          position: relative; animation: slideUp 0.4s ease;
        }
        .close-x {
          position: absolute; top: 15px; right: 20px; background: none; border: none;
          color: white; font-size: 2rem; cursor: pointer;
        }
        .input-group-modern input, .input-group-modern textarea {
          width: 100%; padding: 12px 20px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; outline: none;
        }
        .input-group-modern input:focus { border-color: #e63946; }

        /* About & Education */
        .glass-card { background: rgba(255,255,255,0.03); border-radius: 30px; border: 1px solid rgba(255,255,255,0.05); }
        .exp-circle {
          width: 150px; height: 150px; border: 4px solid #e63946; border-radius: 50%;
          display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto;
        }
        .edu-card {
          background: rgba(255,255,255,0.02); padding: 30px; border-radius: 20px;
          border-left: 4px solid #e63946; transition: 0.3s;
        }
        .edu-card:hover { background: rgba(255,255,255,0.05); transform: translateY(-5px); }
        .edu-date { color: #fca311; font-weight: bold; font-size: 0.9rem; }

        /* Existing Styles Repaired */
        .hero-modern { position: relative; padding: 100px 0; min-height: 80vh; display: flex; align-items: center; }
        .hero-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; }
        .hero-description { color: #a0aec0; max-width: 500px; margin: 20px 0 40px; }
        .btn-main { background: #e63946; color: white; border: none; padding: 14px 35px; border-radius: 50px; font-weight: 700; transition: 0.3s; cursor: pointer; }
        .btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(230, 57, 70, 0.4); }
        
        .hero-visual { flex: 1; display: flex; justify-content: center; }
        .glass-frame { position: relative; background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 30px; padding: 15px; }
        .hero-img { width: 300px; border-radius: 20px; }
        
        .tech-ribbon { background: #e63946; padding: 15px 0; width: 110%; margin-left: -5%; transform: rotate(-1deg); }
        .ribbon-track { white-space: nowrap; font-weight: 900; animation: scroll 20s linear infinite; }

        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
        .dot { width: 8px; height: 8px; background: #e63946; border-radius: 50%; margin-right: 10px; display: inline-block; animation: pulse 2s infinite; }
        .badge-modern { display: inline-flex; align-items: center; background: rgba(255,255,255,0.05); padding: 5px 15px; border-radius: 20px; color: #e63946; border: 1px solid rgba(230,57,70,0.3); }

        @media (max-width: 992px) {
          .hero-content { flex-direction: column; text-align: center; }
          .hero-visual { margin-top: 50px; }
        }
      `}</style>
    </div>
  );
};

export default Hero;