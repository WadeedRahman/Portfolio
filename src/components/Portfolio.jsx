import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExternalLink, Download, Award, Briefcase } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, title: "E-Commerce Platform", category: "web", img: "https://via.placeholder.com/400x250", link: "#" },
    { id: 2, title: "Shopify Fashion Store", category: "shopify", img: "https://via.placeholder.com/400x250", link: "#" },
    { id: 3, title: "Cloud Management Dashboard", category: "cloud", img: "https://via.placeholder.com/400x250", link: "#" },
    // Add more projects here
  ];

  const certifications = [
    { id: 1, name: "AWS Certified Developer", issuer: "Amazon", date: "2023", file: "/certs/aws-cert.pdf" },
    { id: 2, name: "Full Stack Specialization", issuer: "Coursera", date: "2022", file: "/certs/fs-cert.pdf" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      {/* --- HERO / CV SECTION --- */}
      <section className="portfolio-hero text-center bg-navy text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">My Work & Achievements</h1>
          <p className="lead mb-4">A showcase of my latest projects and professional credentials.</p>
          <a href="/Wadeed_CV.pdf" download className="btn btn-danger btn-lg shadow">
            <Download size={20} className="me-2" /> Download My CV (PDF)
          </a>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="container my-5">
        <div className="section-title mb-4">
          <h2 className="text-navy"><Briefcase className="me-2" /> Featured Projects</h2>
          <div className="underline"></div>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex gap-2 mb-4 flex-wrap">
          {["all", "web", "shopify", "cloud"].map((cat) => (
            <button 
              key={cat}
              className={`btn ${filter === cat ? 'btn-navy' : 'btn-outline-navy'} text-capitalize`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <div className="project-card h-100 shadow-sm border-0">
                <img src={project.img} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title text-navy">{project.title}</h5>
                  <span className="badge bg-light text-navy mb-3">{project.category}</span>
                  <br />
                  <a href={project.link} className="btn-link text-crimson text-decoration-none fw-bold">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CERTIFICATIONS SECTION --- */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="section-title mb-4 text-center">
            <h2 className="text-navy"><Award className="me-2" /> Certifications</h2>
            <div className="underline mx-auto"></div>
          </div>
          
          <div className="row justify-content-center">
            {certifications.map((cert) => (
              <div className="col-md-5 mb-3" key={cert.id}>
                <div className="cert-card p-3 bg-white d-flex align-items-center justify-content-between rounded shadow-sm">
                  <div>
                    <h6 className="mb-1 text-navy">{cert.name}</h6>
                    <small className="text-muted">{cert.issuer} | {cert.date}</small>
                  </div>
                  <a href={cert.file} target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm">
                    View PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .portfolio-page { padding-top: 80px; }
        .bg-navy { background-color: #1d3557; }
        .text-navy { color: #1d3557; }
        .text-crimson { color: #e63946; }
        .btn-navy { background-color: #1d3557; color: white; }
        .btn-outline-navy { border: 1px solid #1d3557; color: #1d3557; }
        
        .portfolio-hero { padding: 80px 0; }
        .underline { width: 50px; height: 4px; background: #e63946; margin-bottom: 20px; }

        .project-card { 
          transition: transform 0.3s ease; 
          overflow: hidden; 
          border-radius: 12px;
        }
        .project-card:hover { transform: translateY(-8px); }
        .project-card img { height: 200px; object-fit: cover; }

        .cert-card { transition: 0.3s; border-left: 4px solid #e63946; }
        .cert-card:hover { background: #fff5f5 !important; }
      `}</style>
    </div>
  );
}