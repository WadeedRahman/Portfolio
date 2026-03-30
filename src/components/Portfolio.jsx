import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-18-image-lightbox/style.css"; // --- IMPORTANT: Import Lightbox CSS ---
import Lightbox from "react-18-image-lightbox"; // --- IMPORTANT: Import Lightbox Component ---
import { ExternalLink, Download, Award, Briefcase, ChevronRight, Eye } from "lucide-react";

export default function ModernPortfolio() {
  const [filter, setFilter] = useState("all");

  // --- LIGHTBOX STATE ---
  const [isOpen, setIsOpen] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const projects = [
    { id: 1, title: "Modern E-Com", category: "web", img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80", link: "#" },
    { id: 2, title: "Luxe Shopify", category: "shopify", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", link: "#" },
    { id: 3, title: "AI Dashboard", category: "cloud", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", link: "#" },
  ];

  const certifications = [
    { 
        id: 1, 
        name: "AWS Developer Associate", 
        issuer: "Amazon Web Services", 
        date: "2024", 
        pdf: "/certs/aws.pdf", 
        // --- ADD THE IMAGE PATH HERE ---
        img: "/certs/aws-cert-image.jpg" // Example: Place an image in your public/certs folder
    },
    { 
        id: 2, 
        name: "Meta Front-End Professional", 
        issuer: "Meta/Coursera", 
        date: "2023", 
        pdf: "/certs/meta.pdf",
        img: "/certs/meta-cert-image.jpg"
    },
  ];

  // Helper to open the lightbox at a specific certification
  const openLightbox = (index) => {
    setCurrentCertIndex(index);
    setIsOpen(true);
  };

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="modern-portfolio">
      {/* --- HERO SECTION --- (Same as before) */}
      <section className="hero-gradient text-white text-center d-flex align-items-center">
        <div className="container py-5">
          <span className="badge rounded-pill bg-crimson-glass mb-3 px-3 py-2">MY WORKSTATION</span>
          <h1 className="display-2 fw-bold mb-4">Crafting <span className="text-gradient">Digital Experiences</span></h1>
          <p className="lead mx-auto mb-5 text-light-muted w-75">
            Focused on building high-performance web applications and seamless Shopify experiences with a touch of modern aesthetics.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/Wadeed_CV.pdf" download className="btn-modern-primary">
              Download CV <Download size={18} className="ms-2" />
            </a>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- (Same as before) */}
      <section className="container section-spacer">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h2 className="section-heading"><Briefcase size={32} className="me-2 text-crimson" /> Selected Projects</h2>
            <p className="text-secondary">A curated list of my technical implementations.</p>
          </div>
          
          <div className="filter-pills d-none d-md-flex">
            {["all", "web", "shopify", "cloud"].map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-5">
          {filteredProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="glass-card project-card">
                <div className="img-wrapper">
                  <img src={project.img} alt={project.title} />
                  <div className="img-overlay">
                    <a href={project.link} className="btn-view">Visit Project</a>
                  </div>
                </div>
                <div className="p-4">
                  <small className="text-crimson fw-bold text-uppercase ls-1">{project.category}</small>
                  <h4 className="text-navy mt-1">{project.title}</h4>
                  <p className="text-muted small">Scalable solution built with React and optimized for performance.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CERTIFICATIONS SECTION --- (Updated with click events) */}
      <section className="bg-navy py-5 section-spacer mt-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-white">
              <h2 className="display-5 fw-bold mb-4">My Credentials</h2>
              <p className="opacity-75 mb-4">Continuous learning is at the heart of my development process. Click to enlarge certificates.</p>
              <div className="award-badge">
                <Award size={40} className="text-crimson" />
                <span className="ms-3 fw-bold fs-5">Verified Professional</span>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="cert-stack">
                {certifications.map((cert, index) => (
                  // --- CLICK ON THE WHOLE ITEM TO OPEN IMAGE ---
                  <div className="cert-item-modern mb-3" key={cert.id} onClick={() => openLightbox(index)}>
                    <div className="d-flex align-items-center">
                      <div className="cert-dot"></div>
                      <div>
                        <h5 className="mb-0 text-white">{cert.name}</h5>
                        <small className="text-light-muted">{cert.issuer} • {cert.date}</small>
                      </div>
                    </div>
                    {/* --- ACTIONS GRID --- */}
                    <div className="d-flex gap-3 align-items-center">
                        <span className="btn-action-text text-light-muted">
                           <Eye size={16} className="me-1" /> Zoom Image
                        </span>
                        <div className="divider-vertical"></div>
                        <a href={cert.pdf} target="_blank" rel="noreferrer" className="btn-action-text text-crimson" onClick={(e) => e.stopPropagation()}>
                            <ChevronRight size={16} /> View PDF
                        </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX COMPONENT --- */}
      {isOpen && (
        <Lightbox
          mainSrc={certifications[currentCertIndex].img}
          nextSrc={certifications[(currentCertIndex + 1) % certifications.length].img}
          prevSrc={certifications[(currentCertIndex + certifications.length - 1) % certifications.length].img}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setCurrentCertIndex((currentCertIndex + certifications.length - 1) % certifications.length)}
          onMoveNextRequest={() => setCurrentCertIndex((currentCertIndex + 1) % certifications.length)}
          imageTitle={certifications[currentCertIndex].name}
          imageCaption={`${certifications[currentCertIndex].issuer} | ${certifications[currentCertIndex].date}`}
        />
      )}

      {/* --- STYLES (Updated for Lightbox functionality) --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800&display=swap');

        .modern-portfolio {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
        }

        /* Spacing */
        .section-spacer { padding-top: 120px; padding-bottom: 120px; }
        .ls-1 { letter-spacing: 1px; }

        /* Colors & Gradients */
        .bg-navy { background-color: #0b132b; }
        .text-navy { color: #1d3557; }
        .text-crimson { color: #e63946; }
        .text-light-muted { color: #cbd5e0; }
        .text-gradient {
          background: linear-gradient(90deg, #e63946, #fca311);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Hero */
        .hero-gradient {
          min-height: 85vh;
          background: radial-gradient(circle at top right, #1d3557, #0b132b);
          padding-top: 100px;
        }
        .bg-crimson-glass { background: rgba(230, 57, 70, 0.2); color: #e63946; border: 1px solid rgba(230, 57, 70, 0.3); }

        /* Buttons */
        .btn-modern-primary {
          background: #e63946;
          color: white;
          padding: 16px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s all ease;
          box-shadow: 0 10px 20px rgba(230, 57, 70, 0.3);
        }
        .btn-modern-primary:hover { transform: translateY(-3px); background: #c1121f; color: white; }

        /* Filters */
        .filter-btn {
          border: none;
          background: none;
          padding: 8px 20px;
          font-weight: 600;
          color: #64748b;
          text-transform: capitalize;
          transition: 0.3s;
        }
        .filter-btn.active { color: #e63946; border-bottom: 2px solid #e63946; }

        /* Cards */
        .glass-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 24px;
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        .project-card:hover { transform: translateY(-15px); box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        
        .img-wrapper { position: relative; border-radius: 24px 24px 0 0; overflow: hidden; }
        .img-wrapper img { width: 100%; height: 260px; object-fit: cover; }
        .img-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(29, 53, 87, 0.8); display: flex; align-items: center;
          justify-content: center; opacity: 0; transition: 0.3s;
        }
        .img-wrapper:hover .img-overlay { opacity: 1; }
        .btn-view { color: white; border: 2px solid white; padding: 8px 20px; border-radius: 50px; text-decoration: none; }

        /* Certifications */
        .cert-item-modern {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex; justify-content: space-between; align-items: center;
          transition: 0.3s;
          cursor: pointer; /* IMPORTANT: Shows it is clickable */
        }
        .cert-item-modern:hover { background: rgba(255, 255, 255, 0.1); transform: scale(1.02); }
        .cert-dot { width: 12px; height: 12px; background: #e63946; border-radius: 50%; margin-right: 20px; }
        
        /* Actions Area */
        .divider-vertical { width: 1px; height: 20px; background: rgba(255,255,255,0.1); }
        .btn-action-text { text-decoration: none; font-weight: 600; font-size: 14px; display: flex; align-items: center; transition: 0.3s; }
        .btn-action-text:hover { color: white !important; }

        @media (max-width: 768px) {
            .cert-item-modern { flex-direction: column; align-items: flex-start; gap: 15px; }
            .divider-vertical { display: none; }
        }
      `}</style>
    </div>
  );
}