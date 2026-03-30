import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "High-performance, responsive websites built with the latest frontend technologies to ensure a seamless user experience.",
      icon: "🌐"
    },
    {
      title: "Full Stack Development",
      description: "End-to-end solutions from database architecture to polished user interfaces using MERN or specialized stacks.",
      icon: "💻"
    },
    {
      title: "DevOps Services",
      description: "Streamlining your development workflow with CI/CD pipelines, automation, and infrastructure as code.",
      icon: "♾️"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure management and migration services using AWS, Azure, or Google Cloud.",
      icon: "☁️"
    },
    {
      title: "WordPress Development",
      description: "Custom themes and plugin development tailored to your brand, ensuring easy content management.",
      icon: "📝"
    },
    {
      title: "Shopify Development",
      description: "Complete e-commerce store setup, custom liquid coding, and optimization for high conversion rates.",
      icon: "🛍️"
    },
    {
      title: "Amazon PPC",
      description: "Strategic ad management and campaign optimization to increase your product visibility and sales on Amazon.",
      icon: "🚀"
    }
  ];

  return (
    <div className="services-page">
      {/* HEADER SECTION */}
      <section className="services-header text-center">
        <div className="container">
          <h1>Our Services</h1>
          <div className="underline mx-auto"></div>
          <p className="header-subtitle">
            We provide high-quality digital solutions to help your business grow and scale in the modern world.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container services-grid-section">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="service-card">
                <div className="icon-box">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <div className="card-accent"></div>
                <p className="service-description">{service.description}</p>
                <button className="read-more">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="cta-section text-center">
        <div className="container">
          <div className="cta-box">
            <h2>Have a Project in Mind?</h2>
            <p>Let's build something amazing together. Reach out for a free consultation.</p>
            <button className="btn btn-danger cta-btn">Get Started Now</button>
          </div>
          <Footer />
        </div>
      </section>

      <style>{`
        .services-page {
          background-color: #fdfdfd;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Header Styling - Matching About Page */
        .services-header {
          background: #f4f4f4;
          padding: 100px 0 60px 0;
        }

        .services-header h1 {
          font-size: 48px;
          color: #1d3557;
          font-weight: 700;
        }

        .underline {
          width: 80px;
          height: 3px;
          background: #e63946;
          margin-top: 15px;
        }

        .header-subtitle {
          color: #666;
          max-width: 600px;
          margin: 20px auto 0;
          font-size: 1.1rem;
        }

        /* Grid Section */
        .services-grid-section {
          padding: 80px 0;
        }

        /* Service Card Styling */
        .service-card {
          background: #fff;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          height: 100%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border-bottom: 4px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-bottom: 4px solid #e63946;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .icon-box {
          font-size: 40px;
          margin-bottom: 20px;
          display: inline-block;
        }

        .service-title {
          color: #1d3557;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .card-accent {
          width: 40px;
          height: 2px;
          background: #e63946;
          margin-bottom: 20px;
        }

        .service-description {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .read-more {
          background: none;
          border: none;
          color: #e63946;
          font-weight: 600;
          padding: 0;
          transition: color 0.2s;
        }

        .read-more:hover {
          color: #1d3557;
        }

        /* Call To Action */
        .cta-section {
          padding: 100px 0;
          background: #fff;
        }

        .cta-box {
          background: #1d3557;
          color: #fff;
          padding: 60px 40px;
          border-radius: 20px;
          position: relative;
        }

        .cta-box h2 {
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-box p {
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .cta-btn {
          background-color: #e63946;
          border: none;
          padding: 15px 40px;
          font-weight: 700;
          text-transform: uppercase;
          transition: transform 0.2s;
        }

        .cta-btn:hover {
          background-color: #c42f3a;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .services-header h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}