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

  return (
    <div className="portfolio-main">
      {/* --- HERO SECTION --- */}
      <section className="hero-modern">
        <div className="container d-flex align-items-center flex-column flex-lg-row">
          <div className="hero-text-block">
            <div className="badge-modern mb-3">
              <span className="dot"></span> OPEN FOR COLLABORATION
            </div>
            <h1 className="hero-title">
              Innovating the <span className="text-gradient">Digital</span> <br />
              Landscape.
            </h1>
            <p className="hero-description">
              I’m <strong>Wadeed Ur Rahman</strong>. I bridge the gap between 
              complex backend logic and pixel-perfect frontend experiences.
            </p>
            <button className="btn-main" onClick={() => setShowForm(true)}>
              Get In Touch
            </button>
          </div>
          <div className="hero-visual">
            <div className="glass-frame">
              <img src="you.png" alt="Wadeed" className="hero-img" />
              <div className="floating-card card-1">Full-Stack</div>
              <div className="floating-card card-2">React 19</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT ME SECTION --- */}
      <section className="about-section container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="about-visual">
                <div className="experience-box">
                    <h3>2+</h3>
                    <p>Years of <br/> Crafting Code</p>
                </div>
                <div className="blob-bg"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <h6 className="section-subtitle">WHO AM I?</h6>
            <h2 className="section-title">A Developer with a Passion for <span className="text-gradient">Problem Solving</span></h2>
            <p className="about-text">
              My journey started with a curiosity for how things work under the hood. 
              Today, I specialize in building scalable web applications using the 
              MERN stack and modern UI frameworks. I don't just write code; 
              I build solutions that help businesses grow.
            </p>
            <div className="skill-tags">
              <span>Clean Code</span>
              <span>User Centric</span>
              <span>Fast Learner</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section className="education-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-subtitle">MY JOURNEY</h6>
            <h2 className="section-title text-white">Academic <span className="text-gradient">Background</span></h2>
          </div>
          <div className="education-grid">
            {/* Degree 1 */}
            <div className="edu-card">
              <div className="edu-icon"><i className="bi bi-mortarboard-fill"></i></div>
              <div className="edu-content">
                <span className="edu-date">2021 — 2025</span>
                <h4>Bachelor of Computer Science</h4>
                <p className="edu-org">Your University Name</p>
                <p className="edu-desc">Focused on Software Engineering, Data Structures, and Web Technologies.</p>
              </div>
            </div>
            {/* Degree 2 */}
            <div className="edu-card">
              <div className="edu-icon"><i className="bi bi-patch-check-fill"></i></div>
              <div className="edu-content">
                <span className="edu-date">2019 — 2021</span>
                <h4>Intermediate in Computer Science</h4>
                <p className="edu-org">Your College Name</p>
                <p className="edu-desc">Foundation in Programming Fundamentals and Mathematics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        .portfolio-main { background: #0b132b; color: white; }
        .section-subtitle { color: #e63946; font-weight: 700; letter-spacing: 2px; font-size: 0.9rem; margin-bottom: 10px; display: block; }
        .section-title { font-size: 2.8rem; font-weight: 800; margin-bottom: 25px; color: white; }
        .text-gradient { background: linear-gradient(90deg, #e63946, #fca311); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

        /* About Styles */
        .about-section { padding: 100px 0; }
        .about-text { color: #a0aec0; line-height: 1.8; font-size: 1.1rem; }
        .skill-tags { display: flex; gap: 15px; margin-top: 30px; }
        .skill-tags span { background: rgba(230, 57, 70, 0.1); color: #e63946; padding: 8px 20px; border-radius: 50px; font-weight: 600; border: 1px solid rgba(230, 57, 70, 0.2); }
        .about-visual { position: relative; }
        .experience-box { position: absolute; bottom: 20px; right: 20px; background: white; color: #0b132b; padding: 25px; border-radius: 20px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.3); z-index: 2; }
        .experience-box h3 { font-size: 2.5rem; font-weight: 900; margin-bottom: 0; color: #e63946; }
        .blob-bg { width: 350px; height: 350px; background: linear-gradient(45deg, #e63946, #0b132b); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; animation: blob 8s infinite alternate; filter: blur(40px); opacity: 0.4; }

        /* Education Styles */
        .education-grid { display: grid; gap: 30px; max-width: 800px; margin: 0 auto; }
        .edu-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 30px; border-radius: 25px; display: flex; gap: 25px; transition: 0.3s; }
        .edu-card:hover { background: rgba(255, 255, 255, 0.06); transform: translateX(10px); border-color: #e63946; }
        .edu-icon { font-size: 2rem; color: #e63946; }
        .edu-date { color: #fca311; font-weight: 700; font-size: 0.9rem; }
        .edu-content h4 { margin: 10px 0 5px; font-weight: 700; }
        .edu-org { font-weight: 600; color: #a0aec0; margin-bottom: 10px; }
        .edu-desc { color: #718096; font-size: 0.95rem; }

        @keyframes blob { from { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } to { border-radius: 50% 50% 20% 80% / 20% 50% 50% 80%; } }
        
        /* Mobile adjustment */
        @media (max-width: 768px) { .edu-card { flex-direction: column; text-align: center; } .section-title { font-size: 2.2rem; } }
      `}</style>

      {/* Your Contact Form Popup Logic here... */}
    </div>
  );
};

export default Hero;