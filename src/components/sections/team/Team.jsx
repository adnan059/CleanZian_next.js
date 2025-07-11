import { companyFeatures, teamData } from "@/lib/data";
import {
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Star,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import teamImg from "@/assets/images/teamImg.png";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="sectionContainer">
        <div className="sectionHeader overflow-x-hidden">
          <h2 data-aos="fade-right" className="sectionTitle">
            Effective Cleaning Requires an Expert Cleaning Team
          </h2>

          <div data-aos="fade-left" className="sectionInfo">
            <h3>Expert Team</h3>
            <p>
              We have professional expert cleaning staff ensuring top-notch
              cleanliness and hygiene for your space.
            </p>
          </div>
        </div>

        <div className="teamContainer1 overflow-hidden">
          {teamData?.map((member, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="memberBox "
              key={member?.id}
            >
              <Image
                src={member?.pic}
                width={370}
                height={300}
                alt={"member picture"}
              />

              <div className="memberContent">
                <h3 className="memberName">{member?.name}</h3>
                <div className="memberStars">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star size={17} key={Math.random()} />
                  ))}
                </div>
                <p className="memberDesc">{member?.desc}</p>
                <div className="memberSocials">
                  <a href="#">
                    <Facebook />
                  </a>
                  <a href="#">
                    <Twitter />
                  </a>

                  <a href="#">
                    <Instagram />
                  </a>
                  <a href="#">
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="teamContainer2">
          <div className="teamImage">
            <Image
              src={teamImg}
              width={535}
              height={442}
              alt={"team picture"}
            />
          </div>

          <div className="teamContent">
            <h2>Welcome To Our Pro-cleaning Company!</h2>
            <p>
              We make your space shine! Professional and reliable cleaning
              service company providing top-notch solutions for homes and
              businesses. Satisfaction guaranteed!"
            </p>

            <ul className="teamFeatures">
              {companyFeatures?.map((feature) => (
                <li key={feature} className="teamFeature">
                  <span className="teamFeatureTick">
                    <Check size={14} />
                  </span>
                  <span className="teamFeatureName">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="teamButtons">
              <button>Book Now</button>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
