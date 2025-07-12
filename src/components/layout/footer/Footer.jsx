import Image from "next/image";
import React from "react";
import logoImg from "@/assets/images/logoImg.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerParts">
          <div className="footerPart1 footerPart">
            <div className="footerLogo">
              <Image src={logoImg} width={29} alt="cleanzian" />
              <div>
                <h3>
                  Clean<span>Zian</span>
                </h3>
                <p>Cleaning Services company</p>
              </div>
            </div>

            <p>
              Stay updated with our latest cleaning tips, service updates, and
              helpful articles on maintaining a spotless home.
            </p>
          </div>

          <div className="footerPart2 footerPart">
            <h3>Company</h3>
            <a href="#">about us</a>
            <a href="#">services</a>
            <a href="#">our team</a>
          </div>
          <div className="footerPart3 footerPart">
            <h3>know more</h3>
            <a href="#">support</a>
            <a href="#">privacy policy</a>
            <a href="#">terms & conditions</a>
          </div>
          <div className="footerPart4 footerPart">
            <h3>newsletter</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button>send</button>
          </div>
        </div>
        <hr className="separator" />
        <div className="credit">
          &copy; 2025 CleanZian — Designed & developed by Md. Adnan Faruk. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
