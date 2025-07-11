import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section>
      <div className="sectionContainer">
        <div className="contactContainer overflow-hidden">
          <div data-aos="fade-right" className="contactInfo">
            <h2>Find Us</h2>

            <div className="contactPhone contactOption">
              <span>
                <PhoneCall />
              </span>
              <span>
                <h3>Call Us</h3>
                <a href="#">+(08)25XXXXXXX</a>
              </span>
            </div>

            <div className="contactEmail contactOption">
              <span>
                <Mail />
              </span>
              <span>
                <h3>Email Now</h3>
                <a href="#">cleanzian@example.com</a>
              </span>
            </div>

            <div className="contactLocation contactOption">
              <span>
                <MapPin />
              </span>
              <span>
                <h3>Address</h3>
                <p>123/25 Abc st, NY, USA</p>
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
