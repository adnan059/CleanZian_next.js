import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="sectionContainer">
        <div className="heroContent overflow-x-hidden">
          <p data-aos="fade-down" className="heroSubtitle">
            Quality cleaning at a fair price
          </p>
          <h1 data-aos="fade-down" data-aos-delay="200" className="heroTitle">
            Specialized, efficient, and thorough cleaning services
          </h1>
          <p data-aos="fade-down" data-aos-delay="400" className="heroText">
            We provide Performing cleaning tasks using the least amount of time,
            energy, and money.
          </p>

          <div
            data-aos="fade-down"
            data-aos-delay="800"
            className="heroCtaButtons"
          >
            <button>Get Started Now</button>
            <button>View All Services</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
