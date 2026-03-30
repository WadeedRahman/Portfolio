import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-18-image-lightbox/style.css"; 
import Lightbox from "react-18-image-lightbox"; 
import { Download, Award, Briefcase, ChevronRight, Eye } from "lucide-react";
// --- CORRECT PATH: Go into components folder ---
import Footer from "./components/Footer"; 

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
      <section className="hero-gradient text-white text-center d-flex align-items-center">
        <div className="container py-5">
          <span className="badge rounded-pill bg-crimson-glass mb-3 px-3 py-2">MY WORKSTATION</span>
          <h1 className="display-2 fw-bold mb-4">Crafting <span className="text-gradient">Digital Experiences</span></h1>
          <p className="lead mx-auto mb-5 text-light-muted w-75">Focused on building high-performance web applications.</p>
          <a href="/Wadeed_CV.pdf" download className="btn-modern-primary">Download CV <Download size={18} className="ms-2" /></a>
        </div>
      </section>

      {/* ... Projects & Certs sections (as you had them) ... */}
      <section className="container section-spacer">
         {/* Insert your project mapping here */}
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={certifications[currentCertIndex].img}
          onCloseRequest={() => setIsOpen(false)}
          onMoveNextRequest={() => setCurrentCertIndex((currentCertIndex + 1) % certifications.length)}
          onMovePrevRequest={() => setCurrentCertIndex((currentCertIndex + certifications.length - 1) % certifications.length)}
        />
      )}

      {/* --- RENDER FOOTER --- */}
      <Footer />

      <style>{`
        /* Insert your portfolio styles here */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800&display=swap');
        .modern-portfolio { font-family: 'Inter', sans-serif; }
        .hero-gradient { min-height: 80vh; background: radial-gradient(circle at top right, #1d3557, #0b132b); }
        .text-gradient { background: linear-gradient(90deg, #e63946, #fca311); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .btn-modern-primary { background: #e63946; color: white; padding: 12px 30px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; }
      `}</style>
    </div>
  );
}