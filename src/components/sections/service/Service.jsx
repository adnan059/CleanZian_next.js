import { serviceData } from "@/lib/data";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import servicePic from "@/assets/images/servicePic.png";

const Service = () => {
  return (
    <section className="service" id="service">
      <div className="sectionContainer">
        <div className="sectionHeader overflow-x-hidden">
          <h2 data-aos="fade-right" className="sectionTitle">
            We always provide the best service
          </h2>

          <div data-aos="fade-left" className="sectionInfo">
            <h3>Services</h3>
            <p>
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
          </div>
        </div>

        <div className="serviceContainer1 overflow-hidden">
          {serviceData?.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="serviceBox"
              key={service?.title}
            >
              <Image
                src={service?.pic}
                alt={service?.title}
                width={370}
                height={262}
              />

              <h3>{service?.title}</h3>

              <p>{service?.desc}</p>

              <button>
                <span>Book Now</span>
                <MoveUpRight />
              </button>
            </div>
          ))}
        </div>

        <div className="serviceContainer2">
          <div className="serviceContent">
            <p>Affordable Cleaning Solutions</p>
            <h2>High-Quality and Friendly Services at Fair Prices</h2>
            <p>
              We provide comprehensive cleaning services tailored to your needs.
              From residential cleaning services
            </p>
            <button>Get a Quote</button>
          </div>
          <div className="serviceImage">
            <Image
              src={servicePic}
              width={478}
              height={421}
              alt="service pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
