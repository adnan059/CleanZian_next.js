import { pricingData } from "@/lib/data";
import React from "react";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="sectionContainer">
        <div className="pricingContainer">
          <div className="priceHeader">
            <p>Our Pricing</p>
            <h2>
              Choose From Our Lowest <br />
              Plans and Prices
            </h2>
          </div>

          <div className="priceToggler">
            <button>Monthly</button>
            <button>Yearly</button>
          </div>

          <div className="packageContainer overflow-hidden">
            {pricingData?.map((pckge, index) => (
              <div
                data-aos="flip-up"
                data-aos-delay={index * 100}
                className="packageBox "
                key={pckge?.packageName}
              >
                <h3 className="packageTitle">{pckge?.packageName}</h3>
                <p className="packagePrice">
                  $ <span>{pckge?.price.toFixed(2)}/</span> Monthly
                </p>
                <ul className="packageDetails">
                  {pckge?.packageDetails?.map((point) => (
                    <li key={Math.random()}>
                      ● <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
