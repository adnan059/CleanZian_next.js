"use client";
import React, { useState } from "react";
import { feedbackData } from "@/lib/data";
import Image from "next/image";
import userAvatar from "@/assets/images/userAvatar.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? feedbackData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === feedbackData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="feedback" id="feedback">
      <div className="sectionContainer feedbackContainer">
        {/* Intro */}
        <div className="feedbackContent">
          <h2>Feedback About Their Experience With Us</h2>
          <p>
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes.
          </p>
        </div>

        {/* Slide */}
        <div className="feedbackSlide">
          <div className="feedbackBox">
            <div className="feedbackImage">
              <Image
                src={userAvatar}
                alt="User avatar"
                width={230}
                className="object-cover rounded-full"
              />
            </div>
            <div className="feedbackTexts">
              <h3>{feedbackData[currentIndex].name}</h3>
              <p>{feedbackData[currentIndex].profession}</p>
              <p>{feedbackData[currentIndex].feedback}</p>
            </div>
          </div>
        </div>

        {/* Nav Buttons */}
        <div className="controlButtons">
          <button onClick={handlePrev} className="navBtn">
            <ChevronLeft />
          </button>
          <button onClick={handleNext} className="navBtn">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
