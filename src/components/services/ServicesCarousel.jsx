import React, { useState, useEffect } from "react";
import "./services.css";
import security from "./../../assets/images/security.png";
import approve from "./../../assets/images/appro.png";
import seo from "./../../assets/images/seo.png";
import settings from "./../../assets/images/settings.png";
import statics from "./../../assets/images/statics.png";
import services_2 from "./../../assets/images/services_2.png";

const slides = [
  { id: 1, title: "Security support 1", image: security },
  { id: 2, title: "Security support 2", image: approve },
  { id: 3, title: "Security support 3", image: seo },
  { id: 4, title: "Security support 4", image: settings },
  { id: 5, title: "Security support 5", image: statics },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(500);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Update slide width based on window size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSlideWidth(180);      // mobile
      else if (width < 1024) setSlideWidth(300); // tablet
      else setSlideWidth(500);                   // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="services container flex flex-col items-start sm:items-start lg:items-center">
      <div className="flex flex-col gap-8 items-center sm:items-start lg:items-center">
        <img src={services_2} alt="service" className="w-[185px] sm:w-[120px]" />
        <h1 className="font-[600] text-[28px] sm:text-[28px] md:text-[40px] lg:text-[50px] xl:text-[55px] text-[#FFFFF0]">
          Security support
        </h1>
      </div>

      <div className="carousel relative w-full flex justify-center items-center overflow-hidden mt-6">
        {slides.map((slide, index) => {
          let offset = index - activeIndex;
          if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
          if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

          const scaleFactor = 0.2;
          const scale = 1 - Math.abs(offset) * scaleFactor;

          // Horizontal translation based on slideWidth
          const translateX = offset * (slideWidth / 2 + (slideWidth * scale) / 2);
          const zIndex = 10 - Math.abs(offset);

          return (
            <div
              key={slide.id}
              className="carousel-slide absolute transition-transform duration-500"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
                opacity: scale < 0.2 ? 0 : 1,
                width: `${slideWidth}px`,
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto object-contain"
              />
            </div>
          );
        })}
      </div>

      <h1 className="text-[28px] sm:text-[28px] md:text-[40px] lg:text-[50px] xl:text-[60px] mt-6 text-[#FFFFF0] w-full text-center">
        {slides[activeIndex].title}
      </h1>
    </div>
  );
}
