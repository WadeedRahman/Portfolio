import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GitHub, Linkedin, Twitter, Mail, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      {/* Wave SVG Decorator */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="container mt-5">
        <div className="row g-4 py-5">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-logo text-gradient mb-3">Wadeed.</h3>
            <p className="text-light-muted pe-lg-5">
              Building high-performance web applications with modern tech stacks. 
              Let's turn your vision into a digital reality.
            </p>
            <div className="social-links d-flex gap-3 mt-4">
              <a href="https://github.com/WadeedRahman" target="_blank" className="social-icon"><GitHub size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-4 fw-bold">Explore</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Quick View */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4 fw-bold">Specialties</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">React Development</a></li>
              <li><a href="#">Shopify Solutions</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Cloud Hosting</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4 fw-bold">Contact Info</h5>
            <div className="contact-item d-flex align-items-center mb-3">
              <div className="icon-box-small me-3"><Mail size={16} /></div>
              <span className="text-light-muted">wadeed125@gmail.com</span>
            </div>
            <button onClick={scrollToTop} className="btn-back-to-top mt-3">
               Back to Top <ArrowUp size={16} className="ms-2" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom border-top border-secondary py-4 text-center">
          <p className="text-light-muted mb-0 small">
            © {new Date().getFullYear()} <span className="text-white fw-bold">Wadeed Rahman</span>. 
            Built with <Heart size={14} className="text-crimson mx-1" /> using React 19.
          </p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: #0b132b;
          position: relative;
          overflow: hidden;
        }

        .footer-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .footer-wave svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 50px;
        }

        .footer-wave .shape-fill {
          fill: #ffffff; /* Matches your page background */
        }

        .text-light-muted { color: #a0aec0; }
        .text-crimson { color: #e63946; }
        
        .text-gradient {
          background: linear-gradient(90deg, #e63946, #fca311);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          font-size: 2rem;
        }

        /* Links */
        .footer-links li { margin-bottom: 12px; }
        .footer-links a {
          color: #a0aec0;
          text-decoration: none;
          transition: 0.3s;
          font-size: 0.95rem;
        }
        .footer-links a:hover { color: #e63946; padding-left: 5px; }

        /* Social Icons */
        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.05);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          text-decoration: none;
        }
        .social-icon:hover {
          background: #e63946;
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(230, 57, 70, 0.4);
        }

        /* Contact & Buttons */
        .icon-box-small {
          width: 32px;
          height: 32px;
          background: rgba(230, 57, 70, 0.1);
          color: #e63946;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-back-to-top {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          transition: 0.3s;
        }
        .btn-back-to-top:hover {
          background: white;
          color: #0b132b;
          border-color: white;
        }

        .footer-bottom { border-color: rgba(255,255,255,0.05) !important; }

        @media (max-width: 768px) {
          .footer-section { text-align: center; }
          .social-links { justify-content: center; }
          .contact-item { justify-content: center; }
        }
      `}</style>
    </footer>
  );
}