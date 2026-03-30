import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-18-image-lightbox/style.css"; 
import Lightbox from "react-18-image-lightbox"; 
import { Download, Award, Briefcase, ChevronRight, Eye, GitHub, Linkedin, Twitter, Mail, ArrowUp, Heart } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const projects = [
    { id: 1, title: "Modern E-Com", category: "web", img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80", link: "#" },
    { id: 2, title: "Luxe Shopify", category: "shopify", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", link: "#" },
    { id: 3, title: "AI Dashboard", category: "cloud", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", link: "#" },
  ];

  const certifications = [
    { id: 1, name: "AWS Developer Associate", issuer: "Amazon Web Services", date: "2024", pdf: "/certs/aws.pdf", img: "/certs/aws-cert-image.jpg" },
    { id: 2, name: "Meta Front-End Professional", issuer: "Meta/Coursera", date: "2023", pdf: "/certs/meta.pdf", img: "/certs/meta-cert-image.jpg" },
  ];

  const openLightbox = (index) => {
    setCurrentCertIndex(index);
    setIsOpen(true);
  };

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="modern-portfolio">
      {/* HERO */}
      <section className="hero-gradient text-white text-center d-flex align-items-center">
        <div className="container py-5">
          <span className="badge rounded-pill bg-crimson-glass mb-3 px-3 py-2">MY WORKSTATION</span>
          <h1 className="display-2 fw-bold mb-4">Crafting <span className="text-gradient">Digital Experiences</span></h1>
          <p className="lead mx-auto mb-5 text-light-muted w-75">Focused on building high-performance web applications.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/Wadeed_CV.pdf" download className="btn-modern-primary">Download CV <Download size={18} className="ms-2" /></a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container section-spacer">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <h2 className="section-heading"><Briefcase size={32} className="me-2 text-crimson" /> Selected Projects</h2>
          <div className="filter-pills d-none d-md-flex">
            {["all", "web", "shopify", "cloud"].map((cat) => (
              <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="row g-5">
          {filteredProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="glass-card project-card">
                <div className="img-wrapper">
                  <img src={project.img} alt={project.title} />
                  <div className="img-overlay"><a href={project.link} className="btn-view">Visit Project</a></div>
                </div>
                <div className="p-4">
                  <small className="text-crimson fw-bold text-uppercase ls-1">{project.category}</small>
                  <h4 className="text-navy mt-1">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-navy py-5 section-spacer mt-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-white">
              <h2 className="display-5 fw-bold mb-4">My Credentials</h2>
              <div className="award-badge">
                <Award size={40} className="text-crimson" />
                <span className="ms-3 fw-bold fs-5">Verified Professional</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cert-stack">
                {certifications.map((cert, index) => (
                  <div className="cert-item-modern mb-3" key={cert.id} onClick={() => openLightbox(index)}>
                    <div className="d-flex align-items-center">
                      <div className="cert-dot"></div>
                      <div>
                        <h5 className="mb-0 text-white">{cert.name}</h5>
                        <small className="text-light-muted">{cert.issuer} • {cert.date}</small>
                      </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <span className="btn-action-text text-light-muted"><Eye size={16} className="me-1" /> Zoom</span>
                        <a href={cert.pdf} target="_blank" rel="noreferrer" className="btn-action-text text-crimson" onClick={(e) => e.stopPropagation()}><ChevronRight size={16} /> PDF</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {isOpen && (
        <Lightbox
          mainSrc={certifications[currentCertIndex].img}
          nextSrc={certifications[(currentCertIndex + 1) % certifications.length].img}
          prevSrc={certifications[(currentCertIndex + certifications.length - 1) % certifications.length].img}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setCurrentCertIndex((currentCertIndex + certifications.length - 1) % certifications.length)}
          onMoveNextRequest={() => setCurrentCertIndex((currentCertIndex + 1) % certifications.length)}
        />
      )}

      {/* --- INTEGRATED FOOTER --- */}
      <FooterComponent />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800&display=swap');
        .modern-portfolio { font-family: 'Inter', sans-serif; background-color: #ffffff; }
        .section-spacer { padding-top: 100px; padding-bottom: 100px; }
        .bg-navy { background-color: #0b132b; }
        .text-crimson { color: #e63946; }
        .text-gradient { background: linear-gradient(90deg, #e63946, #fca311); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-gradient { min-height: 80vh; background: radial-gradient(circle at top right, #1d3557, #0b132b); }
        .btn-modern-primary { background: #e63946; color: white; padding: 12px 30px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; }
        .glass-card { background: #fff; border: 1px solid #eee; border-radius: 20px; overflow: hidden; }
        .img-wrapper img { width: 100%; height: 250px; object-fit: cover; }
        .cert-item-modern { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; display: flex; justify-content: space-between; cursor: pointer; transition: 0.3s; }
        .cert-item-modern:hover { background: rgba(255,255,255,0.1); }
        .cert-dot { width: 10px; height: 10px; background: #e63946; border-radius: 50%; margin-right: 15px; margin-top: 7px; }
        .btn-action-text { text-decoration: none; font-size: 14px; font-weight: 600; }
        
        /* Footer Styles */
        .footer-section { background-color: #0b132b; padding: 60px 0 30px; position: relative; border-top: 1px solid rgba(255,255,255,0.05); }
        .footer-logo { font-weight: 800; font-size: 1.8rem; margin-bottom: 20px; }
        .social-icon { width: 40px; height: 40px; background: rgba(255,255,255,0.05); color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; transition: 0.3s; }
        .social-icon:hover { background: #e63946; transform: translateY(-3px); }
        .text-light-muted { color: #a0aec0; }
      `}</style>
    </div>
  );
}

function FooterComponent() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="footer-section">
      <div className="container text-center">
        <h3 className="footer-logo text-gradient">Wadeed.</h3>
        <p className="text-light-muted mb-4">Building high-performance web applications.</p>
        <div className="mb-4">
          <a href="https://github.com/WadeedRahman" className="social-icon"><GitHub size={20} /></a>
          <a href="#" className="social-icon"><Linkedin size={18} /></a>
          <a href="#" className="social-icon"><Mail size={18} /></a>
        </div>
        <button onClick={scrollToTop} className="btn btn-outline-light btn-sm rounded-pill px-4">Back to Top <ArrowUp size={14} className="ms-1" /></button>
        <hr className="my-4 opacity-10" />
        <p className="small text-light-muted mb-0">© {new Date().getFullYear()} Wadeed Rahman. Built with <Heart size={12} className="text-crimson" /> using React 19.</p>
      </div>
    </footer>
  );
}