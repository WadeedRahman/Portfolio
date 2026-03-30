import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AboutPage() {
  return (
    <div>
      {/* HEADER */}
      <section className="about-header text-center">
        <div className="container">
          <h1>About Me</h1>
          <div className="underline"></div>
        </div>
      </section>

      {/* FIRST SECTION (PROFILE & CONTACT) */}
      <section className="container about-content">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-5 mb-md-0">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="profile"
                className="img-fluid profile-img"
              />
            </div>
          </div>

          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h3>Designing With Passion While Exploring The World</h3>
                <div className="small-underline"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="col-md-6">
                <h3>I Create Products Not Just Arts</h3>
                <div className="small-underline"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <p className="mt-5 mb-1">Let's talk with me.</p>
            <h4 className="email">contact@domain.com</h4>
          </div>
        </div>
      </section>

      {/* SECOND SECTION (SKILLS) */}
      <section className="about-extended container pb-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="section-title">Frontend and Backend Developer</h2>
            <div className="underline left"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn btn-danger download-btn">Download CV</button>
          </div>

          <div className="col-md-6">
            <Skill name="JavaScript" width="85%" />
            <Skill name="HTML" width="80%" />
            <Skill name="CSS" width="90%" />
            <Skill name="Photoshop" width="95%" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section py-5">
        <div className="container text-center">
          <h2 className="section-title">What My Clients Say</h2>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="underline mx-auto"></div>

          <div className="row mt-5">
            <TestimonialCard 
              name="John Doe" 
              img="https://randomuser.me/api/portraits/men/1.jpg" 
            />
            <TestimonialCard 
              name="Jenna Smith" 
              img="https://randomuser.me/api/portraits/women/2.jpg" 
            />
            <TestimonialCard 
          name="Samuel Stevens" 
              img="https://randomuser.me/api/portraits/men/3.jpg" 
            />
          </div>

          <div className="row mt-md-4">
            <TestimonialCard 
              name="Jessica Loren" 
              img="https://randomuser.me/api/portraits/women/4.jpg" 
            />
            <TestimonialCard 
              name="Mykel Johnson" 
              img="https://randomuser.me/api/portraits/men/5.jpg" 
            />
          </div>
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section className="subscribe-section py-5">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="section-title mb-4">Stay In Touch</h2>
              <p className="subscribe-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
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
          </div>
          
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .about-header {
          background: #f4f4f4;
          padding: 80px 0;
        }

        .about-header h1 {
          font-size: 48px;
          color: #1d3557;
          font-weight: 700;
        }

        .underline {
          width: 80px;
          height: 3px;
          background: #e63946;
          margin: 15px auto;
        }

        .about-content {
          padding: 100px 0 80px 0;
        }

        .image-wrapper {
          position: relative;
          display: inline-block;
          z-index: 2; /* Ensures image is on top */
        }

        .image-wrapper::before {
          content: "";
          position: absolute;
          top: -15px;
          left: -15px;
          width: 100%;
          height: 100%;
          background: #e63946;
          z-index: -1; /* Pushes red background shape BEHIND the image */
          border-radius: 10px;
        }

        .profile-img {
          border-radius: 10px;
          max-width: 350px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        h3, .section-title {
          color: #1d3557;
          font-weight: 700;
        }

        .small-underline {
          width: 50px;
          height: 2px;
          background: #e63946;
          margin: 10px 0;
        }

        .email {
          color: #1d3557;
          font-weight: bold;
        }

        .underline.left {
          margin-left: 0;
        }

        .download-btn {
          margin-top: 20px;
          padding: 10px 30px;
          border-radius: 5px;
        }

        .skill {
          margin-bottom: 20px;
        }

        .progress {
          height: 12px;
          background: #ddd;
          border-radius: 20px;
        }

        .progress-bar {
          height: 100%;
          background: #e63946;
        }

        /* Testimonials Styling */
        .testimonials-section {
          background-color: #fdfdfd;
        }

        .subtitle {
          color: #666;
          margin-bottom: 10px;
        }

        .testimonial-card {
          background: #fff;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          margin-bottom: 30px;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
        }

        .quote-icon {
          color: #e63946;
          font-size: 40px;
          line-height: 1;
          margin-bottom: 20px;
          display: block;
        }

        .client-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
          border: 3px solid #fff;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .testimonial-text {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .client-name {
          color: #1d3557;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .card-divider {
          width: 40px;
          height: 2px;
          background: #e63946;
          margin: 15px auto;
        }

        /* Subscribe Styling */
        .subscribe-section {
          background: #fff;
        }

        .subscribe-text {
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .subscribe-input {
          padding: 15px 25px;
          border-radius: 5px;
          border: 1px solid #ddd;
          min-width: 300px;
          color: #333;
        }

        .subscribe-input:focus {
          border-color: #e63946;
          box-shadow: none;
        }

        .subscribe-btn {
          padding: 15px 40px;
          font-weight: 700;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .about-header h1 {
            font-size: 36px;
          }
          .subscribe-input {
            width: 100%;
            min-width: auto;
          }
        }
      `}</style>
    </div>
  );
}

function Skill({ name, width }) {
  return (
    <div className="skill">
      <div className="d-flex justify-content-between mb-1">
        <span>{name}</span>
        <span className="text-muted">{width}</span>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width }}></div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, img }) {
  return (
    <div className="col-md-4">
      <div className="testimonial-card">
        <span className="quote-icon">“</span>
        <img src={img} alt={name} className="client-img" />
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="card-divider"></div>
        <h5 className="client-name">{name}</h5>
      </div>
      
    </div>
  );
}