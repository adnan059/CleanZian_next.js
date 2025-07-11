import { Send } from "lucide-react";
import React from "react";

const ContactForm = () => {
  return (
    <div data-aos="fade-left" className="contactFormContainer">
      <h2>Keep In Touch</h2>
      <p>
        We prioritize responding to your inquiries promptly to ensure you
        receive the assistance you need in a timely manner
      </p>

      <form className="contactForm">
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
        />
        <input type="email" id="email" name="email" placeholder="Email" />
        <textarea name="message" id="message" placeholder="Message"></textarea>
        <button type="submit" className="contactSendMessageBtn">
          <Send />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
