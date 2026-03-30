import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AboutSection() {
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
              <p>I focus on creating web applications that are fast, scalable, and easy to use. 
        Every project I work on is built with performance and real-world usability in mind.</p>  
         <p>
        From frontend design to backend logic, I aim to keep things clean, efficient, 
        and aligned with modern development standards.
      </p>
              </div>

              <div className="col-md-6">
                <h3>More Than Just Development</h3>
                <div className="small-underline"></div>
                 <p>
        I don’t just build websites—I handle the full process from development to deployment 
        using DevOps practices to ensure smooth and reliable delivery.
      </p>
      <p>
        I also work with WordPress and Shopify for eCommerce solutions, and use Amazon PPC 
        to help products reach the right audience and grow effectively.
      </p>
              </div>
            </div>

            <p className="mt-5 mb-1">Let’s work together.</p>
            <h4 className="email">wadeed125@gmail.com.com</h4>
          </div>
        </div>
      </section>

      {/* SECOND SECTION (SKILLS) */}
      <section className="about-extended container pb-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="section-title">Full Stack & DevOps Expertise</h2>
            <div className="underline left"></div>
              <p>
        I work across both frontend and backend, building responsive interfaces 
        with React and developing scalable server-side solutions using Node.js.
      </p>
      <p>
        Along with development, I handle deployment, optimization, and maintenance 
        using modern DevOps practices to ensure reliable and efficient applications.
      </p>
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

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section py-5">
        <div className="container text-center">
          <h2 className="section-title">What My Clients Say</h2>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="underline mx-auto"></div>

          <div className="row mt-5">
  <TestimonialCard 
    name="rohit_go" 
    img="https://randomuser.me/api/portraits/men/1.jpg" 
    review="I worked on a project with wadeed. He is quick to respond to your queries and maintain communication."
  />
  <TestimonialCard 
    name="tdwash2" 
    img="https://randomuser.me/api/portraits/women/2.jpg" 
    review="Very good quality in delivery of service."
  />
  <TestimonialCard 
    name="triple_m" 
    img="https://randomuser.me/api/portraits/men/3.jpg" 
    review="Wadeed was very polite and exceptionally efficient in his work. I will definitely hire him again."
  />
</div>

<div className="row mt-md-4">
  <TestimonialCard 
    name="gograninc" 
    img="https://randomuser.me/api/portraits/women/4.jpg" 
    review="Great person to work with."
  />
  <TestimonialCard 
    name="vdsk123" 
    img="https://randomuser.me/api/portraits/men/5.jpg" 
    review="Professional and direct."
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

function TestimonialCard({ name, img, review }) {
  return (
    <div className="col-md-4">
      <div className="testimonial-card">
        <span className="quote-icon">“</span>
        <img src={img} alt={name} className="client-img" />
        <p className="testimonial-text">
          {review}
        </p>
        <div className="card-divider"></div>
        <h5 className="client-name">{name}</h5>
      </div>
    </div>
  );
}