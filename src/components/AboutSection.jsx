import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutSection() {

  // ✅ Testimonials Data (EDIT HERE anytime)
  const testimonials = [
    {
      name: "rohit_go",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      review: "Amazing work! The project was delivered on time and exceeded my expectations."
    },
    {
      name: "Jenna Smith",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      review: "Very professional and easy to work with. Highly recommended!"
    },
    {
      name: "Samuel Stevens",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      review: "Great attention to detail and clean code. Will hire again!"
    },
    {
      name: "Jessica Loren",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      review: "Fantastic experience! Communication was smooth throughout the project."
    },
    {
      name: "Mykel Johnson",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      review: "Delivered exactly what I needed. Very skilled developer!"
    }
  ];

  return (
    <div>
      {/* HEADER */}
      <section className="about-header text-center">
        <div className="container">
          <h1>About Me</h1>
          <div className="underline"></div>
        </div>
      </section>

      {/* FIRST SECTION */}
      <section className="container about-content">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-5 mb-md-0">
            <div className="image-wrapper">
              <img
                src="wadeed1.png"
                alt="profile"
                className="img-fluid profile-img"
              />
            </div>
          </div>

          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h3>Building With Purpose</h3>
                <div className="small-underline"></div>
                <p>
                  I focus on creating web applications that are fast, scalable, and easy to use.
                </p>
                <p>
                  From frontend design to backend logic, I aim to keep things clean and efficient.
                </p>
              </div>

              <div className="col-md-6">
                <h3>More Than Just Development</h3>
                <div className="small-underline"></div>
                <p>
                  I handle the full process from development to deployment using DevOps practices.
                </p>
                <p>
                  I also work with WordPress, Shopify, and Amazon PPC for growth solutions.
                </p>
              </div>
            </div>

            <p className="mt-5 mb-1">Let’s work together.</p>
            <h4 className="email">wadeed125@gmail.com</h4>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="about-extended container pb-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="section-title">Full Stack & DevOps Expertise</h2>
            <div className="underline left"></div>
            <p>I build responsive interfaces with React and scalable backend systems.</p>
            <button className="btn btn-danger download-btn">Download CV</button>
          </div>

          <div className="col-md-6">
            <Skill name="Development" width="95%" />
            <Skill name="Deployment" width="95%" />
            <Skill name="Wordpress" width="90%" />
            <Skill name="Amazon" width="85%" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section py-5">
        <div className="container text-center">
          <h2 className="section-title">What My Clients Say</h2>
          <div className="underline mx-auto"></div>

          <div className="row mt-5">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="subscribe-section py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Stay In Touch</h2>

          <form className="subscribe-form d-flex flex-column flex-sm-row justify-content-center gap-3">
            <input
              type="email"
              className="form-control subscribe-input"
              placeholder="Enter email address *"
              required
            />
            <button type="submit" className="btn btn-danger subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .about-header { background: #f4f4f4; padding: 80px 0; }
        .about-header h1 { font-size: 48px; color: #1d3557; }
        .underline { width: 80px; height: 3px; background: #e63946; margin: 15px auto; }
        .about-content { padding: 100px 0 80px 0; }

        .image-wrapper { position: relative; display: inline-block; }
        .image-wrapper::before {
          content: "";
          position: absolute;
          top: -15px; left: -15px;
          width: 100%; height: 100%;
          background: #e63946;
          z-index: -1;
          border-radius: 10px;
        }

        .profile-img { border-radius: 10px; max-width: 350px; }

        .testimonial-card {
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          margin-bottom: 30px;
        }

        .client-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 15px;
        }

        .testimonial-text { color: #555; }
        .client-name { font-weight: bold; }

        .subscribe-input { padding: 12px; min-width: 250px; }
      `}</style>
    </div>
  );
}

// Skill Component
function Skill({ name, width }) {
  return (
    <div className="skill mb-3">
      <div className="d-flex justify-content-between">
        <span>{name}</span>
        <span>{width}</span>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width }}></div>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ name, img, review }) {
  return (
    <div className="col-md-4">
      <div className="testimonial-card">
        <span className="quote-icon">“</span>
        <img src={img} alt={name} className="client-img" />
        <p className="testimonial-text">{review}</p>
        <h5 className="client-name">{name}</h5>
      </div>
    </div>
  );
}